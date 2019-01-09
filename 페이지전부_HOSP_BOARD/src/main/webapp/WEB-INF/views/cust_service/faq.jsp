<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ include file="/WEB-INF/include/include-header.jspf" %>  

<!DOCTYPE html>

<html>
<head>

<script language="JavaScript" type="text/JavaScript">
<!--
window.self.name = "main";

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
//20100728 jm. 추가. 오른쪽 상단 배너 클릭 수 증가
function updateCnt(arg)
{	
	
	var fm = document.ad_right;
	fm.a_code.value = arg;
	fm.target = "no_frame";
	fm.action = "/updateClick_cnt.do";
	fm.submit();
}
//-->
</script>

</head>

<!-- 쿠키에 등록된 패스워드도 얻어오기. getpw(document.snap_login_frm);-->
<body onLoad="getid(document.snap_login_frm);getpw(document.snap_login_frm);">
<input type="hidden" name="menugubun" >
<div id="wrap">
	




<!-- 20181115 김태응 구글 애널리스틱 통계 리소스 추가 -->
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-129281282-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-129281282-1');
</script>
<script>
//20151129 jm. Firefox는 event를 파라미터로 넣어야되는데 이렇게 리스너에 등록해두면 Ok. /inc/js/common.js에서 pressSearch를 보면 파라미터에 event가 없음.
	if(navigator.userAgent.indexOf('Firefox') >= 0){		
  (function(){
   var events = ["mousedown", "mouseover", "mouseout", "mousemove",
                 "mousedrag", "click", "dblclick", "keydown", "keyup", "keypress"];  
   for (var i = 0; i < events.length; i++){
    window.addEventListener(events[i], function(e){
     window.event = e;
    }, true);
   }
  }());
 };
</script>


<form name="e_header_frm" method="post">
<input type="hidden" name="topMenu">
<input type="hidden" name="goalPage" value="">
<input type="hidden" name="login_mode">
<input type="hidden" name="viewTitle">
<input type="hidden" name="tmpTopMenu">
<input type="hidden" name="mode">


	<div id="header">
		<div class="headertop">
			<div class="headertop_cen">
				<a href="javascript:topMenuCommand('myroom')">My room</a>
				<a class="ay" href="/sitemap.do">Sitemap </a>
			</div>
		</div>
		<div class="headerbom">
			<div class="headerbom_cen">
				<div class="headerbom_cen_let"><a href="/welcome.do"><img src="/images/main/header1.gif" alt="에버메디" /></a></div>
				<div class="headerbom_cen_rit">
					<ul>
						<li>
							<a href="#">병원검색</a>
							<ul class="menu_depth2">
								<li><a href="#" onclick="go_url('reserve','reserve_host_search.do','예약가능 병원검색','','reserve_host_search.do')" >예약가능병원</a></li>
								<li><a href="#" onclick="go_url('search' ,'host_search.do','전체병원검색','','host_search.do')">전체병원검색</a></li>
								<li><a href="#" onclick="go_url('search' ,'hosp_bookmark_list.do','관심병원','','hosp_bookmark_list.do')">관심병원</a></li>						
								<li><a href="#" onclick="go_url('search' ,'search_guide.do','검색가이드','','search_guide.do')">병원검색 가이드</a></li>
								<li><a href="#" onclick="go_url('reserve','reservation_guide.do','예약가이드','','reservation_guide.do')">병원예약 가이드</a></li>
							</ul>
						</li>
						<li>
							<a href="#">만족도 조사</a>
							<ul class="menu_depth2">
								<li><a href="#" onclick="go_url('valuation','all_evalue.do','만족도조사 우수병원','','all_evalue.do')">만족도조사 우수병원</a></li>
								<li><a href="#" onclick="go_url('valuation','evalue.do','만족도조사 참여','e_key','evalue.do')">만족도조사 참여</a></li>
								<li><a href="#" onclick="go_url('valuation','evalue_guide.do','만족도조사가이드','','evalue_guide.do')">만족도조사 가이드</a></li>
							</ul>
						</li>
						<li>
							<a href="#">고객지원</a>
							<ul class="menu_depth2">
								<li><a href="#" onclick="go_url('support','notice_list.do','공지사항','','notice_list.do')">공지사항</a></li>
								<li><a href="#" onclick="go_url('support','faq_list.do','FAQ','','faq_list.do')">FAQ</a></li>
								<li><a href="#" onclick="go_url('support','qna_list.do','Q&amp;A','','qna_list.do')">Q&amp;A</a></li>
								<!--li><a href="#">예약가이드</a></li>
								<li><a href="#">검색가이드</a></li-->
							</ul>
						</li>
						<li>
							<a href="#" onclick="go_url('support','service_remote.do','원격지원요청','','service_remote.do')" name="remote" id="remote">원격지원요청</a>						
						</li>
					</ul>
				</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
