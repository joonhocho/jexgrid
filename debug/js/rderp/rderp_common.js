var rderp;
if(!rderp) rderp={};
if(!rderp.common) rderp.common={};

var gw;
if(!gw) gw={};

if(typeof(gw.ui) == "undefined") {
	document.write('<script type="text/javascript" src="js/gw.ui.js"></script>');
}

if(typeof(gw.common) == "undefined") {
	document.write('<script type="text/javascript" src="js/gw.common.js"></script>');
}

if(typeof(gw.number) == "undefined") {
	document.write('<script type="text/javascript" src="js/gw.number.js"></script>');
}

if(typeof(gw.date) == "undefined") {
	document.write('<script type="text/javascript" src="js/gw.date.js"></script>');
}

if(typeof(config) == "undefined") {
	document.write('<script type="text/javascript" src="config/config.js"></script>');
}

//==================================================================
//공통팝업
//==================================================================
document.write('<script type="text/javascript" src="js/rderp/rderp_common_pop.js"></script>');




var rderp_menu_seq = "0";

$(function(){
	if(top.$("#multitab").find(".mul_tab_on").attr("id") != undefined) {
		rderp_menu_seq = top.$("#multitab").find(".mul_tab_on").attr("id");
		if (rderp_menu_seq.length > 8 && rderp_menu_seq.substring(0,8) == "menu_id_")  {
			rderp_menu_seq = rderp_menu_seq.replace(/menu_id_/g, "");
		}
		else {
			rderp_menu_seq = "0";
		}	
	}
	else if(opener && typeof(opener.top) != "undefined" && 
			typeof(opener.top.$("#multitab").find(".mul_tab_on").attr("id")) != "undefined") {
		rderp_menu_seq = opener.top.$("#multitab").find(".mul_tab_on").attr("id");
		if (rderp_menu_seq.length > 8 && rderp_menu_seq.substring(0,8) == "menu_id_")  {
			rderp_menu_seq = rderp_menu_seq.replace(/menu_id_/g, "");
		}
		else {
			rderp_menu_seq = "0";
		}	
	}
	else if(opener && typeof(opener.opener) != "undefined" && typeof(opener.opener.top) != "undefined" && 
			typeof(opener.opener.top.$("#multitab").find(".mul_tab_on").attr("id")) != "undefined") {
		rderp_menu_seq = opener.opener.top.$("#multitab").find(".mul_tab_on").attr("id");
		if (rderp_menu_seq.length > 8 && rderp_menu_seq.substring(0,8) == "menu_id_")  {
			rderp_menu_seq = rderp_menu_seq.replace(/menu_id_/g, "");
		}
		else {
			rderp_menu_seq = "0";
		}	
	}
		
	//모달 팝업 사용시 모달 ViewPage에 rderp_menu_seq 선언이되어야 읽어올수있음
	//참조 rexpe_0011_02.js
	
	/***************************************
	* input box 화폐단위 표시 이벤트 처리
	***************************************/
	$("input[format=number2]").each(function(){
		$(this).keyup(function(){
			$(this).val(Format_comma($(this).val()));
		});

//		$(this).change(function(){
//			$(this).val(Format_comma($(this).val()));
//		});

//		$(this).focus(function(){
//			$(this).unbind("change");
//			$(this).val(Format_NoComma($(this).val()));
//			$(this).bind("change");
//		});
	});
	
	/***************************************
	* input box 주민(외국인)등록번호 체크
	***************************************/
	$("input[format=ssn]").each(function(){
		fn_keyDownNumberType($(this));
		
		$(this).change(function(){
		    if (!(fnrrnCheck($(this).val()) || fnfgnCheck($(this).val()))) {
				alert("주민(외국인)등록번호를 확인하세요.");
				$(this).val("");
		    }
		});
		
	});

	/***************************************
	* input box 사업자등록번호 체크
	***************************************/
	$("input[format=bizno]").each(function(){
		fn_keyDownNumberType($(this));
		
		$(this).change(function(){
		    if (!fnBizCheck($(this).val())) {
				alert("사업자등록번호를 확인하세요.");
				$(this).val("");
		    }
		});
		
	});

	/***************************************
	* input box 주민(사업자)등록번호 체크
	***************************************/
	$("input[format=bizssn]").each(function(){
		fn_keyDownNumberType($(this));
		
		$(this).change(function(){
			if(!fnRRNCheck($(this).val())){
				alert("주민(사업자)등록번호를 확인하세요.");
				$(this).val("");
			}
		});
		
	});

	/***************************************
	* input box 한글자동입력 체크
	***************************************/
	$("input[format=kor]").each(function(){
		$(this).attr("style","ime-mode:active;"+$(this).attr("style"));
	});
	
	/***************************************
	* input box 영문입력 체크
	***************************************/
	$("input[format=eng]").each(function(){
		$(this).attr("style","ime-mode:disabled;"+$(this).attr("style"));
	});

	/***************************************
	* input box 날짜타입 입력 체크
	***************************************/
	$("input[format=date]").each(function(){
		fn_keyDownNumberType($(this));
		
		$(this).change(function(){
			if ( jex.web.form.check.isFormat($(this)) == false) {
				$(this).val("");
				$(this).focus();
			}
			else {
				var strDate = $(this).val().replace(/\-/g,"");
				if($(this).val() != "" ){
					strDate = strDate.substring(0,4) + "-" + strDate.substring(4,6) + "-" + strDate.substring(6,8);
					$(this).val(strDate);
				}	
			}	
		});
	});

	/***************************************
	* input box 소수점 입력 체크
	***************************************/
	$("input[format=rate]").each(function(){
		fn_keyDownNumberType($(this),".");
		
		$(this).change(function(){
			if (isNaN(new Number($(this).val()))) {
				alert("항목의 입력형식이 잘못되었습니다.");
				$(this).val("0");
				$(this).focus();
			}
			
			if($(this).val()==""){
				$(this).val("0");
			}
			
			if($(this).val().substring($(this).val().length-1)=="."){
				$(this).val($(this).val().substring(0,$(this).val().length-1));
			}
			
		});
	});

	/***************************************
	* 엑셀다운로드 팝업 호출
	***************************************/
	$.each($("[jexgridButton=rcomm_download]"), function(i,v){
		$(this).click(function(e){
			var download_grid = ""; 
			if ( typeof grid != "undefined" ) {
				download_grid = "grid";
			}	
			else if ( typeof grid1 != "undefined" ) {
				download_grid = "grid1";
			}	
			else if ( typeof grid2 != "undefined" ) {
				download_grid = "grid2";
			}	
			else if ( typeof grid3 != "undefined" ) {
				download_grid = "grid3";
			}	
			
			if ( download_grid != "" ) {
				window._saveTargetJgrid = eval(download_grid);
		
				if(!window._saveTargetJgrid)
				{
					alert("해당 그리드가 존재하지 않습니다. 버튼의 jexgridId 속성을 확인해주세요.\njexgridId='그리드를객체를 참조하고있는 변수명'");
					return false;
				}
				
				var winObj = window.open("js/file/download.jsp", "jgridFileDownload", "width=" + 907 + ",height=" + 590);
				winObj.blur();
				winObj.focus();
			}	
		});
	});

	/***************************************
	* 시작일자가 종료일자보다 작은 경우 체크
	***************************************/
	/*
	$("input.term").change(function() {
		
		var s_date = $(this).parent().find("input.term:first").val().replace(/\-/g,"");
		var e_date = $(this).parent().find("input.term:last").val().replace(/\-/g,"");

		if(s_date != "" && e_date != ""){
			var startDate = Date.parseExact($(this).parent().find("input.term:first").val(), 'yyyy-MM-dd');
			var endDate   = Date.parseExact($(this).parent().find("input.term:last").val(), 'yyyy-MM-dd');
			
			if(s_date > e_date) {
				alert("시작일자는 종료일자보다 같거나 작아야 합니다.");
				$(this).val("");
				$(this).focus();
			}
		}
	});
	*/
});


/*********************************************************
* 숫자타입 데이터 저장값 셋팅(화폐단위 구분자 제거)
*********************************************************/
setNoComma = function(divId){
	$("#"+divId).find(".num").each(function(){
		$(this).val(Format_NoComma(jex.web.null2void($(this).val(), "0")));
	});	
};

rderp.common.setNoComma = function(divId){
	$("#"+divId).find(".num").each(function(){
		$(this).val(Format_NoComma(jex.web.null2void($(this).val(), "0")));
	});	
};

/*********************************************************
* 날짜타입 데이터 저장값 셋팅(dash('-') 구분자 제거)
*********************************************************/
rderp.common.setNoDash = function(divId){
	$("#"+divId).find(".date").each(function(){
		$(this).val(jex.web.null2void($(this).val()).replace(/\-/g,""));
	});	
};

/***************************************
* 현재 년월일
***************************************/
function rtnDate(value){

	var rtnDate = "";
	var date = new Date();
	var Today = new Array();

	Today['Year']= date.getFullYear();
	Today['Month']=date.getMonth()+1;
	Today['Day']= date.getDate();
	if(Today['Month']<10){
		var month= "0"+Today['Month'];
	}else{
		var month = Today['Month'];
	}
	if(Today['Day']<10){
		var day = "0"+Today['Day'];
	}else{
		var day = Today['Day'];
	}

	if(typeof(value) == "undefined" || value.length != 8 ){
		//현재 년월일
		rtnDate =  Today['Year']+"-"+month+"-"+day;
	}else{
		if (isNaN(new Number(value))) {
			rtnDate = Today['Year']+"-"+month+"-"+day;
		}else{
			rtnDate = value.substring(0,4)+"-"+value.substring(4,6)+"-"+value.substring(6,8);
		}
	}

	return rtnDate;
}

