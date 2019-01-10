package hp.sample.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import hp.common.dao.AbstractDAO;

@SuppressWarnings("unchecked")
@Repository("sampleDAO")
public class SampleDAO extends AbstractDAO {
	public List<Map<String, Object>> selectBoardList(Map<String, Object> map) throws Exception{
//		return (List<Map<String, Object>>) selectList("sample.selectBoardList", map);
		return (List<Map<String, Object>>) selectPagingList("sample.selectBoardList", map);
	}

	public List<Map<String, Object>> selectFileList(Map<String, Object> map) throws Exception{
		return (List<Map<String, Object>>)selectList("sample.selectFileList", map);
	}
	public void insertBoard(Map<String, Object> map) throws Exception{
		insert("sample.insertBoard", map);
	}
	
	public void insertFile(Map<String, Object> map) throws Exception {
		insert("sample.insertFile", map);
	}
	public void replyBoard(Map<String, Object> map) throws Exception{
		insert("sample.replyBoard", map);
	}
	
	public int replyBoardCount(Map<String, Object> map) throws Exception{
		return (Integer) selectOne("sample.selectReplyBoardCount", map);
	}	

	public void updateHitCnt(Map<String, Object> map) throws Exception{
		update("sample.updateHitCnt", map);
	}

	public Map<String, Object> selectBoardDetail(Map<String, Object> map) throws Exception{
		return (Map<String, Object>) selectOne("sample.selectBoardDetail", map);
	}

	public void updateBoard(Map<String, Object> map) throws Exception{
		update("sample.updateBoard", map);
	}
	
	public void updateFile(Map<String, Object> map) throws Exception{
		update("sample.updateFile", map);
	}
	
	public void deleteBoard(Map<String, Object> map) throws Exception{
		update("sample.deleteBoard", map);
	}
	
	public void deleteFileList(Map<String, Object> map) throws Exception{
		update("sample.deleteFileList", map);
	}
}
