/**
 * 건강정보
 **/
function medinfo_write(){
	var fm = document.medinfo_frm;

	fm.target="main";
	fm.action="medinfo_write.do";
	fm.submit();
}

function regMedinfo(){
	var fm = document.medinfo_frm;

	if (Trim(fm.regname.value) == ""){
        alert("작성자를 입력해 주십시오.");
        fm.regname.focus();
        return;
	}
	if (Trim(fm.subject.value) == ""){
        alert("제목을 입력해 주십시오.");
        fm.subject.focus();
        return;
	}
	if (Trim(fm.content.value) == ""){
        alert("내용을 입력해 주십시오.");
        fm.content.focus();
        return;
	}
	if (fm.doc_img.fileSize > 512000) {
		alert("이미지 크기가 500KB를 넘을 수 없습니다.");
        fm.image_url.focus();
        return;
	}

	if(fm.r_gubun != null){
		if(fm.r_gubun[0].checked){
			fm.r_gubun.value = "0"
		}else if(fm.r_gubun[1].checked){
			fm.r_gubun.value = "1"
		}
	}

	fm.target="main";
	fm.action="medinfo_insert.do";
	fm.submit(); 
}

function jsImagesPreview(img, iid) {

	Imagesid = iid;

	var fm = document.medinfo_frm;
	
	if ((Ucase$(Right$(fm.image_url.value, 3)) != 'GIF') && (Ucase$(Right$(fm.image_url.value, 3)) != 'JPG')){
		 alert("사진이미지는 [JPG] 또는 [GIF] 파일만 가능 합니다.\n\n현재 이미지는 [" + Ucase$(Right$(fm.image_url.value, 3)) + "]입니다.          ")
		return false;
	} else {		
		document.images[Imagesid].src = event.srcElement.value;
		document.images[Imagesid].style.display = '';
	}
}

/*
게시물 추천하기
*/
function setMedinfoReccomend(arg){
	if(confirm("게시물을 추천 하시겠습니까? ")){
		var fm = document.medinfo_frm;
		fm.view_num.value = arg;
		fm.target="main";
		fm.action="/medinfo_recomand.do";
		fm.submit(); 
	}
}

/*
게시물 의견달기
*/
function setMedinfoOpinion(arg){
	var fm = document.medinfo_frm;
	if (Trim(fm.opinion.value) == ""){
        alert("의견을 입력해 주십시오.");
		fm.opinion.value="";
        fm.opinion.focus();
        return;
	}

	if(confirm("의견을 등록 하시겠습니까? ")){
		fm.view_num.value = arg;
		fm.target="main";
		fm.action="/medinfo_opinion.do";
		fm.submit(); 
	}
}

/*
건강정보 상세보기
*/
function medinfo_view(arg){
	var fm = document.medinfo_frm;
	
	fm.view_num.value = arg;
	fm.target = "_self";
	fm.action = "/medinfo_view.do";
	fm.submit();

}

/*
건강정보 상세보기
*/
function medinfo_view_keyword(arg){
	var fm = document.medinfo_frm;

	fm.mode.value="K";	
	fm.view_num.value = arg;
	fm.target = "_self";
	fm.action = "/medinfo_view.do";
	fm.submit();

}

/*
건강정보 이미지리셋
*/
function imageReset(img, iid){

	Imagesid = iid;

	var fm = document.medinfo_frm;
			
	document.images[Imagesid].src = img;
	document.images[Imagesid].style.display = '';
}

/*
건강정보 키워드 등록
*/
function keyword_reg_pop(){

	var fm = document.medinfo_frm;

	var pm = window.open('','pop_keyword','left=400,top=200,width=447,height=445,toolbar=no,menubar=no,status=yes,scrollbars=yes,resizable=no');

	fm.target = "pop_keyword";
	fm.action = "/keyword_reg_pop.do";
	fm.submit();
}

/*
건강정보 키워드 선택
*/
function keyword_select_pop(){

	var fm = document.medinfo_frm;

	var style = "center:yes; dialogwidth:437px; dialogheight:497px; dialogleft:400px; dialogtop:200px;scroll:yes; resizable:no; status:no; help:no"; 
	var returnVal = showModalDialog("/keyword_select_pop.do",window,style);
	
	if(returnVal != null && returnVal!=""){
		//location.href = "doctor_mgmt.do";
	}else{
		return;
	}
}

/*
건강정보 키워드 선택
*/
function keyword_mod_pop(arg){

	var fm = document.medinfo_frm;

	var style = "center:yes; dialogwidth:437px; dialogheight:497px; dialogleft:400px; dialogtop:200px;scroll:yes; resizable:no; status:no; help:no"; 
	var returnVal = showModalDialog("/keyword_mod_pop.do?view_num="+arg,window,style);
	
	if(returnVal != null && returnVal!=""){
		//location.href = "doctor_mgmt.do";
	}else{
		return;
	}
}

/*
건강정보 키워드 리스트
*/
function medinfo_keyword(arg1, arg2){
	var fm = document.medinfo_frm;
	
	fm.keyword_code.value = arg1;
	fm.keyword_name.value = arg2;
	fm.target = "_self";
	fm.action = "/medinfo_keyword.do";
	fm.submit();

}

	function goList(){
		var fm = document.medinfo_frm;

		fm.target = "main";
		fm.action = "/medinfo_1.do";
		fm.submit();
	}
	
	function goList_keyword(){
		var fm = document.medinfo_frm;

		fm.target = "main";
    fm.action = "/medinfo_keyword.do";
		fm.submit();
	}