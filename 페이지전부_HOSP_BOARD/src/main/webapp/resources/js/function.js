/// 전역 변수 선언


var sepCol = "†"	//배열을 string으로 만들거나 배열로 split할때 사용
var sepRow = "‡"
var testObjResult = {};


/// 전역 함수 선언

function LTrim( s ) {

	/*while (1) {
		if ( s.substring(0, 1) != " " ) {
			break;
		}
		s = s.substring(1, s.length);
	}
	return s;*/

	return s.replace(/^\s+/, "");
}
/////////////////////////////////////////////////////////////////////
function RTrim( s ) {
	/*while (1) {
		if ( s.substring(s.length - 1, s.length) != " " ) {
			break;
		}
		s = s.substring(0, s.length - 1);
	}
	return s;*/
	return s.replace(/\s+$/, "");
}
/////////////////////////////////////////////////////////////////////
function Trim( s) {
	var tmpstr = LTrim(s);
	
	return RTrim(tmpstr);
}
/////////////////////////////////////////////////////////////////////

function Replace(s, x, y) {
	if ((x == y) || (parseInt(y.indexOf(x)) > -1)) {
		errmessage = "replace function error: \n";
		errmessage += "Second argument and third argument could be the same ";
		errmessage += "or third argument contains second argument.\n";
		errmessage += "This will create an infinite loop as it's replaced globally.";
		alert(errmessage);
		return false;
	}
	while (s.indexOf(x) != -1) {
		var leading = s.substring(0, s.indexOf(x));
		var trailing = s.substring(s.indexOf(x) + x.length, s.length);
		s = leading + y + trailing;
	}
	return s;
}

function Left$(t$,n)
{
  if ( n >=0 )
    return ( t$.substring(0,n) )
  else
    return ( Left$(t$,Len(t$)+n) )
}


// ****************************************************************************
// *                                                                          *
// *    Right$(t$,n)    This function will return the rightmost n characters  *
// *                    of a string or, if n is negative, will return the     *
// *                    string with the leftmost n charcters removed.         *
// *                                                                          *
// *    Examples        Right$("Hello There", 4) ==> "here"                   *
// *                    Right$("Hello There",-4) ==> "o There"                *
// *                                                                          *
// ****************************************************************************

function Right$(t$,n)
{
  if ( n >=0 )
    return ( t$.substring(Len(t$)-n,Len(t$)) )
  else
    return ( Right$(t$,Len(t$)+n) )
}

// ****************************************************************************
// *                                                                          *
// *    Mid$(t$,n,w)    This function will return w characters of the string  *
// *                    starting from position n.                             *
// *                                                                          *
// *    Example         Mid$("Hello There",3,5) ==> "llo T"                   *
// *                                                                          *
// ****************************************************************************

function Mid$(t$,n,w)
{
  return ( t$.substring(n-1,n-1+w) )
}

// ****************************************************************************
// *                                                                          *
// *    PokeMid(t$,n,w$)        This function will
// *                                                                          *
// *    Example         PokeMid$("Hello There",3,"XX") ==> "HeXXo There"      *
// *                                                                          *
// ****************************************************************************

function PokeMid$(t$,n,w$)
{
  return ( Left$(t$,n-1)+w$+Right$(t$, (-(n+Len(w$)))+1 ) )
}

// ****************************************************************************
// *                                                                          *
// *    Ucase$(t$)      This function will convert all characters in a string *
// *                    to uppercase.                                         *
// *                                                                          *
// *    Example         Ucase$("Hello There") ==> "HELLO THERE"               *
// *                                                                          *
// ****************************************************************************

function Ucase$(t$)
{
  return ( t$.toUpperCase() )
}

// ****************************************************************************
// *                                                                          *
// *    Lcase$(t$)      This function will convert all characters in a string *
// *                    to lowercase.                                         *
// *                                                                          *
// *    Example         Ucase$("Hello There") ==> "hello there"               *
// *                                                                          *
// ****************************************************************************

function Lcase$(t$)
{
   return ( t$.toLowerCase() )
}

// ****************************************************************************
// *                                                                          *
// *    Len(t$)         This function will return the number of characters    *
// *                    in a string.                                          *
// *                                                                          *
// *    Examples        Len("Hello There") ==> 11                             *
// *                    Len("")            ==>  0                             *
// *                    Len(null)          ==>  0                             *
// *                                                                          *
// ****************************************************************************

function Len(t$)
{
 if ( t$ == null )
   return ( 0 )
 else
   return ( t$.length )
}

/////////////////////////////////////////////////////////////////////
function InStr(t, s)
{
  return ( t.indexOf(s)+1 )
}
/////////////////////////////////////////////////////////////////////
function isNull(s) {   
	return ((s == null) || (s.length == 0))
}
/////////////////////////////////////////////////////////////////////
function isEmpty(s) {
	for ( var i = 0 ; i < s.length ; i++ ) {
		if ( s.substring( i, i+1 ) != " " ) { 
			return false; 
		}
	}
	return true;
}
/////////////////////////////////////////////////////////////////////
function isInteger(s) {
	if (s.length > 0) { 
		sNum = s;
		for (i=0; i<sNum.length; i++) {
			if (sNum.charAt(i) < '0' || sNum.charAt(i) > '9') { 
				return false; 
			}
		}
		return true;
	} else { 
		return false; 
	}
}
/////////////////////////////////////////////////////////////////////
function CheckNumKeys(s) // 문자입력 금지 함수 설정
{
	alert(event.keyCode);
	//if(( event.keyCode >= 97 && event.keyCode <= 122) || (event.keyCode >=65 && event.keyCode <=90))
	if(( event.keyCode < 48 || event.keyCode > 57))
	{
		event.keyCode=0;
	}

}

