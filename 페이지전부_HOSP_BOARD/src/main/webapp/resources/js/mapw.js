function field_search(arg){

	var fm = document.mainfrm;
	
	if(fm.dong != null){
		if(fm.dong.value == "읍,면,동 기준으로 입력해주세요"){
			fm.dong.value = "";
		}

	}

	fm.h_name.value = Trim(fm.h_name.value);
	if(fm.h_name.value == "예) 연세내과"){		
		fm.h_name.value = "";
	}

	if(fm.h_name.value == "") {
		return;
	}
	//fm.target = "main";
	fm.action = arg;

	fm.submit();
}

function mapWindow(x,y,scale,title)
{
	var fm = document.mainfrm;
	x = Math.round(x*100);
	y = Math.round(y*100);

	//alert(x);
	//alert(y);

	//alert(title);
	
	if (title==null)
	{
		title="";
	}else{
		fm.goon.value = title;
	}
	var tmpstr = "/field_search.do";
	
	if(command == "/pcsjt_search.do") {
		tmpstr = "/pcsjt_search.do";
	}else if(command == "/emergency_search.do") {
		tmpstr = "/emergency_search.do";
	}else if(command == "/holiday_search.do") {
		tmpstr = "/holiday_search.do";
	}else if(command == "/sunday_search.do") {
		tmpstr = "/sunday_search.do";
	}else if(command == "/newyear_search.do") {
		tmpstr = "/newyear_search.do";
	}else if(command == "/thanks_search.do") {
		tmpstr = "/thanks_search.do";
	}else if(command == "/night_search.do") {
		tmpstr = "/night_search.do";
	}
	
	field_search(tmpstr);
}