/***************************************
* return Unique Time
***************************************/
rtnUniqueTime = function(){
	var rtnVal = "";
	
	var now   = new Date(); 		// 현재시간 가져오기
	var year  = now.getYear(); 		// 년도 가져오기
	var month = now.getMonth()+1;	// 월 가져오기 (+1)
	var date  = now.getDate(); 		// 날짜 가져오기
	var hour  = now.getHours(); 	// 시간 가져오기
	var min   = now.getMinutes(); 	// 분 가져오기
	var sec   = now.getSeconds(); 	// 초 가져오기
	
	rtnVal = hour +""+ min +""+ sec;
	
	return rtnVal;

};

/***************************************
* 특정문자 replace
* value : 값(데이타값) dash : ,/-
* EX : rtnReplace('2010-04-01','-') - >20100401
***************************************/
function rtnReplace(value,dash){
	var val = "";
	if(voidChk(value,'') != ''){
		if("," == dash){
			val = value.replace(/\,/g,"");
		}else if("-" == dash){
			val = value.replace(/\-/g,"");
		}else{
			val = value;
		}
	}
	return val;
}

/***************************************
* //undefined 값 "" 로 바꾸기
* value : 값(데이타값)
***************************************/
function voidChk(value,rtnValue){
	if(	typeof(value) != "undefined" && value != "" ){
		rtnValue = value;
	}
	return rtnValue;
}

/***************************************
* //input폼 체크박스 체크값 가져오기
* mode : R(radio) C(checkbox)
  colName : view 안에 있는 attr Name
***************************************/
function rtnCheckBox(mode,colName){
	var val = "";

	if(mode.toUpperCase()  == "R"){
		val = $(":input[name="+colName+"]:checked").val();
	}else{
		val = $("input[name="+colName+"]").is(':checked');
		if(val){
			val = "Y";
		}else{
			val = "N";
		}
	}
	return val;
}

/***************************************
* // select attr 체크박스 체크값 가져오기
* mode : R(radio) C(checkbox)
  value: 값
  obj  : selector (ex:":input[name=ISD_PSNL_EXPN_NO_PRJ_YN]")
* EX  : rtask_0011_01.js 참조
***************************************/
function attrSetYn(mode,value,obj){
	if(mode.toUpperCase()  == "R"){
		$(obj+"[value="+value+"]").attr("checked","true");
	}else{
		if(value == "Y"){
			$(obj).attr("checked","checked");
		}else{
			$(obj).attr("checked","");
		}
	}
}


/***************************************
* // 예금주조회
* EX  : rexpe_0005_01.js 참조
***************************************/
function ownrInq(bnkCd,acctNo,trnsAmt,RsltCd,rtnName,rtnCd){
	jex.web.Ajax("rcomm_imo_0600_600_01",{ BNK_CD:bnkCd
								        ,  ACCT_NO:acctNo
								        ,  TRNS_AMT:trnsAmt
								        ,  OWNR_INQ_RSLT_CD:RsltCd}
								        , function(data) {
								        	$(document).find(rtnCd).val(data.OWNR_INQ_RSLT_CD);//예금주조회결과코드
											$(document).find(rtnName).val(data.OWNR_INQ_RSLT);      //예금주조회결과
										}
	,"jct");
}


/***************************************
* // 예금주결과초기화
* EX  : rexpe_0005_01.js 참조
***************************************/
function inqRsltClear(name,value){
	//은행코드 또는 계좌번호 변경시 초기화
	$(document).find(name).val("");   //예금주조회결과코드
	$(document).find(value).val("");      //예금주조회결과
}

/***************************************
* // 결의서 보기 할때 상위 툴바
* EX  : rderp_common.js apprList() 참조
***************************************/
function upBar(rtnData){
	var html = "";

	html += "<div class='btnleft' >";
	html += "<input class='btn_4off' type='button' onclick='javascript:fnApprList(\""+rtnData.APPR_SEQ_NO+"\");' value='결재정보' /> ";
//	if("P20" != rtnData.PROC_TYP_CD){
//		html += "<input class='btn_2off' type='button' onclick='' value='인쇄' /> " ;
//	}
    if("P" == rtnData.PROC_TYP_CD){
    }
    else if("P10" == rtnData.PROC_TYP_CD){
		html += "<input class='btn_4off' type='button' onclick='' id='oz_report' value='청구서' />";
		
		// 결재완료건 일경우 승인취소 가능
		if(rtnData.APPRBOX_TYPE == "3")
			html += " <input class='btn_4off' type='button' onclick='fnCancellAppr(\""+rtnData.APPR_SEQ_NO+"\")' value='승인취소' />";
	}
    else if("P11" == rtnData.PROC_TYP_CD){
		html += "<input class='btn_4off' type='button' onclick='' id='oz_report' value='청구서' />";
		
		// 결재완료건 일경우 승인취소 가능
		if(rtnData.APPRBOX_TYPE == "3")
			html += " <input class='btn_4off' type='button' onclick='fnCancellAppr(\""+rtnData.APPR_SEQ_NO+"\")' value='승인취소' />";
	}
    else if("P12" == rtnData.PROC_TYP_CD){
		html += "<input class='btn_4off' type='button' onclick='' id='oz_report' value='청구서' />";
		
		// 결재완료건 일경우 승인취소 가능
		if(rtnData.APPRBOX_TYPE == "3")
			html += " <input class='btn_4off' type='button' onclick='fnCancellAppr(\""+rtnData.APPR_SEQ_NO+"\")' value='승인취소' />";
	}
    else if("P13" == rtnData.PROC_TYP_CD){
		html += "<input class='btn_4off' type='button' onclick='' id='oz_report' value='청구서' />";
		
		// 결재완료건 일경우 승인취소 가능
		if(rtnData.APPRBOX_TYPE == "3")
			html += " <input class='btn_4off' type='button' onclick='fnCancellAppr(\""+rtnData.APPR_SEQ_NO+"\")' value='승인취소' />";
	}
    else if("P14" == rtnData.PROC_TYP_CD){
		html += "<input class='btn_4off' type='button' onclick='' id='oz_report' value='청구서' />";
		
		// 결재완료건 일경우 승인취소 가능
		if(rtnData.APPRBOX_TYPE == "3")
			html += " <input class='btn_4off' type='button' onclick='fnCancellAppr(\""+rtnData.APPR_SEQ_NO+"\")' value='승인취소' />";
	}
    else if("P15" == rtnData.PROC_TYP_CD){
		html += "<input class='btn_4off' type='button' onclick='' id='oz_report' value='청구서' />";
		
		// 결재완료건 일경우 승인취소 가능
		if(rtnData.APPRBOX_TYPE == "3")
			html += " <input class='btn_4off' type='button' onclick='fnCancellAppr(\""+rtnData.APPR_SEQ_NO+"\")' value='승인취소' />";
	}
    else if("P20" == rtnData.PROC_TYP_CD){
		html += "<input class='btn_7off' type='button' onclick='' id='oz_report' value='지출요구결의서' />";
		html += "<input class='btn_7off' type='button' onclick='' id='oz_report1' value='인건비확정대장' />";
		
		// 결재완료건 일경우 승인취소 가능
		if(rtnData.APPRBOX_TYPE == "3")
			html += " <input class='btn_4off' type='button' onclick='fnCancellAppr(\""+rtnData.APPR_SEQ_NO+"\")' value='승인취소' />";
	}
    else if("P21" == rtnData.PROC_TYP_CD){
		html += "<input class='btn_4off' type='button' onclick='' id='oz_report' value='반납요구서' />";
	}
    else if("P22" == rtnData.PROC_TYP_CD){
		html += "<input class='btn_4off' type='button' onclick='' id='oz_report' value='징수결의서' />";
		
		// 결재완료건 일경우 승인취소 가능
		if(rtnData.APPRBOX_TYPE == "3")
			html += " <input class='btn_4off' type='button' onclick='fnCancellAppr(\""+rtnData.APPR_SEQ_NO+"\")' value='승인취소' />";
	}
    else if("P23" == rtnData.PROC_TYP_CD){
		html += "<input class='btn_7off' type='button' onclick='' id='oz_report' value='자금대체결의서' />";
		
		// 결재완료건 일경우 승인취소 가능
		if(rtnData.APPRBOX_TYPE == "3")
			html += " <input class='btn_4off' type='button' onclick='fnCancellAppr(\""+rtnData.APPR_SEQ_NO+"\")' value='승인취소' />";
	}
    else if("P24" == rtnData.PROC_TYP_CD){
		html += "<input class='btn_7off' type='button' onclick='' id='oz_report' value='일반대체결의서' />";
	}
    else if("P25" == rtnData.PROC_TYP_CD){
		html += "<input class='btn_7off' type='button' onclick='' id='oz_report' value='수입결의서' />";
		
		// 결재완료건 일경우 승인취소 가능
		if(rtnData.APPRBOX_TYPE == "3")
			html += " <input class='btn_4off' type='button' onclick='fnCancellAppr(\""+rtnData.APPR_SEQ_NO+"\")' value='승인취소' />";
	}
    else if("P26" == rtnData.PROC_TYP_CD){
    	html += "<input class='btn_7off' type='button' onclick='' id='oz_report' value='참여인력출력' />";
    }
    else if("P27" == rtnData.PROC_TYP_CD){
		html += "<input class='btn_4off' type='button' onclick='' id='oz_report' value='과제예산' />";
	}
//    else if("E01" == rtnData.PROC_TYP_CD){
//		html += "<input class='btn_4off' type='button' onclick='' id='oz_report' value='과제신청' />";
//	}

    html += "</div>";

    // 결재대기함 일경우 결재처리를 위한 버튼 View 
    if(rtnData.APPRBOX_TYPE == "2"){
        html += "<div class='btnright'>";
        html += "<input class='btn_7off' type='button' onclick='fnPopApprLine(\""+rtnData.APPR_SEQ_NO+"\")' value='결재선변경' /> ";
        html += "<input class='btn_4off' type='button' onclick='fnApprProc()'    value='결재처리'   /> ";
        html += "</div>";
    }

	$(".btn_bar").html(html);
}