function num_only(){
  if((event.keyCode<48) || (event.keyCode>57)){
    event.returnValue=false;
  }
}
/////////////////////////////////////////////////////////////////////
//20171207 김태응 문자 입력금지 정규식으로 바꿈
function numberOnly(evt) { // 문자 입력금지

//alert("bbbbb " + evt.keyCode);
     /* evt = (evt) ? evt : ((window.event) ? event : null);
    if (evt) {
       var elem = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
       if (elem) {
           var charCode = (evt.charCode) ? evt.charCode : 
               ((evt.which) ? evt.which : evt.keyCode);
			//console.log("charCode ==> " + charCode );
		   if (charCode > 128)
		   {
			   return false;
		   }
		   //console.log("charCode ==> " + charCode );
           //48~57은 키보다 상단 숫자키. 96~105는 오른쪽 숫자키패드
		   if ((charCode > 47 && charCode < 58) || (charCode > 95 && charCode < 106) || charCode == 46 ||  charCode == 8 || charCode == 9 || charCode == 110) { //46-delete key, 8-backspace key, 9-tab key, 110-숫자패드 점
               return true;
           } else {
               return false;
           }
       }
    } */
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;
	key = String.fromCharCode( key );
	var regex = /[0-9\b]|\./
	if( !regex.test(key) ) 
	{
		if(theEvent.preventDefault) theEvent.preventDefault();
		event.returnValue = false;
	}
}

function numberOnly2(evt) { // 문자 입력금지
     /* evt = (evt) ? evt : ((window.event) ? event : null);
    if (evt) {
       var elem = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
       if (elem) {
           var charCode = (evt.charCode) ? evt.charCode : 
               ((evt.which) ? evt.which : evt.keyCode);
			//console.log("charCode ==> " + charCode );
		   if (charCode > 128)
		   {
			   return false;
		   }
		   //console.log("charCode ==> " + charCode );
           //48~57은 키보다 상단 숫자키. 96~105는 오른쪽 숫자키패드
		   if ((charCode > 47 && charCode < 58) || (charCode > 95 && charCode < 106) || charCode == 46 ||  charCode == 8 || charCode == 9 || charCode == 110) { //46-delete key, 8-backspace key, 9-tab key, 110-숫자패드 점
               return true;
           } else {
               return false;
           }
       }
    } */
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;
	key = String.fromCharCode( key );
	var regex = /[0-9\b]|\./
	if( !regex.test(key) ) 
	{
		if(theEvent.preventDefault) theEvent.preventDefault();
		event.returnValue = false;
	}
}

//20171206 김태응 숫자검사 정규식으로 변환
function numberOnly3(evt)
{
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;
	key = String.fromCharCode( key );
	var regex = /[0-9\b]|\./
	if( !regex.test(key) ) 
	{
		if(theEvent.preventDefault) theEvent.preventDefault();
		event.returnValue = false;
	}
}

function numberNalphbatOnly(evt) { // 영문 숫자 외 입력금지
    evt = (evt) ? evt : ((window.event) ? event : null);
    if (evt) {
       var elem = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
       if (elem) {
           var charCode = (evt.charCode) ? evt.charCode : 
               ((evt.which) ? evt.which : evt.keyCode);

		   if (charCode > 128)
		   {
			   return false;
		   }
           if ((charCode > 96 && charCode < 123 ) || (charCode > 47 && charCode < 58) || (charCode > 64 && charCode < 91)) {
               return true;
           } else {
               return false;
           }
       }
    }
}

