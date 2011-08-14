/************************************************************
 * jex_web.js
 * 
 * 문서의 input tag에 jex_web.js에서 정의한 Attribute를 포함시킬경우
 * 해당 form에 CSS적용(notnull='true' 로 지정된 폼) 및 Form이 Submit 될때 validation을 체크한다.
 * 
 * ex) <input type='text' id='text_id' name='text_id' Attribute='value'/>
 * 
 * Attribute='value' 목록=====================================
 * - autocheck='true'			: form 태그에만 사용하며, submit시 자동으로 form을 체크하고자 할때 해당 Attribute를 셋팅한다.
 *								  수동으로 체크할때는 formCheck(formId) 함수를 호출한다. formCheck함수의 인자는 체크할 form의 id
 * - css='true'					: form 태그에만 사용하며, true 로 되어있을 경우, notnull='true' Attribute 가 있는 폼에 CSS 를 적용한다.
 * - cssClass='css 클래스명'		: form 태그에만 사용하며 css='true' 로 지정했을경우 적용할 ccs 클래스 명을 입력한다. 						
 * - fieldName='항목명'			: validation 체크를 하고자 할경우 필수 입력이며 항목명을 셋팅한다.
 * - notnull='true'				: 해당항목의 값이 null 이면 오류
 * - minLength='숫자형식의길이'	: 해당항목 입력값의 길이가 value 보다 작으면 오류
 * - format='date'				: 8자리 형식의 날짜포맷- yyyy:mm:dd 등의 yyyy,mm,dd 가 포함되어 있는 형식이면 모두 허용함
 *                                정상적인 날짜가 아닐경우 오류
 * - format='submit'            : form 하위 엘리먼트에 이 Attribute 를 지정하면 <input type='submit'>을 클릭한것과 동일한 이벤트처리가된다.
 * - format='number'            : +/-를 포함한 숫자만 입력가능(submit시 체크)
 * - format='number2'           : input에 (0~9)숫자만 입력할수있다.(입력시 체크해서 막음)
 * - format='engNum'            : 숫자와 영문자만 입력가능
 * - format='resRegNo1'         : 주민등록번호 앞자리 검사. 자릿수(6자리)와 숫자여부만 검사한다.
 * - format='resRegNo2'         : 주민등록번호 뒷자리 검사. 자릿수(7자리)와 숫자여부만 검사한다.
 * - format='resRegNo'          : 주민등록번호 검사. 자릿수(13자리)와 숫자여부만 검사한다.
 * - format='currency'          : ','와 '.'을 포함한 금액형식인지 검사한다.(.이 두개이거나 숫자가 아닌값이 있거나 하면 오류)
 * - format='accountNo'         : 계좌번호검사. 숫자입력만 허용함
 * - format='accountNo2'		: 계좌번호검사. 숫자와 하이픈(-) 입력만 허용함
 * - format='bizNo'				: 사업자번호검증
 *                                
 ************************************************************/

/**
 * 문자열길이를 byte 기준으로 반환함
 */
String.prototype.byteLength = function(){
	var val = this;

	var escapeVal = escape(val);

	var startIdx = 0;
	var endIdx = 0;
	var oneByteVal = "";
	var twoByteCnt = 0;

	while( ( endIdx = escapeVal.indexOf("%u", startIdx) ) > -1 )
	{
		oneByteVal += escapeVal.substring(startIdx, endIdx) ; 
		startIdx = endIdx + 6;
		twoByteCnt++;
	}

	oneByteVal += escapeVal.substring(startIdx);
	oneByteVal = unescape(oneByteVal);

	return twoByteCnt*2 + oneByteVal.length;
};

var jex;
var _jex_debugMod = true;
if(!jex) jex={};
if(!jex.web) jex.web={};
jex.web.testMode = false;//업무 서버에 올릴땐 false 로 지정해야함
jex.web.isSecurityModule = false;//보안모듈 사용여부:보안모듈에서 사용하는 서브밋 함수가 있을경우 true하고 해당 부분을 수정해야함
jex.web.format = {};
jex.web.form = {errorYn : false //validation 오류여부
				,submitYn:false}; //submit 진행중 여부
jex.web.form.event = {};
jex.web.form.check={};

jQuery.ajaxSetup({
    'beforeSend': function(xhr) {xhr.setRequestHeader("charset", "utf-8");}
});

/**
 * 필수입력항목의 null 체크 
 * Attribute : notnull='true'
 */
jex.web.form.check.isNotnull = function(selector){
	if( jex.web.null2void($(selector).attr("notnull")).toLowerCase()=='true')
	{
		//checkbox
		if( $(selector).attr("type")=="checkbox" )
		{
			var _checkboxGroup = $(":checkbox[name*='"+$(selector).attr("name")+"']:checked");

			if( _checkboxGroup.length < 1 ){
				jex.web.alert("["+ $(selector).attr("fieldName") +"] 항목은 한개 이상 선택해주세요.");
				jex.web.form.errorYn=true;
				return false;
			}
		}
		//radio
		else if( $(selector).attr("type")=="radio" )
		{
			if($(":radio[name*='"+$(selector).attr("name")+"']:checked").length < 1){  
				jex.web.alert("["+ $(selector).attr("fieldName") +"] 항목은 필수 선택 사항입니다.");
				jex.web.form.errorYn=true;
				return false;  
			}
		}
		//selectbox
		else if( $(selector).attr("nodeName")=="SELECT" )
		{
			if(!$(selector).find("option:selected").val()){
				jex.web.alert("["+$(selector).attr("fieldName")+"] 항목을 선택해주세요.");
				jex.web.form.errorYn=true;
				return false;
			}
		}
		else
		{
			if(!$(selector).val()){
				jex.web.alert("["+$(selector).attr("fieldName")+"] 항목은 필수 입력입니다.");
				jex.web.form.errorYn=true;
				return false;
			}
		}
	}
	return true;
};


/**
 * 최소길이체크
 * Attribute : minLength='길이'
 */
jex.web.form.check.isMinLength = function(selector){
	if( $(selector).attr("minLength")==undefined ) return true;
//	if( $(selector).attr("minLength")=="" ) return true;
	var minLength = parseInt($(selector).attr("minLength"));
	if( isNaN(minLength) ) return true;
	if( $(selector).val().length < minLength ){
		alert("["+$(selector).attr("fieldName")+"] 항목은 "+ minLength + "자 이상 입력해주세요.");
		jex.web.form.errorYn=true;
		return false;
	}
	return true;
};

/**
 * 최대길이체크
 * maxlength가 default값이 아닐경우 byte를 기준으로 체크한다.
 */
jex.web.form.check.isMaxLength = function(selector){
	if($(selector).attr("type")=="hidden" ||$(selector).attr("type")=="button" ||$(selector).attr("tagName")=="TEXTAREA")	return true;
	
	var maxLength = $(selector).attr("maxlength");
	
	//각 브라우저별 기본값
	//크롬 : 524288
	//파이어폭스 : -1
	//익스 : 2147483647
	if( maxLength==undefined || maxLength == 524288 || maxLength == -1 || maxLength == 2147483647)	return true;
	
	var byteLength = $(selector).val().byteLength();
	
	if( byteLength > maxLength ){
		alert("["+$(selector).attr("fieldName")+"] 항목은 "+ maxLength + "byte를 넘을수 없습니다.(현재 "+byteLength+"byte)");
		jex.web.form.errorYn=true;
		return false;
	}
	return true;
};

/**
 * 포멧체크
 * Attribute : format
 */
jex.web.form.check.isFormat = function(selector)
{
//	alert($(selector).attr("id"));
	var checkValue = $(selector).val();
	
	//format attribete가 지정되어있어도 notnull이 아닐수도 있기때문에
	//값이 있는경우만 체크한다.
	if(checkValue!=null && checkValue!=undefined && checkValue.length>0)
	{
		switch( jex.web.null2void($(selector).attr("format")).toLowerCase() ){
			//날짜검증
			case "date":
				var result = jex.web.format.verifyDate( checkValue );
				
				if(result){
					alert("["+$(selector).attr("fieldName")+"] 항목의 "+result);
					jex.web.form.errorYn=true;
					return false;
				}
			break;
			
			//숫자검증: +/-를 포함한 숫자입력값
			case "number":
				if( isNaN(new Number(checkValue)) )
				{
					alert("["+$(selector).attr("fieldName")+"] 항목에는 숫자만 입력해주세요.");
					jex.web.form.errorYn=true;
					return false;
				}
			break;
			
			//영문숫자검증
			case "engnum":
				if(/[^a-zA-z0-9]/.test(checkValue)|| /\_/.test(checkValue))
				{
					alert("["+$(selector).attr("fieldName")+"] 항목에는 영문 또는 숫자만 입력해주세요.");
					jex.web.form.errorYn=true;
					return false;
				}
			break;
			
			//금액검증
			case "currency":
				checkValue = checkValue.replace(/,/g, '');
				if( isNaN(new Number(checkValue)) )
				{
					alert("["+$(selector).attr("fieldName")+"] 항목은 금액형식으로 입력해주세요.");
					jex.web.form.errorYn=true;
					return false;
				}
			break;
			
			//계좌번호검증 : 숫자만 허용한다.
			case "accountno":
				if( /[^0-9]/.test(checkValue) )
				{
					alert("["+$(selector).attr("fieldName")+"] 항목에는 숫자만 입력해주세요.");
					jex.web.form.errorYn=true;
					return false;
				}
			break;

			//계좌번호검증 : 숫자,하이픈(-)만 허용한다
			case "accountno2":
				if( /[^0-9]/.test( checkValue.replace(/\-/g, "") ) )
				{
					alert("["+$(selector).attr("fieldName")+"] 항목에는 숫자 또는 하이픈(-)만 입력해주세요.");
					jex.web.form.errorYn=true;
					return false;
				}
			break;
			
			//주민등록번호 앞자리: 자릿수(6자리) 및 숫자여부만 검사한다.
			case "resregno1":
				if( /[^0-9]/.test(checkValue) || checkValue.length != 6)
				{
					alert("["+$(selector).attr("fieldName")+"] 항목에는 6자리의 숫자만 입력해주세요.");
					jex.web.form.errorYn=true;
					return false;
				}
			break;
			
			//주민등록번호 뒷자리: 자릿수(7자리) 및 숫자여부만 검사한다.
			case "resregno2":
				if( /[^0-9]/.test(checkValue) || checkValue.length != 7)
				{
					alert("["+$(selector).attr("fieldName")+"] 항목에는 7자리의 숫자만 입력해주세요.");
					jex.web.form.errorYn=true;
					return false;
				}
			break;
			
			//주민등록번호: 자릿수(13자리) 및 숫자여부만 검사한다.
			case "resregno":
				if( /[^0-9]/.test(checkValue) || checkValue.length != 13)
				{
					alert("["+$(selector).attr("fieldName")+"] 항목에는 13자리의 숫자만 입력해주세요.");
					jex.web.form.errorYn=true;
					return false;
				}
			break;
			
			//사업자번호검증
			case "bizno":
				if( !jex.web.format.verifyBizNo(checkValue) )
				{
					alert("["+$(selector).attr("fieldName")+"] 항목에 올바르지 않은 사업자번호입니다.\n(사업자번호는 10자리 숫자입니다.)");
					jex.web.form.errorYn=true;
					return false;
				}
			break;
		}//end of switch
	}
	return true;
};

