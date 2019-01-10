<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<%@ include file="/WEB-INF/include/include-header.jspf" %>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<!-- http://localhost:8080/hospital/member/list -->

<title>회원 목록</title>

</head>
 <body class="text-center">
<%@ include file="/WEB-INF/include/include-body.jspf" %>


    <h2>회원 목록</h2>
    <table border="1" width="1200px">
        <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>비밀번호</th>
            <th>문자 수신 확인</th>
            <th>전화번호</th>
            <th>이메일</th>
            <th>주소</th>
            <th>신장</th>
            <th>몸무게</th>
            <th>혈액형</th>
            <th>계좌번호</th>
            <th>주민등록번호</th>
            <th>회원가입날짜</th>
            
            <th>프로필 사진</th>
        </tr>
        <c:forEach var="row" items="${list}">
        <tr>
            <td>${row.ID}</td>
            <td>${row.NAME}</td>
            <td>${row.PWD}</td>
            <td>${row.MMS_CHECK}</td>
            <td>${row.PHONE}</td>
            <td>${row.EMAIL}</td>
            <td>${row.ADDR}</td>
            <td>${row.HEIGHT}</td>
            <td>${row.WEIGHT}</td>
            <td>${row.B_TYPE}</td>
            <td>${row.BANK_NO}</td>
            <td>${row.JUMIN}</td>
            <td>${row.JOINDATE}</td>
            
            <td>${row.ID_IMG}</td>
          
        </tr>
        </c:forEach>
    </table>
</body>
</html>
