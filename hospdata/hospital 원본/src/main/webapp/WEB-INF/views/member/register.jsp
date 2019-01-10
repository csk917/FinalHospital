<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>회원등록 페이지</title>
<%@ include file="/WEB-INF/include/include-header.jspf" %>

<style>
	body{
		padding:100px;
		align:center;
	}
</style>
</head>

 <body class="text-center bg-light">
<%@ include file="/WEB-INF/include/include-body.jspf" %>

<div class="register-box">
    <div class="register-logo">
        <a href="${path}/member/register">
            <b>회원가입</b>&nbsp 
        </a>
    </div>

    <div class="register-box-body">
    
        <p class="login-box-msg">회원가입 페이지</p>

    <form name="form1" action="${path}/hospital/member/register" method="post" >
        <table border="1" width="400px">
            <tr>
                <td>이메일 주소</td>
                <td><input name="id"></td>
            </tr>
            
            <hr/>
            
            <tr>
                <td>비밀번호</td>
                <td><input type="password" name="pwd"></td>
            </tr>
                      
            <tr>
                <td>이름</td>
                <td><input name="name"></td>
            </tr>
             <tr>
                <td>전화번호</td>
                <td><input name="phone"></td>
            </tr>
            <tr>
                <td>주민등록번호 앞자리</td>
                <td><input name="addr"></td>
            </tr>
            
             <tr>
                <td>신장</td>
                <td><input name="height"></td>
            </tr>
            
             <tr>
                <td>몸무게</td>
                <td><input name="weight"></td>
            </tr>
          	<tr>
                <td colspan="2" align="center">
                    <input type="submit" class="btn btn-primary btn-lg active" value="확인">
                    <input type="reset" class="btn btn-primary btn-lg active" value="취소">
                </td>
            </tr>
        </table>
        
        <div class="row">
                <div class="col-xs-8">
                    <div class="checkbox icheck">
                        <label>
                            <input type="checkbox"> 약관에  동의<a href="#"></a>
                        </label>
                    </div>
                </div>
        </div>
               
                <div class="col-xs-4">
                    <button type="submit" class="btn btn-outline-info">회원가입</button>
                </div>
           
            
    </form>
    	<br/>
     	<a href="${path}/hospital/member/login" class="btn btn-outline-primary">로그인</a>
     
     </div>
<!-- /.form-box -->
</div>
<!-- /.register-box -->
    <script type="text/javascript">
	var gfv_count = 1;
	
	
		$(document).ready(function(){
			$("#list").on("click", function(e){ //목록으로 버튼
				e.preventDefault();
				fn_openBoardList();
			});
			
			$("#write").on("click", function(e){ //작성하기 버튼
				e.preventDefault();
				fn_insertBoard();
			});
			
			$("#addFile").on("click", function(e){
				e.preventDefault();
				fn_addFile();
			});
			$("a[name='delete']").on("click", function(e){
				e.preventDefault();
				fn_deleteFile($(this));
			})
		});
		
		function fn_openBoardList(){
			var comSubmit = new ComSubmit();
			comSubmit.setUrl("<c:url value='/board/openBoardList' />");
			comSubmit.submit();
		}
		
		function fn_insertBoard(){
			var comSubmit = new ComSubmit("frm");
			comSubmit.setUrl("<c:url value='/board/insertBoard' />");
			comSubmit.submit();
		}
		
		function fn_addFile(){
            var str = "<p><input type='file' name='file_"+(gfv_count++)+"'><a href='#this' class='btn' name='delete'>삭제</a></p>";
            $("#fileDiv").append(str);
            $("a[name='delete']").on("click", function(e){ //삭제 버튼
                e.preventDefault();
                fn_deleteFile($(this));
            });
        }
		
		function fn_deleteFile(obj){
			obj.parent().remove();
		}
		
		
		$(function () {
	        $('input').iCheck({
	            checkboxClass: 'icheckbox_square-blue',
	            radioClass: 'iradio_square-blue',
	            increaseArea: '20%' // optional
	        });
	    });
	</script>
    
</body>
</html>