package hp.sample.controller;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hp.common.common.CommandMap;
import hp.sample.service.MainService;

@Controller
public class SampleController {
	Logger log = Logger.getLogger(this.getClass());

	@Resource(name = "sampleService")
	private MainService sampleService;

	@RequestMapping(value = "/LastLine")
	public ModelAndView openBoardList(CommandMap commandMap) throws Exception {
		ModelAndView mv = new ModelAndView("/LastLine");

		return mv;
	}
	
}