/***************************************
* // 결재정보 가져오기
* EX  : rexpe_0005_01.js 참조
***************************************/
function fnApprList(apprSeqNo){

	var param = uf_newWin('/rappr_0001_03.act?APPR_SEQ_NO='+apprSeqNo,'newWin_rappr_0001_03',680,310);

}

/******************************************************************
 * 최종승인 취소 처리
 *****************************************************************/
function fnCancellAppr(apprSeqNo){
	if(!confirm("최종승인자료입니다. 승인을 취소하시겠습니까?")) return;
	
    jex.web.Ajax("rappr_0000_01_c002", {"APPR_SEQ_NO":apprSeqNo}, function(data) {
        if(!jex.web.isError(data)) {
            alert("처리되었습니다.");

            if(typeof(opener.fnSelect) != "undefined") {
                opener.fnSelect();
            }

            self.close();
        }
    }, "jct");

}

/*******************************************************************
 * 결재선변경 팝업 호출
 ******************************************************************/
function fnPopApprLine(apprSeqNo){
	var params = {};
	params["MOD_ABLE_YN"] = "Y";
	params["APPR_SEQ_NO"] = apprSeqNo;
	params["CALLBACK_FN"] = "fnCallBackApprLineFn";
//	params["FORM_KIND"] = "1";
//	params["FORM_PAPER_SEQ_NO"] = "1";
	
	gw.common.jexNewWin("/appr0043_14.act", rtnUniqueTime(), 900, 600, params);
}

/*******************************************************************
 * 결재선변경 팝업 call back function
 ******************************************************************/
function fnCallBackApprLineFn(){
	if(fn_selApprResult != null && fn_selApprResult != undefined) fn_selApprResult();
}

/*******************************************************************
 * 결재처리 팝업 호출
 ******************************************************************/
function fnApprProc(){
	// 필수값 체크
	if(fnApprProcValid()){
		$("#apprProc").css("display", "inline-block");
		$("#apprOpinion").focus();
	}
}

/*******************************************************************
 * 결재처리 필수값 사전체크
 ******************************************************************/
function fnApprProcValid(){
	
	//각 결재문서에 선행 작업이 있으면 먼저 체크하고 다음 작업을 진행한다.
	//예) 과제예산결재시 rappr_0001_P27_01.js에 fnPreApprDocProcTypCheck 있으면 선행 처리후 다음 작업 진행
	if(typeof fnPreApprDocProcTypCheck != "undefined"){
		if ( fnPreApprDocProcTypCheck() == false) return false;
	}

	if ($(document).find("#PROC_TYP_CD").val() == "P26" || $(document).find("#PROC_TYP_CD").val() == "P28") {
		if (!($("#CHECK_CLICK_YN").val() == 'Y')) {
			alert("먼저 참여율 및 지급한도 초과내역이 있는지 확인하여 주시기 바랍니다.");
			return false;
		}

		if (!($("#CHECK_CONFIRM_YN").val() == 'Y')) {
			alert("참여율 혹은 지급한도가 초과된 내역이 있습니다. 정리 후 결재하여 주시기 바랍니다.");
			return false;
		}
	}
	
	// 분개내역 그리드 존재할경우 필수값 체크
	if(typeof _jrnlGrid != "undefined"){
	    var obj = _jrnlGrid.dataMgr.all;

	    if(obj.length == 0) {
	        alert("분개내역이 존재하지 않습니다.");
	        return false;
	    }

	    var sumChaAmt = 0;	// 차변합계금액
	    var sumDaeAmt = 0;	// 대변합계금액
	    var nErrCnt   = 0;	// 에러건수
	    
	    $.each(obj, function(i,v) {
	        if(jex.web.null2void(obj[i].ATIT_CD) == "" || jex.web.null2void(obj[i].ATIT_NM) == "") {
	            alert("계정과목을 선택하시기 바랍니다.");
	            nErrCnt++;
	            return false;
	        }
	        if(jex.web.null2void(obj[i].D_AMT) == "0" && jex.web.null2void(obj[i].C_AMT) == "0") {
	            alert("차변금액과 대변금액 중 하나는 반드시 입력하시기 바랍니다.");
	            nErrCnt++;
	            return false;
	        }
	        if(jex.web.null2void(obj[i].D_AMT) != "0" && jex.web.null2void(obj[i].C_AMT) != "0") {
	            alert("차변금액과 대변금액 둘 중 하나만 입력하시기 바랍니다.");
	            nErrCnt++;
	            return false;
	        }

	        sumChaAmt += Number(Format_NoComma(obj[i].D_AMT));
	        sumDaeAmt += Number(Format_NoComma(obj[i].C_AMT));

	    });

	    if(nErrCnt > 0) return false;

	    if(sumChaAmt != sumDaeAmt) {
	        alert("차변합계금액(" + Format_comma(sumChaAmt) + ")과 대변합계금액(" + Format_comma(sumDaeAmt) + ")이 다르면 처리가 불가능합니다.");
	        return false;
	    }
	}

	return true;
}

/***************************************
* // 기안자 설정
* EX  : /js/rderp/rappr/rappr_0001_P22_01.js 참조
***************************************/
function apprList(rtnData){

	upBar(rtnData); //결제함에서 결의서 보기 할때 상위 툴바

	var html    = "";

	jex.web.Ajax("rappr_0001_01_r003", {APPR_SEQ_NO:rtnData.APPR_SEQ_NO}, function(data) {

        var trTop   = "";
        var trDown  = "";
        var th      = "";
        var td      = "";

       	for(var idx = 0;idx < data.REC.length;idx++){

       		//GW_APPR_STS.APPRLINE_KIND  -- 결재선종류 (공통코드:HH08000) 1:기안 2:결재 3:합의 4:참조 5:접수 6:감사)
       		if("1" == data.REC[idx].APPRLINE_KIND ){
       			th  = th + "<th class='t_center'>기안자</th>";
       			td  = td + "<td class='t_center'  style='height:50px;'>"+ rtnDate(data.REC[idx].APPR_DATE)+"<br/>"
						 +		"<a href='javascript:fnFindUser(\""+data.REC[idx].APPR_USER_ID+"\");' >"+ data.REC[idx].APPR_USER_NM +"</a><br/>"
						 +	"<input type='hidden' id='APPR_USER_ID' name='APPR_USER_ID' value='"+data.REC[idx].APPR_USER_ID+"'/></td>";
       		}else{

       			//GW_APPR_STS.APPRLINE_STS   -- 결재선 상태 (공통코드:HH11000) (1-대기, 2-완료, 3-보류, 4-반송, 6-접수)
       			var sts = data.REC[idx].APPRLINE_STS;

       			if("2" == data.REC[idx].APPR_USER_GB ){
       				th  = th  + "<th class='t_center'>"+ jex.web.null2void(data.REC[idx].APPR_USER_POS_NM,"결재자") +"</th>";

  	       			if("1" == sts){
	       				td = td + "<td class='t_center'><a href='javascript:fnFindUser(\""+data.REC[idx].APPR_USER_ID+"\");'><span class='txt_b'>"+ data.REC[idx].APPR_USER_NM +"</span></a><br/></td>";

	       			}else if("2" == sts){
	       				td  = td + "<td class='t_center'  style='height:50px;'>"+rtnDate(data.REC[idx].APPR_DATE)+"<br/>"
							     +		"<a href='javascript:fnFindUser(\""+data.REC[idx].APPR_USER_ID+"\");'>"+ data.REC[idx].APPR_USER_NM +"</a><br/>"
							     +	"</td>";
	       			}else if("3" == sts){
	       				td = td + "<td class='t_center'><a href='#'><span class='txt_r'>"+ rtnDate(data.REC[idx].APPR_DATE) + "-보류</span></a><br/>"
								+	"<a href='javascript:fnFindUser(\""+data.REC[idx].APPR_USER_ID+"\");'>"+ data.REC[idx].APPR_USER_NM +"</a><br/></td>";

	       			}else if("4" == sts){
	       				td = td + "<td class='t_center'><a href='#'><span class='txt_r'>"+ rtnDate(data.REC[idx].APPR_DATE) + "-반송</span></a><br/>"
								+	"<a href='javascript:fnFindUser(\""+data.REC[idx].APPR_USER_ID+"\");'>"+ data.REC[idx].APPR_USER_NM +"</a><br/></td>";
	       			}else{
	       				td  = td + "<td class='t_center'  style='height:50px;'>"+rtnDate(data.REC[idx].APPR_DATE)+"<br/>"
							     +		"<a href='javascript:fnFindUser(\""+data.REC[idx].APPR_USER_ID+"\");'>"+ data.REC[idx].APPR_USER_NM +"</a><br/>"
							     +	"</td>";
	       			}


       			}else{
       				th  = th  + "<th class='t_center'>"+ jex.web.null2void(data.REC[idx].APPR_DEPT_NM,"결재부서") +"</th>";

       				if("" != voidChk(data.REC[idx].REAL_APPR_USER_ID,"")){
		       			if("1" == sts){
		       				td = td + "<td class='t_center'><span class='txt_b'>"+ data.REC[idx].REAL_APPR_USER_NM +"</span><br/></td>";

		       			}else if("2" == sts){
		       				td  = td + "<td class='t_center'  style='height:50px;'>"+rtnDate(data.REC[idx].APPR_DATE)+"<br/>"
								     +		"<a href='javascript:fnFindUser(\""+data.REC[idx].REAL_APPR_USER_ID+"\");'>"+ data.REC[idx].REAL_APPR_USER_NM +"</a><br/>"
								     +	"</td>";
		       			}else if("3" == sts){
		       				td = td + "<td class='t_center'><a href='#'><span class='txt_r'>"+ rtnDate(data.REC[idx].APPR_DATE) + "-보류</span></a><br/>"
									+	"<a href='javascript:fnFindUser(\""+data.REC[idx].REAL_APPR_USER_ID+"\");'>"+ data.REC[idx].REAL_APPR_USER_NM +"</a><br/></td>";

		       			}else if("4" == sts){
		       				td = td + "<td class='t_center'><a href='#'><span class='txt_r'>"+ rtnDate(data.REC[idx].APPR_DATE) + "-반송</span></a><br/>"
									+	"<a href='javascript:fnFindUser(\""+data.REC[idx].REAL_APPR_USER_ID+"\");'>"+ data.REC[idx].REAL_APPR_USER_NM +"</a><br/></td>";
		       			}else{
		       				td  = td + "<td class='t_center'  style='height:50px;'>"+rtnDate(data.REC[idx].APPR_DATE)+"<br/>"
								     +		"<a href='javascript:fnFindUser(\""+data.REC[idx].REAL_APPR_USER_ID+"\");'>"+ data.REC[idx].REAL_APPR_USER_NM +"</a><br/>"
								     +	"</td>";
		       			}
		       		}else{
		       			td = td + "<td class='t_center'></td>";
		       		}
       			}
       		}
       	}
            trTop  = "<tr>"+ th + "</tr>";
            trDown = "<tr>"+ td + "</tr>";
            html   = "<tbody>" + trTop + trDown + "</tbody>";

	},"jct");

	return html;
}

