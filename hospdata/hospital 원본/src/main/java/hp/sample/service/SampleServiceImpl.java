package hp.sample.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import hp.common.util.FileUtils;
import hp.sample.dao.SampleDAO;

@Service("sampleService")
public class SampleServiceImpl implements MainService {
	Logger log = Logger.getLogger(this.getClass());

	@Resource(name = "fileUtils")
	private FileUtils fileUtils;

	@Resource(name = "sampleDAO")
	private SampleDAO sampleDAO;

	@Override
	public List<Map<String, Object>> selectBoardList(Map<String, Object> map) throws Exception {
		List<Map<String, Object>> tmpList = sampleDAO.selectBoardList(map);

		for (Map<String, Object> tmpMap : tmpList) {
			String str = "";

			for (int i = 1; i < (Integer) tmpMap.get("RE_LV"); i++)
				str += "&nbsp;";

			if (tmpMap.get("DEL_GB").equals("Y")) {
				str += "삭제된 게시글입니다.";
			} else {
				str += (String) tmpMap.get("TITLE");
			}

			tmpMap.remove("TITLE");
			tmpMap.put("TITLE", str);
		}
		return tmpList;
	}

	@Override
	public void insertBoard(Map<String, Object> map, HttpServletRequest request) throws Exception {
		sampleDAO.insertBoard(map);

		List<Map<String, Object>> list = fileUtils.parseInsertFileInfo(map, request);

		for (int i = 0, size = list.size(); i < size; i++) {
			sampleDAO.insertFile(list.get(i));
		}
	}

	@Override
	public void replyBoard(Map<String, Object> map) throws Exception {
		System.out.println(StringUtils.countOccurrencesOf((String) map.get("PARENT_IDX"), "-"));

		int re_lv = StringUtils.countOccurrencesOf((String) map.get("PARENT_IDX"), "-") + 1;
		String parent_idx = (String) map.get("PARENT_IDX") + "-" + String.format("%d", sampleDAO.replyBoardCount(map));

		map.remove("PARENT_IDX");

		map.put("re_lv", re_lv);
		map.put("PARENT_IDX", parent_idx);

		sampleDAO.replyBoard(map);
	}

	@Override
	public Map<String, Object> selectBoardDetail(Map<String, Object> map) throws Exception {
		sampleDAO.updateHitCnt(map);
		Map<String, Object> resultMap = new HashMap<String, Object>();
		Map<String, Object> tempMap = sampleDAO.selectBoardDetail(map);
		resultMap.put("map", tempMap);

		List<Map<String, Object>> list = sampleDAO.selectFileList(map);
		resultMap.put("list", list);

		return resultMap;
	}

	@Override
	public void updateBoard(Map<String, Object> map, HttpServletRequest request) throws Exception {
		sampleDAO.updateBoard(map);

		sampleDAO.deleteFileList(map);
		List<Map<String, Object>> list = fileUtils.parseUpdateFileInfo(map, request);

		for (Map<String, Object> tempMap : list) {
			if (tempMap.get("IS_NEW").equals("Y"))
				sampleDAO.insertFile(tempMap);
			else
				sampleDAO.updateFile(tempMap);
		}
	}

	@Override
	public void deleteBoard(Map<String, Object> map) throws Exception {
		sampleDAO.deleteBoard(map);
	}
}
