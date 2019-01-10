package hp.member.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import hp.common.util.FileUtils;
import hp.member.dao.MemberDAO;
import hp.sample.dao.SampleDAO;

@Service("memberService")
public class MemberServiceImpl implements MemberService {
	
	Logger log = Logger.getLogger(this.getClass());

	@Resource(name = "fileUtils")
	private FileUtils fileUtils;

	@Resource(name = "memberDAO")
	private MemberDAO memberDAO;
	
	
	// 회원목록
	@Override
    public List<Map<String, Object>> selectMemberList(Map<String, Object> map) throws Exception{
		
		List<Map<String,Object>> memberList=  memberDAO.selectMemberList(map);	
		
		return memberList;	
	};
	
    // 회원가입
	@Override
    public void insertMember(Map<String, Object> map, HttpServletRequest request) throws Exception {
		
		memberDAO.insertMember(map);
	};
   
    // 회원상세보기
	@Override
    public List<Map<String, Object>> viewMember(Map<String, Object> map) throws Exception{
		
		List<Map<String,Object>> viewMember= memberDAO.viewMember(map);
		return viewMember;
	};

    // 회원수정
	@Override
    public void updateMember(Map<String, Object> map, HttpServletRequest request) throws Exception{
		
		memberDAO.updateMember(map);
	};
   
    // 회원삭제
    public void deleteMember(Map<String, Object> map) throws Exception{
    	
    	memberDAO.deleteMember(map);
    };
	
	
}