/***************************************
* // 결재자 정보 가져오기
* EX  : rexpe_0005_01.js 참조
***************************************/
function fnFindUser(userId){
		var param = uf_newWin('/rappr_0001_02.act?USER_ID='+userId,'newWin_rappr_0001_02',640,363);

}
/***************************************
* // 자금현황 가져오기
* EX  : rexpe_0005_01.js 참조
***************************************/
function setBgtList(prjNo,usefacSeqNo,resCd){
	var input = {};
	input["USEFAC_SEQ_NO" ] = jex.web.null2void(usefacSeqNo);
	input["PRJ_NO"		  ] = jex.web.null2void(prjNo);
	input["RES_CD"		  ] = jex.web.null2void(resCd);
	
	jex.web.Ajax("rcomm_0041_01_r001", input, function(data) {

        $('td#INQ_AGRMT_AMT').html(Format_comma(data.INQ_AGRMT_AMT));             //협약액
        $('td#INQ_RCV_AMT2').html(Format_comma(data.INQ_RCV_AMT));                //입금액
        $('td#INQ_RCV_BAL_AMT').html(Format_comma(data.INQ_RCV_BAL_AMT));         //입금잔액

        $('td#INQ_RCV_AMT').html(Format_comma(data.INQ_RCV_AMT));                 //입금액(+)
		$('td#INQ_BF_TRNS_AMT').html(Format_comma(data.INQ_BF_TRNS_AMT));         //전기이월(+)
		$('td#INQ_AF_TRNS_AMT').html(Format_comma(data.INQ_AF_TRNS_AMT));         //차기이월(-)
		$('td#INQ_INT_AMT').html(Format_comma(data.INQ_INT_AMT));                 //이자액(+)
		$('td#INQ_TRNS_IN_AMT').html(Format_comma(data.INQ_TRNS_IN_AMT));         //대체입(+)
		$('td#INQ_TRNS_OUT_AMT').html(Format_comma(data.INQ_TRNS_OUT_AMT));       //대체출(-)
		$('td#INQ_RETN_AMT').html(Format_comma(data.INQ_RETN_AMT));               //반납액(-) -> 연구비잔액반액
		$('td#INQ_REQ_AMT').html(Format_comma(data.INQ_REQ_AMT));                 //청구액(-)
		$('td#INQ_REFUND_AMT').html(Format_comma(data.INQ_REFUND_AMT));           //환수액(+) -> 연구비반납
		$('td#INQ_REQ_BAL_AMT').html(Format_comma(data.INQ_REQ_BAL_AMT));         //청구잔액
		$('td#INQ_CARD_NO_REQ_AMT').html(Format_comma(data.INQ_CARD_NO_REQ_AMT)); //카드미청구금액
		
		$("td").each(function(i){
			if("INQ_REQ_POSS_AMT" == this.id){
				$("td").eq(i).html(Format_comma(data.INQ_REQ_POSS_AMT));
			}
		});
	},"jct");
}

/***************************************
* // 징수 대상가져오기
* EX  : rexpe_0005_01.js 참조
***************************************/
function setCollectList(input){
	var rtnData = "";
	jex.web.Ajax("rexpe_0005_01_r003", input, function(data) {
		rtnData = data;

	},"jct");
}

