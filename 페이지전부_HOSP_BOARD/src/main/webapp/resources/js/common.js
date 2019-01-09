var fromFormName = "";

var xyMapping = ""; // 1 : 매핑,  2 : 해당병원 없음
var hospitalSeq = "";
var setAddress = "F";
var zipcode = "";
var addr = "";
var addr2 = "";
var goon_tmp = "";
var onclickCheck = 'X';

var hospitalDB;

function v_reservation(arg){
	location.href="reservation.do?code="+arg;
}

function v_evalue(){
	location.href="evalue.do?mode=e_key";
}

function v_load(arg){
	location.href="viewBlog.do?blog_h_code="+arg;
}

// 이메일 직접입력 체크
function setEmail(arg){
	var fm = eval("document."+arg);
	if(fm.e_mail_com.value == "999") {
		fm.e_mail_set.style.visibility = "visible";
	}else {
		fm.e_mail_set.style.visibility = "hidden";
	}
}




// 병원DB 를 위한 객체
function addHospitalDB(zipcode, sido, sigungu, dong, ri, s_no, delivery){


	this.zipcode = zipcode;					// 우편번호
	this.sido = sido;						// 시도
	this.sigungu = sigungu;					// 시군구
	this.dong = dong;						// 읍면동
	this.ri = ri;							// 리
	this.s_no = s_no;						// 번지
	this.delivery = delivery;				// 배달처	
}

function setAddHospitalDB(zipcode, sido, sigungu, dong, ri, s_no, delivery){
	hospitalDB = new addHospitalDB(zipcode, sido, sigungu, dong, ri, s_no, delivery);
	setAddress = "T";
}


// 병원DB 를 위한 객체
function addHospitalDB_new(zipcode, sido, sigungu, dong, ri, s_no, delivery, seq){
	this.zipcode = zipcode;					// 우편번호
	this.sido = sido;						// 시도
	this.sigungu = sigungu;					// 시군구
	this.dong = dong;						// 읍면동
	this.ri = ri;							// 리
	this.s_no = s_no;						// 번지
	this.delivery = delivery;				// 배달처
	this.seq = seq;				// seq
	//alert(" : " + sido + " : " + sigungu + " : " + dong + " : " + ri + " : " + s_no + " : " + delivery + " : " + seq);
}

function setAddHospitalDB(zipcode, sido, sigungu, dong, ri, s_no, delivery, seq){	
	hospitalDB = new addHospitalDB_new(zipcode, sido, sigungu, dong, ri, s_no, delivery, seq);
	setAddress = "T";
}


function checkOrgNo(arg1, arg2){

	var fm = eval("document."+arg2);
	var orgNo = "";
	var sido = "";

	if(hospitalDB != null){
		sido = hospitalDB.sido;
	}else{
		sido = fm.sido.value;
	}
	var firstNo = arg1.substring(0,2);

	if(sido == "서울")
		orgNo = "11";
	else if(sido == "부산")
		orgNo = "21";
	else if(sido == "인천" || sido == "경기")
		orgNo = "31";
	else if(sido == "강원")
		orgNo = "32";
	else if(sido == "충북")
		orgNo = "33";
	else if(sido == "대전" || sido == "충남")
		orgNo = "34";
	else if(sido == "전북")
		orgNo = "35";
	else if(sido == "광주" || sido == "전남")
		orgNo = "36";
	else if(sido == "대구" || sido == "경북")
		orgNo = "37";
	else if(sido == "울산" || sido == "경남")
		orgNo = "38";
	else if(sido == "제주")
		orgNo = "39";

	if(sido == "서울"){
		if(firstNo == "11" || firstNo == "12" )
			return true;
		else
			return false;
	}else{
		if(orgNo == firstNo)
			return true;
		else
			return false;
	}
	
}

function upPass(arg){

	var fm_login = eval("document."+arg);

	if(!checkPassForm(arg)){
		return;
	}

// 20160302 jm. rsa 때문에 추가. s.
	var fm = document.main;	
	fm.old_pass_rsa.value = Trim(fm_login.old_pass.value);
	fm.new_pass_1_rsa.value = Trim(fm_login.new_pass_1.value);
	fm.new_pass_2_rsa.value = Trim(fm_login.new_pass_2.value);

	/***************************/
	var private_ = document.getElementById("private").innerHTML ;
	var public_ = document.getElementById("public").innerHTML ;

	// Javascript RSA 객체 생성
	var rsa = new ssRsa(public_);
	//var rsa_form = $('form[rsa]');
	$('form[rsa]').find(':input[name*=ssRsaForm]').remove();
	$('form[rsa]').find(':input').each(function(){
		
		var $obj	= $(this) ,
			type	= $obj.attr('type') ,
			name	= $obj.attr('name') ,
			value	= $.trim($obj.val()) ;
		if ( value == '' )
			return ;
		if ( type == undefined )
			type	= $obj[0].nodeName ;

		switch ( type.toLowerCase() )
		{
			case 'submit' :
			case 'button' :
			case 'file' :
				break ;
			//case 'select' :
			//	alert("value : "+value );
			//	$obj.children('[value=' + value + ']').attr('value',rsa.encrypt(value));
			//	alert("value : "+rsa.encrypt(value) );
			//	break ;
			case 'radio' :

			case 'checkbox' :
				if ( $obj.prop('checked') )
					$obj.val(rsa.encrypt(value));
				break ;
			default :
			
				$obj.val(rsa.encrypt(value));
				break ;
		}
	});
	$('form[rsa]').append('<input type="hidden" name="ssRsaForm" value="1">');
// 20160302 jm. rsa 때문에 추가. e.

	fm.target="_self";
	fm.action = "modDoctorPasswRec.do";	
	fm.submit();
}

function checkPassForm(arg){
	var fm = eval("document."+arg);

	if(Trim(fm.old_pass.value)==""){
		alert("이전 비밀번호를 입력해 주세요!");
		fm.old_pass.focus();
		return false;
	}
	
	if(fm.old_pass.value.length < 6 || fm.old_pass.value.length > 10){
		alert("비밀번호는 6자 이상 10자 이하이여야 합니다!");
		fm.old_pass.focus();
		return false;
	}

	if(Trim(fm.new_pass_1.value)==""){
		alert("신규 비밀번호를 입력해 주세요!");
		fm.new_pass_1.focus();
		return false;
	}

	if(fm.new_pass_1.value.length < 6 || fm.new_pass_1.value.length > 10){
		alert("비밀번호는 6자 이상 10자 이하이여야 합니다!");
		fm.new_pass_1.focus();
		return false;
	}


	if(Trim(fm.new_pass_1.value)!=""  && Trim(fm.new_pass_2.value)==""){
		alert("비밀번호를 확인해 주세요!");
		fm.new_pass_2.focus();
		return false;
	}

	if(fm.new_pass_1.value != fm.new_pass_2.value){
		alert("비밀번호를 다시 확인 해 주세요!");
		fm.new_pass_2.focus();
		return false;
	}

	return true;
}

function login(arg){
	
	var fm = eval("document."+arg);

	if(fm.checksaveid.checked){
		saveid(eval("document."+arg));
	}else if(!fm.checksaveid.checked){
		delid(eval("document."+arg));
	}

	//20100918 jm. 패스워드도 저장되게
	if(fm.checksavepw.checked){
		savepw(eval("document."+arg));
	}else if(!fm.checksavepw.checked){
		delpw(eval("document."+arg));
	}

	fm.login_mode.value = "login";

	fm.target="main";
	fm.action="login.do";
	fm.submit();

	/*if(location.port == 9000 || location.port == 9007|| location.port == 9814){
		if(checkSsUnet()){
			fm.submit();
		}else{
			//location.href="check_plugin.do";
			var settings='height=500,width=600,top=150,left=330,scrollbars=no,resizable=no,status=no,toolbar=no,location=no,menu=no';
			var targetUrl = "check_plugin.do";
			var frameName = "plugincheckPop";

			window.open(targetUrl,frameName,settings);
		}
	}else{
		
		if(checkSsUnet()){
			unetSubmitEx(fm);
		}else{
			//location.href="check_plugin.do";
			var settings='height=500,width=600,top=150,left=330,scrollbars=no,resizable=no,status=no,toolbar=no,location=no,menu=no';
			var targetUrl = "check_plugin.do";
			var frameName = "plugincheckPop";

			window.open(targetUrl,frameName,settings);
		}
	}*/
}

