package hp.member.service;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import hp.common.common.CommandMap;
 
public interface MemberService {
    
	// 회원목록
    public List<Map<String, Object>> selectMemberList(Map<String, Object> map) throws Exception;
   
    // 회원가입
    public List<Map<String, Object>> insertMember(Map<String, Object> map) throws Exception;
   
    // 회원상세보기
    public List<Map<String, Object>> viewMember(Map<String, Object> map) throws Exception;

    // 회원수정
    public void updateMember(Map<String, Object> map, HttpServletRequest request) throws Exception;
   
    // 회원삭제
    public void deleteMember(Map<String, Object> map) throws Exception;

	
}
 