//날짜포맷검증
jex.web.format.verifyDate = function(param){
	if( param ) param = $.trim(param);
	if( /[^0-9~!@\#$%<>^&*\()\-=+._\'\:\/]/gi.test(param) )
		return "날짜를 확인해주세요. 날짜형식이 잘못되었습니다.";
	
	var inputDate = jex.web.null2void(param).replace(/[^0-9]/g, '');
	
	if(inputDate.length==0)
		return false;
	if(inputDate.length!=8)
		return "날짜를 확인해주세요. 날짜형식이 잘못되었습니다.";
	
	var yyyy = inputDate.substring(0,4);
	var mm = inputDate.substring(4,6);
	var dd = inputDate.substring(6,8);
	
	var date = new Date(yyyy,mm-1,dd);
	var fullYear = date.getFullYear();
	var month = date.getMonth()+1;
	if( String(month).length==1 ) month = "0"+String(month);
	var day = date.getDate();
	if( String(day).length==1 ) day = "0"+String(day);
	if( inputDate != (String(fullYear)+String(month)+String(day)) )
		return "날짜를 확인해주세요. 정상적인 날짜가 아닙니다.";
};


/**
 * 사업자번호 유효성 검증
 * @param param : 값 (예:"1234567890")
 */
jex.web.format.verifyBizNo = function(param){
	if(!param)	return false;
	
	// 숫자가 아니거나
	// 10자리가 아니면 오류
	if(isNaN(new Number(param)) || param.length!=10) 
	{
//		alert("사업자번호는 10자리 숫자입니다.");
		return false;
	}

	var sumMod  =   0;
	sumMod  +=  Number(param.charAt(0));
	sumMod  +=  Number(param.charAt(1)) * 3 % 10;
	sumMod  +=  Number(param.charAt(2)) * 7 % 10;
	sumMod  +=  Number(param.charAt(3)) * 1 % 10;
	sumMod  +=  Number(param.charAt(4)) * 3 % 10;
	sumMod  +=  Number(param.charAt(5)) * 7 % 10;
	sumMod  +=  Number(param.charAt(6)) * 1 % 10;
	sumMod  +=  Number(param.charAt(7)) * 3 % 10;
	sumMod  +=  Math.floor(Number(param.charAt(8)) * 5 / 10);
	sumMod  +=  Number(param.charAt(8)) * 5 % 10;
	sumMod  +=  Number(param.charAt(9));
	if  (sumMod % 10    !=  0){
//		alert("올바르지 않은 사업자번호입니다.");
		return false;
	}
	return  true;
};


/**
 * 사업자번호 포맷을 리턴한다.
 * 10자리사업자번호 = 123-12-12345
 * 13자리사업자번호 = 123456-1234567
 * @param param
 */
jex.web.format.bizNo = function(param){
	
	if(!param)	return "";
	
	var result = ""; 
	
	if(typeof param == "number")	param = String(param);
	
	if(param.length==10){
		result = param.substring(0, 3)+"-"+param.substring(3, 5)+"-"+param.substring(5);
	}else{
		result = param.substring(0, 6)+"-"+param.substring(6);
	}
	
	return  result;
};


/**
 * 금액포맷을 리턴한다.
 */
jex.web.format.currency = function(param){
	
	if(typeof param == "number")
	{
		param = String(param);
	}
	
	var val = param;
	var decimal = "";
	if(!val || isNaN(val))
		return '0';
	
	var mark = "";
	if(val.charAt(0)=="-")
	{
		mark = "-";
		val = val.substring(1);
	}
	
	var dotIndex = val.indexOf(".");
	if(dotIndex != -1)
	{
		var temp = val.split(".");
		val = temp[0];
		decimal = "."+temp[1];
	}
		
	var result="";			
	var leng = val.length-1;
	var count = 0;
	for(var i=leng ; i>=0 ; i--)
	{
		if(count!=0 && (count%3 == 0)){
			result = ","+result;
		}
		++count;

		result = val.charAt(i)+result;
	}
	return mark+result+decimal;
};


/**
 * setCSS(selector) : 해당 input에 css를 적용함
 * @param1 : input Selector
 * @param2 : css class 명
 */
jex.web.form.setCss = function(selector, cssClass){
//	$(selector).css({"background":"#E9EDFE", "border":"1px #E8001D solid"});
	$(selector).attr("class", cssClass);
};

/**
 * 지정된 selected 박스의 일자를 입력된 년/월에 해당하는 일자로 갱신한다.
 */
jex.web.form.event.replaceSelectDd = function(selector, year, month)
{
	$(selector).children().remove();
	
	var lastDate = jex.web.getLastDate(year, month);
	
	var value="";
	for( var i=1 ; i<=lastDate ; i++)
	{
		value=String(i).length==1?"0"+String(i):i;
		$(selector).append("<option value='"+value+"'>"+value+"</option>");
	}
};


$(document).ready(function(){
	return ;
	//로딩바-->
	$(document.body).append("<div class='loadingbar' id='_Jex_loadingbar' style='display:none;z-index:99999'><img src='img/comm/etc/loading.gif' alt='잠시만 기다려주세요.'/></div>");
	var _jexLodingVar = document.getElementById("_Jex_loadingbar");
	_jexLodingVar.style.position='absolute';
	_jexLodingVar.style.left = document.body.clientWidth/2-$("#_Jex_loadingbar").width()/2-9;
	_jexLodingVar.style.top = document.body.clientHeight/2-$("#_Jex_loadingbar").height()-20;
	
	$(document).ajaxStart(function(args, b, c){
		if(jQuery.ajaxSettings.loadingbarYn) $("#_Jex_loadingbar").show(); 
	});
	
	$(document).ajaxStop(function(args){
		$("#_Jex_loadingbar").fadeOut("slow");
	});
	//<--로딩바
	
	
	var formList = $("form");
	var form;
	
	$("a").css("cursor","pointer");
	$.each(formList, function(i,v){
		form = $(this);

		//form 에 CSS 적용--------------------------------------
		//form 의 "css" Attribute 가  "true" 로 설정된 폼만 적용한다.
		if(jex.web.null2void($(this).attr("css")).toLowerCase() =='true')
		{
			//텍스트박스 css 적용
			var textList = $(this).find(":text");
			$.each(textList, function(i, v){
				if( 	jex.web.null2void($(this).attr("notnull")).toLowerCase()=='true' 
					||	jex.web.null2void($(this).attr("minLength"))!=""	)
				{
					jex.web.form.setCss($(this), $(form).attr("cssClass")); 
				}
			});
			
			//Password css 적용
			var textList = $(this).find(":password");
			$.each(textList, function(i, v){
				if( 	jex.web.null2void($(this).attr("notnull")).toLowerCase()=='true' 
					||	jex.web.null2void($(this).attr("minLength"))!=""	)
				{
					jex.web.form.setCss($(this), $(form).attr("cssClass")); 
				}
			});
			
			//checkbox css 적용
			var checkList = $(this).find(":checkbox");
			$.each(checkList, function(i, v){
				if( jex.web.null2void($(this).attr("notnull")).toLowerCase()=='true' )
				{
					jex.web.form.setCss($(this), $(form).attr("cssClass")); 
				}
			});
			
			//radio css 적용
			var checkList = $(this).find(":radio");
			$.each(checkList, function(i, v){
				if( jex.web.null2void($(this).attr("notnull")).toLowerCase()=='true' )
				{
					jex.web.form.setCss($(this), $(form).attr("cssClass")); 
				}
			});
			
			//textarea css 적용
			var textareaList = $(this).find("textarea");
			$.each(textareaList, function(i, v){
				if(		jex.web.null2void($(this).attr("notnull")).toLowerCase()=='true' 
					||	jex.web.null2void($(this).attr("minLength"))!=""	)
				{
					jex.web.form.setCss($(this), $(form).attr("cssClass")); 
				}
			});
		}//CCS 적용 end
		

		//form submit 버튼 이벤트처리------------------------------------------
		//<input type='submit'> 의 이벤트 발생시 submit 이벤트를 잡아 수행한다.
		//form 의 "autocheck" Attribute 가  "true" 로 설정된 폼은 validation 체크를 수행한뒤
		//정상일 경우만 submit 처리 한다.
		$(this).submit(function(){
			if(jex.web.null2void($(this).attr("autocheck")).toLowerCase()=='true'){
				if(!jex.web.doSubmit($(this).attr("id"), true)){
					return false;
				}
			}else{
				return jex.web.doSubmit($(this).attr("id"), false);
			}
		});

		//form 하위의 모든엘리먼트중에서  ----------------------------------------
		//format 이 submit 으로 지정된 엘리먼트의 클릭이벤트가 발생하면 submit을 실행함.
		//form 의 "autocheck" Attribute 가  "true" 로 설정된 폼은 validation 체크를 수행한뒤
		//정상일 경우만 submit 처리 한다.
		$.each( $(this).find("*"),function(i2,v2){
			if( jex.web.null2void($(this).attr("format")).toLowerCase()=="submit" )
			{
				$(this).click(function(){
					if(jex.web.null2void($(form).attr("autocheck")).toLowerCase()=='true'){
						jex.web.doSubmit($(form).attr("id"), true);
					}else{
						jex.web.doSubmit($(form).attr("id"), false);
					}
				});
			}
		});
	
	});//end of "$.each(formList, function(i,v)"

	/**
	 * type='svc'로 지정된 select element 를 찾아 해당 웹서비스 호출결과로 option element 를 셋팅한다.
	 */
	var selectboxList =  $("select[type='svc']");
	$.each(selectboxList, function(i,v) {
		var svc		= $(this).attr("svc");//웹서비스ID
		var input	= $(this).attr("input");//입력값
		var selectedValue = $(this).attr("selectedValue");//selectbox의 기본 선택값
//		if( !(selectedValue==undefined||selectedValue==null||selectedValue=='null') )	selectedValue = selectedValue.replace(/[^0-9]/g, "");
		
//		var selectbo= $(this);
//		var json	= {};
//		if (jex.web.null2void(input) != "") eval("json = "+input);
//	    jex.web.Ajax(svc, json, function(dat) {
//	    	$.each(dat.REC, function(i,v) {
//	    		if( v.KEY==selectedValue )	selectbo.append("<option value='"+v.KEY+"' selected>"+v.DAT+"</option>");
//	    		else						selectbo.append("<option value='"+v.KEY+"'>"+v.DAT+"</option>");
//	    	});
//	    },"jct", "1");
		
		jex.web.setSelectBox(svc, input, selectedValue, $(this), null);
		
	}); // end of $.each(selectboxList, function(i,v)
	
	/**
	 * type='RADIO'로 지정된 DIV element 를 찾아 해당 웹서비스 호출결과로 INPUT element 를 셋팅한다.
	 */
	var radioBoxList =  $("div[type='radio']");
	$.each(radioBoxList, function(i,v) {
		var svc		= $(this).attr("svc");//웹서비스ID
		var input	= $(this).attr("input");//입력값
		var radioNm	= $(this).attr("radioNm");//입력값
		var selectedValue = $(this).attr("selectedValue");//selectbox의 기본 선택값
		
		jex.web.setRadioBox(svc, input, selectedValue, $(this), null,radioNm);
		
	}); // end of $.each(selectboxList, function(i,v)

	
	/**
	 * type='jex.selectYearMonth'로 지정된 select box를 찾아 "yyyy년 mm월" 셀렉트박스를 그린다.
	 */
	var selectYearMonth =  $("select[type='jex.selectYearMonth']");
	if(selectYearMonth.length>0)
	{
		var currentDate = jex.web.getServerDate("yyyymmdd");
		var currentYear = currentDate.substring(0,4);
		var currentMonth = currentDate.substring(4,6);
		var currentDay = currentDate.substring(6,8);

		for( var i=0 ; i<7 ; i++)
		{
			var beforDate = new Date(currentYear, currentMonth-1-i, currentDay);
			var beforYear = beforDate.getFullYear();
			var beforMonth = beforDate.getMonth()+1<10?"0"+(beforDate.getMonth()+1):(beforDate.getMonth()+1);
			
    		if(i==0)	$(selectYearMonth[0]).append("<option value='"+beforYear+beforMonth+"' selected>"+beforYear+"년&nbsp;&nbsp;"+beforMonth+"월&nbsp;</option>");
    		else		$(selectYearMonth[0]).append("<option value='"+beforYear+beforMonth+"'>"+beforYear+"년&nbsp;&nbsp;"+beforMonth+"월&nbsp;</option>");
		}
	}
	
	/**
	 * span 이나 div의 id가 "jex.selectCalendar"로 지정된 "년/월/일 셀렉트박스를 각각 그린다
	 */
	var selectCalendars = $("[id=jex.selectCalendar]");
	if( selectCalendars.length>0 )
	{
		$.each( selectCalendars, function(i,v){
			
			var selectHtml	= _getSelectYyyy( $(this).attr("yearName"), $(this).attr("startYear") ) +" 년 "
							+ _getSelectMm( $(this).attr("monthName") ) +" 월 "
							+ _getSelectDd( $(this).attr("dateName") ) +" 일";
			
			$(this).html(selectHtml);
			
			if( jex.web.null2void($(this).attr("defaultDate")).length > 0 )
			{
				jex.web.setCalendar($(this).attr("defaultDate"), i);
			}
		});
	}
	
	function _getSelectYyyy(name, startYear){
		var currentYyyy = new Date().getFullYear();
		
		startYear = new Number(startYear);
		if( isNaN(startYear) )	startYear = currentYyyy-10;
		
		var optionHtml	="";
		for( var i=startYear ; i<=currentYyyy ; i++)
		{
			if( i==currentYyyy )
				optionHtml += "<option value='"+i+"' selected>"+i+"</option>";
			else
				optionHtml += "<option value='"+i+"'>"+i+"</option>";
		}
		return "<select id='jex.selectYyyy' name='"+name+"' onChange='jex.web.form.event.changeSelectCanendar(this)'>"+ optionHtml+"</select>";
	}
	
	function _getSelectMm(name){
		var currentMm = new Date().getMonth();
		
		var optionHtml	="";
		var value = "";
		for( var i=1 ; i<=12 ; i++)
		{
			value = String(i).length==1? "0"+String(i):i;
			if(i==currentMm+1)
				optionHtml += "<option value='"+value+"' selected>"+value+"</option>";
			else
				optionHtml += "<option value='"+value+"'>"+value+"</option>";
		}
		return "<select id='jex.selectMm' name='"+name+"' onChange='jex.web.form.event.changeSelectCanendar(this)'>"+ optionHtml+"</select>";
	}
	
	function _getSelectDd(name){
		var date = new Date();
		var currentDd =date.getDate(); 
		var lastDate = jex.web.getLastDate(date.getFullYear(), date.getMonth()+1);
		
		var optionHtml	="";
		
		var value = "";
		for( var i=1 ; i<=lastDate ; i++)
		{
			value = String(i).length==1? "0"+String(i):i;
			if( i==currentDd )
				optionHtml += "<option value='"+value+"' selected>"+value+"</option>";
			else
				optionHtml += "<option value='"+value+"'>"+value+"</option>";
		}
		return "<select id='jex.selectDd' name='"+name+"'>"+ optionHtml+"</select>";
	}
	/**
	 * 셀렉트박스 달력 그리기 끝
	 */
	
	
	/**
	 * format=number2 로되어있는 input는 숫자만 입력할수있다. 
	 */
	$.each($("input[format=number2]"), function(i,v){
		//'한글'모드일때는 아래 처리를 무시하고  입력되기때문에 무시하기때문에 style에 다음 항목을 셋팅한다.
		//강제로 영어 모드로 전환시킨다.
//		if(navigator.userAgent.toLowerCase().indexOf("msie") != -1)
//		{
			$(v).attr("style", "ime-mode:disabled;"+$(v).attr("style"));
//		}
		$(this).keydown(function(event){
			//shift 키가 눌려있을땐 특수문자 입력 불가
			//백스페이스(8), delete(46), 방향키(37~40) 은 허용함
			//숫자가 아닌 입력값 입력 불가(48~57은 상단 숫자키코드), (96~105는 오른쪽 숫자패드키코드)
			if(  event.shiftKey ||
					(   !(event.keyCode==8 || event.keyCode==46 || (event.keyCode>=37 && event.keyCode<=40) )
					&& !(event.keyCode>=48 && event.keyCode<=57)
					&& !(event.keyCode>=96 && event.keyCode<=105)
					)
			)
			{
				event.returnValue=false;
				return false;
			}  
		}); 
	});
});//end of "$(document).ready(function()"
 
//"yyyy년 mm월" 셀렉트박스 이벤트 처리
jex.web.form.event.changeSelectYearMonth = function(selector)
{
	var selectVal = String($(selector).val());
	var currentDate = jex.web.getServerDate("yyyymmdd");

	var lastDate = "";
	if(selectVal==currentDate.substring(0,6))	lastDate = currentDate.substring(6,8);
	else	{
		lastDate = jex.web.getLastDate(selectVal.substring(0,4), selectVal.substring(4,6));
	}
	jex.web.setCalendar(selectVal+"01", 0);
	jex.web.setCalendar(selectVal+lastDate, 1);
};

//년/월 셀렉트박스 이벤트
jex.web.form.event.changeSelectCanendar = function(selector)
{
	var selectors = $("select[id="+ $(selector).attr("id") +"]"); 
	
	$.each(selectors, function(i, v){
		if( this==selector )
		{
			var targetSelectBox = $("select[id=jex.selectDd]")[i];
			
			jex.web.form.event.replaceSelectDd(targetSelectBox, $($("select[id=jex.selectYyyy]")[i]).val(), $($("select[id=jex.selectMm]")[i]).val());
		}
	});
};


/***********************************************
 * 사용자 호출이 가능한 함수 영역
 ***********************************************/
jex.web.alert = function(msg, code) {
	if (code!=null&&code!=undefined)	msg = jex.web.getMsg(code);
	alert(msg);
};

jex.web.confirm = function(msg, code) {
	if (code!=null&&code!=undefined)	msg = jex.web.getMsg(code);
	return confirm(msg);
};

jex.web.debug = function(code, fn) {
	if (_jex_debugMod) _jex_error_dialog(code, "excla");
};

jex.web.err  = function(code ,fn) {
	_jex_error_dialog(code, "error");
};

jex.web.info = function(code ,fn) {
	_jex_error_dialog(code, "ok", fn);
};

jex.web.isError = function(data) {
	return data['COMMON_HEAD']['ERROR'];
};

jex.web.getCodeList = function(grpCd) {
	var result;
//	jex.web.Ajax("comb_0001_01", {DIV_GRP_CD:grpCd}, function(data) {result = data;}, "jct", false);
	return result;
};

jex.web.getCodeNm	= function(grpCd, grpItm) {
	var result;
//	jex.web.Ajax("comm_0008_01_r001", {DIV_GRP_CD:grpCd, DIV_ITEM_CD:grpItm}, function(data) { result=data; }, "jct", false);
	return result;
};

jex.web.getMsg = function(code) {
	var result;
	jex.web.Ajax("code_0001_01_r001", {RSLT_CD:code}, function(data) { result=data.RSLT_MSG; }, "jct", false, false, false);
	return result;
};

function _jex_error_dialog(code, type, fn) {
	var msg;
	if (typeof(code)!="string")		code = code['COMMON_HEAD']['CODE'];
	if (typeof(code)!="string")		msg  = code['COMMON_HEAD']['MESSAGE'];
	if (msg==null||msg==undefined)	msg = jex.web.getMsg(code);
	
	if (parent.tMenuList == null || parent.tMenuList == undefined || true) {
		alert(msg);
		if (typeof(fn) == "function") fn();
		return;
	} 
		
	var title		= {"excla":"Debug", "ok":"확인 메시지", "error":"에러 메시지"};
	var errorHtml	= "<div id='_jex_error_dialog' class='pop_wrap_div' style='width:540px;height:212px' tabindex='0'>"+
							"<div id='p-title' class='pop_top'>"+
								"<h1>%TITLE%</h1>"+
								"<span><img id='close' src='img/00/menu/popup_close.gif' alt='close' style='cursor:pointer' /></span>"+
							"</div>"+
							"<div id='pcpcont' class='pop_cont'>"+
								"<div class='infoMessage'>"+
									"<dl>"+
										"<dt class='%TYPE%'></dt>"+
										"<dd style='width:320px'><strong>%CODE%</strong><br />%MSG%</dd>"+
									"</dl>"+
								"</div>"+
								"<ul class='btn_both'>"+
									"<li class='btn_bothLeft'></li>"+
									"<li  class='btn_bothRight'><span class='btn_off'><a id='close' style='cursor:pointer'>확인</a></span></li>"+
								"</ul>"+
							"</div>"+
						"</div>";
	errorHtml = errorHtml.replace(/%TITLE%/g,	title[type]);
	errorHtml = errorHtml.replace(/%TYPE%/g,	type);
	errorHtml =	errorHtml.replace(/%MSG%/g,		msg);
	errorHtml =	errorHtml.replace(/%CODE%/g,	code);
	
	$(errorHtml).appendTo(document.body);
	
	$("#_jex_error_dialog").focus();
	
	$("#_jex_error_dialog").find("#close").click(function(){
		if (typeof(fn) == "function") fn();
		$(document.body).find("#_jex_error_dialog").remove();
	});
	
	$("#_jex_error_dialog").keypress(function(event){
		switch (event.keyCode) {
			case 27:
			case 32:
			case 13:
				if (typeof(fn) == "function") fn();
				$(document.body).find("#_jex_error_dialog").remove();
			break;
		};
		switch (event.charCode) {
			case 27:
			case 32:
			case 13:
				if (typeof(fn) == "function") fn();
				$(document.body).find("#_jex_error_dialog").remove();
			break;
		}
	});
}

/**
 * 웹서비스를 호출하여 해당 결과로 selelct박스의 option항목들을 채운다.
 * 
 * @svc				: 웹서비스ID
 * @input			: 입력값 ex)'{USR_ID:"test"}'
 * @selectedValue	: 기본선택값. 값이 있으면 option의 value가 해당 값인 항목이 기본선택.
 * @selector		: jquery객체의 셀렉터 ex)$(this) 또는 $("#ID")...
 * @selectElementId : select박스의 id값.
 * 					=>selector 과 selectElementId는 둘중에 하나만 입력하면됨.
 */
jex.web.setSelectBox = function(svc, input, selectedValue, selector, selectElementId)
{
//	if( !(selectedValue==undefined||selectedValue==null||selectedValue=='null') )	selectedValue = selectedValue.replace(/[^0-9]/g, "");
	
	var selectbo;
	
	if(selector==null||selector==undefined||selector=="")
	{
		selectbo = $("#"+selectElementId);
	}
	else
	{
		selectbo = selector;
	}
	
	var _style = selectbo.attr("style");
	var _class = selectbo.attr("class");
	
	//기존에 option 항목이 존재하면 삭제.
//	selectbo.children().remove();
	selectbo.find("[default=false]").remove();
	
	var json	= {};
	if (jex.web.null2void(input) != "") eval("json = "+input);
	
    jex.web.Ajax(svc, json, function(dat) {
		try {
	    	$.each(dat.REC, function(i,v) {
		    	if(v.OPT_VAL==undefined || v.OPT_VAL==null || v.OPT_VAL=="null") v.OPT_VAL="";
		    	if(v.OPT_VAL==selectedValue )	selectbo.append("<option value='"+v.OPT_VAL+"' default='false' title='"+v.OPT_TXT+"' selected>"+v.OPT_TXT+"</option>");
		    	else							selectbo.append("<option value='"+v.OPT_VAL+"' default='false' title='"+v.OPT_TXT+"'>"+v.OPT_TXT+"</option>");
	    	});
	    	
	    	selectbo.attr("style", _style);
	    	selectbo.attr("class", _class);
		} catch(e) {
			alert("SELECT BOX 그리기 실패! ["+svc+"]");
			return;
		}
    },"jct", false, true, false);
};

/**
 * 웹서비스를 호출하여 해당 결과로 INPUT RADIO항목을 채운다.
 * 
 * @svc				: 웹서비스ID
 * @input			: 입력값 ex)'{USR_ID:"test"}'
 * @selectedValue	: 기본선택값. 값이 있으면 option의 value가 해당 값인 항목이 기본선택.
 * @selector		: jquery객체의 셀렉터 ex)$(this) 또는 $("#ID")...
 * @selectElementId : input박스의 id값.
 * 					=>selector 과 selectElementId는 둘중에 하나만 입력하면됨.
 */
jex.web.setRadioBox = function(svc, input, selectedValue, selector, selectElementId, radioNm)
{
	var selectbo;
	
	if(selector==null||selector==undefined||selector=="")
	{
		selectbo = $("#"+selectElementId);
	}
	else
	{
		selectbo = selector;
	}
	
	var _style = selectbo.attr("style");
	var _class = selectbo.attr("class");
	
	//기존에 option 항목이 존재하면 삭제.
	selectbo.children().remove();
	
	var json	= {};
	if (jex.web.null2void(input) != "") eval("json = "+input);
	
    jex.web.Ajax(svc, json, function(dat) {
		try {
	    	$.each(dat.REC, function(i,v) {
		    		if(v.OPT_VAL==undefined || v.OPT_VAL==null || v.OPT_VAL=="null") v.OPT_VAL="";
		    		if( v.OPT_VAL==selectedValue )	selectbo.append("<input type='radio' name='"+radioNm+"' value='"+v.OPT_VAL+"' checked /><label>"+v.OPT_TXT+"</label>");
		    		else						selectbo.append("<input type='radio' name='"+radioNm+"'  value='"+v.OPT_VAL+"' /><label>"+v.OPT_TXT+"</label>");
	    	});
	    	
	    	selectbo.attr("style", _style);
	    	selectbo.attr("class", _class);
		} catch(e) {
			alert("RADIO BOX 그리기 실패! ["+svc+"]");
			return;
		}
    },"jct", false);
};

/**
 * 서버시간을 리턴한다.
 * 조합 가능한 Format..
 * yy,yyyy : 년도
 * mm      : 월
 * dd      : 일 
 * 
 * hh(hh24) : 시간(24시기준인지)
 * mi       : 분
 * ss       : 초
 * ms       :  millisecond 
 * 
 * MMM      : 월(Ex:Jan,1월)
 * EEE      : 일(Ex:Tue,화)
 * G        : AD/BC
 */
//jex.web.getServerDate = function(format)
//{
//	var result ="";
//	jex.web.Ajax("getServerDate", {FRMT_CTT:format}, function(dat){
//		result = dat.INQ_DT;
//	},"jct", "1");
//	return result;
//};

/**
 * startDate와 endDate를 비교해서 startDate가 작으면 -1, 같으면0, 더 크면 1을 리턴한다.
 * 
 * @param startDate	: 포맷에 관계없이 "yyyy"+"mm"+"dd"로 되어있는 날짜.
 * @param endDate	: 포맷에 관계없이 "yyyy"+"mm"+"dd"로 되어있는 날짜.
 * @param msgCode	: 기본으로 "조회시작일자가 더 큽니다"라는 메세지를 띄워주며, 다른메세지를 띄워야 할경우
 *                    해당 메세지 코드를 입력한다.
 * @param msgYn	: true(default)/false
 */
jex.web.compareDate = function(startDate, endDate, msgCode, msgYn)
{
	if(!startDate){
		alert("비교할 첫번째 날짜가 입력되지 않았습니다.");
		return false;
	}
	if(!endDate){
		alert("비교할 두번째 날짜가 입력되지 않았습니다.");
		return false;
	}
	
	if(typeof startDate == "number")	startDate = String(startDate);
	if(typeof endDate == "number")	endDate = String(endDate);
	
	startDate = startDate.replace(/[^0-9]/g, "");
	endDate = endDate.replace(/[^0-9]/g, "");
	
	var result = new Number(startDate) - new Number(endDate);
	
	if(result<0){
		return -1;
	}else if(result==0)
	{
		return 0;
	}else{
		if(msgYn==undefined || msgYn)
		{
			jex.web.info( !msgCode?"WM0071":msgCode );
		}
		return 1;
	}
};

/**
 * @param format 	조합 가능한 Format..
 * 						yy,yyyy : 년도
 * 						mm      : 월
 * 						dd      : 일 
 * 						hh      : 시
 * 						hh24    : 0시~23시
 * 						mi      : 분
 * 						ss      : 초
 * 						EEE      : 요일(화) 
 * @param c     기준 Flag('Y':년,'M':월,'W':주,'D'일)
 * @param i     가감 계산값
 * @param sdate	yyyymmdd를 가진 날짜 문자열
 * 
 * 예) 현재날짜 : jex.web.getDate("yyyy-mm-dd")
 *     현재날짜시분초까지 구하기 : jex.web.getDate("yyyy-mm-dd hh24:mi:ss")
 *     현재날짜,요일가져오기 : jex.web.getDate("yyyy-mm-dd EEE")
 *     현재에서 한달전 날짜 구하기 : jex.web.getDate("yyyy-mm-dd", "M", -1)
 */
jex.web.getDate = function(format,  c, i, sdate)
{
	var currentDate;
	if(sdate){
		currentDate = new Date(jex.web.format.date(sdate, "yyyy"), parseInt(jex.web.format.date(sdate, "mm"))-1, jex.web.format.date(sdate, "dd"));
	}else{
		currentDate = new Date();
	}
	
	var _tmpDate;
	if(jex.web.null2void(c)!="")
	{
		switch( c.toUpperCase() ){
			case "Y":
				_tmpDate = new Date(currentDate.getFullYear()+i, currentDate.getMonth(), currentDate.getDate());
			break;
			
			case "M":
				_tmpDate = new Date(currentDate.getFullYear(), currentDate.getMonth()+i,  1);
				
				//beforeDate의 마지막 날짜가, 조회종료일자조건의 선택되어있는값보다 작으면
				//beforeDate의 마지막 날짜로 설정한다.
				var lastDate = jex.web.getLastDate(_tmpDate.getFullYear(), _tmpDate.getMonth()+1);
				if( lastDate < currentDate.getDate() )
				{
					_tmpDate.setDate(lastDate);
				}
				else
				{
					_tmpDate.setDate(currentDate.getDate());
				}
				
			break;
			
			case "W":
				_tmpDate = new Date(currentDate.getFullYear(), currentDate.getMonth(),  currentDate.getDate()+(i*7));
			break;
			
			case "D":
				_tmpDate = new Date(currentDate.getFullYear(), currentDate.getMonth(),  currentDate.getDate()-i);
			break;
			
			default : 
				jex.web.alert("없는 기준 Flag입니다.("+c+")");
				return false;
			break;
		}
		currentDate = _tmpDate;
	}
	var year = String(currentDate.getFullYear());
	
	var month = currentDate.getMonth();
	month = month+1<10?"0"+String(month+1):String(month+1);
	
	var date = currentDate.getDate();
	date = date<10?"0"+String(date):String(date);
	
	var weekstr='일월화수목금토'; // 요일 스트링
	
	var day = weekstr.substr(currentDate.getDay() , 1);
	
	var hours = currentDate.getHours();
	hours = hours<10?"0"+String(hours):String(hours);
	
	var minutes =  currentDate.getMinutes();
	minutes = minutes<10?"0"+String(minutes):String(minutes);
	
	var seconds = currentDate.getSeconds();
	seconds = seconds<10?"0"+String(seconds):String(seconds);
	
	return jex.web.format.date(year+month+date+hours+hours+seconds, format);
//	return format.replace("yyyy", year)
//				.replace("yy", year.substring(2, 4))
//				.replace("mm",month )
//				.replace("dd", date)
//				.replace("EEE", day)
//				.replace("hh24", hours)
//				.replace("hh", parseInt(hours)<=12?hours:"0"+String(parseInt(hours)-12))
//				.replace("mi", minutes)
//				.replace("ss", seconds);
};

/**
 * 조합 가능한 Format..
 * yy,yyyy : 년도
 * mm      : 월
 * dd      : 일
 * hh      : 시  
 * hh24    : 0시~23시
 * mi      : 분
 * ss      : 초
 * 
 * EEE      : 요일(화) 
 * 
 * @param date  : 날짜문자열
 * @param format : 조합된날짜포맷
 * 
 * 예) jex.web.format.date("20101207153524", "yyyy년mm월dd일 hh24시 mi분 ss초 EEE요일") =>결과 : 2010년12월07일 15시 35분 24초 화요일
 *     jex.web.format.date("20101207153524", "yyyy-mm-dd hh24:mi:ss (EEE)") =>결과 : 2010-12-07 15:35:24 (화)
 */
jex.web.format.date = function(date, format)
{
	if(!format){
		alert("날짜 포맷을 입력해주세요");
		return false;
	}
	
	if(!date)	return "";

	//이미 포맷팅 되어있는값을 삭제한다.
	date = date.replace(/[^0-9]/g,"");
	
	//입력된 날짜의 길이가 포맷팅되어야 하는 길이보다 작으면 뒤에 0을 붙인다.
	var formatLength = format.replace(/[^a-z]/g, "").length;
	var dateLength = date.length;
	for(var i=0 ; i<formatLength-dateLength ; i++){
		date += '0';
	}

	var idx = format.indexOf("yyyy");
	if( idx > -1 ){
		format = format.replace("yyyy", date.substring(0,4));
	}
	idx = format.indexOf("yy");
	if( idx > -1 ){
		format = format.replace("yy", date.substring(2,4));
	}
	idx = format.indexOf("mm");
	if( idx > -1 ){
		format = format.replace("mm", date.substring(4,6));
	}
	idx = format.indexOf("dd");
	if( idx > -1 ){
		format = format.replace("dd", date.substring(6,8));
	}
	idx = format.indexOf("hh24");
	if( idx > -1 ){
		format = format.replace("hh24", date.substring(8,10));
	}
	idx = format.indexOf("hh");
	if( idx > -1 ){
		var hours = date.substring(8,10);
		hours = parseInt(hours)<=12?hours:"0"+String(parseInt(hours)-12);
		format = format.replace("hh", hours);
	}
	idx = format.indexOf("mi");
	if( idx > -1 ){
		format = format.replace("mi", date.substring(10, 12));
	}
	idx = format.indexOf("ss");
	if( idx > -1 ){
		format = format.replace("ss", date.substring(12));
	}
	idx = format.indexOf("EEE");
	if( idx > -1 ){
		var weekstr='일월화수목금토'; // 요일 스트링
		
		var day = weekstr.substr(new Date(date.substring(0,4), parseInt(date.substring(4,6))-1, date.substring(6,8)).getDay(), 1);
		format = format.replace("EEE", day);
	}
	
	return format;
};



/**
 * 서버에 있는 파일 다운로드
 * 
 * @param fileSavePath : 파일명을 포함한 전체경로
 * @param fileOrgName  : 다운로드받을파일명
 * @return
 */
jex.web.FileDownload = function(fileSavePath, fileOrgName)
{
//	alert(fileSavePath+":"+fileOrgName);
	
	$("#_downloadDiv").remove();
	$("#_downloadIfrm").remove();
	
	var wsvcId = 'comm_0006_02.act';
	
	var $iframe = $("<iframe name='_downloadIfrm' id='_downloadIfrm' style='display:none'/>");
	
	$iframe.appendTo("body");
	
	var $div = $("<div id='_downloadDiv'/>");
	$div.css({display:"none"});
	$div.appendTo("body");

	var _form = '<form name="_downloadForm" id="_downloadForm" action="'+wsvcId+'" method="post" target="_downloadIfrm">'
		      +		'<input type="hidden" name="FILE_ORG_NAME" value="'+ fileOrgName +'" />'
		      +		'<input type="hidden" name="FILE_SAVE_PATH" value="'+ fileSavePath +'" />'
		      +'</form>';
	$("#_downloadDiv").append(_form);

	jex.web.doSubmit("_downloadForm", false);
};

/**
 * 엑셀저장
 * 
 * @wsvcId		웹서비스ID(웹서비스ID.act)
 * @params		입력값을 object형태로 입력. KEY는 action 입력도메인 항목명과 일치 하게 입력해야함.
 *              ex: {KEY1:"값1", KEY2:"값2"}
 */
jex.web.FileDownloadURL = function(wsvcId, params, debug)
{
	$("#_downloadDiv").remove();
	$("#_downloadIfrm").remove();
	
	if(!wsvcId)
	{
		alert("웹서비스ID를 입력해주세요.");
		return false;
	}
	
	if( !/\.act$/.test(wsvcId))
	{
		wsvcId = wsvcId+".act";
	}
	
	var paramInputs = "";
	if( !(params==undefined||params==null||params=='null'||params=="") )
	{
		for(var tempKey in params)
		{
			paramInputs += '<input type="hidden" name="'+tempKey+'" value="'+ params[tempKey] +'" />';
		}
	}
	
    var $iframe = $("<iframe name='_downloadIfrm' id='_downloadIfrm'/>");
    
    if(debug)
    	$iframe.css({ position: "absolute", width: "700px", height: "400px" });
    else
    	$iframe.css({ position: "absolute", width: "0px", height: "0px", left: "-600px", top: "-600px" });
   
    $iframe.appendTo("body");

	var $div = $("<div id='_downloadDiv'/>");
	$div.css({display:"none"});
	$div.appendTo("body");

	var _form = '<form name="_downloadForm" id="_downloadForm" action="'+wsvcId+'" method="post" target="_downloadIfrm">'
		      +     paramInputs
		      +'</form>';
	$("#_downloadDiv").append(_form);

	jex.web.doSubmit("_downloadForm", false);
};

/**
 * HTML 파일저장
 * 
 * @divId		파일로 저장할 영역을 DIV로 감싸고 해당 DIV아이디를 입력한다.
 * @fileName	저장할 파일명
 * @skipId		저장할 DIV영역 내에서 저장시 제외시길부분의 ID를 입력한다.
 *              ex) <table id='skipArea'></table> <div id='skipArea'></div> 이런식으로 되어있으면 같은 skipId 에
 *              해당하는 모든 엘리먼트는 제외시킨다.
 * @debug		true 입력시 iframe 내용을 볼수있다.              
 */
jex.web.FileDownloadHtml = function(divId, fileName, skipId, debug)
{
	$("#_downloadDiv").remove();
	$("#_downloadIfrm").remove();
	
	var $element = $("#"+divId);
	
	var $div = $("<div id='_downloadDiv'/>");
	$div.css({display:"none"});
	$div.appendTo("body");
	
    $element.each( function() { 
    	$("#_downloadDiv").append($(this).html()); 
    });
    
    //skipId 에 해당하는 엘리먼트 삭제
    $.each( $("#_downloadDiv").find("[id="+skipId+"]"), function(i, v){
    	$(this).remove();
    });
    
    $.each( $("#_downloadDiv").find("img"), function(i, v){
    	var src = $(this).attr("src");

    	if(! /^http/.test(src) ){
    		src = 'http://' + window.location.host +  (/^[\/]/.test(src)?href:"/"+src);
    	}

    	$(this).attr("src", src);
    });
    
	var $iframe = $("<iframe name='_downloadIfrm' id='_downloadIfrm'/>");
    
	if(debug)
    	$iframe.css({ position: "absolute", width: "700px", height: "400px" });
	else
		$iframe.css({ position: "absolute", width: "0px", height: "0px", left: "-600px", top: "-600px" });

    $iframe.appendTo("body");
    var doc = $iframe[0].contentWindow.document;
    doc.write("<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>");
    doc.write("<html xmlns='http://www.w3.org/1999/xhtml'><head>");
    doc.write("<meta http-equiv='Content-Type' content='text/html; charset=euc-kr'>");
    doc.write("<title>"+$("title").html()+"</title>");
    $("link").each( function() {
    	var href = $(this).attr("href");
    	
    	if(! /^http/.test(href) ){
    		href = 'http://' + window.location.host +  (/^[\/]/.test(href)?href:"/"+href);
    	}
    		
        doc.write("<link type='text/css' rel='stylesheet' href='" + href + "' />");
    });
    doc.write("</head><body>");
    doc.write($("#_downloadDiv").html());
    doc.write("</body></html>");

    doc.close();
    setTimeout( function() { 
    	$iframe[0].contentWindow.document.execCommand('SaveAs', false, fileName);
    }, 500);
};


/**
 * DIV ID를 입력받아서 해당 DIV의 내용을 출력한다. 
 */
jex.web.print = function(divId)
{
	if(divId==undefined || divId==null || divId=="")
	{
		alert("출력할 DIV ID를 지정해주세요.");
		return false;
	}
	$("#"+divId).jqprint({ importCSS: true});   
};

/**
 * 년,월을 입력받아 해당월의 마지막 일자를 반환한다.
 */
jex.web.getLastDate = function(yyyy, mm)
{
	if( yyyy==undefined || String(yyyy).length!=4 || mm==undefined || String(mm).length>2 )
		return "";
	else
		return new Date(new Date(yyyy, mm, '1')-(60*60*24*1000)).getDate();
};

/**
 * 지정된 년/월/일 셀렉트박스의 날짜를 셋팅한다.
 * 
 * @param yyyymmdd : 'yyyymmdd' 형태의 날짜 or Date 객체
 * @param index : id 가 "jex.selectCalendar"인 div 또는 span 태그의 index(코딩상에 나타나는 달력 순번)
 *                0부터 시작한다.
 */
jex.web.setCalendar = function(yyyymmdd, index)
{
	if( index==undefined || index==null || index=="" )
	{
		index = 0;
	}
	
	if( !yyyymmdd || yyyymmdd=="null")
	{
		yyyymmdd = new Date();
	}
	
	if( yyyymmdd instanceof Date )
	{
		var _fullYear = yyyymmdd.getFullYear();
		var _month = String(yyyymmdd.getMonth()+1).length==1?"0"+String(yyyymmdd.getMonth()+1):yyyymmdd.getMonth()+1;
		var _date = String(yyyymmdd.getDate()).length==1?"0"+String(yyyymmdd.getDate()):yyyymmdd.getDate();
		yyyymmdd   = _fullYear+""+_month+""+_date;
	}
	//숫자가 아닌 문자 제거
	yyyymmdd = yyyymmdd.replace(/[^0-9]/g,"");
	
	var selectYyyy = $("select[id=jex.selectYyyy]")[index];
	var selectMm = $("select[id=jex.selectMm]")[index];
	var selectDd = $("select[id=jex.selectDd]")[index];
	
	_selected($(selectYyyy).children(), yyyymmdd.substring(0,4));
	_selected($(selectMm).children(), yyyymmdd.substring(4,6));

	jex.web.form.event.replaceSelectDd(selectDd, yyyymmdd.substring(0,4), yyyymmdd.substring(4,6));
	_selected($(selectDd).children(),  yyyymmdd.substring(6,8));
	
	function _selected(options, key)
	{
		$.each(options, function(i,v){
			if($(v).val()==key){
				$(this).attr("selected", true);
				return false;
			}
		});
	}
};

/**
 * 조회시작 년/월/일 셀렉트박스와 조회종료 년/월/일 셀렉트박스의 날짜를
 * 사용자지정~현재 날짜로 셋팅한다.
 *
 * @param betweenDv : 일(d)/주(w)/월(m) 구분코드
 * @param num : 두 일자의 차이
 * 
 * ex) jex.web.setCalendarBetween("d", 0);  => 당일
 * ex) jex.web.setCalendarBetween("w", 1);  => 1주
 */
jex.web.setCalendarBetween = function(startId, endId, betweenDv, num){
	if(isNaN(new Number(num)))	return false;
	
	var $start = $("#"+startId);
	var $end = $("#"+endId);
	var _endDate = $end.jexCalendar("getDate");
	
	//당일이 아닌경우 조회종료일자 조건에 선택되어있는 값을 기준으로 조회시작일자 날짜를 계산한다.
	if( betweenDv!="d" || num>0 ){
		$start.val(jex.web.getDate("yyyy-mm-dd", betweenDv, num, _endDate));
	}
	//당일일경우 현재날짜로.
	else{
		$start.val(jex.web.getDate("yyyy-mm-dd"));
		$end.val(jex.web.getDate("yyyy-mm-dd"));
	}
};

/**
 * value가 false로 평가되는 값(undefined, null, "")이면 ""로 반환한다.
 * 
 * @param value
 * @def def	: value가 false로 평가되는 값일경우, def가 있으면 def를 반환한다.
 * 
 */
jex.web.null2void = function(value, def){
	if( !value )
		return !def ? "":def ;
	else 
		return $.trim(value);
};

/**
 * form 의 서브밋을 수행하는 함수
 * @formId : submit 할 form 의 id
 * @checkYn: submit 하기전에 formCheck를 수행할지 여부
 *           지정하지 않으면 default 는 true.
 * @form : PT에서 사용하는 common.js의 uf_openWin 함수에서 submit 하는것을 지원하기 위해 추가함
 */
jex.web.doSubmit = function(formId, checkYn, form, opt){
	
	if( formId=="" || formId==undefined || formId==null )
	{
		if( form )
		{
			formId = $(form).attr("id");
			if( formId=="" || formId==undefined || formId==null )
			{
//				$(form).attr("id", "jex.web._subForm_");
//				formId = $(form).attr("id");
				formId = $(form).attr("name");
				$(form).attr("id", form);
			}
		}
	}
	
	if(!jex.web.testMode)
	{
		//form 의 action Attribute 에 셋팅된 웹서비스아이디에 ".act"를 붙여서 다시 셋팅한다.(.act로 끝나지 않는경우만)
		if( !/\./g.test($("#"+formId).attr("action")) && !/\.act$/.test($("#"+formId).attr("action")) )
		{
			$("#"+formId).attr("action", $("#"+formId).attr("action")+".act");
		}
	}
//	alert( $("#"+formId).attr("action") );
	
	//submit 이 진행중인지 확인
	if(!jex.web.form.submitYn)
	{
		//submit 진행중으로 값 설정
		jex.web.form.submitYn=true;
		
		//checkYn이 false 가 아니면 validation 체크 
		if( checkYn===undefined || checkYn===null || checkYn==="" || checkYn )
		{
			//validation 체크 수행
			if( !jex.web.checkForm(formId) ){
				//결과가 오류이면 submit 진행하지 않음
				jex.web.form.submitYn=false;
				return false;
			}
		}
		
		//submit 실행
		if (jex.web.null2void($("#"+formId).attr("type")).toLowerCase() == "json") {
			var rslt =  _trxSubmit($("#"+formId), opt);
			return rslt;
		} else if (jex.web.null2void($("#"+formId).attr("type")).toLowerCase() == "ajax") {
			return _trxAjax($("#"+formId));
		} else {
			/*
			 * 새창 으로 From을 보내기 위한 Option을 처리한다.
			 */
			if (opt!=undefined&&opt!=null&&opt!=""&&opt.target!=undefined&&opt.target!=null&&opt.target!="") {
				var	sizeW = Number(opt.sizeW) + 25;	
				var	sizeH = Number(opt.sizeH);
				var nLeft = screen.width/2 - sizeW/2 ;
				var nTop  = screen.height/2- sizeH/2 ;
				var option= ",toolbar=no,menubar=no,location=no,scrollbars=yes,status=no";
				var winObj= window.open('', opt.target, "left=" + nLeft + ",top=" +  nTop + ",width=" + sizeW + ",height=" + sizeH  + option );
				winObj.blur();//크롭에서 focus()만 호출할경우 작동하지 않아서 blur()를 먼저 호출한후 focus()호출하도록 수정함.
				winObj.focus();//팝업이 이미 열려있는경우 앞으로 나오도록 한다.
				$("#"+formId).attr("method", "post");
				$("#"+formId).attr("target", opt.target);
				if (opt.action!=null && opt.action!=undefined && opt.action != "")  $("#"+formId).attr("action", opt.action);
				jex.web.form.submitYn=false;
			}	
				
			//보안모듈을 사용할경우
			if(jex.web.isSecurityModule)
			{
				//xecureweb 보안모듈의 submit
				XecureSubmit( document.getElementById(formId) );
			}
			else
			{
				//$("#"+formId).submit(); => 이 방식으로 submit 하면
				//$("#"+formId).submit(function(){}); => 에서 이벤트가 잡히기 때문에
				//아래처럼 submit을 실행한다.
				document.getElementById(formId).submit();
			}
			
			jex.web.form.submitYn=false;
		}
	}else{
		alert("거래가 진행중입니다.");
		return false;
	}
};//end of "jex.web.doSubmit"

/**
 * 
 */
jex.web.callSvc = function(act_id, json) {
    newform = "<div id='_jexSender'><form id='_jexSenderForm' name='_jexSenderForm' method='"+_this.attr("method")+"' type='"+_this.attr("type")+"' action='"+_this.attr("action")+"'><input type='text' name='_JSON_' value='"+JSON.stringify(json)+"'></form></div>";
    $(document.body).append(newform).hide();
    document._jexSenderForm.submit();
};


/**
 * 사용자 AJAX호출지원
 *
 * @param act_id : 액션id(필수)
 * @param json : json 입력값
 * @param fn : 콜백함수(필수)
 * @param type : act(default)/jct
 * @param asyncMode true:Async(default)
 *                  false:Sync
 * @param error	: 에러처리여부	true(default)/false
 * @param loadingbarYn : true(default)/false
 */
jex.web.Ajax = function(act_id, json, fn, type, asyncMode, error, loadingbarYn) {
	if (type==undefined||type==null) type="act";
	if (error==undefined||error==null) error=true;
	
	if(asyncMode==undefined || asyncMode)	asyncMode=true;
	else	asyncMode=false;
	
	act_id = act_id+"."+type;
	
	var tranData = "";
	//보안모듈을 사용할경우
	if(jex.web.isSecurityModule){
		tranData = _getXecureEnc(encodeURI(JSON.stringify(json)));
	}else{
		tranData = {"_JSON_":encodeURI(JSON.stringify(json))};
	}
	
	//로딩바여부 셋팅
	jQuery.ajaxSetup({
	    'loadingbarYn': (loadingbarYn==undefined||loadingbarYn)?true:false
	});
	
    jQuery.ajax({
        type:"POST",
        url:act_id,
        data:tranData,
        cache:false,
        async:asyncMode,
        success: function(msg) {
			jex.web.form.submitYn=false;
			var input;
			if (typeof(msg)=="string")
			{
				input = JSON.parse(msg);
				
				//세션이 끊겼을때 처리
				if(input.RESULT == "__SESSION_ERROR")
				{
					var errTarPath = "sessionErrorMain.act";
					try{
						parent.location.href = errTarPath;
					}catch(e){
						window.location.href = errTarPath;
					}
					return;
				}
			}
			else input = msg;
			if (error){
				if (jex.web.isError(input)) jex.web.err(input);
			}
			if (!error || !jex.web.isError(input)) if(fn) fn(input);
        }
	});
};

function _UserAgent()
{
	return navigator.userAgent.substring(0,9);
}

function _IsNetscape()			// by Zhang
{
	if(navigator.appName == 'Netscape')
		return true ;
	else
		return false ;
}

function _IsNetscape60()			// by Zhang
{
	if(_IsNetscape() && _UserAgent() == 'Mozilla/5')
		return true ;
	else
		return false ;
}

function _getXecureEnc( str )
{
	var qs		= "";
	var path;
	var cipher;
	var result	= {};

	var gIsContinue=0;
	var busy_info = "암호화 작업이 진행중입니다. 확인을 누르시고 잠시 기다려 주십시오."

	// encrypt QueryString of action field
	if( gIsContinue == 0 ) {
		gIsContinue = 1;
		if( _IsNetscape60() )		// Netscape 6.0
			cipher = document.XecureWeb.nsIXecurePluginInstance.BlockEnc(xgate_addr, path, XecureEscape(qs),"GET");			
		else {
			cipher = document.XecureWeb.BlockEnc(xgate_addr, path, XecureEscape(qs),"GET");
		}
		gIsContinue = 0;
	}
	else {
		alert(busy_info);
		return result;
	}		


	if( cipher == "" )	return result;

	result['q'] = cipher;
	
	posting_data = "_JSON_="+str;

	if( gIsContinue == 0 ) {
		gIsContinue = 1;
		if( IsNetscape60() )		// Netscape 6.0
			cipher = document.XecureWeb.nsIXecurePluginInstance.BlockEnc ( xgate_addr, path, XecureEscape(posting_data), "POST" );
		else{
			cipher = document.XecureWeb.BlockEnc ( xgate_addr, path, XecureEscape(posting_data), "POST" );
		}
		gIsContinue = 0;
	}
	else {
		alert(busy_info);
		return false;
	}		
		
	if( cipher == "" )	return result;
	
	result['p'] = cipher;
		
	return result;
}

/**
 * AJAX실행
 * @param _this
 * @return
 */
function _trxAjax(_this) {
	
	var textareaList = _this.find("textarea");
    var inputList   = _this.find("input");
    var selectList  = _this.find("select");
    var json        = {};
    var callback	= _this.attr("callback");
    
    $.each(textareaList, function() {
    	var name    = $(this).attr("name");
        var value   = $(this).val();
        if (name!=null&&name!=""&&name!=undefined) json[name] = (value==null||value==undefined)?"":value;
    });
    
    $.each(inputList, function() {
        var name    = $(this).attr("name");
        var value   = $(this).val();
        
        if($(this).attr("jexdatatype")=="item")
        {
        	return true;//==continue;
        }
        else if( $(this).attr("type")=="button" )
        {
        	return true;//==continue;
        }
        else if( $(this).attr("type")=="checkbox")
        {
        	//체크되어있지 않으면 넘어감.
        	if(	!$(this).attr("checked")	)	return true;//==continue;
        	
        	//체크박스에 recordId속성이 있으면
        	//반복부로 구성한다.
        	if( $(this).attr("recordId") )
        	{
        		if( !json[$(this).attr("recordId")] )	
        		{
        			json[$(this).attr("recordId")] = [];
        		}
        		checkboxRec = {};
        		checkboxRec[name]=value;
        		
        		json[$(this).attr("recordId")].push(checkboxRec);
        	}
        	else
        	{
        		if (name!=null&&name!=""&&name!=undefined) json[name] = (value==null||value==undefined)?"":value;
        	}
        }
        else if( $(this).attr("type")=="radio")
        {
        	if(	!$(this).attr("checked")	)	return true;//==continue;
        	if (name!=null&&name!=""&&name!=undefined) json[name] = (value==null||value==undefined)?"":value;
        }
        else
        {
        	if (name!=null&&name!=""&&name!=undefined) json[name] = (value==null||value==undefined)?"":value;
        }
    });
    
    $.each(selectList, function() {
        var name    = $(this).attr("name");
        var value   = $(this).find("option:selected").val();
        
        //multiple 일때는 옵션항목이 record로 올라간다.
        if($(this).attr("type")=="select-multiple")
        {
        	var recordId =$(this).attr("recordId"); 
    		if( !json[recordId] )	
    		{
    			json[recordId] = [];
    		}
    		
        	$.each($(this).children(), function(i,v){
        		var selectRec = {};
        		selectRec[name] = $(v).val();
        		
        		json[recordId].push(selectRec);
        	});
        }
        else
        {
        	if (name!=null&&name!=""&&name!=undefined) json[name] = (value==null||value==undefined)?"":value;
        }
    });

    //List 처리
    var list = $(_this).find("[jexdatatype='list']");
    $.each(list, function(i,v) {
        var g_key   = $(this).attr("id");
        var g_array = [];
        var row     = $(this).find("[jexdatatype='row']");
        $.each(row, function() {
            var itm     = $(this).find("[jexdatatype='item']");
            var itmjson = {};
            var procRadioName = "";//이미 셋팅한 라디오인지 확인하기 위한 변수
            $.each(itm, function(i,v) {
            	
            	//radio
            	//	radio는 name 이 같은 항목들중에 check 된 항목의 value로 셋팅한다.
            	if($(this).attr("type")=="radio")
            	{
            		//이미 값을 셋팅한 라디오명이면 continue;
            		if(procRadioName==$(this).attr("name"))
            		{
            			return true;//==continue;
            		}
            		procRadioName=$(this).attr("name");
            		itmjson[$(this).attr("id")] = jex.web.null2void($(":radio[name="+$(this).attr("name")+"][checked=true]").val());
            	}
            	//checkbox
            	else if($(this).attr("type")=="checkbox")
            	{
            		if($(this).attr("checked"))
            			itmjson[$(this).attr("id")] = $(this).val();
            		else
            			itmjson[$(this).attr("id")] = "";
            	}
            	//select box
            	else if($(this).find("option:selected").val() != undefined){
            		itmjson[$(this).attr("id")] = $(this).find("option:selected").val();
            	}
            	//기타
            	else if($(this).val()==""){
            		itmjson[$(this).attr("id")] = $(this).text();
            	}
            	//text box
            	else{
            		itmjson[$(this).attr("id")] = $(this).val();
            	}
            });
            g_array.push(itmjson);
        });
        json[g_key] = g_array;
    });
//alert(JSON.stringify(json));
    // 전송처리
    var act_id_parse= _this.attr("action").split(".");
    var jct			= "";
    
    for (var i=0; i<act_id_parse.length-1;i++) {
    	jct = jct+act_id_parse[i];
    	if (i!=act_id_parse.length-2) jct=jct+".";
    }
    jex.web.Ajax(jct,json, function(dat) {
    	var fn	= callback +"(" + JSON.stringify(dat) + ");";
    	var ret = eval(fn);
    },"jct", true, _this.attr("errorProc")!='false'?true:false);
    
    return false;
}


/**
 * JSON 으로 SUBMIT실행
 * @param _this
 * @return
 */
function _trxSubmit(_this, opt) {
	var textareaList = _this.find("textarea");
    var inputList   = _this.find("input");
    var selectList  = _this.find("select");
    var json        = {};
    var checkboxRec = {};//체크박스를 레코드로 구성하기위한 변수(20100825추가)

    $.each(textareaList, function() {
    	var name    = $(this).attr("name");
        var value   = $(this).val();
        if (name!=null&&name!=""&&name!=undefined) json[name] = (value==null||value==undefined)?"":value;
    });
    
    $.each(inputList, function() {
        var name    = $(this).attr("name");
        var value   = $(this).val();
        
//        if($(this).attr("type")=="checkbox")       alert(name+"::"+value+"::"+$(this).attr("type")+"::"+$(this).attr("checked"));
        
        if($(this).attr("jexdatatype")=="item")
        {
        	return true;//==continue;
        }
        else if( $(this).attr("type")=="button" )
        {
        	return true;//==continue;
        }
        else if( $(this).attr("type")=="checkbox")
        {
        	//체크되어있지 않으면 넘어감.
        	if(	!$(this).attr("checked")	)	return true;//==continue;
        	
        	//체크박스에 recordId속성이 있으면
        	//반복부로 구성한다.
        	if( $(this).attr("recordId") )
        	{
        		if( !json[$(this).attr("recordId")] )	
        		{
        			json[$(this).attr("recordId")] = [];
        		}
        		checkboxRec = {};
        		checkboxRec[name]=value;
        		
        		json[$(this).attr("recordId")].push(checkboxRec);
        	}
        	else
        	{
        		if (name!=null&&name!=""&&name!=undefined) json[name] = (value==null||value==undefined)?"":value;
        	}
        }
        else if( $(this).attr("type")=="radio")
        {
        	if(	!$(this).attr("checked")	)	return true;//==continue;
        	if (name!=null&&name!=""&&name!=undefined) json[name] = (value==null||value==undefined)?"":value;
        }
        else
        {
        	if (name!=null&&name!=""&&name!=undefined) json[name] = (value==null||value==undefined)?"":value;
        }
    });
    
    $.each(selectList, function() {
        var name    = $(this).attr("name");
        var value   = $(this).find("option:selected").val();
        
        //multiple 일때는 옵션항목이 record로 올라간다.
        if($(this).attr("type")=="select-multiple")
        {
        	var recordId =$(this).attr("recordId"); 
    		if( !json[recordId] )	
    		{
    			json[recordId] = [];
    		}
    		
        	$.each($(this).children(), function(i,v){
        		var selectRec = {};
        		selectRec[name] = $(v).val();
        		
        		json[recordId].push(selectRec);
        	});
        }
        else
        {
        	if (name!=null&&name!=""&&name!=undefined) json[name] = (value==null||value==undefined)?"":value;
        }
    });

    //List 처리
    var list = _this.find("[jexdatatype='list']");
    $.each(list, function(i,v) {
        var g_key   = $(this).attr("id");
        var g_array = [];
        var row     = $(this).find("[jexdatatype='row']");
        $.each(row, function() {
            var itm     = $(this).find("[jexdatatype='item']");
            var itmjson = {};
            var procRadioName = "";//이미 셋팅한 라디오인지 확인하기 위한 변수
            $.each(itm, function(i,v) {
            	//radio
            	//	radio는 name 이 같은 항목들중에 check 된 항목의 value로 셋팅한다.
            	if($(this).attr("type")=="radio")
            	{
            		//이미 값을 셋팅한 라디오명이면 continue;
            		if(procRadioName==$(this).attr("name"))
            		{
            			return true;//==continue;
            		}
            		procRadioName=$(this).attr("name");
            		itmjson[$(this).attr("id")] = jex.web.null2void($(":radio[name="+$(this).attr("name")+"][checked=true]").val());
            	}
            	//checkbox
            	else if($(this).attr("type")=="checkbox")
            	{
            		if($(this).attr("checked"))
            			itmjson[$(this).attr("id")] = $(this).val();
            		else
            			itmjson[$(this).attr("id")] = "";
            	}
            	//select box
            	else if($(this).find("option:selected").val() != undefined){
            		itmjson[$(this).attr("id")] = $(this).find("option:selected").val();
            	}
            	//기타
            	else if($(this).val()==""){
            		itmjson[$(this).attr("id")] = $(this).text();
            	}
            	//text box
            	else{
            		itmjson[$(this).attr("id")] = $(this).val();
            	}
            });
            g_array.push(itmjson);
        });
        json[g_key] = g_array;
    });
//    alert(JSON.stringify(json));
    // 전송처리
    newform = "<div id='_jexSender' style='display:none;overflow:hidden:height:0;line-height:0;border:0;margin:0;'><form id='_jexSenderForm' name='_jexSenderForm' method='"+_this.attr("method")+"' target='"+_this.attr("target")+"' type='"+_this.attr("type")+"' action='"+_this.attr("action")+"'><input type='text' name='_JSON_' value='"+JSON.stringify(json)+"'></form></div>";
    $(document.body).append(newform);//.hide();
   
	/*
	 * 새창 으로 From을 보내기 위한 Option을 처리한다.
	 */
	if (opt!=undefined&&opt!=null&&opt!=""&&opt.target!=undefined&&opt.target!=null&&opt.target!="") {
		var	sizeW = Number(opt.sizeW) + 25;	
		var	sizeH = Number(opt.sizeH);
		var nLeft = screen.width/2 - sizeW/2 ;
		var nTop  = screen.height/2- sizeH/2 ;
		var option= ",toolbar=no,menubar=no,location=no,scrollbars=yes,status=no";
		var winObj= window.open('', opt.target, "left=" + nLeft + ",top=" +  nTop + ",width=" + sizeW + ",height=" + sizeH  + option );
		winObj.blur();//크롭에서 focus()만 호출할경우 작동하지 않아서 blur()를 먼저 호출한후 focus()호출하도록 수정함.
		winObj.focus();//팝업이 이미 열려있는경우 앞으로 나오도록 한다.
		$("#_jexSenderForm").attr("method", "post");
		$("#_jexSenderForm").attr("target", opt.target);
		if (opt.action!=null && opt.action!=undefined && opt.action != "")  $("#_jexSenderForm").attr("action", opt.action);
		jex.web.form.submitYn=false;
	}
	
	//보안모듈을 사용할경우
	if(jex.web.isSecurityModule)
	{
		//xecureweb 보안모듈의 submit
		XecureSubmit(document._jexSenderForm);
	}
	else
	{
		//$("#"+formId).submit(); => 이 방식으로 submit 하면
		//$("#"+formId).submit(function(){}); => 에서 이벤트가 잡히기 때문에
		//아래처럼 submit을 실행한다.
	    document._jexSenderForm.submit();
	}
    
    jex.web.form.submitYn=false;
    
    $("#_jexSender").remove();
    return false;
//    return false;
}

/**
 * form validation을 체크하는 함수
 * @formId : 체크할 form의 id
 */
jex.web.form._bfCheckboxName = "";
jex.web.form._bfRadioName = "";
jex.web.form._thisInput;
jex.web.checkForm = function(formId){
	
	var selector = "#"+formId;
	
	jex.web.form.errorYn=false;
	jex.web.form._bfCheckboxName = "";
	jex.web.form._bfRadioName = "";
	
	//텍스트 박스 검증
	if(!jex.web.form.errorYn)
	{
		$.each($(selector).find("input:text"), function(i, v){
			if(jex.web.form.errorYn) return false;
			jex.web.form._thisInput = $(this);

			//validation 체크 함수만큼 loop 처리한다.
			$.each(jex.web.form.check, function(i,v){
				if(typeof v=='function'){
					if( !v( jex.web.form._thisInput ) ){
						$(jex.web.form._thisInput).focus();
						return false;
					}
				}
			});
		});
	}
	
	//hidden검증
	if(!jex.web.form.errorYn)
	{
		$.each($(selector).find("input:hidden"), function(i, v){
			if(jex.web.form.errorYn) return false;
			jex.web.form._thisInput = $(this);

			//validation 체크 함수만큼 loop 처리한다.
			$.each(jex.web.form.check, function(i,v){
				if(typeof v=='function'){
					if( !v( jex.web.form._thisInput ) ){
						$(jex.web.form._thisInput).focus();
						return false;
					}
				}
			});
		});
	}
	
	//selectbox 검증
	if(!jex.web.form.errorYn)
	{
		$.each($(selector).find("select"), function(i, v){
			if(jex.web.form.errorYn) return false;
			
			jex.web.form._thisInput = $(this);
			
			if( !jex.web.form.check.isNotnull( jex.web.form._thisInput ) ){
				$(jex.web.form._thisInput).focus();
				return false;
			}
		});
	}
	
	//password 검증
	if(!jex.web.form.errorYn)
	{
		$.each($(selector).find("input:password"), function(i, v){
			if(jex.web.form.errorYn) return false;
			jex.web.form._thisInput = $(this);

			//validation 체크 함수만큼 loop 처리한다.
			$.each(jex.web.form.check, function(i,v){
				if(typeof v=='function'){
					if( !v( jex.web.form._thisInput ) ){
						$(jex.web.form._thisInput).focus();
						return false;
					}
				}
			});
		});
	}
	
	//checkbox 검증
	if(!jex.web.form.errorYn)
	{
		$.each($(selector).find("input:checkbox"), function(i, v){
			if(jex.web.form.errorYn) return false;
			jex.web.form._thisInput = $(this);

			if( jex.web.form._bfCheckboxName != $(jex.web.form._thisInput).attr("name") ){
				jex.web.form._bfCheckboxName = $(jex.web.form._thisInput).attr("name");
				if( !jex.web.form.check.isNotnull( jex.web.form._thisInput ) ){
					$(jex.web.form._thisInput).focus();
					return false;
				}
			}
		});	
	}
	
	//radio 검증
	if(!jex.web.form.errorYn)
	{
		$.each($(selector).find("input:radio"), function(i, v){
			if(jex.web.form.errorYn) return false;
			jex.web.form._thisInput = $(this);
			
			if( jex.web.form._bfRadioName != $(jex.web.form._thisInput).attr("name") ){
				jex.web.form._bfRadioName = $(jex.web.form._thisInput).attr("name");
				if( !jex.web.form.check.isNotnull( jex.web.form._thisInput ) ){
					$(jex.web.form._thisInput).focus();
					return false;
				}
			}
		});
	}
	
	//textarea 검증
	if(!jex.web.form.errorYn)
	{
		$.each($(selector).find("textarea"), function(i, v){
			if(jex.web.form.errorYn) return false;
			jex.web.form._thisInput = $(this);
			
			//validation 체크 함수만큼 loop 처리한다.
			$.each(jex.web.form.check, function(i,v){
				if(typeof v=='function'){
					if( !v( jex.web.form._thisInput ) ){
						$(jex.web.form._thisInput).focus();
						return false;
					}
				}
			});
		});
	}
	
	//조회시작 종료일자 검증
	if(!jex.web.form.errorYn)
	{
		var jexCalendar = $(selector).find("[id=jex.selectCalendar]");
		if( jexCalendar.length == 2 )
		{
			var stDt = $($(jexCalendar[0]).find("select")[0]).val()
						+$($(jexCalendar[0]).find("select")[1]).val()
						+$($(jexCalendar[0]).find("select")[2]).val();

			var endDt = $($(jexCalendar[1]).find("select")[0]).val()
						+$($(jexCalendar[1]).find("select")[1]).val()
						+$($(jexCalendar[1]).find("select")[2]).val();
			
			if( stDt > endDt )
			{
				alert("조회시작일이 조회종료일보다 큽니다.");
				$($(jexCalendar[0]).find("select")[0]).focus();
				jex.web.form.errorYn=true;
				return false;
			}
			
			var currentDate = new Date();
			var currentDate = currentDate.getFullYear()+ "" 
							+ ( currentDate.getMonth()+1 < 10?"0"+(currentDate.getMonth()+1):(currentDate.getMonth()+1))+ ""
							+ ( currentDate.getDate() < 10?"0"+currentDate.getDate():currentDate.getDate());
			
			if( endDt > currentDate )
			{
				alert("영업일 이후로는 조회가 불가능합니다.");
				$($(jexCalendar[1]).find("select")[0]).focus();
				jex.web.form.errorYn=true;
				return false;
			}
		}
	}
	
	if(jex.web.form.errorYn) return false;
	else return true;
};//end of "jex.web.checkForm" 
