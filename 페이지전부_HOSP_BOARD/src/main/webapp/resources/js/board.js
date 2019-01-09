/**
 * 공지사항
 **/
function notice_list(arg1){
	var fm = document.board_frm;

	fm.page.value=arg1;
	fm.target="main";
	fm.action="notice_list.do";
	fm.submit();
}

function notice_refresh(){
	var fm = document.board_frm;

	fm.notice_mode.value="more";
	fm.target="main";
	fm.action="notice_list.do";
	fm.submit();
}

function notice_view(arg1){
	
	var fm = document.board_frm;
	if(fm.menu_name!=null)
		fm.menu_name.value="support";
	fm.notice_num.value=arg1;
	//fm.target="main";	
	fm.action="notice_view.do";
	fm.submit();
}

function notice_more(){
	var fm = document.board_frm;

	fm.notice_mode.value="more";
	fm.target="main";
	fm.action="notice_list.do";
	fm.submit();
}

function notice_write(){
	var fm = document.board_frm;

	fm.target="main";
	fm.action="notice_write_form.do";
	fm.submit();
}

function notice_modify_form(){
	var fm = document.board_frm;

	fm.target="main";
	fm.action="notice_modify_form.do";
	fm.submit();
}

function reg_notice_modify() {
	if(onclickCheck == "O"){
		return;
	}else{
		onclickCheck = "O";
	}
	var fm = document.board_frm;
	if (Trim(fm.subject.value) == "" || Trim(fm.subject.value) =="제목을 입력해 주세요"){
		onclickCheck = "X";
        alert("제목을 입력해 주세요.");
        fm.subject.focus();
        return;
   }
	if (Trim(fm.content.value) == ""){
		onclickCheck = "X";
        alert("내용을 입력해 주세요.");
        fm.content.focus();
        return;
   }
   if (fm.openYN_c.checked) {
		fm.openYN.value="1";
   }
   if (!fm.openYN_c.checked) {
		fm.openYN.value="0";
   }
   if (fm.type_c.checked) {
		fm.type.value="1";
   }
   if (!fm.type_c.checked) {
		fm.type.value="0";
   }
   if (Trim(fm.strdate_s.value) == ""){
	    onclickCheck = "X";
        alert("날짜를 입력해 주세요.");
        fm.strdate_s.focus();
        return;
   }
   if (Trim(fm.enddate_s.value) == ""){
	    onclickCheck = "X";
        alert("날짜를 입력해 주세요.");
        fm.enddate_s.focus();
        return;
   }
   if (fm.strdate_s.value > fm.enddate_s.value){
	    onclickCheck = "X";
	    alert("공지기간 확인해 주세요.");
        fm.strdate_s.focus();
        return;
   }
   var strdate_a = fm.strdate_s.value.split("-");
   var enddate_a = fm.enddate_s.value.split("-");

   fm.strdate.value = strdate_a[0]+strdate_a[1]+strdate_a[2];
   fm.enddate.value = enddate_a[0]+enddate_a[1]+enddate_a[2];

   fm.target="main";
   fm.action="notice_modify.do";;
   fm.submit();
}

function notice_delcheck() {
	var fm = document.board_frm;

	fm.target="main";
    fm.action="notice_delcheck_form.do";
    fm.submit();
}

function reg_notice() {	
	if(onclickCheck == "O"){
		return;
	}else{
		onclickCheck = "O";
	}
	var fm = document.board_frm;
	if (Trim(fm.subject.value) == "" || Trim(fm.subject.value) =="제목을 입력해 주세요"){
		onclickCheck = "X";
        alert("제목을 입력해 주세요.");
        fm.subject.focus();
        return;
   }
	if (Trim(fm.content.value) == ""){
		onclickCheck = "X";
        alert("내용을 입력해 주세요.");
        fm.content.focus();
        return;
   }
   if (fm.openYN_c.checked) {
		fm.openYN.value="1";
   }
   if (!fm.openYN_c.checked) {
		fm.openYN.value="0";
   }
   if (fm.type_c.checked) {
		fm.type.value="1";
   }
   if (!fm.type_c.checked) {
		fm.type.value="0";
   }
   if (Trim(fm.strdate_s.value) == ""){
	    onclickCheck = "X";
        alert("날짜를 입력해 주세요.");
        fm.strdate_s.focus();
        return;
   }
   if (Trim(fm.enddate_s.value) == ""){
	    onclickCheck = "X";
        alert("날짜를 입력해 주세요.");
        fm.enddate_s.focus();
        return;
   }
   if (fm.strdate_s.value > fm.enddate_s.value){
	    onclickCheck = "X";
	    alert("공지기간 확인해 주세요.");
        fm.strdate_s.focus();
        return;
   }
   var strdate_a = fm.strdate_s.value.split("-");
   var enddate_a = fm.enddate_s.value.split("-");
	
   fm.strdate.value = strdate_a[0]+strdate_a[1]+strdate_a[2];
   fm.enddate.value = enddate_a[0]+enddate_a[1]+enddate_a[2];

   fm.target="main";
   fm.action="notice_write.do";;
   fm.submit();
}