function toplogin(arg){

	var fm = eval("document."+arg);

	fm.login_mode.value = "loginForm";

	fm.target="main";
	fm.action="login.do";
	fm.submit();
	//alert("로그인 합시다");
}

function sitemap(arg){

	var fm = eval("document."+arg);

	fm.target="main";
	fm.action="sitemap.do";
	fm.submit();
}

function logout(arg){
	//alert("logout");
	if(confirm("로그아웃 하시겠습니까?")){
		var fm = eval("document."+arg);
		
		fm.login_mode.value = "logout";
		//fm.target="_self";

		fm.action="logout.do";
		//fm.submit();
		//alert("로그아웃 합시다");
		fm.submit();
	}
}

function pressLogin(arg){
	var fm = eval("document."+arg);
	if(event.keyCode == 13){
		if(Trim(fm.id.value)==""){
			fm.id.focus();
			return;
		}
		if(Trim(fm.pw.value)==""){
			fm.pw.focus();
			return;
		}else {
			snaplogin(arg);
		}
	}
}

function pressLogin2(arg_submit,arg_loginform){
	var fm = eval("document."+arg_loginform);
	if(event.keyCode == 13){
		if(Trim(fm.id.value)==""){			
			fm.id.focus();
			return;
		}
		if(Trim(fm.pw.value)==""){			
			fm.pw.focus();
			return;
		}else {
			snaplogin(arg_submit,arg_loginform);
		}
	}
}


function pressLoginpass(arg){
	var fm = eval("document."+arg);
	if(event.keyCode == 13){
		if(Trim(fm.id.value)==""){
			alert("ID를 입력해 주세요!!!");
			fm.id.focus();
			return;
		}
		if(Trim(fm.pw.value)==""){
			alert("비밀번호를 입력해 주세요!!");
			fm.pw.focus();
			return;
		}else {
			snaplogin(arg);
		}
	}
}

function snaplogin(arg){
	
	var fm = eval("document."+arg);	
	
	if(Trim(fm.id.value)==""){
	//if(fm.id.value == ""){ 
		alert("ID를 입력해 주세요!!");
		fm.id.focus();
		return;
	}
	
	if(Trim(fm.pw.value)==""){
	//if(fm.pw.value == ""){
		alert("비밀번호를 입력해 주세요!!");
		fm.pw.focus();
		return;
	}
	
	 login(arg);
}

/*
 jh 추가 fucntion start.. 로그인폼에서 인크립트 보여주지 않으려고 폼을 두개 만들어 처리 
*/

function pressLoginpass(arg_submit,arg_loginform){
	var fm = eval("document."+arg_loginform);
	if(event.keyCode == 13){
		if(Trim(fm.id.value)==""){
			alert("ID를 입력해 주세요!!1");
			fm.id.focus();
			return;
		}
		if(Trim(fm.pw.value)==""){
			alert("비밀번호를 입력해 주세요!!1");
			fm.pw.focus();
			return;
		}else {
			snaplogin(arg_submit,arg_loginform);
		}
	}
}

function snaplogin(arg_submit, arg_loginform){
	//console.log("common.js snaplogin 1 ==> " + arg_submit + " : " + arg_loginform);
	var fm = eval("document."+arg_loginform);	
	
	var id = Trim(fm.id.value);			
	if(id == ""){
	//if(fm.id.value == ""){ 
		alert("ID를 입력해 주세요!!!!");
		fm.id.focus();
		return;
	}

	var len = id.length;
	var wordLen = 0; //영문숫자 개수
	for(i = 0; i < len; i++) { 
		var a = id.charCodeAt(i); 
		
		if( ((a > 96) && (a < 123)) || ((a > 64) && (a < 91)) ){
			wordLen = wordLen + 1;
		}
		//console.log("==> " + a);
		if (!(((a > 96) && (a < 123)) || ((a > 47) && (a < 58)) || ((a > 64) && (a < 91)) || (a == 45))) {  //20160405 jm. a가 45는 -(하이픈). 원장님 아이디에 - 가 있어서 추가.
			alert("ID는 영문과 숫자만 사용할 수 있습니다."); 
			fm.id.value = "";
			return;
		}
	}
	
	if(Trim(fm.pw.value)==""){
	//if(fm.pw.value == ""){
		alert("비밀번호를 입력해 주세요!!");
		fm.pw.focus();
		return;
	}
	//console.log("common.js snaplogin 2 ==> " + arg_submit + " : " + arg_loginform);
	 login(arg_submit,arg_loginform);
}


function login(arg_submit, arg_loginform){
	

	var fm = eval("document."+arg_submit);
	var fm_login = eval("document."+arg_loginform);
	fm.login_mode.value = "login";
	fm.id_rsa.value = Trim(fm_login.id.value);
	fm.pw_rsa.value = Trim(fm_login.pw.value);

	if(document.getElementById("checksaveid").checked){		
		saveid(fm_login);
	}else if(!document.getElementById("checksaveid").checked){		
		delid(fm_login);
	}
	
	//20100918 jm. 패스워드도 저장되게
	if(document.getElementById("checksavepw").checked){
		savepw(fm_login);
	}else if(!document.getElementById("checksavepw").checked){
		delpw(fm_login);
	}


/***************************/
		var private_ = document.getElementById("private").innerHTML ;
		var public_ = document.getElementById("public").innerHTML ;
		
		// Javascript RSA 객체 생성
		var rsa = new ssRsa(public_);
//console.log("common.js login ==> arg_submit : " + arg_submit + ", arg_loginform : " + arg_loginform);			
		//var rsa_form = $('form[rsa]');
		$('form[rsa]').find(':input[name*=ssRsaForm]').remove();
		//alert($('form[rsa]').find(':input[name*=id_rsa]'));
		$('form[rsa]').find(':input').each(function(){
			
			var $obj	= $(this) ,
				type	= $obj.attr('type') ,
				name	= $obj.attr('name') ,
				value	= $.trim($obj.val()) ;
			//console.log("common.js login 1 ==> name : " + name + ", value : " + value);			
			if ( value == "" )
				return ;

			if( name == "code" ||  name == "h_code")
					return ;
			//console.log("common.js login 2 ==> name : " + name + ", value : " + value);			
			if ( type == undefined )
				type	= $obj[0].nodeName ;
			switch ( type.toLowerCase() )
			{
				case 'submit' :
				case 'button' :
				case 'file' :
					break ;
				//case 'select' :
				//	alert("value : "+value );
				//	$obj.children('[value=' + value + ']').attr('value',rsa.encrypt(value));
				//	alert("value : "+rsa.encrypt(value) );
				//	break ;
				case 'radio' :

				case 'checkbox' :
					if ( $obj.prop('checked') )
						$obj.val(rsa.encrypt(value));
					break ;
				default :
				
					$obj.val(rsa.encrypt(value));
					break ;
			}
		});
		
		$('form[rsa]').append('<input type="hidden" name="ssRsaForm" value="1">');
	//console.log("common.js login 3 ==> " + fm.code.value);			
	//fm.target="main";
	fm.action="login.do";
	fm.submit();


}

/*
jh 추가 회원정보 수정시 비밀번호 체크 
*/
function memberMod_checkidpw(arg_submit,arg_loginform,action){
	
	var fm = eval("document."+arg_submit);
	var fm_login = eval("document."+arg_loginform);
	fm.id_rsa.value = Trim(fm_login.id.value);
	fm.pw_rsa.value = Trim(fm_login.pw.value);

	/***************************/
	var private_ = document.getElementById("private").innerHTML ;
	var public_ = document.getElementById("public").innerHTML ;
		
	// Javascript RSA 객체 생성
	var rsa = new ssRsa(public_);
	//var rsa_form = $('form[rsa]');
	$('form[rsa]').find(':input[name*=ssRsaForm]').remove();
	$('form[rsa]').find(':input').each(function(){
		
		var $obj	= $(this) ,
			type	= $obj.attr('type') ,
			name	= $obj.attr('name') ,
			value	= $.trim($obj.val()) ;
		if ( value == '' )
			return ;
		if ( type == undefined )
			type	= $obj[0].nodeName ;

		switch ( type.toLowerCase() )
		{
			case 'submit' :
			case 'button' :
			case 'file' :
				break ;
			//case 'select' :
			//	alert("value : "+value );
			//	$obj.children('[value=' + value + ']').attr('value',rsa.encrypt(value));
			//	alert("value : "+rsa.encrypt(value) );
			//	break ;
			case 'radio' :

			case 'checkbox' :
				if ( $obj.prop('checked') )
					$obj.val(rsa.encrypt(value));
				break ;
			default :
			
				$obj.val(rsa.encrypt(value));
				break ;
		}
	});
	$('form[rsa]').append('<input type="hidden" name="ssRsaForm" value="1">');

	//fm.target="main";
	fm.action=action;
	fm.submit();


}
/*
 jh 추가 fucntion end.. 로그인폼에서 인크립트 보여주지 않으려고 폼을 두개 만들어 처리 
*/



