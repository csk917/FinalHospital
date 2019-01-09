function service_order(){
	var fm = document.left_menu_frm;
	//fm.sub_menu.value=arg;
	//fm.goalPage.value = arg;
	fm.target="main";
	fm.action="service_order.do";
	fm.submit();

}

function evermedi_info(){

	var fm = document.left_menu_frm;
	fm.target="main";
	fm.action="evermedi_info.do";
	fm.submit();
}

function mobile_guide(){

	var fm = document.left_menu_frm;
	fm.target="main";
	fm.action="mobile_guide.do";
	fm.submit();
}

function h_manual(){

	var settings='height=600,width=900,top=10,left=10,scrollbars=yes,resizable=yes,status=no,toolbar=no,location=no,menu=no';
	//var targetUrl = "/common/zipcodeSearch.jsp";
	var targetUrl = "manual_h.do";
	var frameName = "manual_h";

	window.open(targetUrl,frameName,settings);
}

function x_manual(){

	var settings='height=800,width=600,top=20,left=200,scrollbars=yes,resizable=yes,status=no,toolbar=no,location=no,menu=no';
	var targetUrl = "/inc/ma/activex_manual.html";
	var frameName = "manual";

	window.open(targetUrl,frameName,settings);
}

function vista(){

	var settings='height=800,width=600,top=20,left=200,scrollbars=yes,resizable=yes,status=no,toolbar=no,location=no,menu=no';
	var targetUrl = "/inc/ma/vista_manual.html";
	var frameName = "manual";

	window.open(targetUrl,frameName,settings);
}

function join_manual(){

	var settings='height=800px,width=670px,top=20,left=200,scrollbars=yes,resizable=no,status=no,toolbar=no,location=no,menu=no';
	var targetUrl = "/inc/ma/join_manual.html";
	var frameName = "manual";

	window.open(targetUrl,frameName,settings);
}

function search_guide(){

	var fm = document.left_menu_frm;
	fm.target="main";
	fm.action="search_guide.do";
	fm.submit();
}

function reservation_guide(){

	var fm = document.left_menu_frm;
	fm.target="main";
	fm.action="reservation_guide.do";
	fm.submit();
}

function leftImgMenu(arg){
	var fm = document.left_menu_frm;

	fm.target="main";
	fm.action=arg;
	fm.submit();

}


function setMenuName(formName,val){
	
	var fm = document.forms[formName];
	
	if(fm.menu_name!=null)
		fm.menu_name.value=val;
	
	
}