/**
 * FAQ
 **/
function go_faq(arg){
	var fm = document.board_frm;

	fm.open_num.value="T_"+arg;
	//fm.target="main";
	fm.action="faq_list.do";
	fm.submit();
}

function faq_refresh(){
	var fm = document.board_frm;

	fm.faq_mode.value="more";
	fm.target="main";
	fm.action="faq_list.do";
	fm.submit();
}

function faq_view(arg1){
	var fm = document.board_frm;

	fm.faq_num.value=arg1;
	fm.faq_mode.value="view";
	fm.target="main";
	fm.action="faq_view.do";
	fm.submit();
}

function faq_more(){
	var fm = document.board_frm;

	fm.faq_mode.value="more";
	fm.target="main";
	fm.action="faq_list.do";
	fm.submit();
}

function faq_write(){
	var fm = document.board_frm;

	fm.target="main";
	fm.action="faq_write_form.do";
	fm.submit();
}

function faq_modify_form(){
	var fm = document.board_frm;

	fm.target="main";
	fm.action="faq_modify_form.do";
	fm.submit();
}

function reg_faq_modify() {
	if(onclickCheck == "O"){
		return;
	}else{
		onclickCheck = "O";
	}
	var fm = document.board_frm;
	if (Trim(fm.content.value) == ""){
		onclickCheck = "X";
        alert("내용을 입력해 주세요.");
        fm.content.focus();
        return;
   }
   if (Trim(fm.subject.value) == "" || Trim(fm.subject.value) =="제목을 입력해 주세요"){
	    onclickCheck = "X";
        alert("제목을 입력해 주세요.");
        fm.subject.focus();
        return;
   }
   if (fm.openYN_c.checked) {
		fm.openYN.value="1";
   }
   if (!fm.openYN_c.checked) {
		fm.openYN.value="0";
   }
   fm.target="main";
   fm.action="faq_modify.do";;
   fm.submit();
}

function reg_faq() {
	if(onclickCheck == "O"){
		return;
	}else{
		onclickCheck = "O";
	}
	var fm = document.board_frm;
	if (Trim(fm.content.value) == ""){
		onclickCheck = "X";
        alert("내용을 입력해 주세요.");
        fm.content.focus();
        return;
   }
   if (Trim(fm.subject.value) == "" || Trim(fm.subject.value) =="제목을 입력해 주세요"){
	    onclickCheck = "X";
        alert("제목을 입력해 주세요.");
        fm.subject.focus();
        return;
   }
   if (fm.openYN_c.checked) {
		fm.openYN.value="1";
   }
   if (!fm.openYN_c.checked) {
		fm.openYN.value="0";
   }

   fm.target="main";
   fm.action="faq_write.do";
   fm.submit();
}   

function faq_delcheck() {
	var fm = document.board_frm;

	fm.target="main";
    fm.action="faq_delcheck_form.do";
    fm.submit();
}

/**
 * QNA
 **/
function qna_refresh(){
	var fm = document.board_frm;

	fm.target="main";
	fm.action="qna_list.do";
	fm.submit();
}

function qna_view(arg1, arg2){
	var fm = document.board_frm;

	fm.qna_num.value=arg1;
	fm.pos.value=arg2;
	fm.target="main";
	fm.action="qna_view.do";
	fm.submit();
}

function qna_view(arg1, arg2, arg3){
	var fm = document.board_frm;
	if(fm.menu_name!=null)
		fm.menu_name.value="support";
	fm.qna_num.value=arg1;
	fm.pos.value=arg2;
	fm.nview.value=arg3;
	fm.target="main";
	fm.action="qna_view.do";
	fm.submit();
}