function loginNoMember(arg){
	var fm = eval("document."+arg);

	fm.login_mode.value = "loginNoMember";

	fm.target="main";
	fm.action="login.do";
	fm.submit();

}

function pressLoginNoMember(arg){
	if(event.keyCode == 13){
		snaploginNoMember(arg);
	}
}

function snaploginNoMember(arg){
	var fm = eval("document."+arg);
	if(Trim(fm.cl_nm.value)==""){
		alert("이름을 입력해 주세요!!");
		fm.cl_nm.focus();
		return;
	}

	if(Trim(fm.cl_tel.value)==""){
		alert("전화번호를 입력해 주세요!!");
		fm.cl_tel.focus();
		return;
	}

	if(Trim(fm.chk_key.value)==""){
		alert("인증번호를 입력해 주세요!!");
		fm.chk_key.focus();
		return;
	}

	loginNoMember(arg);
}

function join(arg,seq,form){	

	 var agent = navigator.userAgent.toLowerCase(); 
	 //console.log("==> " + agent);
	 if ( agent.search("edge/") > -1 ) {
		 alert("현재 사용하신 웹브라우저는 Microsoft Edge(엣지)입니다.\nEdge는 회원가입이 안됩니다.\n다른 웹브라우저(크롬, 사파리)나 인터넷 익스플로어(IE)로 가입해주세요.");
		 //window.close();
		 return;
	 }

	var fm = eval("document."+form);
	fm.join_type.value = arg;

	var targetUrl = "";
/*
	if(!(seq == "2" || seq == "3")){

		// 회원가입시 비스타 체크후 팝업띄우기
		if(navigator.appName == "Microsoft Internet Explorer") {
			var Agent = navigator.userAgent;
			Agent = Agent.toLowerCase();
			if(Agent.indexOf("nt 6.") > 0) { //비스타
	
			
				//var settings='height=800,width=600,top=20,left=200,scrollbars=yes,resizable=yes,status=no,toolbar=no,location=no,menu=no';
				//var targetUrl = "/inc/ma/vista_join.html";
				//var frameName = "manual";

				//window.open(targetUrl,frameName,settings);
				
				

				fm.target="_self";
				fm.action="join_vista.do?arg="+arg+"&seq="+seq+"&form="+form;
				fm.submit();
				return;
			}
		}
	}
*/
	if(seq == "1" ){
		
			targetUrl = "join_step1.do";
			//20130616 jm. 회원 가입은 실명인증 없이 그냥 받고 예약할시에 주민번호 체크 하기로 함.
//			if(arg=="M"){
//				targetUrl = "ssnoCheck.do";
//			}else{
//				targetUrl = "join_step1.do";
//			}
		//}
		
	}else if(seq == "2"){
		targetUrl = "join_step2.do";
		if(!fm.join_agree.checked){
			alert("약관에 동의하셔야만 가입하실 수 있습나다!   ");
			return;
		}
	}else if(seq == "3"){
		targetUrl = "join_step3.do";
	}
	

	fm.target="_self";
	fm.action=targetUrl;

	fm.submit();
}

function join_vista(arg,seq,form){
	var fm = eval("document."+form);
	fm.join_type.value = arg;

	var targetUrl = "";

	if(seq == "1"){		
			targetUrl = "join_step1.do";
			//20130612 jm. 회원 가입은 실명인증 없이 그냥 받고 예약할시에 주민번호 체크 하기로 함.
//			if(arg=="M"){
//				targetUrl = "ssnoCheck.do";
//			}else{
//				targetUrl = "join_step1.do";
//			}
		//}
	}else if(seq == "2"){
		targetUrl = "join_step2.do";
		if(!fm.join_agree.checked){
			alert("약관에 동의하셔야만 가입하실 수 있습나다!   ");
			return;
		}
	}else if(seq == "3"){
		targetUrl = "join_step3.do";
	}
	//alert(targetUrl);

	fm.target="_self";
	fm.action=targetUrl;

	fm.submit();
}

function mod_info(arg){
	if(arg == "4"){
		location.href="modDoctorPasswd.do";
	}else{
		location.href="modMemberInfo.do";
	}
}


function idCheck(arg){
	fromFormName = arg;

	var fm = eval("document."+arg);
	fm.id.value = Trim(fm.id.value); //20180916 jm. 추가

	if( fm.id.value == "" ){
		alert("ID를 입력해 주세요!");
		fm.id.focus();
		return;
	}

	if(!idFormatCheck(arg)){
		fm.id.focus();
		return;
	}

	if(fm.id.value.length < 5){
		alert("ID 는 5자 이상이어야 합니다");
		fm.id.focus();
		return;
	}

	var settings='height=201,width=430,top=100,left=330,scrollbars=no,resizable=no,status=no,toolbar=no,location=no,menu=no';
	//var targetUrl = "/common/idDuplicateCheck.jsp";
	var targetUrl = "idCheck.do";
	var frameName = "checkPop";
	window.open(targetUrl,frameName,settings);

	//fm.target=frameName;
	//fm.action=targetUrl;
	//fm.submit();
	
}

function idFormatCheck(arg){
	var fm = eval("document."+arg);
	var len = fm.id.value.length;
	var wordLen = 0; //영문숫자 개수
	
	for(i=0; i<len; i++) { 
		var a=fm.id.value.charCodeAt(i); 

		//alert(a);

		/*
		if(a > 128){
			alert('ID는 영문과 숫자만 사용할 수 있습니다.'); 
			fm.id.value="";
			fm.id.value.focus(); 
			return false;
		}
		*/
		if( ((a>96)&&(a<123)) || ((a>64)&&(a<91)) ){
			wordLen = wordLen + 1;
		}

		if (!(    ((a > 96) && (a < 123))   || ((a > 47) && (a < 58)) || ((a > 64) && (a < 91)) ) ) {

			alert('ID는 영문과 숫자만 사용할 수 있습니다.'); 
			fm.id.value="";
			return false;
		}
	}

	if(wordLen == 0){
		alert('숫자만으로 ID를 생성할 수 없습니다.'); 
		return false;
	}

	return true;

}

function pressSearch(arg){	
	if(event.keyCode == 13){
		field_search(arg);
	}
}


function loginForward(arg){
	var fm = document.logined_frm;
	fm.target="main";
	fm.action=arg;
	fm.submit();

}

//20171114 김태응 우편번호 검색 수정
function initLayerPosition(){
	var element_layer = document.getElementById('zipCodeIframe');
	var width = 500; //우편번호서비스가 들어갈 element의 width
	var height = 400; //우편번호서비스가 들어갈 element의 height
	var borderWidth = 3; //샘플에서 사용하는 border의 두께

	// 위에서 선언한 값들을 실제 element에 넣는다.
	element_layer.style.width = width + 'px';
	element_layer.style.height = height + 'px';
	element_layer.style.border = borderWidth + 'px solid';
	// 실행되는 순간의 화면 너비와 높이 값을 가져와서 중앙에 뜰 수 있도록 위치를 계산한다.
	element_layer.style.left = (((window.innerWidth || document.documentElement.clientWidth) - width)/2 - borderWidth) + 'px';
	element_layer.style.top = (((window.innerHeight || document.documentElement.clientHeight) - height)/2 - borderWidth) + 'px';
}