</form>

<script>

function go_url(tmpTopMenu,goalPage,viewTitle,mode,action_){
	var fm1 = document.e_header_frm;
	fm1.tmpTopMenu.value=tmpTopMenu;
	fm1.goalPage.value=goalPage;
	fm1.viewTitle.value=viewTitle;
	fm1.mode.value=mode;
	//fm1.leftmenu.value=leftmenu;
	//fm1.topMenu.value=topMenu;
	fm1.action = action_;
	fm1.submit();
}

//모바일 단말기 확인
var ua = window.navigator.userAgent.toLowerCase();
if ( /iphone/.test(ua) || /android/.test(ua) || /opera/.test(ua) || /bada/.test(ua) ) {
	document.all["remote"].style.visibility = "hidden"; //20151221 jm. 모바일은 원격이 안되므로 안보이게.
}

</script>

	<div id="center">
		<div class="centerv">
			<div class="centerv_left">
				



















<style type="text/css">
	.loginout_btn { BACKGROUND-COLOR: #35b0d9;color: white ;padding:4 4 4 4;width:51px;border:0;height:23px;cursor:pointer; }
	.modify_btn { BACKGROUND-COLOR: #35b0d9;color: white ;padding:4 4 4 4;width:100px;border:0;height:23px;cursor:pointer; }
    .hospital_btn { BACKGROUND-COLOR: #EEB331;color: white ;padding:4 4 4 4;width:51px;border:0;height:23px;cursor:pointer; }
	.personal_btn { BACKGROUND-COLOR: #8DC422;color: white ;padding:4 4 4 4;width:51px;border:0;height:23px;cursor:pointer; }	
</style>



<div class="centerv_left_one">


    
<!-- 20161002 jhlim 변경 s -->
	
    
     
	<!-- jQuery (필수) -->
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.js"></script>

	<!-- RSA 기반 보안 로그인 자동화 스크립트 파일 (필수) -->
	<script type="text/javascript" src="/inc/js/ssRsa.js"></script>
	

<form name="snap_login_frm" action="login.do" method="post" runat="server" rsa>
<input type="hidden" name="login_mode" value="login">
<input type="hidden" name="join_type" value="">
<input type="hidden" name="join_step" value="join_step1">
<input type="hidden" name="login_page" value="mainpage">
<input type="hidden" id="id_rsa" name="id_rsa" value="">
<input type="hidden" id="pw_rsa" name="pw_rsa" value="">

		<div style="width:0;height:0;visibility: hidden;display:none;">
                <p id="private" style="width:0;height:0;visibility: hidden;display:none;">-----BEGIN RSA PRIVATE KEY-----MIIBVQIBADANBgkqhkiG9w0BAQEFAASCAT8wggE7AgEAAkEA41yqzA8a5/x/rNCkPsHM7BOKbcU9w96qxShjZ9DzS+SGeBsa0MGTTVNR1gWQbyQznp4bjhkfJuYU28QILj+eYwIDAQABAkEAnhh6v2glenjOQtnVy7mxB9tSn5/Ooht8PZom/TKDaxoOgc5Q1hdq565Sxu0d7Q7/us5pQwK71IgPaJmVl5JhUQIhAPVe2bxT5mbo2t93WSDgzsAlTgX9cjsPpd8sP9YDSwPbAiEA7TYaTmb38PJGRIjLhNFRjbtOxPMznlozu7wgwfMYGhkCICkuJQ7VaerFk85DYoMBF9HpsOGSerRs2OLOs1wAq3tXAiBP2KJKOcbDyAl3EETRVFQLTT1adjKt3tcDHnQ4VMeMIQIhAMhrUFRKmYK6yRYF5PI09y14aHkxhPNC+R69rmB8ddES-----BEGIN RSA PRIVATE KEY-----</p>
                <hr />
                <p id="public" style="width:0;height:0;visibility: hidden;display:none;">-----BEGIN PUBLIC KEY-----MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAONcqswPGuf8f6zQpD7BzOwTim3FPcPeqsUoY2fQ80vkhngbGtDBk01TUdYFkG8kM56eG44ZHybmFNvECC4/nmMCAwEAAQ==-----END PUBLIC KEY-----</p>
        </div>
</form>
<form name="login_frm_before">
		<div class="centerlet_one_tite">
			<span class="spal">MEMBER LOGIN</span>			
			<div class="clear"></div>
		</div>
		<div class="centerlet_one_price">
			<span>회원가입&nbsp;&nbsp;&nbsp;</span>
				<input type="button" value="병원" class='hospital_btn' onclick="join('H','1','snap_login_frm')" />&nbsp;
				<input type="button" value="개인" class='personal_btn' onclick="join('M','1','snap_login_frm')" />			
			<div class="clear"></div>
		</div>						
	  <div class="centerlet_one_infmtn">
			<p><span class="spa1">
				<!-- <label for="name_lab" class="blind">아이디</label> -->
				<input type="text" id="id" name="id" placeholder="아이디" onKeyDown="pressLogin2('snap_login_frm','login_frm_before')" onFocus="this.className='id_focus'" />
			</span>
			<span class="spa2">
				<input type="checkbox" name="checksaveid" id="checksaveid"/><label for="preservation_lab">저장</label>
			</span></p>
			<p><span class="spa1">
				<!-- <label for="password_lab" class="blind">비밀번호</label> -->
				<input type="password" id="pw" name="pw" placeholder="비밀번호" onKeyDown="pressLoginpass('snap_login_frm','login_frm_before')" onFocus="this.className='pw_focus'" />
			</span>
			<span class="spa2">
				<input type="checkbox" name="checksavepw" id="checksavepw"/><label for="preservation2_lab">저장</label>
			</span></p>
		</div>
		<div class="centerlet_one_bot">
			<span class="spal"><a href="lookingforIdPasswd.do">아이디/비밀번호 찾기</a></span>
			<span class="spar"><input type="button" value="login" class='loginout_btn' onclick="snaplogin('snap_login_frm','login_frm_before')">
			</span>
			<div class="clear"></div>
		</div>
			  
    
</div>
</form> 				
				



















<div id="message" style="position:absolute; left:1px; top:1px; width:300px; height:1px; z-index:101; border-width:1px; border-style:none;">
</div>

<script>
function msgset(str1){
    var text;
    text ='<table border="0" cellpadding="3" cellspacing="0" bgcolor="ffffe1" style="font-size:10pt; border-width:1; border-color:black; border-style:solid;">';
    text += '<tr><td><font color="black">' + str1 + '</font></td></tr></table>';
    message.innerHTML=text;
}
function msghide(){ 
	  message.innerHTML='';
} 
function msgposit(){ 	
	message.style.posLeft = event.x - 100 + document.body.scrollLeft;
    message.style.posTop = event.y + 20 + document.body.scrollTop;
}

function notice_Popup(){ //20180709 jm. 병원용 팝업 띄우기. DB에 저장되는게 아니라 강제로 띄우고 싶을때 띄우게 만들어짐.		
		var popup = false;
		if (document.cookie.length > 0) { // 쿠키가 설정되어 있다면
			var search = "evermedi_Notice_H=" ;
			offset = document.cookie.indexOf(search)			
			if (offset != -1) { // 쿠키가 존재하면

			  offset += search.length
			  // set index of beginning of value

			  end = document.cookie.indexOf(";", offset)
			  // 쿠키 값의 마지막 위치 인덱스 번호 설정

			  if (end == -1)
				end = document.cookie.length
			
			 if(document.cookie.substring(offset, end) != "done"){		  
				 popup = true;
			}
	  } else {
		  popup = true;
	  }
	  
	  if(popup == true) {
		  var settings='height=420px,width=350px,top=0px,left=0px,scrollbars=no,resizable=no,status=no,toolbar=no,location=no,menu=no';
				var targetUrl = "popup/notice_popup_hospital.jsp";
				var frameName = "noticePop";
				window.open(targetUrl,frameName,settings);
			}
	  }
}

</script>
<form name="left_menu_frm" method="post">
<input type="hidden" name="goalPage" value="faq_list.do" />
<input type="hidden" name="menu_" />
<input type="hidden" name="viewTitle" />
<input type="hidden" name="goon" />
<input type="hidden" name="clsjt" value="ALL" />
<input type="hidden" name="h_name" />


<div class="centerv_left_menu">
	<ul class="v_menu">


  
        <li><a href="#" onClick="left_link('/notice_list.do', '공지사항')" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image0','','./images/left_menu/leftmenutext5_01_s.gif',1)" >공지사항</a>
		</li>
		

       

  
        <li><a href="#" onClick="left_link('/faq_list.do', 'FAQ')" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image1','','./images/left_menu/leftmenutext5_02_s.gif',1)" >FAQ</a>
		</li>
		

       

  
        <li><a href="#" onClick="left_link('/qna_list.do', 'Q&A')" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image2','','./images/left_menu/leftmenutext5_03_s.gif',1)" >Q&A</a>
		</li>
		

       

  
        <li><a href="#" onClick="left_link('/service_remote.do', '원격지원요청')" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image4','','./images/left_menu/leftmenutext5_05_s.gif',1)" >원격지원요청</a>
		</li>
		

       
	</ul>
	</div>









<style type='text/css'>
	.centerlet_twe a{ width:100%; }		
</style>


<div class="centerv_left_one">
	<div class="centerv_left_one_tite">병원검색</div>
	<div class="centerv_left_one_sect">
		<label for="subject_lab" class="blind">전체</label>

        <select name="clsjt_left" style="font-size:11px; color:#338BAC; border:1 solid #B7B7B7;" class="select_text" align="absmiddle">
          <option selected value="ALL">전체</option>
          
          <option value="내과">내과</option>
          
          <option value="치과">치과</option>
          
          <option value="소아청소년과">소아청소년과</option>
          
          <option value="산부인과">산부인과</option>
          
          <option value="산후조리원">산후조리원</option>
          
          <option value="조산원">조산원</option>
          
          <option value="이비인후과">이비인후과</option>
          
          <option value="안과">안과</option>
          
          <option value="피부과">피부과</option>
          
          <option value="비뇨기과">비뇨기과</option>
          
          <option value="신경정신과">신경정신과</option>
          
          <option value="외과">외과</option>
          
          <option value="정형외과">정형외과</option>
          
          <option value="성형외과">성형외과</option>
          
          <option value="신경외과">신경외과</option>
          
          <option value="항문외과">항문외과</option>
          
          <option value="흉부외과">흉부외과</option>
          
          <option value="한방">한방</option>
          
          <option value="한의원">한의원</option>
          
          <option value="가정의학과">가정의학과</option>
          
          <option value="재활의학과">재활의학과</option>
          
          <option value="노인전문">노인전문</option>
          
          <option value="치매">치매</option>
          
          <option value="통증클리닉">통증클리닉</option>
          
          <option value="방사선과">방사선과</option>
          
          <option value="마취과">마취과</option>
          
          <option value="결핵과">결핵과</option>
          
          <option value="임상병리과">임상병리과</option>
          
          <option value="알콜병원">알콜병원</option>
          
          <option value="일반">일반</option>
          
          <option value="종합">종합</option>
          
          <option value="기타">기타</option>
          
        </select>
						
	</div>

	<div class="centerv_left_one_bom">
		<span>
			<label for="thename_lab" class="blind">병원이름</label>			
			<input type="text" name="h_name_left" align="absmiddle" value="병원이름" style="font-size:11px; height:19; width:100; color:#338BAC; border:1 solid #B7B7B7;ime-mode:active" onFocus="setValue_left()" onKeyDown="pressSearch_left()" /><input type="button" style="BACKGROUND-COLOR: #A1D935;color: white ;width:44px;border:0;height:20px;font-size:10pt;cursor:pointer;" value="검색" onclick="field_search_left()" />
		</span>		
		<span></span>
	</div>	
</div>



  <!--검색 start-->
  
  
	
	
	<div class="centerlet_twe">			
		<a href="evermedi_info.do">
			<div class="centerlet_twe_top">ABOUT EVERMEDI</div>
			<div class="centerlet_twe_bom" >						
				<p class="p1">에버메디란?</p>
				<p class="p2">처음 방문하셨나요?</p>
			</div>
		</a>			
	</div>  	
	
	
	<div class="centerlet_twe">
		<a class="a1" href="service_order.do">
			<div class="centerlet_twe_top">SERVICE APPLICATION</div>
			<div class="centerlet_twe_bom twe_backy2">
				<p class="pbig">서비스 신청</p>
			</div>
		</a>
	</div>
	
  
  
	<!-- <div class="centerlet_twe">
		<a class="a1" href="manual_h.do" target="_new" onmousemove="msgposit();" onmouseout="msghide();return true;" onmouseover="msgset('회원가입에서 서비스신청(관리)까지 <br> 자세하게 안내해 드리겠습니다. ');return true;">
			<div class="centerlet_twe_top">ONE CLICK MANUAL</div>
			<div class="centerlet_twe_bom twe_backy3">
				<p class="pbigv">병의원을 위한</p>
				<p class="pbigv">원클릭 매뉴얼</p>
			</div>
		</a>
	</div> -->
	
  
  
  

<script>

function field_search_left(){
	var fm = document.left_menu_frm;
	
	if(fm.h_name_left.value == "병원이름"){
		fm.h_name_left.value = "";
	}
  fm.clsjt.value = fm.clsjt_left.value;
	fm.h_name.value = Trim(fm.h_name_left.value);
  fm.menu_.value = "search";
  fm.viewTitle.value = "진료과별검색";

	fm.target = "main";
	fm.action = "/field_search.do";
	fm.submit();
}

function pressSearch_left(){
	if(event.keyCode == 13){
		field_search_left();
	}
}

function setValue_left(){
	var fm = document.left_menu_frm;
  if(fm.h_name_left.value == "병원이름"){
      fm.h_name_left.value = "";
  }
}
</script>				
			<div> 
				<img src="/images/left/ba_customercenter.gif" alt="CUSTOMER CENTER" />
			</div>
				
</form>
<script>
function left_link(url, name){
	if(url!="#　"){
		var fm = document.left_menu_frm;
		fm.goalPage.value=url;
		fm.viewTitle.value = name;
		fm.target="main";
		fm.action = url;
		fm.submit();
	}
}

function show_menu(arg1, arg2){
  if(document.all[arg1].style.visibility == "hidden"){
    document.all[arg1].style.visibility = "visible";
    document.all[arg1].style.position = "relative";
  }else{
    document.all[arg1].style.visibility = "hidden";
    document.all[arg1].style.position = "absolute";
  }
}



</script>
			</div>
			<div class="centerv_right">
				

   






















<script>
function link_page(arg1){
	var fm = document.board_frm;
	fm.page.value = arg1;
	fm.target = "main";
	fm.action = "/faq_list.do";
	fm.submit();
}

function list_view(idx){
	var layer = eval(idx+".style");
	if(layer.visibility == "visible"){
		layer.visibility = "hidden";
		layer.position = "absolute";
	}else{
		layer.visibility = "visible";
		layer.position = "relative";
	}
}

function faq_modify_form_check(arg) {
	var fm = document.board_frm;
	fm.faq_num.value = arg;
	fm.target = "main";
	fm.action = "/faq_modify_form.do";
	fm.submit();
}

function faq_delcheck_check(arg) {
	var fm = document.board_frm;
	fm.faq_num.value = arg;
	fm.target = "main";
	fm.action = "/faq_delcheck_form.do";
	fm.submit();
}

function faq_select(arg) {
	var fm = document.board_frm;
	fm.s_code.value = arg;
	fm.page.value = 1;
	fm.target = "main";
	fm.action = "/faq_list.do";
	fm.submit();
}

function viewDetail(arg, topValue){
	
	var selFaq = document.getElementById(arg);
	
	selFaq.className=selFaq.className+ " on";
	document.body.scrollTop = topValue;
	
	return false;
}

function enter(value){
	if(event.keyCode == 13 ){
		var fm = document.board_frm;
		fm.page.value = 1;
		fm.target = "_self";
		fm.action = "/faq_list.do";
		fm.submit();		
	} 
}

function faq_search(){
	var fm = document.board_frm;
	fm.page.value = 1;
	fm.target = "_self";
	fm.action = "/faq_list.do";
	fm.submit();
}
</script>

<style type='text/css'>
	.button { BACKGROUND-COLOR: #A1D935;color: white ;padding:4 4 4 4;border:0;height:27px;font-size:10pt;cursor:pointer; }	
</style>


<form name="board_frm" method="post">
<input type="hidden" name="faq_num" />

<div class="centerv_right_top_tit1">
	<span><img src="../images/sub4/sub4cenlt5.gif" alt="home" /></span>
	&gt;
	<span>고객지원</span>
	&gt;
	<span class="spaor">FAQ</span>
</div>
<div class="centerv_right_top_tit2">FAQ</div>
<div class="centerv_right_top_tit3">FREQUENTLY ASKED QUESTIONS</div>
		
<div class="centerv_right_labelv">

	<div class="han_top_label">
		<div class="han_top_label_lf">
			<label for="han_sele01">
				<select name="s_code" size="1">
				  <option value="009">전체</option>
				  
				  <option value="001">개인정보</option>
				  
				  <option value="002">병원정보</option>
				  
				  <option value="003">검색</option>
				  
				  <option value="004">예약</option>
				  
				  <option value="005">만족도조사</option>
				  
				  <option value="006">홈피</option>
				  
				</select>
				<script>document.board_frm.s_code.value='009';</script>
								
			</label>
			<label for="han_inp01">
				<input type="text" name="keyWord" size="20" value="" onKeyDown="enter(this.value)" style="ime-mode:active;" />
				<span>								
				<input type="button" class="button" style="width:44px;"value="검색" onclick="faq_search()" />				
				</span>
			</label>
		</div>
		<div class="han_top_label_rt">							
			 
		</div>
		<div class="clear"></div>
	</div>
		
	<div class="han_faq">		
			
		<div class="han_faq_question">
			<p>Q&nbsp; &nbsp;[개인정보] 가족구성원 추가는 어떻게 하나요?</p>

			
			<div class="clear"></div>
		</div>
		
		<div id="T_0" class="han_faq_an"  >
			<p>A&nbsp; &nbsp;가족구성원 추가는 개인정보수정에서 실명확인후 하단에 가족을 추가할수 있습니다. 
<br>가족구성원 추가하신후 &#39;수정완료&#39; 버튼을 눌러주세요.</p>
		</div>

				
		<div class="han_faq_question">
			<p>Q&nbsp; &nbsp;[개인정보] 실명인증시 실명인증하는 주민번호가 이미 가입되어 있다고 나옵니다.</p>

			
			<div class="clear"></div>
		</div>
		
		<div id="T_1" class="han_faq_an"  >
			<p>A&nbsp; &nbsp;개인정보수정화면에서 실명인증시 실명인증하는 주민번호가 이미 가입되어 있다고 나오는 경우는 예전에 해당 주민번호로 저희 에버메디에 이미 가입하신 경우가 있는것입니다.
<br>로그인 화면 아래에 아이디/비밀번호 찾기를 이용해보세요.
<br>그래도 모르시겠다면 저희 에버메디로 문의 전화 바랍니다.</p>
		</div>

				
		<div class="han_faq_question">
			<p>Q&nbsp; &nbsp;[홈피] Windows8, Internet Explorer(IE) 10 버전에서는 에버메디 이용못하나요?</p>

			
			<div class="clear"></div>
		</div>
		
		<div id="T_2" class="han_faq_an"  >
			<p>A&nbsp; &nbsp;Windows8 에서 사용하는 Internet Explorer(IE) 10 버전은 
<br>
<br>에버메디 홈페이지에서 키보드(자판)중 왼쪽 밑에 Alt를 누르고 
<br>위쪽 메뉴에서 도구 -&gt; 호환성 보기 설정 클릭 
<br>&#39;이 웹 사이트 추가&#39;에 &#39;evermedi.co.kr&#39;를 추가하셔서 
<br>&#39;호환성 보기에 추가한 웹 사이트&#39;에 추가되면 사용 가능합니다.  </p>
		</div>

				
		<div class="han_faq_question">
			<p>Q&nbsp; &nbsp;[홈피] 스마트폰(아이폰)으로는 에버메디 홈페이지에 접속하여 사용 못하나요?</p>

			
			<div class="clear"></div>
		</div>
		
		<div id="T_3" class="han_faq_an"  >
			<p>A&nbsp; &nbsp;스마트폰으로 인터넷 처럼 접속하여 사용할 수 있습니다.
<br>에버메디 홈페이지 첫 화면에 왼쪽에 스마트폰 예약 바로가기가 있습니다. 
<br>접속하셔서 아이디와 핸드폰번호 입력하시면 회원인증절차에 따라 예약이 가능하십니다.</p>
		</div>

				
		<div class="han_faq_question">
			<p>Q&nbsp; &nbsp;[예약] 당일 사용자취소의 경우도 예약불이행으로 불이익을 받는건가요?</p>

			
			<div class="clear"></div>
		</div>
		
		<div id="T_4" class="han_faq_an"  >
			<p>A&nbsp; &nbsp;당일 예약인경우 예약시간이 지난 상태에서 취소 불가능하고요.
<br>
<br>당일 예약시간 이전에 취소하시면 불이익 없습니다.</p>
		</div>

				
		<div class="han_faq_question">
			<p>Q&nbsp; &nbsp;[예약] 아이가 둘이상인데 한번에 예약하고 싶어요.</p>

			
			<div class="clear"></div>
		</div>
		
		<div id="T_5" class="han_faq_an"  >
			<p>A&nbsp; &nbsp;예약하실 날짜, 예약하실 의사선생님, 예약하실 시간을 선택후 실제 진료받을 분을 선택하고 옆에 추가 버튼을 누르면 아래 리스트에 추가가 됩니다.
<br>
<br>다른 아이를 예약하시려면 같은 방법으로 날짜, 선생님, 시간을 변경후 실제 진료받을 분 선택하여 추가 하고 확인하신다음 예약하시면 됩니다.</p>
		</div>

				
		<div class="han_faq_question">
			<p>Q&nbsp; &nbsp;[검색] 문의할게 있는데 Q&A(질답란)이 안보여요.</p>

			
			<div class="clear"></div>
		</div>
		
		<div id="T_6" class="han_faq_an"  >
			<p>A&nbsp; &nbsp;에버메디 홈페이지 상단 오른쪽에 고객지원 -&gt; Q&A 가 있습니다.</p>
		</div>

				
		<div class="han_faq_question">
			<p>Q&nbsp; &nbsp;[예약] 예약하려는 병원이 안보입니다.</p>

			
			<div class="clear"></div>
		</div>
		
		<div id="T_7" class="han_faq_an"  >
			<p>A&nbsp; &nbsp;에버메디 예약서비스를 이용하는 병원만 에버메디에서 예약이 가능합니다.
<br>
<br>예약 가능한 병원을 찾으시려면 메인페이지 상단에 
<br>
<br>병원예약 -&gt; 예약병원검색을 이용하시면 됩니다.</p>
		</div>

				
		<div class="han_faq_question">
			<p>Q&nbsp; &nbsp;[예약] 예약 불이행이 3건이라서 예약을 못한다는데 어떻게 해야 하나요?</p>

			
			<div class="clear"></div>
		</div>
		
		<div id="T_8" class="han_faq_an"  >
			<p>A&nbsp; &nbsp;&lt; 예약 불이행 &gt; 
<br>▷ 간호사가 예약입실 버튼을 클릭하였을 때 예약시간보나 늦으면 진료를 받으셨어도 예약 불이행 처리됩니다. 
<br>즉, 예약시간이전에 예약입실 버튼이 클릭되지 않으면 예약 불이행으로 처리됩니다. 
<br> - 예약 불이행시 포인트 5점이 차감됩니다. 
<br>
<br>꼭!!!! 예약하신분은 예약입실을 간호사에게 말해야 합니다.
<br> 
<br>*** 가족구성원 포함하여 1년에 예약 불이행 3번 하게 되면 6개월간 예약 서비스를 이용하실 수 없습니다. (단. 사용자 조건에 맞을 경우 한달 후에 예약 가능)
<br>- 불이행 건수 3건 발생한 날로부터 한달간은 예약서비스 이용 불가 
<br>- 불이행 건수 3건 발생한 날로부터 한달이후 5개월간의 예약 서비스는 불이행 발생 건수 3건 발생한 날로부터 포인트 50점이상 추가 적립 시 예약 서비스 이용 가능 
<br>- 불이행 건수 3건 발생한 날로부터 한달이후 5개월간의 예약 서비스는 예약문자를 이용 시 예약 서비스 이용 가능 
<br>- 불이행 건수 3건이상인 회원의 경우 예약문자를 이용하고도 불이행을 하면 불이행일이 연장되어 최종 불이행일 이후 한달간 예약서비스 이용 불가 
<br>- 매해 1월 1일에 2건 이하의 불이행 건수는 0건으로 초기화 </p>
		</div>

				
		<div class="han_faq_question">
			<p>Q&nbsp; &nbsp;[예약] 예약시 &#39;오늘 이전 예약은 하실 수 없습니다.&#39; 라는 메시지가 나올경우</p>

			
			<div class="clear"></div>
		</div>
		
		<div id="T_9" class="han_faq_an"  >
			<p>A&nbsp; &nbsp;병원 예약을 위해 날짜 클릭했는데
<br>
<br>&#39;오늘 이전 예약은 하실 수 없습니다.&#39; 라는
<br>
<br>메시지가 나올경우에는
<br>
<br>컴퓨터 시간을 확인해 보시기 바랍니다.
<br>
<br>확인 방법은 컴퓨터 화면에서 오른쪽 하단에 보면 시간이 있습니다.
<br>
<br>시간을 더블클릭하셔서 현재 날짜를 확인해 보시고 
<br>
<br>날짜가 틀리면 수정하시기 바랍니다.
</p>
		</div>

				

	</div>

 <!-- %//=========================================== 페이징 처리 ============================ s %> -->
	<div class="han_btn_cen">		
		  
			  <a href="#" class="on">1</a>&nbsp;
		  
			<a href="#" onclick="link_page('2')">2</a>&nbsp;
		  
			<a href="#" onclick="link_page('3')">3</a>&nbsp;
		  
			<a href="#" onclick="link_page('4')">4</a>&nbsp;
		  	  
	  <input type="hidden" name="page" value="4" />	  
	  <div class="clear"></div>
	</div>

 <!-- %//=========================================== 페이징 처리 ============================ e %> -->
</div>		

</form>


			</div>

			<div style="position:fixed;top:185px;margin-left:930px">			
				 
 
  <!-- 20100720 jm. updateCnt( A....... )은 EMS->광고관리->광고관리에서 병원 검색해서 복사해 넣으면 됨 . DB는 E_ADVERTISEMENT-->
<form name="ad_right" method="post">
<input type="hidden" name="a_code">

	<!-- 메인 고정 배너는 main/welcome.jsp에 -->
	<div><img src="/images/main/rb_dermped.gif" onclick="viewBlog('H20071221135104482');" title="서울 송파구 가락동" style="cursor:pointer;" /></div>
	<div><img src="/images/main/rb_navekids.gif" onclick="viewBlog('H20080724183501816');" title="경기 성남시 분당구 야탑동" style="cursor:pointer;margin-top:5px" /></div>
	<!-- <div><img src="/images/main/rb_yatap.gif" onclick="viewBlog('H20081021164200592');" title="경기 성남시 분당구 야탑동" style="cursor:pointer;margin-top:5px" /></div> -->
	<div><img src="/images/main/rb_rhonal.gif" onclick="viewBlog('H20120423000922220');" title="서울 노원구 상계6.7동" style="cursor:pointer;margin-top:5px" /></div>	
	<!-- <div> 메타포뮬러 왼쪽 광고 
		<img src="/images/main/evermedi_main_metaformula.png" onclick="window.open('http://www.metaformula.co.kr/shop/member/randPedi.php?code=goodkids')" style="cursor:pointer;margin-top:10px" />	
	</div> -->
	<div align="center" style="margin-top: 10px"><a href="#header">▲TOP</a></div>

</form>

<!--
<script> 
function right_link_url(arg) 
{
   var pm = window.open('http://'+arg,'','');
   pm.focus();
}
function updateCnt(arg)
{
  var fm = document.ad_right;
	fm.a_code.value = arg;
	fm.target = "no_frame";
	fm.action = "/updateClick_cnt.do";
	fm.submit();
}
</script>
-->
			</div>
			
			<div class="clear"></div>
		</div>
	</div>
	<div id="footer">
		<!--footer start-->



	<div class="footerv">
		<div class="footertopv">
			<ul>
				<li><a href="evermedi_join_service.do?menu_name=myroom" target="_self">이용약관</a></li>
				<li><a class="acolor" href="evermedi_privacy.do?menu_name=myroom" target="_self">개인정보취급방침</a></li>				
				<li><a href="evermedi_email.do" target="_self">이메일무단수집거부</a></li>
				<li><a href="evermedi_reservation.do" target="_self">예약불이행정책</a></li>
				<li><a class="bynone" href="evermedi_drop_out.do" target="_self">회원탈퇴안내</a></li>
			</ul>
			<div class="clear"></div>
		</div>
		<div class="footerbom">
			<div class="footerbom_letv"><a href="#"><img src="/images/footer/footer2.gif" alt="에버메디" /></a></div>
			<div class="footerbom_rit">
			<p>경기 성남시 분당구 정자일로 177 (정자동, 인텔리지II) B동 2312호<!-- <br />(주) 세명 | 대표자 : 변호숙 | 사업자등록번호 : 129-81-84391 | 통신판매신고 : 제 2006-040호<br />개인정보관리자 : 나종민 ( rjm9814@sojeera.com )-->
			<img src="/images/footer/footer.gif" alt="">
			<br />COPYRIGHT 2006-2018 SAEMYUNG ALL RIGHTS RESERVED</p>				
			</div>
			<div class="clear"></div>
		</div>
	</div>


<!--footer end-->
	</div>
</div>
</body>
</html>