function qna_modify(){
	var fm = document.board_frm;

	fm.target="main";
	fm.action="qna_modify_form.do";
	fm.submit();
}

function qna_modify_re(arg1){

	var fm = eval('document.re_frm'+arg1);

	fm.target="main";
	fm.action="qna_modify_form.do";
	fm.submit();
}

function reg_qna_modify() {
	if(onclickCheck == "O"){
		return;
	}else{
		onclickCheck = "O";
	}
	var fm = document.board_frm;

	if (Trim(fm.subject.value) == "" || Trim(fm.subject.value) =="제목을 입력해 주세요"){
		onclickCheck = "X";
        alert("제목을 입력해 주세요.");
		fm.subject.value="";
        fm.subject.focus();
        return;
   }

	if (Trim(fm.content.value) == ""){
		onclickCheck = "X";
        alert("내용을 입력해 주세요.");
        fm.content.focus();
        return;
   }
   if (Trim(fm.pass.value) == ""){
	    onclickCheck = "X";
        alert("비밀번호를 입력해 주세요.");
        fm.pass.focus();
        return;
   }
   if (fm.cnview.checked) {
		fm.nview.value="T";
	}
	if (!fm.cnview.checked) {
		fm.nview.value="F";
	}

   fm.target="main";
   fm.action="qna_modify.do";;
   fm.submit();
}

function qna_passcheck() {
	var fm = document.board_frm;

	fm.target="main";
    fm.action="qna_passcheckForm.do";
    fm.submit();
}

function qna_more(){
	var fm = document.board_frm;

	fm.target="main";
	fm.action="qna_list.do";
	fm.submit();
}

function qna_list(arg1){
	var fm = document.board_frm;

	fm.page.value=arg1;
	fm.target="main";
	fm.action="qna_list.do";
	fm.submit();
}

function qna_write(){
	var fm = document.board_frm;
	
	fm.target="main";
	fm.action="qna_write_form.do";
	fm.submit();
}

function reg_qna() {
	if(onclickCheck == "O"){
		return;
	}else{
		onclickCheck = "O";
	}
	var fm = document.board_frm;

	if (Trim(fm.subject.value) == "" || Trim(fm.subject.value) =="제목을 입력해 주세요"){
		onclickCheck = "X";
        alert("제목을 입력해 주세요.");
		fm.subject.value="";
        fm.subject.focus();
        return;
   }
	if (Trim(fm.content.value) == ""){
		onclickCheck = "X";
        alert("내용을 입력해 주세요.");
        fm.content.focus();
        return;
   }
   if (Trim(fm.pass.value) == ""){
	   onclickCheck = "X";
        alert("비밀번호를 입력해 주세요.");
        fm.pass.focus();
        return;
   }
   if (fm.cnview.checked) {
		fm.nview.value="T";
	}
	if (!fm.cnview.checked) {
		fm.nview.value="F";
	}
   fm.target="main";
   fm.action="qna_write.do";
   fm.submit();
}

function qna_reply() {
	var fm = document.board_frm;
	
	fm.target="main";
	fm.action="qna_reply_form.do";
	fm.submit();
}

function reg_qna_reply() {
	if(onclickCheck == "O"){
		return;
	}else{
		onclickCheck = "O";
	}
	var fm = document.board_frm;
	
	if (Trim(fm.subject.value) == "" || Trim(fm.subject.value) =="제목을 입력해 주세요"){
		onclickCheck = "X";
        alert("제목을 입력해 주세요.");
		fm.subject.value="";
        fm.subject.focus();
        return;
   }
	if (Trim(fm.content.value) == ""){
		onclickCheck = "X";
        alert("내용을 입력해 주세요.");
        fm.content.focus();
        return;
   }
   if (Trim(fm.pass.value) == ""){
	    onclickCheck = "X";
        alert("비밀번호를 입력해 주세요.");
        fm.pass.focus();
        return;
   }
   if (fm.cnview.checked) {
		fm.nview.value="T";
	}
	if (!fm.cnview.checked) {
		fm.nview.value="F";
	}
	if (fm.cpoint.checked) {
		fm.point.value="O";
	}
	if (!fm.cpoint.checked) {
		fm.point.value="X";
	}
   fm.target="main";
   fm.action="qna_reply.do";
   fm.submit();
}