//20171114 김태응 우편번호 검색 수정
function zipCodeSearch(arg1,arg2,arg3,arg4){
	if(arg1 === undefined)
	{
		var element_wrap = document.getElementById('zipCodeIframe');
		// 현재 scroll 위치를 저장해놓는다.
		var currentScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
		daum.postcode.load(function() 
		{
			new daum.Postcode({
				oncomplete: function(data) 
				{
					// 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
		
					// 각 주소의 노출 규칙에 따라 주소를 조합한다.
					// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
					var fullAddr = data.address; // 최종 주소 변수
					var extraAddr = ''; // 조합형 주소 변수
		
					// 기본 주소가 도로명 타입일때 조합한다.
					if(data.addressType === 'R')
					{
						//법정동명이 있을 경우 추가한다.
						if(data.bname !== '')
						{
							extraAddr += data.bname;
						}
						// 건물명이 있을 경우 추가한다.
						if(data.buildingName !== '')
						{
							extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
						}
						// 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
						fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
					}
		
					// 우편번호와 주소 정보를 해당 필드에 넣는다.

					document.getElementById('home_zipcode_1').value = data.zonecode; //5자리 새우편번호 사용
					document.getElementById('home_addr1').value = fullAddr;
		
					// iframe을 넣은 element를 안보이게 한다.
					// (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
					element_wrap.style.display = 'none';
		
					// 우편번호 찾기 화면이 보이기 이전으로 scroll 위치를 되돌린다.
					document.body.scrollTop = currentScroll;
				},
				// 우편번호 찾기 화면 크기가 조정되었을때 실행할 코드를 작성하는 부분. iframe을 넣은 element의 높이값을 조정한다.
				onresize : function(size) 
				{
					 element_wrap.style.height = size.height+'px';
				},
				width : '100%',
				height : '100%'
			}).embed(element_wrap);
			element_wrap.style.display = 'block';
			initLayerPosition();
		});
	}
	else
	{
		if(arg4 != null && arg4 == "mapping"){

			arg4 = "mainfrm";
			if(this.xyMapping == "" || this.xyMapping == "1"){
				alert("병원검색후 해당 병원이 없을 때만 우편번호 검색을 할 수 있습니다");
				return;
			}
		}
		fromFormName = arg4;
		zipcode = arg1;
		addr = arg2;
		addr2 = arg3;
		var settings='height=630,width=430,top=100,left=330,scrollbars=no,resizable=no,status=no,toolbar=no,location=no,menu=no'; //20140128 jm. 도로면주소가져오기 때문에 사이즈 630으로 늘림.
		//var targetUrl = "/common/zipcodeSearch.jsp";
		//var targetUrl = "/zipCodeSearch.do";
		var targetUrl = "/common/jusoPopup.jsp";
		var frameName = "checkPop";

		window.open(targetUrl,frameName,settings);
	}	
}

function zipCodeSearch_sub(arg1,arg2,arg3,arg4){

	if(arg4 != null && arg4 == "mapping"){

		arg4 = "mainfrm";
		if(this.xyMapping == "" || this.xyMapping == "1"){
			alert("병원검색후 해당 병원이 없을 때만 우편번호 검색을 할 수 있습니다");
			return;
		}
	}
	fromFormName = arg4;
	zipcode = arg1;
	addr = arg2;
	addr2 = arg3;
	goon_tmp = "";
	var settings='height=425,width=430,top=100,left=330,scrollbars=no,resizable=no,status=no,toolbar=no,location=no,menu=no';
	//var targetUrl = "/common/zipcodeSearch.jsp";
	var targetUrl = "zipCodeSearch_sub.do";
	var frameName = "checkPop";

	window.open(targetUrl,frameName,settings);
}

function viewBlog(h_code){
	//location.href = "/viewBlog.do?blog_h_code="+h_code; //20161122 jm. 주석.	
	location.href = "/getBlog.do?code=" + h_code;
}

function link_url(arg)
{
   var pm = window.open('http://'+arg,'','');
   pm.focus();
}

// 서비스 시작
function startService(arg){
	if(confirm("서비스를 시작하시겠습니까?")){
		location.href = "/startService.do?code="+arg;
	}
}



// 서비스 시작
function startService(arg1, arg2){
	//if(arg1=="002" && (arg2=="0000" || arg2=="9999")){
	//	alert("서비스 환경설정에서 접수 시스템 제품명이 기타 또는 없음일 경우에는 만족도조사 서비스를 제공할 수 없습니다.\n제공가능한 접수 시스템 등록 후 이용해 주시기 바랍니다.");
	//	return;
	//}else{
		if(confirm("서비스를 시작하시겠습니까?")){
			location.href = "/startService.do?code="+arg1;
		}
	//}
}

// 서비스 중지
function stopService(arg){
	//alert("잠시 대기");
	//alert(arg);
	//
	if(confirm("서비스를 중지하시겠습니까?")){
		location.href = "/stopService.do?code="+arg;
	}
}

// 서비스 재시작
function restartService(arg){
	//alert("잠시 대기");
	if(confirm("서비스를 재시작하시겠습니까?")){
		location.href = "/restartService.do?code="+arg;
	}
}
// 서비스 재시작
function restartService(arg1,arg2){
	//if(arg1=="002" && (arg2=="0000" || arg2=="9999")){
	//	alert("서비스 환경설정에서 접수 시스템 제품명이 기타 또는 없음일 경우에는 만족도조사 서비스를 제공할 수 없습니다.\n\n제공가능한 접수 시스템 등록 후 이용해 주시기 바랍니다.");
	//	return;
	//}else{
		if(confirm("서비스를 재시작하시겠습니까?")){
			location.href = "/restartService.do?code="+arg1;
		}
	//}
}

// 서비스 신청
function serviceOrder(){
	//alert("잠시 대기");
	location.href = "/service_order.do";
}

function telnoCheckSet(str){

	var tmpStr = "";
	if(Trim(str) == ""){
		return str;
	}else{
		if(str.length < 3){
			return "";
		}else{
			tmpStr = str.substring(0,3);
			if(tmpStr == "000"){
				return "";
			}else{
				return str;
			}
		}
	}
}

function openAfterNote(arg1,arg2,arg3,arg4){
	var fm = eval("document."+arg4);
	fm.code.value = arg1;
	fm.name.value = arg2;
	fm.afterNoteCnt.value = arg3;
	if(arg3 == "0"){
		alert("진료 후기가 없습니다.");
		return;
	}

	var settings='height=610px,width=450px,top=20px,left=100px,scrollbars=no,resizable=no,status=no,toolbar=no,location=no,menu=no';
	//var targetUrl = "/common/zipcodeSearch.jsp";
	var targetUrl = "showAfterNote.do";
	var frameName = "afterNote";

	window.open('',frameName,settings);
	
	fm.target = frameName;
	fm.action = targetUrl;
	fm.submit();
	
}


//////////////////////////////////////
// IE Embed patch
//
// @author iezn@iezn.com
// @homepage http://iezn.com
// @create date 2006.04.19
// @last modify 2006.04.25
// @version 0.41
// 배포시 위내용을 포함해 주시기 바랍니다
//////////////////////////////////////
/**
* embed 패치 적용 컨테이너
* null인경우 document 값을 기본으로 합니다
* id값을 설정한경우 설정범위 내에만 적용이 됩니다
* 
* 본문이나 일부 노드에만 적용할경우 해당 노드의 id 값을 입력하실 수 있습니다
* 예)
* var __embed_target_id = "contents";
* 로 처리한경우 body 내에 <태그 id="contents">플래쉬,동영상...</태그>
* 안에 내용에만 패치가 적용됩니다
*/
if(typeof(__embed_target_id)=='undefined'){
	var __embed_target_id = null;
}

/**
* embed 패치를 적용할 태그를 설정합니다
* 기본값은 object,eembed,appelt 태그입니다
* false 값인경우 패치에서 제외됩니다
*/
if(typeof(__embed_tags)=='undefined'){
	var __embed_tags = {object:true,embed:true,applet:false}
}

/**
* 플래쉬파일중 flashvars 를 사용할경우 해당 플래쉬의 오브젝트아이디:true 값으로 object를 등록해 주세요
*/
var __flash_force_objs = {};

