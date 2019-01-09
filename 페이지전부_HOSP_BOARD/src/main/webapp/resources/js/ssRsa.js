var ssRsa = (function (){
	//aa = "function";

	//var r=[]; 

	//for(var k=0; k<aa.length; k++) r.push(aa.substring(k,k+1)); 

// return r; 


//alert("r----------------------"+r);
	/**
	 * RSA 클래스
	 * @param	String	key	RSA 키(public, private 구분 없이 할당 가능)
	 * @see					ASN.1 규약에 의한 sub 데이터 구조 정보는 rfc3447 문서를 참조할 것.
	 * 						rfc3447: http://tools.ietf.org/html/rfc3447#appendix-A
	 */
	function RSA ( key )
	{
		// 암호문 = pow ( 평문 , this.e ) % this.n
		this.n = null ;	// this.n = p * q
		this.e = null ;	// this.e = gcd ( e , l ) , l = lcm ( p - 1 , q - 1 ) 두 개의 소수값에 각각 1을 뺀 후의 최소공배수가 l 이다.

		// 평문 = pow ( 암호문 , this.d ) % this.n
		this.d = null ;

		// this.n 의 비트 길이 (암호화 가능한 문자열의 길이)
		this.l = null ;
		//alert("key----------------------"+key);
		if ( key ){
			this.setKey ( key ) ;
		}
	}
	RSA.prototype =
	{
		/**
		 * RSA 키 할당
		 * @param	String	key	RSA 키(public, private 구분 없이 할당 가능)
		 */
		setKey: function ( key )
		{
			
			//var n_key="-----BEGIN PUBLIC KEY-----MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMLnkDEeZWkF3f1PZtg71FTr2EskKdzkV8gNY6WRH2UwwLa9HWd9r8rt3mS4dhfuBcbgGEsHN/8lkhiKLSdH0L0CAwEAAQ==-----END PUBLIC KEY-----";
			var key = /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/.exec (key) ;
			//key[1] = "-----BEGIN PUBLIC KEY-----MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMLnkDEeZWkF3f1PZtg71FTr2EskKdzkV8gNY6WRH2UwwLa9HWd9r8rt3mS4dhfuBcbgGEsHN/8lkhiKLSdH0L0CAwEAAQ==-----END PUBLIC KEY-----" ; 
			//key[2] = "undefined" ; 
//document.write(" <br>key[1]   : "+key[1]+"<br>");
//document.write(" <br>key[2]   : "+key[2]+"<br>");
				asn1 = ASN1.decode ( new Stream ( Base64.decode ( key[1] ? key[1] : key[2] ) ) ) ;
//document.write(" <br><br><br><br>asn1   : "+asn1+"<br>");
//document.write(" key[2]   : "+key[2]+"<br>");
			if ( asn1.sub.length === 9 )		// 개인키
			{
				this.n = new BigInt ( asn1.sub[1].getHex () , 16 ) ;
				this.e = new BigInt ( asn1.sub[2].getHex () , 16 ) ;
				this.d = new BigInt ( asn1.sub[3].getHex () , 16 ) ;
			}
			else								// 공개키
			{
				this.n = new BigInt ( asn1.sub[1].sub[0].sub[0].getHex () , 16 ) ;
				this.e = new BigInt ( asn1.sub[1].sub[0].sub[1].getHex () , 16) ;
			}
			this.l = ( this.n.getBitLength () | 7 ) >> 3 ;
		} ,

		/**
		 * 평문을 암호화하여 반환한다.
		 * @param	String	text	평문
		 * @return	String			암호문
		 */
		encrypt: function ( text )
		{
			var byte = [] ;
			if ( text.length > this.l )
				return alert ( '암호화 가능한한 자리 수를 넘었습니다. RSA 암호화 비트 수를 더 크게 설정하세요.' ) ;

			// 문자열 표현에 1바이트 이상이 필요한 경우에는 문자열을 분리한다.
			for ( var i = text.length ; i > 0 ; i -- )
			{
				char = text.charCodeAt ( i - 1 ) ;
				if ( char < 128 )
					byte.unshift ( char ) ;
				else if ( ( char > 127 ) && ( char < 2048 ) )	// 192 ~ 223
					byte.unshift ( ( char & 63 ) | 128 ) , byte.unshift ( ( char >> 6 ) | 192 ) ;
				else	// 129 ~ 191 , 224 ~ 255
					byte.unshift ( ( char & 63 ) | 128 ) , byte.unshift ( ( ( char >> 6 ) & 63 ) | 128 ) , byte.unshift ( ( char >> 12 ) | 224 ) ;
			}
			byte.unshift ( 0 ) ;	// 구분자 추가

			// 암호화 가능한 문자열의 길이보다 평문이 짧은 경우(평문이 더 긴 경우에는 사실상 오류임), 남는 암호화 가능한 길이만큼 랜덤하게 추가한다.
			if ( byte.length - 2 < this.l )
				for ( i = this.l - byte.length - 2 ; i > 0 ; i -- )
					byte.unshift ( Math.ceil ( Math.random () * 254 ) ) ;

			var bigInt = new BigInt ( [0,2].concat ( byte ) ) ;	// 구분자(종결문자) 추가
			if ( bigInt == null )
				return alert ( '암호화에 실패하였습니다.' ) ;

			var encrypt = bigInt.powMod ( this.e , this.n ) ;	// 암호화, pow ( 평문 , this.e ) % this.n
			if ( encrypt == null )
				return alert ( '암호화에 실패하였습니다.' ) ;

			return Base64.encode ( encrypt.toString ( 16 ) ) ;	// Hex 변환 후, base64 인코딩하여 반환
		} ,

		/**
		 * 암호문을 복호화하여 반환한다.
		 * @param	String	text	암호문
		 * @return	String			평문
		 */
		decrypt: function ( text )
		{
			var bigInt = new BigInt ( Base64.decode ( text ) , 16 ) ,
				decrypt = bigInt.powMod ( this.d , this.n ) ,	// 복호화, pow ( 암호문 , this.d ) % this.n
				byte = decrypt.getByteArray () ,
				i = 0 ;

			// 두 개의 구분자가 나올때까지 데이터를 무시한다.
			if ( byte[i] == 0 )	// 구분자 확인
				i ++ ;
			if ( byte[i] != 2 || byte.length != this.l - 1 )
				return alert ( '복호화에 실패하였습니다.' ) ;
			while ( i < byte.length )
				if ( byte[++ i] == 0 )	// 구분자 확인
					break ;

			// 분리한 문자열을 다시 조합한다.
			var result = '' ;
			for ( i ++ ; i < byte.length ; i ++ )
			{
				var char = byte[i] & 255 ;
				if ( char < 128 )
					result += String.fromCharCode ( char ) ;
				else if ( char > 191 && char < 224 )
					result += String.fromCharCode ( ( ( char & 31 ) << 6 ) | ( byte[++ i] & 63 ) ) ;
				else	// 복호화한 경우, 음수(256 기준 보수 값)로 나온다.
					result += String.fromCharCode ( ( ( char & 15 ) << 12 ) | ( ( byte[++ i] & 63 ) << 6 ) | ( byte[++ i] & 63 ) ) ;
			}
			return result ;
		}
	}


	/**
	 * Base64 클래스
	 */
	var Base64 = {
		map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/' ,

		/**
		 * Hex 문자열(16진수)을 Base64 문자열로 인코딩하여 반환한다.
		 * @param	String	hex	Hex 문자열(16진수)
		 * @return	String		Base64 문자열
		 */
		encode: function ( hex )
		{
			if ( ( hex.length & 1 ) != 0 )
				hex = '0' + hex ;
			var i , char , result = '' ;
			for ( i = 0 ; i + 3 <= hex.length ; i += 3 )
			{
				char = parseInt ( hex.substring ( i , i + 3 ) , 16 ) ;
				result += this.map[char >> 6] + this.map[char & 63] ;
			}
			if ( hex.length - 1 == i )
			{
				char = parseInt ( hex.substring ( i , hex.length ) , 16 ) ;
				result += this.map[char << 2] ;
			}
			else if ( hex.length - 2 == i )
			{
				char = parseInt ( hex.substring ( i , hex.length ) , 16 ) ;
				result += this.map[char >> 2] + this.map[( char & 3 ) << 4] ;
			}
			while ( ( result.length & 3 ) > 0 )
				result += '=' ;

//alert("Base64  encode  result ::::" +result);
			return result ;
		} ,

		/**
		 * Base64 문자열을 Hex 문자열(16진수)로 디코딩하여 반환한다.
		 * @param	String	string	Base64 문자열
		 * @return	String			Hex 문자열(16진수)
		 */
		decode: function ( string )
		{
			//alert("decode string :::"+string);
			var char , remain , result = '' ;
	//		document.write("<br><br><br>Base64 decode string----------------------------" +string+"<br>");

			string	= string.replace ( /[= \f\n\r\t\u00A0\u2028\u2029]/g , '' ) ;	// 불필요한 문자열 제거
/*
			var r=[]; 

			for(var i=0; i<this.length; i++) r.push(this[i]); 

			 return r; 

*/

			//var r_str=[]; 
			//for(var k=0; k<string.length; k++) r_str.push(this[k]); 
			//n_string = string.toArray(); 

//document.write("<br><br><br>this.map----------------------------" +this.map+"<br>");

//document.write("<br><br><br>Base64 decode replace----------------------------" +string+"<br>");
//document.write("<br><br><br>Base64 decode replace----------------------------" +string[0]+"<br>");
			//var string[]=string;
			//alert("decode string :::"+string.length + "       string :"+string );

			//aa = "function";
			var new_str=[]; 
			for(var k=0; k<string.length; k++) new_str.push(string.substring(k,k+1)); 

			for ( var i = 0 , j = 0 ; i < string.length ; i ++ , j ++ )
			{
				//document.write("<br>i----------------------------" + i +": string[i] :"+string[i]+"<br>");
				//char = this.map.indexOf ( string[i] ) ;
				char = this.map.indexOf ( new_str[i] ) ;
				
				//char1 = this.map.indexOf ( string.substring(i,i+1) ) ;
				//document.write("i char----------------------------" + char +"--- "+char1+  "  "+"<br>");
				//document.write("j----------------------------" + j +"<br>");
				switch ( j )
				{
					case 0 :
						result += ( char >> 2 ).toString ( 16 ) ;
						remain = char & 3 ;
						break ;
					case 1 :
						result += ( ( remain << 2 ) | ( char >> 4 ) ).toString ( 16 ) ;
						remain = char & 15 ;
						break ;
					case 2 :
						result += ( remain ).toString ( 16 ) + ( char >> 2 ).toString ( 16 ) ;
						remain = char & 3 ;
						break ;
					case 3 :
						result += ( ( remain << 2 ) | ( char >> 4 ) ).toString ( 16 ) + ( char & 15 ).toString ( 16 ) ;
						j = -1 ;
						break ;
				}
			}
//document.write("<br>j----------------------------" +j+"<br>");
			if ( j == 1 )
				result += ( remain << 2 ).toString ( 16 ) ;
			if ( ( result.length & 1 ) != 0 )
				result = '0' + result ;

//document.write("<br><br><br>Base64 decode result----------------------------" +result+"<br>");
			return result ;
		}
	}


	/**
	 * ASN.1 Stream 클래스
	 * @param	Object	obj	Stream 객체 혹은 Hex 문자열(16진수)
	 */
	function Stream ( obj )
	{

		if ( typeof obj == 'string' )
		{
			this.pos = 0 ;
			this.data = [] ;
			for ( var i = 0 ; i < obj.length ; i += 2 )
				this.data.push ( parseInt ( obj.substr ( i , 2 ) , 16 ) ) ;

		}
		else
		{
			this.data	= obj.data ;
			this.pos	= obj.pos ;


		}
	}
	Stream.prototype =
	{
		/**
		 * 현재 데이터를 반환하고, 다음 위치로 이동한다.
		 */
		getData: function ()
		{
			return this.data[this.pos ++] ;
		} ,

		/**
		 * 태그의 길이 값을 계산하여 반환한다.
		 */
		getLength: function ()
		{
			var tag = this.getData () ,
				length = tag & 127 ;
			if ( length == tag )
				return length ;
			if ( length === 0 )
				return -1 ;
			for ( var i = 0 , tag = 0 ; i < length ; i ++ )
				tag = ( tag << 8 ) | this.getData () ;
			return tag ;
		} ,

		/**
		 * 서브 데이터로 생성할 내용이 존재하는지 확인한다.
		 * @param	Integer	tag		태그
		 * @param	Integer	length	길이
		 */
		has: function ( tag , length )
		{
			if ( tag & 32 )
				return true ;
			if ( tag < 3 || tag > 4 )
				return false ;
			var p = new Stream ( this ) ;
			if ( tag == 3 )
				p.getData() ;
			var sub = p.getData () ;
			if ( ( sub >> 6 ) & 1 )
				return false ;
			var l = p.getLength () ;
			return ( ( p.pos - this.pos ) + l == length ) ;
		}
	}


	/**
	 * ASN.1 클래스
	 * @param	Array	sub		서브 데이터
	 * @param	Stream	stream	데이터 스트림
	 * @param	Integer	start	시작 위치
	 * @param	Integer	end		종료 위치
	 */
	function ASN1 ( sub , stream , start , end )
	{
		if ( sub.length != 0 )
			this.sub = sub ;
		this.stream = stream ;
		this.stream.start = start ;
		this.stream.end = end ;
	}
	ASN1.prototype =
	{
		/**
		 * Hex 문자열(16진수)로 변환하여 반환한다.
		 */
		getHex: function ()
		{
			var end = this.stream.pos + this.stream.start + Math.abs ( this.stream.end ) ,
				result = '' , h , i ;
			for ( i = this.stream.pos ; i < end ; i ++ )
			{
				h = this.stream.data[i] ;
//document.write("<br><br>h  : "+h);
				result += Convert.decimalToHex ( ( h >> 4 ) & 15 ) + Convert.decimalToHex ( h & 15 ) ;
//document.write("<br><br>result  : "+result);

			}
			return result.substr ( this.stream.start * 2 , this.stream.end * 2 ) ;
		}
	}

	/**
	 * ASN.1 규격을 디코딩하여 ASN.1 객체로 반환한다.
	 * @param	Mixed	stream	데이터 스트림 혹은 Hex 문자열(ASN.1 규격)
	 */
	ASN1.decode = function ( stream )
	{
//document.write("<br><br>stream  : "+stream);
		var clone = new Stream ( stream ) ,
			tag = stream.getData () ,
			end = stream.getLength () ,
			start = stream.pos - clone.pos ,
			sub = [] ;
//
//document.write("<br>tag  : "+tag);

//alert("ASN1.decode tag--!!!" + tag);
		
		if ( ! stream.has ( tag , end ) ){
//alert("111----stream!!!" + stream.pos  +"                "+end);

			stream.pos += end ;

		}else
		{
//alert("222----stream!!!  tag: " + tag + "      pos: "+ stream.pos  +"               end: "+end);
			var temp = stream.pos + end ;
			if ( tag == 3 )
				stream.getData () ;

//alert("stream.pos!!! temp   " + stream.pos +"         "+ temp );

			while ( stream.pos < temp ){
				//alert("----stream!!!"+stream);
				sub.push ( ASN1.decode ( stream ) ) ;
			}
		}
		//alert("333----stream!!!");
		return new ASN1 ( sub , clone , start , end ) ;
	} ;


	/**
	 * BigInt 생성자 변수
	 */
	var BigInt = (function (){

		/**
		 * BigInt 클래스
		 * @param	Mixed	value	값
		 * @param	Integer	base	진수 ( 2제곱만 가능하다. 예) 2, 4, 8, 16, 24 ... 256 )
		 */
		function BigInt ( value , base )
		{

			if ( value == null )
				return ;
			if ( base == null )
				base = 256 ;
		 
			var new_str=[]; 
			aaa = false;
			
			if ( typeof value == 'number' )
				value = value.toString ( base == 16 ? base : 10 ) ;
			//else{
//alert("value:"+value);
//				aaa = true;
				//for(var k=0; k<value.toString().length; k++) new_str.push(value.toString().substring(k,k+1)); 
			//}
			this.total = 0 ;
			this.start = 0 ;

			var unit = ( base >> 1 ).toString( 2 ).length , shift = 0 , t ;
			//value[] = value;


			

			for ( i = value.length - 1 ; i > -1 ; i -- )
			{
//document.write("<br>BigInt  value : "+ value);

//document.write("<br>BigInt  value["+i+"] : "+ value[i] +"---"+ value.toString().substring(i+1,i));
				//aaa[] = value[i];
				
				//aaa = value.toString().substring(i+1,i);
//document.write("<br>BigInt  value["+i+"] : "+ value[i] +"---"+ value.toString().substring(i+1,i));
//document.write("<br>BigInt  aaa  : "+aaa);
//document.write("<br>BigInt  value["+i+"] : "+ value[i] +"---"+ value.toString().substring(i+1,i));

				
				//if(aaa)
				//	t = base == 16 ? Convert.hexToDecimal (new_str[i]) :new_str[i] & 255 ;
				//else
					t = base == 16 ? Convert.hexToDecimal (value[i]) :value[i] & 255 ;


				if ( shift == 0 )
					this[this.total ++] = t ;
				else if ( shift + unit > BIT )
				{
					this[this.total ++] = ( t >> ( BIT - shift ) ) ;
					this[this.total - 2] += ( t & ( ( 1 << ( BIT - shift ) ) - 1 ) ) << shift ;
				}
				else
					this[this.total - 1] += t << shift ;
				shift += unit ;
				if ( shift >= BIT )
					shift -= BIT ;
			}
			this.reset () ;
		}
		BigInt.prototype =
		{
			/**
			 * 현재 값에서 target 을 뺀 후, 결과를 반환한다.
			 * @param	BigInt	target	뺄 값
			 * @return	BigInt			남은 값 ( this - target ) ;
			 * @see		현재 값에 영향을 주지 않는다.
			 */
			minus: function ( target )
			{
				var result = new BigInt ,
					min = Math.min ( target.total , this.total ) ;
				for ( var i = t = 0 ; i < min ; i ++ , t >>= BIT )
					result[i] = ( t += this[i] - target[i] ) & BITMASK ;
				if ( target.total < this.total )
				{
					for ( t -= target.start ; i < this.total ; i ++ , t >>= BIT )
						result[i] = ( t += this[i] ) & BITMASK ;
					t += this.start ;
				}
				else
				{
					for ( t += this.start ; i < target.total ; i ++ , t >>= BIT )
						result[i] = ( t -= target[i] ) & BITMASK ;
					t -= target.start ;
				}
				if ( t < -1 )
					result[i ++] = BITMAX + t ;
				else if ( t > 0 )
					result[i ++] = t ;
				result.reset ( i , t < 0 ? -1 : 0 ) ;
				return result ;
			} ,

			/**
			 * 현재 값과 인수로 전달된 값을 비교하여 차이 값을 반환한다.
			 * @param	BigInt	target	비교 값
			 * @return	Integer			차이 값
			 * @see		데이터 구조에서 모든 값을 합하여 그 차이값을 반환하지 않는다.
			 * 			그러므로, 두 수의 값이 다른지 비교하기 위한 용도로 사용한다.
			 */
			diff: function ( target )
			{
				var diff = this.start - target.start ;
				if ( diff != 0 )
					return diff ;
				diff = this.total - target.total ;
				if ( diff != 0 )
					return this.start < 0 ? - diff : diff ;
				for ( var i = this.total - 1 ; i > -1 ; i -- )
					if ( ( diff = this[i] - target[i] ) != 0 )
						return diff ;
				return 0 ;
			} ,

			/**
			 * 데이터 구조를 재 정의하고 정리한다.
			 * @param	Integer	total	배열 총 수
			 * @param	Integer	start	시작 위치
			 */
			reset: function ( total , start )
			{
				if ( total != undefined )
					this.total = total ;
				if ( start != undefined )
					this.start = start ;
				if ( this.total <= 0 )
					return ;
				var start = this.start & BITMASK ;
				while ( this[this.total - 1] == start )
					this.total -- ;
			} ,

			/**
			 * 데이터 구조의 각 배열을 덮어쓴다.
			 * @param	BigInt	value	덮어 쓸 값
			 */
			overwrite: function ( value )
			{
				for ( var i = 0 ; i < value.total ; i ++ )
					this[i] = value[i] ;
				this.reset ( value.total , value.start ) ;
			} ,

			/**
			 * 데이터 구조의 원소를 move 만큼 좌측(증가)으로 이동하고, 그 결과를 result 에 할당한다.
			 * @param	Integer	move	이동 수
			 * @param	BigInt	result	결과 값
			 * @see		result 의 기존 데이터를 초기화하지 않는다.
			 */
			moveLeftTo: function ( move , result )
			{
				for ( var i = 0 ; i < move ; i ++ )
					result[i] = 0 ;
				for ( i = 0 ; i < this.total ; i ++ )
					result[i + move] = this[i] ;
				result.reset ( this.total + move , this.start ) ;
			} ,

			/**
			 * 데이터 구조의 원소를 move 만큼 우측(증가)으로 이동하고, 그 결과를 result 에 할당한다.
			 * @param	Integer	move	이동 수
			 * @param	BigInt	result	결과 값
			 * @see		result 의 기존 데이터를 초기화하지 않는다.
			 */
			moveRightTo: function ( move , result )
			{
				for ( var i = move ; i < this.total ; i ++ )
					result[i - move] = this[i] ;
				result.reset ( this.total > move ? this.total - move : 0 , this.start ) ;
			} ,

			/**
			 * 현재 값에 왼쪽으로 비트 시프트 연산을 수행하고, 그 결과를 result 에 할당한다.
			 * @param	Integer	shift	이동 수
			 * @param	BigInt	result	결과 값
			 * @see		result 의 기존 데이터를 초기화하지 않는다.
			 */
			shiftLeftTo: function ( shift , result )
			{
				var pos = Math.floor ( shift / BIT ) ,
					split = shift & BIT ,
					mod = BIT - split ,
					bit = ( 1 << mod ) - 1 ,
					remain = ( this.start << split ) & BITMASK ;
				for ( var i = this.total - 1 ; i > -1 ; i -- )
				{
					result[i + pos + 1] = ( this[i] >> mod ) + remain ;
					remain = ( this[i] & bit ) << split ;
				}
				result[pos] = remain ;
				for ( i = pos - 1 ; i > -1 ; i -- )	// 자리수 채우기
					result[i] = 0 ;
				result.reset ( this.total + pos + 1 , this.start ) ;
			} ,

			/**
			 * 현재 값에 오른쪽으로 비트 시프트 연산을 수행하고, 그 결과를 result 에 할당한다.
			 * @param	Integer	shift	이동 수
			 * @param	BigInt	result	결과 값
			 * @see		result 의 기존 데이터를 초기화하지 않는다.
			 */
			shiftRightTo: function ( shift , result )
			{
				var pos = Math.floor ( shift / BIT ) ;
				if ( pos >= this.total )
					return result.total = 0 ;
				var split = shift & BIT ,
					mod = BIT - split ,
					bit = ( 1 << split ) - 1 ;
				result[0] = this[pos] >> split ;
				for ( var i = pos + 1 ; i < this.total ; i ++ )
				{
					result[i - pos - 1] += ( this[i] & bit ) << mod ;
					result[i - pos] = this[i] >> split ;
				}
				if ( split > 0 )
					result[this.total - pos - 1] += ( this.start & bit ) << mod ;
				result.reset ( this.total - pos , this.start ) ;
			} ,

			/**
			 * 현재 값을 인수로 전달된 진수 문자열로 변환하여 반환한다.
			 * @param	Integer	base	진수 ( 2제곱만 가능하다. 예) 2, 4, 8, 16, 24 ... 256 )
			 * @return	String
			 */
			toString: function ( base )
			{
				if ( this.start < 0 )
					return '-0' ;

				var bit = ( base - 1 ).toString ( 2 ) ;
				if ( bit.indexOf ( '0' ) != -1 )
					return alert ( base + '진수 변환을 할 수 없습니다.' ) ;
				bit = bit.length ;

				var unit = ( 1 << bit ) - 1 ,
					block = BIT - ( this.total * BIT ) & ( bit - 1 ) ,
					i = this.total , result = '' , byte , add = false  ;
				if ( i -- > 0 )
				{
					byte = this[i] >> block ;
					if ( block < BIT && byte > 0 )
						add = true , result = byte.toString ( 16 ) ;
					while ( i > -1 )
					{
						if ( block < bit )
							byte = ( this[i] & ( ( 1 << block ) - 1 ) ) << ( bit - block ) ,
							byte += this[--i] >> ( block += BIT - bit ) ;
						else
						{
							byte = ( this[i] >> ( block -= bit ) ) & unit ;
							if ( block <= 0 )
								block += BIT , i -- ;
						}
						if ( add || ( add = byte > 0 ) )
							result += byte.toString ( 16 ) ;
					}
				}
				return add ? result : '0' ;
			} ,

			/**
			 * 전체 비트 수를 계산하여 반환한다.
			 * @return	Integer	전체 비트 수
			 */
			getBitLength: function ()
			{
				if ( this.total <= 0 )
					return 0 ;
				return BIT * ( this.total - 1 ) + ( this[this.total - 1] ^ ( this.start & BITMASK ) ).toString ( 2 ).length ;
			} ,

			/**
			 * 현재 값을 256진수로 변환하여 배열로 반환한다.
			 * @return	Array	현재 값(256진수)
			 */
			getByteArray: function ()
			{
				var block = BIT - ( ( this.total * BIT ) & 7 ) ,
					byte , total = this.total ,
					result = [] , i = 0 ;
				result[0] = this.start ;
				if ( total -- > 0 )
				{
					byte = this[total] >> block ;
					if ( block < BIT && byte != ( this.start & BITMASK ) >> block )
						result[i ++] = byte | ( this.start << ( BIT - block ) ) ;
					while ( total > -1 )
					{
						if ( block < 8 )
						{
							byte = ( this[total] & ( ( 1 << block ) - 1 ) ) << ( 8 - block ) ;
							byte += this[-- total] >> ( block += BIT - 8 ) ;
						}
						else
						{
							byte = ( this[total] >> ( block -= 8 ) ) & HEX['8'] ;
							if ( block <= 0 )
								block += BIT , total -- ;
						}
						if ( ( byte & 128 ) != 0 )
							byte += -256 ;
						if ( i == 0 && ( this.start & 128 ) != ( byte & 128 ) )
							i ++ ;
						if ( i > 0 || byte != this.start )
							result[i ++] = byte ;
					}
				}
				return result ;
			} ,

			/**
			 * 멀티 비트를 계산하여 반환한다.
			 * @param	Integer	i		현재 객체 순번
			 * @param	Integer	value	기준 값
			 * @param	BigInt	target	할당 객체
			 * @param	Integer	j		할당 객체 순번
			 * @param	Integer	result	대체 값
			 * @param	Integer	repeat	반복 수
			 */
			getMultiBit: function ( i , value , target , j , result , repeat )
			{
				var bit = BIT / 2 ,
					mask = value & HEX[bit] ,
					quar = value >> bit ;
				for ( var l , q , m ; repeat > 0 ; repeat -- )
				{
					l = this[i] & HEX[bit] ;
					q = this[i ++] >> bit ;
					m = quar * l + q * mask ;
					l = mask * l
						+ ( ( m & HEX[bit] ) << bit )
						+ target[j]
						+ ( BIT == 30 ? result & HEX[BIT] : result ) ;
					result = ( l >>> BIT )
						+ ( m >>> bit )
						+ ( quar * q )
						+ ( BIT == 30 ? result >>> BIT : 0 ) ;
					target[j ++] = l & HEX[BIT] ;
				}
				return result ;
			} ,

			/**
			 * 현재 값을 인수 n 으로 나눈 나머지 값을 remain 에 할당한다.
			 * @param	BigInt	n		나눌 값 ( RSA 암/복호화 공통키 n 임 )
			 * @param	BigInt	remain	나머지 값
			 * @see		remain 의 기존 데이터를 초기화하지 않는다.
			 */
			modTo: function ( n , remain )
			{
				if ( n.total <= 0 )
					return ;
				if ( this.total < n.total && remain != null )
					return remain.overwrite ( this ) ;

				var t = new BigInt ,
					bit = BIT - n[n.total - 1].toString ( 2 ).length ;
				if ( bit > 0 )
				{
					n.shiftLeftTo ( bit , t ) ;
					this.shiftLeftTo ( bit , remain ) ;
				}
				else
				{
					t.overwrite ( n ) ;
					remain.overwrite ( this ) ;
				}

				var total = t.total , last = t[total - 1] ;
				if ( last == 0 )
					return ;

				var key = last * CAL + ( total > 1 ? t[total - 2] >> UNIT : 0 ) ,
					j = remain.total ,
					i = j - total ,
					m = new BigInt ;
				t.moveLeftTo ( i , m ) ;
				if ( remain.diff ( m ) > -1 )
				{
					remain[remain.total ++ ] = 1 ;
					remain = remain.minus ( m ) ;
				}

				ONE.moveLeftTo ( total , m ) ;
				t = m.minus ( t ) ;
				while ( t.total < total )
					t[t.total ++] = 0 ;

				var v , c = CAL / key , p = POW / key , u = 1 << UNIT ;
				for ( i -- , j -- ; i > -1 ; i -- , j -- )
				{
					v = remain[j] == last
						? BITMASK
						: Math.floor ( remain[j] * p + ( remain[j - 1] + u ) * c ) ;
					if ( v <= ( remain[j] += t.getMultiBit ( 0 , v , remain , i , 0 , total ) ) )
						continue ;
					t.moveLeftTo ( i , m ) ;
					remain = remain.minus ( m ) ;
					for ( ; v >= remain[j] ; v -- )
						remain = remain.minus ( m ) ;
				}

				remain.reset ( total ) ;
				if ( bit > 0 )
					remain.shiftRightTo ( bit , remain ) ;
				if ( this.start < 0 )
					remain = ZERO.minus ( remain ) ;
			} ,

			/**
			 * 현재 값을 e 로 제곱하고 n 으로 나눈 나머지 값을 반환한다.
			 * @param	BigInt	e	제곱 값
			 * @param	BigInt	n	나눌 값 ( RSA 암/복호화 공통키 n 임 )
			 * @see		pow ( 문자열 , e ) % this.n
			 */
			powMod: function ( e , n )
			{
				var bit = e.getBitLength () , lem = 6 ;
				if ( bit < 18 )
					lem = 1 ;
				else if ( bit < 48 )
					lem = 3 ;
				else if ( bit < 144 )
					lem = 4 ;
				else if ( bit < 768 )
					lem = 5 ;

				var value = [] , lm = lem - 1 , lk = ( 1 << lem ) - 1 ,
					t = new BigInt , i ;
				this.moveLeftTo ( n.total , t ) ;
				t.modTo ( n , t ) ;
				n.modular () ;
				value[1] = this.start < 0 && t.diff ( ZERO ) > 0 ? n.minus ( t ) : t ;

				if ( lem > 1 )
				{
					t = new BigInt ;
					n.squareTo ( value[1] , t ) ;
					for ( i = 3 ; i <= lk ; i += 2 )
						n.multiplyTo ( t , value[i - 2] , value[i] = new BigInt ) ;
				}

				var r1 = new BigInt ( 1 ) , r2 = new BigInt ,
					j = e.total - 1 , q , k ;
				for ( i = e[j].toString ( 2 ).length - 1 ; j >= 0 ; )
				{
					q = i >= lm
						? ( e[j] >> ( i - lm ) ) & lk
						: ( ( e[j] & ( ( 1 << ( i + 1 ) ) - 1 ) ) << ( lm - i ) ) + ( j > 0 ? e[j - 1] >> ( BIT + i - lm ) : 0 ) ;
					for ( k = lem ; ( q & 1 ) == 0 ; k -- )
						q >>= 1 ;
					if ( ( i -= k ) < 0 )
						i += BIT , j -- ;
					if ( r1.total == 1 )
						r1.overwrite ( value[q] ) ;
					else
					{
						for ( ; k > 1 ; k -= 2 )
							n.squareTo ( r1 , r2 ) , n.squareTo ( r2 , r1 ) ;
						if ( k > 0 )
							n.squareTo ( r1 , r2 ) ;
						else
							r1 = [r2 , r2 = r1][0] ;
						n.multiplyTo ( r2 , value[q] , r1 ) ;
					}
					while ( j > -1 && ( e[j] & ( 1 << i ) ) == 0 )
					{
						n.squareTo ( r1 , r2 ) ;
						r1 = [r2 , r2 = r1][0] ;
						if ( -- i < 0 )
							i = BIT - 1 , j -- ;
					}
				}
				n.reduce ( r1 ) ;
				return r1 ;
			} ,

			/**
			 * 몽고메리(Montgomery) 모듈러 초기화
			 */
			modular: function ()
			{
				if ( this.point )
					return ;
				if ( this.total < 1 || ( this[0] & 1 ) == 0 )
					this.point = 0 ;
				else
				{
					var x = this[0] & 3 ;
					for ( var i = 4 ; i < 17 ; i = i * 2 )
						x = x * ( 2 - ( this[0] & HEX[i] ) * x ) & HEX[i] ;
					x = x * ( 2 - this[0] * x & BITMASK ) & BITMASK ;
					this.point = x > 0 ? BITMAX - x : -x ;
				}
				this.split = this.point & HEX['15'] ;
				this.mod = this.point >> 15 ;
				this.mask = ( 1 << ( BIT - 15 ) ) -1 ;
				this.double = 2 * this.total ;
			} ,

			/**
			 * 모듈러 곱 연산 결과를 result 에 할당한다.
			 * @param	BitInt	source	곱할 값
			 * @param	BitInt	target	곱할 값
			 * @param	BitInt	result	결과 값
			 */
			multiplyTo: function ( source , target , result )
			{
				for ( var i = 0 ; i < source.total ; i ++ )
					result[i] = 0 ;
				for ( i = 0 ; i < target.total ; i ++ )
					result[i + source.total] = source.getMultiBit ( 0 , target[i] , result , i , 0 , source.total ) ;
				result.reset ( source.total + target.total , 0 ) ;
				this.reduce ( source.start == target.start ? result : ZERO.minus ( result ) ) ;
			} ,

			/**
			 * 모듈러 제곱근(루트) 연산 결과를 result 에할 할당한다.
			 * @param	BitInt	target	제곱근
			 * @param	BitInt	result	결과 값
			 */
			squareTo: function ( target , result )
			{
				result.total = target.total * 2 ;
				for ( i = result.total - 1 ; i > -1 ; i -- )
					result[i] = 0 ;
				var total = target.total - 1 ;
				for ( i = 0 ; i < total ; i ++ )
				{
					var c = target.getMultiBit ( i , target[i] , result , 2 * i , 0 , 1 ) ;
					if ( ( result[i + target.total] += target.getMultiBit ( i + 1 , 2 * target[i] , result , 2 * i + 1 , c , target.total - i - 1 ) ) > BITMASK )
					{
						result[i + target.total] -= BITMAX ;
						result[i + target.total + 1] = 1 ;
					}
				}
				if ( result.total > 0 )
					result[result.total - 1] += target.getMultiBit ( i , target[i] , result , 2 * i , 0 , 1 ) ;
				result.reset ( result.total , 0 ) ;
				this.reduce ( result ) ;
			} ,

			/**
			 * 모듈려 연산을 수행한다.
			 * @param	BigInt	target	연산 대상 값
			 */
			reduce: function ( target )
			{
				while ( target.total <= this.double )
					target[target.total ++] = 0 ;
				for ( var i = 0 , j , v ; i < this.total ; i ++ )
				{
					j = target[i] & HEX['15'] ;
					v = j * this.split + ( ( j * this.mod + ( target[i] >> 15 ) * this.split & this.mask ) << 15 ) & BITMASK ;
					j = i + this.total ;
					target[j] += this.getMultiBit ( 0 , v , target , i , 0 , this.total ) ;
					while ( target[j] > BITMASK )
						target[j] -= BITMAX , target[++ j] ++ ;
				}
				target.reset () ;
				target.moveRightTo ( this.total , target ) ;
				if ( target.diff ( this ) > -1 )
					target = target.minus ( this ) ;
			}
		}

		/**
		 * 비트 마스크 연산 수행을 위한 프리셋
		 */
		var HEX =
		{
			'4': 0xf ,
			'8': 0xff ,
			'14': 0x3fff ,
			'15': 0x7fff ,
			'16': 0xffff ,
			'26': 0x3ffffff ,
			'28': 0xfffffff ,
			'30': 0x3fffffff ,
			'32': 0xffffffff
		} ;

		/**
		 * 브라우저에 따른 비트 수 제한과 멀티비트 추출 함수 교체
		 */
		var BIT = 28 ,
			FAR = ( ( 0xdeadbeefcafe & HEX['28'] ) == 0xefcafe ) ;
		
		var trident = navigator.userAgent.match(/Trident\/(\d)/i);
		/*
		IE 8 = trident/4.0
		IE 9 = trident/5.0
		IE 10 = trident/6.0 
		*/
		var ieVersion = 11;
		if(trident != null && trident[1]  != null  ){
			
			if(trident[1] == 6 ) ieVersion = 10;
		
				
		}

//alert("navigator.appName : "+navigator.appName);
//alert("FAR : "+FAR);

		if ( FAR && navigator.appName == 'Microsoft Internet Explorer'   ){
			document.write("<br>  Explorer" );
			BIT = 30 ;
			
		}
		else if ( FAR && navigator.appName != 'Netscape' )
		{
			document.write("<br>  Netscape" );
			BIT = 26 ;
			BigInt.prototype.getMultiBit = function ( i , value , target , j , result , repeat )
			{
				for ( var v ; repeat > 0 ; repeat -- )
				{
					v = value * this[i ++] + target[j] + result ;
					result = Math.floor ( v / 0x4000000 ) ;
					target[j ++] = v & HEX[BIT] ;
				}
				return result ;
			}
		}
//document.write("<br>  BITBITBITBITBITBIT "+BIT );
//		if(ieVersion == 10 ){
//				alert("ieVersion == 10");
//				BIT = 26 ;
				
//			}
//		alert("BIT !!! " + BIT);

		/**
		 * 상수 선언
		 */
		var BITMAX = 1 << BIT ,
			BITMASK = ( BITMAX ) - 1 ,
			UNIT = 2 * BIT - 52 ,		// 28bit = 100, 30bit = 1000, 26bit = 0
			POW = Math.pow ( 2 , 52 ) ,
			CAL = 1 << 52 - BIT ,
			ZERO = new BigInt ( 0 ) ,
			ONE = new BigInt ( 1 ) ;
//document.write("<br>  BITBITBITBITBITBIT "+BIT + "   BigInt : " +BigInt);
		return BigInt ;

	})() ;


	/**
	 * 데이터 변환용 클래스
	 */
	var Convert = {
		preset: {'0':'0', '1':'1', '2':'2', '3':'3', '4':'4', '5':'5', '6':'6', '7':'7', '8':'8', '9':'9', '10':'A', '11':'B', '12':'C', '13':'D', '14':'E', '15':'F', 'A':10, 'B':11, 'C':12, 'D':13, 'E':14, 'F':15} ,

		hexToDecimal: function ( hex )
		{
//document.write("<br>  Convert hex "+hex );
//alert(" Convert hex "+hex );
			return parseInt ( this.preset[hex.toUpperCase ()] , 10 ) ;
		} ,

		decimalToHex: function ( decimal )
		{
			return this.preset[decimal] ;
		}
	}

	return RSA ;

})() ;
/*
  
  function getInternetExplorerVersion() {   
	  var rv = -1; // Return value assumes failure.   
	  if (navigator.appName == 'Microsoft Internet Explorer') {       
		  var ua = navigator.userAgent;        
		  var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");        
		  if (re.exec(ua) != null)            
			rv = parseFloat(RegExp.$1);    
		}    
	return rv;
	}
		
		
	function checkVersion() 
	{   
		var msg = "You're not using Windows Internet Explorer.";   
		var ver = getInternetExplorerVersion();    
		if (ver > -1) {        
			if (ver >= 8.0)           
		msg = "You're using a recent copy of Windows Internet Explorer."        
				else            msg = "You should upgrade your copy of Windows Internet Explorer.";    
		}    
		
		alert(msg);
	}

	*/