function numberNDashOnly(evt) { // 문자 입력금지
	//alert(evt.keyCode);
	 //46-delete key, 8-backspace key, 109, 189-Dash key, 13-enter key
    if (evt.keyCode > 47 && evt.keyCode < 58 || evt.keyCode > 95 && evt.keyCode < 106 ||  evt.keyCode == 46 ||  evt.keyCode == 8 || evt.keyCode == 109 || evt.keyCode == 189 || evt.keyCode == 13 ) {
	   return true;
   } else {
	   return false;
   }	

}
/////////////////////////////////////////////////////////////////////////
function isFloat(s) {
	RefString     = "-1234567890.";
	DecimalPoints = 0;
	for (i=0; i<s.length; i++) {
		TempChar = s.substring ( i, i+1 );
		// Can only have zero or one decimal points in a number
		if (  TempChar == "." ) { DecimalPoints++; }				
		// Minus Sign must be first character
		if (( TempChar == "-" ) && ( i != 0 )) { return ( false ); }	
		// Check if current character is valid(character not found in RefString)
		if ( RefString.indexOf (TempChar,0) == -1) { return ( false ); }
	}
	if ( DecimalPoints > 1 ) { return ( false ); } 
	return(true);
}
/////////////////////////////////////////////////////////////////////
function isAlphaNumeric(s) {
	if (s.length > 0) { 
		sNum = s;
		for (i=0; i<sNum.length; i++) {
			if (!(((sNum.charAt(i) >= 'A' && sNum.charAt(i) <= 'Z') || 
					sNum.charAt(i) >= 'a' && sNum.charAt(i) <= 'z') || 
					(sNum.charAt(i) >= '0' && sNum.charAt(i) <= '9')) ) {
				return false;
			}
		}
		return true;
	} else { 
		return false; 
	}
}
/////////////////////////////////////////////////////////////////////
function isLenFromTo(s, iFrom, iTo) {
	iL = s.length
	if (iFrom <= iL && iL <= iTo) { 
		return true;  
	} else { 
		return false; 
	} 
}
/////////////////////////////////////////////////////////////////////
function isTime(s) {
	//12:00:59
	//012345678
	//hh:mm:ss
	//hh = 00 ~ 23
	//mm = 00 ~ 59
	//ss = 00 ~ 59
	if (s.length == 8) {
		if (s.substring(2,3) != ":") { return false; }
		if (s.substring(5,6) != ":") { return false; }
		if (s.substring(0,2) >= '00' && s.substring(0,2) <= '23')
			if (s.substring(3,5) >= '00' && s.substring(3,5) <= '59')
				if (s.substring(6,8) >= '00' && s.substring(6,8) <= '59') { return true; }	
	}
	return false;
}
/////////////////////////////////////////////////////////////////////
function LeapYear(yr) {
	/*	Is it a leap year?
	**	1.Years divisible by 4 are leap years, but 
	**	2.Years divisible by 100 are not leap years, but 
	**	3.Years divisible by 400 are leap years. 
	*/
	if (((yr % 4 == 0) && yr % 100 != 0) || yr % 400 == 0) { return true; }
	else { return false; }
}
/////////////////////////////////////////////////////////////////////
function isDate(s)
{
	/* Note: Date must be in the format MM/DD/YYYY */
	/* Allow empty fields as dates. */
	if (s.length > 0) {    
		Slashes   = 0;
		Month     = 0;
		Day       = 0;
		Year      = 0;
		RefString = "01234567890/";
		for (i=0; i<s.length; i++) {  
			TempChar = s.substring(i, i +1);
			/* Invalid character? */
			if (RefString.indexOf(TempChar,0) == -1) {	
				//alert ( "Invalid character in date string.  Format must be: MM/DD/YYYY." ); 
				return (false); 
			}
			/* Must have two slashes */	
			if ( TempChar == "/" ) { Slashes++; }
		}
		if ( Slashes != 2 ) { 
			//alert ( "Date string must have two slashes in it.  Format must be: MM/DD/YYYY." ); 
			return (false); 
		}
		/* Parse out the date pieces */
		i =  0;
		x = "";
		/* Month */
		while ((s.charAt(i) != "/") && (i <= s.length))	{
			x = x +  s.charAt(i);
			i++;
		}
		Month = Month + x;  // Rely on implicit conversion of char string x to a number  
		if (( Month < 1 ) || ( Month > 12 )) { 
			//alert ( "Month must be between 1 and 12." ); 
			return (false); 
		}
		/* Day */
		i++; // Skip the slash
		x = "";
		while ((s.charAt(i) != "/") && (i <= s.length))	{
			x = x +  s.charAt(i);
			i++;
		}
		Day = Day + x; 
		if (( Day < 1 ) || ( Day > 31 )) { 
			//alert ( "Day must be between 1 and 31." ); 
			return (false); 
		}
		/* Year */
		i++; 
		x = "";
		while ((s.charAt(i) != "/") && (i <= s.length))	{
			x = x +  s.charAt(i);
			i++;
		}
		Year = Year + x; 
		if (( Year < 1000 ) || ( Year > 9999 )) { 
			//alert ( "Year must be between 1000 and 9999." ); 
			return (false); 
		}
		/* Check Day a bit more closely */
		if (( Month == 4 || Month == 6 || Month == 9 || Month == 11 ) && ( Day > 30 )) { 
			//alert( "Month " + Month + " can not have more than 30 days." );
			return ( false );
		}
		if ( Month == 2) {
			if ( LeapYear(Year) ) {
				if ( Day > 29 ) { 
					//alert( "February can not have more than 29 days in " + Year + "." ); 
					return false; 
				}
			} else { 
				if ( Day > 28 ) { 
					//alert( "February can not have more than 28 days in " + Year + "." ); 
					return false; 
				}
			}

		}
	}
	return ( true );
}
/////////////////////////////////////////////////////////////////////
// 0123456789    
// YYYY/MM/DD -> MM/DD/YYYY
// alert(convDateYMD2MDY("1999/12/01"));
function convDateYMD2MDY(sDate) {
	var ret = "";
	ret += sDate.substring(5,7) + "/";
	ret += sDate.substring(8,10) + "/";
	ret += sDate.substring(0,4)
	return ret;
}
/////////////////////////////////////////////////////////////////////
function checkSSN( s ) {
	var Sum = 0;
	alert(s.length);
	if ( s.length != 13 ) return false;
	if ( isInteger(s) == false ) return false;
	for(i = 0; i < 12; i++)	{
		if( i < 6 ) { Sum += parseInt(s.charAt(i)) * (i + 2); }
		if( i > 5 && i < 8) { Sum += parseInt(s.charAt(i)) * ( i + 1); }
		if( i > 7 ) { Sum += parseInt(s.charAt(i)) * ( i - 7); }
	}
	if( 11 - (Sum % 11) != parseInt(s.charAt(12)) )	{ return false; } 
	return true;
}
/////////////////// 주민번호 체크 ////////////////////
function isSSN(prenum, postnum)
{
	if (prenum == "" || postnum == "" || prenum.length != 6 || postnum.length != 7) //20121004 jm. 아래에서 체크하던걸 위로 이동.
	{		
		return false;	
	}

	//20120926 jm. 신생아는 주민번호 오류 확인 안하게.
	var today = new Date();
	var tmp = "20" + prenum.substring(0,2);
	tmp = today.getFullYear() - tmp;
	//alert("isSSN " + prenum + " : " + postnum + " : " +  today.getFullYear() + " : " + tmp);
	if (tmp == 0 || tmp == 1)
	{
		today = timeSt(today);		
		tmp = "20" + prenum;

		if(today <= tmp)			
		{
			//alert(today + " <= " + tmp);
			return true;
		}
	}

 sonum = prenum + postnum;
 
// if (prenum == "" || postnum == "") return false;
 
// if (prenum.length < 6 || postnum.length < 7) return false;
 
 
 for (var i = 0; i < sonum.length; i++) {
  ch = sonum.charAt(i);
  if (!(ch >= '0' || ch <= '9')) return false;
 }
 
 if (parseInt(prenum) != NaN && parseInt(postnum) != NaN) {
  lid = parseFloat(postnum.substring(6,7));
//  alert(lid);

  n01 = parseFloat(prenum.substring(0,1)) * 2;
  n02 = parseFloat(prenum.substring(1,2)) * 3;
  n03 = parseFloat(prenum.substring(2,3)) * 4;
  n04 = parseFloat(prenum.substring(3,4)) * 5;
  n05 = parseFloat(prenum.substring(4,5)) * 6;
  n06 = parseFloat(prenum.substring(5,6)) * 7;
  n07 = parseFloat(postnum.substring(0,1)) * 8;
  n08 = parseFloat(postnum.substring(1,2)) * 9;
  n09 = parseFloat(postnum.substring(2,3)) * 2;
  n10 = parseFloat(postnum.substring(3,4)) * 3;
  n11 = parseFloat(postnum.substring(4,5)) * 4;
  n12 = parseFloat(postnum.substring(5,6)) * 5;
  nSum = n01 + n02 + n03 + n04 + n05 + n06 + n07 + n08 + n09 + n10 + n11 + n12;
//  nSum = n07 + n08 + n09 + n10 + n11 + n12;
  
  lmod = nSum % 11;
  lminus = 11 - lmod;
  llast = lminus % 10;
  
  if (llast != lid)
	  return false;
 }
 else{
	return false;
 }
 
 return true;
} 

