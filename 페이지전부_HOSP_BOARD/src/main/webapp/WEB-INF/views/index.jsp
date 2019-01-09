<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ include file="/WEB-INF/include/include-header.jspf" %>    

<!DOCTYPE html>
<html lang="ko">


<!-- http://localhost:8080/default/home -->

<head>
<style type="text/css">
	.r_search_btn { BACKGROUND-COLOR: #8DC422;color: white ;padding:4px 4px 4px 4px;width:130px;border:0;height:23px;font-size:14px;cursor:pointer; }	
	.center2 {width:921px;margin:0 auto;padding:10px 0px 0px 0px;position:relative;}
	.footer2 {width:921px;margin:0 auto;padding:20px 0px 0px 0px;}

	.table4_3 table {
		width:100%;
		margin:15px 0;
		border:0;
	}
	.table4_3 th {
		background-color:#87CEFA;
		color:#000000
	}
	.table4_3,.table4_3 th,.table4_3 td {
		font-size:0.95em;
		text-align:center;
		padding:4px;
		border-collapse:collapse;
	}
	.table4_3 th,.table4_3 td {
		border: 1px solid #A1D935;
		border-width:1px 1px 1px 1px
	}
	.table4_3 tr {
		border: 1px solid #bae3fc;
	}
	.table4_3 tr:nth-child(odd){
		/* background-color:#E9FFD2; */
	}
	.table4_3 tr:nth-child(even){
		background-color:#fdfdfd;
	}

</style>

<!-- 20180913 jm. layerPopup 추가 s. -->
<script language="Javascript"> 
<!-- 
function setCookie2( name, value, expiredays ) { 
    var todayDate = new Date(); 
        todayDate.setDate( todayDate.getDate() + expiredays ); 
        document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";" 
    }
function closeWin() { 
    if ( document.notice_form.chkbox.checked ){ 
        setCookie2( "maindiv", "done" , 1 ); 
    } 
    document.all['divpop'].style.visibility = "hidden"; 
} 
//-->  
</script> 
<!-- 20180913 jm. layerPopup 추가 e. -->


</head>

<body  onLoad="getid(document.snap_login_frm);getpw(document.snap_login_frm);">
<div class="skipNav">
	<a href="#header">상단메뉴 바로가기 </a>
	<a href="#center">본문 바로가기 </a>
	<a href="#footer">하단주소 바로가기 </a>
</div>
<!-- 20180913 jm. layerPopup 추가 s. -->
<!-- <div id="divpop" style="position:fixed;left:50%;top:50%;z-index:200;visibility:hidden;margin-left:-200px; margin-top:-200px"> 
<table width="357" height="400" cellpadding=2 cellspacing=0> 
<tr> 
    <td style="border:1px #666666 solid" height="360" align=center bgcolor=white> 
		<table width="100%" border="0" cellpadding="0" cellspacing="0" background="/images/pop/notice04.jpg" style="background-repeat:no-repeat;">
			<tr height="110">
				<td></td>
			</tr>
			<tr>
			<td valign="top" style="padding:0px 25px 0px 25px">
			<table width="100%" border="0" cellpadding="0" cellspacing="0">      
			  <tr>
				<td colspan="2" height="0">
				</td>
			  </tr>
			  
			  <tr>        	 
				<td  style="padding:0 0 0 0">  -->


				<!--※ 결실의 계절과 함께 찾아 온 한가위!<br>
				모든 분들의 가슴이 정겹고 즐거운 시간으로 물들었으면 합니다.<br><br>
				※ 가족과 함께 편안한 연휴 보내시고,<br>
				뜻한 바 좋은 결실을 맺는 풍성한 가을 맞으시길 바랍니다.<br><br>
			   ※ 연휴기간 2018/09/22(토)~26(수) 동안은 고객지원이 불가능하오니 양해해 주시기 바랍니다.<br><br>
			   ※ 예약서비스 이용 가능합니다. 예약 가능한 병원은 꼭 확인 전화 하시고 방문 바랍니다.  -->

			<!--     1. 작업일시 : 2018년 10월 27일(토) 오후 10:30~11:00<br />
				2. 작업내용 : 안정적인 서비스를 위해 서버 작업<br />
				3. 작업영향 : 예약 서비스 이용할 수 없습니다. <br />		
				<br /><br />	
				서비스 이용에 불편을 드려 죄송합니다.
				 <br />
				앞으로 더 좋은 서비스로 보답하고자 노력하겠습니다.  -->

		<!--		</td>
			  </tr> 
			  <tr>
				<td colspan="2" height="10">
				</td>
			  </tr>
			  <tr>       
				<td style="padding:0 0 0 0">
				※ 에버메디를 이용해 주셔서 감사합니다.
				</td>
			  </tr>
			  <tr>
				<td colspan="2" height="10">
				</td>
			  </tr>
			</table>
			</td>
		  </tr>  

		</table>
    </td> 
</tr> 
<tr> 
        <form name="notice_form"> 
    <td align=right bgcolor=white> 
        <input type="checkbox" name="chkbox" value="checkbox">오늘 하루 이 창을 열지 않음 
        <a href="javascript:closeWin();"><B>[닫기]</B></a> 
    </td> 
</tr> 
        </form> 
</table> 
</div> -->
<!-- 20180913 jm. layerPopup 추가 e. -->
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
//20151129 jm. Firefox는 event를 파라미터로 넣어야되는데 이렇게 리스너에 등록해두면 Ok. /resources/js/common.js에서 pressSearch를 보면 파라미터에 event가 없음.
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
				<div class="headerbom_cen_let"><a href="/welcome.do"><img src="/resources/images/main/header1.gif" alt="에버메디" /></a></div>
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
		<div class="center2">
			<div class="centerlet">
				<div class="centerlet_one">
				<!-- 로그인박스 시작 -->
				
 





<style type="text/css">
	.loginout_btn { BACKGROUND-COLOR: #35b0d9;color: white ;padding:4px 4px 4px 4px;width:51px;border:0;height:23px;cursor:pointer; }
	.modify_btn { BACKGROUND-COLOR: #35b0d9;color: white ;padding:4px 4px 4px 4px;width:100px;border:0;height:23px;cursor:pointer; }
    .hospital_btn { BACKGROUND-COLOR: #EEB331;color: white ;padding:4px 4px 4px 4px;width:51px;border:0;height:23px;cursor:pointer; }
	.personal_btn { BACKGROUND-COLOR: #8DC422;color: white ;padding:4px 4px 4px 4px;width:51px;border:0;height:23px;cursor:pointer; }	
</style>





    
     
	<!-- jQuery (필수) -->
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.js"></script>

	<!-- RSA 기반 보안 로그인 자동화 스크립트 파일 (필수) -->
	<script type="text/javascript" language="javascript" src="/resources/js/ssRsa.js"></script>
	

<form name="snap_login_frm" action="login.do" method="post" runat="server" rsa>
<input type="hidden" name="login_mode" id="login_mode" value="login">
<input type="hidden" name="join_type" id="join_type" value="">
<input type="hidden" name="join_step"  id="join_step" value="join_step1">
<input type="hidden" name="login_page" id="login_page" value="mainpage">
<input type="hidden" id="id_rsa" name="id_rsa" value="">
<input type="hidden" id="pw_rsa" name="pw_rsa" value="">

			<div style="width:0;height:0;visibility: hidden;display:none;">

                <p id="private" style="width:0;height:0;visibility: hidden;display:none;">-----BEGIN RSA PRIVATE KEY-----MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAmdhLsbCxnEilP/abdwfdp2Uk5pjtlYoU2GrAOLqvsCd4FvCFL5TipFgLte1TT8TtfyVIEiHthUDNi65XlAl8mwIDAQABAkAAz+2GYKJvasrEja7AcCAxdA0/0mresT3u7pFZO1MWIP0c0FPzLFIqnv3kssGqL7fq76FMGbLtxKkdEB1cCVVBAiEA2J3RERGoqHq8dtnboeOLC8JMoHrcEK1nW7/L/664lSsCIQC10NfcEeJbgA6fcoZTf+tgg3hMC3ADth5XXXj3mVXeUQIgPrbCNqzkJZMTSV2dpusX8JmaUcQAPpvVlsyapTXSnu0CIQCia8kKTee6+fEWO8cH/PSWqZvjwyv0BNOiFFymRBLToQIgUtX1sErU7owLgoRikrltM5vCvq7q9PVU4xwfKRl3oag=-----BEGIN RSA PRIVATE KEY-----</p>
                <hr />
                <p id="public" style="width:0;height:0;visibility: hidden;display:none;">-----BEGIN PUBLIC KEY-----MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJnYS7GwsZxIpT/2m3cH3adlJOaY7ZWKFNhqwDi6r7AneBbwhS+U4qRYC7XtU0/E7X8lSBIh7YVAzYuuV5QJfJsCAwEAAQ==-----END PUBLIC KEY-----</p>
            </div>
				
				<div class="centerlet_one_tite">
					<span class="spal"><a href="http://www.evermedi.kr:8088/main.jsp" target="_top" id="mobilePage" name="mobilePage" style="visibility:hidden;font-weight:blod;">무료 모바일 홈페이지가기</a></span>					
					<div class="clear"></div>
				</div>
				<div class="centerlet_one_price">
					<span>회원가입&nbsp;&nbsp;&nbsp;</span>
					<input type="button" value="병원" class='hospital_btn' onclick="join('H','1','snap_login_frm')" />&nbsp;
					<input type="button" value="개인" class='personal_btn' onclick="join('M','1','snap_login_frm')" />
					<div class="clear"></div>
				</div>

</form>
<form name="login_frm_before">
				<div class="centerlet_one_infmtn">
					<p><span class="spa1">
						<label for="name_lab" class="blind">아이디</label>						
						<input type="text" id="id" name="id"  placeholder="아이디" onKeyDown="pressLogin2('snap_login_frm','login_frm_before')" style="ime-mode:inactive;" />
					</span>
					<span class="spa2">
						<input type="checkbox" name="checksaveid" id="checksaveid"/> <label for="preservation_lab">저장</label>
					</span></p>
					<p><span class="spa1">
						<label for="password_lab" class="blind">비밀번호</label>
						<input type="password" id="pw" name="pw" placeholder="비밀번호" onKeyDown="pressLoginpass('snap_login_frm','login_frm_before')" />
					</span>
					<span class="spa2">
						<input type="checkbox" name="checksavepw" id="checksavepw"/> <label for="preservation2_lab">저장</label>
					</span></p>
				</div>
				<div class="centerlet_one_bot">
					<span class="spal"><a href="lookingforIdPasswd.do">아이디/비밀번호 찾기</a></span>
					<span class="spar"><input type="button" value="login" class='loginout_btn' onclick="snaplogin('snap_login_frm','login_frm_before')">
					</span>
					<div class="clear"></div>
				</div>
  </form>			

  					
   

<script>

//모바일 단말기 확인
var ua = window.navigator.userAgent.toLowerCase();
if ( /iphone/.test(ua) || /android/.test(ua) || /opera/.test(ua) || /bada/.test(ua) ) {
	document.all["mobilePage"].style.visibility = "visible"; //모바일은 무료 모바일 홈페이지가기 보이게.
}

</script>

				<!-- 로그인박스 끝 -->				
				</div>
				<div class="centerlet_twe">					
					<a href="evermedi_info.do" style="width:100%">
						<div class="centerlet_twe_top">ABOUT EVERMEDI</div>
						<div class="centerlet_twe_bom" >						
							<p class="p1">에버메디란?</p>
							<p class="p2">처음 방문하셨나요?</p>
						</div>
					</a>							
				</div>  
				<div class="centerlet_three">
					<div class="centerlet_three_top">Quick choice</div>
					<div class="centerlet_three_bom">					
					<a class="a1" href="hosp_bookmark_list.do"><img src="/images/main/q_hosp_bookmark_list.gif" alt="관심병원" /></a>
					<a class="a2" href="reserv_hist.do"><img src="/images/main/q_reserv_hist.gif" alt="나의 예약현황" /></a>
					<a class="a3" href="h_diary_body.do"><img src="/images/main/q_h_diary_body.gif" alt="성장기록" /></a>
					<a class="a4" href="h_diary_plan.do"><img src="/images/main/q_h_diary_plan.gif" alt="예방접종" /></a>					
					</div>
				</div>
				<!-- div class="centerlet_four"><a href="/viewBlog.do?blog_h_code=H20080820170828111"><img src="/images/main/ad_hosp_hsc.gif" alt="홍순철소아과"/></a></div -->			
				<div>
					<img src="/images/left/ba_customercenter.gif" alt="CUSTOMER CENTER" />
				</div>
			</div>
		</div>

		<div class="centercen">
			<div class="centercen_top">
				<div class="centercen_top_tp">
					<img src="/images/main/centercen2.png" alt="언제 어디서나 전국 병원 검색 및 예약 에버메디에서는 여러분의 빠른 쾌유를 기원하고 있습니다." />
				</div>
				<div class="centercen_top_bm">		
					<form name="mainfrm" method="post">
						<input type="hidden" name="menu_name" value="search">
						<input type="hidden" name="a_code">	
						<input type="hidden" name="blog_h_code">
						<input type="hidden" name="code">	
						<input type="hidden" name="name">	
						<input type="hidden" name="afterNoteCnt">
						<input type="hidden" name="from" value='welcome'>
						<input type="hidden" name="goon" >
						<P>
							<label for="subject_lab" class="blind">전체(진료과목)</label>
							
							<select name="clsjt" id="clsjt">
								<option value="ALL">전체(진료과목)</option>
								 
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
						</P>
						<P>
						<span>
							<label for="medicine_lab" class="blind">예) 연세내과</label>
							<input type="text" id="h_name" name="h_name" value="예) 연세내과" onclick="javascript:if(this.value=='예) 연세내과'){this.value=''};" onblur="javascript:if(this.value==''){this.value='예) 연세내과'};" style="ime-mode:active" onKeyDown="pressSearch('/field_search.do?menu_name=search')" />								
						</span>
						<span>
							<img src="/images/main/btn_search.gif" alt="검색" onclick="field_search('/field_search.do?menu_name=search')" style="cursor:pointer"/>					
						</span>
						</P>							
					</form>       
				</div>				
			</div>

			<div>				
				<div id="map" style="width:474px;height:172px;">				
					<table style="width:474px;height:170px;" class="table4_3">
						<tr>
							<td colspan="4" style="font-size:15px;height:10%;background-color:#E9FFD2;">예약가능 병원 지역</td>
						</tr>
						<tr>
							<td style="width:25%"><a href="# " onclick="LocationSearch('서울특별시')" style="cursor:pointer">서울특별시</a></td>
							<td style="width:25%"><a href="# " onclick="LocationSearch('경기도')" style="cursor:pointer">경기도</a></td>
							<td style="width:25%"><a href="# " onclick="LocationSearch('인천광역시')" style="cursor:pointer">인천광역시</a></td>
							<td style="width:25%"><a href="# " onclick="LocationSearch('대전광역시')" style="cursor:pointer">대전광역시</a></td>							
						</tr>
						<tr>
							<td style="width:25%"><a href="# " onclick="LocationSearch('충청남도')" style="cursor:pointer">충청남도</a></td>							
							<td style="width:25%"><a href="# " onclick="LocationSearch('충청북도')" style="cursor:pointer">충청북도</a></td>							
							<td style="width:25%"><a href="# " onclick="LocationSearch('경상남도')" style="cursor:pointer">경상남도</a></td>
							<td style="width:25%"><a href="# " onclick="LocationSearch('경상북도')" style="cursor:pointer">경상북도</a></td>
						</tr>
						<tr>
							<td style="width:25%"><a href="# " onclick="LocationSearch('전라남도')" style="cursor:pointer">전라남도</a></td>
							<td style="width:25%"><a href="# " onclick="LocationSearch('전라북도')" style="cursor:pointer">전라북도</a></td>
							<td style="width:25%"><a href="# " onclick="LocationSearch('세종특별자치시')" style="cursor:pointer">세종특별자치시</a></td>							
							<td></td>							
						</tr>
					</table>					
				</div>
				<div class="centercen_bom_bm_cent" >
				<!-- 만족도 조사 우수병원 시작 -->
				
							
		
		
		
						<div class="centercen_bom_bm_cent_v">
							<p title="준소아청소년과(준소아과)"><a href='#' onclick="viewBlog('H20110922105244709')" style="cursor:pointer">준소아청소년과(준소아...</a></p>
							<p>
					<span title='만족도 조사 결과'>
							<img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" />
					</span>
							<span title='만족도 참여건수'>(17건)</span></p>							
							
							<p><span class="spby">043-238-8338</span></p>

							<p title="충청북도 청주시 흥덕구 2순환로 1240">충청북도 청주시 흥덕구 ...</p>

							<p>
															
								<input type="button" name='ImagenameE2_0' value="이용후기" class="button" onclick="openAfterNote('H20110922105244709', '준소아청소년과(준소아과)', '1', 'mainfrm')" />
							
							</p>
						</div>


		
		
						<div class="centercen_bom_bm_cent_v">
							<p title="더튼튼소아청소년과의원"><a href='#' onclick="viewBlog('H20090407172513149')" style="cursor:pointer">더튼튼소아청소년과의원</a></p>
							<p>
					<span title='만족도 조사 결과'>
							<img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" />
					</span>
							<span title='만족도 참여건수'>(3건)</span></p>							
							
							<p><span class="spby">02-704-7575</span></p>

							<p title="서울특별시 마포구 마포대로 68">서울특별시 마포구 마포대...</p>

							<p>
							
							<a href="#"></a>
							
							</p>
						</div>


		
		
						<div class="centercen_bom_bm_cent_v">
							<p title="이선영소아과의원"><a href='#' onclick="viewBlog('H20080818131508529')" style="cursor:pointer">이선영소아과의원</a></p>
							<p>
					<span title='만족도 조사 결과'>
							<img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" />
					</span>
							<span title='만족도 참여건수'>(30건)</span></p>							
							
							<p><span class="spby">031-558-0075</span></p>

							<p title="경기도 구리시 장자대로74 (수택동, 새롬프라자8차)">경기도 구리시 장자대로7...</p>

							<p>
							
							<a href="#"></a>
							
							</p>
						</div>


		
						<div class="clear"></div>
						
		
						<div class="centercen_bom_bm_cent_v">
							<p title="보아스이비인후과(수유)"><a href='#' onclick="viewBlog('H20130816165444058')" style="cursor:pointer">보아스이비인후과(수유...</a></p>
							<p>
					<span title='만족도 조사 결과'>
							<img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" />
					</span>
							<span title='만족도 참여건수'>(11건)</span></p>							
							
							<p><span class="spby">02-980-1530</span></p>

							<p title="서울특별시 강북구 도봉로 255">서울특별시 강북구 도봉로...</p>

							<p>
															
								<input type="button" name='ImagenameE2_3' value="이용후기" class="button" onclick="openAfterNote('H20130816165444058', '보아스이비인후과(수유)', '1', 'mainfrm')" />
							
							</p>
						</div>


		
		
						<div class="centercen_bom_bm_cent_v">
							<p title="아이맘소아청소년과(대전)"><a href='#' onclick="viewBlog('H20141118111951674')" style="cursor:pointer">아이맘소아청소년과(대...</a></p>
							<p>
					<span title='만족도 조사 결과'>
							<img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" />
					</span>
							<span title='만족도 참여건수'>(325건)</span></p>							
							
							<p><span class="spby">042-471-0101</span></p>

							<p title="대전광역시 서구 문정로 7">대전광역시 서구 문정로 ...</p>

							<p>
															
								<input type="button" name='ImagenameE2_4' value="이용후기" class="button" onclick="openAfterNote('H20141118111951674', '아이맘소아청소년과(대전)', '1', 'mainfrm')" />
							
							</p>
						</div>


		
		
						<div class="centercen_bom_bm_cent_v">
							<p title="봄소아청소년과(파주)"><a href='#' onclick="viewBlog('H20161229130219464')" style="cursor:pointer">봄소아청소년과(파주)</a></p>
							<p>
					<span title='만족도 조사 결과'>
							<img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" />
					</span>
							<span title='만족도 참여건수'>(223건)</span></p>							
							
							<p><span class="spby">031-952-7570</span></p>

							<p title="경기도 파주시 문산읍 당동2로 1">경기도 파주시 문산읍 당...</p>

							<p>
							
							<a href="#"></a>
							
							</p>
						</div>


		
						<div class="clear"></div>
						
		
						<div class="centercen_bom_bm_cent_v">
							<p title="라파이비인후과"><a href='#' onclick="viewBlog('H20090805113651200')" style="cursor:pointer">라파이비인후과</a></p>
							<p>
					<span title='만족도 조사 결과'>
							<img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" />
					</span>
							<span title='만족도 참여건수'>(184건)</span></p>							
							
							<p><span class="spby">031-386-0066</span></p>

							<p title="경기도 안양시 동안구 동안로194 (비산동, 한양스포츠센타)">경기도 안양시 동안구 동...</p>

							<p>
															
								<input type="button" name='ImagenameE2_6' value="이용후기" class="button" onclick="openAfterNote('H20090805113651200', '라파이비인후과', '1', 'mainfrm')" />
							
							</p>
						</div>


		
		
						<div class="centercen_bom_bm_cent_v">
							<p title="닥터맘소아과(닥터맘소아청소년과)"><a href='#' onclick="viewBlog('H20110506130415604')" style="cursor:pointer">닥터맘소아과(닥터맘소...</a></p>
							<p>
					<span title='만족도 조사 결과'>
							<img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" />
					</span>
							<span title='만족도 참여건수'>(174건)</span></p>							
							
							<p><span class="spby">02-982-8678</span></p>

							<p title="서울특별시 강북구 삼양로27길 35-21">서울특별시 강북구 삼양로...</p>

							<p>
							
							<a href="#"></a>
							
							</p>
						</div>


		
		
						<div class="centercen_bom_bm_cent_v">
							<p title="푸른소아청소년과의원"><a href='#' onclick="viewBlog('H20110811135027360')" style="cursor:pointer">푸른소아청소년과의원</a></p>
							<p>
					<span title='만족도 조사 결과'>
							<img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" />
					</span>
							<span title='만족도 참여건수'>(138건)</span></p>							
							
							<p><span class="spby">031-555-6800</span></p>

							<p title="경기도 구리시 이문안로 72">경기도 구리시 이문안로 ...</p>

							<p>
															
								<input type="button" name='ImagenameE2_8' value="이용후기" class="button" onclick="openAfterNote('H20110811135027360', '푸른소아청소년과의원', '1', 'mainfrm')" />
							
							</p>
						</div>


		
						<div class="clear"></div>
						
		
						<div class="centercen_bom_bm_cent_v">
							<p title="가연소아청소년과(가연소아과)"><a href='#' onclick="viewBlog('H20091113172728956')" style="cursor:pointer">가연소아청소년과(가연...</a></p>
							<p>
					<span title='만족도 조사 결과'>
							<img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" />
					</span>
							<span title='만족도 참여건수'>(84건)</span></p>							
							
							<p><span class="spby">02-885-6903</span></p>

							<p title="서울특별시 관악구 남부순환로 1838">서울특별시 관악구 남부순...</p>

							<p>
															
								<input type="button" name='ImagenameE2_9' value="이용후기" class="button" onclick="openAfterNote('H20091113172728956', '가연소아청소년과(가연소아과)', '1', 'mainfrm')" />
							
							</p>
						</div>


		
		
						<div class="centercen_bom_bm_cent_v">
							<p title="연세소아과"><a href='#' onclick="viewBlog('H20090319182223580')" style="cursor:pointer">연세소아과</a></p>
							<p>
					<span title='만족도 조사 결과'>
							<img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" />
					</span>
							<span title='만족도 참여건수'>(50건)</span></p>							
							
							<p><span class="spby">02-888-3953</span></p>

							<p title="서울특별시 관악구 관악로30길 12">서울특별시 관악구 관악로...</p>

							<p>
							
							<a href="#"></a>
							
							</p>
						</div>


		
		
						<div class="centercen_bom_bm_cent_v">
							<p title="오산웰봄소아청소년과(웰봄소아과)"><a href='#' onclick="viewBlog('H20121106112925043')" style="cursor:pointer">오산웰봄소아청소년과(...</a></p>
							<p>
					<span title='만족도 조사 결과'>
							<img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon03_01.gif" alt="" />
					</span>
							<span title='만족도 참여건수'>(526건)</span></p>							
							
							<p><span class="spby">031-373-7585</span></p>

							<p title="경기도 오산시 경기대로189 (원동, 메딕프라자)">경기도 오산시 경기대로1...</p>

							<p>
							
							<a href="#"></a>
							
							</p>
						</div>


		
						<div class="clear"></div>
						
		
						<div class="centercen_bom_bm_cent_v">
							<p title="두정이진병원"><a href='#' onclick="viewBlog('H20100303170018019')" style="cursor:pointer">두정이진병원</a></p>
							<p>
					<span title='만족도 조사 결과'>
							<img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon03_01.gif" alt="" />
					</span>
							<span title='만족도 참여건수'>(288건)</span></p>							
							
							<p><span class="spby">041-562-2021</span></p>

							<p title="충청남도 천안시 서북구 동서대로 65">충청남도 천안시 서북구 ...</p>

							<p>
															
								<input type="button" name='ImagenameE2_12' value="이용후기" class="button" onclick="openAfterNote('H20100303170018019', '두정이진병원', '1', 'mainfrm')" />
							
							</p>
						</div>


		
		
						<div class="centercen_bom_bm_cent_v">
							<p title="아이랑소아청소년과"><a href='#' onclick="viewBlog('H20130629103028095')" style="cursor:pointer">아이랑소아청소년과</a></p>
							<p>
					<span title='만족도 조사 결과'>
							<img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon03_01.gif" alt="" />
					</span>
							<span title='만족도 참여건수'>(233건)</span></p>							
							
							<p><span class="spby">02-868-8683</span></p>

							<p title="서울특별시 관악구 난곡로210 (신림동, 난곡새마을금고)">서울특별시 관악구 난곡로...</p>

							<p>
															
								<input type="button" name='ImagenameE2_13' value="이용후기" class="button" onclick="openAfterNote('H20130629103028095', '아이랑소아청소년과', '1', 'mainfrm')" />
							
							</p>
						</div>


		
		
						<div class="centercen_bom_bm_cent_v">
							<p title="삼성화곡소아청소년과"><a href='#' onclick="viewBlog('H20141006154452395')" style="cursor:pointer">삼성화곡소아청소년과</a></p>
							<p>
					<span title='만족도 조사 결과'>
							<img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon03_01.gif" alt="" />
					</span>
							<span title='만족도 참여건수'>(227건)</span></p>							
							
							<p><span class="spby">02-2699-7533</span></p>

							<p title="서울특별시 강서구 강서로13길 3">서울특별시 강서구 강서로...</p>

							<p>
															
								<input type="button" name='ImagenameE2_14' value="이용후기" class="button" onclick="openAfterNote('H20141006154452395', '삼성화곡소아청소년과', '1', 'mainfrm')" />
							
							</p>
						</div>


		
						<div class="clear"></div>
						
		
						<div class="centercen_bom_bm_cent_v">
							<p title="신필진소아과"><a href='#' onclick="viewBlog('H20080807170916354')" style="cursor:pointer">신필진소아과</a></p>
							<p>
					<span title='만족도 조사 결과'>
							<img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon03_01.gif" alt="" />
					</span>
							<span title='만족도 참여건수'>(126건)</span></p>							
							
							<p><span class="spby">02-3421-1822</span></p>

							<p title="서울특별시 중랑구 신내로 211">서울특별시 중랑구 신내로...</p>

							<p>
															
								<input type="button" name='ImagenameE2_15' value="이용후기" class="button" onclick="openAfterNote('H20080807170916354', '신필진소아과', '1', 'mainfrm')" />
							
							</p>
						</div>


		
		
						<div class="centercen_bom_bm_cent_v">
							<p title="구앤배소아청소년과"><a href='#' onclick="viewBlog('H20080704132638079')" style="cursor:pointer">구앤배소아청소년과</a></p>
							<p>
					<span title='만족도 조사 결과'>
							<img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon03_01.gif" alt="" />
					</span>
							<span title='만족도 참여건수'>(88건)</span></p>							
							
							<p><span class="spby">031-232-2338</span></p>

							<p title="경기도 화성시 병점2로 30">경기도 화성시 병점2로 ...</p>

							<p>
							
							<a href="#"></a>
							
							</p>
						</div>


		
		
						<div class="centercen_bom_bm_cent_v">
							<p title="쉬즈메디소아과(쉬즈메디소아청소년과)"><a href='#' onclick="viewBlog('H20110524110321806')" style="cursor:pointer">쉬즈메디소아과(쉬즈메...</a></p>
							<p>
					<span title='만족도 조사 결과'>
							<img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon03_01.gif" alt="" />
					</span>
							<span title='만족도 참여건수'>(63건)</span></p>							
							
							<p><span class="spby">031-231-7380</span></p>

							<p title="경기도 수원시 팔달구 장다리로288 (인계동)">경기도 수원시 팔달구 장...</p>

							<p>
															
								<input type="button" name='ImagenameE2_17' value="이용후기" class="button" onclick="openAfterNote('H20110524110321806', '쉬즈메디소아과(쉬즈메디소아청소년과)', '1', 'mainfrm')" />
							
							</p>
						</div>


		
						<div class="clear"></div>
						
		
						<div class="centercen_bom_bm_cent_v">
							<p title="연세아주소아청소년과"><a href='#' onclick="viewBlog('H20130820104305733')" style="cursor:pointer">연세아주소아청소년과</a></p>
							<p>
					<span title='만족도 조사 결과'>
							<img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon03_01.gif" alt="" />
					</span>
							<span title='만족도 참여건수'>(40건)</span></p>							
							
							<p><span class="spby">031-797-9754</span></p>

							<p title="경기도 광주시 중앙로 110">경기도 광주시 중앙로 1...</p>

							<p>
															
								<input type="button" name='ImagenameE2_18' value="이용후기" class="button" onclick="openAfterNote('H20130820104305733', '연세아주소아청소년과', '1', 'mainfrm')" />
							
							</p>
						</div>


		
		
						<div class="centercen_bom_bm_cent_v">
							<p title="보아스이비인후과(면목원)"><a href='#' onclick="viewBlog('H20110428095230537')" style="cursor:pointer">보아스이비인후과(면목...</a></p>
							<p>
					<span title='만족도 조사 결과'>
							<img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon03_01.gif" alt="" />
					</span>
							<span title='만족도 참여건수'>(39건)</span></p>							
							
							<p><span class="spby">02-2207-1530</span></p>

							<p title="서울특별시 중랑구 겸재로181 (면목동)">서울특별시 중랑구 겸재로...</p>

							<p>
															
								<input type="button" name='ImagenameE2_19' value="이용후기" class="button" onclick="openAfterNote('H20110428095230537', '보아스이비인후과(면목원)', '1', 'mainfrm')" />
							
							</p>
						</div>


		
		
						<div class="centercen_bom_bm_cent_v">
							<p title="미래이비인후과의원"><a href='#' onclick="viewBlog('H20100708155253233')" style="cursor:pointer">미래이비인후과의원</a></p>
							<p>
					<span title='만족도 조사 결과'>
							<img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon03_01.gif" alt="" />
					</span>
							<span title='만족도 참여건수'>(32건)</span></p>							
							
							<p><span class="spby">031-911-6105</span></p>

							<p title="경기도 고양시 일산서구 중앙로1574 (대화동)">경기도 고양시 일산서구 ...</p>

							<p>
															
								<input type="button" name='ImagenameE2_20' value="이용후기" class="button" onclick="openAfterNote('H20100708155253233', '미래이비인후과의원', '1', 'mainfrm')" />
							
							</p>
						</div>


		
						<div class="clear"></div>
						
		
						<div class="centercen_bom_bm_cent_v">
							<p title="샤인소아청소년과"><a href='#' onclick="viewBlog('H20101207125456394')" style="cursor:pointer">샤인소아청소년과</a></p>
							<p>
					<span title='만족도 조사 결과'>
							<img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon03_01.gif" alt="" />
					</span>
							<span title='만족도 참여건수'>(88건)</span></p>							
							
							<p><span class="spby">02-562-8275</span></p>

							<p title="서울특별시 광진구 중곡2동 124-8번지">서울특별시 광진구 중곡2...</p>

							<p>
															
								<input type="button" name='ImagenameE2_21' value="이용후기" class="button" onclick="openAfterNote('H20101207125456394', '샤인소아청소년과', '1', 'mainfrm')" />
							
							</p>
						</div>


		
		
						<div class="centercen_bom_bm_cent_v">
							<p title="기분조은이비인후과"><a href='#' onclick="viewBlog('H20100517084531678')" style="cursor:pointer">기분조은이비인후과</a></p>
							<p>
					<span title='만족도 조사 결과'>
							<img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon03_01.gif" alt="" />
					</span>
							<span title='만족도 참여건수'>(64건)</span></p>							
							
							<p><span class="spby">031-574-2438</span></p>

							<p title="경기도 남양주시 오남읍 진건오남로 812">경기도 남양주시 오남읍 ...</p>

							<p>
							
							<a href="#"></a>
							
							</p>
						</div>


		
		
						<div class="centercen_bom_bm_cent_v">
							<p title="명문소아청소년과의원(명문소아과)"><a href='#' onclick="viewBlog('H20090605130814093')" style="cursor:pointer">명문소아청소년과의원(...</a></p>
							<p>
					<span title='만족도 조사 결과'>
							<img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon01_01.gif" alt="" /><img src="/images/se/icon03_01.gif" alt="" />
					</span>
							<span title='만족도 참여건수'>(48건)</span></p>							
							
							<p><span class="spby">031-439-3363</span></p>

							<p title="경기도 안산시 단원구 고잔로76 (고잔동, 영풍빌딩)">경기도 안산시 단원구 고...</p>

							<p>
							
							<a href="#"></a>
							
							</p>
						</div>


		
						<div class="clear"></div>
										
		   
<input type="hidden" name="evalue_list" value="H20110922105244709:H20090407172513149:H20080818131508529:H20130816165444058:H20141118111951674:H20161229130219464:H20090805113651200:H20110506130415604:H20110811135027360:H20091113172728956:H20090319182223580:H20121106112925043:H20100303170018019:H20130629103028095:H20141006154452395:H20080807170916354:H20080704132638079:H20110524110321806:H20130820104305733:H20110428095230537:H20100708155253233:H20101207125456394:H20100517084531678:H20090605130814093:">
<style type='text/css'>
	.button { BACKGROUND-COLOR: #35B0D9;color: white ;width:50px;border:0;height:15px;font-size:8pt;cursor:pointer; }	
</style>
				<!-- 만족도 조사 우수병원 끝 -->				
				</div>			
			</div>
		</div>

		<div class="centerrit">
			<div class="centerrit_one">
				<div class="centerrit_one_top">Quick search</div>
				<div class="centerrit_one_bom">
				<!-- 20151003 jm. 수정 s. -->
					<a href="host_search3.do"><img src="/images/main/q_ba_emergency.gif" alt="응급실진료" /></a>
					<a href="host_search4.do"><img src="/images/main/q_ba_holiday.gif" alt="휴일진료" /></a>
					<a href="host_search5.do"><img src="/images/main/q_btn_sunday.gif" alt="일요일진료" /></a>
					<a href="host_search8.do"><img src="/images/main/q_ba_night.gif" alt="야간진료" /></a>
				<!-- 20151003 jm. 수정 e. -->
				</div>
			</div>

			<!-- 공지사항 & FAQ 시작 -->
			<div id="Notice" class="centerrit_twe">
				<div class="centerrit_twe_cen">
				 



<style type='text/css'>	
	.new { BACKGROUND-COLOR: #FE8004;color: white ;padding:4px 4px 4px 4px;width:27px;border:0;height:15px;font-size:8pt; }	
</style>

<ul>
	<li>
		<a class="on" href="#">공지사항</a>
		<div class="centcencen" style="height:100px;">

    <p> * 공지사항이 없습니다.</p>

		</div>
		<div class="clear"></div>
	</li>
	<li>
		<a href="#">FAQ</a>
		<div  id="FAQ" class="centcencen centcenone">
    
        
		<p>
		<a href="#" onclick="go_faq('0')" title="가족구성원 추가는 어떻게 하나요?">
        
        가족구성원 추가는 어떻게 하...
		</a>
		</p>
       
       
    
        
		<p>
		<a href="#" onclick="go_faq('1')" title="실명인증시 실명인증하는 주민번호가 이미 가입되어 있다고 나옵니다.">
        
        실명인증시 실명인증하는 주민...
		</a>
		</p>
       
       
    
        
		<p>
		<a href="#" onclick="go_faq('2')" title="Windows8, Internet Explorer(IE) 10 버전에서는 에버메디 이용못하나요?">
        
        Windows8, Inter...
		</a>
		</p>
       
       
    
        
		<p>
		<a href="#" onclick="go_faq('3')" title="스마트폰(아이폰)으로는 에버메디 홈페이지에 접속하여 사용 못하나요?">
        
        스마트폰(아이폰)으로는 에버...
		</a>
		</p>
       
       
    
		</div>
		<div class="clear"></div>
	</li>
</ul>
<div class="clear"></div>

<script>
function selectMainNoticeFAQ(arg){
	if(arg == "N"){
		Notice.style.visibility = "visible";
		Notice.style.position = "relative";
		FAQ.style.visibility = "hidden";
		FAQ.style.position = "absolute";
		
		//document.getElementById("N").src="http://www.evermedi.kr/images/main/tab_notice_ov.gif";
		//document.getElementById("Q").src="http://www.evermedi.kr/images/main/tab_faq_no.gif";
		//document.getElementById("title").innerHTML = "개인을 위한 에버메디";
	}else if(arg == "Q"){
		Notice.style.visibility = "hidden";
		Notice.style.position = "absolute";
		FAQ.style.visibility = "visible";
		FAQ.style.position = "relative";
		//document.getElementById("N").src="http://www.evermedi.kr/images/main/tab_notice_no.gif";
		//document.getElementById("Q").src="http://www.evermedi.kr/images/main/tab_faq_ov.gif";
		//document.getElementById("title").innerHTML = "병원을 위한 에버메디 ";
	}
}

function goMore(){
	if(Notice.style.visibility == "visible")
		location.href='notice_list.do?tmpTopMenu=support&goalPage=notice_list.do';
	else
		location.href='faq_list.do?tmpTopMenu=support&goalPage=faq_list.do';
}
</script>



			

				</div>
			</div>
			<!-- 공지사항 & FAQ 끝 -->

			<!-- 병원이용후기 시작 -->
			<div class="centerrit_three">			
				





<div class="centerrit_three_top"><a href="#">병원이용후기</a></div>
				<div class="centerrit_three_bom">
            
				<p>					
					<a href="#" onclick="viewBlog('H20101207125456394')" title="예약하고 가니 대기시간 만족이 너무 좋았어요  금방 진료봐서 ..   병원 진료는 당연 좋았어요">*&nbsp;예약하고 가니 대기시간 만...</a>				
				</p>
            
				<p>					
					<a href="#" onclick="viewBlog('H20151229192223864')" title="좋은 진료를 받을 수 있도록 해주셔서 감사합니다! ">*&nbsp;좋은 진료를 받을 수 있도...</a>				
				</p>
            
				<p>					
					<a href="#" onclick="viewBlog('H20100303170018019')" title="다른것도 좋았지만 선생님께서 아주 친절하셔서 만족스러웠습니다">*&nbsp;다른것도 좋았지만 선생님께...</a>				
				</p>
            
				<p>					
					<a href="#" onclick="viewBlog('H20130629103028095')" title="동생과 같은 동네로 이사하며 조카가 다니는 소아과에 예방접종 하러 예약하고 갔는데, 좋은 소아과라 소문이 나서인지 아가 환자들이 많더라구요.^^; 소문대로 의사선생님, 간호사선생님 모두 친절하시고 진료도 잘 봐 주셨어요. 예약하고, 예약 시간보다 조금 일찍 도착한 덕분에 생각보다 오래 기다리지 않았습니다. 가까운 곳에 좋은 소아과가 있어서 다행이에요. ^^">*&nbsp;동생과 같은 동네로 이사하...</a>				
				</p>
            
</div>
			
			</div>
			<!-- 병원이용후기 끝 -->			
			
			<!-- 신규예약병원리스트 시작 -->
			<div class="centerrit_four">			
			


	

<div class="centerlet_twe_top">신규예약병원리스트</div>
<div class="centerlet_four_bom">
					
      	
		<div class="centerlet_four_bom_x">
			<p class="fotlt"><a href="#" onclick="viewBlog('H20181206123944269&from=rec_hospital&menu_name=search')" title="대전광역시 유성구 계백로 927">*&nbsp;대전코젤병원(관저)</a></p>
			<!-- 20151004 jm. 동작에 에러가 있고, 의미 없는 버튼이라 주석.  -->
			<!--<p class="fotrt"><img src="/images/main/btn_reserv.gif" name='btn_new_hosp_0' 
				onclick="reservation('hl','H20181206123944269')" style="cursor:hand"></p>-->
			<div class="clear"></div>
		</div>
      	
		<div class="centerlet_four_bom_x">
			<p class="fotlt"><a href="#" onclick="viewBlog('H20181115102104528&from=rec_hospital&menu_name=search')" title="경기도 남양주시 다산중앙로172번길 38">*&nbsp;키다리아저씨소아청소년과</a></p>
			<!-- 20151004 jm. 동작에 에러가 있고, 의미 없는 버튼이라 주석.  -->
			<!--<p class="fotrt"><img src="/images/main/btn_reserv.gif" name='btn_new_hosp_1' 
				onclick="reservation('hl','H20181115102104528')" style="cursor:hand"></p>-->
			<div class="clear"></div>
		</div>
      	
		<div class="centerlet_four_bom_x">
			<p class="fotlt"><a href="#" onclick="viewBlog('H20181015130233092&from=rec_hospital&menu_name=search')" title="경기도 수원시 영통구 효원로 363">*&nbsp;김민희소아과의원</a></p>
			<!-- 20151004 jm. 동작에 에러가 있고, 의미 없는 버튼이라 주석.  -->
			<!--<p class="fotrt"><img src="/images/main/btn_reserv.gif" name='btn_new_hosp_2' 
				onclick="reservation('hl','H20181015130233092')" style="cursor:hand"></p>-->
			<div class="clear"></div>
		</div>
      	
		<div class="centerlet_four_bom_x">
			<p class="fotlt"><a href="#" onclick="viewBlog('H20180807084653404&from=rec_hospital&menu_name=search')" title="경기도 남양주시 늘을1로16번길 25">*&nbsp;하나소아청소년과</a></p>
			<!-- 20151004 jm. 동작에 에러가 있고, 의미 없는 버튼이라 주석.  -->
			<!--<p class="fotrt"><img src="/images/main/btn_reserv.gif" name='btn_new_hosp_3' 
				onclick="reservation('hl','H20180807084653404')" style="cursor:hand"></p>-->
			<div class="clear"></div>
		</div>
      	
		<div class="centerlet_four_bom_x">
			<p class="fotlt"><a href="#" onclick="viewBlog('H20180806125110977&from=rec_hospital&menu_name=search')" title="경기도 구리시 갈매중앙로 83">*&nbsp;드림키즈소아청소년과</a></p>
			<!-- 20151004 jm. 동작에 에러가 있고, 의미 없는 버튼이라 주석.  -->
			<!--<p class="fotrt"><img src="/images/main/btn_reserv.gif" name='btn_new_hosp_4' 
				onclick="reservation('hl','H20180806125110977')" style="cursor:hand"></p>-->
			<div class="clear"></div>
		</div>
      
   
		</div>
<script>
function division_view(arg1, arg2){
	var fm = document.division_frm;
	fm.view_num.value = arg1;
	fm.type.value = arg2;
	fm.target = "_self";
	fm.action = "/division_view.do";
	fm.submit();
}
</script>
<!--상담실 end-->                            			
			</div>
			<!-- 신규예약병원리스트 끝 -->

		<!-- 	
		
		광고
				<div class="centerrit_five">
				20151003 jm. 수정 s.
				<p class="fotlt"><a href="/viewBlog.do?blog_h_code=H20070418122647522"><img src="/images/main/h_hyb25439.gif" alt="함영백소아과" /></a></p>
				<p class="fotrt"><a href="/viewBlog.do?blog_h_code=H20080704132638079"><img src="/images/main/h_rndosqo.gif" alt="구앤배소아과" /></a></p>
				
				<p class="fotlt" style="background:url(/images/main/centerrit11.gif) repeat-x left top;color:#000000;padding:25px 0;width:103px;height:23px;text-align:center;font-weight:bold;font-size:18px;">광고문의</p>
				<p class="fotrt"><a href="/viewBlog.do?blog_h_code=H20110524110321806"><img src="/images/main/h_shesmedi00.gif" alt="쉬즈메디소아과" /></a></p>
				
				<p class="fotlt nopadb" style="padding:8px 0 0 0"><a href="/viewBlog.do?blog_h_code=H20090204173833255"><img src="/images/main/h_d28253.gif" alt="하정훈소아과" /></a></p>
				<p class="fotrt nopadb" style="background:url(/images/main/centerrit11.gif) repeat-x left top;color:#000000;padding:25px 0;width:103px;height:23px;text-align:center;font-weight:bold;font-size:18px;">광고문의</p>
			
				20151003 jm. 수정 e.
			</div> -->
		</div>

		<div><!-- 20151102 jm. class="centerposi"  제거-->
			<img src="/images/main/main_join_manual.gif" onclick="join_manual()" style="display:block;border:1px solid #dddddd;width:99px;height:56px;margin-bottom:9px;cursor:pointer;" alt="" />
			<img src="/images/main/account_info.gif" onclick="accountInfo()" style="display:block;border:1px solid #dddddd;width:99px;height:56px;margin-bottom:9px;cursor:pointer;" alt="" />	
			<!-- 20151110 jm. 배너 고정때문에 여기만 별도로 만듬. 다른 배너는 main/right_main.jsp에 -->
			<div><img src="/images/main/rb_dermped.gif" onclick="viewBlog('H20071221135104482');" title="서울 송파구 가락동" style="cursor:pointer;" alt="" /></div>
			<div><img src="/images/main/rb_navekids.gif" onclick="viewBlog('H20080724183501816');" title="경기 성남시 분당구 야탑동" style="cursor:pointer;margin-top:5px" alt="" /></div> 
			<!-- <div><img src="/images/main/rb_yatap.gif" onclick="viewBlog('H20081021164200592');" title="경기 성남시 분당구 야탑동" style="cursor:pointer;margin-top:5px" alt="" /></div> -->
			<div><img src="/images/main/rb_rhonal.gif" onclick="viewBlog('H20120423000922220');" title="서울 노원구 상계6.7동" style="cursor:pointer;margin-top:5px" alt="" /></div>		
			<!-- <div> 메타포뮬러 광고 
				<img src="/images/main/evermedi_main_metaformula.png" onclick="window.open('http://www.metaformula.co.kr/shop/member/randEM.php?code=goodkids')" style="cursor:pointer;margin-top:10px;" />				
			</div> -->
		</div>		

		<div class="clear"></div>
	</div>
	
	<div class="footer2">
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

<!--  //지도 리스트
<div id="menu_wrap" class="bg_white">	
	<ul id="placesList"></ul>
	<div id="pagination"></div>
</div>
-->


<form name="mainfrm2" method="post">
<input type="hidden" name="viewTitle" value="예약가능병원">
<input type="hidden" name="parentaddr">	
<input type="hidden" name="where_addr">	
<input type="hidden" name="subgubun">	
<input type="hidden" name="lo_sido">	
<input type="hidden" name="tmpTopMenu" value="reserve">
</form>


</body>
</html> 

<div style="position:absolute; visibility:hidden; z-index:101">
<table width="0" border="0" align="center" cellpadding="0" cellspacing="0">
<form name="board_frm" method="post">  
<input type="hidden" name="notice_num">
<input type="hidden" name="notice_mode">
<input type="hidden" name="faq_mode">
<input type="hidden" name="faq_num">
<input type="hidden" name="qna_num">
<input type="hidden" name="nview">
<input type="hidden" name="pos">
<input type="hidden" name="visit_mode">
<input type="hidden" name="visit_num">
<input type="hidden" name="menu_name">
<input type="hidden" name="open_num">
  <tr>
    <td width="0" valign="top"></td>
    <td valign="top"><!--evermedi:get name="qna" /--></td>
  </tr>
</form>
</table>
</div>

<!-- <script type="text/javascript" src="//apis.daum.net/maps/maps3.js?apikey=a5138d85e20b6cd5cc1d4c7c2a2e0a87&amp;libraries=services"></script> -->

<!-- //20160502 jm. 다음지도서비스 오류로 주석 
<script type="text/javascript" src="//apis.daum.net/maps/maps3.js?apikey=a5138d85e20b6cd5cc1d4c7c2a2e0a87&amp;libraries=services,clusterer,LIBRARY"></script>
--> 

<style type="text/css"> 
<!--

#Layer1 {
	position:absolute;
	left:30px; 
	top:705px;
	width:280px;
	height:120px;
	z-index:1;	
}


#Layer_poll {
	position:absolute;
	left:30px;
	top:850px;
	width:280px;
	height:120px;
	z-index:1;
}
//-->
</style>
<script>

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}

//20151003 jm. 계좌번호 창 띄우기.
function accountInfo(){	
	var settings='height=230px,width=300px,top=150px,left=330px,scrollbars=no,resizable=no,status=no,toolbar=no,location=no,menu=no';
	var frameName = "accountInfo";

	//var settings='height=635,width=463,top=150,left=330,scrollbars=no,resizable=no,status=no,toolbar=no,location=no,menu=no';
	var targetUrl = "/main/accountInfo.jsp";	
	window.open(targetUrl,frameName,settings);
}

function notice_Popup(){
	console.log("notice_Popup();");
	if(getCookie_("evermedi_Notice") != "done"){
    var settings='height=420px,width=350px,top=0px,left=0px,scrollbars=no,resizable=no,status=no,toolbar=no,location=no,menu=no';
		var targetUrl = "notice_popup.do";
		var frameName = "noticePop";
		window.open(targetUrl,frameName,settings);
	}
}

function notice_Popup2(){
  if(getCookie_("evermedi_Notice2") != "done") {
		var settings='height=420px,width=350px,top=0px,left=360px,scrollbars=no,resizable=no,status=no,toolbar=no,location=no,menu=no';
    var targetUrl = "notice_popup2.do";
    var frameName = "noticePop2";
    window.open(targetUrl,frameName,settings);
  }
}

//팝업체크1 시작

//팝업체크1 끝

//팝업체크2 시작

//팝업체크2 끝

//20160502 jm. 다음지도서비스 오류로 뺌.

function LocationSearch(arg){
	//alert("==> " + arg);
	var fm = document.mainfrm2;
	var actionStr = "subLocationSearch.do";
//console.log("LocationSearch ==> " + arg);
	//alert("actionStr " + actionStr);
	fm.lo_sido.value = arg;
	fm.subgubun.value = "sido";
	fm.parentaddr.value = arg;
	fm.where_addr.value = arg;
	fm.target ="_self";
	fm.action = actionStr;
	fm.submit();
	
}

//20180913 jm. layerPopup 추가 s.
cookiedata = document.cookie;    
if ( cookiedata.indexOf("maindiv=done") < 0 ){      
    document.all['divpop'].style.visibility = "visible"; 
    } 
    else { 
        document.all['divpop'].style.visibility = "hidden"; 
} 
//20180913 jm. layerPopup 추가 e.
</script>