function qna_delcheck() {
	var fm = document.board_frm;

	fm.target="main";
    fm.action="qna_delcheck_form.do";
    fm.submit();
}

function qna_admin_del() {
	var fm = document.board_frm;

	fm.target="main";
    fm.action="qna_admin_del.do";
    fm.submit();
}

function qna_admin_del_re(arg1) {
	var fm = eval('document.re_frm'+arg1);

	fm.target="main";
    fm.action="qna_admin_del.do";
    fm.submit();
}

/**
 * 영업방문요청
 **/

function visit_refresh(){
	var fm = document.board_frm;

	fm.target="main";
	fm.action="visit_list.do";
	fm.submit();
}

function visit_view(arg1, arg2){
	var fm = document.board_frm;

	fm.visit_num.value=arg1;
	fm.pos.value=arg2;
	fm.target="main";
	fm.action="visit_view.do";
	fm.submit();
}

function visit_view_check(arg1, arg2){
	var fm = document.board_frm;

	fm.visit_num.value=arg1;
	fm.pos.value=arg2;
	fm.target="main";
	fm.action="/visit_passcheckForm.do";
	fm.submit();
}

function visit_modify(){
	var fm = document.board_frm;

	fm.target="main";
	fm.action="visit_modify_form.do";
	fm.submit();
}

function visit_modify_re(arg1){
	var fm = eval('document.re_frm'+arg1);

	fm.target="main";
	fm.action="visit_modify_reply_form.do";
	fm.submit();
}

function visit_modify_reply(){
	var fm = document.board_frm;

	fm.target="main";
	fm.action="visit_modify_reply_form.do";
	fm.submit();
}

function reg_visit_modify() {
	if(onclickCheck == "O"){
		return;
	}else{
		onclickCheck = "O";
	}
   var fm = document.board_frm;

   if (Trim(fm.subject.value) == "" || Trim(fm.subject.value) =="제목을 입력해 주세요"){
	    onclickCheck = "X";
        alert("제목을 입력해 주세요.");
		fm.subject.value="";
        fm.subject.focus();
        return;
   }
   if (Trim(fm.name.value) == "" || Trim(fm.name.value) == "이름을 입력해 주세요"){
	    onclickCheck = "X";
        alert("이름을 입력해 주세요.");
		fm.name.value="";
        fm.name.focus();
        return;
   }
   if (Trim(fm.content.value) == ""){
	    onclickCheck = "X";
        alert("내용을 입력해 주세요.");
        fm.content.focus();
        return;
   }
   if (Trim(fm.pass.value) == ""){
	    onclickCheck = "X";
        alert("비밀번호를 입력해 주세요.");
        fm.pass.focus();
        return;
   }
   if (Trim(fm.first_date_s.value) == ""){
	    onclickCheck = "X";
        alert("1차 방문 날짜를 입력해 주세요.");
        fm.first_date_s.focus();
        return;
   }
   if (Trim(fm.first_time_o.value) == "99" | Trim(fm.first_time_si.value) == "99" | Trim(fm.first_time_bun.value) == "99") {
	    onclickCheck = "X";
        alert("1차 방문 시간을 입력해 주세요.");
        fm.first_time_o.focus();
        return;
   }
   if (Trim(fm.second_date_s.value) == ""){
        fm.second_date_s.value = "9999-99-99";
   }
   if (Trim(fm.second_date_s.value) != "9999-99-99"){
	   if (Trim(fm.second_time_o.value) == "99" | Trim(fm.second_time_si.value) == "99" | Trim(fm.second_time_bun.value) == "99")
	   {
		onclickCheck = "X";
        alert("2차 방문 시간을 입력해 주세요.");
        fm.second_time_o.focus();
        return;
	   }
   }
   if (Trim(fm.third_date_s.value) == ""){
		fm.third_date_s.value = "9999-99-99";
   }
   if (Trim(fm.third_date_s.value) != "9999-99-99"){
	   if (Trim(fm.third_time_o.value) == "99" | Trim(fm.third_time_si.value) == "99" | Trim(fm.third_time_bun.value) == "99")
	   {
		onclickCheck = "X";
        alert("3차 방문 시간을 입력해 주세요.");
        fm.third_time_o.focus();
        return;
	   }
   }
   if (Trim(fm.second_date_s.value) == "9999-99-99"){
	   if (Trim(fm.third_date_s.value) != "9999-99-99")
	   {
		onclickCheck = "X";
        alert("2차 방문 날짜를 먼저 입력해 주세요.");
        fm.second_date_s.focus();
        return;
	   }
   }
   if(Trim(fm.email.value)!=""){
		if(!isEmail(fm.email.value)){
			onclickCheck = "X";
			alert("이메일 정보가 올바르지 않습니다.");
			fm.email.focus();
			return;
		}
   }
   if(Trim(fm.tel_1.value)!="000"){
		if(Trim(fm.tel_2.value)=="" || Trim(fm.tel_3.value)==""){
			onclickCheck = "X";
			alert("전화번호를 정확히 입력하세요.");
			fm.tel_1.focus();
			return;
		}
   }
	
   var first_date_a = fm.first_date_s.value.split("-");
   var second_date_a = fm.second_date_s.value.split("-");
   var third_date_a = fm.third_date_s.value.split("-");

   fm.first_date.value = first_date_a[0]+first_date_a[1]+first_date_a[2];
   fm.second_date.value = second_date_a[0]+second_date_a[1]+second_date_a[2];
   fm.third_date.value = third_date_a[0]+third_date_a[1]+third_date_a[2];

   fm.first_time.value = fm.first_time_o.value + "-" + fm.first_time_si.value + "-" + fm.first_time_bun.value;
   fm.second_time.value = fm.second_time_o.value + "-" + fm.second_time_si.value + "-" + fm.second_time_bun.value;
   fm.third_time.value = fm.third_time_o.value + "-" + fm.third_time_si.value + "-" + fm.third_time_bun.value;

   if(Trim(fm.tel_1.value)=="000") {
	   fm.tel.value= "000";
   }else {
	   fm.tel.value = fm.tel_1.value + "-" + fm.tel_2.value + "-" + fm.tel_3.value;
   }

   fm.target="main";
   fm.action="visit_modify.do";
   fm.submit();
}

