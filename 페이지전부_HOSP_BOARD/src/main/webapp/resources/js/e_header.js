function toMain(){
	location.href = "main.do";
}

function topMenuCommand(arg1){

	var fm = document.e_header_frm;

	fm.topMenu.value = arg1;

	fm.target = "_self";

	if(arg1 == "myroom"){
		fm.goalPage.value = "myroom.do";
		fm.action="myroom.do";
	}else if(arg1 == "search"){
		fm.goalPage.value = "host_search.do";
		fm.action="topMenuCommand.do";
	}else if(arg1 == "reserve"){
		fm.goalPage.value = "reserve_host_search.do";
		fm.action="topMenuCommand.do";
	}else if(arg1 == "valuation"){
		fm.goalPage.value = "all_evalue.do";
		fm.action="topMenuCommand.do";
	}else if(arg1 == "medinfo"){
		fm.goalPage.value = "medinfo_1.do";
		fm.action="topMenuCommand.do";
	}else if(arg1 == "support"){
		fm.goalPage.value = "notice_list.do";
		fm.action="topMenuCommand.do";
	}
	fm.submit();
	
	//callMenu();
	
}