if(document.attachEvent){
	document.write('<style type="text/css">');
	document.write('object,embed{display:none;}');
	document.write('</style>');
	document.attachEvent('onreadystatechange',
		function (){
			
			if(__embed_target_id===null){
				var __target = document;
			}else{
				var __target = document.getElementById(__embed_target_id);
			}
			if (document.readyState == "complete"){
				function _replace(obj){
					var obj_re = document.createElement(obj.outerHTML);					
					obj_re.style.display='inline';
					obj.parentNode.replaceChild(obj_re,obj);
				}
				function _inner(obj){
					obj.style.display='inline';					
					var html = obj.outerHTML;
					var classid = obj.classid.toLowerCase();
					if(classid=='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' && typeof(__flash_force_objs[obj.id])=='undefined'){//flash 인경우
						obj.insertAdjacentHTML('beforeBegin',html);
						obj.parentNode.removeChild(obj);
					}else{						
						//변경하고자하는 ActiveX classid 를 추가하시기 바랍니다
						if(classid=='clsid:6bf52a52-394a-11d3-b153-00c04f79faa6' || //media 7
						classid=='clsid:22d6f312-b0f6-11d0-94ab-0080c74c7e95' || //6.4
						classid=='clsid:6bf52a52-394a-11d3-b153-00c04f79faa6' ||
						classid=='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000'	
						){//media player 10
							embed_pos = html.indexOf('embed');
							if(embed_pos!=-1){//embed 가 존재하는경우
								var embed = '<'+html.substr(embed_pos);
								embed = embed.substr(0,embed.length-9);
								obj.insertAdjacentHTML('beforeBegin',embed);
								obj.parentNode.removeChild(obj);
							}else{
								//object로만 되어 있는경우 동영상 부분만 패치한다
								var embed = document.createElement('embed');
								var total = obj.childNodes.length;
								embed.setAttribute('autostart',0);
								if(obj.width){
									embed.setAttribute('width',obj.width);
								}
								if(obj.height){
									embed.setAttribute('height',obj.height);
								}
								for(var k=0;k<total;k++){
									n = obj.childNodes.item(k).getAttribute("name");
									v = obj.childNodes.item(k).getAttribute("value");
									if(n=='URL' || n=='url' || n=='FileName'){
										n = 'src';
									}
									embed.setAttribute(n,v);
								}
								if(embed.getAttribute('src')){
									embed.style.display = 'inline';
									obj.parentNode.replaceChild(embed,obj);
								}else{
									//파일엑세스 object가 아닌경우는 유지한다								
								}
							}
						}
					}
				}

				if(__embed_tags.object===true){
					var objs = __target.getElementsByTagName('object');
					var i = objs.length;
					while(i-->0){
						_inner(objs[i]);
					}
				}
				if(__embed_tags.embed===true){
					var objs = __target.getElementsByTagName('embed');
					var i = objs.length;
					while(i-->0){
						_replace(objs[i])
					}
				}

				if(__embed_tags.applet===true){
					var objs = __target.getElementsByTagName('applet');
					var i = objs.length;
					while(i-->0){
						_replace(objs[i])
					}
				}
			}
		}
	);
}

function cancel_add2(){

	var fm = document.mainfrm;
	fm.office_zipcode_1.value="";
	fm.office_zipcode_2.value="";
	fm.office_addr1.value="";
	fm.office_addr2.value="";

	fm.office_tel_1.selectedIndex = 0;
	fm.office_tel_2.value="";
	fm.office_tel_3.value="";


}

/*
사업자 번호 중복 체크 
*/
function busIdCheck(arg){
	fromFormName = arg;

//	console.log("busIdCheck ==> " + arg);
	var fm = eval("document."+arg);
	fm.check_mode.value = "busId";
	fm.checkbusID.value = "";

	if(Trim(fm.busi_no_1.value) == "" ||  fm.busi_no_1.value.length != 3){
		alert("사업자 번호를 입력해 주세요!");
		fm.busi_no_1.focus();
		return;
	}

	if(Trim(fm.busi_no_2.value) == "" ||  fm.busi_no_2.value.length != 2){
		alert("사업자 번호를 입력해 주세요!");
		fm.busi_no_2.focus();
		return;
	}

	if(Trim(fm.busi_no_3.value) == "" ||  fm.busi_no_3.value.length != 5){
		alert("사업자 번호를 입력해 주세요!");
		fm.busi_no_3.focus();
		return;
	}
		
	if(fm.old_bus_no != null && fm.old_bus_no.value != ""){
		var new_bus_no = fm.busi_no_1.value + "-" + fm.busi_no_2.value + "-" + fm.busi_no_3.value;
		if(fm.old_bus_no.value == new_bus_no ){
			alert("사업자 번호가 기존과 동일합니다. ");
			return;
		}

	}
	var settings = "height=201px, width=430px, top=100px, left=330px, scrollbars=no, resizable=no, status=no, toolbar=no, location=no, menu=no";
	var targetUrl = "busIdCheck.do";
	var frameName = "checkBusIdPop";
	window.open('', frameName, settings);
	fm.target = frameName;
	fm.action = targetUrl;
	fm.submit();
	
}

/*
사업자 번호 중복 체크 
1. 암호화 관련으로 인해 추가 변경 2015.12
*/
function busIdCheck_rsa(arg,rsa_form){
	fromFormName = arg;

	
	var fm = eval("document."+arg);
	fm.check_mode.value = "busId";
	fm.checkbusID.value = "";

	if(Trim(fm.busi_no_1.value) == "" ||  fm.busi_no_1.value.length != 3){
		alert("사업자 번호를 입력해 주세요!");
		fm.busi_no_1.focus();
		return;
	}

	if(Trim(fm.busi_no_2.value) == "" ||  fm.busi_no_2.value.length != 2){
		alert("사업자 번호를 입력해 주세요!");
		fm.busi_no_2.focus();
		return;
	}

	if(Trim(fm.busi_no_3.value) == "" ||  fm.busi_no_3.value.length != 5){
		alert("사업자 번호를 입력해 주세요!");
		fm.busi_no_3.focus();
		return;
	}
		
	if(fm.old_bus_no != null && fm.old_bus_no.value != ""){
		var new_bus_no = fm.busi_no_1.value + "-" + fm.busi_no_2.value + "-" + fm.busi_no_3.value;
		if(fm.old_bus_no.value == new_bus_no ){
			alert("사업자 번호가 기존과 동일합니다. ");
			return;
		}

	}

	var rsa_fm = eval("document."+rsa_form);
	rsa_fm.busi_no_1.value = "";
	rsa_fm.busi_no_2.value = "";
	rsa_fm.busi_no_3.value = "";


	rsa_fm.busi_no_1.value = fm.busi_no_1.value ;
	rsa_fm.busi_no_2.value = fm.busi_no_2.value ;
	rsa_fm.busi_no_3.value = fm.busi_no_3.value ;
	rsa_fm.check_mode.value =  fm.check_mode.value ;

	var settings='height=201, width=430, top=100, left=330, scrollbars=no, resizable=no, status=no, toolbar=no, location=no, menu=no';
	var targetUrl = "busIdCheck.do";
	var frameName = "checkBusIdPop";
	

	var private_ = document.getElementById("private").innerHTML ;
	var public_ = document.getElementById("public").innerHTML ;
	// Javascript RSA 객체 생성
	var rsa = new ssRsa(public_);
	//rsa.encrypt(rsa_fm.busi_no_1.value);
	$('form[rsa2]').find(':input[name*=ssRsaForm]').remove();
	$('form[rsa2]').find(':input').each(function(){
		
			var $obj	= $(this) ,
			type	= $obj.attr('type') ,
			name	= $obj.attr('name') ,
			value	= $.trim($obj.val()) ;
			if( !(name=='check_mode' || name=='org_no')){
				$obj.val(rsa.encrypt(value));
			}
	});
	$('form[rsa2]').append('<input type="hidden" name="ssRsaForm" value="1">');

	//return;
	window.open('', frameName, settings);

	rsa_fm.target = frameName;
	rsa_fm.action = targetUrl;
	rsa_fm.submit();
	
}
/*
요양기관번호 체크
*/
function orgIdCheck(arg){
	fromFormName = arg;	

	var fm = eval("document."+arg);
	fm.checkorgID.value="";
	
	if( fm.org_no.value.trim() == "" ){
		alert("요양기관번호를 입력해 주세요!");
		fm.org_no.focus();
		return;
	}
	

	if(fm.old_orgID != null && fm.old_orgID.value != ""){
		var new_org_no = fm.org_no.value;
		if(fm.old_orgID.value == new_org_no ){
			alert("요양기관과 기존과 동일합니다. ");
			return;
		}

	}

	fm.check_mode.value="orgno";
	var settings='height=201px,width=430px,top=100px,left=330px,scrollbars=no,resizable=no,status=no,toolbar=no,location=no,menu=no';
	var targetUrl = "busIdCheck.do";
	var frameName = "checkBusIdPop";
	window.open('',frameName,settings);
	fm.target=frameName;
	fm.action=targetUrl;
	fm.submit();
	

}