function reg_visit_modify_reply() {
	if(onclickCheck == "O"){
		return;
	}else{
		onclickCheck = "O";
	}
   var fm = document.board_frm;

   if (Trim(fm.subject.value) == "" || Trim(fm.subject.value) =="제목을 입력해 주세요"){
	    onclickCheck = "X";
        alert("제목을 입력해 주세요.");
		fm.subject.value="";
        fm.subject.focus();
        return;
   }
   if (Trim(fm.name.value) == "" || Trim(fm.name.value) == "이름을 입력해 주세요"){
	    onclickCheck = "X";
        alert("이름을 입력해 주세요.");
		fm.name.value="";
        fm.name.focus();
        return;
   }
   if (Trim(fm.content.value) == ""){
	    onclickCheck = "X";
        alert("내용을 입력해 주세요.");
        fm.content.focus();
        return;
   }
   if (Trim(fm.pass.value) == ""){
	    onclickCheck = "X";
        alert("비밀번호를 입력해 주세요.");
        fm.pass.focus();
        return;
   }

   fm.target="main";
   fm.action="visit_modify.do";
   fm.submit();
}

function visit_passcheck() {
	var fm = document.board_frm;

	fm.target="main";
    fm.action="visit_passcheckForm.do";
    fm.submit();
}

function visit_more(){
	var fm = document.board_frm;

	fm.target="main";
	fm.action="visit_list.do";
	fm.submit();
}

function visit_list(arg1){
	var fm = document.board_frm;

	fm.page.value=arg1;
	fm.target="main";
	fm.action="visit_list.do";
	fm.submit();
}

function visit_write(){
	var fm = document.board_frm;
	
	fm.target="main";
	fm.action="visit_write_form.do";
	fm.submit();
}

function visit_write_admin(){
	var fm = document.board_frm;
	
	fm.target="main";
	fm.action="visit_write_admin_form.do";
	fm.submit();
}