/////////////////// 주민번호 체크 20141004 jm. 외국인도 가능하게 만듬. ////////////////////
function isSSNo(ssno){
	//alert(ssno);
	if (ssno == "" || ssno.length != 13) //20121004 jm. 아래에서 체크하던걸 위로 이동.
	{		
		return false;	
	}

	//20120926 jm. 신생아는 주민번호 오류 확인 안하게.
	var today = new Date();	
	var tmp = "20" + ssno.substring(0, 2);
	tmp = today.getFullYear() - tmp;
	//alert("isSSNo " + today.getFullYear() + " : " + tmp + " : " + ssno.substring(0, 2));
	if (tmp == 0 || tmp == 1)
	{
		today = timeSt(today);				
		tmp = "20" + ssno.substring(0, 6);	
		if(today <= tmp)			
		{
			//alert(today + " <= " + tmp);
			return true;
		}		
	}

	var bo = false;

	var foreign = false; //외국인이냐?
	//외국인 뒷자리 앞번호가 5,6,7,8일 경우 외국인
	if(ssno.substring(6, 7) > 4)
		foreign = true;
	
	var Result = 0, k = 0, check1 = 0, check2 = 0, check3 = 0;

	for(var i = 0; i < 12; i++)
	{		
		if(i < 8)
			k = Number(ssno.charAt(i) * (i + 2));
		else if(i >= 8) 
			k = Number(ssno.charAt(i) * (i - 6));
			
		Result = Result + k;
		//alert(Result);
	}

	Result = Result % 11;
	Result = (11 - Result) % 10;

	check1 = Number(ssno.charAt(2)) * 10 + Number(ssno.charAt(3));	
	check2 = Number(ssno.charAt(4)) * 10 + Number(ssno.charAt(5));
	check3 = Number(ssno.charAt(6));

	//alert(Result + " : " + check1 + " : " + check2 + " : " + check3 + " : " + ssno.charAt(2) + " : " + ssno.charAt(3) + " : " + ssno.charAt(4) + " : " + ssno.charAt(5) + " : " + ssno.charAt(6) + " : " + ssno.charAt(12));	
	if(foreign == false){ //내국인
		if(Result == ssno.charAt(12)){
			if(check1 < 13 && check2 < 32 && check3 < 5)
				bo = true;  
			else
				bo = false;
		}
		else
			bo = false;		
	}
	else //외국인
	{
		if(Result >= 10)			
			Result = Result - 10;			
		Result = Result + 2;
		if(Result >= 10)			
			Result = Result - 10;			
		if( Result != ssno.charAt(12))			
			bo = false;	
		else
			bo = true;
	}
	
	return bo;
}

