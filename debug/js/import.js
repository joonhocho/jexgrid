
var rderp;
if(!rderp) rderp={};



if(!rderp.grid) rderp.grid={};

if(typeof(rderp.common) == "undefined") {
	document.write('<script type="text/javascript" src="rderp_common.js"></script>');
}

/**************************************************
 * ±×¸®μa °øAe ¿E¼C ¼AÆA
 *************************************************/
rderp.grid.getDefaultOptions = function(sortId) {
	return {
		width: "100%",
//		cssGrid: "hahahah",
		border: "1px solid #999",
		font: "12px",
//		footerEnabled: true,
//		EditManager: {},
		ColHeader: {
			reorderEnabled: true,
			reorderSyncEnabled:true,
			background: "#dde4ec repeat-x center bottom",
// 			sortBackground:"img/jexgrid/sort.png",
// 			sortBackgroundAsc:"img/jexgrid/sort-asc.png",
// 			sortBackgroundDesc:"img/jexgrid/sort-desc.png",	
			classColHeader  : "grid-colHeader",
			resizeHandleBackground: "",
			font: "12px"
//			headerStyle: "padding : 1px, 5px, 5px, 1px; border-bottom: 1px solid silver; color : #637b97;"
		},
		ColDefManager: {
			colDef: {
				resizable: true,
				width: 100
			}
		},
		ViewportManager: {
			rowsPerPage: 20,
			rowH: 20,
			autoColWEnabled: false,
	        evenOddRows: true
		},
//		DataManager: {
//			idColKeys:[sortId]
//		},
		SelectionManager:{
			//bgColorSelection:"red"			
		}
//		Footer:{}
	};
};


/*******************************************************************************
 * jex_web.js
 * 
 * 문서의 input tag에 jex_web.js에서 정의한 Attribute를 포함시킬경우 해당 form에
 * CSS적용(notnull='true' 로 지정된 폼) 및 Form이 Submit 될때 validation을 체크한다.
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
 * - maxLength='숫자형식의길이'	: 해당항목 입력값의 길이가 value 보다 크면 오류
 * - format='date'				: 8자리 형식의 날짜포맷- yyyy:mm:dd 등의 yyyy,mm,dd 가 포함되어 있는 형식이면 모두 허용함
 *                                정상적인 날짜가 아닐경우 오류
 * - format='submit'            : form 하위 엘리먼트에 이 Attribute 를 지정하면 <input type='submit'>을 클릭한것과 동일한 이벤트처리가된다.
 * - format='number'            : +/-를 포함한 숫자만 입력가능(submit시 체크)
 * - format='number2'           : input에 (0~9)숫자만 입력할수있다.(입력시 체크해서 막음)
 * - format='number3'           : input에 (0~9)숫자만 입력할수있다.(입력시 체크해서 막음)
 * - format='engNum'            : 숫자와 영문자만 입력가능
 * - format='engNum2'           : 숫자와 영문자 하이픈(-) 입력만 입력가능
 * - format='resRegNo1'         : 주민등록번호 앞자리 검사. 자릿수(6자리)와 숫자여부만 검사한다.
 * - format='resRegNo2'         : 주민등록번호 뒷자리 검사. 자릿수(7자리)와 숫자여부만 검사한다.
 * - format='resRegNo'          : 주민등록번호 검사. 자릿수(13자리)와 숫자여부만 검사한다.
 * - format='currency'          : ','와 '.'을 포함한 금액형식인지 검사한다.(.이 두개이거나 숫자가 아닌값이 있거나 하면 오류)
 * - format='accountNo'         : 계좌번호검사. 숫자입력만 허용함
 * - format='accountNo2'		: 계좌번호검사. 숫자와 하이픈(-) 입력만 허용함
 *                                
 ************************************************************/

var jex;
var _jex_debugMod = false;
var _jex_isMobile = false;

if (!jex)
	jex = {};
if (!jex.web)
	jex.web = {};
jex.web.testMode = false;// 업무 서버에 올릴땐 false 로 지정해야함
jex.web.isSecurityModule = false;// 보안모듈 사용여부:보안모듈에서 사용하는 서브밋 함수가 있을경우 true하고
									// 해당 부분을 수정해야함
jex.web.format = {};
jex.web.form = {
	errorYn : false // validation 오류여부
	,
	submitYn : false
}; // submit 진행중 여부
jex.web.form.event = {};
jex.web.form.check = {};

jQuery.ajaxSetup( {
	'beforeSend' : function(xhr) {
		xhr.setRequestHeader("charset", "utf-8");
	}
});

jex.web.isMobile = function() {
    var agent = navigator.userAgent.toLowerCase();
    if (agent.indexOf('iphone') != -1 || agent.indexOf('android') != -1) _jex_isMobile = true;
    return _jex_isMobile;
};

/**
 * 필수입력항목의 null 체크 Attribute : notnull='true'
 */
jex.web.form.check.isNotnull = function(selector) {
	if (jex.web.null2void($(selector).attr("notnull")).toLowerCase() == 'true') {
		// checkbox
		if ($(selector).attr("type") == "checkbox") {
			var _checkboxGroup = $(":checkbox[name*='"
					+ $(selector).attr("name") + "']:checked");

			if (_checkboxGroup.length < 1) {
				jex.web.alert("[" + $(selector).attr("fieldName")
						+ "] 항목은 한개 이상 선택해주세요.");
				jex.web.form.errorYn = true;
				return false;
			}
		}
		// radio
		else if ($(selector).attr("type") == "radio") {
			if ($(":radio[name*='" + $(selector).attr("name") + "']:checked").length < 1) {
				jex.web.alert("[" + $(selector).attr("fieldName")
						+ "] 항목은 필수 선택 사항입니다.");
				jex.web.form.errorYn = true;
				return false;
			}
		}
		// selectbox
		else if ($(selector).attr("nodeName") == "SELECT") {
			if (!$(selector).find("option:selected").val()) {
				jex.web.alert("[" + $(selector).attr("fieldName")
						+ "] 항목을 선택해주세요.");
				jex.web.form.errorYn = true;
				return false;
			}
		} else {
			if (!$(selector).val()) {
				jex.web.alert("[" + $(selector).attr("fieldName")
						+ "] 항목은 필수 입력입니다.");
				jex.web.form.errorYn = true;
				return false;
			}
		}
	}
	return true;
};

/**
 * 최소길이체크 Attribute : minLength='길이'
 */
jex.web.form.check.isMinLength = function(selector) {
	if ($(selector).attr("minLength") == undefined)
		return true;
	// if( $(selector).attr("minLength")=="" ) return true;
	var minLength = parseInt($(selector).attr("minLength"));
	if (isNaN(minLength))
		return true;
	if ($(selector).val().length < minLength) {
		alert("[" + $(selector).attr("fieldName") + "] 항목은 " + minLength
				+ "자 이상 입력해주세요.");
		jex.web.form.errorYn = true;
		return false;
	}
	return true;
};



/**
 * 최대길이체크 Attribute : maxLength='길이'
 */
jex.web.form.check.isMaxLength = function(selector) {
	if ($(selector).attr("maxLengths") == undefined)
		return true;
	// if( $(selector).attr("minLength")=="" ) return true;
	var maxLength = parseInt($(selector).attr("maxLengths"));
	if (isNaN(maxLength))
		return true;
	var str =  $(selector).val();
	var sByte = 0;
	var sLen = 0;
	var sChar = "";

	for(var i = 0;i < str.length;i++ ){

		sChar = escape(str.charAt(i));
		if(sChar == null){
			sLen = 0;
		}else{
			if ( sChar.length == 1 ) { // when English then 1byte
				sLen = 1;
			} else if ( sChar.indexOf("%u") != -1 ) { // when Korean then 2byte
				sLen = 2;
			} else if ( sChar.indexOf("%") != -1 ) { // else 3byte
				sLen = sChar.length/3;
			}
		}
		sByte = eval(sByte) + sLen;
	}				
	if (sByte > maxLength) {
		alert("[" + $(selector).attr("fieldName") + "] 항목은 " + maxLength
				+ "자 이하로 입력해주세요.");
		jex.web.form.errorYn = true;
		return false;
	}
	return true;
};

/**
 * 포멧체크 Attribute : format
 */
jex.web.form.check.isFormat = function(selector) {
	// alert($(selector).attr("id"));
	var checkValue = $(selector).val();

	// format attribete가 지정되어있어도 notnull이 아닐수도 있기때문에
	// 값이 있는경우만 체크한다.
	if (checkValue != null && checkValue != undefined && checkValue.length > 0) {
		switch (jex.web.null2void($(selector).attr("format")).toLowerCase()) {
		// 날짜검증
		case "date":
			var result = jex.web.format.checkDate(checkValue);

			if (result) {
				alert("[" + $(selector).attr("fieldName") + "] 항목의 " + result);
				jex.web.form.errorYn = true;
				return false;
			}
			break;

		// 숫자검증: +/-를 포함한 숫자입력값
		case "number":
			if (isNaN(new Number(checkValue))) {
				alert("[" + $(selector).attr("fieldName")
						+ "] 항목에는 숫자만 입력해주세요.");
				jex.web.form.errorYn = true;
				return false;
			}
			break;

		// 영문숫자검증
		case "engnum":
			if (/[^a-zA-z0-9]/.test(checkValue)) {
				alert("[" + $(selector).attr("fieldName")
						+ "] 항목에는 영문 또는 숫자만 입력해주세요.");
				jex.web.form.errorYn = true;
				return false;
			}
			break;

		// 영문숫자'-'검증
		case "engnum2":
			if (/[^a-zA-z0-9]/.test(checkValue.replace(/\-/g, ""))) {
				alert("[" + $(selector).attr("fieldName")
						+ "] 항목에는 영문 또는 숫자 또는 하이픈(-)만 입력해주세요.");
				jex.web.form.errorYn = true;
				return false;
			}
			break;
		// 금액검증
		case "currency":
			checkValue = checkValue.replace(/,/g, '');
			if (isNaN(new Number(checkValue))) {
				alert("[" + $(selector).attr("fieldName")
						+ "] 항목은 금액형식으로 입력해주세요.");
				jex.web.form.errorYn = true;
				return false;
			}
			break;

		// 계좌번호검증 : 숫자만 허용한다.
		case "accountno":
			if (/[^0-9]/.test(checkValue)) {
				alert("[" + $(selector).attr("fieldName")
						+ "] 항목에는 숫자만 입력해주세요.");
				jex.web.form.errorYn = true;
				return false;
			}
			break;

		// 계좌번호검증 : 숫자,하이픈(-)만 허용한다
		case "accountno2":
			if (/[^0-9]/.test(checkValue.replace(/\-/g, ""))) {
				alert("[" + $(selector).attr("fieldName")
						+ "] 항목에는 숫자 또는 하이픈(-)만 입력해주세요.");
				jex.web.form.errorYn = true;
				return false;
			}
			break;

		// 주민등록번호 앞자리: 자릿수(6자리) 및 숫자여부만 검사한다.
		case "resregno1":
			if (/[^0-9]/.test(checkValue) || checkValue.length != 6) {
				alert("[" + $(selector).attr("fieldName")
						+ "] 항목에는 6자리의 숫자만 입력해주세요.");
				jex.web.form.errorYn = true;
				return false;
			}
			break;

		// 주민등록번호 뒷자리: 자릿수(7자리) 및 숫자여부만 검사한다.
		case "resregno2":
			if (/[^0-9]/.test(checkValue) || checkValue.length != 7) {
				alert("[" + $(selector).attr("fieldName")
						+ "] 항목에는 7자리의 숫자만 입력해주세요.");
				jex.web.form.errorYn = true;
				return false;
			}
			break;

		// 주민등록번호: 자릿수(13자리) 및 숫자여부만 검사한다.
		case "resregno":
			if (/[^0-9]/.test(checkValue) || checkValue.length != 13) {
				alert("[" + $(selector).attr("fieldName")
						+ "] 항목에는 13자리의 숫자만 입력해주세요.");
				jex.web.form.errorYn = true;
				return false;
			}
			break;
		}// end of switch
		
	}
	return true;
};