/***************************************
* // 결제함및 결의서 신청정보
* EX  : rappr_0001_01.js 참조
USEFAC_SEQ_NO : 이용 기관 순번
APPR_SEQ_NO : 결재 순번
PROC_TYP_CD : 처리유형코드
PRJ_NO     : 과제번호
REQ_CNT    : 신청순번
APPR_STS   : 결재 상태(1-임시저장, 2-결재진행, 3-결재완료, 4-결재반송)
DOC_NO     : 문서번호
***************************************/
function procTypCdPop(arr_data){

	var procTypCd = arr_data.PROC_TYP_CD;

	var params = {};
	params["PRJ_NO"			 ] = jex.web.null2void(arr_data.PRJ_NO, "");
	params["APPR_SEQ_NO"	 ] = jex.web.null2void(arr_data.APPR_SEQ_NO, "");
	params["APPR_STS_SEQ_NO" ] = jex.web.null2void(arr_data.APPR_STS_SEQ_NO, "");
	params["PROC_TYP_CD"	 ] = jex.web.null2void(arr_data.PROC_TYP_CD, "");
	params["REQ_CNT"		 ] = jex.web.null2void(arr_data.REQ_CNT, "");
	params["APPR_STS"		 ] = jex.web.null2void(arr_data.APPR_STS, "");
	params["USEFAC_SEQ_NO"	 ] = jex.web.null2void(arr_data.USEFAC_SEQ_NO, "");
	params["DOC_NO"			 ] = jex.web.null2void(arr_data.DOC_NO, "");
	params["APPRBOX_TYPE"    ] = jex.web.null2void($("#APPRBOX_TYPE").val(), "");
	params["PRJ_NTFY_NO"     ] = jex.web.null2void(arr_data.PRJ_NTFY_NO, "");
	params["PRJ_APPL_NO"     ] = jex.web.null2void(arr_data.PRJ_APPL_NO, "");

	if(procTypCd == ""){

	}
	//청구서작성
	else if(procTypCd == "P10"){
		return gw.common.jexNewWin( '/rappr_0001_P10_01.act', rtnUniqueTime(), 940, 850, params);
	}
	//청구서작성 카드
	else if(procTypCd == "P11"){
		return gw.common.jexNewWin( '/rappr_0001_P10_01.act', rtnUniqueTime(), 940, 850, params);
	}
	//청구서작성 대량(일반)
	else if(procTypCd == "P12" ){
		return gw.common.jexNewWin( '/rappr_0001_P10_01.act', rtnUniqueTime(), 940, 850, params);
	}
	//청구서작성 대량(장학금)
	else if(procTypCd == "P13" ){
		return gw.common.jexNewWin( '/rappr_0001_P10_01.act', rtnUniqueTime(), 940, 850, params);
	}
	//청구서작성 대량(기타소득)
	else if(procTypCd == "P14" ){
		return gw.common.jexNewWin( '/rappr_0001_P10_01.act', rtnUniqueTime(), 940, 850, params);
	}
	//청구서작성 대량(급여)
	else if(procTypCd == "P15" ){
		return gw.common.jexNewWin( '/rappr_0001_P10_01.act', rtnUniqueTime(), 940, 850, params);
	}
	//반납결의서
	else if(procTypCd == "P21"){
		return gw.common.jexNewWin( '/rappr_0001_P21_01.act', rtnUniqueTime(), 940, 850, params);
	}
	//징수결의서
	else if(procTypCd == "P22"){
		return gw.common.jexNewWin( '/rappr_0001_P22_01.act', rtnUniqueTime(), 940, 850, params);
	}
	//자금대체징수결의서
	else if(procTypCd == "P23"){
		return gw.common.jexNewWin( '/rappr_0001_P23_01.act', rtnUniqueTime(), 940, 850, params);
	}
	//일반대체결의서
	else if(procTypCd == "P24"){
		return gw.common.jexNewWin( '/rappr_0001_P24_01.act', rtnUniqueTime(), 940, 850, params);
	}
	//수입결의서
	else if(procTypCd == "P25"){
		return gw.common.jexNewWin( '/rappr_0001_P25_01.act', rtnUniqueTime(), 940, 850, params);
	}
	//참여인력지급계획
	else if(procTypCd == "P26"){
		return gw.common.jexNewWin( '/rappr_0001_P26_01.act', rtnUniqueTime(), 940, 850, params);
	}
	//과제예산
	else if(procTypCd == "P27"){
		return gw.common.jexNewWin( '/rappr_0001_P27_01.act', rtnUniqueTime(), 940, 850, params);
	}
	//참여인력인건비일괄지급
	else if(procTypCd == "P20"){
		return gw.common.jexNewWin( '/rappr_0001_P20_01.act', rtnUniqueTime(), 940, 850, params);
	}
	//인건비풀
	else if(procTypCd == "P28"){
		return gw.common.jexNewWin( '/rappr_0001_P28_01.act', rtnUniqueTime(), 940, 850, params);
	}
	// 과제신청
	else if(procTypCd == "E01"){
		return gw.common.jexNewWin( '/rappr_0001_E01_01.act', rtnUniqueTime(), 940, 850, params);
	}
	// 학술진흥
	else if(procTypCd == "202"){
		return gw.common.jexNewWin( '/rappr_0001_202_11_01.act', rtnUniqueTime(), 940, 850, params);
		/**
		var gUsefacSeqNo 	= jex.web.null2void(arr_data.USEFAC_SEQ_NO, "");
		var gApprSeqNo 		= jex.web.null2void(arr_data.APPR_SEQ_NO, "");
		var gApprStsSeqNo 	= jex.web.null2void(arr_data.APPR_STS_SEQ_NO, "");
		var resultRecord 	= getApprFormStsInfo(gUsefacSeqNo, gApprSeqNo, gApprStsSeqNo);
		params["USEFAC_SEQ_NO"   	] = jex.web.null2void(resultRecord.USEFAC_SEQ_NO, "");
		params["APPRLINE_STS"     	] = jex.web.null2void(resultRecord.APPRLINE_STS, "");
		params["APPR_SEQ_NO"     	] = jex.web.null2void(resultRecord.APPR_SEQ_NO, "");
		params["APPR_STS_SEQ_NO"    ] = jex.web.null2void(resultRecord.APPR_STS_SEQ_NO, "");
		params["APPRLINE_KIND"      ] = jex.web.null2void(resultRecord.APPRLINE_KIND, "");
		params["APPRLINE_GB"     	] = jex.web.null2void(resultRecord.APPRLINE_GB, "");
		params["FORM_PAPER_KIND"    ] = jex.web.null2void(resultRecord.FORM_PAPER_KIND, "");
		params["APPR_STS"     		] = jex.web.null2void(resultRecord.APPR_STS, "");
		params["FORM_PAPER_CATE"	] = jex.web.null2void(resultRecord.FORM_PAPER_CATE, "");
		
		//alert(JSON.stringify(params));
		return gw.common.jexNewWin( '/appr0043_24.act', rtnUniqueTime(), 940, 850, params);
		**/
	}

}

/********************************************************************
 *  문서번호 AREA 설정
 * EX  : rappr_0001_01.js 참조
 *********************************************************************/
function applyList(input){

	var rtnData = {};

	jex.web.Ajax("rcomm_0045_01_r001"
			    , input
			    , function(data) { 
					rtnData = data;

			    	rtnData['RTN_APPL_DT']       = rtnDate(voidChk(data.APPL_DT,""));
					rtnData['RTN_DRAFT_USER_NM'] = voidChk(data.APPL_USER_NM,"");
					//rtnData['RTN_DRAFT_USER_NM'] = voidChk(data.DRAFT_USER_NM,"");
					rtnData['RTN_SLIP_DT']       = rtnDate(voidChk(data.SLIP_DT,""));
					rtnData['RTN_PRJ_NM']        = voidChk(data.PRJ_NM,"") + " / " + voidChk(data.ANL,"") + "년차";

					if (data.APPR_DIV_CD == "10" ) {
				   	    rtnData['RTN_APPL_INFO']   = voidChk(data.REQ_DOC_NO,"") + " " + rtnDate(voidChk(data.APPL_DATE,"")) + " " + voidChk(data.APPL_USER_NM,""); //신청차수 기안일자 기안자    (확정:신청자기준)
						rtnData['RTN_APPL_CONT']   = voidChk(data.APPL_CONT,"");		//청구내용 : 신청관리.신청내용
						rtnData['RTN_APPR_DIV_NM'] = voidChk(data.APPR_DIV_NM,"");		//승인정보 : 승인구분명
						rtnData['RTN_OPINION']     = "";					            //의견     : 없음

				   	}else if (data.APPR_DIV_CD == "20" ){
				   	    rtnData['RTN_APPL_INFO']   = voidChk(data.REQ_DOC_NO,"") + " " + rtnDate(voidChk(data.APPL_DATE,"")) + " " + voidChk(data.APPL_USER_NM,""); //신청차수 기안일자 기안자    (확정:신청자기준)
						rtnData['RTN_APPL_CONT']   = voidChk(data.APPL_CONT,""); 		                                                                     //신청관리.신청내용
						rtnData['RTN_APPR_DIV_NM'] = voidChk(data.APPR_DIV_NM,"") + " " + rtnDate(voidChk(data.APPR_DATE,"")) + " " + voidChk(data.APPR_USER_NM,"");	 //승인구분명 승인일자 승인자  (확정:신청자기준)
						rtnData['RTN_OPINION']     = voidChk(data.APPR_USER_NM,"") + voidChk(data.OPINION,"");					                             //최종승인자 결재내용

				   	}else if (data.APPR_DIV_CD == "30" ){
				   		rtnData['RTN_APPL_INFO']   = voidChk(data.REQ_DOC_NO,"") + " " + rtnDate(voidChk(data.APPL_DATE,"")) + " " + voidChk(data.APPL_USER_NM,""); //신청차수 기안일자 기안자 (확정:신청자기준)
				   		rtnData['RTN_APPL_CONT']   = voidChk(data.APPL_CONT,"");		                                                                     //청구내용 : 신청관리.신청내용
						rtnData['RTN_APPR_DIV_NM'] = voidChk(data.APPR_DIV_NM,"");	                                                                         //승인정보 : 승인구분명
						rtnData['RTN_OPINION']     = voidChk(data.OPINION,"");		                                                                         //의견     : 없음

				   	}else if (data.APPR_DIV_CD == "40" ){
						rtnData['RTN_APPL_INFO']   = voidChk(data.REQ_DOC_NO,"") + " " + voidChk(data.APPL_DATE,"") + " " + voidChk(data.APPL_USER_NM,""); //신청정보 : 신청차수 기안일자 기안자  (확정:신청자기준)
						rtnData['RTN_APPL_CONT']   = voidChk(data.APPL_CONT,"");		//청구내용 : 신청관리.신청내용
						rtnData['RTN_APPR_DIV_NM'] = voidChk(data.APPR_DIV_NM,"") + " " + voidChk(data.APPR_DATE,"") + " " + voidChk(data.APPR_USER_NM,"");	//승인정보 : 승인구분명 승인일자 승인자  (확정:신청자기준)
						rtnData['RTN_OPINION']     = voidChk(data.APPR_USER_NM,"") + voidChk(data.OPINION,"");					//의견     : 최종승인자 결재내용
				   	}

			      },"jct");

	return rtnData;
}
/********************************************************************
 *  문서번호 AREA 설정(참여인력인건비일괄지급 상세보기 사용)
 * EX  : rappr_0001_01.js 참조
 *********************************************************************/