function reg_visit() {
	if(onclickCheck == "O"){
		return;
	}else{
		onclickCheck = "O";
	}
   var fm = document.board_frm;

   if (Trim(fm.subject.value) == "" || Trim(fm.subject.value) =="제목을 입력해 주세요"){
	    onclickCheck = "X";
        alert("제목을 입력해 주세요.");
		fm.subject.value="";
        fm.subject.focus();
        return;
   }
   if (Trim(fm.name.value) == "" || Trim(fm.name.value) == "이름을 입력해 주세요"){
	    onclickCheck = "X";
        alert("이름을 입력해 주세요.");
		fm.name.value="";
        fm.name.focus();
        return;
   }
   if (Trim(fm.content.value) == ""){
	    onclickCheck = "X";
        alert("내용을 입력해 주세요.");
        fm.content.focus();
        return;
   }
   if (Trim(fm.pass.value) == ""){
	    onclickCheck = "X";
        alert("비밀번호를 입력해 주세요.");
        fm.pass.focus();
        return;
   }
   if (Trim(fm.first_date_s.value) == ""){
	    onclickCheck = "X";
        alert("1차 방문 날짜를 입력해 주세요.");
        fm.first_date_s.focus();
        return;
   }
   if (Trim(fm.first_time_o.value) == "99" | Trim(fm.first_time_si.value) == "99" | Trim(fm.first_time_bun.value) == "99") {
	    onclickCheck = "X";
        alert("1차 방문 시간을 입력해 주세요.");
        fm.first_time_o.focus();
        return;
   }
   if (Trim(fm.second_date_s.value) == ""){
        fm.second_date_s.value = "9999-99-99";
   }
   if (Trim(fm.second_date_s.value) != "9999-99-99"){
	   if (Trim(fm.second_time_o.value) == "99" | Trim(fm.second_time_si.value) == "99" | Trim(fm.second_time_bun.value) == "99")
	   {
		onclickCheck = "X";
        alert("2차 방문 시간을 입력해 주세요.");
        fm.second_time_o.focus();
        return;
	   }
   }
   if (Trim(fm.third_date_s.value) == ""){
		fm.third_date_s.value = "9999-99-99";
   }
   if (Trim(fm.third_date_s.value) != "9999-99-99"){
	   if (Trim(fm.third_time_o.value) == "99" | Trim(fm.third_time_si.value) == "99" | Trim(fm.third_time_bun.value) == "99")
	   {
		onclickCheck = "X";
        alert("3차 방문 시간을 입력해 주세요.");
        fm.third_time_o.focus();
        return;
	   }
   }
   if (Trim(fm.second_date_s.value) == "9999-99-99"){
	   if (Trim(fm.third_date_s.value) != "9999-99-99")
	   {
		onclickCheck = "X";
        alert("2차 방문 날짜를 먼저 입력해 주세요.");
        fm.second_date_s.focus();
        return;
	   }
   }
   if(Trim(fm.email.value)!=""){
		if(!isEmail(fm.email.value)){
			onclickCheck = "X";
			alert("이메일 정보가 올바르지 않습니다.");
			fm.email.focus();
			return;
		}
   }
   if(Trim(fm.tel_1.value)!="000"){
		if(Trim(fm.tel_2.value)=="" || Trim(fm.tel_3.value)==""){
			onclickCheck = "X";
			alert("전화번호를 정확히 입력하세요.");
			fm.tel_1.focus();
			return;
		}
   }
	
   var first_date_a = fm.first_date_s.value.split("-");
   var second_date_a = fm.second_date_s.value.split("-");
   var third_date_a = fm.third_date_s.value.split("-");

   fm.first_date.value = first_date_a[0]+first_date_a[1]+first_date_a[2];
   fm.second_date.value = second_date_a[0]+second_date_a[1]+second_date_a[2];
   fm.third_date.value = third_date_a[0]+third_date_a[1]+third_date_a[2];

   fm.first_time.value = fm.first_time_o.value + "-" + fm.first_time_si.value + "-" + fm.first_time_bun.value;
   fm.second_time.value = fm.second_time_o.value + "-" + fm.second_time_si.value + "-" + fm.second_time_bun.value;
   fm.third_time.value = fm.third_time_o.value + "-" + fm.third_time_si.value + "-" + fm.third_time_bun.value;

   if(Trim(fm.tel_1.value)=="000") {
	   fm.tel.value= "000";
   }else {
	   fm.tel.value = fm.tel_1.value + "-" + fm.tel_2.value + "-" + fm.tel_3.value;
   }

   fm.target="main";
   fm.action="visit_write.do";
   fm.submit();
}

