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
<input type="hidden" name="goalPage" value="all_evalue.do" />
<input type="hidden" name="menu_" />
<input type="hidden" name="viewTitle" />
<input type="hidden" name="goon" />
<input type="hidden" name="clsjt" value="ALL" />
<input type="hidden" name="h_name" />



 <div class="centerv_left_menu">
	<ul class="v_menu">


     
        <li><a href="#　" onClick="left_link('/all_evalue.do', '만족도조사우수병원')" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image0','','./images/left_menu/leftmenutext3_01_s.gif',1)">만족도조사우수병원</a></li>
     

     
        <li><a href="#　" onClick="left_link('/evalue.do?mode=e_key', '만족도조사참여')" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image2','','./images/left_menu/leftmenutext3_02_s.gif',1)">만족도조사참여</a></li>
     

     
        <li><a href="#　" onClick="left_link('/evalue_guide.do', '만족도조사가이드')" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image5','','./images/left_menu/leftmenutext3_03_s.gif',1)">만족도조사가이드</a></li>
     


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
				























<style>
	.button { BACKGROUND-COLOR: #35B0D9;color: white ;padding:4 4 4 4;width:44px;border:0;height:25px;font-size:10pt; }	
	.bom_label td{ text-align:left; }
</style>

<form name="mainfrm" method="post">
<input type="hidden" name="goon">
<input type="hidden" name="pdong">

<div class="centerv_right_top">
	<div class="centerv_right_top_tit1">
		<span><img src="../images/sub4/sub4cenlt5.gif" alt="home" /></span>
		&gt;
		<span>만족도조사</span>
		&gt;
		<span class="spaor">만족도조사 우수병원</span>
	</div>
	<div class="centerv_right_top_tit2">만족도조사 우수병원</div>
	<div class="centerv_right_top_tit3">EXCELLENT HOSPITAL</div>
</div>

<div class="centerv_right_tititel">
	<p class="pflet">전체 우수병원</p>
	<p class="pfrit">※ 최근 2년간 실제 방문하여 진료 받은 환자가 참여한 만족도 조사 결과입니다.</p>
	<p class="clear"></p>
</div>

<div class="centerv_right_label">
	<table style="width:100%;border-spacing:0;border-collapse:collapse;" class="bom_label">
		<caption>해설 코스 안내</caption>
		<colgroup>
			<col style="width:6%" />
			<col style="width:19%" />
			<col style="width:30%" />
			<col style="width:23%" />
			<col style="width:22%" />
		</colgroup>
		<thead>
			<tr class="backyfa">
				<th scope="col" class="noborle">번호</th>
				<th scope="col">병원명</th>
				<th scope="col">진료과목</th>
				<th scope="col">위치</th>
				<th scope="col">점수 (참여건수)</th>
			</tr>
		</thead>
		<tbody>
			 

			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">1</td>
				<td class="backblue" title="준소아청소년과(준소아과)"><a href="#" onclick="viewBlog('H20110922105244709')">준소아청소년과(준...</a></td>
				<td title="내과/소아청소년과/이비인후과/피부과">내과/소아청소년과/이비인후과/...</td>
				<td class="backblue" title="충청북도 청주시 흥덕구 2순환로 1240">충청북도 청주시 흥덕구...</td>
				<td>
						
						
							<span title='만족도 조사 결과'>
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
									
								
							  
							</span>
						(17건)
				</td>
			</tr>

			

			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">1</td>
				<td class="backblue" title="더튼튼소아청소년과의원"><a href="#" onclick="viewBlog('H20090407172513149')">더튼튼소아청소년과...</a></td>
				<td title="내과/소아청소년과/이비인후과/피부과">내과/소아청소년과/이비인후과/...</td>
				<td class="backblue" title="서울특별시 마포구 마포대로 68">서울특별시 마포구 마포...</td>
				<td>
						
						
							<span title='만족도 조사 결과'>
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
									
								
							  
							</span>
						(3건)
				</td>
			</tr>

			

			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">3</td>
				<td class="backblue" title="이선영소아과의원"><a href="#" onclick="viewBlog('H20080818131508529')">이선영소아과의원</a></td>
				<td title="소아청소년과">소아청소년과</td>
				<td class="backblue" title="경기도 구리시 장자대로74 (수택동, 새롬프라자8차)">경기도 구리시 장자대로...</td>
				<td>
						
						
							<span title='만족도 조사 결과'>
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
								
							  
							</span>
						(30건)
				</td>
			</tr>

			

			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">3</td>
				<td class="backblue" title="보아스이비인후과(수유)"><a href="#" onclick="viewBlog('H20130816165444058')">보아스이비인후과(...</a></td>
				<td title="소아청소년과/이비인후과">소아청소년과/이비인후과</td>
				<td class="backblue" title="서울특별시 강북구 도봉로 255">서울특별시 강북구 도봉...</td>
				<td>
						
						
							<span title='만족도 조사 결과'>
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
								
							  
							</span>
						(11건)
				</td>
			</tr>

			

			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">5</td>
				<td class="backblue" title="아이맘소아청소년과(대전)"><a href="#" onclick="viewBlog('H20141118111951674')">아이맘소아청소년과...</a></td>
				<td title="소아청소년과">소아청소년과</td>
				<td class="backblue" title="대전광역시 서구 문정로 7">대전광역시 서구 문정로...</td>
				<td>
						
						
							<span title='만족도 조사 결과'>
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
								
							  
							</span>
						(325건)
				</td>
			</tr>

			

			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">5</td>
				<td class="backblue" title="봄소아청소년과(파주)"><a href="#" onclick="viewBlog('H20161229130219464')">봄소아청소년과(파...</a></td>
				<td title="소아청소년과">소아청소년과</td>
				<td class="backblue" title="경기도 파주시 문산읍 당동2로 1">경기도 파주시 문산읍 ...</td>
				<td>
						
						
							<span title='만족도 조사 결과'>
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
								
							  
							</span>
						(223건)
				</td>
			</tr>

			

			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">5</td>
				<td class="backblue" title="라파이비인후과"><a href="#" onclick="viewBlog('H20090805113651200')">라파이비인후과</a></td>
				<td title="소아청소년과/이비인후과">소아청소년과/이비인후과</td>
				<td class="backblue" title="경기도 안양시 동안구 동안로194 (비산동, 한양스포츠센타)">경기도 안양시 동안구 ...</td>
				<td>
						
						
							<span title='만족도 조사 결과'>
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
								
							  
							</span>
						(184건)
				</td>
			</tr>

			

			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">5</td>
				<td class="backblue" title="닥터맘소아과(닥터맘소아청소년과)"><a href="#" onclick="viewBlog('H20110506130415604')">닥터맘소아과(닥터...</a></td>
				<td title="내과/소아청소년과/이비인후과/피부과">내과/소아청소년과/이비인후과/...</td>
				<td class="backblue" title="서울특별시 강북구 삼양로27길 35-21">서울특별시 강북구 삼양...</td>
				<td>
						
						
							<span title='만족도 조사 결과'>
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
								
							  
							</span>
						(174건)
				</td>
			</tr>

			

			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">5</td>
				<td class="backblue" title="푸른소아청소년과의원"><a href="#" onclick="viewBlog('H20110811135027360')">푸른소아청소년과의...</a></td>
				<td title="소아청소년과">소아청소년과</td>
				<td class="backblue" title="경기도 구리시 이문안로 72">경기도 구리시 이문안로...</td>
				<td>
						
						
							<span title='만족도 조사 결과'>
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
								
							  
							</span>
						(138건)
				</td>
			</tr>

			

			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">5</td>
				<td class="backblue" title="가연소아청소년과(가연소아과)"><a href="#" onclick="viewBlog('H20091113172728956')">가연소아청소년과(...</a></td>
				<td title="소아청소년과">소아청소년과</td>
				<td class="backblue" title="서울특별시 관악구 남부순환로 1838">서울특별시 관악구 남부...</td>
				<td>
						
						
							<span title='만족도 조사 결과'>
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
								
							  
							</span>
						(84건)
				</td>
			</tr>

			

			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">5</td>
				<td class="backblue" title="연세소아과"><a href="#" onclick="viewBlog('H20090319182223580')">연세소아과</a></td>
				<td title="내과/소아청소년과/이비인후과/피부과">내과/소아청소년과/이비인후과/...</td>
				<td class="backblue" title="서울특별시 관악구 관악로30길 12">서울특별시 관악구 관악...</td>
				<td>
						
						
							<span title='만족도 조사 결과'>
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
								
							  
							</span>
						(50건)
				</td>
			</tr>

			

			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">12</td>
				<td class="backblue" title="오산웰봄소아청소년과(웰봄소아과)"><a href="#" onclick="viewBlog('H20121106112925043')">오산웰봄소아청소년...</a></td>
				<td title="내과/소아청소년과/이비인후과/피부과/기타">내과/소아청소년과/이비인후과/...</td>
				<td class="backblue" title="경기도 오산시 경기대로189 (원동, 메딕프라자)">경기도 오산시 경기대로...</td>
				<td>
						
						
							<span title='만족도 조사 결과'>
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
									<img src="/images/se/icon03_01.gif" alt="" />
									
									
								
							  
							</span>
						(526건)
				</td>
			</tr>

			

			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">12</td>
				<td class="backblue" title="두정이진병원"><a href="#" onclick="viewBlog('H20100303170018019')">두정이진병원</a></td>
				<td title="소아청소년과">소아청소년과</td>
				<td class="backblue" title="충청남도 천안시 서북구 동서대로 65">충청남도 천안시 서북구...</td>
				<td>
						
						
							<span title='만족도 조사 결과'>
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
									<img src="/images/se/icon03_01.gif" alt="" />
									
									
								
							  
							</span>
						(288건)
				</td>
			</tr>

			

			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">12</td>
				<td class="backblue" title="아이랑소아청소년과"><a href="#" onclick="viewBlog('H20130629103028095')">아이랑소아청소년과</a></td>
				<td title="소아청소년과">소아청소년과</td>
				<td class="backblue" title="서울특별시 관악구 난곡로210 (신림동, 난곡새마을금고)">서울특별시 관악구 난곡...</td>
				<td>
						
						
							<span title='만족도 조사 결과'>
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
									<img src="/images/se/icon03_01.gif" alt="" />
									
									
								
							  
							</span>
						(233건)
				</td>
			</tr>

			

			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">12</td>
				<td class="backblue" title="삼성화곡소아청소년과"><a href="#" onclick="viewBlog('H20141006154452395')">삼성화곡소아청소년...</a></td>
				<td title="내과/소아청소년과/이비인후과/피부과">내과/소아청소년과/이비인후과/...</td>
				<td class="backblue" title="서울특별시 강서구 강서로13길 3">서울특별시 강서구 강서...</td>
				<td>
						
						
							<span title='만족도 조사 결과'>
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
									<img src="/images/se/icon03_01.gif" alt="" />
									
									
								
							  
							</span>
						(227건)
				</td>
			</tr>

			

			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">12</td>
				<td class="backblue" title="신필진소아과"><a href="#" onclick="viewBlog('H20080807170916354')">신필진소아과</a></td>
				<td title="소아청소년과">소아청소년과</td>
				<td class="backblue" title="서울특별시 중랑구 신내로 211">서울특별시 중랑구 신내...</td>
				<td>
						
						
							<span title='만족도 조사 결과'>
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
									<img src="/images/se/icon03_01.gif" alt="" />
									
									
								
							  
							</span>
						(126건)
				</td>
			</tr>

			

			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">12</td>
				<td class="backblue" title="구앤배소아청소년과"><a href="#" onclick="viewBlog('H20080704132638079')">구앤배소아청소년과</a></td>
				<td title="소아청소년과">소아청소년과</td>
				<td class="backblue" title="경기도 화성시 병점2로 30">경기도 화성시 병점2로...</td>
				<td>
						
						
							<span title='만족도 조사 결과'>
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
									<img src="/images/se/icon03_01.gif" alt="" />
									
									
								
							  
							</span>
						(88건)
				</td>
			</tr>

			

			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">12</td>
				<td class="backblue" title="쉬즈메디소아과(쉬즈메디소아청소년과)"><a href="#" onclick="viewBlog('H20110524110321806')">쉬즈메디소아과(쉬...</a></td>
				<td title="소아청소년과">소아청소년과</td>
				<td class="backblue" title="경기도 수원시 팔달구 장다리로288 (인계동)">경기도 수원시 팔달구 ...</td>
				<td>
						
						
							<span title='만족도 조사 결과'>
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
									<img src="/images/se/icon03_01.gif" alt="" />
									
									
								
							  
							</span>
						(63건)
				</td>
			</tr>

			

			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">12</td>
				<td class="backblue" title="연세아주소아청소년과"><a href="#" onclick="viewBlog('H20130820104305733')">연세아주소아청소년...</a></td>
				<td title="내과/소아청소년과/이비인후과/안과/피부과/가정의학과">내과/소아청소년과/이비인후과/...</td>
				<td class="backblue" title="경기도 광주시 중앙로 110">경기도 광주시 중앙로 ...</td>
				<td>
						
						
							<span title='만족도 조사 결과'>
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
									<img src="/images/se/icon03_01.gif" alt="" />
									
									
								
							  
							</span>
						(40건)
				</td>
			</tr>

			

			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">12</td>
				<td class="backblue" title="보아스이비인후과(면목원)"><a href="#" onclick="viewBlog('H20110428095230537')">보아스이비인후과(...</a></td>
				<td title="이비인후과">이비인후과</td>
				<td class="backblue" title="서울특별시 중랑구 겸재로181 (면목동)">서울특별시 중랑구 겸재...</td>
				<td>
						
						
							<span title='만족도 조사 결과'>
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									<img src="/images/se/icon01_01.gif" alt="" />
									
									
									<img src="/images/se/icon03_01.gif" alt="" />
									
									
								
							  
							</span>
						(39건)
				</td>
			</tr>

			
		</tbody>
	</table>
</div>

<div class="centerv_right_tititel">
	<p class="pflet">지역/진료과목별 우수병원</p>			
	<p class="clear"></p>
</div>
	
		
<div class="centerv_right_center">
	<div class="centerv_right_center_let">
		<span class="span1">
			<label for="conditions_lab">지역</label>
			<select name="sido" onChange="selectSido(this)">
				<option selected value="ALL">전체</option>
			
				<option value="강원">강원</option>
			
				<option value="경기">경기</option>
			
				<option value="경남">경남</option>
			
				<option value="경북">경북</option>
			
				<option value="광주">광주</option>
			
				<option value="대구">대구</option>
			
				<option value="대전">대전</option>
			
				<option value="부산">부산</option>
			
				<option value="서울">서울</option>
			
				<option value="울산">울산</option>
			
				<option value="인천">인천</option>
			
				<option value="전남">전남</option>
			
				<option value="전북">전북</option>
			
				<option value="제주">제주</option>
			
				<option value="충남">충남</option>
			
				<option value="충북">충북</option>
			
            </select>
			<script>document.mainfrm.sido.value='ALL';</script>

			<select name="sigungu" onChange="selectSigungu(this)">
              <option selected value="ALL">전체</option>
			
				<option value=""></option>
			
            </select>
			<script>document.mainfrm.sigungu.value='ALL';</script>
	
		
			<select name="dong">
			  <option selected value="ALL">전체</option>
			</select>
		</span>

		<span class="span2">
			<label for="conditions5_lab">진료과목</label>
				<td>
				<select name="clsjt">
				  <option selected value="ALL">전체</option>
				
				  <option value="001">내과</option>
				
				  <option value="002">치과</option>
				
				  <option value="003">소아청소년과</option>
				
				  <option value="004">산부인과</option>
				
				  <option value="030">산후조리원</option>
				
				  <option value="031">조산원</option>
				
				  <option value="005">이비인후과</option>
				
				  <option value="006">안과</option>
				
				  <option value="007">피부과</option>
				
				  <option value="008">비뇨기과</option>
				
				  <option value="009">신경정신과</option>
				
				  <option value="010">외과</option>
				
				  <option value="011">정형외과</option>
				
				  <option value="012">성형외과</option>
				
				  <option value="013">신경외과</option>
				
				  <option value="014">항문외과</option>
				
				  <option value="015">흉부외과</option>
				
				  <option value="016">한방</option>
				
				  <option value="017">한의원</option>
				
				  <option value="018">가정의학과</option>
				
				  <option value="019">재활의학과</option>
				
				  <option value="020">노인전문</option>
				
				  <option value="021">치매</option>
				
				  <option value="022">통증클리닉</option>
				
				  <option value="023">방사선과</option>
				
				  <option value="024">마취과</option>
				
				  <option value="025">결핵과</option>
				
				  <option value="026">임상병리과</option>
				
				  <option value="027">알콜병원</option>
				
				  <option value="028">일반</option>
				
				  <option value="029">종합</option>
				
				  <option value="032">기타</option>
				
            </select>
			<script>document.mainfrm.clsjt.value='ALL';</script>

		</span>

		<span class="span3">
			<label for="conditions5_lab">년도</label>
			<select name="year" onChange="setMonth(this)">
				<option selected value="ALL">전체</option>

			
				<option value="2005" >2005</option>
				
				<option value="2006" >2006</option>
				
				<option value="2007" >2007</option>
				
				<option value="2008" >2008</option>
				
				<option value="2009" >2009</option>
				
				<option value="2010" >2010</option>
				
				<option value="2011" >2011</option>
				
				<option value="2012" >2012</option>
				
				<option value="2013" >2013</option>
				
				<option value="2014" >2014</option>
				
				<option value="2015" >2015</option>
				
				<option value="2016" >2016</option>
				
				<option value="2017" >2017</option>
				
				<option value="2018" >2018</option>
				
				<option value="2019" selected>2019</option>
				
            </select>

			<select name="month">
			<option selected value="ALL">전체</option>
			
				  <option value="0" selected>1월</option>
				
				  <option value="1" >2월</option>
				
				  <option value="2" >3월</option>
				
				  <option value="3" >4월</option>
				
				  <option value="4" >5월</option>
				
				  <option value="5" >6월</option>
				
				  <option value="6" >7월</option>
				
				  <option value="7" >8월</option>
				
				  <option value="8" >9월</option>
				
				  <option value="9" >10월</option>
				
				  <option value="10" >11월</option>
				
				  <option value="11" >12월</option>
				
            </select>
			</span>			
	</div>
	<div class="centerv_right_center_rit">
		<input type="button" value="조회" class="button" alt="조회" onclick="Langkingsearch()" />				
	</div>
	<div class="clear"></div>
</div>


<div class="centerv_right_label">
	<table style="width:100%;border-spacing:0;border-collapse:collapse;" class="bom_label">
		<caption>해설 코스 안내</caption>
		<colgroup>
			<col style="width:6%" />
			<col style="width:19%" />
			<col style="width:30%" />
			<col style="width:23%" />
			<col style="width:22%" />
		</colgroup>
		<thead>
			<tr class="backyfa">
				<th scope="col" class="noborle">번호</th>
				<th scope="col">병원명</th>
				<th scope="col">진료과목</th>
				<th scope="col">위치</th>
				<th scope="col">점수 (참여건수)</th>
			</tr>
		</thead>
		<tbody>
			
			
			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">1</td>
				<td class="backblue" title="구앤배소아청소년과"><a href="#" onclick="viewBlog('H20080704132638079')">구앤배소아청소년과</a></td>
				<td title="소아청소년과">소아청소년과</td>
				<td class="backblue" title="경기도 화성시 병점2로 30">경기도 화성시 병점2로...</td>
				<td>
					
						<span title="만족도 조사 결과">
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						
						
					
				  
				</span>(1건)</td>
			</tr>

			
			
			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">1</td>
				<td class="backblue" title="닥터맘소아과(닥터맘소아청소년과)"><a href="#" onclick="viewBlog('H20110506130415604')">닥터맘소아과(닥터...</a></td>
				<td title="내과/소아청소년과/이비인후과/피부과">내과/소아청소년과/이비인후과/...</td>
				<td class="backblue" title="서울특별시 강북구 삼양로27길 35-21">서울특별시 강북구 삼양...</td>
				<td>
					
						<span title="만족도 조사 결과">
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						
						
					
				  
				</span>(4건)</td>
			</tr>

			
			
			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">1</td>
				<td class="backblue" title="봄소아청소년과(파주)"><a href="#" onclick="viewBlog('H20161229130219464')">봄소아청소년과(파...</a></td>
				<td title="소아청소년과">소아청소년과</td>
				<td class="backblue" title="경기도 파주시 문산읍 당동2로 1">경기도 파주시 문산읍 ...</td>
				<td>
					
						<span title="만족도 조사 결과">
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						
						
					
				  
				</span>(2건)</td>
			</tr>

			
			
			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">1</td>
				<td class="backblue" title="라파이비인후과"><a href="#" onclick="viewBlog('H20090805113651200')">라파이비인후과</a></td>
				<td title="소아청소년과/이비인후과">소아청소년과/이비인후과</td>
				<td class="backblue" title="경기도 안양시 동안구 동안로194 (비산동, 한양스포츠센타)">경기도 안양시 동안구 ...</td>
				<td>
					
						<span title="만족도 조사 결과">
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						
						
					
				  
				</span>(2건)</td>
			</tr>

			
			
			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">1</td>
				<td class="backblue" title="푸른소아청소년과의원"><a href="#" onclick="viewBlog('H20110811135027360')">푸른소아청소년과의...</a></td>
				<td title="소아청소년과">소아청소년과</td>
				<td class="backblue" title="경기도 구리시 이문안로 72">경기도 구리시 이문안로...</td>
				<td>
					
						<span title="만족도 조사 결과">
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						
						
					
				  
				</span>(1건)</td>
			</tr>

			
			
			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">1</td>
				<td class="backblue" title="오산웰봄소아청소년과(웰봄소아과)"><a href="#" onclick="viewBlog('H20121106112925043')">오산웰봄소아청소년...</a></td>
				<td title="내과/소아청소년과/이비인후과/피부과/기타">내과/소아청소년과/이비인후과/...</td>
				<td class="backblue" title="경기도 오산시 경기대로189 (원동, 메딕프라자)">경기도 오산시 경기대로...</td>
				<td>
					
						<span title="만족도 조사 결과">
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						
						
					
				  
				</span>(1건)</td>
			</tr>

			
			
			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">7</td>
				<td class="backblue" title="샤인소아청소년과"><a href="#" onclick="viewBlog('H20101207125456394')">샤인소아청소년과</a></td>
				<td title="내과/소아청소년과/이비인후과/피부과">내과/소아청소년과/이비인후과/...</td>
				<td class="backblue" title="서울특별시 광진구 중곡2동 124-8번지">서울특별시 광진구 중곡...</td>
				<td>
					
						<span title="만족도 조사 결과">
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						
						<img src="/images/se/icon03_01.gif" alt="" />
						
						
					
				  
				</span>(2건)</td>
			</tr>

			
			
			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">8</td>
				<td class="backblue" title="아이랑소아청소년과"><a href="#" onclick="viewBlog('H20130629103028095')">아이랑소아청소년과</a></td>
				<td title="소아청소년과">소아청소년과</td>
				<td class="backblue" title="서울특별시 관악구 난곡로210 (신림동, 난곡새마을금고)">서울특별시 관악구 난곡...</td>
				<td>
					
						<span title="만족도 조사 결과">
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						
						<img src="/images/se/icon03_01.gif" alt="" />
						
						
					
				  
				</span>(4건)</td>
			</tr>

			
			
			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">9</td>
				<td class="backblue" title="삼성화곡소아청소년과"><a href="#" onclick="viewBlog('H20141006154452395')">삼성화곡소아청소년...</a></td>
				<td title="내과/소아청소년과/이비인후과/피부과">내과/소아청소년과/이비인후과/...</td>
				<td class="backblue" title="서울특별시 강서구 강서로13길 3">서울특별시 강서구 강서...</td>
				<td>
					
						<span title="만족도 조사 결과">
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						
						<img src="/images/se/icon03_01.gif" alt="" />
						
						
					
				  
				</span>(2건)</td>
			</tr>

			
			
			<tr class="backyfa borbom">
				<td class="noborle" style="text-align:center;">10</td>
				<td class="backblue" title="아이맘소아청소년과(대전)"><a href="#" onclick="viewBlog('H20141118111951674')">아이맘소아청소년과...</a></td>
				<td title="소아청소년과">소아청소년과</td>
				<td class="backblue" title="대전광역시 서구 문정로 7">대전광역시 서구 문정로...</td>
				<td>
					
						<span title="만족도 조사 결과">
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						<img src="/images/se/icon01_01.gif" alt="" />
						
						
						<img src="/images/se/icon03_01.gif" alt="" />
						
						
					
				  
				</span>(1건)</td>
			</tr>

			
		</tbody>

	</table>
</div>
<div class="centerv_right_zibomm">점수 계산방식 만족도 조사항목(비율) : 진료만족도(50%), 청결도(20%), 친절도(30%) 비율로 계산됩니다.</div>
</form>

	  <iframe name="hiddenFrm" width="0" height="0"></iframe>

<script>


function setSigungu(){
	var fm = document.mainfrm;
	fm.goon.value = 'ALL';
	fm.target="hiddenFrm";
	fm.action="setSigungu.do";
	fm.submit();
}

function setDong(){
	var fm = document.mainfrm;
	fm.pdong.value = 'ALL';
	fm.target="hiddenFrm";
	fm.action="setDong.do";
	fm.submit();
}

function selectSido(obj){
	var fm = document.mainfrm;

	if(obj.value == "ALL"){
		fm.sigungu.length = 1;
		fm.sigungu[0].value="ALL";
		fm.sigungu[0].text="전체";
		fm.dong.length = 1;
		fm.dong[0].value="ALL";
		fm.dong[0].text="전체";
	}else{

		fm.target="hiddenFrm";
		fm.action="setSigungu.do";
		fm.submit();
		
	}
}

function selectSigungu(obj){
	var fm = document.mainfrm;

	if(obj.value == "ALL"){
		fm.dong.length = 1;
		fm.dong[0].value="ALL";
		fm.dong[0].text="전체";
	}else{

		fm.target="hiddenFrm";
		fm.action="setDong.do";
		fm.submit();
		
	}
}

function setYear(obj){
	var fm = document.mainfrm;

	if(obj.value == "ALL"){
		fm.sigungu.length = 1;
		fm.sigungu[0].value="ALL";
		fm.sigungu[0].text="전체";
	}else{

		fm.target="hiddenFrm";
		fm.action="setSigungu.do";
		fm.submit();
		
	}
}

function Langkingsearch(){
	var fm = document.mainfrm;
	fm.target = "_self";
	fm.action="all_evalue.do";
	fm.submit();
}

function setMonth(obj){
	var fm = document.mainfrm;

	if(obj.value == "ALL"){
		fm.month.length = 1;
		fm.month[0].value="ALL";
		fm.month[0].text="전체";
	}else{
		fm.month.length = 13;
		fm.month[0].value="ALL";
		fm.month[0].text="전체";
		for(i=0; i<12; i++){
			fm.month[i+1].value=""+i;
			fm.month[i+1].text=""+(i+1)+"월";
		}
	}
}
</script>

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

