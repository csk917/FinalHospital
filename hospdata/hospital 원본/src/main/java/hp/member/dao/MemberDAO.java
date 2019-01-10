package hp.member.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import hp.common.dao.AbstractDAO;

@SuppressWarnings("unchecked")
@Repository("memberDAO")
public class MemberDAO extends AbstractDAO {
    
	// 회원목록
    public List<Map<String, Object>> selectMemberList(Map<String, Object> map) throws Exception{
    	return (List<Map<String, Object>>)selectList("member.selectMemberList", map);
    };
        
    // 회원입력
    public List<Map<String, Object>> insertMember(Map<String, Object> map) throws Exception{
    	return (List<Map<String, Object>>) insert("member.insertMember", map);
    };
    
    //  회원정보 상세
    public List<Map<String, Object>> viewMember(Map<String, Object> map) throws Exception{
    	return (List<Map<String, Object>>) selectOne("member.viewMember", map);
    };
     
    //  회원정보 수정
    public List<Map<String, Object>> updateMember(Map<String, Object> map) throws Exception{
    	return (List<Map<String, Object>>) update("member.updateMember", map);
    };  
    
    //  회원삭제
    public List<Map<String, Object>> deleteMember(Map<String, Object> map) throws Exception{
    	return (List<Map<String, Object>>) delete("member.deleteMember", map);
    };  
    
}
 