// 날짜포맷검증
jex.web.format.checkDate = function(param) {
	if (param)
		param = $.trim(param);
	if (/[^0-9~!@\#$%<>^&*\()\-=+._\'\:\/]/gi.test(param))
		return "날짜를 확인해주세요. 날짜형식이 잘못되었습니다.";

	var inputDate = jex.web.null2void(param).replace(/[^0-9]/g, '');
//alert(inputDate);
	if (inputDate.length == 0)
		return false;
	if (inputDate.length != 8)
		return "날짜를 확인해주세요. 날짜형식이 잘못되었습니다.";

	var yyyy = inputDate.substring(0, 4);
	var mm = inputDate.substring(4, 6);
	var dd = inputDate.substring(6, 8);

	var date = new Date(yyyy, mm - 1, dd);
	var fullYear = date.getFullYear();
	var month = date.getMonth() + 1;
	if (String(month).length == 1)
		month = "0" + String(month);
	var day = date.getDate();
	if (String(day).length == 1)
		day = "0" + String(day);
	if (inputDate != (String(fullYear) + String(month) + String(day)))
		return "날짜를 확인해주세요. 정상적인 날짜가 아닙니다.";
};

/**
 * setCSS(selector) : 해당 input에 css를 적용함
 * 
 * @param1 : input Selector
 * @param2 : css class 명
 */
jex.web.form.setCss = function(selector, cssClass) {
	// $(selector).css({"background":"#E9EDFE", "border":"1px #E8001D solid"});
	$(selector).attr("class", cssClass);
};

/**
 * 지정된 selected 박스의 일자를 입력된 년/월에 해당하는 일자로 갱신한다.
 */
jex.web.form.event.replaceSelectDd = function(selector, year, month) {
	$(selector).children().remove();

	var lastDate = jex.web.getLastDate(year, month);

	var value = "";
	for ( var i = 1; i <= lastDate; i++) {
		value = String(i).length == 1 ? "0" + String(i) : i;
		$(selector).append(
				"<option value='" + value + "'>" + value + "</option>");
	}
};

$(document)
		.ready(
				function() {

					$(document.body)
							.append(
									"<div style='position:absolute;top:30%;left:30%;' id='_Jex_loadingbar'><img src='img/comm/etc/loading.gif' alt='잠시만 기다려주세요.'/></div>");
					$("#_Jex_loadingbar").hide();
					
					if (!jex.web.isMobile()) {
						$(document).ajaxSend(function() {
							$("#_Jex_loadingbar").show();
						});
						$(document).ajaxSuccess(function() {
							$("#_Jex_loadingbar").fadeOut("slow");
						});
					}

					var formList = $("form");
					var form;
					$
							.each(formList, function(i, v) {
								form = $(this);

								// form 에 CSS
								// 적용--------------------------------------
									// form 의 "css" Attribute 가 "true" 로 설정된 폼만
									// 적용한다.
									if (jex.web.null2void($(this).attr("css"))
											.toLowerCase() == 'true') {
										// 텍스트박스 css 적용
										var textList = $(this).find(":text");
										$
												.each(
														textList,
														function(i, v) {
															if (jex.web
																	.null2void(
																			$(
																					this)
																					.attr(
																							"notnull"))
																	.toLowerCase() == 'true'
																	|| jex.web
																			.null2void($(
																					this)
																					.attr(
																							"minLength")) != "") {
																jex.web.form
																		.setCss(
																				$(this),
																				$(
																						form)
																						.attr(
																								"cssClass"));
															}
														});

										// Password css 적용
										var textList = $(this)
												.find(":password");
										$
												.each(
														textList,
														function(i, v) {
															if (jex.web
																	.null2void(
																			$(
																					this)
																					.attr(
																							"notnull"))
																	.toLowerCase() == 'true'
																	|| jex.web
																			.null2void($(
																					this)
																					.attr(
																							"minLength")) != "") {
																jex.web.form
																		.setCss(
																				$(this),
																				$(
																						form)
																						.attr(
																								"cssClass"));
															}
														});

										// checkbox css 적용
										var checkList = $(this).find(
												":checkbox");
										$
												.each(
														checkList,
														function(i, v) {
															if (jex.web
																	.null2void(
																			$(
																					this)
																					.attr(
																							"notnull"))
																	.toLowerCase() == 'true') {
																jex.web.form
																		.setCss(
																				$(this),
																				$(
																						form)
																						.attr(
																								"cssClass"));
															}
														});

										// radio css 적용
										var checkList = $(this).find(":radio");
										$
												.each(
														checkList,
														function(i, v) {
															if (jex.web
																	.null2void(
																			$(
																					this)
																					.attr(
																							"notnull"))
																	.toLowerCase() == 'true') {
																jex.web.form
																		.setCss(
																				$(this),
																				$(
																						form)
																						.attr(
																								"cssClass"));
															}
														});

										// textarea css 적용
										var textareaList = $(this).find(
												"textarea");
										$
												.each(
														textareaList,
														function(i, v) {
															if (jex.web
																	.null2void(
																			$(
																					this)
																					.attr(
																							"notnull"))
																	.toLowerCase() == 'true'
																	|| jex.web
																			.null2void($(
																					this)
																					.attr(
																							"minLength")) != "") {
																jex.web.form
																		.setCss(
																				$(this),
																				$(
																						form)
																						.attr(
																								"cssClass"));
															}
														});
									}// CCS 적용 end

									// form submit 버튼
									// 이벤트처리------------------------------------------
									// <input type='submit'> 의 이벤트 발생시 submit
									// 이벤트를 잡아 수행한다.
									// form 의 "autocheck" Attribute 가 "true" 로
									// 설정된 폼은 validation 체크를 수행한뒤
									// 정상일 경우만 submit 처리 한다.
									$(this)
											.submit(
													function() {
														if (jex.web
																.null2void(
																		$(this)
																				.attr(
																						"autocheck"))
																.toLowerCase() == 'true') {
															if (!jex.web
																	.doSubmit(
																			$(
																					this)
																					.attr(
																							"id"),
																			true)) {
																return false;
															}
														} else {
															return jex.web
																	.doSubmit(
																			$(
																					this)
																					.attr(
																							"id"),
																			false);
														}
													});

									// form 하위의 모든엘리먼트중에서
									// ----------------------------------------
									// format 이 submit 으로 지정된 엘리먼트의 클릭이벤트가 발생하면
									// submit을 실행함.
									// form 의 "autocheck" Attribute 가 "true" 로
									// 설정된 폼은 validation 체크를 수행한뒤
									// 정상일 경우만 submit 처리 한다.
									$
											.each(
													$(this).find("*"),
													function(i2, v2) {
														if (jex.web
																.null2void(
																		$(this)
																				.attr(
																						"format"))
																.toLowerCase() == "submit") {
															$(this)
																	.click(
																			function() {
																				if (jex.web
																						.null2void(
																								$(
																										form)
																										.attr(
																												"autocheck"))
																						.toLowerCase() == 'true') {
																					jex.web
																							.doSubmit(
																									$(
																											form)
																											.attr(
																													"id"),
																									true);
																				} else {
																					jex.web
																							.doSubmit(
																									$(
																											form)
																											.attr(
																													"id"),
																									false);
																				}
																			});
														}
													});

								});// end of "$.each(formList, function(i,v)"

					/**
					 * type='svc'로 지정된 select element 를 찾아 해당 웹서비스 호출결과로 option
					 * element 를 셋팅한다.
					 */
					var selectboxList = $("select[type='svc']");
					$.each(selectboxList, function(i, v) {
						var svc = $(this).attr("svc");// 웹서비스ID
							var input = $(this).attr("input");// 입력값
							var selectedValue = $(this).attr("selectedValue");// selectbox의
																				// 기본
																				// 선택값
							// if(
							// !(selectedValue==undefined||selectedValue==null||selectedValue=='null')
							// ) selectedValue =
							// selectedValue.replace(/[^0-9]/g, "");

							// var selectbo= $(this);
							// var json = {};
							// if (jex.web.null2void(input) != "") eval("json =
							// "+input);
							// jex.web.Ajax(svc, json, function(dat) {
							// $.each(dat.REC, function(i,v) {
							// if( v.KEY==selectedValue )
							// selectbo.append("<option value='"+v.KEY+"'
							// selected>"+v.DAT+"</option>");
							// else selectbo.append("<option
							// value='"+v.KEY+"'>"+v.DAT+"</option>");
							// });
							// },"jct", "1");

							jex.web.setSelectBox(svc, input, selectedValue,
									$(this), null);

						}); // end of $.each(selectboxList, function(i,v)

					/**
					 * type='RADIO'로 지정된 DIV element 를 찾아 해당 웹서비스 호출결과로 INPUT
					 * element 를 셋팅한다.
					 */
					var radioBoxList = $("div[type='radio']");
					$.each(radioBoxList, function(i, v) {
						var svc = $(this).attr("svc");// 웹서비스ID
							var input = $(this).attr("input");// 입력값
							var radioNm = $(this).attr("radioNm");// 입력값
							var selectedValue = $(this).attr("selectedValue");// selectbox의
																				// 기본
																				// 선택값

							jex.web.setRadioBox(svc, input, selectedValue,
									$(this), null, radioNm);

						}); // end of $.each(selectboxList, function(i,v)

					/**
					 * type='jex.selectYearMonth'로 지정된 select box를 찾아 "yyyy년
					 * mm월" 셀렉트박스를 그린다.
					 */
					var selectYearMonth = $("select[type='jex.selectYearMonth']");
					if (selectYearMonth.length > 0) {
						var currentDate = jex.web.getServerDate("yyyymmdd");
						var currentYear = currentDate.substring(0, 4);
						var currentMonth = currentDate.substring(4, 6);
						var currentDay = currentDate.substring(6, 8);

						for ( var i = 0; i < 7; i++) {
							var beforDate = new Date(currentYear, currentMonth
									- 1 - i, currentDay);
							var beforYear = beforDate.getFullYear();
							var beforMonth = beforDate.getMonth() + 1 < 10 ? "0"
									+ (beforDate.getMonth() + 1)
									: (beforDate.getMonth() + 1);

							if (i == 0)
								$(selectYearMonth[0]).append(
										"<option value='" + beforYear
												+ beforMonth + "' selected>"
												+ beforYear + "년&nbsp;&nbsp;"
												+ beforMonth
												+ "월&nbsp;</option>");
							else
								$(selectYearMonth[0]).append(
										"<option value='" + beforYear
												+ beforMonth + "'>" + beforYear
												+ "년&nbsp;&nbsp;" + beforMonth
												+ "월&nbsp;</option>");
						}
					}

					/**
					 * span 이나 div의 id가 "jex.selectCalendar"로 지정된 "년/월/일 셀렉트박스를
					 * 각각 그린다
					 */
					var selectCalendars = $("[id=jex.selectCalendar]");
					if (selectCalendars.length > 0) {
						$.each(selectCalendars,
								function(i, v) {

									var selectHtml = _getSelectYyyy($(this)
											.attr("yearName"), $(this).attr(
											"startYear"))
											+ " 년 "
											+ _getSelectMm($(this).attr(
													"monthName"))
											+ " 월 "
											+ _getSelectDd($(this).attr(
													"dateName")) + " 일";

									$(this).html(selectHtml);

									if (jex.web.null2void($(this).attr(
											"defaultDate")).length > 0) {
										jex.web.setCalendar($(this).attr(
												"defaultDate"), i);
									}
								});
					}

					function _getSelectYyyy(name, startYear) {
						var currentYyyy = new Date().getFullYear();

						startYear = new Number(startYear);
						if (isNaN(startYear))
							startYear = currentYyyy - 10;

						var optionHtml = "";
						for ( var i = startYear; i <= currentYyyy; i++) {
							if (i == currentYyyy)
								optionHtml += "<option value='" + i
										+ "' selected>" + i + "</option>";
							else
								optionHtml += "<option value='" + i + "'>" + i
										+ "</option>";
						}
						return "<select id='jex.selectYyyy' name='"
								+ name
								+ "' onChange='jex.web.form.event.changeSelectCanendar(this)'>"
								+ optionHtml + "</select>";
					}

					function _getSelectMm(name) {
						var currentMm = new Date().getMonth();

						var optionHtml = "";
						var value = "";
						for ( var i = 1; i <= 12; i++) {
							value = String(i).length == 1 ? "0" + String(i) : i;
							if (i == currentMm + 1)
								optionHtml += "<option value='" + value
										+ "' selected>" + value + "</option>";
							else
								optionHtml += "<option value='" + value + "'>"
										+ value + "</option>";
						}
						return "<select id='jex.selectMm' name='"
								+ name
								+ "' onChange='jex.web.form.event.changeSelectCanendar(this)'>"
								+ optionHtml + "</select>";
					}

					function _getSelectDd(name) {
						var date = new Date();
						var currentDd = date.getDate();
						var lastDate = jex.web.getLastDate(date.getFullYear(),
								date.getMonth() + 1);

						var optionHtml = "";

						var value = "";
						for ( var i = 1; i <= lastDate; i++) {
							value = String(i).length == 1 ? "0" + String(i) : i;
							if (i == currentDd)
								optionHtml += "<option value='" + value
										+ "' selected>" + value + "</option>";
							else
								optionHtml += "<option value='" + value + "'>"
										+ value + "</option>";
						}
						return "<select id='jex.selectDd' name='" + name + "'>"
								+ optionHtml + "</select>";
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
//						if(navigator.userAgent.toLowerCase().indexOf("msie") != -1)
//						{
							$(v).attr("style", "ime-mode:disabled;"+$(v).attr("style"));
//						}
						$(this).keydown(function(event){
							//shift 키가 눌려있을땐 특수문자 입력 불가
							//백스페이스(8), delete(46), 방향키(37~40) 은 허용함
							//숫자가 아닌 입력값 입력 불가
							if(  event.shiftKey || 
								(   !(event.keyCode==8 || event.keyCode==9 || event.keyCode==46 || event.keyCode==109 || event.keyCode==189 || (event.keyCode>=37 && event.keyCode<=40) )
								&& !(event.keyCode>=48 && event.keyCode<=57) && !(event.keyCode>=96 && event.keyCode<=105) )
								)
							{
								event.returnValue=false;
								return false;
							}
						});
					});

					/**
					 * format=number3 로되어있는 input는 숫자만 입력할수있다. 
					 */
					$.each($("input[format=number3]"), function(i,v){
						//'한글'모드일때는 아래 처리를 무시하고  입력되기때문에 무시하기때문에 style에 다음 항목을 셋팅한다.
						//강제로 영어 모드로 전환시킨다.
//						if(navigator.userAgent.toLowerCase().indexOf("msie") != -1)
//						{
							$(v).attr("style", "ime-mode:disabled;"+$(v).attr("style"));
//						}
						$(this).keydown(function(event){
							//shift 키가 눌려있을땐 특수문자 입력 불가
							//백스페이스(8), delete(46), 방향키(37~40) 은 허용함
							//숫자가 아닌 입력값 입력 불가
							if(  event.shiftKey || 
								(   !(event.keyCode==8 || event.keyCode==9 || event.keyCode==46 || (event.keyCode>=37 && event.keyCode<=40) )
								&& !(event.keyCode>=48 && event.keyCode<=57) && !(event.keyCode>=96 && event.keyCode<=105))
								)
							{
								event.returnValue=false;
								return false;
							}
						});
					});

				});// end of "$(document).ready(function()"

// "yyyy년 mm월" 셀렉트박스 이벤트 처리
jex.web.form.event.changeSelectYearMonth = function(selector) {
	var selectVal = String($(selector).val());
	var currentDate = jex.web.getServerDate("yyyymmdd");

	var lastDate = "";
	if (selectVal == currentDate.substring(0, 6))
		lastDate = currentDate.substring(6, 8);
	else {
		lastDate = jex.web.getLastDate(selectVal.substring(0, 4), selectVal
				.substring(4, 6));
	}
	jex.web.setCalendar(selectVal + "01", 0);
	jex.web.setCalendar(selectVal + lastDate, 1);
};

// 년/월 셀렉트박스 이벤트
jex.web.form.event.changeSelectCanendar = function(selector) {
	var selectors = $("select[id=" + $(selector).attr("id") + "]");

	$.each(selectors, function(i, v) {
		if (this == selector) {
			var targetSelectBox = $("select[id=jex.selectDd]")[i];

			jex.web.form.event.replaceSelectDd(targetSelectBox, $(
					$("select[id=jex.selectYyyy]")[i]).val(), $(
					$("select[id=jex.selectMm]")[i]).val());
		}
	});
};

/*******************************************************************************
 * 사용자 호출이 가능한 함수 영역
 ******************************************************************************/
jex.web.alert = function(msg, code) {
	if (code != null && code != undefined)
		msg = jex.web.getMsg(code);
	
	alert(msg);
};

jex.web.confirm = function(msg, code) {
	if (code != null && code != undefined)
		msg = jex.web.getMsg(code);
	return confirm(msg);
};

jex.web.debug = function(code, fn) {
	if (_jex_debugMod)
		_jex_error_dialog(code, "excla");
};

jex.web.err = function(code, fn) {
	_jex_error_dialog(code, "error");
};

jex.web.info = function(code, fn) {
	_jex_error_dialog(code, "ok", fn);
};

jex.web.isError = function(data) {
	return data['COMMON_HEAD']['ERROR'];
};

jex.web.getCodeList = function(grpCd) {
	var result;
	jex.web.Ajax("comb_0001_01", {
		DIV_GRP_CD : grpCd
	}, function(data) {
		result = data;
	}, "jct", false);
	return result;
};

jex.web.getCodeNm = function(grpCd, grpItm) {
	var result;
	jex.web.Ajax("comm_0008_01_r001", {
		DIV_GRP_CD : grpCd,
		DIV_ITEM_CD : grpItm
	}, function(data) {
		result = data;
	}, "jct", false);
	return result;
};

jex.web.getMsg = function(code) {
	var result;
	jex.web.Ajax("comm_0009_01", {
		CD : code
	}, function(data) {
		result = data.MSG;
	}, "jct", false);
	return result;
};

function _jex_error_dialog(code, type, fn) {
	var msg;
	if (typeof (code) != "string")
		code = code['COMMON_HEAD']['CODE'];
	if (typeof (code) != "string")
		msg = code['COMMON_HEAD']['MESSAGE'];
	if (msg == null || msg == undefined)
		msg = jex.web.getMsg(code);
	
	//msg += "(1111)";
	
	if (parent.tMenuList == null || parent.tMenuList == undefined || true) {
		alert(msg);
		if (typeof (fn) == "function")
			fn();
		return;
	}

	var title = {
		"excla" : "Debug",
		"ok" : "확인 메시지",
		"error" : "에러 메시지"
	};
	var errorHtml = "<div id='_jex_error_dialog' class='pop_wrap_div' style='width:540px;height:212px' tabindex='0'>"
			+ "<div id='p-title' class='pop_top'>"
			+ "<h1>%TITLE%</h1>"
			+ "<span><img id='close' src='img/00/menu/popup_close.gif' alt='close' style='cursor:pointer' /></span>"
			+ "</div>"
			+ "<div id='pcpcont' class='pop_cont'>"
			+ "<div class='infoMessage'>"
			+ "<dl>"
			+ "<dt class='%TYPE%'></dt>"
			+ "<dd style='width:320px'><strong>%CODE%</strong><br />%MSG%</dd>"
			+ "</dl>"
			+ "</div>"
			+ "<ul class='btn_both'>"
			+ "<li class='btn_bothLeft'></li>"
			+ "<li  class='btn_bothRight'><span class='btn_off'><a id='close' style='cursor:pointer'>확인</a></span></li>"
			+ "</ul>" + "</div>" + "</div>";
	errorHtml = errorHtml.replace(/%TITLE%/g, title[type]);
	errorHtml = errorHtml.replace(/%TYPE%/g, type);
	errorHtml = errorHtml.replace(/%MSG%/g, msg);
	errorHtml = errorHtml.replace(/%CODE%/g, code);

	$(errorHtml).appendTo(document.body);

	$("#_jex_error_dialog").focus();

	$("#_jex_error_dialog").find("#close").click(function() {
		if (typeof (fn) == "function")
			fn();
		$(document.body).find("#_jex_error_dialog").remove();
	});

	$("#_jex_error_dialog").keypress(function(event) {
		switch (event.keyCode) {
		case 27:
		case 32:
		case 13:
			if (typeof (fn) == "function")
				fn();
			$(document.body).find("#_jex_error_dialog").remove();
			break;
		}
		;
		switch (event.charCode) {
		case 27:
		case 32:
		case 13:
			if (typeof (fn) == "function")
				fn();
			$(document.body).find("#_jex_error_dialog").remove();
			break;
		}
	});
}

/**
 * 웹서비스를 호출하여 해당 결과로 selelct박스의 option항목들을 채운다.
 * 
 * @svc : 웹서비스ID
 * @input : 입력값 ex)'{USR_ID:"test"}'
 * @selectedValue : 기본선택값. 값이 있으면 option의 value가 해당 값인 항목이 기본선택.
 * @selector : jquery객체의 셀렉터 ex)$(this) 또는 $("#ID")...
 * @selectElementId : select박스의 id값. =>selector 과 selectElementId는 둘중에 하나만
 *                  입력하면됨.
 */
jex.web.setSelectBox = function(svc, input, selectedValue, selector,
		selectElementId) {
	// if(
	// !(selectedValue==undefined||selectedValue==null||selectedValue=='null') )
	// selectedValue = selectedValue.replace(/[^0-9]/g, "");

	var selectbo;

	if (selector == null || selector == undefined || selector == "") {
		selectbo = $("#" + selectElementId);
	} else {
		selectbo = selector;
	}

	var _style = selectbo.attr("style");
	var _class = selectbo.attr("class");
	var _async = "1";
	
	if(typeof(selectbo.attr("async")) != "undefined"){
		_async = selectbo.attr("async");
//		alert(_async);
	}

	// 기존에 option 항목이 존재하면 삭제.
	selectbo.children(".generated").remove();

	var json = {};
	if (jex.web.null2void(input) != "")
		eval("json = " + input);

	jex.web.Ajax(svc, json, function(dat) {
		try {
			$.each(dat.REC, function(i, v) {
				if (v.KEY == undefined || v.KEY == null || v.KEY == "null")
					v.KEY = "";
				if (v.KEY == selectedValue)
					selectbo.append("<option class='generated' value='" + v.KEY + "' selected>"
							+ v.DAT + "</option>");
				else
					selectbo.append("<option class='generated' value='" + v.KEY + "'>" + v.DAT
							+ "</option>");
			});

			selectbo.attr("style", _style);
			selectbo.attr("class", _class);
		} catch (e) {
			alert("SELECT BOX 그리기 실패! [" + svc + "]");
			return;
		}
	}, "jct", _async);
};

/**
 * 웹서비스를 호출하여 해당 결과로 INPUT RADIO항목을 채운다.
 * 
 * @svc : 웹서비스ID
 * @input : 입력값 ex)'{USR_ID:"test"}'
 * @selectedValue : 기본선택값. 값이 있으면 option의 value가 해당 값인 항목이 기본선택.
 * @selector : jquery객체의 셀렉터 ex)$(this) 또는 $("#ID")...
 * @selectElementId : input박스의 id값. =>selector 과 selectElementId는 둘중에 하나만 입력하면됨.
 */
jex.web.setRadioBox = function(svc, input, selectedValue, selector,
		selectElementId, radioNm) {
	var selectbo;

	if (selector == null || selector == undefined || selector == "") {
		selectbo = $("#" + selectElementId);
	} else {
		selectbo = selector;
	}

	var _style = selectbo.attr("style");
	var _class = selectbo.attr("class");

	// 기존에 option 항목이 존재하면 삭제.
	selectbo.children(".generated").remove();

	var json = {};
	if (jex.web.null2void(input) != "")
		eval("json = " + input);

	jex.web.Ajax(svc, json, function(dat) {
		try {
			$.each(dat.REC, function(i, v) {
				if (v.KEY == undefined || v.KEY == null || v.KEY == "null")
					v.KEY = "";
				if (v.KEY == selectedValue)
					selectbo.append("<input class='generated' type='radio' name='" + radioNm
							+ "' value='" + v.KEY + "' checked /><label>"
							+ v.DAT + "</label>");
				else
					selectbo.append("<input class='generated' type='radio' name='" + radioNm
							+ "'  value='" + v.KEY + "' /><label>" + v.DAT
							+ "</label>");
			});

			selectbo.attr("style", _style);
			selectbo.attr("class", _class);
		} catch (e) {
			alert("RADIO BOX 그리기 실패! [" + svc + "]");
			return;
		}
	}, "jct", false);
};

/**
 * 서버시간을 리턴한다. 조합 가능한 Format.. yy,yyyy : 년도 mm : 월 dd : 일
 * 
 * hh(hh24) : 시간(24시기준인지) mi : 분 ss : 초 ms : millisecond
 * 
 * MMM : 월(Ex:Jan,1월) EEE : 일(Ex:Tue,화) G : AD/BC
 */
jex.web.getServerDate = function(format) {
	var result = "";
	jex.web.Ajax("getServerDate", {
		FRMT_CTT : format
	}, function(dat) {
		result = dat.INQ_DT;
	}, "jct", "1");
	return result;
};

/**
 * 서버시간을 리턴한다. 조합 가능한 Format.. yy,yyyy : 년도 mm : 월 dd : 일
 * 
 * hh(hh24) : 시간(24시기준인지) mi : 분 ss : 초
 * 
 * @param c
 *            기준 Flag('Y':년,'M':월,'W':주,'D'일)
 * @param i
 *            가감 계산값
 */
jex.web.getDate = function(format, c, i) {
	var currentDate = new Date();
	var _tmpDate;
	if (jex.web.null2void(c) != "") {
		switch (c) {
		case "Y":
			_tmpDate = new Date(currentDate.getFullYear() + i, currentDate
					.getMonth(), currentDate.getDate());
			break;

		case "M":
			_tmpDate = new Date(currentDate.getFullYear(), currentDate
					.getMonth()
					+ i, 1);

			// beforeDate의 마지막 날짜가, 조회종료일자조건의 선택되어있는값보다 작으면
			// beforeDate의 마지막 날짜로 설정한다.
			var lastDate = jex.web.getLastDate(_tmpDate.getFullYear(), _tmpDate
					.getMonth() + 1);
			if (lastDate < currentDate.getDate()) {
				_tmpDate.setDate(lastDate);
			} else {
				_tmpDate.setDate(currentDate.getDate());
			}

			break;

		case "W":
			_tmpDate = new Date(currentDate.getFullYear(), currentDate
					.getMonth(), currentDate.getDate() + (i * 7));
			break;

		case "D":
			_tmpDate = new Date(currentDate.getFullYear(), currentDate
					.getMonth(), currentDate.getDate() - i);
			break;

		default:
			jex.web.alert("없는 기준 Flag입니다.(" + c + ")");
			return false;
			break;
		}
		currentDate = _tmpDate;
	}
	var year = String(currentDate.getFullYear());
	var month = currentDate.getMonth();
	month = month + 1 < 10 ? "0" + String(month + 1) : String(month + 1);
	var date = currentDate.getDate();
	date = date < 10 ? "0" + String(date) : String(date);

	return format.replace("yyyy", year).replace("yy", year.substring(2, 4))
			.replace("mm", month).replace("dd", date);
};

/**
 * 서버에 있는 파일 다운로드
 * 
 * @param fileSavePath :
 *            파일명을 포함한 전체경로
 * @param fileOrgName :
 *            다운로드받을파일명
 * @return
 */
jex.web.FileDownload = function(fileSavePath, fileOrgName) {
	alert(fileSavePath+":"+fileOrgName);

	$("#_downloadDiv").remove();
	$("#_downloadIfrm").remove();

	var wsvcId = 'comm_0006_02.act';

	var $iframe = $("<iframe name='_downloadIfrm' id='_downloadIfrm'/>");

	$iframe.appendTo("body");

	var $div = $("<div id='_downloadDiv'/>");
	$div.css( {
		display : "none"
	});
	$div.appendTo("body");

	var _form = '<form name="_downloadForm" id="_downloadForm" action="'
			+ wsvcId + '" method="post" target="_downloadIfrm">'
			+ '<input type="hidden" name="FILE_NM" value="' + fileOrgName
			+ '" />' + '<input type="hidden" name="SAVE_FILE_PATH" value="'
			+ fileSavePath + '" />' + '</form>';
	$("#_downloadDiv").append(_form);

	jex.web.doSubmit("_downloadForm", false);
};

/**
 * 엑셀저장
 * 
 * @fileName 저장할 파일명. action 입력도메인과 출력도메인에 FILE_NM 필드가 있어야 한다. 파일명을 view에서 셋팅할경우
 *           필수아님.
 * @wsvcId 웹서비스ID(웹서비스ID.act)
 * @params 입력값을 object형태로 입력. KEY는 action 입력도메인 항목명과 일치 하게 입력해야함. ex:
 *         {KEY1:"값1", KEY2:"값2"}
 */
jex.web.FileDownloadURL = function(fileName, wsvcId, params, debug) {
	$("#_downloadDiv").remove();
	$("#_downloadIfrm").remove();

	if (!wsvcId) {
		alert("웹서비스ID를 입력해주세요.");
		return false;
	}

	var paramInputs = "";
	if (!(params == undefined || params == null || params == 'null' || params == "")) {
		for ( var tempKey in params) {
			paramInputs += '<input type="hidden" name="' + tempKey
					+ '" value="' + params[tempKey] + '" />';
		}
	}

	var $iframe = $("<iframe name='_downloadIfrm' id='_downloadIfrm'/>");

	if (debug)
		$iframe.css( {
			position : "absolute",
			width : "700px",
			height : "400px"
		});
	else
		$iframe.css( {
			position : "absolute",
			width : "0px",
			height : "0px",
			left : "-600px",
			top : "-600px"
		});

	$iframe.appendTo("body");

	var $div = $("<div id='_downloadDiv'/>");
	$div.css( {
		display : "none"
	});
	$div.appendTo("body");

	var _form = '<form name="_downloadForm" id="_downloadForm" action="'
			+ wsvcId + '" method="post" target="_downloadIfrm">'
			+ '<input type="hidden" name="FILE_NM" value="' + fileName + '" />'
			+ paramInputs + '</form>';
	$("#_downloadDiv").append(_form);

	jex.web.doSubmit("_downloadForm", false);
};

/**
 * HTML 파일저장
 * 
 * @divId 파일로 저장할 영역을 DIV로 감싸고 해당 DIV아이디를 입력한다.
 * @fileName 저장할 파일명
 * @skipId 저장할 DIV영역 내에서 저장시 제외시길부분의 ID를 입력한다. ex) <table id='skipArea'></table>
 *         <div id='skipArea'></div> 이런식으로 되어있으면 같은 skipId 에 해당하는 모든 엘리먼트는
 *         제외시킨다.
 * @debug true 입력시 iframe 내용을 볼수있다.
 */
jex.web.FileDownloadHtml = function(divId, fileName, skipId, debug) {
	$("#_downloadDiv").remove();
	$("#_downloadIfrm").remove();

	var $element = $("#" + divId);

	var $div = $("<div id='_downloadDiv'/>");
	$div.css( {
		display : "none"
	});
	$div.appendTo("body");

	$element.each(function() {
		$("#_downloadDiv").append($(this).html());
	});

	// skipId 에 해당하는 엘리먼트 삭제
	$.each($("#_downloadDiv").find("[id=" + skipId + "]"), function(i, v) {
		$(this).remove();
	});

	$.each($("#_downloadDiv").find("img"), function(i, v) {
		var src = $(this).attr("src");

		if (!/^http/.test(src)) {
			src = 'http://' + window.location.host
					+ (/^[\/]/.test(src) ? href : "/" + src);
		}

		$(this).attr("src", src);
	});

	var $iframe = $("<iframe name='_downloadIfrm' id='_downloadIfrm'/>");

	if (debug)
		$iframe.css( {
			position : "absolute",
			width : "700px",
			height : "400px"
		});
	else
		$iframe.css( {
			position : "absolute",
			width : "0px",
			height : "0px",
			left : "-600px",
			top : "-600px"
		});

	$iframe.appendTo("body");
	var doc = $iframe[0].contentWindow.document;
	doc
			.write("<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>");
	doc.write("<html xmlns='http://www.w3.org/1999/xhtml'><head>");
	doc
			.write("<meta http-equiv='Content-Type' content='text/html; charset=euc-kr'>");
	doc.write("<title>" + $("title").html() + "</title>");
	$("link").each(
			function() {
				var href = $(this).attr("href");

				if (!/^http/.test(href)) {
					href = 'http://' + window.location.host
							+ (/^[\/]/.test(href) ? href : "/" + href);
				}

				doc.write("<link type='text/css' rel='stylesheet' href='"
						+ href + "' />");
			});
	doc.write("</head><body>");
	doc.write($("#_downloadDiv").html());
	doc.write("</body></html>");

	doc.close();
	setTimeout(function() {
		$iframe[0].contentWindow.document
				.execCommand('SaveAs', false, fileName);
	}, 500);
};

/**
 * DIV ID를 입력받아서 해당 DIV의 내용을 출력한다.
 */
jex.web.print = function(divId) {
	if (divId == undefined || divId == null || divId == "") {
		alert("출력할 DIV ID를 지정해주세요.");
		return false;
	}
	$("#" + divId).jqprint( {
		importCSS : true
	});
};

/**
 * 년,월을 입력받아 해당월의 마지막 일자를 반환한다.
 */
jex.web.getLastDate = function(yyyy, mm) {
	if (yyyy == undefined || String(yyyy).length != 4 || mm == undefined
			|| String(mm).length > 2)
		return "";
	else
		return new Date(new Date(yyyy, mm, '1') - (60 * 60 * 24 * 1000))
				.getDate();
};

/**
 * 지정된 년/월/일 셀렉트박스의 날짜를 셋팅한다.
 * 
 * @param yyyymmdd :
 *            'yyyymmdd' 형태의 날짜 or Date 객체
 * @param index :
 *            id 가 "jex.selectCalendar"인 div 또는 span 태그의 index(코딩상에 나타나는 달력 순번)
 *            0부터 시작한다.
 */
jex.web.setCalendar = function(yyyymmdd, index) {
	if (index == undefined || index == null || index == "") {
		index = 0;
	}

	if (!yyyymmdd || yyyymmdd == "null") {
		yyyymmdd = new Date();
	}

	if (yyyymmdd instanceof Date) {
		var _fullYear = yyyymmdd.getFullYear();
		var _month = String(yyyymmdd.getMonth() + 1).length == 1 ? "0"
				+ String(yyyymmdd.getMonth() + 1) : yyyymmdd.getMonth() + 1;
		var _date = String(yyyymmdd.getDate()).length == 1 ? "0"
				+ String(yyyymmdd.getDate()) : yyyymmdd.getDate();
		yyyymmdd = _fullYear + "" + _month + "" + _date;
	}
	// 숫자가 아닌 문자 제거
	yyyymmdd = yyyymmdd.replace(/[^0-9]/g, "");

	var selectYyyy = $("select[id=jex.selectYyyy]")[index];
	var selectMm = $("select[id=jex.selectMm]")[index];
	var selectDd = $("select[id=jex.selectDd]")[index];

	_selected($(selectYyyy).children(), yyyymmdd.substring(0, 4));
	_selected($(selectMm).children(), yyyymmdd.substring(4, 6));

	jex.web.form.event.replaceSelectDd(selectDd, yyyymmdd.substring(0, 4),
			yyyymmdd.substring(4, 6));
	_selected($(selectDd).children(), yyyymmdd.substring(6, 8));

	function _selected(options, key) {
		$.each(options, function(i, v) {
			if ($(v).val() == key) {
				$(this).attr("selected", true);
				return false;
			}
		});
	}
};

/**
 * 조회시작 년/월/일 셀렉트박스와 조회종료 년/월/일 셀렉트박스의 날짜를 사용자지정~현재 날짜로 셋팅한다.
 * 
 * @param betweenDv :
 *            일(d)/주(w)/월(m) 구분코드
 * @param num :
 *            두 일자의 차이
 * 
 * ex) jex.web.setCalendarBetween("d", 0); => 당일 ex)
 * jex.web.setCalendarBetween("w", 1); => 1주
 */
jex.web.setCalendarBetween = function(betweenDv, num) {

	if (isNaN(new Number(num)))
		return false;

	var currentDate = new Date();
	var beforDate;

	switch (jex.web.null2void(betweenDv).toLowerCase()) {
	// 일
	case "d":
		beforDate = new Date(currentDate - ((60 * 60 * 24 * 1000) * num));
		break;

	// 주
	case "w":
		beforDate = new Date(currentDate - ((60 * 60 * 24 * 1000) * 7 * num));
		break;

	// 월
	case "m":
		beforDate = new Date(currentDate.getFullYear(), currentDate.getMonth()
				- num, currentDate.getDate());
		break;
	}
	jex.web.setCalendar(beforDate, 0);
	jex.web.setCalendar(currentDate, 1);
};

/**
 * value가 false로 평가되는 값(undefined, null, "")이면 ""로 반환한다.
 * 
 * @param value
 * @def def : value가 false로 평가되는 값일경우, def가 있으면 def를 반환한다.
 * 
 */
jex.web.null2void = function(value, def) {
	if (!value)
		return !def ? "" : def;
	else
		return $.trim(value);
};

/**
 * form 의 서브밋을 수행하는 함수
 * 
 * @formId : submit 할 form 의 id
 * @checkYn: submit 하기전에 formCheck를 수행할지 여부 지정하지 않으면 default 는 true.
 * @form : PT에서 사용하는 common.js의 uf_openWin 함수에서 submit 하는것을 지원하기 위해 추가함
 */
jex.web.doSubmit = function(formId, checkYn, form, opt) {
	if (formId == "" || formId == undefined || formId == null) {
		if (form) {
			formId = $(form).attr("id");
			if (formId == "" || formId == undefined || formId == null) {
				// $(form).attr("id", "jex.web._subForm_");
				// formId = $(form).attr("id");
				formId = $(form).attr("name");
				$(form).attr("id", form);
			}
		}
	}

	if (!jex.web.testMode) {
		// form 의 action Attribute 에 셋팅된 웹서비스아이디에 ".act"를 붙여서 다시 셋팅한다.(.act로 끝나지
		// 않는경우만)
		if (!/\./g.test($("#" + formId).attr("action"))
				&& !/\.act$/.test($("#" + formId).attr("action"))) {
			$("#" + formId).attr("action",
					$("#" + formId).attr("action") + ".act");
		}
	}
	// alert( $("#"+formId).attr("action") );

	// submit 이 진행중인지 확인
	if (!jex.web.form.submitYn) {
		// submit 진행중으로 값 설정
		jex.web.form.submitYn = true;

		// checkYn이 false 가 아니면 validation 체크
		if (checkYn === undefined || checkYn === null || checkYn === ""
				|| checkYn) {
			// validation 체크 수행
			if (!jex.web.checkForm(formId)) {
				// 결과가 오류이면 submit 진행하지 않음
				jex.web.form.submitYn = false;
				return false;
			}
		}

		// submit 실행
		if (jex.web.null2void($("#" + formId).attr("type")).toLowerCase() == "json") {
			var rslt = _trxSubmit($("#" + formId), opt);
			return rslt;
		} else if (jex.web.null2void($("#" + formId).attr("type"))
				.toLowerCase() == "ajax") {
			return _trxAjax($("#" + formId));
		} else {
			/*
			 * 새창 으로 From을 보내기 위한 Option을 처리한다.
			 */
			if (opt != undefined && opt != null && opt != ""
					&& opt.target != undefined && opt.target != null
					&& opt.target != "") {
				var sizeW = Number(opt.sizeW) + 25;
				var sizeH = Number(opt.sizeH);
				var nLeft = screen.width / 2 - sizeW / 2;
				var nTop = screen.height / 2 - sizeH / 2;
				var option = ",toolbar=no,menubar=no,location=no,scrollbars=yes,status=no";
				var winObj = window.open('', opt.target, "left=" + nLeft
						+ ",top=" + nTop + ",width=" + sizeW + ",height="
						+ sizeH + option);
				winObj.blur();// 크롭에서 focus()만 호출할경우 작동하지 않아서 blur()를 먼저 호출한후
								// focus()호출하도록 수정함.
				winObj.focus();// 팝업이 이미 열려있는경우 앞으로 나오도록 한다.
				$("#" + formId).attr("method", "post");
				$("#" + formId).attr("target", opt.target);
				if (opt.action != null && opt.action != undefined
						&& opt.action != "")
					$("#" + formId).attr("action", opt.action);
				jex.web.form.submitYn = false;
			}

			// 보안모듈을 사용할경우
			if (jex.web.isSecurityModule) {
				// xecureweb 보안모듈의 submit
				XecureSubmit(document.getElementById(formId));
			} else {
				// $("#"+formId).submit(); => 이 방식으로 submit 하면
				// $("#"+formId).submit(function(){}); => 에서 이벤트가 잡히기 때문에
				// 아래처럼 submit을 실행한다.
				document.getElementById(formId).submit();
			}

			jex.web.form.submitYn = false;
		}
	} else {
		alert("거래가 진행중입니다.");
		return false;
	}
};// end of "jex.web.doSubmit"

/**
 * 
 */
jex.web.callSvc = function(act_id, json) {
	newform = "<div id='_jexSender'><form id='_jexSenderForm' name='_jexSenderForm' method='"
			+ _this.attr("method")
			+ "' type='"
			+ _this.attr("type")
			+ "' action='"
			+ _this.attr("action")
			+ "'><input type='text' name='_JSON_' value='"
			+ JSON.stringify(json) + "'></form></div>";
	$(document.body).append(newform).hide();
	document._jexSenderForm.submit();
};

/**
 * 사용자 AJAX호출지원
 * 
 * @param asyncMode
 *            1:Sync 2:Async error true/false
 */
jex.web.Ajax = function(act_id, json, fn, type, asyncMode, error) {
//	$("#_Jex_loadingbar").show();
	if (type == undefined || type == null)
		type = "act";
	if (error == undefined || error == null)
		error = true;

	if (asyncMode == "1" || !asyncMode)
		asyncMode = false;
	else
		asyncMode = true;

//	alert(asyncMode);
//	asyncMode = true;
	
	act_id = act_id + "." + type;

	var tranData = "";
	// 보안모듈을 사용할경우
	if (jex.web.isSecurityModule) {
		tranData = _getXecureEnc(encodeURIComponent(JSON.stringify(json)));
	} else {
		tranData = {
			"_JSON_" : encodeURIComponent(JSON.stringify(json))
		};
	}

	jQuery.ajax( {
		type : "POST",
		url : act_id,
		data : tranData,
		cache : false,
		async : asyncMode,
		success : function(msg) {
			jex.web.form.submitYn = false;
			var input;
			
			if (typeof (msg) == "string") {
				input = JSON.parse(msg);
			} else {
				input = msg;
			}
				
			if (error) {
				if (jex.web.isError(input))
					jex.web.err(input);
			}
			if (!error || !jex.web.isError(input))
				if (fn)
					fn(input);
		}
	});
};

function _UserAgent() {
	return navigator.userAgent.substring(0, 9);
}

function _IsNetscape() // by Zhang
{
	if (navigator.appName == 'Netscape')
		return true;
	else
		return false;
}

function _IsNetscape60() // by Zhang
{
	if (_IsNetscape() && _UserAgent() == 'Mozilla/5')
		return true;
	else
		return false;
}

function _getXecureEnc(str) {
	var qs = "";
	var path;
	var cipher;
	var result = {};

	var gIsContinue = 0;
	var busy_info = "암호화 작업이 진행중입니다. 확인을 누르시고 잠시 기다려 주십시오."

	// encrypt QueryString of action field
	if (gIsContinue == 0) {
		gIsContinue = 1;
		if (_IsNetscape60()) // Netscape 6.0
			cipher = document.XecureWeb.nsIXecurePluginInstance.BlockEnc(
					xgate_addr, path, XecureEscape(qs), "GET");
		else {
			cipher = document.XecureWeb.BlockEnc(xgate_addr, path,
					XecureEscape(qs), "GET");
		}
		gIsContinue = 0;
	} else {
		alert(busy_info);
		return result;
	}

	if (cipher == "")
		return result;

	result['q'] = cipher;

	posting_data = "_JSON_=" + str;

	if (gIsContinue == 0) {
		gIsContinue = 1;
		if (IsNetscape60()) // Netscape 6.0
			cipher = document.XecureWeb.nsIXecurePluginInstance.BlockEnc(
					xgate_addr, path, XecureEscape(posting_data), "POST");
		else {
			cipher = document.XecureWeb.BlockEnc(xgate_addr, path,
					XecureEscape(posting_data), "POST");
		}
		gIsContinue = 0;
	} else {
		alert(busy_info);
		return false;
	}

	if (cipher == "")
		return result;

	result['p'] = cipher;

	return result;
}

/**
 * AJAX실행
 * 
 * @param _this
 * @return
 */
function _trxAjax(_this) {

	var textareaList = _this.find("textarea");
	var inputList = _this.find("input");
	var selectList = _this.find("select");
	var json = {};
	var callback = _this.attr("callback");

	$.each(textareaList, function() {
		var name = $(this).attr("name");
		var value = $(this).val();
		if (name != null && name != "" && name != undefined)
			json[name] = (value == null || value == undefined) ? "" : value;
	});

	$
			.each(inputList, function() {
				var name = $(this).attr("name");
				var value = $(this).val();

				if ($(this).attr("jexdatatype") == "item") {
					return true;// ==continue;
				} else if ($(this).attr("type") == "button") {
					return true;// ==continue;
				} else if ($(this).attr("type") == "checkbox") {
					// 체크되어있지 않으면 넘어감.
					if (!$(this).attr("checked"))
						return true;// ==continue;

					// 체크박스에 recordId속성이 있으면
					// 반복부로 구성한다.
					if ($(this).attr("recordId")) {
						if (!json[$(this).attr("recordId")]) {
							json[$(this).attr("recordId")] = [];
						}
						checkboxRec = {};
						checkboxRec[name] = value;

						json[$(this).attr("recordId")].push(checkboxRec);
					} else {
						if (name != null && name != "" && name != undefined)
							json[name] = (value == null || value == undefined) ? ""
									: value;
					}
				} else if ($(this).attr("type") == "radio") {
					if (!$(this).attr("checked"))
						return true;// ==continue;
					if (name != null && name != "" && name != undefined)
						json[name] = (value == null || value == undefined) ? ""
								: value;
				} else {
					if (name != null && name != "" && name != undefined)
						json[name] = (value == null || value == undefined) ? ""
								: value;
				}
			});

	$.each(selectList, function() {
		var name = $(this).attr("name");
		var value = $(this).find("option:selected").val();

		// multiple 일때는 옵션항목이 record로 올라간다.
			if ($(this).attr("type") == "select-multiple") {
				var recordId = $(this).attr("recordId");
				if (!json[recordId]) {
					json[recordId] = [];
				}

				$.each($(this).children(), function(i, v) {
					var selectRec = {};
					selectRec[name] = $(v).val();

					json[recordId].push(selectRec);
				});
			} else {
				if (name != null && name != "" && name != undefined)
					json[name] = (value == null || value == undefined) ? ""
							: value;
			}
		});

	// List 처리
	var list = $(_this).find("[jexdatatype='list']");
	$
			.each(
					list,
					function(i, v) {
						var g_key = $(this).attr("id");
						var g_array = [];
						var row = $(this).find("[jexdatatype='row']");
						$
								.each(
										row,
										function() {
											var itm = $(this).find(
													"[jexdatatype='item']");
											var itmjson = {};
											var procRadioName = "";// 이미 셋팅한
																	// 라디오인지
																	// 확인하기 위한
																	// 변수
											$
													.each(itm, function(i, v) {

														// radio
															// radio는 name 이 같은
															// 항목들중에 check 된 항목의
															// value로 셋팅한다.
															if ($(this).attr(
																	"type") == "radio") {
																// 이미 값을 셋팅한
																// 라디오명이면
																// continue;
																if (procRadioName == $(
																		this)
																		.attr(
																				"name")) {
																	return true;// ==continue;
																}
																procRadioName = $(
																		this)
																		.attr(
																				"name");
																itmjson[$(this)
																		.attr(
																				"id")] = jex.web
																		.null2void($(
																				":radio[name="
																						+ $(
																								this)
																								.attr(
																										"name")
																						+ "][checked=true]")
																				.val());
															}
															// checkbox
															else if ($(this)
																	.attr(
																			"type") == "checkbox") {
																if ($(this)
																		.attr(
																				"checked"))
																	itmjson[$(
																			this)
																			.attr(
																					"id")] = $(
																			this)
																			.val();
																else
																	itmjson[$(
																			this)
																			.attr(
																					"id")] = "";
															}
															// select box
															else if ($(this)
																	.find(
																			"option:selected")
																	.val() != undefined) {
																itmjson[$(this)
																		.attr(
																				"id")] = $(
																		this)
																		.find(
																				"option:selected")
																		.val();
															}
															// 기타
															else if ($(this)
																	.val() == "") {
																itmjson[$(this)
																		.attr(
																				"id")] = $(
																		this)
																		.text();
															}
															// text box
															else {
																itmjson[$(this)
																		.attr(
																				"id")] = $(
																		this)
																		.val();
															}
														});
											g_array.push(itmjson);
										});
						json[g_key] = g_array;
					});
	// alert(JSON.stringify(json));
	// 전송처리
	var act_id_parse = _this.attr("action").split(".");
	var jct = "";

	for ( var i = 0; i < act_id_parse.length - 1; i++) {
		jct = jct + act_id_parse[i];
		if (i != act_id_parse.length - 2)
			jct = jct + ".";
	}
	jex.web.Ajax(jct, json, function(dat) {
		var fn = callback + "(" + JSON.stringify(dat) + ");";
		var ret = eval(fn);
	}, "jct");
	return false;
}

/**
 * JSON 으로 SUBMIT실행
 * 
 * @param _this
 * @return
 */
function _trxSubmit(_this, opt) {
	var textareaList = _this.find("textarea");
	var inputList = _this.find("input");
	var selectList = _this.find("select");
	var json = {};
	var checkboxRec = {};// 체크박스를 레코드로 구성하기위한 변수(20100825추가)

	$.each(textareaList, function() {
		var name = $(this).attr("name");
		var value = $(this).val();
		if (name != null && name != "" && name != undefined)
			json[name] = (value == null || value == undefined) ? "" : value;
	});

	$
			.each(inputList, function() {
				var name = $(this).attr("name");
				var value = $(this).val();

				// if($(this).attr("type")=="checkbox")
				// alert(name+"::"+value+"::"+$(this).attr("type")+"::"+$(this).attr("checked"));

					if ($(this).attr("jexdatatype") == "item") {
						return true;// ==continue;
				} else if ($(this).attr("type") == "button") {
					return true;// ==continue;
				} else if ($(this).attr("type") == "checkbox") {
					// 체크되어있지 않으면 넘어감.
					if (!$(this).attr("checked"))
						return true;// ==continue;

					// 체크박스에 recordId속성이 있으면
					// 반복부로 구성한다.
					if ($(this).attr("recordId")) {
						if (!json[$(this).attr("recordId")]) {
							json[$(this).attr("recordId")] = [];
						}
						checkboxRec = {};
						checkboxRec[name] = value;

						json[$(this).attr("recordId")].push(checkboxRec);
					} else {
						if (name != null && name != "" && name != undefined)
							json[name] = (value == null || value == undefined) ? ""
									: value;
					}
				} else if ($(this).attr("type") == "radio") {
					if (!$(this).attr("checked"))
						return true;// ==continue;
					if (name != null && name != "" && name != undefined)
						json[name] = (value == null || value == undefined) ? ""
								: value;
				} else {
					if (name != null && name != "" && name != undefined)
						json[name] = (value == null || value == undefined) ? ""
								: value;
				}
			});

	$.each(selectList, function() {
		var name = $(this).attr("name");
		var value = $(this).find("option:selected").val();

		// multiple 일때는 옵션항목이 record로 올라간다.
			if ($(this).attr("type") == "select-multiple") {
				var recordId = $(this).attr("recordId");
				if (!json[recordId]) {
					json[recordId] = [];
				}

				$.each($(this).children(), function(i, v) {
					var selectRec = {};
					selectRec[name] = $(v).val();

					json[recordId].push(selectRec);
				});
			} else {
				if (name != null && name != "" && name != undefined)
					json[name] = (value == null || value == undefined) ? ""
							: value;
			}
		});

	// List 처리
	var list = _this.find("[jexdatatype='list']");
	$
			.each(
					list,
					function(i, v) {
						var g_key = $(this).attr("id");
						var g_array = [];
						var row = $(this).find("[jexdatatype='row']");
						$
								.each(
										row,
										function() {
											var itm = $(this).find(
													"[jexdatatype='item']");
											var itmjson = {};
											var procRadioName = "";// 이미 셋팅한
																	// 라디오인지
																	// 확인하기 위한
																	// 변수
											$
													.each(itm, function(i, v) {
														// radio
															// radio는 name 이 같은
															// 항목들중에 check 된 항목의
															// value로 셋팅한다.
															if ($(this).attr(
																	"type") == "radio") {
																// 이미 값을 셋팅한
																// 라디오명이면
																// continue;
																if (procRadioName == $(
																		this)
																		.attr(
																				"name")) {
																	return true;// ==continue;
																}
																procRadioName = $(
																		this)
																		.attr(
																				"name");
																itmjson[$(this)
																		.attr(
																				"id")] = jex.web
																		.null2void($(
																				":radio[name="
																						+ $(
																								this)
																								.attr(
																										"name")
																						+ "][checked=true]")
																				.val());
															}
															// checkbox
															else if ($(this)
																	.attr(
																			"type") == "checkbox") {
																if ($(this)
																		.attr(
																				"checked"))
																	itmjson[$(
																			this)
																			.attr(
																					"id")] = $(
																			this)
																			.val();
																else
																	itmjson[$(
																			this)
																			.attr(
																					"id")] = "";
															}
															// select box
															else if ($(this)
																	.find(
																			"option:selected")
																	.val() != undefined) {
																itmjson[$(this)
																		.attr(
																				"id")] = $(
																		this)
																		.find(
																				"option:selected")
																		.val();
															}
															// 기타
															else if ($(this)
																	.val() == "") {
																itmjson[$(this)
																		.attr(
																				"id")] = $(
																		this)
																		.text();
															}
															// text box
															else {
																itmjson[$(this)
																		.attr(
																				"id")] = $(
																		this)
																		.val();
															}
														});
											g_array.push(itmjson);
										});
						json[g_key] = g_array;
					});
	// alert(JSON.stringify(json));
	// 전송처리
	newform = "<div id='_jexSender' style='display:none;overflow:hidden:height:0;line-height:0;border:0;margin:0;'><form id='_jexSenderForm' name='_jexSenderForm' method='"
			+ _this.attr("method")
			+ "' target='"
			+ _this.attr("target")
			+ "' type='"
			+ _this.attr("type")
			+ "' action='"
			+ _this.attr("action")
			+ "'><input type='text' name='_JSON_' value='"
			+ JSON.stringify(json) + "'></form></div>";
	$(document.body).append(newform);// .hide();

	/*
	 * 새창 으로 From을 보내기 위한 Option을 처리한다.
	 */
	if (opt != undefined && opt != null && opt != "" && opt.target != undefined
			&& opt.target != null && opt.target != "") {
		var sizeW = Number(opt.sizeW) + 25;
		var sizeH = Number(opt.sizeH);
		var nLeft = screen.width / 2 - sizeW / 2;
		var nTop = screen.height / 2 - sizeH / 2;
		var option = ",toolbar=no,menubar=no,location=no,scrollbars=yes,status=no";
		var winObj = window.open('', opt.target, "left=" + nLeft + ",top="
				+ nTop + ",width=" + sizeW + ",height=" + sizeH + option);
		winObj.blur();// 크롭에서 focus()만 호출할경우 작동하지 않아서 blur()를 먼저 호출한후
						// focus()호출하도록 수정함.
		winObj.focus();// 팝업이 이미 열려있는경우 앞으로 나오도록 한다.
		$("#_jexSenderForm").attr("method", "post");
		$("#_jexSenderForm").attr("target", opt.target);
		if (opt.action != null && opt.action != undefined && opt.action != "")
			$("#_jexSenderForm").attr("action", opt.action);
		jex.web.form.submitYn = false;
	}

	// 보안모듈을 사용할경우
	if (jex.web.isSecurityModule) {
		// xecureweb 보안모듈의 submit
		XecureSubmit(document._jexSenderForm);
	} else {
		// $("#"+formId).submit(); => 이 방식으로 submit 하면
		// $("#"+formId).submit(function(){}); => 에서 이벤트가 잡히기 때문에
		// 아래처럼 submit을 실행한다.
		document._jexSenderForm.submit();
	}

	jex.web.form.submitYn = false;

	$("#_jexSender").remove();
	return false;
	// return false;
}

/**
 * form validation을 체크하는 함수
 * 
 * @formId : 체크할 form의 id
 */
jex.web.form._bfCheckboxName = "";
jex.web.form._bfRadioName = "";
jex.web.form._thisInput;
jex.web.checkForm = function(formId) {
	var selector = "#" + formId;

	jex.web.form.errorYn = false;
	jex.web.form._bfCheckboxName = "";
	jex.web.form._bfRadioName = "";

	// 텍스트 박스 검증
	if (!jex.web.form.errorYn) {
		$.each($(selector).find(":text"), function(i, v) {
			if (jex.web.form.errorYn)
				return false;
			jex.web.form._thisInput = $(this);

			// validation 체크 함수만큼 loop 처리한다.
				$.each(jex.web.form.check, function(i, v) {
					if (typeof v == 'function') {
						if (!v(jex.web.form._thisInput)) {
							$(jex.web.form._thisInput).focus();
							return false;
						}
					}
				});
			});
	}

	// hidden검증
	if (!jex.web.form.errorYn) {
		$.each($(selector).find(":hidden"), function(i, v) {
			if (jex.web.form.errorYn)
				return false;
			jex.web.form._thisInput = $(this);

			// validation 체크 함수만큼 loop 처리한다.
				$.each(jex.web.form.check, function(i, v) {
					if (typeof v == 'function') {
						if (!v(jex.web.form._thisInput)) {
							$(jex.web.form._thisInput).focus();
							return false;
						}
					}
				});
			});
	}

	// selectbox 검증
	if (!jex.web.form.errorYn) {
		$.each($(selector).find("select"), function(i, v) {

			if (jex.web.form.errorYn)
				return false;

			jex.web.form._thisInput = $(this);

			if (!jex.web.form.check.isNotnull(jex.web.form._thisInput)) {
				$(jex.web.form._thisInput).focus();
				return false;
			}
		});
	}

	// password 검증
	if (!jex.web.form.errorYn) {
		$.each($(selector).find(":password"), function(i, v) {
			if (jex.web.form.errorYn)
				return false;
			jex.web.form._thisInput = $(this);

			// validation 체크 함수만큼 loop 처리한다.
				$.each(jex.web.form.check, function(i, v) {
					if (typeof v == 'function') {
						if (!v(jex.web.form._thisInput)) {
							$(jex.web.form._thisInput).focus();
							return false;
						}
					}
				});
			});
	}

	// checkbox 검증
	if (!jex.web.form.errorYn) {
		$.each($(selector).find(":checkbox"), function(i, v) {
			if (jex.web.form.errorYn)
				return false;
			jex.web.form._thisInput = $(this);

			if (jex.web.form._bfCheckboxName != $(jex.web.form._thisInput)
					.attr("name")) {
				jex.web.form._bfCheckboxName = $(jex.web.form._thisInput).attr(
						"name");
				if (!jex.web.form.check.isNotnull(jex.web.form._thisInput)) {
					$(jex.web.form._thisInput).focus();
					return false;
				}
			}
		});
	}

	// radio 검증
	if (!jex.web.form.errorYn) {
		$.each($(selector).find(":radio"), function(i, v) {
			if (jex.web.form.errorYn)
				return false;
			jex.web.form._thisInput = $(this);

			if (jex.web.form._bfRadioName != $(jex.web.form._thisInput).attr(
					"name")) {
				jex.web.form._bfRadioName = $(jex.web.form._thisInput).attr(
						"name");
				if (!jex.web.form.check.isNotnull(jex.web.form._thisInput)) {
					$(jex.web.form._thisInput).focus();
					return false;
				}
			}
		});
	}

	// textarea 검증
	if (!jex.web.form.errorYn) {
		$.each($(selector).find("textarea"), function(i, v) {
			if (jex.web.form.errorYn)
				return false;
			jex.web.form._thisInput = $(this);

			// validation 체크 함수만큼 loop 처리한다.
				$.each(jex.web.form.check, function(i, v) {
					if (typeof v == 'function') {
						if (!v(jex.web.form._thisInput)) {
							$(jex.web.form._thisInput).focus();
							return false;
						}
					}
				});
			});
	}

	// 조회시작 종료일자 검증
	if (!jex.web.form.errorYn) {
		var jexCalendar = $(selector).find("[id=jex.selectCalendar]");
		if (jexCalendar.length == 2) {
			var stDt = $($(jexCalendar[0]).find("select")[0]).val()
					+ $($(jexCalendar[0]).find("select")[1]).val()
					+ $($(jexCalendar[0]).find("select")[2]).val();

			var endDt = $($(jexCalendar[1]).find("select")[0]).val()
					+ $($(jexCalendar[1]).find("select")[1]).val()
					+ $($(jexCalendar[1]).find("select")[2]).val();

			if (stDt > endDt) {
				alert("조회시작일이 조회종료일보다 큽니다.");
				$($(jexCalendar[0]).find("select")[0]).focus();
				jex.web.form.errorYn = true;
				return false;
			}

			var currentDate = new Date();
			var currentDate = currentDate.getFullYear()
					+ ""
					+ (currentDate.getMonth() + 1 < 10 ? "0"
							+ (currentDate.getMonth() + 1) : (currentDate
							.getMonth() + 1))
					+ ""
					+ (currentDate.getDate() < 10 ? "0" + currentDate.getDate()
							: currentDate.getDate());

			if (endDt > currentDate) {
				alert("영업일 이후로는 조회가 불가능합니다.");
				$($(jexCalendar[1]).find("select")[0]).focus();
				jex.web.form.errorYn = true;
				return false;
			}
		}
	}

	if (jex.web.form.errorYn)
		return false;
	else
		return true;
};// end of "jex.web.checkForm"


var _jex_page_id;
var _jex_menu_seq = 0;
var _jex_title = "";
var _jex_title_prefix		= "";
var _jex_title_postfix	= "";
//var _jex_header_prefix = "RDERP -- ";
var _jex_header_prefix = "";
var _jex_header_postfix= "";
var _url_post_fix = "";

var JexCommon = {};

/**
 * JexTree는 여기서 동적으로 넣자
 */
document.write('<script type="text/javascript" src="js/jex.tree.js"></script>');

function getTitle() {
	return _jex_title;
};

$(function() {
	if (parent.tMenuList==undefined) return;
	_jex_page_id=parent._jex_page_id;
	if (_jex_page_id==undefined) return;
	/**
	 * IFRAME사이즈를 동적으로 할당.
	 */
	JexCommon.resizeIframe = function(){
		var h = $(document.body).find("div:first").height();
		$(parent.document.body).find("#"+_jex_page_id).find("iframe").height(h+10);
	};
	JexCommon.resizeIframe();	
	/**
	 * IFRAME사이즈를 동적으로 할당.
	 */
	var h = $(document.body).find("div:first").height();
	$(parent.document.body).find("#"+$.trim(_jex_page_id)).find("iframe").height(h+2);
	_jex_title = $(parent.document.body).find("#"+$.trim(_jex_page_id)).attr("name");

	$("#content").find(".content_box").find("h1:first").html(_jex_title_prefix+getTitle()+_jex_title_postfix);
	parent.document.title = _jex_header_prefix + getTitle() + _jex_header_postfix;

	if ($("#Left_Menu").length==0) return;

	/**
	 * IFRAME사이즈를 동적으로 할당.
	 */
	/*
	JexCommon.resizeIframe = function(){
		var h = $(document.body).find("div:first").height();
		$(parent.document.body).find("#"+_jex_page_id).find("iframe").height(h+10);
	};
	JexCommon.resizeIframe();
	*/
	
	/**
	 * 현재 페이지명을 이용하여 메뉴데이터를 구해온다.
	 */
	var pathname = document.location.pathname.split("/");
	var filename = pathname[pathname.length-1];
	/*
	var grpLname = filename.split("_");
	var grp_name = grpLname[0];
	var menuseq  = parent.tMenuList.menuSeq[grp_name];
	*/
	var id		 = filename.split(".")[0];
	
	// 수입결의서 등록
	if(	id == "rexpe_0009_02" ) {
		id = "rexpe_0009_01";
	}
	
	// 수정세금계산서
	if(	id == "revid_0002_06" || id == "revid_0002_07" || id == "revid_0002_08" || id == "revid_0002_09") {
		id = "revid_0002_01";
	}	
	
	// 공지사항
	if(	id == "board0001_01" || id == "board0002_01") {
		id = "board0016_01";
	}		
	
	/*
	if (id.indexOf("base") > -1) {
		alert(id);
	}
	*/
	
	// 사용자관리
	if(	id == "base_0003_02" || id == "base0003_04") {
		id = "base0013_01";
	}	
	
	// 연구소 현황 조회 tab메뉴 이동시 레프트 메뉴를 잡아주기 위해 코드 추가
	if( id == "rwork_0028_01" || id == "rwork_0029_01" || id == "rwork_0030_01" || id == "rwork_0031_01" || id == "rwork_0032_01" || id == "rwork_0033_01" )
		id = "rwork_0027_01";
	setLeftMenu(id);
	
});


function setLeftMenu(id, name) {
	getMenuSeq(parent.tMenuList, id);
	var menuseq	 = _jex_menu_seq;

	var menu	 = parent.tMenuList[menuseq].sub;
	if (name==undefined) name	 = parent.tMenuList[menuseq].name;
	$("#_jex_left_title").html(name); //왼쪽메뉴 메뉴 명을 기입해준다.
	$("#Left_Menu").jexTree('make', {onclick:function(opt) { var url=opt.url; if (url==undefined || url==null) url=opt.id+".act"; parent.openTab(opt.id, opt.name, url); } });
	$("#Left_Menu").jexTree('addList', menu); 
}

function isIngnoreList(v) {
	for (var i=0; i<_ingnore_List.length;i++) {
		if (_ingnore_List[i]==v) return true;
	}
	return false;
}

function setLeftMenu(id, name) {
	getMenuSeq(parent.tMenuList, id);
	var menuseq	 = _jex_menu_seq;

	var menu	 = parent.tMenuList[menuseq].sub;
	if (name==undefined) name	 = parent.tMenuList[menuseq].name;

	$("#_jex_left_title").html(name); //왼쪽메뉴 메뉴 명을 기입해준다.
	
	///////////////////////////////////////////////
	// Location 설정 하는 부분
	///////////////////////////////////////////////		
	getLocation(id, name, _jex_title);
	$("#Left_Menu").jexTree('make', {onclick:function(opt) { var url=opt.url; if (url==undefined || url==null) url=opt.id+".act"; parent.openTab(opt.id, opt.name, "/"+url+_url_post_fix); } });
	$("#Left_Menu").jexTree('addList', menu);
}


function getMenuSeq(list, id) {
//	alert(list);
	var result = false;
	$.each(list, function(i,v) {
		if (v.type=="folder") {
			result = getMenuSeq(v.sub, id);
			if (result) {
				_jex_menu_seq = i;
				return false;
			} else	{
				return true;
			}
		} else {
			if (v.url==null) v.url = v.id;
			if (v.url.split(".")[0]==id) {
				result = true;
				_jex_menu_seq = i;
				return false;
			}
		}
	});
	return result;
}

function getLocation(id, depthName, title)
{
	var menu_name = "";
	//////////////////////////////////////////////////
	// 상위메뉴명        : 과제관리
	// 하위메뉴 풀더명 : 기초정보, 과제공모관리, 과제정보관리
	//////////////////////////////////////////////////
	if( id == "rtask_0001_01" || id == "rtask_0002_01" || id == "rtask_0003_01" || id == "rtask_0004_01" || id == "rtask_0005_01" )
	{
		menu_name = "기초정보";
	}
	else if( id == "rtask_0006_01" || id == "rtask_0006_02" || id == "rtask_0006_03" || id == "rtask_0007_01" )
	{
		menu_name = "과제공모관리";		
	}
	else if( id == "rtask_0009_01" || id == "rtask_0010_01" || id == "rtask_0011_01" || id == "rtask_0012_01" || 
			 id == "rtask_0013_01" || id == "rtask_0014_01" || id == "rtask_0015_01" || id == "rtask_0016_01" ||
			 id == "rtask_0017_t00_01" || id == "rtask_0018_01" || id == "rtask_0019_01" )
	{
		menu_name = "과제정보관리";
	}
	//////////////////////////////////////////////////
	// 상위메뉴명        : 지출관리
	// 하위메뉴 풀더명 : 지출요구관리, 카드관리, 회계감사
	//////////////////////////////////////////////////
	else if( id == "rexpe_0001_01" || id == "rexpe_0002_01" || id == "rexpe_0003_01" || id == "rexpe_0004_01" || id == "rexpe_0005_01" ||
			 id == "rexpe_0006_01" || id == "rexpe_0007_01" || id == "rexpe_0008_t00_01" )
	{
		menu_name = "지출요구관리";
	}
	else if( id == "rexpe_0011_01" || id == "rexpe_0012_01" || id == "rexpe_0013_01" || id == "rexpe_0014_01" || id == "rexpe_0015_01" ||
			 id == "rexpe_0016_01" )
	{
		menu_name = "카드관리";
	}
	else if( id == "rexpe_0017_01" || id == "rexpe_0018_01" || id == "rexpe_0019_01")
	{
		menu_name = "회계감사";
	}
	else if( id == "rexpe_0020_01" || id == "rexpe_0021_01" || id == "rexpe_0022_01"|| id == "rexpe_0023_01" || id == "rexpe_0024_01" )
	{
		menu_name = "구매물품관리";
	}
//////////////////////////////////////////////////
	// 상위메뉴명        : 증빙관리
	// 하위메뉴 풀더명 : 매출증빙, 매입증빙
	//////////////////////////////////////////////////
	else if( id == "revid_0001_01" || id == "revid_0002_01" || id == "revid_0003_01")
	{
		menu_name = "매출증빙";
	}
	else if( id == "revid_0004_01")
	{
		menu_name = "매입증빙";
	}
	//////////////////////////////////////////////////
	// 상위메뉴명        : 보험세무
	// 하위메뉴 풀더명 : 원천징수, 4대보험, 부가세신고자료조정
	//////////////////////////////////////////////////
	else if( id == "rinsu_0001_01" || id == "rinsu_0002_01" )
	{
		menu_name = "원천징수";		
	}
	else if( id == "rinsu_0003_01" || id == "rinsu_0004_01" || id == "rinsu_0005_01" || id == "rinsu_0006_01" || id == "rinsu_0007_01" || 
			 id == "rinsu_0008_01" )
	{
		menu_name = "4대보험";		
	}
	else if( id == "rinsu_0009_01" || id == "rinsu_0010_01" )
	{
		menu_name = "부가세신고자료조정";		
	}
	/////////////////////////////////////////////////
	// 상위메뉴명        : 일반업무
	// 하위메뉴 풀더명 : 교수업적, 기본정보관리 , 기타학진연계항목, 학술지원사업 
	//////////////////////////////////////////////////
	else if( id == "rwork_0001_01" )
	{
		menu_name = "교수업적";		
	}
	else if( id == "rwork_0002_01" || id == "rwork_0003_01" || id == "rwork_0004_01" || id == "rwork_0005_01" || id == "rwork_0006_01" )
	{
		menu_name = "기본정보관리";		
	}
	else if( id == "rwork_0007_01" || id == "rwork_0008_01" || id == "rwork_0009_01" )
	{
		menu_name = "기타학진연계항목";		
	}
	else if( id == "rwork_0010_01" || id == "rwork_0011_01" || id == "rwork_0012_01" || id == "rwork_0013_01" || id == "rwork_0014_01" ||
			 id == "rwork_0015_01" || id == "rwork_0016_01" || id == "rwork_0017_01" )
	{
		menu_name = "학술지원사업";		
	}
	else if( id == "rwork_0018_01" || id == "rwork_0019_01" || id == "rwork_0020_01" )
	{
		menu_name = "초과근무계산";		
	}
	else if( id == "rwork_0021_01" )
	{
		menu_name = "계약학과";		
	}
	else if( id == "rwork_0022_01" || id == "rwork_0023_01" || id == "rwork_0024_01" || id == "rwork_0025_01" )
	{
		menu_name = "SMS발송";		
	}
	/////////////////////////////////////////////////////////////////////
	// 상위메뉴명        : 환경설정 
	// 하위메뉴 폴더명 : 기본정보관리, 권한그룹관리, 게시판관리, 자원관리, 기타관리
	/////////////////////////////////////////////////////////////////////
	else if(id == "rbase_0001_01" || id == "rbase_0002_01" || id == "rbase_0005_01" || id == "rbase_0006_01" || id == "rbase_0007_01" ||
			id == "rbase_0008_01")
	{		
		menu_name = "기본정보관리";
	}
	else if(id == "rbase_0009_01" || id == "rbase_0010_01" || id == "rbase_0011_01" )
	{		
		menu_name = "권한그룹관리";
	}
	else if(id == "rbase_0012_01" )
	{		
		menu_name = "게시판관리";
	}
	else if(id == "rbase_0013_01" || id == "rbase_0014_01" )
	{		
		menu_name = "자원관리";
	}
	else if(id == "rbase_0003_01" || id == "rbase_0004_01")
	{		
		menu_name = "기타관리";
	}
	
	// Location 명 설정하는 부분
	if(menu_name == null || menu_name == "") {		
		if( id == "rtask_0007_02" )
		{
			$("#content").find(".content_box").find("#location").html(depthName +  " &gt 과제신청관리 &gt 과제신청관리");
		}	
		else if( id == "rtask_0008_t00_01" )
		{
			$("#content").find(".content_box").find("#location").html(depthName +  " &gt 과제정보관리 &gt 과제정보 &gt 기본정보");
		}
		else
		{
			$("#content").find(".content_box").find("#location").html(depthName + " &gt " +_jex_title);
		}
	}else{
		if(id == "rtask_0006_03") 
		{
			$("#content").find(".content_box").find("#location").html(depthName + " &gt " + menu_name + " &gt " + _jex_title + " &gt " + "상세조회");
		}
		else
		{
			$("#content").find(".content_box").find("#location").html(depthName + " &gt " + menu_name + " &gt " + _jex_title);
		}
	}
	
	// 과제공고관리
	if(id == "rtask_0006_02" )
	{
		$("#content").find(".content_box").find("h1:first").html(_jex_title_prefix+getTitle()+_jex_title_postfix + " 등록/변경");
	} 
	else if( id == "rtask_0007_02" )
	{
		$("#content").find(".content_box").find("h1:first").html(_jex_title_prefix+"과제신청관리"+_jex_title_postfix + " 등록/변경");
	}
	
};



/*
if (top.location.href.indexOf("dev." > -1)) {
    if (window.location.href.indexOf("index.jsp") < 0 && window.location.href.indexOf("menuManage.jsp") < 0) document.write('<div style="position: absolute; width: 209px; height: 34px; z-index: 2; left: 10px; top: 10px; border:1" id="layer1"><font color="#00FFFF" size="3"><b>DEV SITE</b></font></div>');
}
*/
if (document.getElementById && !document.all){
    var isNS = true;
    var isIE = false;
}
else{
    var isIE = true;
    var isNS = false;
}

if(!window.event && window.captureEvents) {
  // set up event capturing for mouse events (add or subtract as desired)
  window.captureEvents(Event.MOUSEOVER|Event.MOUSEOUT|Event.CLICK|Event.DBLCLICK);
  // set window event handlers (add or subtract as desired)
  window.onmouseover = WM_getCursorHandler;
  window.onmouseout = WM_getCursorHandler;
  window.onclick = WM_getCursorHandler;
  window.ondblclick = WM_getCursorHandler;
  // create an object to store the event properties
  window.event = new Object;
}


var USE_PRINT = false;

/* 마우스 선택 부분 2바이트로 변환 시작 */
copyBool=false;
var copiedtext="";

/*
    select box 의 text 중 일치하는 항목을 찾아서 select한다.

    searchText          : 찾으려고 하는 text 값
    targetSelectBoxID   : searchText를 찾기 위한 select box 의 id
*/
function selectOptionValue(searchText, targetSelectBoxID){
    var toptions    = document.getElementById(targetSelectBoxID);
    var str         = searchText;

    if (str != '') {
        for (var idx= 0 ; idx < (toptions.options.length); idx++){

            if (toptions.options[idx].text.indexOf(str) > -1){
                toptions.options[idx].selected = true;
            }
            else{
                toptions.options[idx].selected = false;
            }
        }
    }

}

// select box 의 option들을 모두 삭제한다.
function deleteAllOptions(selectBoxObject) {

    var selObj = selectBoxObject;
    selObj.options.length = null;
    /*
    for (var r=0; r<selObj.options.length; r++) {
        selObj.options.length = null;
    }
    */
}

// select box 에 option을 추가한다.
function appendOption(selectBoxObject, optionValue, optionText) {
    var selObj = selectBoxObject;
    selObj.options[selObj.options.length] = new Option(optionText, optionValue);
    /*
    var optObj = document.createElement("OPTION");

    optObj.text = optionText;
    optObj.value = optionValue;
    selObj.options.add(optObj);
    */
}


/*
    select box 의 text 중 처음 일치하는 항목을 찾아서 select한다.

    searchText          : 찾으려고 하는 text 값
    targetSelectBoxID   : searchText를 찾기 위한 select box 의 id
*/
function searchOptionValue(searchText, targetSelectBoxID  ){
    var toptions    = document.getElementById(targetSelectBoxID);
    var str         = searchText;

    toptions.selectedIndex = -1;

    if (str != '') {
        for (var idx= 0 ; idx < (toptions.options.length); idx++){

            if (toptions.options[idx].text.indexOf(str) == 0){
                toptions.options[idx].selected = true;
                break;
            }
            else{
                toptions.options[idx].selected = false;
            }
        }
    }

}

function initiatecopy() {
    copyBool=true;
}

// 선택 부분 카피하여 클립보드에 붙임
function copyit() {
    if (copyBool) {
        copiedtext = "";
        document.execCommand("Copy");
        if(window.clipboardData.getData("Text") != ''){
            copiedtext=window.clipboardData.getData("Text");
        }
        copyBool=false;
    }
}

// 클릭하여 드래그한 부분 2바이트로 반환
    function clickHalf2Full(){
        var ctrl = window.event.ctrlKey;
        var shift = window.event.shiftKey;
        var obj_full = this;
        var temp_copy;
        var org_value;
        if(ctrl && shift && event.keyCode == 38){
            initiatecopy();
            copyit();
            org_value = obj_full.value;
            temp_copy = copiedtext;
            if(temp_copy != null && temp_copy.replace(/ /gi,"") != ''){
                this.value = org_value.substring(0,org_value.indexOf(copiedtext)) + Half2Full(copiedtext) + org_value.substring(org_value.indexOf(copiedtext)+copiedtext.length);
                window.clipboardData.setData("Text","");
            }
        }
    }

/* 마우스 선택 부분 2바이트로 변환 끝 */

function WM_getCursorHandler(e) {
  // set event properties to global vars (add or subtract as desired)
  window.event.clientX = e.pageX;
  window.event.clientY = e.pageY;
  window.event.x = e.layerX;
  window.event.y = e.layerY;
  window.event.screenX = e.screenX;
  window.event.screenY = e.screenY;
  // route the event back to the intended function
  if ( routeEvent(e) == false ) {
    return false;
  } else {
    return true;
  }
}

// select box에 선택된 value를 리턴한다.(단 multi select는 지원 안함)
function getSelectBoxValue(obj)
{
    var options = obj.options;
    for(var i=0; i<options.length; i++) {
        if (options[i].selected) {
            return options[i].value;
        }
    }
}


// select box에 선택된 text를 리턴한다.(단 multi select는 지원 안함)
function getSelectBoxText(obj)
{
    var options = obj.options;
    for(var i=0; i<options.length; i++) {
        if (options[i].selected) {
            return options[i].text;
        }
    }
}

function initDocument(width, height)
{
    if ( typeof document.appletmain == "undefined" )  return;

    if(document.appletmain.isActive())
    {
        document.all("appletmain").style.visibility = "visible";
        document.all("appletmain").style.width = width;
        document.all("appletmain").style.height = height;
    }
    else
    {
        setTimeout("initDocument('" + width + "','" + height + "');",1);
    }
}



function initDocument1(width, height)
{
    if ( typeof appletmain1 == "undefined" )  return;

    if(appletmain.isActive())
    {
        document.all("appletmain1").style.visibility = "visible";
        document.all("appletmain1").style.width = width;
        document.all("appletmain1").style.height = height;
    }
    else
    {
        setTimeout("initDocument1('" + width + "','" + height + "');",1);
    }
}

// 캐릭터 타입 검증 'H'-한글, 'E'-영문, 'N'-숫자, 'Z'-기타
function getCharType(pValue){
    var bHan = false;
    var bAlp = false;
    var bNum = false;
    var bEtc = false;

    var retStr="";

    if(isEmpty(pValue)){
        return "";
    }

    for(var idx=0; idx < pValue.length; idx++){
        if (isAlpha(pValue[idx])) {
            bAlp = true;
        }
        else if (isNum(pValue[idx])) {
            bNum = true;
        }
        else if (isHangul(pValue[idx])) {
            bHan = true;
        }
        else {
            bEtc = true;
        }

        if (bHan) retStr = retStr + "H";
        if (bAlp) retStr = retStr + "E";
        if (bNum) retStr = retStr + "N";
        if (bEtc) retStr = retStr + "Z";
    }

    return retStr;
}

// 미암호화 분기
function go_pass(sUrl, sTarget){
    if (sTarget == null) {
        sTarget = "_self";
    }
    tempPassForm.target = sTarget;
    tempPassForm.action = sUrl;
    tempPassForm.submit();
}

// 암호화 분기
function go_tempPass(sUrl, sTarget){
    if (sTarget == null) {
        sTarget = "_self";
    }
    tempPassForm.target = sTarget;
    tempPassForm.action = sUrl;
    go_encSubmit(tempPassForm);
}


//새창 여는 함수
function uf_newWin( url, winName, sizeW, sizeH, frm)
{
	
    if(frm=="" || frm=="undefined" || frm==undefined) frm = document.frm;
	
    if(winName=="" || winName=="undefined") winName = "Default";

    var nLeft  = screen.width/2 - sizeW/2 ;
    var nTop  = screen.height/2 - sizeH/2 ;

    opt = ",toolbar=no,menubar=no,location=no,scrollbars=yes,status=yes,resizable=yes";
    window.open('', winName, "left=" + nLeft + ",top=" +  nTop + ",width=" + sizeW + ",height=" + sizeH  + opt );
	
    frm.target = winName;
    frm.action = url;
    frm.method = "post";

    fn_submit(frm);

}




//새창 여는 함수
function uf_newModalWin( url, winName, sizeW, sizeH)
{
    var nLeft  = screen.width/2 - sizeW/2 ;
    var nTop  = screen.height/2 - sizeH/2 ;



    opt = "scroll=no;status=no;help=no;resizable:no;";
    window.showModalDialog(url, winName, "dialogWidth=" + sizeW + "px;dialogHeight="  +sizeH + "px;dialogLeft=" + nLeft + ";dialogTop=" + nTop + ";" + opt);

}





//새창 여는 함수
function uf_frmNewWin( url, winName, sizeW, sizeH)
{
    var nLeft  = screen.width/2 - sizeW/2 ;
    var nTop  = screen.height/2 - sizeH/2 ;
    var pos = 0;
    var winObj;

    opt = ",toolbar=no,menubar=no,location=no,scrollbars=no,status=no, resizable = yes";
    winObj = window.open("", winName, "width=" + sizeW + ",height=" + sizeH  + opt );

    if (winObj == null) {
        alert("팝업차단 기능을 해지하십시오.\n\n[ 도구->인터넷옵션->개인 정보->팝업차단] 체크해지");
        return;
    }


    document.frm.target = winName;
    document.frm.action = url;
    document.frm.submit();

}


//새창 여는 함수
function uf_frmNewWin2(userFrm, url, winName, sizeW, sizeH)
{
    var nLeft  = screen.width/2 - sizeW/2 ;
    var nTop  = screen.height/2 - sizeH/2 ;
    var pos = 0;
    var winObj;

    opt = ",toolbar=no,menubar=no,location=no,scrollbars=no,status=no, resizable = no";
    winObj = window.open("", winName, "width=" + sizeW + ",height=" + sizeH  + opt );

    if (winObj == null) {
        alert("팝업차단 기능을 해지하십시오.\n\n[ 도구->인터넷옵션->개인 정보->팝업차단] 체크해지");
        return;
    }


    userFrm.target = winName;
    userFrm.action = url;
    userFrm.submit();

}



//새창 사이즈 정함
function uf_reSize ( sizeW, sizeH)
{
    window.resizeTo( sizeW, sizeH );
    moveCenter();

}

// 화면을 중앙으로 이동
function moveCenter() {
   if (document.layers) {
       var sinist = screen.width / 2 - outerWidth / 2;
       var toppo = screen.height / 2 - outerHeight / 2;
   } else {
       var sinist = screen.width / 2 - document.body.offsetWidth / 2;
       var toppo = -55 + screen.height / 2 - document.body.offsetHeight / 2;
   }
   self.moveTo(sinist, toppo);
}

//옵션이 있는경우

function selDataChange(form) {
  var DataIndex=form.url.selectedIndex;
  if (form.url.options[DataIndex].value != null) {
       location=form.url.options[DataIndex].value;
  }
}

function selDataChange2(form) {
  var DataIndex=form.url2.selectedIndex;
  if (form.url2.options[DataIndex].value != null) {
       location=form.url2.options[DataIndex].value;
  }
}

/**
 * 입력값이 NULL인지 체크
 */
function isNull(input) {
    if (input.value == null || input.value == "") {
        return true;
    }
    return false;
}

/**
 * 입력값에 스페이스 이외의 의미있는 값이 있는지 체크
 * ex) if (isEmpty(form.keyword)) {
 *         alert("검색조건을 입력하세요.");
 *     }
 */
function isEmptyByObj(input) {
    return isEmpty(input.value);
}


/**
 * 입력값에 특정 문자(chars)가 있는지 체크
 * 특정 문자를 허용하지 않으려 할 때 사용
 * ex) if (containsChars(form.name,"!,*&^%$#@~;")) {
 *         alert("이름 필드에는 특수 문자를 사용할 수 없습니다.");
 *     }
 */
function containsChars(input,chars) {
    for (var inx = 0; inx < input.value.length; inx++) {
       if (chars.indexOf(input.value.charAt(inx)) != -1)
           return true;
    }
    return false;
}

/**
 * 입력값이 특정 문자(chars)만으로 되어있는지 체크
 * 특정 문자만 허용하려 할 때 사용
 * ex) if (!containsCharsOnly(form.blood,"ABO")) {
 *         alert("혈액형 필드에는 A,B,O 문자만 사용할 수 있습니다.");
 *     }
 */
function containsCharsOnly(input,chars) {
    for (var inx = 0; inx < input.value.length; inx++) {
       if (chars.indexOf(input.value.charAt(inx)) == -1)
           return false;
    }
    return true;
}
function isStartWith(input,chars) {
    for (var inx = 0; inx < chars.length; inx++) {
       if (chars.indexOf(input.value.charAt(0)) == -1)
           return false;
    }
    return true;
}
/**
 * 입력값이 알파벳인지 체크
 */
function isAlphabet(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 알파벳 대문자인지 체크
 */
function isUpperCase(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 알파벳 소문자인지 체크
 */
function isLowerCase(input) {
    var chars = "abcdefghijklmnopqrstuvwxyz ";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값에 숫자만 있는지 체크
 */
function isNumber(input) {
    var chars = "0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 알파벳,숫자로 되어있는지 체크
 */
function isAlphaNum(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";
    return containsCharsOnly(input,chars);
}

function isBigAlphaNum(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ";
    return containsCharsOnly(input,chars);
}
/**
 * 입력값이 숫자,대시(-)로 되어있는지 체크
 */
function isNumDash(input) {
    var chars = "-0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 숫자,콤마(,)로 되어있는지 체크
 */
function isNumComma(input) {
    var chars = ",0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 사용자가 정의한 포맷 형식인지 체크
 * 자세한 format 형식은 자바스크립트의 'regular expression'을 참조
 */
function isValidFormat(input,format) {
    if (input.value.search(format) != -1) {
        return true; //올바른 포맷 형식
    }
    return false;
}

/**
 * 입력값이 이메일 형식인지 체크
 * ex) if (!isValidEmail(form.email)) {
 *         alert("올바른 이메일 주소가 아닙니다.");
 *     }
 */
function isValidEmail(input) {
//    var format = /^(\S+)@(\S+)\.([A-Za-z]+)$/;
    var format = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;
    return isValidFormat(input,format);
}

/**
 * 입력값이 전화번호 형식(숫자-숫자-숫자)인지 체크
 */
function isValidPhone(input) {
    var format = /^(\d+)-(\d+)-(\d+)$/;
    return isValidFormat(input,format);
}

/**
 * 입력값의 바이트 길이를 리턴
 * ex) if (getByteLength(form.title) > 100) {
 *         alert("제목은 한글 50자(영문 100자) 이상 입력할 수 없습니다.");
 *     }
 */
function getByteLength(input) {
    var byteLength = 0;
    for (var inx = 0; inx < input.value.length; inx++) {
        var oneChar = escape(input.value.charAt(inx));
        if ( oneChar.length == 1 ) {
            byteLength ++;
        } else if (oneChar.indexOf("%u") != -1) {
            byteLength += 2;
        } else if (oneChar.indexOf("%") != -1) {
            byteLength += oneChar.length/3;
        }
    }
    return byteLength;
}

/**
 * 문자열의 바이트 길이를 리턴
 */
function getStringByteLength(str) {
    var byteLength = 0;
    for (var inx = 0; inx < str.length; inx++) {
        var oneChar = escape(str.charAt(inx));
        if ( oneChar.length == 1 ) {
            byteLength ++;
        } else if (oneChar.indexOf("%u") != -1) {
            byteLength += 2;
        } else if (oneChar.indexOf("%") != -1) {
            byteLength += oneChar.length/3;
        }
    }
    return byteLength;
}

/**
 * 입력값에서 콤마를 없앤다.
 */
function removeComma(input) {
    return input.replace(/,/gi,"");
}

/**
 * 선택된 라디오버튼이 있는지 체크
 */
function hasCheckedRadio(input) {
    if (input.length > 1) {
        for (var inx = 0; inx < input.length; inx++) {
            if (input[inx].checked) return true;
        }
    } else {
        if (input.checked) return true;
    }
    return false;
}

/**
 * 선택된 라디오버튼이 있는지 체크
 */
function getCheckedRadioValue(input) {
    if (input.length > 1) {
        for (var inx = 0; inx < input.length; inx++) {
            if (input[inx].checked) return input[inx].value;
        }
    } else {
        if (input.checked) return input.value;
    }
    return false;
}


/**
 * 선택된 체크박스가 있는지 체크
 */
function hasCheckedBox(input) {
    return hasCheckedRadio(input);
}


/**
 * 선택된 체크박스가  몇개인지  그 개수를 반환
 */
function hasMultiCheckedRadio(input) {
var kkkk = 0;
    if (input.length > 1) {
        for (var inx = 0; inx < input.length; inx++) {
            if (input[inx].checked) {
            kkkk++;
            }
        }
    } else {
         if (input.checked) kkkk=1;
    }
    return kkkk;
}

/**
 * 유효한(존재하는) 월(月)인지 체크
 */
function isValidMonth(mm) {
    var m = parseInt(mm,10);
    return (m >= 1 && m <= 12);
}

/**
 * 유효한(존재하는) 일(日)인지 체크
 */
function isValidDay(yyyy, mm, dd) {
    var m = parseInt(mm,10) - 1;
    var d = parseInt(dd,10);

    var end = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
    if ((yyyy % 4 == 0 && yyyy % 100 != 0) || yyyy % 400 == 0) {
        end[1] = 29;
    }

    return (d >= 1 && d <= end[m]);
}

/**
 * 유효한(존재하는) 시(時)인지 체크
 */
function isValidHour(hh) {
    var h = parseInt(hh,10);
    return (h >= 1 && h <= 24);
}

/**
 * 유효한(존재하는) 분(分)인지 체크
 */
function isValidMin(mi) {
    var m = parseInt(mi,10);
    return (m >= 1 && m <= 60);
}

/**
 * Time 형식인지 체크(느슨한 체크)
 */
function isValidTimeFormat(time) {
    return (!isNaN(time) && time.length == 12);
}

/**
 * 유효하는(존재하는) Time 인지 체크
 * ex) var time = form.time.value; //'200102310000'
 *     if (!isValidTime(time)) {
 *         alert("올바른 날짜가 아닙니다.");
 *     }
 */
function isValidTime(time) {
    var year  = time.substring(0,4);
    var month = time.substring(4,6);
    var day   = time.substring(6,8);
    var hour  = time.substring(8,10);
    var min   = time.substring(10,12);

    if (parseInt(year,10) >= 1900  && isValidMonth(month) &&
        isValidDay(year,month,day) && isValidHour(hour)   &&
        isValidMin(min)) {
        return true;
    }
    return false;
}

/**
 * Time 스트링을 자바스크립트 Date 객체로 변환
 * parameter time: Time 형식의 String
 */
function toTimeObject(time) { //parseTime(time)
    var year  = time.substr(0,4);
    var month = time.substr(4,2) - 1; // 1월=0,12월=11
    var day   = time.substr(6,2);
    var hour  = time.substr(8,2);
    var min   = time.substr(10,2);

    return new Date(year,month,day,hour,min);
}

/**
 * 자바스크립트 Date 객체를 Time 스트링으로 변환
 * parameter date: JavaScript Date Object
 */
function toTimeString(date) { //formatTime(date)
    var year  = date.getFullYear();
    var month = date.getMonth() + 1; // 1월=0,12월=11이므로 1 더함
    var day   = date.getDate();
    var hour  = date.getHours();
    var min   = date.getMinutes();

    if (("" + month).length == 1) { month = "0" + month; }
    if (("" + day).length   == 1) { day   = "0" + day;   }
    if (("" + hour).length  == 1) { hour  = "0" + hour;  }
    if (("" + min).length   == 1) { min   = "0" + min;   }

    return ("" + year + month + day + hour + min)
}
/**
 * Time이 현재시각 이후(미래)인지 체크
 */
function isFutureTime(time) {
    return (toTimeObject(time) > new Date());
}

/**
 * Time이 현재시각 이전(과거)인지 체크
 */
function isPastTime(time) {
    return (toTimeObject(time) < new Date());
}

/**
 * 주어진 Time 과 y년 m월 d일 h시 차이나는 Time을 리턴
 * ex) var time = form.time.value; //'20000101000'
 *     alert(shiftTime(time,0,0,-100,0));
 *     => 2000/01/01 00:00 으로부터 100일 전 Time
 */
function shiftTime(time,y,m,d,h) { //moveTime(time,y,m,d,h)
    var date = toTimeObject(time);

    date.setFullYear(date.getFullYear() + y); //y년을 더함
    date.setMonth(date.getMonth() + m);       //m월을 더함
    date.setDate(date.getDate() + d);         //d일을 더함
    date.setHours(date.getHours() + h);       //h시를 더함

    return toTimeString(date);
}

/**
 * 두 Time이 몇 개월 차이나는지 구함
 * time1이 time2보다 크면(미래면) minus(-)
 */
function getMonthInterval(time1,time2) { //measureMonthInterval(time1,time2)
    var date1 = toTimeObject(time1);
    var date2 = toTimeObject(time2);

    var years  = date2.getFullYear() - date1.getFullYear();
    var months = date2.getMonth() - date1.getMonth();
    var days   = date2.getDate() - date1.getDate();

    return (years * 12 + months + (days >= 0 ? 0 : -1) );
}

/**
 * 두 Time이 며칠 차이나는지 구함
 * time1이 time2보다 크면(미래면) minus(-)
 */
function getDayInterval(time1,time2) {
    var date1 = toTimeObject(time1);
    var date2 = toTimeObject(time2);
    var day   = 1000 * 3600 * 24; //24시간

    return parseInt((date2 - date1) / day, 10);
}

/**
 * 두 Time이 몇 시간 차이나는지 구함
 * time1이 time2보다 크면(미래면) minus(-)
 */
function getHourInterval(time1,time2) {
    var date1 = toTimeObject(time1);
    var date2 = toTimeObject(time2);
    var hour  = 1000 * 3600; //1시간

    return parseInt((date2 - date1) / hour, 10);
}

/**
 * 현재 시각을 Time 형식으로 리턴
 */
function getCurrentTime() {
    return toTimeString(new Date());
}

/**
 * 현재 시각과 y년 m월 d일 h시 차이나는 Time을 리턴
 */
function getRelativeTime(y,m,d,h) {

    return shiftTime(getCurrentTime(),y,m,d,h);
}

/**
 * 현재 年을 YYYY형식으로 리턴
 */
function getYear() {

    return getCurrentTime().substr(0,4);
}

/**
 * 현재 月을 MM형식으로 리턴
 */
function getMonth() {

    return getCurrentTime().substr(4,2);
}

/**
 * 현재 日을 DD형식으로 리턴
 */
function getDay() {

    return getCurrentTime().substr(6,2);
}

/**
 * 현재 時를 HH형식으로 리턴
 */
function getHour() {

    return getCurrentTime().substr(8,2);
}

/**
 * 오늘이 무슨 요일이야?
 * ex) alert('오늘은 ' + getDayOfWeek() + '요일입니다.');
 */
function getDayOfWeek() {
    var now = new Date();

    var day = now.getDay(); //일요일=0,월요일=1,...,토요일=6
    var week = new Array('일','월','화','수','목','금','토');

    return week[day];
}


/**
 * 특정날짜의 요일을 구한다.
 */
function getDayOfWeek(time) {
    var now = toTimeObject(time);

    var day = now.getDay(); //일요일=0,월요일=1,...,토요일=6
    var week = new Array('일','월','화','수','목','금','토');

    return week[day];
}


/**
 * 특정날짜의 요일의 배열 값을 구한다.
 */
function getDayOfWeekNum(time) {
    var now = toTimeObject(time);

    var day = now.getDay(); //일요일=0,월요일=1,...,토요일=6

    return day;
}


/**
*   문자열의 오른쪽 끝에서 부터 지정된 개수만큼의 문자들을 리턴한다.
*/

function substrInverse(str, num)
{
    var len;

    len = str.length;

    return str.substr(len - num, num);
}

/**
*  문자열로의 특정위치로부터 지정된 개수의 문자들을 리턴한다.
*/
function substrMid(str, idx, num)
{
    return str.substr( idx-1, num);
}



/**
* Cookie 구하기
*/


function getCookie(uName) {

    var flag = document.cookie.indexOf(uName+'=');
    if (flag != -1) {
        flag += uName.length + 1
        end = document.cookie.indexOf(';', flag)

        if (end == -1) end = document.cookie.length
        return unescape(document.cookie.substring(flag, end))
    }
}

    function Half2Full(HalfVal)
    {
            var arg;
            arg = myHalf2Full(HalfVal);
        return arg;
    }

function myHalf2Full(HalfVal)
{
        var FullChar = [
               "　", "！","＂","＃","＄","％","＆","＇","（",       //33~
        "）","＊","＋","，","－","．","／","０","１","２",      //41~
        "３","４","５","６","７","８","９","：","；","＜",      //51~
        "＝","＞","？","＠","Ａ","Ｂ","Ｃ","Ｄ","Ｅ","Ｆ",      //61~
        "Ｇ","Ｈ","Ｉ","Ｊ","Ｋ","Ｌ","Ｍ","Ｎ","Ｏ","Ｐ",      //71~
        "Ｑ","Ｒ","Ｓ","Ｔ","Ｕ","Ｖ","Ｗ","Ｘ","Ｙ","Ｚ",      //81~
        "［","￦","］","＾","＿","｀","ａ","ｂ","ｃ","ｄ",      //91~
        "ｅ","ｆ","ｇ","ｈ","ｉ","ｊ","ｋ","ｌ","ｍ","ｎ",      //101~
        "ｏ","ｐ","ｑ","ｒ","ｓ","ｔ","ｕ","ｖ","ｗ","ｘ",      //111~
        "ｙ","ｚ","｛","｜","｝","～"                           //121~
        ];
    var stFinal = "";
        var ascii;
        for( i = 0; i < HalfVal.length; i++)
        {
                ascii = HalfVal.charCodeAt(i);
                if( (31 < ascii && ascii < 128))
                {
                  stFinal += FullChar[ascii-32];
                }
                else
                {
                  stFinal += HalfVal.charAt(i);
                }
        }
        return stFinal;
}
function frmMoney(input){
    input.value = putComma(input);
}
function unFrmMoney(input){
    input.value = replace(input.value,",","");
}
function frmDate(input){
    if(input.value=="") return
    input.value = input.value.substring(0,4) + "-" + input.value.substring(4,6) + "-" + input.value.substring(6,8);
}
function unFrmDate(input){
    input.value = replace(input.value,"-","");
}
function frmTime(input){
    input.value = input.value.substring(0,2) + ":" + input.value.substring(2,4) + ":" + input.value.substring(4,6);
}
function unFrmTime(input){
    input.value = replace(input.value,":","");
}
function frmAcct(input){
    input.value = input.value.substring(0,3) + "-" + input.value.substring(3,9) + "-" + input.value.substring(9,14);
}
function unFrmAcct(input){
    input.value = replace(input.value,"-","");
}


function putCashDash(value){
    if(value=="") return ;
    value = value.substring(0,4) + "-" + value.substring(4,8) + "-" + value.substring(8,12)+ "-" + value.substring(12);
    return value;
}

function selectAll(input) {
    for(i=0;i<input.options.length;i++){
        input.options[i].selected=true;
    }
}

// 이중 거래를 방지 하기 위해 처리페이지로 서브밋 전에 호출하여 준다.
/*
function setDupCheckInfo(target_frm)
{
    // 기존 생성된 오브젝트 삭제
    if(target_frm._submit_time != null && target_frm._submit_time != undefined  ) {
        target_frm.removeChild(_submit_time);
    }

    var e=document.createElement("input");
    now = new Date();
    e.setAttribute("type" , "hidden");
    e.setAttribute("name" , "_submit_time");
    e.setAttribute("value", new Date().getTime());
    e.setAttribute("_temp2","true");
    target_frm.appendChild(e);
}
*/

function setSelect(input,str) {
    for(i=0;i<input.options.length;i++){
        if(input.options[i].value == str)
            input.options[i].selected=true;
    }
}
// 외환에서 특정 통화일때 소수점이하 금액없애기
function Curr(str1, str2){
    obj1 = eval("frm."+str1+".value")
    obj2 = eval("frm."+str2+".style")
    if(obj1=="JPY"||obj1=="ITL"||obj1=="BEF"||obj1=="KRW"){
        obj2.display = "none"
    }else{
        obj2.display = ""
    }
}
function Curr2(str1, str2, str3){
    obj1 = eval("frm."+str1+".value")
    obj2 = eval("frm."+str2+".style")
    obj3 = eval("frm."+str3+".style")
    if(obj1=="JPY"||obj1=="ITL"||obj1=="BEF"||obj1=="KRW"){
        obj2.display = "none"
        obj3.display = "none"
    }else{
        obj2.display = ""
        obj3.display = ""
    }
}


/*
* 한미은행 고객번호 세팅(9자리)
* 앞에 '0'을 채운다
* by ysd 2002-03-28 11:36오전
**/

function fill_cifno(obj){
    var temp="";

    if(obj.value == null || obj.value.length < 1 ){
        alert("고객번호를 입력하세요");
        obj.focus();
        return false;
    }
    if(obj.value.length != 9 ){
        for(i=0;i<(9-obj.value.length);i++){
            temp +="0";
        }
        obj.value = temp+obj.value;
    }else{
        obj.value = obj.value;
    }

    return true;
}



////////////////////////////////////////////////////////////////
// 데이터 전송형태 관련
////////////////////////////////////////////////////////////////

// get 방식의 파라미터를 해당폼에 input hidden 객체로 생성한다.
function get2post(frm,sSearch){
    if (sSearch.length > 0) {

        var asKeyValues = sSearch.split('&');
        var asKeyValue  = '';

        for (var i = 0; i < asKeyValues.length; i++) {

            asKeyValue = asKeyValues[i].split('=');
            var e = document.createElement("input");
            e.setAttribute("type","hidden");
            e.setAttribute("name",asKeyValue[0]);
            e.setAttribute("value",asKeyValue[1]);
            e.setAttribute("_temp","true");

//          alert("[" + e.name +"]:[" + e.value +"]");

            frm.appendChild(e);
        }
     }
//   alert("form 객체 갯수" + frm.elements.length);
}

// get2post로 생성한 임시 객체를 파괴한다.
function removeTempAttribute(frm){
    var idx=0;
    while (idx<frm.elements.length) {
        var obj = frm.elements[idx];

        if( obj.getAttribute("_temp") != null && obj.getAttribute("_temp") == "true"){
            frm.removeChild(obj);
            continue;
        }
        idx++;
    }
}



////////////////////////////////////////////////////////////////
// checkbox 관련
////////////////////////////////////////////////////////////////

// check 한 개수를 리턴한다.
function getCheckedCount( aElem ) {

    var elem = document.all;
    var cnt = 0;

    for ( var i=0; i<document.all.length; i++ ) {
        if ( ( elem[i].type == "checkbox" ) && ( elem[i].checked ) && ( elem[i].name == aElem ) )   cnt = cnt + 1;
    }

    return cnt;
}

    // 지정한 이름의 checkbox를 찾아서 주어진 값에 해당하는 box를 check한다.
function checkValue( aElem, aValue ) {

    var elem = document.all;
    var cnt = 0;

    for ( var i=0; i<document.all.length; i++ ) {
        if ( ( elem[i].type == "checkbox" ) && ( elem[i].name == aElem ) && ( elem[i].value == aValue ) )   elem[i].checked = true;
    }
}



// 지정한 이름을 가진 모든 checkbox를 check 한다.
function checkAll( aElem ) {

    var elem = document.all;
    var cnt = 0;

    for ( var i=0; i<document.all.length; i++ ) {
        if ( ( elem[i].type == "checkbox" ) && ( elem[i].name == aElem ) )  elem[i].checked = true;
    }
}

// 지정한 이름을 가진 모든 checkbox를 uncheck 한다.
function uncheckAll( aElem ) {

    var elem = document.all;
    var cnt = 0;

    for ( var i=0; i<document.all.length; i++ ) {
        if ( ( elem[i].type == "checkbox" ) && ( elem[i].name == aElem ) )  elem[i].checked = false;
    }
}

// 지정한 이름을 가진 모든 checkbox의 checked 값을 반전 한다.
function invertCheck( aElem ) {

    var elem = document.all;
    var cnt = 0;

    for ( var i=0; i<document.all.length; i++ ) {
        if ( ( elem[i].type == "checkbox" ) && ( elem[i].name == aElem ) )  {
            if ( elem[i].checked ) {
                elem[i].checked = false;
            }
            else{
                elem[i].checked = true;
            }
        }
    }
}









            ////////////////////////////////
// UTIL 함수
////////////////////////////////

var isDivEvent = false;

function hideOneNav(){
    if (!isDivEvent) {
        window.account.style.visibility='hidden';
    }
    else{
        isDivEvent = false;
    }
}


function showOneNav(obj){
    isDivEvent = true;
    window.account.style.left = getLeftPos(obj);
    window.account.style.top = getTopPos(obj) + obj.offsetHeight - 8;
    window.account.style.visibility='visible';
    return false;
}

function getLeftPos(obj){
    var parentObj = null;
    var clientObj = obj;
    var left = obj.offsetLeft + document.body.clientLeft;

    while((parentObj=clientObj.offsetParent) != null){
        left = left + parentObj.offsetLeft;
        clientObj = parentObj;
    }

    return left;
}

function getTopPos(obj){
    var parentObj = null;
    var clientObj = obj;
    var top = obj.offsetTop + document.body.clientTop;

    while((parentObj=clientObj.offsetParent) != null){
        top = top + parentObj.offsetTop;
        clientObj = parentObj;
    }

    return top;
}

/**
*  문자열에 있는 특정문자패턴을 다른 문자패턴으로 바꾸는 함수.
*/

/*
function replace(targetStr, searchStr, replaceStr)
{
    var len, i, tmpstr;

    len = targetStr.length;
    tmpstr = "";

    for ( i = 0 ; i < len ; i++ ) {
        if ( targetStr.charAt(i) != searchStr ) {
            tmpstr = tmpstr + targetStr.charAt(i);
        }
        else {
            tmpstr = tmpstr + replaceStr;
        }
    }

    return tmpstr;
}
*/

function replace(targetStr, searchStr, replaceStr)
{
    var i=0,j=0;
    if (targetStr == null || searchStr == null || replaceStr == null) return "";

    var tmpStr = "";

    var tlen = targetStr.length;
    var slen = searchStr.length;


    var i=0;
    var j=0;

    while (i < tlen - slen+1)
    {
        j = i + slen;

        if (targetStr.substring(i,j) == searchStr)
        {
            tmpStr += replaceStr;
            i += slen;

        }
        else
        {
            tmpStr += targetStr.substring(i, i + 1);
            i++;
        }



    }

    tmpStr +=  targetStr.substring(i);

    return tmpStr;


}

/**
*  문자열에서 좌우 공백제거
*/

function trim(str)
{
    return replace(str," ","");
}

/**
*   콤마설정.
*/

function putComma(input) {
    var num = input;

    if (num < 0) {
        num *= -1;
        var minus = true
    }else{
        var minus = false
    }

    var dotPos = (num+"").split(".")
    var dotU = dotPos[0]
    var dotD = dotPos[1]
    var commaFlag = dotU.length%3

    if(commaFlag) {
        var out = dotU.substring(0, commaFlag)
        if (dotU.length > 3) out += ","
    }
    else var out = ""

    for (var i=commaFlag; i < dotU.length; i+=3) {
        out += dotU.substring(i, i+3)
        if( i < dotU.length-3) out += ","
    }

    if(minus) out = "-" + out
    if(dotD) return out + "." + dotD
    else return out
}


//월의 끝 일자 얻기
function getEndDate(datestr){

    //널인지?
    if(isEmpty(datestr)){
        return null;
    }

    //숫자인지?
    if(!isNum(datestr)){
        return null;
    }

    //길이가 8자리?
    if(datestr.length != 6){
        return null;
    }

    var yy = Number(datestr.substring(0,4));
    var mm = Number(datestr.substring(4,6));

    //윤년 검증
    var boundDay = "";

    if(mm != 2){
        var mon=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
        boundDay = mon[mm-1];
    }
    else{
        if (yy%4 == 0 && yy%100 != 0 || yy%400 == 0){
            boundDay = 29;
        }
        else{
            boundDay = 28;
        }
    }

    return boundDay;
}

// Left 빈자리 만큼 padStr 을 붙인다.
function lpad(src, len, padStr){
    var retStr = "";
    var padCnt = Number(len) - String(src).length;
    for(var i=0;i<padCnt;i++) retStr += String(padStr);
    return retStr+src;
}

// Right 빈자리 만큼 padStr 을 붙인다.
function rpad(src, len, padStr){
    var retStr = "";
    var padCnt = Number(len) - String(src).length;
    for(var i=0;i<padCnt;i++) retStr += String(padStr);
    return src+retStr;
}


// 전화번호 국번검증
function isValidDDDPhoneNum(dddphonenum)
{

    // 널인가?
    if (isEmpty(dddphonenum)) {
        return null;
    }


    if ( dddphonenum != "02" && dddphonenum != "031" && dddphonenum != "032" && dddphonenum != "033" && dddphonenum != "041" &&
         dddphonenum != "042" && dddphonenum != "043" && dddphonenum != "051" && dddphonenum != "052" && dddphonenum != "053" &&
         dddphonenum != "054" && dddphonenum != "055" && dddphonenum != "061" && dddphonenum != "062" && dddphonenum != "063" &&
         dddphonenum != "064" && dddphonenum != "011" && dddphonenum != "016" && dddphonenum != "017" && dddphonenum != "018" && dddphonenum != "019" && dddphonenum != "010" )
    {

        ERR_MSG = "잘못된 전화번호 국번입니다.";
        return false;
    }

    return true;

}


// 대문자변환
function toUpperCase(str){

    if(isEmpty(str)) return str;
    return str.toUpperCase();
}


// 숫자검증
function isNum(str){

    if(isEmpty(str)) return false;

    for(var idx=0;idx < str.length;idx++){
        if(str.charAt(idx) < '0' || str.charAt(idx) > '9'){
            return false;
        }
    }
    return true;
}


// 영문자검증
function isAlpha(str){

    if(isEmpty(str)) return false;

    for(var idx=0;idx < str.length;idx++){
        if(!((str.charAt(idx) >='a' && str <= 'z') || (str.charAt(idx) >= 'A' && str <= 'Z'))){
            return false;
        }
    }
    return true;
}


// 한글검증
function isHangul(str){

    if(isEmpty(str)) return false;

    for(var idx=0;idx < str.length;idx++){
      var c = escape(str.charAt(idx));
      if ( c.indexOf("%u") == -1 ) {
            return false;
        }
    }
    return true;
}


// 실제길이 반환( 한글 2byte 계산 )
function getByteLength(s){

   var len = 0;
   if ( s == null ) return 0;
   for(var i=0;i<s.length;i++){
      var c = escape(s.charAt(i));
      if ( c.length == 1 ) len ++;
      else if ( c.indexOf("%u") != -1 ) len += 2;
      else if ( c.indexOf("%") != -1 ) len += c.length/3;
   }
   return len;
}


// 빈값인지 리턴한다.
function isEmpty(pValue){
    if (pValue == null || pValue.replace(/ /gi,"") == "") {
        return true;
    }
    return false;
}




//검색날짜 유효기간
function getBoundDate1(yy,mm,dd,stdDate)
{
    var today = new Date();
    today.setYear(stdDate.substring(0,4));
    today.setMonth(stdDate.substring(4,6)-1);
    today.setDate(stdDate.substring(6,8));
    today.setHours(today.getHours());
    today.setMinutes(today.getMinutes());
    today.setSeconds(today.getSeconds());

    yy = Number(yy);
    mm = Number(mm);
    dd = Number(dd);

    var date = new Date();

    var DAY = 24 * 60 * 60 * 1000;

    if ( yy != 0 ){
        date.setTime(today.getTime() + DAY * 365 * yy);
    }

    if ( mm != 0 ){
        date.setTime(today.getTime() + DAY * 30 * mm);
    }

    if ( dd != 0 ){
        date.setTime(today.getTime() + DAY * dd);
    }

    return lpad(new String(date.getYear()),4,'0') + lpad(new String(date.getMonth() + 1),2,'0') + lpad(new String(date.getDate()),2,'0');
}



function getBoundDate(yy, mm, dd) {
    yy = Number(yy);
    mm = Number(mm);
    dd = Number(dd);

    var date = new Date();

    var DAY = 24 * 60 * 60 * 1000;


    if ( yy != 0 ){
        date.setTime(datToday.getTime() + DAY * 365 * yy);
    }

    if ( mm != 0 ){
        date.setTime(datToday.getTime() + DAY * 30 * mm);
    }

    if ( dd != 0 ){
        date.setTime(datToday.getTime() + DAY * dd);
    }

    return lpad(new String(date.getYear()),4,'0') + lpad(new String(date.getMonth() + 1),2,'0') + lpad(new String(date.getDate()),2,'0');
}


//검색날짜 체크
function isVaildTerm(obj,yy,mm,dd)
{
    var datestr = obj.value;


    //널인지?
    if(isEmpty(datestr)){
        return null;
    }

    // 날짜 포맷제거
    obj_removeformat(obj);

    //8자리인지?
    if (getByteLength(datestr) != 8) {
        alert("날짜는 '-'를 제외한 8자리 숫자로 입력하십시오.");
        return false;

    }



    // yy,mm,dd,fromto가 없을 경우
    if (yy == null) yy = 0;
    if (mm == null) mm = 0;
    if (dd == null) dd = 0;

    // 검색날짜 유효기간 가져오기
    var boundDate = getBoundDate(yy,mm,dd);

    if (yy < 0  || mm < 0  || dd < 0) {
        if ( boundDate > datestr) {
            alert("유효하지 않은 검색날짜입니다.\n유효한 날짜는" + boundDate.substring(0,4) + "년 " + boundDate.substring(4,6) + "월 " + boundDate.substring(6) + "일부터 입니다.");
            obj.select();
            return false;
        }
    } else {
        if ( boundDate < datestr) {
            alert("유효하지 않은 검색날짜입니다.\n유효한 날짜는" + boundDate.substring(0,4) + "년 " + boundDate.substring(4,6) + "월 " + boundDate.substring(6) + "일까지 입니다.");
            obj.select();
            return false;
        }
    }


    return true;

}


//오늘날짜
function getToDay()
{

    var date = new Date();

    var year  = date.getFullYear();
    var month = date.getMonth() + 1; // 1월=0,12월=11이므로 1 더함
    var day   = date.getDate();

    if (("" + month).length == 1) { month = "0" + month; }
    if (("" + day).length   == 1) { day   = "0" + day;   }

    return ("" + year + month + day)

}



function selectComboBox(targt, optValue)
{
    last = targt.length;
    for(var i=0; i<last; i++){
        if(targt.options[i].value == optValue){
            targt.selectedIndex = i;
            targt.options[i].selected;
        }
    }
}


function isExistsComboBoxValue(targt, optValue)
{
    last = targt.length;
    for(var i=0; i<last; i++){
        if(targt.options[i].value == optValue){
            return true;
        }
    }
    return false;
}



// 콤보박스로 날짜입력
function getCal(frmName, yearFieldName, monthFieldName, dayFieldName){

var schdate = yearFieldName.value + "" + monthFieldName.value + "" + dayFieldName.value;
window.open("/comm/comm01_03_01p.jsp?frmName=" + frmName.name + "&yearFieldName=" + yearFieldName.name + "&monthFieldName=" + monthFieldName.name + "&dayFieldName=" + dayFieldName.name + "&schdate=" + schdate,"Window2","status=no,height=180,width=160,resizable=no,left="+window.event.screenX+",top="+window.event.screenY+",scrollbars=no");
}




/*
* 한미은행 사업자번호 세팅(10자리)
* 앞에 '0'을 채운다
* by lsj 2002-06-19 3:56오후
**/

function fill_corpno(obj){
    var temp="";

    if(obj.value == null || obj.value.length < 1 ){

        return false;
    }
    if(obj.value.length != 10 ){
        for(i=0;i<(10-obj.value.length);i++){
            temp +="0";
        }
        obj.value = temp+obj.value;
    }else{
        obj.value = obj.value;
    }

    return true;
}



/*
* 전화번호
* 앞에 '0'을 채운다
* by 황상훈 2002-10-23 11:26오후
**/

function fill_zero(obj, is4){
    var temp="";

    if(obj.value == null || obj.value.length < 1 ) {
        return false;
    }

    if (is4 == 'Y' ) {
        return true;
    } else {
        if(obj.value.length != 4 ) {
            for(i=0;i<(4-obj.value.length);i++){
                temp +="0";
            }
            obj.value = temp+obj.value;
        }else{
            obj.value = obj.value;
        }

        return true;
    }
}

/*
* 예금명을 알맞게 잘라서 화면에 뿌려준다.
*
* by 이성재 2002-11-10 05:04 오후
*/
function cnv_name(name_str) {
    var str=name_str;
//    var re = /ｇｏｏｄｂａｎｋ．ｃｏｍ/g;
    var re = /goodbank.com/g;
    str = str.replace(re, "굿뱅크");
    var re = /\（/;
    str = str.replace(re, "<br>(");
    if(str.indexOf('／') != -1) {
        document.write(str.substring(0,str.indexOf('／')))
    } else {
        document.write(str)
    }
}



/*
* ip 형식에 맞는 데이터인지 검증
*/
function isValidIP(v) {
    return (v.search(/^\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}$/) > -1);
}





function setUserInfo(frm, userIfrm, cnt) {
    if (cnt == 0 ) return;
    else if (cnt == 1) {
        createObject(frm, "director_seq", userIfrm.frm.director_seq.value);     // 담당자
        createObject(frm, "nm", userIfrm.frm.nm.value);                         // 성명
        createObject(frm, "part", userIfrm.frm.part.value);                     // 직급
        createObject(frm, "office_tel", userIfrm.frm.office_tel.value);         // 사무실
        createObject(frm, "tel", userIfrm.frm.tel.value);                       // 핸드폰
        createObject(frm, "email", userIfrm.frm.email.value);                   // email
        createObject(frm, "memo", userIfrm.frm.memo.value);                     // 주요담당업무

        if (userIfrm.frm.admin_seq.checked)    createObject(frm, "admin_seq", userIfrm.frm.director_seq.value);

    } else {

        for (var i=0; i< cnt ; i++) {
            createObject(frm, "director_seq", userIfrm.frm.director_seq[i].value);      // 담당자
            createObject(frm, "nm", userIfrm.frm.nm[i].value);                          // 성명
            createObject(frm, "part", userIfrm.frm.part[i].value);                      // 직급
            createObject(frm, "office_tel", userIfrm.frm.office_tel[i].value);          // 사무실
            createObject(frm, "tel", userIfrm.frm.tel[i].value);                        // 핸드폰
            createObject(frm, "email", userIfrm.frm.email[i].value);                    // email
            createObject(frm, "memo", userIfrm.frm.memo[i].value);                      // 주요담당업무

            if (userIfrm.frm.admin_seq[i].checked)    createObject(frm, "admin_seq", userIfrm.frm.director_seq[i].value);

        }

    }

}

function createObject(frm, nm, key) {
        var e = document.createElement("input");
        e.setAttribute("type","hidden");
        e.setAttribute("name",nm);
        e.setAttribute("value",key);
        e.setAttribute("_temp","true");

        frm.appendChild(e);

}

/* 마우스 선택 부분 2바이트로 변환 초기화 시작 */
function half2full_init(){
    for (var idx=0; idx<document.all.tags('INPUT').length; idx++){
        var obj = document.all.tags('INPUT')[idx];
        if(obj.type == "text"){
            if(obj.getAttribute("onkeydown") == null)     obj.onkeydown     = clickHalf2Full;
        }
    }
}
/* 마우스 선택 부분 2바이트로 변환 초기화 끝 */



function httpSyncCall(url, formName) {
    var objReq = null;
    objReq = new ActiveXObject("Microsoft.XMLHTTP");

    objReq.open("POST", url, false);

    objReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    if (formName) {
        objReq.send(Form.serialize(formName));
    }
    else {
        objReq.send("");
    }


    return objReq.responseText;
}


/**
 * 선택된 라디오버튼의 index를 구한다.
 */
function hasCheckedRadioNum(input) {
var kkkk = 0;
    if (input.length > 1) {
        for (var inx = 0; inx < input.length; inx++) {
            if (input[inx].checked) {
            kkkk = inx;
            }
        }
    } else {
         if (input.checked) kkkk=0;
    }
    return kkkk;
}


/**
 * 선택된 라디오버튼의 값을 반환한다.
 */
function getRadioValue(Input) {
    var reData = "";
    if (Input.length > 1) {
        for (var inx = 0; inx < Input.length; inx++) {
            var cutData = "";
            if (Input[inx].checked) {
                cutData = Input[inx].value.split("|");
                reData += cutData[0];
            }
        }
    } else {
        var cutData = "";
        if (Input.checked){
            cutData = Input.value.split("|");
            reData = cutData[0];
        }
    }

    return reData;
}


/**
 * 선택된 라디오버튼의 TEXT값을 반환한다.
 */
function getRadioText(Input) {

    var reData = "";
    if (Input.length > 1) {
        for (var inx = 0; inx < Input.length; inx++) {
            var cutData = "";
            if (Input[inx].checked) {
                cutData = Input[inx].value.split("|");
                reData += cutData[1];
            }
        }
    } else {
        var cutData = "";
        if (Input.checked){
            cutData = Input.value.split("|");
            reData = cutData[1];
        }
    }

    return reData;
}


/**
 * 선택된 체크박스 값을 구분자로 반환한다.
 */
function getCheckboxValue(Input, delim) {
    var reData = "";


    if (Input.length > 1) {
        for (var inx = 0; inx < Input.length; inx++) {
            var cutData = "";
            if (Input[inx].checked){
                cutData = Input[inx].value.split("|");
                reData += cutData[0]+delim;
            }
        }
        reData = reData.substring(0,reData.length-1);
    } else {
        if (Input.checked){
            cutData = Input.value.split("|");
            reData = cutData[0];
        }
    }

    return reData;
}


//텍스트 에어리어 글자수 제한
 /**
   EX)
    <textarea name="name" onChange="CheckStrLen('500',this);" onKeyUp="CheckStrLen('500',this); >
    한글500자 , 영문1000자 제한
 */
 function CheckStrLen(maxlen,field)
 {
   var temp; //들어오는 문자값...
   var msglen;
   msglen = maxlen*2;
   var value= field.value;

   l =  field.value.length;
   tmpstr = "" ;

   if (l == 0)
   {
    value = maxlen*2;
   }
   else
   {
    for(k=0;k<l;k++)
    {
     temp =value.charAt(k);

     if (escape(temp).length > 4)
   msglen -= 2;
     else
   msglen--;

     if(msglen < 0)
     {
   alert("총 영문 "+(maxlen*2)+"자 한글 " + maxlen + "자 까지 입력 할 수 있습니다.");
    field.value= tmpstr;
   break;
     }
     else
     {
   tmpstr += temp;
     }
    }
   }
 }


/*******************************************그룹웨어 하면서 추가된 함수들이나 기존 함수들중 수정된 함수들을 넣었다.**************************************************/
var IS_SUBMIT = false;      //전체 이중서브밋 방지 변수

/**
    //cookie값을 설정하는 함수이다.
    cookieName  = cookie setting name
    cookieValue = cookie setting value
    expiredays  = cookie setting day
**/

function setCookie(cookieName, cookieValue, expiredays) {
    var todayDate = new Date();
    var cookieDay;
    if(expiredays==undefined){
        cookieDay = "1";
    }else{
        cookieDay = expiredays;
    }
    todayDate.setDate( todayDate.getDate() + cookieDay );
    document.cookie = cookieName + "=" + encodeURIComponent(cookieValue) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}


/**
    //img 첨부파일을 추가하는 함수이다.
    fieldName  = 추가할 파일명
**/
function addImgFile(fileName) {
    uf_frmNewWin("../comm/comm_0006_01.jsp?fileName="+fileName+"","파일첨부", 500, 240);
}

function addImgFileOpt(fileName, fileOption, fileID ) {
    uf_frmNewWin("../comm/comm_0006_01.jsp?fileName="+fileName+"&fileOption="+fileOption+"&fileID="+fileID,"파일첨부", 500, 240);
}

/**
 *    달력 display 추가부분이다.
 */
var GblCalTempValue = "";
var target, target2, target3;
var fieldTarget;
var calendarInput = "";
var s1,s2,s3;
function MiniTextCal(cal)
{
    GblCalTempValue = cal.value;
    calendarInput = cal;
    calValue = cal.value;
    calValue = replace(calValue,'.','');
    calValue = replace(calValue,',','');

    if(calValue.length!=8 && calValue.length > 0){
        alert('YYYYMMDD형식으로 입력바랍니다.');
        return;
    }

    var jucke   = "";
    var juche2  = "";
    var juche3  = "";

    jucke  = calValue.substr(0,4);
    juche2 = calValue.substr(4,2);
    juche3 = calValue.substr(6,2);

    target=jucke;
    target2=juche2;
    target3=juche3;
    fieldTarget = cal;


//    alert(event.offsetX);
//    alert(event.clientX);

    //마우스찍었을때 좌표
    x = (document.layers) ? loc.pageX : event.clientX;
    y = (document.layers) ? loc.pageY : event.clientY;

     //레이어이름
     if(document.all.minical.length > 1){
        if(!opener){
            minical[0].style.pixelTop    = y+document.documentElement.scrollTop-130;
            minical[0].style.pixelLeft    = x-8-200;

        }else{
            if( document.body.clientWidth < x + 200)
            {
                x = x + (document.body.clientWidth - x - 320);
            }

            if( document.body.clientHeight < y)
            {
                y = y ;
            }

            minical[0].style.pixelTop    = y+document.documentElement.scrollTop;
            minical[0].style.pixelLeft    = x;
        }
        minical[0].style.display = (minical[0].style.display == "block") ? "none" : "block";
    }else{
        if(!opener){
            minical.style.pixelTop    = y+document.documentElement.scrollTop-130;
            minical.style.pixelLeft    = x-8-200;
        }else{
            if( document.body.clientWidth < x + 200)
            {
                x = x + (document.body.clientWidth - x - 320);
            }

            if( document.body.clientHeight < y )
            {
                y = y ;
            }

            minical.style.pixelTop    = y+document.documentElement.scrollTop;
            minical.style.pixelLeft    = x;
        }
        minical.style.display = (minical.style.display == "block") ? "none" : "block";
    }

    Show_textCal(target,target2,target3);
}


function Show_textCal(sYear,sMonth,sDay)
{
    var isSStrong = "";
    var isEStrong = "";
    var divHeight=0;
    if(sYear<1900 && sYear!="") return;
    if(document.all.minical.length > 1){
        document.all.minical[0].innerHTML="";
    }
    Cal_Week = "";
    Cal_HTML = "";      //달력소스
    /*********************이전 다음 년월 찾기*******************/
    /*
    2009년 7월 15일로 셋팅한것임
    나중에는 jsp에서 글로벌 변수 만들어서 써라.ㅡㅡ;;
    */
    var datToday=new Date();

    var intThisYear = sYear;
    var intThisMonth = sMonth;
    var intThisDay = sDay;
    var intThisYearMin = (parseInt(sYear)-1);
    var intThisYearPlu = (parseInt(sYear)+1);

    intThisYearMin = intThisYearMin.toString();
    intThisYearPlu = intThisYearPlu.toString();

    if (intThisDay==0) intThisDay = datToday.getDate();
    if (intThisMonth==0) intThisMonth = datToday.getMonth()+1;
    if (intThisYear==0) intThisYear = datToday.getYear();
    if (intThisMonth == 1)
    {
        intPrevYear=intThisYear-1;
        intPrevMonth=12;
        intNextYear=intThisYear;
        intNextMonth=2;
    }
    else if (intThisMonth==12)
    {
        intPrevYear=intThisYear;
        intPrevMonth=11;
        intNextYear=(parseInt(intThisYear) + 1);
        intNextMonth=1;
    }
    else
    {
        intPrevYear=intThisYear;
        intPrevMonth=intThisMonth -1;
        intNextYear=intThisYear;
        intNextMonth=Math.ceil(intThisMonth) + 1;
    }


    NowThisYear = sYear;
    NowThisMonth = sMonth;
    NowThisDay = sDay;
    if (NowThisDay==0) NowThisDay = datToday.getDate();
    if (NowThisMonth==0) NowThisMonth = datToday.getMonth()+1;
    if (NowThisYear==0) NowThisYear = datToday.getYear();


    /*********************해당월의 1일의 시작요일찾기 *******************/
    var first_date=new Date(intThisYear,intThisMonth-1,1)
        intFirstWeekday=first_date.getDay();
        intFirstWeekday++
        //intSecondWeekDay=intFirstWeekday
    var intThirdWeekDay=intFirstWeekday



    var datThisDay = intThisYear.toString() +  "-" + intThisMonth.toString() + "-" + intThisDay.toString();

    intThisWeekday = first_date.getDay();
    intThisWeekday++
    if (intThisWeekday == 1) varThisWeekday = "일";
    if (intThisWeekday == 2) varThisWeekday = "월";
    if (intThisWeekday == 3) varThisWeekday = "화";
    if (intThisWeekday == 4) varThisWeekday = "수";
    if (intThisWeekday == 5) varThisWeekday = "목";
    if (intThisWeekday == 6) varThisWeekday = "금";
    if (intThisWeekday == 7) varThisWeekday = "토";
    intPrintDay=1;
    secondPrintDay=1;
    thirdPrintDay=1;

    Stop_Flag=0;


    /*********************해당월의 마지막 날짜 구하기 *******************/
    if (intThisMonth == 4 || intThisMonth==6 || intThisMonth==9 || intThisMonth==11)
    {
        intLastDay=30;
    }
    else if (intThisMonth==2 && !(intThisYear % 4 == 0))
    {
        intLastDay=28;
    }
    else if (intThisMonth==2 && intThisYear % 4 == 0)
    {
        if (intThisYear % 100 == 0)
        {
            if (intThisYear % 400 == 0)
                intLastDay=29;
            else
                intLastDay=28;
        }
        else
        {
            intLastDay=29;
        }
    }
    else
    {
        intLastDay=31;
    }



    if (intPrevMonth==4 || intPrevMonth==6 || intPrevMonth==9 || intPrevMonth==11)
        intPrevLastDay=30;
    else if (intPrevMonth==2 &&  !(intPrevYear % 4 == 0))
        intPrevLastDay=28;
    else if (intPrevMonth==2 && intPrevYear % 4 == 0)
    {
        if (intPrevYear % 100 == 0)
        {
            if (intPrevYear % 400 == 0)
                intPrevLastDay=29;
            else
                intPrevLastDay=28;
        }
        else
        {
            intPrevLastDay=29;
        }
    }
    else
    {
        intPrevLastDay=31;
    }
    Stop_Flag=0;

    Cal_HTML=Cal_HTML + "<div style='position:absolute; top:0px;left:0px;z-index:20;margin:0 0 0 1px; '>";
    Cal_HTML=Cal_HTML + "<table class='calendar_simple' summary='calendar' style='margin-top:10px;'>";
    Cal_HTML=Cal_HTML + "   <colgroup>";
    Cal_HTML=Cal_HTML + "       <col span='7' width='23px' />";
    Cal_HTML=Cal_HTML + "   </colgroup>";
    Cal_HTML=Cal_HTML + "   <thead>";
    Cal_HTML=Cal_HTML + "       <tr>";
    Cal_HTML=Cal_HTML + "       <td colspan='7' align='center'>";
    Cal_HTML=Cal_HTML + "           <ul class='calendar' style='text-align:center;'>";
    Cal_HTML=Cal_HTML + "               <li style='padding-left:18px;'><img src='../../img/comm/button/btn_calendar_prev.gif' alt='이전연도' onClick='javascript:Show_textCal(" + intThisYearMin.toString() + "," + intThisMonth.toString() + ",1); return false;'  style='cursor:hand'></li>";
    Cal_HTML=Cal_HTML + "               <li>&nbsp;<strong> " + intThisYear.toString() + "</strong>&nbsp;<li>";
    Cal_HTML=Cal_HTML + "               <li><img src='../../img/comm/button/btn_calendar_next.gif' alt='다음연도'  onClick='javascript:Show_textCal(" + intThisYearPlu.toString() + "," + intThisMonth.toString() + ",1); return false;' style='cursor:hand'><li>";
    Cal_HTML=Cal_HTML + "               <li class='mgl10'><img src='../../img/comm/button/btn_calendar_prev.gif'  alt='이전 월'  onClick='javascript:Show_textCal(" + intPrevYear.toString() + "," + intPrevMonth.toString() + ",1); return false;' style='cursor:hand'></li>";
    Cal_HTML=Cal_HTML + "               <li>&nbsp;<strong>" + intThisMonth.toString() + "</strong>&nbsp;<li>";
    Cal_HTML=Cal_HTML + "               <li><img src='../../img/comm/button/btn_calendar_next.gif' alt='다음달'  onClick='javascript:Show_textCal(" + intNextYear.toString() + "," + intNextMonth.toString() + ",1); return false;'  style='cursor:hand'><li>";
    Cal_HTML=Cal_HTML + "           </ul>";
    Cal_HTML=Cal_HTML + "       </td>";
    Cal_HTML=Cal_HTML + "       </tr>";
    Cal_HTML=Cal_HTML + "       <tr>";
    Cal_HTML=Cal_HTML + "           <th scope='col' class='line_left'>일</th>";
    Cal_HTML=Cal_HTML + "           <th scope='col'>월</th>";
    Cal_HTML=Cal_HTML + "           <th scope='col'>화</th>";
    Cal_HTML=Cal_HTML + "           <th scope='col'>수</th>";
    Cal_HTML=Cal_HTML + "           <th scope='col'>목</th>";
    Cal_HTML=Cal_HTML + "           <th scope='col'>금</th>";
    Cal_HTML=Cal_HTML + "           <th scope='col' class='line_right'>토</th>";
    Cal_HTML=Cal_HTML + "       </tr>";
    Cal_HTML=Cal_HTML + "   </thead>";
    Cal_HTML=Cal_HTML + "   <tbody>";

    for (var intLoopWeek=1;intLoopWeek<=6;intLoopWeek++)
    {

        Cal_HTML=Cal_HTML + "<tr>";
        for (var intLoopDay=1;intLoopDay<=7;intLoopDay++)
        {
            if (intThirdWeekDay > 1)
            {
                Cal_HTML=Cal_HTML + "<td>&nbsp;</td>";
                intThirdWeekDay=intThirdWeekDay-1;
            }
            else
            {
                if (thirdPrintDay > intLastDay)
                {
                    Cal_HTML=Cal_HTML + "<td>&nbsp;</td>";
                }
                else
                {
                    Cal_HTML=Cal_HTML + "<td onclick='doTextClick()' ";
                    if (intThisYear-NowThisYear==0 && intThisMonth-NowThisMonth==0 && thirdPrintDay-intThisDay==0)
                    {
                        // 선택일
                        Cal_HTML=Cal_HTML + "  class='today' ";
                        Cal_Week= "class='today'";
                    }
                    else if  (intLoopDay==7)
                    {
                        // 토요일
                        Cal_HTML=Cal_HTML + "  class='sat' ";
                        Cal_Week= "class='sat'";
                    }
                    else if  (intLoopDay==1)
                    {
                        // 일요일
                        Cal_HTML=Cal_HTML + "  class='sun' ";
                        Cal_Week= "class='sun'";
                    }
                    else
                    {
                        // 평일
                        Cal_HTML=Cal_HTML + "";
                        Cal_Week= "";
                    }

                    Cal_HTML=Cal_HTML+ " ><a href='#dummy' " + Cal_Week + " onClick='return false;' title='" + intThisYear.toString() + "-" + intThisMonth.toString() + "-" + thirdPrintDay.toString() + "' >" + thirdPrintDay.toString()+ "</a> ";
                }
                thirdPrintDay++;

                if (thirdPrintDay > intLastDay)    Stop_Flag=1;

            }
            Cal_HTML=Cal_HTML + "</td>";
        }
        Cal_HTML=Cal_HTML + "</tr>";
        if (Stop_Flag==1) break;

    }

    Cal_HTML=Cal_HTML + "       </tbody>                                                                                                                  ";
    Cal_HTML=Cal_HTML + "   </table>                                   ";

    if(intLoopWeek=="6"){
        divHeight = "195px";
    }else if(intLoopWeek=="5"){
        divHeight = "175px";
    }else if(intLoopWeek=="4"){
        divHeight = "155px";
    }

    //달력 높이 지정 추가 송진성 2008.07.30

    Cal_HTML=Cal_HTML+ "</div>";


    if(document.all.minical.length > 1){
        document.all.minical[0].innerHTML="<iframe name='tmpCalIfra' width='181px' height='"+divHeight+"' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' class='calendar_outline'></iframe>";
        document.all.minical[0].innerHTML+=Cal_HTML;
    }else{
        document.all.minical.innerHTML="<iframe name='tmpCalIfra' width='181px' height='"+divHeight+"' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' class='calendar_outline'></iframe>";
        document.all.minical.innerHTML+=Cal_HTML;
    }
}


function doTextClick() {
    var cal_Day = window.event.srcElement.title;
    //window.event.srcElement.style.borderColor = "990000";
    if (cal_Day.length > 7) {
        getFixed(cal_Day);
        fieldTarget.focus();
        fieldTarget.value = s1+s2+s3;

        if(document.all.minical.length > 1){
            document.all.minical[0].style.display='none';
        }else{
            document.all.minical.style.display='none';
        }
    }
    if(calendarInput!=""){
        calendarInput.focus();
        calendarInput.blur();
    }
}

function getFixed(sDate){
    var s;
    var arr;

    s = new String(sDate);
    arr = s.split("-");
    if(arr.length == 3){
        s = arr[0] + "-";
        if(arr[1].length == 1) arr[1] = "0" + arr[1];
        s1 = arr[0];
        s = s + arr[1] + "-";
        s2 = arr[1];
        if(arr[2].length == 1) arr[2] = "0" + arr[2];
        s3 = arr[2];
        s = s + arr[2];
    }else{
        s = sDate;
    }
    return s;
}

function doOut() {
    if(document.all.minical.length > 1){
        document.all.minical[0].style.display='none';
    }else{
        document.all.minical.style.display='none';
    }
}


//전체선택 check함수 작성자  윤렬이
var checkflag = "false";

function uf_check(docname) {

    var field = eval(docname);

    if(field!=null){
        var lengthChk = field.length;
        if(lengthChk!=null){
            if (checkflag == "false") {
                for (i = 0; i < field.length; i++) {
                    if(field[i].disabled==false){
                        field[i].checked = true;
                    }
                }
                    checkflag = "true";
            } else {
                for (i = 0; i < field.length; i++) {
                    if(field[i].disabled==false){
                        field[i].checked = false;
                    }
                }
                    checkflag = "false";
            }
        }else{
            if (checkflag == "false") {
                if(field.disabled==false){
                    field.checked = true;
                }
                checkflag = "true";
            } else {
                if(field.disabled==false){
                    field.checked = false;
                }
                checkflag = "false";
            }
        }
    }else{
        alert('선택할 대상이 없습니다.');
    }
}
//전체선택 check 함수 끝



/**
 * 날짜를 계산해서 검색시작일의 값을 변경해준다
 */
function dateSetting(startobj,endobj, index, gubun,today) {
    var lastDay = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); // 각 달의 마지막 날짜를 배열변수에 저장한다.
    var date = new Date(today.substring(0,4),today.substring(4,6)-1,today.substring(6,8),"12","30");

    if (gubun == "D" && index == 0){
        startobj.value = today; // 당일
        endobj.value = today;
        return;
    }
    else if (gubun == "D"){
        date.setDate(date.getDate() + index);        //일을 뺀다
   }
    else if (gubun == "M"){
        date.setMonth(date.getMonth() + index);       //개월을 뺀다
    }
    else{
        alert("Script Error");
        return;
    }

    if(date.getDate() > lastDay[date.getMonth()]) {
        date.setDate(lastDay[date.getMonth()]);
    }

    endobj.value = date.getFullYear() + lpad(date.getMonth()+1, 2, "0") + lpad(date.getDate(), 2, "0");

}


/**
 * 두 Time이 몇 개월 차이나는지 구함
 * time1이 time2보다 크면(미래면) minus(-)
 */
function getMonthInterval(time1,time2) { //measureMonthInterval(time1,time2)
    var date1 = toTimeObject(time1);
    var date2 = toTimeObject(time2);

    var years  = date2.getFullYear() - date1.getFullYear();
    var months = date2.getMonth() - date1.getMonth();
    var days   = date2.getDate() - date1.getDate();

    return (years * 12 + months + (days >= 0 ? 0 : -1) );
}

/**
 * 두 Time이 며칠 차이나는지 구함
 * time1이 time2보다 크면(미래면) minus(-)
 */
function getDayInterval(time1,time2) {
    var date1 = toTimeObject(time1);
    var date2 = toTimeObject(time2);
    var day   = 1000 * 3600 * 24; //24시간

    return parseInt((date2 - date1) / day, 10);
}

/**
 * 두 Time이 몇 시간 차이나는지 구함
 * time1이 time2보다 크면(미래면) minus(-)
 */
function getHourInterval(time1,time2) {
    var date1 = toTimeObject(time1);
    var date2 = toTimeObject(time2);
    var hour  = 1000 * 3600; //1시간

    return parseInt((date2 - date1) / hour, 10);
}


//팝업을 닫아준다.
var unloadFlag = 'close';
var retnPopupObj=new Array();
function uf_closeOpenPopups() {
	if( unloadFlag != 'close' ) {	
		unloadFlag = 'close';	
		return;	
	}

	if( retnPopupObj != null ) {
		if( retnPopupObj.length > 0 ) {
			var i=0;
			while( i < retnPopupObj.length ) {
				retnPopupObj[i++].close();
			}
			
			retnPopupObj=null;
			retnPopupObj=new Array();
		}
	}
}

window.onunload = function() {
	uf_closeOpenPopups();	
}

//부모창 클릭 제어
if( opener != null ) {
	opener.document.onmousedown = mouseDown;
}
function mouseDown(e) {
	//opener.alert('팝업을 닫고 이용해주세요.');
	//window.focus();
}





var pop_status = {}; 

/* xgrid 이올라스 적용*/
function gridViewer(appcode) {
	document.write(appcode);
}

// toggle
function toggle(_id) {
	var el = document.getElementById(_id);
	el.style.display = (!el.style || (el.style.display != 'none')) ? 'none' : '';
	if (isIE6() && hasClass(el,"secret-memo")) toggleMemo(el);
}
function togObj(obj) {
	obj.style.display = (obj.style.display != 'none') ? 'none' : '';
}
function togObjYn(obj,dp) {
	obj.style.display = (dp != true) ? 'none' : '';
}
// 비밀메모 토글
function toggleMemo(el) {
	if (!hasClass(el,"generated")) {
		addClass(el,"generated");
		var _iframe = document.createElement("iframe");
		var _div = document.createElement("div");
		_iframe.frameBorder = 0;
		addClass(_iframe,"fix-ie6");
		addClass(_div,"screen");

		var fix_ie6 = el.insertBefore(_iframe,el.firstChild);
		var screen = el.insertBefore(_div,el.firstChild);

		var memo_width = el.offsetWidth;
		var memo_height = el.offsetHeight;

		fix_ie6.style.width = memo_width + "px";
		fix_ie6.style.height = memo_height + "px";
		screen.style.width = (memo_width - 2) + "px";
		screen.style.height = (memo_height - 2) + "px";
	}
}


// toggleClass
function toggleClass(element,value1,value2) {
	if (hasClass(element,value1)) {
		if (value2) {
			addClass(element,value2);
		}
		removeClass(element,value1);
	} else {
		if (value2 && hasClass(element,value2)) {
			removeClass(element,value2);
		}
		addClass(element,value1);
	}
}

//새창 여는 함수
function uf_newWin( url, winName, sizeW, sizeH)
{
	if(pop_status[winName] !=null && pop_status[winName] != undefined && !pop_status[winName].closed) {
		pop_status[winName].blur();
	    pop_status[winName].focus();
	    return;
    }
	var nLeft  = screen.width/2 - sizeW/2 ;
	var nTop  = screen.height/2 - sizeH/2 ;

	opt = ",toolbar=no,menubar=no,location=no,scrollbars=yes,status=no,resizable=no";
	
	pop_status[winName] = window.open(url, winName, "left=" + nLeft + ",top=" +  nTop + ",width=" + sizeW + ",height=" + sizeH  + opt );
	pop_status[winName].blur();
	pop_status[winName].focus();
	return;
}

// ModalDialog으로 새창 여는 함수
function uf_newModalDialog( url, dataArr, sizeW, sizeH)
{
	//20110621 추가
	dataArr.window = window;
	if ( typeof(rderp_menu_seq) != "undefined" ) { 
		dataArr.rderp_menu_seq = rderp_menu_seq;
	}
	else {
		dataArr.rderp_menu_seq = 0;
	}	
	
	// 20110706 추가(모달창으로 부터 정보 받아서 부모창 컨트롤)
	dataArr.close_gb ="N"; 
	
	var opt = "px;center:Yes; help:No; resizable:No;  status:No; scroll:No;";
	
	var param = window.showModalDialog(url, dataArr, "dialogWidth:" + sizeW + "px;dialogHeight:" + sizeH  + opt );

	return param;	
}

//ModalDialog으로 새창 여는 함수
function uf_newModalDialog2( url, dataArr, sizeW, sizeH)
{
	dataArr.window = window;
	if ( typeof(rderp_menu_seq) != "undefined" ) { 
		dataArr.rderp_menu_seq = rderp_menu_seq;
	}
	else {
		dataArr.rderp_menu_seq = 0;
	}	

	var opt = "px;center:Yes; help:No; resizable:Yes;  status:No; scroll:Yes;";
	
	var param = window.showModalDialog(url, dataArr, "dialogWidth:" + sizeW + "px;dialogHeight:" + sizeH  + opt );

	return param;	
}

/* Hsplitter Slide */
function uf_hsplitterOpen() {
	
	document.getElementById('div_hsplitter_left').style.display='block';
	document.getElementById('div_hsplitter_right').style.display='none';

	var objxgrid2 = document.getElementById('xgrid2');
	var objxgrid = document.getElementById('xgrid');

	if ( (objxgrid2 != null )|| (objxgrid2 != undefined) )
	{
		document.getElementById('xgrid2').width="100%";
		document.getElementById('xgrid').style.display='none';
	} else {
		document.getElementById('div_hsplitter_left').style.width = '100%';
	}

	document.getElementById('div_hsplitter_open').style.display='none';
	document.getElementById('div_hsplitter_close').style.display='block';
	
}

function uf_hsplitterClose(varWidth) {
	if (varWidth == "")
	{
		varWidth = 250;
	}

	document.getElementById('div_hsplitter_left').style.display='block';
	document.getElementById('div_hsplitter_right').style.display='block';
	
	var objxgrid2 = document.getElementById('xgrid2');
	var objxgrid = document.getElementById('xgrid');

	if ( (objxgrid2 != null )|| (objxgrid2 != undefined) )
	{
		document.getElementById('xgrid2').width = varWidth;
		document.getElementById('xgrid').style.display='block';
	} else {
		document.getElementById('div_hsplitter_left').style.width = varWidth;
	}


	document.getElementById('div_hsplitter_open').style.display='block';
	document.getElementById('div_hsplitter_close').style.display='none';
}

/* Vsplitter Slide */
function uf_vsplitterOpen() {
	
	document.getElementById('div_vsplitter_top').style.display='none';
	document.getElementById('div_vsplitter_bottom').style.display='block';;

	document.getElementById('xgrid').height="455";
	document.getElementById('xgrid2').style.display='none';;
	document.getElementById('div_vsplitter_open').style.display='none';
	document.getElementById('div_vsplitter_close').style.display='block';
	
}

function uf_vsplitterClose() {
	document.getElementById('div_vsplitter_top').style.display='block';
	document.getElementById('div_vsplitter_bottom').style.display='block';
	document.getElementById('xgrid').height="270";
	document.getElementById('xgrid2').style.display='block';
	document.getElementById('div_vsplitter_open').style.display='block';
	document.getElementById('div_vsplitter_close').style.display='none';
}
/* Filtering Slide */
function uf_filteringOpen() {
	document.getElementById('div_filtering').style.display='block';
	document.getElementById('div_filtering_open').style.display='none';
	document.getElementById('div_filtering_close').style.display='block';
	
}

function uf_filteringClose() {
	document.getElementById('div_filtering').style.display='none';
	document.getElementById('div_filtering_open').style.display='block';
	document.getElementById('div_filtering_close').style.display='none';
}


// Select Links
function linkAct()	{
	var tgtList = document.getElementById('woringurl');
	if(tgtList.style.display)	{
		hideLayer('woringurl');
		tgtList.style.display = "";
		if (navigator.userAgent.indexOf("MSIE")!=-1&&document.getElementById('container')) document.getElementById('container').style.zIndex = "20";
	} else	{
		showLayer('woringurl');
		if (navigator.userAgent.indexOf("MSIE")!=-1&&document.getElementById('container')) document.getElementById('container').style.zIndex = "35";
	}
}
function selectLinks(tgtEl)	{
	var tgtList = document.getElementById(tgtEl);
	if(tgtList.style.display)	{
		hideLayer(tgtEl);
		tgtList.style.display = "";
	} else	{
		showLayer(tgtEl);
	}
}
function showSelectLayer(tgtEl)    {
	document.getElementById(tgtEl).style.display = "block";
	if ( navigator.userAgent.indexOf("MSIE") !=-1 && document.getElementById('container') ) 
		document.getElementById('container').style.zIndex = "601";
}

function hideSelectLayer(tgtEl)    {
	document.getElementById(tgtEl).style.display = "none";
	if (navigator.userAgent.indexOf("MSIE")!=-1&&document.getElementById('container')) 
		document.getElementById('container').style.zIndex = "0";
}
/* 인풋박스배경 */
function clrImg(obj){obj.style.backgroundImage="";obj.onkeydown=obj.onmousedown=null;} 

// Roll over
function menuOver(obj) { obj.src = obj.src.replace("_off.gif", "_on.gif");}
function menuOut(obj) { obj.src = obj.src.replace("_on.gif", "_off.gif");}

function showLayer(tgtEl)    {    document.getElementById(tgtEl).style.display = "block"; }
function hideLayer(tgtEl)    {    document.getElementById(tgtEl).style.display = "none"; }

function bluring(){
if(event.srcElement.tagName=="A"||event.srcElement.tagName=="IMG") document.body.focus();}
document.omfocusin=bluring;


/* left메뉴 슬라이딩  */

function uf_hsplitter_init() { 
	document.getElementById('div_leftbox').style.cssText = "background:url('img/00/menu/img_leftmenubg_hsplitter.gif') no-repeat left top;";
	document.getElementById('footer').style.cssText = "background:#d9d9d9 url('img/00/menu/img_footerbg.gif') no-repeat left top;";
}

function uf_lefthsplitter_open () {

	document.getElementById('div_btn_hsplitter_close').style.display='none';
	document.getElementById('div_btn_hsplitter_open').style.display='block';
	
	document.getElementById('div_snb').style.display='none';

	document.getElementById('footer').style.cssText = "background:#d9d9d9 url('img/00/menu/img_footerbg_splitter.gif') no-repeat left top";
//	document.getElementById('header').style.cssText = "z-index:5;";
	document.getElementById('container').style.cssText = "padding-left:20px;background:url('img/00/menu/img_leftmenubg_hsplitter.gif') no-repeat left top;height:auto;z-index:650;";
}

function uf_lefthsplitter_close () {
	document.getElementById('div_btn_hsplitter_close').style.display='block';
	document.getElementById('div_btn_hsplitter_open').style.display='none';
	
	document.getElementById('div_snb').style.display='block';
	document.getElementById('footer').style.cssText = "background:#d9d9d9 url('img/00/menu/img_footerbg.gif') no-repeat left top;";
//	document.getElementById('header').style.cssText = "";
	document.getElementById('container').style.cssText = "";

}


/* 확장조회 Slide */
function uf_expandDown() {
	document.getElementById('div_ts_expend').style.display='none';
	document.getElementById('div_btn_expand_down').style.display='block';
	document.getElementById('div_btn_expand_up').style.display='none';
	
}

function uf_expandUp() {
	document.getElementById('div_ts_expend').style.display='block';
	document.getElementById('div_btn_expand_down').style.display='none';
	document.getElementById('div_btn_expand_up').style.display='block';
}


/* Vsplitter Slide */
function uf_vsplitterOpen() {
	
	document.getElementById('div_vsplitter_top').style.display='none';
	document.getElementById('div_vsplitter_bottom').style.display='block';;

	document.getElementById('div_vsplitter_open').style.display='none';
	document.getElementById('div_vsplitter_close').style.display='block';
	
}

function uf_vsplitterClose() {
	document.getElementById('div_vsplitter_top').style.display='block';
	document.getElementById('div_vsplitter_bottom').style.display='block';

	document.getElementById('div_vsplitter_open').style.display='block';
	document.getElementById('div_vsplitter_close').style.display='none';
}


/* Div Show-Hidden */
function uf_divShow(varobj) {
	document.getElementById(varobj).style.display='block';
}

function uf_divHidden(varobj) {
	document.getElementById(varobj).style.display='none';
}

function uf_popFooter() {

		var winHeight = document.getElementById('p-wrap').offsetHeight;
		var headHeight = document.getElementById('p-title').offsetHeight;
		var footHeight = document.getElementById('p-close').offsetHeight;
		var contArea = document.getElementById('pcpcont');

		/* IE 버젼체크 처리 */
		if (navigator.appName == "Microsoft Internet Explorer"){

			if(navigator.appName.match(/Explorer/i)) {
				versionCode = navigator.appVersion.match(/MSIE \d+.\d+/)[0].split(" ")[1];					
			}
		}

		contArea.style.height = ( winHeight - (headHeight + footHeight + 10) ) + "px";
		/*
		if ( versionCode != "8.0") { 
			contArea.style.height = ( winHeight - (headHeight + footHeight + 10) ) + "px";
		} else {
			contArea.style.height = ( winHeight - (headHeight + footHeight + 10) ) + "px";
		}
		*/
}

function uf_main_open () {

	document.getElementById('div_snb').style.display='none';
	document.getElementById('multitab').style.cssText = "top:-18px;left:-6px;";
	document.getElementById('footer').style.cssText = "background:#d9d9d9 url('img/00/menu/img_footerbg_splitter.gif') no-repeat left top";
	document.getElementById('header').style.cssText = "z-index:5;height:100px;background:url('img/00/menu/top_bg_splitter.gif') repeat-x left top;";
	document.getElementById('container').style.cssText = "margin:-2px 0 0 0px;padding-left:20px;background:url('img/00/menu/img_leftmenubg_hsplitter.gif') no-repeat left top;height:auto;z-index:650;";

}


//-----------------------------------------------------------------------------------------------
//숫자에 3자리마다 콤마찍기(현금표시)
//-----------------------------------------------------------------------------------------------
function Format_comma(val1) {
    var newValue = val1+""; //숫자를 문자열로 변환
    var len = newValue.length;  

    var minus = "";  

    if( len > 1 ) {
        if( newValue.substring(0,1) == '0' ) newValue = newValue.substring(1);
        len = newValue.length;
        if ( newValue.substring(0,1) == "-"  ) {
            minus = "-";
        }   
    }
    
    var ch="";
    var j=1;
    var formatValue="";
    
    // 콤마제거  
    newValue = newValue.replace(/\,/gi, '');
    newValue = newValue.replace(/\-/gi, '');
    
    // comma제거된 문자열 길이
    len = newValue.length;
    
    for(i=len ; i>0 ; i--){
        ch = newValue.substring(i-1,i);
        formatValue = ch + formatValue;
        if ((j%3) == 0 && i>1 ){
         formatValue=","+formatValue;
        }
        j++;
    }
    
    formatValue = minus+formatValue;
    
    return formatValue;
}

//-----------------------------------------------------------------------------------------------
//콤마제거
//-----------------------------------------------------------------------------------------------
function Format_NoComma(val1){
	return (val1+"").replace(/\,/gi, '');
}

//-----------------------------------------------------------------------------------------------
//엔터키 다음 text 이동
//-----------------------------------------------------------------------------------------------
function fn_CheckEnter(obj) {
 if (event.keyCode == 13) {   
    f = obj.form;
    for(var i = 0; i< f.elements.length-1; i++) {
       if (f.elements[i].name == obj.name) {
       	for(var j = i; j< f.elements.length-1; j++) {
             if (f.elements[j+1].type == "text") {
                f.elements[j+1].focus();
                return;
             }
          }
       }
    }

 }
}

/************************************************************************
함수명	: 숫자키 입력 
작성목적	: 금액 관련 TextBox에서 문자열입력 방지
작 성 자	: 
작 성 일	:
*************************************************************************/
function fn_CheckNumberTextBox() {
	try
	{
			
		// 허용키 : 8, 13, 27, 48 ~ 57
		if ( (window.event.keyCode >= 48 && window.event.keyCode <= 57) || ( window.event.keyCode>=96 &&  window.event.keyCode<=105) || ( window.event.keyCode==8) || ( window.event.keyCode==37) || ( window.event.keyCode==39) )
		{
			window.event.returnValue = true;
			//return;
		}
		else if ( window.event.keyCode == 8 || window.event.keyCode == 13 || window.event.keyCode == 27 )
		{
			window.event.returnValue = true;
			//return;
		}
		else 
		{
			window.event.returnValue = false;
		}
	}
	catch ( exception )
	{
		//
	}	
}

/************************************************************************
함수명	: 숫자키 입력(-)포함 
작성목적	: 금액 관련 TextBox에서 문자열입력 방지
작 성 자	: 
작 성 일	:
*************************************************************************/
function fn_CheckNumberTextBoxMinus() {
	try
	{
			
		// 허용키 : 8, 13, 27, 48 ~ 57, 45(-)
		if ( (window.event.keyCode >= 48 && window.event.keyCode <= 57) || ( window.event.keyCode>=96 &&  window.event.keyCode<=105) || ( window.event.keyCode==8) || ( window.event.keyCode==37) || ( window.event.keyCode==39)  || ( window.event.keyCode==45))
		{
			window.event.returnValue = true;
			//return;
		}
		else if ( window.event.keyCode == 8 || window.event.keyCode == 13 || window.event.keyCode == 27 )
		{
			window.event.returnValue = true;
			//return;
		}
		else 
		{
			window.event.returnValue = false;
		}
	}
	catch ( exception )
	{
		//
	}	
}