//20121213 jm. 날짜계산 추가.
function timeSt(dt) {	
	 var d = new Date(Date.parse(dt) - (30 * 1000 * 60 * 60 * 24));  //60일->30일(2016-01-26)
	 var yyyy = d.getFullYear();
	 var MM = d.getMonth()+1;
	 var dd = d.getDate();
	// var hh = d.getHours();
	// var mm = d.getMinutes();
	// var ss = d.getSeconds();
	 //return (yyyy + '-' + addzero(MM) + '-' + addzero(dd) + ' ' + addzero(hh) + ':' + addzero(mm) + ':' + addzero(ss));
	 return (yyyy + "" + addzero(MM) + "" + addzero(dd));
}
//20160111 jm. 날짜계산 추가.
function timeInterval(dt, interval) {	
	//console.log("interval ==> " + interval);
	 var d = new Date(Date.parse(dt) - (interval * 1000 * 60 * 60 * 24));
	 var yyyy = d.getFullYear();
	 var MM = d.getMonth() + 1; //자바스크립트는 월이 0부터 시작해서 + 1
	 var dd = d.getDate();	
	 return (yyyy + "" + addzero(MM) + "" + addzero(dd));
}
//10보다 작으면 앞에 0을 붙임
function addzero(n) {
	return n < 10 ? "0" + n : n;
}
//20121213 jm. 날짜계산 추가.