function visit_reply() {
	var fm = document.board_frm;
	
	fm.target="main";
	fm.action="visit_reply_form.do";
	fm.submit();
}

function reg_visit_reply() {
	if(onclickCheck == "O"){
		return;
	}else{
		onclickCheck = "O";
	}
   var fm = document.board_frm;

   if (Trim(fm.subject.value) == "" || Trim(fm.subject.value) =="제목을 입력해 주세요"){
	    onclickCheck = "X";
        alert("제목을 입력해 주세요.");
		fm.subject.value="";
        fm.subject.focus();
        return;
   }
   if (Trim(fm.name.value) == "" || Trim(fm.name.value) == "이름을 입력해 주세요"){
	    onclickCheck = "X";
        alert("이름을 입력해 주세요.");
		fm.name.value="";
        fm.name.focus();
        return;
   }
   if (Trim(fm.content.value) == ""){
	    onclickCheck = "X";
        alert("내용을 입력해 주세요.");
        fm.content.focus();
        return;
   }
   if (Trim(fm.pass.value) == ""){
	    onclickCheck = "X";
        alert("비밀번호를 입력해 주세요.");
        fm.pass.focus();
        return;
   }
   /*
   if (Trim(fm.first_date_s.value) == ""){
        alert("1차 방문 날짜를 입력해 주세요.");
        fm.first_date_s.focus();
        return;
   }
   if (Trim(fm.first_time_o.value) == "99" | Trim(fm.first_time_si.value) == "99" | Trim(fm.first_time_bun.value) == "99") {
        alert("1차 방문 시간을 입력해 주세요.");
        fm.first_time_o.focus();
        return;
   }
   if (Trim(fm.second_date_s.value) == ""){
        fm.second_date_s.value = "9999-99-99";
   }
   if (Trim(fm.second_date_s.value) != "9999-99-99"){
	   if (Trim(fm.second_time_o.value) == "99" | Trim(fm.second_time_si.value) == "99" | Trim(fm.second_time_bun.value) == "99")
	   {
        alert("2차 방문 시간을 입력해 주세요.");
        fm.second_time_o.focus();
        return;
	   }
   }
   if (Trim(fm.third_date_s.value) == ""){
		fm.third_date_s.value = "9999-99-99";
   }
   if (Trim(fm.third_date_s.value) != "9999-99-99"){
	   if (Trim(fm.third_time_o.value) == "99" | Trim(fm.third_time_si.value) == "99" | Trim(fm.third_time_bun.value) == "99")
	   {
        alert("3차 방문 시간을 입력해 주세요.");
        fm.third_time_o.focus();
        return;
	   }
   }
   if (Trim(fm.second_date_s.value) == "9999-99-99"){
	   if (Trim(fm.third_date_s.value) != "9999-99-99")
	   {
        alert("2차 방문 날짜를 먼저 입력해 주세요.");
        fm.second_date_s.focus();
        return;
	   }
   }
   if(Trim(fm.email.value)!=""){
		if(!isEmail(fm.email.value)){
			alert("이메일 정보가 올바르지 않습니다.");
			fm.email.focus();
			return;
		}
   }
   if(Trim(fm.tel_1.value)!="000"){
		if(Trim(fm.tel_2.value)=="" || Trim(fm.tel_3.value)==""){
			alert("전화번호를 정확히 입력하세요.");
			fm.tel_1.focus();
			return;
		}
   }

	
   var first_date_a = fm.first_date_s.value.split("-");
   var second_date_a = fm.second_date_s.value.split("-");
   var third_date_a = fm.third_date_s.value.split("-");

   fm.first_date.value = first_date_a[0]+first_date_a[1]+first_date_a[2];
   fm.second_date.value = second_date_a[0]+second_date_a[1]+second_date_a[2];
   fm.third_date.value = third_date_a[0]+third_date_a[1]+third_date_a[2];

   fm.first_time.value = fm.first_time_o.value + "-" + fm.first_time_si.value + "-" + fm.first_time_bun.value;
   fm.second_time.value = fm.second_time_o.value + "-" + fm.second_time_si.value + "-" + fm.second_time_bun.value;
   fm.third_time.value = fm.third_time_o.value + "-" + fm.third_time_si.value + "-" + fm.third_time_bun.value;

   if(Trim(fm.tel_1.value)=="000") {
	   fm.tel.value= "000";
   }else {
	   fm.tel.value = fm.tel_1.value + "-" + fm.tel_2.value + "-" + fm.tel_3.value;
   }
   */

   fm.target="main";
   fm.action="visit_reply.do";
   fm.submit();
}