/*
요양기관번호 체크
1. 암호화 관련으로 인해 추가 변경 2015.12
*/
function orgIdCheck_rsa(arg,rsa_form){	
	fromFormName = arg;	
	
	var fm = eval("document."+arg);
	fm.checkorgID.value="";
	
	if( fm.org_no.value.trim() == "" ){
		alert("요양기관번호를 입력해 주세요!");
		fm.org_no.focus();
		return;
	}
	

	if(fm.old_orgID != null && fm.old_orgID.value != ""){
		var new_org_no = fm.org_no.value;
		if(fm.old_orgID.value == new_org_no ){
			alert("요양기관과 기존과 동일합니다. ");
			return;
		}

	}

	var rsa_fm = eval("document."+rsa_form);
	rsa_fm.org_no.value = "";

	rsa_fm.check_mode.value="orgno";

	rsa_fm.org_no.value = fm.org_no.value ;

	var settings='height=201px, width=430px, top=100px, left=330px, scrollbars=no, resizable=no, status=no, toolbar=no, location=no, menu=no';
	var targetUrl = "busIdCheck.do";
	var frameName = "checkBusIdPop";

	var private_ = document.getElementById("private").innerHTML ;
	var public_ = document.getElementById("public").innerHTML ;
	// Javascript RSA 객체 생성
	var rsa = new ssRsa(public_);
	//rsa.encrypt(rsa_fm.busi_no_1.value);
	$('form[rsa2]').find(':input[name*=ssRsaForm]').remove();
	$('form[rsa2]').find(':input').each(function(){
		
			var $obj	= $(this) ,
			type	= $obj.attr('type') ,
			name	= $obj.attr('name') ,
			value	= $.trim($obj.val()) ;
			if( name=='org_no' ){
				$obj.val(rsa.encrypt(value));
			}
	});
	$('form[rsa2]').append('<input type="hidden" name="ssRsaForm" value="1">');

	window.open('',frameName,settings);
	rsa_fm.target=frameName;
	rsa_fm.action=targetUrl;
	rsa_fm.submit();
	

}
/*
외국인등록번호를 형식을 검증한다.
*/
function foreignNoCheck(val)
{
	//return true; //20121008 jm. 외국인 주민번호 체크가 제대로 안되서 그냥 return true;. http://secure.nuguya.com/nuguya/nice.nuguya.oivs.util.js의 checkForeignNo() 에서도 그냥 return true; 하고 있음.
	var chkType = "5678"; //외국인체크. ZHENGZHIHAO(120425-7100032)
	var hap = 0;
	for(i = 0; i < 8; i++)
		hap = hap + (i + 2) * val.substring(i, i + 1);
	for(i = 8; i < 12; i++)
		hap = hap + (i - 6) * val.substring(i, i + 1);

	hap = hap % 11;
	hap = 11 - hap;
	if(chkType.indexOf(val.substring(6, 7)) > -1){
		if(hap > 9)
			hap -= 10;
		hap += 2;
		if(hap > 9)
			hap -= 10;
	}

	//alert(hap + " : " + val.substring(12, 13));

	if(hap != val.substring(12, 13)) 
		return false;

	return true;
}

/**
* 쿠키를 사용해서 ID저장
**/
function setCookie(name, value, expires) {
	var str = encode(value);	
  document.cookie = name + "=" + escape (str) + "; path=/; expires=" + expires.toGMTString();
}
function getCookie_(Name) {
  var search = Name + "="
  if (document.cookie.length > 0) { // 쿠키가 설정되어 있다면
    offset = document.cookie.indexOf(search)
    if (offset != -1) { // 쿠키가 존재하면

      offset += search.length
      // set index of beginning of value

      end = document.cookie.indexOf(";", offset)
      // 쿠키 값의 마지막 위치 인덱스 번호 설정

      if (end == -1)
        end = document.cookie.length
		// console.log("==> Name " + Name);
	  
      return deco(unescape(document.cookie.substring(offset, end)))
    }
  }
  return "";
}
function saveid(form) {
  var expdate = new Date();
  // 기본적으로 365일동안 기억하게 함. 일수를 조절하려면 * 30에서 숫자를 조절하면 됨
  if(document.getElementById("checksaveid") != null){
	  if (document.getElementById("checksaveid").checked){
		expdate.setTime(expdate.getTime() + 1000 * 3600 * 24 * 365); // 365일
	  }else{
		expdate.setTime(expdate.getTime() - 1); // 쿠키 삭제조건
	  }
	  setCookie("qawsedrf", form.id.value, expdate);

	  //20160410 jm. 예전에 등록되어 있던 쿠키 지우기. 365일 지나면 삭제.
	  today   = new Date();
	  today.setDate(today.getDate() - 1);
	  document.cookie = "saveid=; path=/; expires=" + today.toGMTString() + ";";
	  document.cookie = "savepw=; path=/; expires=" + today.toGMTString() + ";";
	  //console.log("==> " + document.cookie);
  }
}

function delid(form) {
  var expdate = new Date();
  if(document.getElementById("checksaveid") != null){
	  if (!document.getElementById("checksaveid").checked)
		expdate.setTime(expdate.getTime() - 1); // 쿠키 삭제조건

	  setCookie("qawsedrf", form.id.value, expdate);
  }
}

//20100918 jm. 패스워드도 저장되게
function savepw(form) {
  var expdate = new Date();
  // 기본적으로 365일동안 기억하게 함. 일수를 조절하려면 * 365에서 숫자를 조절하면 됨
  if(document.getElementById("checksavepw") != null){
	  if (document.getElementById("checksavepw").checked)
		expdate.setTime(expdate.getTime() + 1000 * 3600 * 24 * 365); // 365일
	  else
		expdate.setTime(expdate.getTime() - 1); // 쿠키 삭제조건

	  setCookie("asdfzxcv", form.pw.value, expdate);
	  //console.log("==> " + document.cookie);
  }
}
function delpw(form) {
  var expdate = new Date();  
  if(document.getElementById("checksavepw") != null){
	  if (!document.getElementById("checksavepw").checked)
		expdate.setTime(expdate.getTime() - 1); // 쿠키 삭제조건

	  setCookie("asdfzxcv",form.pw.value, expdate);
  }
}

function getid(form) {	
	if(document.getElementById("checksaveid") != null ){
		document.getElementById("checksaveid").checked = ((document.getElementById("id").value = getCookie_("qawsedrf")) != "");	
		if(document.getElementById("checksaveid").checked)		
			document.getElementById("id").focus();					
	}
	//console.log("getid ==> " + form.value + " : " +document.getElementById("id").value);
}
//20100918 jm. 패스워드도 가져오게
function getpw(form) {	
		if(document.getElementById("checksavepw") != null ){
		document.getElementById("checksavepw").checked = ((document.getElementById("pw").value = getCookie_("asdfzxcv")) != "");	
		if(document.getElementById("checksavepw").checked)		
			document.getElementById("pw").focus();					
	}


}

// 쿠키를 사용해서 ID저장 끝
function myblink() {
	if(document.getElementById("go_evalue")!=null)
		document.getElementById("go_evalue").style.color=document.getElementById("go_evalue").style.color=="white"?"":"white";
}


function adclcodelist(name, id,formIdName) {
	var box = document.getElementById(formIdName);
	box.options[box.length] = new Option(name, id);
}
/*****병원정보 등록, 수정시 진료과목부분에 사용하는 스크립트*****/
/*
진료과목 추가
*/
function append_cl() {
	var box = document.getElementById("cl_sjt");
	var oribox;
	oribox = document.getElementById("all_cl_sjt");

	for (i = oribox.length - 1; i >= 0 ; i--) {
		if (oribox.options[i].selected) {
			// 중복 체크
			for (j = 0; j < box.length; j++) {
				if (box.options[j].value == oribox.options[i].value) {
					alert("\""+oribox.options[i].text+"\"은 이미 추가되었습니다.");
					break;
				}
			}
			if (j == box.length) {
				box.options[box.length] = new Option(oribox.options[i].text, oribox.options[i].value);
			}
		}
	}
}

