//과제정보
var gPrjInfo = null;

/***************************************
* 과제정보 검색결과 셋팅
***************************************/
fn_setPrjResult = function(params){
	var input = {};
	input["USEFAC_SEQ_NO"] = params.USEFAC_SEQ_NO;
	input["PRJ_NO"]        = params.PRJ_NO;
	
	jex.web.Ajax("rcomm_0102_01_r001", input, function(data) {
		uf_rcomm_0009_01Params(1, data);
	},"jct");

};


/***************************************
* 과제정보 검색 팝업
***************************************/
function fnPop_rcomm_0009_01(){
	rderp.common.popPrjInfo({});
};

/***************************************
* 과제정보 검색 팝업(메인바닥)
***************************************/
function uf_rcomm_0009_01Params(popKey, params){
	$('#PRJ_RSPR_EMP_NM').html(params.PRJ_RSPR_EMP_NM +'(' + jex.web.null2void(params.PRJ_RSPR_EMP_DEPT_NM) + '/' + jex.web.null2void(params.PRJ_RSPR_EMP_POS_NM) + ')');//과제책임자
	$('#PRJ_NM').html('(' + params.PRJ_NO + ')' + params.PRJ_NM );//과제명
	$('#ANL').html(params.ANL);//년차	
	$('#SUMUP_PRJ_NO').val(params.SUMUP_PRJ_NO);//총괄과제번호	
	$('#PRJ_NO').val(params.PRJ_NO);//과제번호	
	$('#P_PRJ_NM').val(params.PRJ_NM);//과제명
	$('#P_ANL').val(params.ANL);//년차
	$('#P_PRJ_RSPR_EMP_NM').val(params.PRJ_RSPR_EMP_NM);//과제책임자	
	$('input#USEFAC_SEQ_NO').val(params.USEFAC_SEQ_NO);
	$("input#PRJ_RSPR_EMP_NM").val(params.PRJ_RSPR_EMP_NM);
	$("input#PRJ_RSPR_EMP_ID").val(params.PRJ_RSPR_EMP_ID);
	$("input#EXP_BASE_AC_USE_YN").val(params.EXP_BASE_AC_USE_YN);
	$("input#PRJ_CHRG_GRP_CD").val(params.PRJ_CHRG_GRP_CD);

	$("input#EXP_CATE_APLY_CD").val(params.EXP_CATE_APLY_CD);
	$("input#BGT_MOD_CNTRL_YN").val(params.BGT_MOD_CNTRL_YN);
	$("input#ISD_PSNL_EXPN_NO_PRJ_YN").val(params.ISD_PSNL_EXPN_NO_PRJ_YN); //내부인건비 미포함과제여부
	
	$("input#DPMNS_GOV_CD").val(params.DPMNS_GOV_CD);//부처별 부서코드
	$("input#PRJ_CARD_DIV_CD").val(params.PRJ_CARD_DIV_CD);//과제카드 구분코드
	$("input#DPMNS_BIZ_CD").val(params.DPMNS_BIZ_CD);//부처별 사업코드	
	$("input#NEW_PRJ_NM").val(params.PRJ_NM);//과제명
	$("input#BGT_STD_CD").val(params.BGT_STD_CD);	
	//과제정보를 담는다.
	gPrjInfo = params;

	//과제선택시 해당탭을 다시 조회
	fnGoTabPage(gTabId);
} 	

$(function() {

	if(gPrjNo != ""){
		var params = {};
		params["USEFAC_SEQ_NO"  ] = gUsefacSeqNo;
		params["PRJ_NO"  ] = gPrjNo;
		fn_setPrjResult(params);

		$("ul.tab_1").find("li").removeClass("selected");
		$("ul.tab_1").find("li#"+gTabId).addClass("selected");
		fnGoTabPage(gTabId);
	}
	else {
		gTabId="01";
		fnGoTabPage("01");
		$("ul.tab_1").find("li").eq(0).addClass("selected");
	}	
	
	$("ul.tab_1").find("a").click(function() {
		$("ul.tab_1").find("li").removeClass("selected");
		$(this).parent().addClass("selected");
		gTabId = $(this).parent()[0].id;
		fnGoTabPage(gTabId);
	});
		
	// 조회버튼 클릭 이벤트부 
	$("#btnSearch").click(function(){
		//과제책임자/과제명 검색 팝업
		fnPop_rcomm_0009_01();
	});

});

/***************************************
* Tab 으로 이동 
***************************************/ 
function fnGoTabPage(tabPage){
	gtabId = tabPage;
	var frm    = document.frm;
	
	frm.action = "rtask_0008_t" + tabPage + "_01.act";
	frm.target = "tabFrame";
	frm.submit();
	
	//JexCommon.resizeIframe(); 
}

function resizeFrameHeight(height) {
//	document.getElementById('tabFrame').style.height = height;

	$("#tabFrame").css("height",height);
	JexCommon.resizeIframe(); 
};

function fnGoTabPageFind(){
	
	if(jex.web.null2void(gTabId) == "04"){
		var ch04 = document.getElementById('tabFrame').contentWindow; 
		ch04.fnSelect();
	}
	else{
		fnGoTabPage(gTabId);
	}
}

$(document).ready(function(){
    //화면  Tab 스크롤 resize
    JexCommon.resizeIframe(); 
});


