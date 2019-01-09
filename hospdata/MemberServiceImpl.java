package web.hosp.link;

public class MemberServiceImpl implements MemberService{
	
	 private final CommandMap commandMap;

	    @Service
	    MemberService memberService;
	    
	    // 회원 가입 처리
	    @Override
	    public void register(UserVO userVO) throws Exception {
	        userDAO.register(userVO);
	    }
	    
	}