/*다른 쪽에 포커스가 갔을때 선택이 되어져있으면 해지 시킨다.*/
function click_select(select_name) {
	if (select_name != "cl_sjt") {
		document.getElementById("cl_sjt").selectedIndex = -1;
	}

	if (select_name != "all_cl_sjt") {
		document.getElementById("all_cl_sjt").selectedIndex = -1;
	}
}
/*삭제진료과목 체크 (진료과목을 선택한 의사가 있을때 오류 메시지를 낸다.*/
function remove_cl_final_notok(arg) {
	document.getElementById("cl_sjt").options[arg].selected = false;
	remove_cl();
}
/*삭제진료과목 체크(진료과목을 선택한 의사가 없을때 해당 과목을 삭제한다.)*/
function remove_cl_final_ok(arg) {
	var box = document.getElementById("cl_sjt");
	box.options[arg] = null;
	remove_cl();
}
/*진료과목 순서올리기*/
function move_up() {
	var box = document.getElementById("cl_sjt");
	for (i = 0; i < box.length ; i++) {
		if(i == 0) continue;
		if (box.options[i].selected && !box.options[i-1].selected) {
			swap_option(box, i, i-1);
		}
	}
}
/*진료과목 순서내리기*/
function move_down() {
	var box = document.getElementById("cl_sjt");
	for (i = box.length - 1; i >= 0 ; i--) {
		if(i == box.length - 1) continue;
		if (box.options[i].selected && !box.options[i+1].selected) {
			swap_option(box, i, i+1);
		}
	}
}

/*진료과목 순서정렬*/
/*****병원정보 등록, 수정시 진료과목부분에 사용하는 스크립트*****/
function swap_option(target, swap_a, swap_b) {
	var temp_option = new Option(target.options[swap_a].text,target.options[swap_a].value,false,true);
	target[swap_a] = new Option(target.options[swap_b].text,target.options[swap_b].value);
	target[swap_b] = temp_option;
}

/*미니홈피 URL 중복체크*/
function checkDuplicateHomeURL(obj) {
   var fm = document.minih_frm;

	if( Trim(fm.home_url.value)=="" ){
		alert("URL를 입력해 주세요!");
		fm.home_url.focus();
		return;
	}

	//if(!idFormatCheck(arg)){
	//	fm.home_url.focus();
	//	return;
	//}

	if(fm.home_url.value.length < 5){
		alert("URL이름은 5자 이상이어야 합니다");
		fm.home_url.focus();
		return;
	}

	var settings='height=201,width=430,top=100,left=330,scrollbars=no,resizable=no,status=no,toolbar=no,location=no,menu=no';
	//var targetUrl = "/common/idDuplicateCheck.jsp";
	var targetUrl = "/mini_home_url_check.do?home_url="+fm.home_url.value;
	var frameName = "checkPop";
	window.open(targetUrl,frameName,settings);


}

function selectAll(thisformName,targetformName){
	/*if(document.all[targetformName]!=null){
		if(document.all[targetformName].length!=null){
			for(i=0;i<document.all[targetformName].length;i++)
				document.all[targetformName][i].checked = document.all[thisformName].checked;

		}else{
			document.all[targetformName].checked = document.all[thisformName].checked;
				
		}
	}
*/
	if(document.all[targetformName]!=null){
		if(document.all[targetformName].length!=null){
			for(i=0;i<document.getElementById(targetformName).length;i++)
				document.getElementById(targetformName)[i].checked = document.getElementById(thisformName).checked;

		}else{
			document.getElementById(targetformName).checked = document.getElementById(thisformName).checked;
				
		}
	}

}

function addBookmark(seq, arg){
	if(arg == "2" || arg == "4" || arg == "8" || arg == "16"){
		if(seq == ""){
			alert("병원의 정보가 부족하여 관심병원 등록을 할 수 없습니다.   ");
		}else{
			if(confirm("관심병원으로 등록하시겠습니까?   \n\n등록후에는 마이룸의 관심병원에서 확인가능합니다.   ")){	
				var fm = document.hiddenForm;			
				fm.target = "hiddenaction";
				fm.action = "/bookmark_hosp.do";
				fm.submit();
			}
		}
	}else if(arg == "0"){
		alert("회원 전용메뉴입니다.  \n\n로그인 후 등록해 주시기 바랍니다.   ");
		document.getElementById('id').focus();
	}else{
		alert("회원 전용메뉴입니다.   ");
	}
}


function goManual(arg){
  var settings='height=600,width=750,top=100,left=200,scrollbars=yes,resizable=yes,status=no,toolbar=no,location=no,menu=no';
	var targetUrl = "/inc/ma/"+arg;
	var frameName = "manual";
  window.open(targetUrl,frameName,settings);

}

function blinkText(name,color) {
	if(document.getElementById(name)!=null){
		//alert(document.all[name].style.color);
		//if(document.all[name].style.color==

		document.getElementById(name).style.color=(document.getElementById(name).style.color==(""||"#cccccc")?color:"#cccccc");
	}
}

/*
병원정보 간단히 화면으로 보이는 화면(현재 사용하지 않음)
*/
function viewBlogPopup(h_code){
	/*var settings='height=1000,width=1000;scrollbars=yes,resizable=yes,status=yes,toolbar=yes,location=yes,menu=yes';
	var fm = document.mainfrm;	
	fm.blog_h_code.value=h_code;
	//fm.target = "_blank";
	//fm.action = "/viewBlog.do";
	var targetUrl = "viewBlog.do";
	var frameName = "_blank";

	window.open('',frameName,settings);
	
	fm.target = frameName;
	fm.action = targetUrl;
	fm.submit();
	*/
	var settings='width=1000,scrollbars=yes,resizable=yes,status=yes,toolbar=yes,location=yes,menubar=yes';
	//var targetUrl = "/common/zipcodeSearch.jsp";
	var targetUrl = "viewBlog.do";
	var frameName = "viewBlog";
	var fm = document.mainfrm;	
	fm.blog_h_code.value=h_code;
	
	window.open('',frameName,settings);
	
	fm.target = frameName;
	fm.action = targetUrl;
	fm.submit();

	
	//var frameName = "_blank";
	//var targetUrl = "viewBlog.do?blog_h_code="+h_code;//"/main/hosp_info_popup.jsp"
	//window.open(targetUrl,frameName,settings);
	//var settings='height=600,width=615,top=100,left=200,scrollbars=yes,resizable=yes,status=no,toolbar=yes,location=yes,menu=yes';
	//var targetUrl = "hosp_info_popup.do?blog_h_code="+h_code;//"/main/hosp_info_popup.jsp";
	//var frameName = "hosp_info_popup";
	//window.open(targetUrl,frameName,settings);
	
}
// 20171114 김태응 우편 번호 검색 수정 Daum API로 수정함
/**새로운 주소**/
function jusoGoPopup(flag){
	if(flag == '1')
	{
		var pop = window.open("/common/jusoPopup_go.jsp","pop","width=570,height=420, scrollbars=yes, resizable=yes");
		return;
	}
	// 주소검색을 수행할 팝업 페이지를 호출합니다.
	// 호출된 페이지(jusopopup.jsp)에서 실제 주소검색URL(http://www.juso.go.kr/addrlink/addrLinkUrl.do)를 호출하게 됩니다.
	 var currentScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    daum.postcode.load(function() 
    {
    	new daum.Postcode({
	        oncomplete: function(data) 
	        {
	            // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
	
	            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
	            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
	            var fullAddr = data.address; // 최종 주소 변수
	            var extraAddr = ''; // 조합형 주소 변수
	
	            // 기본 주소가 도로명 타입일때 조합한다.
	            if(data.addressType === 'R')
	            {
	                //법정동명이 있을 경우 추가한다.
	                if(data.bname !== '')
	                {
	                    extraAddr += data.bname;
	                }
	                // 건물명이 있을 경우 추가한다.
	                if(data.buildingName !== '')
	                {
	                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
	                }
	                // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
	                fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
	            }
	
	            // 우편번호와 주소 정보를 해당 필드에 넣는다.
				$('#zipNo').val(data.zonecode);
	            $('#home_addr1').val(fullAddr);
	
	            // iframe을 넣은 element를 안보이게 한다.
	            // (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
	            $('#zipCodeIframe').css('display', 'none');
	
	            // 우편번호 찾기 화면이 보이기 이전으로 scroll 위치를 되돌린다.
	            document.body.scrollTop = currentScroll;
	        },
	        width : '100%',
	        height : '100%',
			onresize : function(size) 
			{
				$('#zipCodeIframe').css('height',  size.height+'px');
            },
			maxSuggestItems : 5
	    }).embed($('#zipCodeIframe')[0]);

		$('#zipCodeIframe').css('display', 'block');
    });
	//var pop = window.open("/common/jusoPopup_go.jsp","pop","width=570,height=420, scrollbars=yes, resizable=yes"); 
}
// 20171114 김태응 우편 번호 검색 수정 Daum API로 수정함
function foldDaumPostcode() 
{
	// iframe을 넣은 element를 안보이게 한다.
	 $('#zipCodeIframe').css('display', 'none');
}
 