function applyListDiff(input){

	var rtnData = {};

	jex.web.Ajax("rcomm_0045_01_r002"
			    , input
			    , function(data) {
					rtnData = data;

					rtnData['RTN_APPL_DT']       = rtnDate(voidChk(data.APPL_DT,""));
					rtnData['RTN_DRAFT_USER_NM'] = voidChk(data.APPL_USER_NM,"");
					//rtnData['RTN_DRAFT_USER_NM'] = voidChk(data.DRAFT_USER_NM,"");
					rtnData['RTN_SLIP_DT']       = rtnDate(data.SLIP_DT);
					rtnData['RTN_PRJ_NM']        = voidChk(data.PRJ_NM,"") + " / " + voidChk(data.ANL,"") + "년차";

					if (data.APPR_DIV_CD == "10" ) {
						//rtnData['RTN_APPL_INFO']   = voidChk(data.ANL;			//신청정보 : 신청차수
				   	    rtnData['RTN_APPL_INFO']   = voidChk(data.REQ_DOC_NO,"") + " " + rtnDate(voidChk(data.APPL_DATE,"")) + " " + voidChk(data.APPL_USER_NM,""); //신청차수 기안일자 기안자    (확정:신청자기준)
						rtnData['RTN_APPL_CONT']   = voidChk(data.APPL_CONT,"");		//청구내용 : 신청관리.신청내용
						rtnData['RTN_APPR_DIV_NM'] = voidChk(data.APPR_DIV_NM,"");		//승인정보 : 승인구분명
						rtnData['RTN_OPINION']     = "";					//의견     : 없음

				   	}else if (data.APPR_DIV_CD == "20" ){
				   	    //rtnData['RTN_APPL_INFO']   = data.ANL + " " + data.DRAFT_DATE + " " + data.DRAFT_USER_NM; //신청정보 : 신청차수 기안일자 기안자  (확정:신청자기준)
				   	    rtnData['RTN_APPL_INFO']   = voidChk(data.REQ_DOC_NO,"") + " " + rtnDate(voidChk(data.APPL_DATE,"")) + " " + voidChk(data.APPL_USER_NM,""); //신청차수 기안일자 기안자    (확정:신청자기준)
						rtnData['RTN_APPL_CONT']   = voidChk(data.APPL_CONT,""); 		//청구내용 : 신청관리.신청내용
						rtnData['RTN_APPR_DIV_NM'] = voidChk(data.APPR_DIV_NM,"") + " " + voidChk(data.APPR_DATE,"") + " " + voidChk(data.APPR_USER_NM,"");	//승인정보 : 승인구분명, 반려일자, 반려자  (확정:신청자기준)
						rtnData['RTN_OPINION']     = voidChk(data.APPR_USER_NM,"") + voidChk(data.OPINION,"");					//의견     : 최종반려자 반려내용

				   	}else if (data.APPR_DIV_CD == "30" ){
				   		//rtnData['RTN_APPL_INFO']   = voidChk(data.ANL + " " + data.DRAFT_DATE + " " + data.DRAFT_USER_NM; //신청정보 : 신청차수 기안일자 기안자 (확정:신청자기준)
				   		rtnData['RTN_APPL_INFO']   = voidChk(data.REQ_DOC_NO,"") + " " + rtnDate(voidChk(data.APPL_DATE,"")) + " " + voidChk(data.APPL_USER_NM,""); //신청차수 기안일자 기안자 (확정:신청자기준)
				   		rtnData['RTN_APPL_CONT']   = voidChk(data.APPL_CONT,"");		//청구내용 : 신청관리.신청내용
						rtnData['RTN_APPR_DIV_NM'] = voidChk(data.APPR_DIV_NM,"");	//승인정보 : 승인구분명
						rtnData['RTN_OPINION']     = voidChk(data.OPINION,"");		//의견     : 없음

				   	}else if (data.APPR_DIV_CD == "40" ){
						//rtnData['RTN_APPL_INFO']   = data.ANL + " " + data.DRAFT_DATE + " " + data.DRAFT_USER_NM; //신청정보 : 신청차수 기안일자 기안자  (확정:신청자기준)
						rtnData['RTN_APPL_INFO']   = voidChk(data.REQ_DOC_NO,"") + " " + voidChk(data.APPL_DATE,"") + " " + voidChk(data.APPL_USER_NM,""); //신청정보 : 신청차수 기안일자 기안자  (확정:신청자기준)
						rtnData['RTN_APPL_CONT']   = voidChk(data.APPL_CONT,"");		//청구내용 : 신청관리.신청내용
						rtnData['RTN_APPR_DIV_NM'] = voidChk(data.APPR_DIV_NM,"") + " " + voidChk(data.APPR_DATE,"") + " " + voidChk(data.APPR_USER_NM,"");	//승인정보 : 승인구분명 승인일자 승인자  (확정:신청자기준)
						rtnData['RTN_OPINION']     = voidChk(data.APPR_USER_NM,"") + voidChk(data.OPINION,"");					//의견     : 최종승인자 결재내용
				   	}

			      },"jct");

	return rtnData;
}
/********************************************************************
 * 프로젝트 별 지출계좌생성
 * - param1: 이용기관일련번호
 * - param2: 과제번호
 * - param3: 지출계좌
 *********************************************************************/
fnSetExpCdSelectBox = function(usefacSeqNo, prjNo, bgtReqCnt, targetCombo, valToKey) {
	var input = {};
	input['USEFAC_SEQ_NO'	] = gUsefacSeqNo;
	input['PRJ_NO'			] = '201100010000001';
	input['BGT_REQ_CNT'		] = '1';

	jex.web.Ajax("rcomm_combo_01_r002"
		    , input
		    , function(data) {
		    	if(data.REC.length > 0){
	            	grid.dataMgr.set(data.REC);

	            	// 자동 생성된 객체를 지우고
					$(targetCombo + " .generated").remove();

					// JSON 객체데이터만큼 <option> 태그 생성
					$.each(data.REC, function() {
						optVal = this.KEY;

						if(valToKey) {
							optVal = this.DAT;
						}

						html = "<option class='generated' value='" + optVal + "'>" + this.DAT + "</option>";

						$(targetCombo).append(html);
					});

	            }else{
	            	//alert("조회된 결과가 없습니다.");
	            }
		      },"jct");
};
/********************************************************************
 * 오즈레포트 init
 * - param1: 팝업여부 (true ; 팝업, false ; 바닥화면)
 * - param2: 레포트너비지정 (default = 100%)
 * - param3: 레포트높이지정 (default = 100%)
 *********************************************************************/
function oz_init(isPop, width, height) {
//  var ServerIP    = "http://172.20.20.222";
//  var ServerIP    = "http://112.187.198.222";
//  var ServerPort  = "8080";

	var ServerIP    = OzServerIP;
    var ServerPort  = OzServerPort;

    document.write('<OBJECT width = "0" height = "0" ID="ZTransferX" CLASSID="CLSID:C7C7225A-9476-47AC-B0B0-FF3B79D55E67" codebase="' + ServerIP + ':' + ServerPort + '/oz51/ozviewer/ZTransferX_2,2,1,9.cab#version=2,2,1,9">');
    document.write('    <PARAM NAME="download.Server" VALUE="'+ ServerIP + '/oz51/ozviewer">');
    document.write('    <PARAM NAME="download.Port" VALUE="' + ServerPort + '">');
    document.write('    <PARAM NAME="download.Instruction" VALUE="ozrviewer.idf">');
    document.write('    <PARAM NAME="install.Base" VALUE="<PROGRAMS>/Forcs">');
    document.write('    <PARAM NAME="install.Namespace" VALUE="test">');
    document.write('</OBJECT>');
    if (isPop) {
        document.write('<OBJECT id = "ozviewer" CLASSID="CLSID:0DEF32F8-170F-46f8-B1FF-4BF7443F5F25" width="0" height="0">');
    } else {
        if (voidChk(width, '') == '') {
            width = "100%";
        }
        if (voidChk(height, '') == '') {
            height = "100%";
        }
        document.write('<OBJECT id = "ozviewer" CLASSID="CLSID:0DEF32F8-170F-46f8-B1FF-4BF7443F5F25" width="' + width + '" height="' + height + '">');
    }
    document.write('    <param name="viewer.emptyframe" value="true">');
    document.write('    <param name="viewer.isframe" value="false">');
    document.write('</OBJECT>');
}
/********************************************************************
 * 오즈레포트 출력
 * - param1: 팝업여부 (true ; 팝업, false ; 바닥화면)
 * - param2: 레포트명 (ex > test1111.ozr)
 * - param3: odi명 (ex > 산학)
 * - param4: 화면에 출력할 파라미터(ex > name1=val1^name2=val2)
 * - param5: 쿼리를 실행할 파라미터(ex > name1=val1^name2=val2)
 *********************************************************************/
function oz_setdata(isPop, rName, odiName, vParam, qParam) {
//  var ServerIP    = "http://172.20.20.222";
//"http://112.187.198.222";	
//var ServerPort  = "8080";
    var ServerIP    = OzServerIP;
    var ServerPort  = OzServerPort;

    ozviewer.script('close'); // 뷰어안의 보고서가 있으면 없애기

    var viewParam    = vParam.split("^");
    var vParamLength = viewParam.length;

    var queryParam   = qParam.split("^");
    var qParamLength = queryParam.length;

    var strOZViewerInfo = "";

    if("" == voidChk(odiName, "")) {
        odiName = "산학";
    }
    if(voidChk(rName, "").indexOf("/")<0) {
        rName = "/rderp/" + rName;
    }

    strOZViewerInfo += "viewer.smartframesize=true\n";
	strOZViewerInfo += "viewer.isframe="+isPop+"\n";
    if("" != voidChk(odiName,"")) {
        strOZViewerInfo += "odi.odinames="+odiName+"\n";
    }
    if("" != voidChk(rName,"")) {
        strOZViewerInfo += "connection.reportname="+rName+"\n";
    }
    strOZViewerInfo += "connection.servlet=" + ServerIP + ":" + ServerPort + "/oz51/server\n";

    // view param
    if("" != voidChk(vParam, "")) {
        strOZViewerInfo += "connection.pcount="+vParamLength+"\n";
        for(var i=0; i<vParamLength; i++) {
            strOZViewerInfo += "connection.args" + Number(i+1) + "=" + viewParam[i] +"\n";
        }
    }

    // query param
    if("" != voidChk(qParam, "")) {
        strOZViewerInfo += "odi." + odiName + ".pcount="+qParamLength+"\n";
        for(var j=0; j<qParamLength; j++) {
            strOZViewerInfo += "odi." + odiName + ".args" +(j+1) + "=" + queryParam[j] + "\n";
        }
    }
    ozviewer.CreateReport(strOZViewerInfo);
}