/////////////////////////////////////////////////////////////////////
//http://www.tneoh.zoneit.com/javascript/js_func.html
function isUrl(s) {

	if (s.indexOf(" ") != -1) {	return false; }
	else if (s.indexOf("http://") == -1) { return false; }
	else if (s == "http://") { return false; }
	else if (s.indexOf("http://") > 0) { return false; }
	s = s.substring(7, s.length);
	if (s.indexOf(".") == -1) {	return false; }
	else if (s.indexOf(".") == 0) {	return false; }
	else if (s.charAt(s.length - 1) == ".") { return false; }
	if (s.indexOf("/") != -1) {
		s = s.substring(0, s.indexOf("/"));
		if (s.charAt(s.length - 1) == ".") { return false; }
	}
	if (s.indexOf(":") != -1) {
		if (s.indexOf(":") == (s.length - 1)) {	return false; }
		else if (s.charAt(s.indexOf(":") + 1) == ".") {	return false; }
		s = s.substring(0, s.indexOf(":"));
		if (s.charAt(s.length - 1) == ".") { return false; }
	}
	return true;
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function isFtp(s) {
	if (s.indexOf(" ") != -1) {	return false; }
	else if (s.indexOf("ftp://") == -1) { return false; }
	else if (s == "ftp://") { return false; }
	else if (s.indexOf("ftp://") > 0) { return false; }
	s = s.substring(7, s.length);
	if (s.indexOf(".") == -1) {	return false; }
	else if (s.indexOf(".") == 0) {	return false; }
	else if (s.charAt(s.length - 1) == ".") { return false; }
	if (s.indexOf("/") != -1) {
		s = s.substring(0, s.indexOf("/"));
		if (s.charAt(s.length - 1) == ".") { return false; }
	}
	if (s.indexOf(":") != -1) {
		if (s.indexOf(":") == (s.length - 1)) {	return false; }
		else if (s.charAt(s.indexOf(":") + 1) == ".") {	return false; }
		s = s.substring(0, s.indexOf(":"));
		if (s.charAt(s.length - 1) == ".") { return false; }
	}
	return true;
}
/////////////////////////////////////////////////////////////////////

function isEmail(s) {
	if (s.indexOf(" ") != -1)
		return false;
	else if (s.indexOf("@") == -1)
		return false;
	else if (s.indexOf("@") == 0)
		return false;
	else if (s.indexOf("@") == (s.length-1))
		return false;
	var arrayString = s.split("@"); //(works only in netscape3 and above.)
	//var retSize = customSplit(argvalue, "@", "arrayString");
	if (arrayString[1].indexOf(".") == -1)
		return false;
	else if (arrayString[1].indexOf(".") == 0)
		return false;
	else if (arrayString[1].charAt(arrayString[1].length-1) == ".") {
		return false;
	}
	return true;
}
/////////////////////////////////////////////////////////////////////
function isWord(argvalue) {
	var onechar = "";
	for (var n = 0; n < argvalue.length; n++) {
		onechar = argvalue.substring(n, n+1);
		if ((onechar < "0" || onechar > "9") && (onechar < "A" || onechar > "Z") && (onechar < "a" || onechar > "z")) {
			return false;
		}
	}
	return true;
}
/////////////////////////////////////////////////////////////////////
function isEmail_txt(argvalue) {
	var onechar = "";
	for (var n = 0; n < argvalue.length; n++) {
		onechar = argvalue.substring(n, n+1);
		
		if ((onechar < "-" || onechar > "9") && (onechar < "A" || onechar > "_") && (onechar < "a" || onechar > "z")) {
			return false;
		}
		
		if (onechar == "," || onechar == "@" || onechar == "#" || onechar == "|" || onechar == "^" || onechar == "[" ||	onechar == "\\" || onechar == "]" || onechar == "/") {
			return false;
		}
	}
	return true;
}
/////////////////////////////////////////////////////////////////////
function isText(argvalue) {
	var onechar = "";
	for (var n = 0; n < argvalue.length; n++) {
		onechar = argvalue.substring(n, n+1);
		if (onechar == "#" || onechar == "|" || onechar == "^" || onechar == "&" || onechar == ";") {
			return false;
		}
	}
	return true;
}
function isText2(argvalue) {
	var onechar = "";
	for (var n = 0; n < argvalue.length; n++) {
		onechar = argvalue.substring(n, n+1);
		if (onechar == "\'" || onechar == "\"" || onechar == "<" || onechar == ">") {
			return false;
		}
	}
	return true;
}
/////////////////////////////////////////////////////////////////////
function JFormat(argvalue, format) {
	var numOfDecimal = 0;
	if (format.indexOf(".") != -1) {
		numOfDecimal = format.substring(format.indexOf(".") + 1, format.length).length;
	}
	argvalue = formatDecimal(argvalue, true, numOfDecimal);
	argvalueBeforeDot = argvalue.substring(0, argvalue.indexOf("."));
	retValue = argvalue.substring(argvalue.indexOf("."), argvalue.length);
	strBeforeDot = format.substring(0, format.indexOf("."));
	for (var n = strBeforeDot.length - 1; n >= 0; n--) {
		oneformatchar = strBeforeDot.substring(n, n + 1);
		if (oneformatchar == "#") {
			if (argvalueBeforeDot.length > 0) {
				argvalueonechar = argvalueBeforeDot.substring(argvalueBeforeDot.length - 1, argvalueBeforeDot.length);
				retValue = argvalueonechar + retValue;
				argvalueBeforeDot = argvalueBeforeDot.substring(0, argvalueBeforeDot.length - 1);
			}
		}
		else {
			if (argvalueBeforeDot.length > 0 || n == 0)
			retValue = oneformatchar + retValue;
		}
	}
	return retValue;
}
/////////////////////////////////////////////////////////////////////
// These are the basic functions to set, get and delete a cookie.
// http://www.brainjar.com/js/cookielib.html
/////////////////////////////////////////////////////////////////////
function setCookie_bak_20160410 (name, value, expires) {
  //Set a cookie given a name, value and expiration date.
  document.cookie = name + "=" + escape(value) + "; expires=" + expires.toGMTString() +  "; path=/";
}
/////////////////////////////////////////////////////////////////////
function getCookie_bak_20160410(name) {
  var search;
  // Returns the value of the named cookie.
  search = name + "="
  offset = document.cookie.indexOf(search) 
  if (offset != -1) {
    offset += search.length ;
    end = document.cookie.indexOf(";", offset) ;
    if (end == -1)
      end = document.cookie.length;
    return unescape(document.cookie.substring(offset, end));
  }
  else
    return "";
}
/////////////////////////////////////////////////////////////////////
function deleteCookie_bak_20160410(name) {
  var expdate = new Date();
  // Delete the named cookie.
  expdate.setTime(expdate.getTime() - (86400 * 1000 * 1));
  setCookie(name, "", expdate);
}
/////////////////////////////////////////////////////////////////////
// convert a character into ascii code
// <INPUT NAME="ASCIICode" VALUE="65" onChange="Letter.value=Character(parseInt(ASCIICode.value))">
function Chr2Asc(Letter) {  
	var Alpha = ' !"#$%& ()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[ ]^_`abcdefghijklmnopqrstuvwxyz{|}~'
	if (Letter == "'") {
		return 39;
	} else if (escape(Letter) == "%5C") {
		return 92;
	} else if (Alpha.indexOf(Letter) < 0) { 
		return Alpha.indexOf(Letter);
	} else {
		return Alpha.indexOf(Letter)+ 32;
	}
}
/////////////////////////////////////////////////////////////////////
// convert ascii code into a character
// <INPUT NAME="Letter" VALUE="A" onChange="ASCIICode.value=ASCII(Letter.value)">
function Asc2Chr(Code)
{  var Alpha = ' !"#$%& ()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[ ]^_`abcdefghijklmnopqrstuvwxyz{|}~'
   if (Code == 39) return "'"
   else if (Code == 92) return unescape("%5C")
        else return Alpha.charAt(Code - 32)
}
/////////////////////////////////////////////////////////////////////
function HLen(s) {
	if (s.length <= 0) { 
		return 0; 
	}
	var chlen = 0;
	for ( var i = 0 ; i < s.length ; i++ ) {
		if ( Chr2Asc(s.substring(i, i + 1)) < 0 ) { 
			chlen += 2;
		} else {
			chlen += 1;
		}
	}
	return chlen;
}
/////////////////////////////////////////////////////////////////////
function beetweenAnB(x, a, b) {
	if (parseInt(a) <= parseInt(x) && parseInt(x) <= parseInt(b) ) {
		return true;
	} else {
		return false;
	}
}
/////////////////////////////////////////////////////////////////////
function isOdd (n) {
	if ((n % 2) == 1) {
		return true;
	}
	return false;
}
/////////////////////////////////////////////////////////////////////
function isEven (n) {
	if ((n % 2) != 1) {
		return true;
	}
	return false;
}
/////////////////////////////////////////////////////////////////////
function scrollstatus()
{
  var str = '';
  if (scrollstatus.arguments.length > 0) {
    var i;
    for (str = '', i = 0; i < 100; i++)
      str += ' ';
    for (i = 0; i < scrollstatus.arguments.length; i++)
      str += scrollstatus.arguments[i] + ' ';
    document.scrollstatus = str;
  } else {
    var src_str = document.scrollstatus;
    str  = src_str.substring(1, src_str.length);
    str += src_str.substring(0, 1);
    document.scrollstatus = str;
  }
  window.status = str;
  setTimeout('scrollstatus()', 100);
}

////////////////////////////////////////////////////////////////////////
/*                HtmlEdit <div> 태그 삽입 함수                        */
/*   작성일 : 2005.10.25                                               */
////////////////////////////////////////////////////////////////////////   

function HtmlEditDiv()
{
		/**  HtmlEdit 저장하기전 <div> 태그 입력 **/ 
		var docObj = PubEdit.tbContentElement.DOM.parentWindow.document.all.item("EditBody");
		
		if(docObj != null){			
			docObj.insertAdjacentHTML("beforeEnd","<div>&nbsp;</div>")
		}		
} 

////////////////////////////////////////////////////////////////////////
// showPopupEx - 상태정보 전부 받는 함수
// 작성일 : 2005.10.25
//////////////////////////////////////////////////////////////////////// 
function showPopupEx(target, objname, state, resisable) { 
	var popWindow = window.open(target,objname, state); 
	//var popWindow = showModalDialog(target, objname, state);
	return popWindow
}

////////////////////////////////////////////////////////////////////////
// showPopup - 상태정보를 선별적으로 받는 함수
// 작성일 : 2005.10.25
//////////////////////////////////////////////////////////////////////// 
function showPopup(target, objname, width, height, status, menubar, scrollbars, resisable) { 
	if(status == "") status = "no"
	if(menubar == "") menubar = "no"
	if(scrollbars == "") scrollbars = "no"
	if(resisable == "") resisable = "no"
	
	var state = 'width=' + width 
			+ ',height=' + height 
			+ ',left=' + (screen.width-width)/2 
			+ ',top=' + (screen.height-height)/2 
			+ ',toolbar=no,location=no,directories=no'
			+ ',status=' + status 
			+ ',menubar=' + menubar
			+ ',scrollbars=' + scrollbars
			+ ',resizable=' + resisable;
			
	var popWindow = showPopupEx(target,objname, state, resisable); 
	return popWindow
}

//////////////////// 모달 카렌다 ////////////////////////////////////////////
function calendar_pop(obj)
{
	var today = new Date();
	var tElement = document.all(obj);
	var time = today.getTime();
	
	var settings='height=410,width=400,top=150,left=330,scrollbars=no,resizable=no,status=no,toolbar=no,location=no,menu=no';
	var targetUrl = "calendar_frame.do?value=" + tElement.value + "&obj=" + obj;		
	window.open(targetUrl, "popwindow", settings);
}

function sendMeData(data, obj) {		
		var sel_date_str = data;
		var tElement = document.all(obj);
		tElement.value = data //리턴받은 스트링(날짜)를 설정
		return;
}


function sel_weather(str){

    document.weather_ifrm.location="/weather/weather.asp?data_str="+str
return;
}



function veiw_user(user_cd){
   var winopts = "left="+(screen.width-520)/2+",top="+(screen.height-650)/2+","
   var winopts = winopts + "width=520,height=650,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no";
   var popWindow = window.open('/UserRegist/user_update_frm.asp?user_cd='+user_cd,'attach_popt', winopts);
return;
}	


// 전화번호 체크
function telnoCheck(arg1, arg2, arg3){
	if(arg1 == "000" && (Trim(arg2) != "" || Trim(arg3) != "")){
		return false;
	}else if(arg1 != "000" && ( arg2.length <3 || arg3.length <4)){
		return false;
	}else{
		return true;
	}
}


// 숫자 콤마 붙이기 
function commaSplit(srcNumber) {
	var txtNumber = '' + srcNumber;
	var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])');
	var arrNumber = txtNumber.split('.');
	arrNumber[0] += '.';
	do {
		arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2');
	} while (rxSplit.test(arrNumber[0]));

	if (arrNumber.length > 1) {
		return arrNumber.join('');
	}else {
		return arrNumber[0].split('.')[0];
	}
}