function jusoCallBack(roadFullAddr,roadAddrPart1,addrDetail,roadAddrPart2,engAddr, jibunAddr, zipNo, admCd, rnMgtSn, bdMgtSn,doc_frm){
		// 팝업페이지에서 주소입력한 정보를 받아서, 현 페이지에 정보를 등록합니다.
		/*
		doc_frm.roadFullAddr.value = roadFullAddr;
		doc_frm.roadAddrPart1.value = roadAddrPart1;
		doc_frm.roadAddrPart2.value = roadAddrPart2;
		doc_frm.addrDetail.value = addrDetail;
		doc_frm.engAddr.value = engAddr;
		doc_frm.jibunAddr.value = jibunAddr;
		doc_frm.admCd.value = admCd;
		doc_frm.rnMgtSn.value = rnMgtSn;
		doc_frm.bdMgtSn.value = bdMgtSn;
		
		*/

		
		doc_frm.zipNo.value = zipNo;
		if(doc_frm.home_addr1!=null){
			doc_frm.home_addr1.value = roadAddrPart1;
			doc_frm.home_addr2.value = addrDetail;
		}if(doc_frm.addr1!=null){
			doc_frm.addr1.value = roadAddrPart1;
			doc_frm.addr2.value = addrDetail;
		}

		//병원회원가입 화면이면 
		if(userType != undefined ){
			if(userType == "hospitalJoin" || userType == "hospitalMod" ){
					setHospAddressJuso(zipNo,roadAddrPart1,"", addrDetail)
			}
			
		}
}

/*
병원회원이면 받아온 주소를 sido 경기도 // goon 성남시 분당구 // dong 황새울로 // add_num 234 번지 //
등으로 변경해 세팅해줘야 한다.

setAddHospitalDB(zipcode, sido, sigungu, dong, ri, s_no, delivery);

경기도 성남시 분당구 분당로 50
병원정보 등록, 수정에서 쓰임
*/

function setHospAddressJuso(zipNo,roadAddrPart1,s_no, addrDetail){	
	var address_values = roadAddrPart1.split(" ");
	//console.log("common.js ==> " + zipNo + " : " + roadAddrPart1 + " : " + s_no + " : " + addrDetail + " : " + address_values.length);
	if(address_values.length == 6){
		sido = address_values[0];
		sigungu = address_values[1] + " " + address_values[2];
		dong = address_values[3] + " " + address_values[4];
		add_num = address_values[5]; //도로번호
		
		zipfrm.sido.value=sido;
		if(zipfrm.sigungu !=null)
			zipfrm.sigungu.value=sigungu;
		if(zipfrm.goon !=null)
			zipfrm.goon.value=sigungu;
		
		zipfrm.dong.value=dong;
		zipfrm.add_num.value=add_num;
		setAddHospitalDB(zipNo, sido, sigungu, dong, "", add_num, addrDetail);

	}else if(address_values.length == 5){
		sido = address_values[0];
		sigungu = address_values[1] + " " + address_values[2];
		dong = address_values[3]; 
		add_num = address_values[4]; //도로번호
		
		zipfrm.sido.value=sido;
		if(zipfrm.sigungu !=null)
			zipfrm.sigungu.value=sigungu;
		if(zipfrm.goon !=null)
			zipfrm.goon.value=sigungu;
		
		zipfrm.dong.value=dong;
		zipfrm.add_num.value=add_num;
		setAddHospitalDB(zipNo, sido, sigungu, dong, "", add_num, addrDetail);

	}else if(address_values.length == 4){
		sido = address_values[0];
		sigungu = address_values[1];
		dong = address_values[2];
		add_num = address_values[3]; //도로번호
		
		zipfrm.sido.value=sido;
		if(zipfrm.sigungu !=null)
			zipfrm.sigungu.value=sigungu;
		if(zipfrm.goon !=null)
			zipfrm.goon.value=sigungu;

		
		zipfrm.dong.value=dong;
		zipfrm.add_num.value=add_num;
		
		setAddHospitalDB(zipNo, sido, sigungu, dong, "", add_num, addrDetail);
	}else if(address_values.length == 3){
		sido = address_values[0];
		sigungu = "";
		dong = address_values[1];
		add_num = address_values[2]; //도로명
		
		zipfrm.sido.value=sido;
		
		if(zipfrm.sigungu !=null)
			zipfrm.sigungu.value=sigungu;
		if(zipfrm.goon !=null)
			zipfrm.goon.value=sigungu;
		zipfrm.dong.value=dong;
		zipfrm.add_num.value=add_num;
		
		setAddHospitalDB(zipNo, sido, sigungu, dong, "", add_num, addrDetail);
	}else{
		//console.log("common.js ==> }else{ address_values.length : " + address_values.length);
		return false;
	}

}


//20160410 jm. base64 디코딩
function deco(value, form, arg1){	

	//console.log("==> " + value + " : " + form + " : " + arg1);
	//var fm = eval("document."+form);

  var InStr = value;
  var len_1 = InStr.length;
  var ttb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var len_res = InStr.length % 4;
  var len_div = len_1 - len_res;
  var re = new makeArray(3);
  var In  = new makeArray(4);
  var DecNum = new makeArray(4);
  var i=0;
  var Stat = "";
  var tmp16, tmp16s;
  var EnB=4;
  var str="";
  while(1)
  {
    if( i >= len_1 )
         break;
    for(k=1;k<=4;k++)
    {
      In[k] = InStr.charAt(i++);
      DecNum[k] = ttb.indexOf(In[k]);
    }
    if( i >= len_div )
    {
        Stat = "End";  
        if( len_res == 3 || DecNum[4] == 64 )
          EnB = 3;
        if( len_res == 2 || DecNum[3] == 64 )
          EnB = 2;
    }
    re[1] = ( DecNum[1] << 2 ) + ( DecNum[2] >> 4);
    re[2] = ( ( DecNum[2] & 15 ) << 4 ) + ( DecNum[3] >> 2);
    re[3] = ( ( DecNum[3] & 3 ) << 6 ) | DecNum[4] ;
    for(k=1;k<=3;k++)
    {
       if( k < EnB )
       { 
          tmp16 = re[k].toString(16);
          tmp16s = "%" + tmp16;
          str = str + tmp16s  ; 
       }
    }
   }
  str = unescape(str); 

	//console.log("==> " + str);
    return str;
  
}

/* 20160812 jm. 사용하는곳이 없어서 주석.
//20160410 jm. base64 인코딩
function enco(value, arg1){		
	var str = encode(value);	
	var expires = new Date();  
	expires.setTime(expires.getTime() + 31536000000); //1 year  
   document.cookie = arg1 + '=' + str + ';expires=' + expires.toUTCString();  
	console.log(document.cookie + " : enco : " + value );
}*/

//20160410 jm. base64 인코딩
function encode(value){			
	//base64 인코딩 함수 (자바스크립트에서 인코딩 해서 넘김)
	  var InStr = value;
	  var ttb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	  var len_1 = InStr.length;
	  var len_res = InStr.length % 3;
	  var len_div = len_1 - len_res;
	  var ra = new makeArray(4);
	  var i=0;
	  var Stat = "";
	  var str="";
	  while(1)
	  {
		if( i >= len_1 )
			 break;

		if( i >= len_div )
			 Stat = "End"; 
		A = eval(InStr.charCodeAt(i++));
		B = eval(InStr.charCodeAt(i++));
		C = eval(InStr.charCodeAt(i++));
		if( i > len_div )
		{
			Stat = "End"; 
			if( len_res >= 1)
			  C = 0;
			if( len_res == 1 )
			  B = 0;
		}
		ra[1] = A >> 2;
		ra[2] = ( (A & 3) << 4 ) + (B >> 4);
		ra[3] = ( ( B & 15 ) << 2 ) + ( C >> 6);
		ra[4] = C & 63;
		if( Stat == "End" && len_res >= 1 )
			  ra[4] = 64; 
		if( Stat == "End" && len_res == 1 )
			  ra[3] = 64;
		for(k=1;k<=4;k++)
		   str = str + ttb.substr(ra[k],1); 
	 }  
	return str;	
}
function makeArray(n){
	this.length=n
	for(var i=1; i<=n; i++){
			this[i]=null;
	}
	return this
}