/***************************************
* // 학술진흥, 전자결재 문서일 때 결재폼양식 상세조회 가져오기
***************************************/
function getApprFormStsInfo(usefacSeqNo, apprSeqNo, apprStsSeqNo){
	var resultData = {};
	jex.web.Ajax("rappr_1003_01_r001", {USEFAC_SEQ_NO:usefacSeqNo,APPR_SEQ_NO:apprSeqNo, APPR_STS_SEQ_NO:apprStsSeqNo}, function(data) {
		resultData["USEFAC_SEQ_NO"] 	= data.USEFAC_SEQ_NO;
		resultData["APPRLINE_STS"] 		= data.APPRLINE_STS;
		resultData["APPR_SEQ_NO"] 		= data.APPR_SEQ_NO;
		resultData["APPR_STS_SEQ_NO"] 	= data.APPR_STS_SEQ_NO;
		resultData["APPRLINE_KIND"] 	= data.APPRLINE_KIND;
		resultData["APPRLINE_KIND"] 	= data.APPRLINE_GB;
		resultData["FORM_PAPER_KIND"] 	= data.FORM_PAPER_KIND;
		resultData["APPR_STS"] 			= data.APPR_STS;
		resultData["FORM_PAPER_CATE"] 	= data.FORM_PAPER_CATE;
		
	},"jct");
	return resultData; 
}

/********************************************************************
 * Ajax를 호출하여 SelectBox를 만든다
 * - param1: Ajax Id
 * - param2: 입력객체
 * - param3: 객체
 * - param4: 객체값 (SelectBox Value를 비교하여 대상값과 같은경우 선택)
 *********************************************************************/
rderp.common.setCreateSelectBox = function(url, input, obj, valToKey, tabId) {
	comObj = jex.web.null2void(tabId)!=""?$("#"+tabId).find(obj):$(obj);
	
	comObj.find("option").remove();
	
	jex.web.Ajax(url, input, function(data) {
		if(!jex.web.isError(data)){
	            
			// JSON 객체데이터만큼 <option> 태그 생성
			$.each(data.REC, function() {
				optVal = this.KEY;
				if(valToKey == optVal) {
					html = "<option class='generated' value='" + optVal + "' selected>" + this.DAT + "</option>";
				}
				else {
					html = "<option class='generated' value='" + optVal + "'>" + this.DAT + "</option>";
				}
				comObj.append(html);
			});
		}
	},"jct");  
};

rderp.common.setCreateSelectBox2 = function(params) {
	var _asyncGb = jex.web.null2void(params.asyncGb,"1");
	comObj = jex.web.null2void(params.tabId)!=""?$("#"+params.tabId).find(params.obj):$(params.obj);
	
	comObj.find("option").remove();
	
	jex.web.Ajax(params.url, params.input, function(data) {
		if(!jex.web.isError(data)){
			
			// JSON 객체데이터만큼 <option> 태그 생성
			$.each(data.REC, function() {
				optVal = this.KEY;
				if(jex.web.null2void(params.valToKey) == optVal) {
					html = "<option class='generated' value='" + optVal + "' selected>" + this.DAT + "</option>";
				}
				else {
					html = "<option class='generated' value='" + optVal + "'>" + this.DAT + "</option>";
				}
				comObj.append(html);
			});
		}
	},"jct", _asyncGb);  
};

/*******************************************************************
 * 화폐단위 리턴
 ******************************************************************/
rderp.common.moneyFormat = function(data){
	return Format_comma(jex.web.null2void(data, "0"));
};

/*******************************************************************
 * number type input box key down event
 * parameter - obj:이벤트 대상
 * parameter - gubun: '.' 소수점표시, '-' 표시, 'all' 둘다 허용
 ******************************************************************/
fn_keyDownNumberType = function(obj, gubun){
	$(obj).attr("style", "ime-mode:disabled;"+$(obj).attr("style"));
	$(obj).keydown(function(event){
		//shift 키가 눌려있을땐 특수문자 입력 불가
		//백스페이스(8), delete(46), 방향키(37~40) 은 허용함
		//숫자가 아닌 입력값 입력 불가
		
		// 구분이 있을경우 체크
		if(gubun != null && gubun != undefined){
			// 소수점 허용
			if(gubun == "."){
				var nDotCnt = 0;
				for(var i=0; i<$(obj).val().length; i++){
					if($(obj).val().charAt(i) == ".") nDotCnt++;
				}
				
				if(nDotCnt > 0){
					if( event.shiftKey || 
						    ( !(event.keyCode==8 || event.keyCode==9 || event.keyCode==46 || (event.keyCode>=37 && event.keyCode<=40) ) &&
							  !(event.keyCode>=48 && event.keyCode<=57) && !(event.keyCode>=96 && event.keyCode<=105))	
						){
							event.returnValue=false;
							return false;
						}
				}
				else{
					if( event.shiftKey || 
						    ( !(event.keyCode==8 || event.keyCode==9 || event.keyCode==46 || event.keyCode==110 || event.keyCode==190 || (event.keyCode>=37 && event.keyCode<=40) ) &&
							  !(event.keyCode>=48 && event.keyCode<=57) && !(event.keyCode>=96 && event.keyCode<=105))	
						){
							event.returnValue=false;
							return false;
						}
				}
				
			}
			// 마이너스 표시 허용
			else if(gubun == "-"){
				if( event.shiftKey || 
				    ( !(event.keyCode==8 || event.keyCode==9 || event.keyCode==46 || event.keyCode==109 || event.keyCode==189 || (event.keyCode>=37 && event.keyCode<=40) ) &&
					  !(event.keyCode>=48 && event.keyCode<=57) && !(event.keyCode>=96 && event.keyCode<=105))	
				){
					event.returnValue=false;
					return false;
				}
			}
			// 소수점, 마이너스 둘다 허용
			else if(gubun == "all"){
				if( event.shiftKey || 
					( !(event.keyCode==8 || event.keyCode==9 || event.keyCode==46 || event.keyCode==109 || event.keyCode==189 || event.keyCode==110 || event.keyCode==190 || (event.keyCode>=37 && event.keyCode<=40) ) &&
					  !(event.keyCode>=48 && event.keyCode<=57) && !(event.keyCode>=96 && event.keyCode<=105))	
				){
					event.returnValue=false;
					return false;
				}
			}
		}
		// only number type 체크
		else{
			if( event.shiftKey || 
			    ( !(event.keyCode==8 || event.keyCode==9 || event.keyCode==46 || (event.keyCode>=37 && event.keyCode<=40) ) &&
				  !(event.keyCode>=48 && event.keyCode<=57) && !(event.keyCode>=96 && event.keyCode<=105))	
			){
				event.returnValue=false;
				return false;
			}
		}
		
	});
};

/*******************************************************************
 * number type input box key press event
 ******************************************************************/
fn_keyPressNumberType = function(obj){
	//숫자가 아닌 입력값 입력 불가
	if ((event.keyCode> 47) && (event.keyCode < 57)){
		event.returnValue=true;
	} 
	else 
	{ 
		event.returnValue=false;
	}

	$(obj).attr("style", "ime-mode:disabled;"+$(obj).attr("style"));
};

/*******************************************************************
 * 분리자를 이용하여 날짜의 유효성 체크
 * 예) 2011-05-24 -> '-'을 이용하여 체크한다.
 * @param inputDate 체크할 날짜
 * @param point 년,월,일 분리자
 ******************************************************************/
function fnDateCheck(inputDate, point){
    var dateElement = new Array(3);
    
    if(point != ""){
        dateElement = inputDate.split(point);
        if(inputDate.length != 10 || dateElement.length != 3){
            return false;
        }
    }else{
        dateElement[0] = inputDate.substring(0,4);
        dateElement[1] = inputDate.substring(4,6);
        dateElement[2] = inputDate.substring(6,9);
    }
    //년도 검사
    if( !( 1800 <= dateElement[0] && dateElement[0] <= 4000 ) ) {
        return false;
    }

    //달 검사
    if( !( 0 < dateElement[1] &&  dateElement[1] < 13  ) ) {
        return false;
    }

    // 해당 년도 월의 마지막 날
    var tempDate = new Date(dateElement[0], dateElement[1], 0);
    var endDay = tempDate.getDate();

    //일 검사
    if( !( 0 < dateElement[2] && dateElement[2] <= endDay ) ) {
         return false;
    }

    return true;
}

/*******************************************************************
 * 날짜 비교
 * 종료일이 시작일 보다 작을때 false 를
 * 정상 기간일 경우 true 를 리턴한다.
 * @param startDate 시작일
 * @param endDate 종료일
 * @param point 날짜 구분자
 ******************************************************************/
function fnDateCompare(startDate, endDate, point){
    //정상 날짜인지 체크한다.
    var startDateChk = fnDateCheck(startDate, point);
    if(!startDateChk){
        return false;
    }
    var endDateChk = fnDateCheck(endDate, point, "end");
    
    if(!endDateChk){
        return false;
    }

    //년 월일로 분리 한다.
    var start_Date = new Array(3);
    var end_Date = new Array(3);

    if(point != ""){
        start_Date = startDate.split(point);
        end_Date = endDate.split(point);
        if(start_Date.length != 3 && end_Date.length != 3){
            return false;
        }
    }else{
        start_Date[0] = startDate.substring(0,4);
        start_Date[1] = startDate.substring(4,6);
        start_Date[2] = startDate.substring(6,9);

        end_Date[0] = endDate.substring(0,4);
        end_Date[1] = endDate.substring(4,6);
        end_Date[2] = endDate.substring(6,9);
    }

    //Date 객체를 생성한다.
    var sDate = new Date(start_Date[0], start_Date[1], start_Date[2]);
    var eDate = new Date(end_Date[0], end_Date[1], end_Date[2]);

    if(sDate > eDate){
        return false;
    }

    return true;
}