// 콤마 없애기
function comma_replace(str){
	var returnstr = "";
	for(i=0; i<str.length; i++){
		if(str.charAt(i) == ","){
			returnstr = returnstr + "";	
		}else{
			returnstr = returnstr + str.charAt(i);
		}
	}
	
	return returnstr;
}

//////////////////// 모달 주소록 ////////////////////////////////////////////
// 작성일 : 2006. 10.25
///////////////////////////////////////////////////////////////////////////
function addrList_pop()
{
	var winopts = "dialogHeight: 500px; dialogWidth: 600px; center: yes; help: no; resizable: no; scroll: yes; status: no;";
	var sel_date_str = window.showModalDialog("addrList_frame.do","agument", winopts);
	
	if(sel_date_str=="OK")
		location.href="/suburb_host1.do";

return;			
}

//////////////////// 다음텍스트필드로 이동 ////////////////////////////////
// 작성일 : 2007. 04.20
///////////////////////////////////////////////////////////////////////////
function nextText(form_name,text1,text2,length){

  var text1_name = eval("document."+form_name+"."+text1);
  var text2_name = eval("document."+form_name+"."+text2);
  var text1_str = Trim(text1_name.value);

	if(text1_str.length == length){
		text2_name.focus();
	}
}

/**
 * x초후에 화면 바뀌는 스크립트
 **/
