/**
 * �ǰ�����
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
        alert("�ۼ��ڸ� �Է��� �ֽʽÿ�.");
        fm.regname.focus();
        return;
	}
	if (Trim(fm.subject.value) == ""){
        alert("������ �Է��� �ֽʽÿ�.");
        fm.subject.focus();
        return;
	}
	if (Trim(fm.content.value) == ""){
        alert("������ �Է��� �ֽʽÿ�.");
        fm.content.focus();
        return;
	}
	if (fm.doc_img.fileSize > 512000) {
		alert("�̹��� ũ�Ⱑ 500KB�� ���� �� �����ϴ�.");
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
		 alert("�����̹����� [JPG] �Ǵ� [GIF] ���ϸ� ���� �մϴ�.\n\n���� �̹����� [" + Ucase$(Right$(fm.image_url.value, 3)) + "]�Դϴ�.          ")
		return false;
	} else {		
		document.images[Imagesid].src = event.srcElement.value;
		document.images[Imagesid].style.display = '';
	}
}

/*
�Խù� ��õ�ϱ�
*/
function setMedinfoReccomend(arg){
	if(confirm("�Խù��� ��õ �Ͻðڽ��ϱ�? ")){
		var fm = document.medinfo_frm;
		fm.view_num.value = arg;
		fm.target="main";
		fm.action="/medinfo_recomand.do";
		fm.submit(); 
	}
}

/*
�Խù� �ǰߴޱ�
*/
function setMedinfoOpinion(arg){
	var fm = document.medinfo_frm;
	if (Trim(fm.opinion.value) == ""){
        alert("�ǰ��� �Է��� �ֽʽÿ�.");
		fm.opinion.value="";
        fm.opinion.focus();
        return;
	}

	if(confirm("�ǰ��� ��� �Ͻðڽ��ϱ�? ")){
		fm.view_num.value = arg;
		fm.target="main";
		fm.action="/medinfo_opinion.do";
		fm.submit(); 
	}
}

/*
�ǰ����� �󼼺���
*/
function medinfo_view(arg){
	var fm = document.medinfo_frm;
	
	fm.view_num.value = arg;
	fm.target = "_self";
	fm.action = "/medinfo_view.do";
	fm.submit();

}

/*
�ǰ����� �󼼺���
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
�ǰ����� �̹�������
*/
function imageReset(img, iid){

	Imagesid = iid;

	var fm = document.medinfo_frm;
			
	document.images[Imagesid].src = img;
	document.images[Imagesid].style.display = '';
}

/*
�ǰ����� Ű���� ���
*/
function keyword_reg_pop(){

	var fm = document.medinfo_frm;

	var pm = window.open('','pop_keyword','left=400,top=200,width=447,height=445,toolbar=no,menubar=no,status=yes,scrollbars=yes,resizable=no');

	fm.target = "pop_keyword";
	fm.action = "/keyword_reg_pop.do";
	fm.submit();
}

/*
�ǰ����� Ű���� ����
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
�ǰ����� Ű���� ����
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
�ǰ����� Ű���� ����Ʈ
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