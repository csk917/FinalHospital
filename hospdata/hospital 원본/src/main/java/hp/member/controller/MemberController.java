package hp.member.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import hp.member.service.MemberService;

@Controller // 현재의 클래스를 controller bean에 등록시킴
@RequestMapping("/member")
public class MemberController {
	Logger log = Logger.getLogger(this.getClass());

	@Resource(name = "memberService")
    private MemberService memberService;
    
    // 01 회원 목록
    @RequestMapping("/list")
    public ModelAndView memberList(Map<String,Object> commandMap) throws Exception{
// controller => service => dao 요청
    	ModelAndView mv= new ModelAndView("member/list");
    	
        List<Map<String, Object>> list = memberService.selectMemberList(commandMap);
       
        mv.addObject("list", list);
        return mv;
    }
    
    // 02_01 회원 등록 페이지로 이동
    @RequestMapping(value="/register", method=RequestMethod.GET)
    public ModelAndView memberForm() throws Exception{
    	
    	ModelAndView mv=new ModelAndView("member/register");
    	
    	return mv;
    }
    
    // 02_02 회원 가입 처리
    @RequestMapping(value="/register", method=RequestMethod.POST)
    public ModelAndView memberWrite(Map<String,Object> commandMap, RedirectAttributes redirectAttributes ) throws Exception{
    	
    	ModelAndView mv=new ModelAndView("redirect: memberList/register");
    	
    	//String hashedPw=BCrypt.hashpw(commandMap.keySet().getPwd(),BCrypt.gensalt());
    	//commandMap.keySet().setPwd(hashedPw);
    	
    	
    //	List<Map<String,Object>> register= memberService.insertMember(commandMap);
    	redirectAttributes.addFlashAttribute("msg","REGISTERED");
    	
    //	mv.addObject("register",register);
    	
    	return mv;
    }
    
    // 03_01 로그인
    @RequestMapping(value="/login", method=RequestMethod.GET)
	public ModelAndView loginForm() throws Exception{
    	
    	ModelAndView mv=new ModelAndView("member/login");
    	
    	return mv;
    }
}
 