function scrollObject(main, width, height, direct, pause) {
  var self = this;
  this.main = main;
  this.block = new Array();
  this.height = height;
  this.width = width;
  this.direct = direct;
  this.pause = pause;
  this.offset = (direct == "up" || direct == "down") ? height : width;
  this.blockprev = 0;
  this.blockcurr = 1;
  this.motion = false;
  this.mouse = false;
  this.scroll = function() {
    if (!document.getElementById) return false;
    this.main = document.getElementById(this.main);
    while (this.main.firstChild) this.main.removeChild(this.main.firstChild);
    for (var x = 0; x < this.block.length; x++) {
      var table = document.createElement('table');
          table.style.position = "absolute";
          table.style.width = this.width + "px";
          table.style.height = this.height + "px";
          table.style.overflow = "hidden";
          table.cellPadding = table.cellSpacing = table.border = "0";
          table.style.left = table.style.top = "0px";
        if (x) {
          switch (direct) {
            case "up": table.style.top = this.height + "px"; break;
            case "down": table.style.top = -(this.height + 2) + "px"; break;
            case "left": table.style.left = this.width + "px"; break;
            case "right": table.style.left = -(this.width + 2) + "px"; break;
          }
        }
        var tbody = document.createElement('tbody');
          var tr = document.createElement('tr');
            var td = document.createElement('td');
                td.innerHTML = this.block[x];
              tr.appendChild(td);
            tbody.appendChild(tr);
          table.appendChild(tbody);
      this.main.appendChild(this.block[x] = table);
    }
    this.main.style.position = "relative";
    this.main.style.width = this.width + "px";
    this.main.style.height = this.height + "px";
    this.main.style.overflow = "hidden";
    if (this.block.length > 1) {
      this.main.onmouseover = function() { self.mouse = true; }
      this.main.onmouseout = function() { self.mouse = false; }
      setInterval(function() { self.scrollLoop(); }, this.pause);
    }
  }
  this.scrollLoop = function() {
    if (!this.motion && this.mouse) return false;
    if (this.offset == 1) {
      this.blockprev = this.blockcurr;
      this.blockcurr = (this.blockcurr + 1 >= this.block.length) ? 0 : this.blockcurr + 1;
      if (this.direct == "up" || this.direct == "down") {
        this.block[this.blockcurr].style.top = ((this.direct == "down") ? "-" : "") + this.height + "px";
        this.block[this.blockprev].style.top = "0px";
        this.offset = this.height;
      } else {
        this.block[this.blockcurr].style.left = ((this.direct == "right") ? "-" : "") + this.width + "px";
        this.block[this.blockprev].style.left = "0px";
        this.offset = this.width;
      } this.motion = false;
    } else {
      if (!this.motion) {
        this.motion = true; var x = -1;
        while (1) { if (Math.abs(this.offset) - Math.pow(2, ++x) <= Math.abs(this.offset) / 2) break; }
        this.offset = (this.direct == "up" || this.direct == "left") ? Math.pow(2, x) : -Math.pow(2, x);
      } else this.offset /= 2;
      if (this.direct == "up" || this.direct == "down") {
        this.block[this.blockcurr].style.top = this.offset + "px";
        this.block[this.blockprev].style.top = (((this.direct == "down") ? this.height : -(this.height + 2)) + this.offset) + "px";
      } else {
        this.block[this.blockcurr].style.left = this.offset + "px";
        this.block[this.blockprev].style.left = (((this.direct == "right") ? this.width : -(this.width + 2)) + this.offset) + "px";
      } setTimeout(function() { self.scrollLoop(); }, 30);
    }
  }
}


function getBytes(str) { 
	var nbytes = 0;
	
   	for (var i=0; i<str.length; i++){
   		var ch = str.charAt(i);
   		if(escape(ch).length > 4){
   			nbytes += 2;
   		}else if (ch == '\n'){
	      nbytes += 1;
   		}else if (ch == '<' || ch == '>'){
   			nbytes += 4;
   		}else{
   			nbytes += 1;
   		}
   	}
   	return nbytes;
} 

function checkStrLen(size,formName) { 
	
	var val = document.all[formName].value;
	//var val = document.getElementById(formName).value;
	len = getBytes(val);
	if(len > size){
		alert("최대 "+size+" 바이트까지 입력하실수 있습니다.\r\n초과된 " + (len - size) + "바이트는 자동으로 삭제됩니다."); 
		document.all[formName].value = newMsg(val, size, formName);
		
	}
} 

function checkStrLenClear(size,formName) { 
	
	var val = document.all[formName].value;
	len = getBytes(val);
	if(len > size){
		alert("최대 "+size+" 바이트까지 입력하실수 있습니다.\r\n다시 입력해 주시기 바랍니다."); 
		document.all[formName].value = "";
		
	}
} 
function checkStrLen2(size,obj) { 
	var val = obj.value;
	len = getBytes(val);
	if(len > size){
		alert("최대 "+size+" 바이트까지 입력하실수 있습니다.\r\n초과된 " + (len - size) + "바이트는 자동으로 삭제됩니다."); 
		obj.value = newMsg(val, size, "");
		
	}
} 

function newMsg(message, maximum, formName) { 
	var inc = 0; var nbytes = 0; var msg = ""; 
	var msglen = message.length; 
	for (var i=0; i<msglen; i++){
		var ch = message.charAt(i);
		var a = 0;
		if(escape(ch).length > 4){
			nbytes += 2;a=2;
		}else if (ch == '\n'){
			nbytes += 1;a=1;
		}else if (ch == '<' || ch == '>'){
			nbytes += 4;a=4;
		}else{
			nbytes += 1;a=1;
		}
		if(nbytes>maximum){
			return msg;
			break;
		}else{
			msg += ch;
		}
	}
}

function replaceAll(strTemp, strValue1, strValue2){
	//alert("1 "+strTemp);alert("2 "+strValue1);alert("3 "+strValue2);
 /* while(1){
    if(strTemp.indexOf(strValue1) != -1){
      strTemp = strTemp.replace(strValue1, strValue2);
    }else{
      break;
    }
  }
  return strTemp; */

  	//20160929 jm. 인터넷에서 찾아서 바꿈.
  return strTemp.split(strValue1).join(strValue2);
}

/*
날짜 스트링 반환...
*/
function setDateStr(year,month,day){
	month = parseInt(month,10)+1;
	if((month+"").length==1){
			month="0"+""+month;
	}
	if((day+"").length==1){
			day="0"+day;
	}
	date = year+""+month+""+day ; //오늘
	
	return date;
}
