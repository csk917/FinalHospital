package web.hosp.link;

@Controller
@RequestMapping("/user")
public class MemberRegistController {

    private final UserService userService;

    @Inject
    public UserRegisterController(UserService userService) {
        this.userService = userService;
    }

    // 회원가입 페이지
    @RequestMapping(value = "/register", method = RequestMethod.GET)
    public String registerGET() throws Exception {
        return "/user/register";
    }

    // 회원가입 처리
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String registerPOST(CommandMap commandMap, RedirectAttributes redirectAttributes) throws Exception {

        String hashedPw = BCrypt.hashpw(commandMap.getUserPw(), BCrypt.gensalt());
        userVO.setUserPw(hashedPw);
        userService.register(commandMap);
        redirectAttributes.addFlashAttribute("msg", "REGISTERED");

        return "redirect:/user/login";
    }
    
}