function visit_delcheck() {
	var fm = document.board_frm;

	fm.target="main";
    fm.action="visit_delcheck_form.do";
    fm.submit();
}

function visit_admin_del() {
	var fm = document.board_frm;

	fm.target="main";
    fm.action="visit_admin_del.do";
    fm.submit();
}

function visit_admin_del_re(arg1) {
	var fm = eval('document.re_frm'+arg1);

	fm.target="main";
    fm.action="visit_admin_del.do";
    fm.submit();
}

/**
 * 제휴신청
 **/

function reg_partnership() {
	if(onclickCheck == "O"){
		return;
	}else{
		onclickCheck = "O";
	}
   var fm = document.board_frm;

   if (Trim(fm.name.value) == ""){
	    onclickCheck = "X";
        alert("작성자(업체명)을 입력해 주세요.");
		fm.name.value="";
        fm.name.focus();
        return;
   }
   if (Trim(fm.email.value) == ""){
	    onclickCheck = "X";
        alert("이메일을 입력해 주세요.");
        fm.email.focus();
        return;
   }
   if(Trim(fm.email.value)!=""){
		if(!isEmail(fm.email.value)){
			onclickCheck = "X";
			alert("이메일 정보가 올바르지 않습니다.");
			fm.email.focus();
			return;
		}
   }
   if(Trim(fm.tel_1.value)=="000"){
		onclickCheck = "X";
		alert("전화번호를 입력해 주세요.");
		fm.tel_1.focus();
		return;
   }
   if(Trim(fm.tel_1.value)!="000"){
		if(Trim(fm.tel_2.value)=="" || Trim(fm.tel_3.value)==""){
			onclickCheck = "X";
			alert("전화번호를 정확히 입력하세요.");
			fm.tel_1.focus();
			return;
		}
   }
   if(Trim(fm.tel_1.value)=="000") {
	   fm.tel.value= "000";
   }else {
	   fm.tel.value = fm.tel_1.value + "-" + fm.tel_2.value + "-" + fm.tel_3.value;
   }
   if (Trim(fm.content.value) == ""){
	    onclickCheck = "X";
        alert("내용을 입력해 주세요.");
        fm.content.focus();
        return;
   }

   fm.target="main";
   fm.action="app_partnership_reg.do";
   fm.submit();
}

/**
 * 광고신청
 **/

function reg_ad() {
	if(onclickCheck == "O"){
		return;
	}else{
		onclickCheck = "O";
	}
   var fm = document.board_frm;

   if (Trim(fm.name.value) == ""){
	    onclickCheck = "X";
        alert("작성자(업체명)을 입력해 주세요.");
		fm.name.value="";
        fm.name.focus();
        return;
   }
   if (Trim(fm.email.value) == ""){
	    onclickCheck = "X";
        alert("이메일을 입력해 주세요.");
        fm.email.focus();
        return;
   }
   if(Trim(fm.email.value)!=""){
		if(!isEmail(fm.email.value)){
			onclickCheck = "X";
			alert("이메일 정보가 올바르지 않습니다.");
			fm.email.focus();
			return;
		}
   }
   if(Trim(fm.tel_1.value)=="000"){
		onclickCheck = "X";
		alert("전화번호를 입력해 주세요.");
		fm.tel_1.focus();
		return;
   }
   if(Trim(fm.tel_1.value)!="000"){
		if(Trim(fm.tel_2.value)=="" || Trim(fm.tel_3.value)==""){
			onclickCheck = "X";
			alert("전화번호를 정확히 입력하세요.");
			fm.tel_1.focus();
			return;
		}
   }
   if(Trim(fm.tel_1.value)=="000") {
	   fm.tel.value= "000";
   }else {
	   fm.tel.value = fm.tel_1.value + "-" + fm.tel_2.value + "-" + fm.tel_3.value;
   }
   if (Trim(fm.content.value) == ""){
	    onclickCheck = "X";
        alert("내용을 입력해 주세요.");
        fm.content.focus();
        return;
   }

   fm.target="main";
   fm.action="app_ad_reg.do";
   fm.submit();
}