/*******************************************************************
 * 주민(외국인)등록번호 유효성 검사
 ******************************************************************/
function fnRRNCheck(rrn){
    if (fnrrnCheck(rrn) || fnfgnCheck(rrn) || fnBizCheck(rrn)) {
        return true;
    }
    
    return false;
}

/*******************************************************************
 * 주민등록번호 유효성 검사
 ******************************************************************/
function fnrrnCheck(rrn){
    var sum = 0;
    
    if(rrn != ""){
        if (rrn.length != 13) {
            return false;
        }
        else if (rrn.substr(6, 1) != 1 && rrn.substr(6, 1) != 2 && rrn.substr(6, 1) != 3 && rrn.substr(6, 1) != 4) {
            return false;
        }
        for (var i = 0; i < 12; i++) {
            sum += Number(rrn.substr(i, 1)) * ((i % 8) + 2);
        }
        if (((11 - (sum % 11)) % 10) == Number(rrn.substr(12, 1))) {
            return true;
        }
        return false;
    }
    
    return true;
}

/*******************************************************************
 * 외국인등록번호 유효성 검사
 ******************************************************************/
function fnfgnCheck(rrn){
    var sum = 0;
    
    if(rrn != ""){
        if (rrn.length != 13) {
            return false;
        }
        else if (rrn.substr(6, 1) != 5 && rrn.substr(6, 1) != 6 && rrn.substr(6, 1) != 7 && rrn.substr(6, 1) != 8) {
            return false;
        }
        if (Number(rrn.substr(7, 2)) % 2 != 0) {
            return false;
        }
        for (var i = 0; i < 12; i++) {
            sum += Number(rrn.substr(i, 1)) * ((i % 8) + 2);
        }
        if ((((11 - (sum % 11)) % 10 + 2) % 10) == Number(rrn.substr(12, 1))) {
            return true;
        }
        return false;
    }
    
    return true;
}

/*******************************************************************
 * 사업자등록번호 유효성 검사
 ******************************************************************/
function fnBizCheck(rrn){ 
    var sum = 0;
    
    if(rrn != ""){
        var getlist  = new Array(10);
        var chkvalue = new Array("1","3","7","1","3","7","1","3","5");
        
        for(var i=0; i<10; i++) { 
        	getlist[i] = rrn.substring(i, i+1); 
        }
        
        for(var i=0; i<9; i++) { 
        	sum += getlist[i]*chkvalue[i]; 
        }
        
        sum = sum + parseInt((getlist[8]*5)/10);
        sidliy = sum % 10;
        sidchk = 0;
        
        if(sidliy != 0) { 
        	sidchk = 10 - sidliy; 
        }
        else { 
        	sidchk = 0; 
        }
        
        if(sidchk != getlist[9]) { 
        	return false; 
        }
        
        return true;
    }
    
    return true;
} 

/*******************************************************************
 * 주민등록번호 FORMAT
 ******************************************************************/
rderp.common.formatSsn = function(value){
	var tmpSSN = "";
	
	if(jex.web.null2void (value) != ""){
		tmpSSN = value.replace(/\-/g,"");
		
		if(value.length == 13){
			tmpSSN = tmpSSN.substring(0,6)+"-"+tmpSSN.substring(6,7)+"******";    
		}
		else{
			tmpSSN = tmpSSN;
		}
	}
	
	return tmpSSN;
};

/*******************************************************************
 * 우편번호 FORMAT
 * parameter1 - obj1  : 우편번호 앞자리 ID
 * parameter2 - obj2  : 우편번호 뒷자리 ID
 * parameter3 - value : 우편번호 full value
 ******************************************************************/
rderp.common.formatZipCd = function(obj1, obj2, value){
	var zip1 = "";
	var zip2 = "";
	
	if(jex.web.null2void (value) != ""){
		if(value.length >= 3){
			zip1 = value.substring(0,3);    
			zip2 = value.substring(3);    
		}
	}
	
	$("#"+obj1).val(zip1);
	$("#"+obj2).val(zip2);
};

/****************************************************************************
 * 예금주조회 처리
 * @param params - 은행코드(BNK_CD), 계좌번호(ACCT_NO), 이체할금액(TRNS_AMT)
 * @param rsltCd - 예금주조회결과코드 object
 * @param rslt   - 예금주조회결과 object
 * @param owner  - 예금주 object
 ***************************************************************************/
rderp.common.selOwnrIng = function(params, rsltCd, rslt, owner){
	var input = {};
	var sBnkCd   = jex.web.null2void(params.BNK_CD).replace(/\-/g,"");   	// 은행코드
	var sAcctNo  = jex.web.null2void(params.ACCT_NO).replace(/\-/g,"");  	// 계좌번호
	var sTrnsAmt = Format_NoComma(jex.web.null2void(params.TRNS_AMT,"0"));  // 이체할금액
	
	if(sBnkCd == "" || sAcctNo == ""){
		alert("예금주조회시 은행/계좌번호는 필수입력입니다.");
		return;
	}
	
	input["BNK_CD"   ] = sBnkCd;
	input["ACCT_NO"  ] = sAcctNo;
	input["TRNS_AMT" ] = sTrnsAmt;
	
	jex.web.Ajax("rcomm_imo_0600_600_01", input, function(data) {
		if(rsltCd) $(rsltCd).val(data.OWNR_INQ_RSLT_CD);	// 예금주조회결과코드
		if(rslt)   $(rslt).val(data.OWNR_INQ_RSLT);      	// 예금주조회결과
		if(owner)  $(owner).val(data.OWNR);					// 예금주성명 셋팅
	},"jct");

};

/****************************************************************************
 * 숫자 format 형식 지정
 * 예) rderp.common.numFormat('111122223333','0000-0000-0000')
 ***************************************************************************/
rderp.common.numFormat = function(str, format){
	var rtnVal = "";
	if(jex.web.null2void(str) != ""){
		rtnVal = gw.number.format(str, format);
	}
	
	return rtnVal;
};

/****************************************************************************
 * 날짜 format 형식 지정
 * 예) rderp.common.dateFormat('20110101','yyyyMMdd','yyyy-MM-dd')
 ***************************************************************************/
rderp.common.dateFormat = function(dateStr, fromFormat, toFormat){
	var rtnVal = "";
	
	if(jex.web.null2void(dateStr) != ""){
		rtnVal = gw.date.format(dateStr, fromFormat, toFormat);
	}
	
	return rtnVal;
};

/****************************************************************************
 * 과제권한 읽어오기
 ***************************************************************************/
rderp.common.selPrjAuth = function(){
	var rtnVal = "1";
	var input  = {};
	input["MENU_SEQ"   ] = rderp_menu_seq;
	jex.web.Ajax("rcomm_etc_0001_01", input, function(data) {
		rtnVal = data.PRJ_AUTH;
	},"jct");
	return rtnVal;
};

/****************************************************************************
 * 부서권한 읽어오기
 ***************************************************************************/
rderp.common.selDeptAuth = function(){
	var rtnVal = "1";
	var input  = {};
	input["MENU_SEQ"   ] = rderp_menu_seq;
	jex.web.Ajax("rcomm_etc_0001_01", input, function(data) {
		rtnVal = data.DEPT_AUTH;
	},"jct");
	return rtnVal;
};


/****************************************************************************
 * 소수점 자르기
 ***************************************************************************/
function truncate(n) {
	  return Math[n > 0 ? "floor" : "ceil"](n);
}

/****************************************************************************
 * 소수점 절삭(자리수별 처리)
 * 예) rderp.common.trunc("2.567",2) => 2.5
 ***************************************************************************/
rderp.common.trunc = function(value, npos) { 
	var roundValue = rderp.common.makeRoundValue(npos); 
	var multiValue = Math.pow(10, npos - 1);
	
	var temp = Number(Format_NoComma(jex.web.null2void(value+"","0"))) - roundValue; 
	temp = temp * multiValue; 
	temp = Math.round(temp); 
	temp = temp / multiValue; 

	return temp; 
}; 

rderp.common.makeRoundValue = function(npos) { 
	if (npos <= 0) 
	return 0; 

	var result = 0.5; 

	for (var i = 1; i < npos; i++) { 
		result = result / 10; 
	} 

	return result; 
};

/****************************************************************************
 * 소득구분이 근로소득(20)일때 해당 과제에 근로소득신고사업장이 존재하는지 여부 체크
 ***************************************************************************/
rderp.common.chkEricmDclSiteYn = function(prjno){
	var rtnVal = true;
	
	jex.web.Ajax("rcomm_0102_01_r001", {"PRJ_NO":prjno}, function(data) {
		
		if(jex.web.null2void(data.ERICM_DCL_SITE_NO) == ""){
			alert("과제의 근로소득신고사업장 정보가 등록되지 않았습니다.\n과제담당자에게 문의해 주세요.");
			rtnVal = false;
		}
	},"jct");

	return rtnVal;
};

//==================================================================
// 공통팝업  rderp_common_pop.js 참조
//==================================================================
