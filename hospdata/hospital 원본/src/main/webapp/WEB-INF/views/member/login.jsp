<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">

<style>
	body{
		padding:300px;
		align:center;
	}

</style>

</head>
<%@ include file="/WEB-INF/include/include-header.jspf" %>

 <body class="text-center">

        <form action="${path}/hospital/member/login" method="post" class="form-signin">
            <h1 class="h3 mb-3 font-weight-normal">로그인</h1>
      <label for="inputEmail" class="sr-only">이메일 주소</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="이메일 주소" required autofocus>
      <label for="inputPassword" class="sr-only">비밀번호</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="암호" required>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> 로그인 유지
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">로그인</button>
     
     
      </form>

        <div class="social-auth-links text-center">
            <p>- 또는 -</p>
            <a href="#" class="btn btn-block btn-social btn-facebook btn-flat">
                <i class="fa fa-facebook"></i> 페이스북으로 로그인
            </a>
            <a href="#" class="btn btn-block btn-social btn-google btn-flat">
                <i class="fa fa-google-plus"></i> 구글 계정으로 로그인
            </a>
        </div>
        <!-- /.social-auth-links -->

        <a href="#">비밀번호 찾기</a><br>
        <a href="${path}/hospital/member/register" class="text-center">회원가입</a>

    </div>
    <!-- /.login-box-body -->
</div>
<!-- /.login-box -->

<script>

    var msg = "${msg}";
    if (msg === "REGISTERED") {
        alert("회원가입이 완료되었습니다. 로그인해주세요~");
    } else if (msg == "FAILURE") {
        alert("아이디와 비밀번호를 확인해주세요.");
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