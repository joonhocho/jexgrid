//==================================================================
// 공통팝업 호출
//==================================================================
var rtnUniqueTimePop="";
if (rtnUniqueTimePop == "") rtnUniqueTimePop=rtnUniqueTime();

/*******************************************************************
 * 지원기관조회 팝업 호출
 * parameters
 *  - POP_KEY	 : 팝업 key(선택)
 *  - NON_BTN_YN : 선택없음여부(선택) 
 *  - RTN_FUNC	 : 리턴함수(선택)
 * 참고 : rtask_0001_01_view.jsp, rtask_0001_01.js
 ******************************************************************/
rderp.common.popSupOrgInfo = function(params){
	if(params == null || params == undefined) params = {};

	gw.common.jexNewWin("/rcomm_0001_01.act", rtnUniqueTimePop, 700,550, params);
};

/*******************************************************************
 * 지원사업조회 팝업 호출
 * parameters
 *  - POP_KEY	 : 팝업 key(선택)
 *  - NON_BTN_YN : 선택없음여부(선택) 
 *  - RTN_FUNC	 : 리턴함수(선택)
 * 참고 : rtask_0002_01_view.jsp, rtask_0002_01.js
 ******************************************************************/
rderp.common.popSupEntpInfo = function(params){
	if(params == null || params == undefined) params = {};
	gw.common.jexNewWin("/rcomm_0002_01.act", rtnUniqueTimePop, 700,550, params);
};

/*******************************************************************
 * 비목조회 팝업 호출
 * parameters
 *  - POP_KEY	 : 팝업 key(선택)
 *  - NON_BTN_YN : 선택없음여부(선택) 
 *  - RTN_FUNC	 : 리턴함수(선택)
 * 참고 : rtask_0012_02_view.jsp, rtask_0012_02.js
 ******************************************************************/
rderp.common.popExpCdInfo1 = function(params){
	if(params == null || params == undefined) params = {};
	gw.common.jexNewWin("/rcomm_0003_01.act", rtnUniqueTimePop, 700,650, params);
};

/*******************************************************************
 * 비목조회 팝업 호출
 * parameters
 *  - POP_KEY	 : 팝업 key(선택)
 *  - NON_BTN_YN : 선택없음여부(선택) 
 *  - RTN_FUNC	 : 리턴함수(선택)
 *  - EXP_CATE_CD: 과제분류(필수 *)
 *  - IDX        : 다건일 경우만
 * 참고 : rtask_0003_01_view.jsp, rtask_0003_01.js
 ******************************************************************/
rderp.common.popExpCdInfo2 = function(params){
	if(params == null || params == undefined) params = {};
	gw.common.jexNewWin("/rcomm_0003_02.act", rtnUniqueTimePop, 700,550, params);
};

/*******************************************************************
 * 기본계정과목 팝업 호출
 * parameters
 *  - POP_KEY	 : 팝업 key(선택)
 *  - NON_BTN_YN : 선택없음여부(선택) 
 *  - RTN_FUNC	 : 리턴함수(선택)
 * 참고 : rtask_0003_01_view.jsp, rtask_0003_01.js
 ******************************************************************/
rderp.common.popSlAccCdInfo = function(params){
	if(params == null || params == undefined) params = {};
	gw.common.jexNewWin("/rcomm_0005_01.act", rtnUniqueTimePop, 700,550, params);
};

/*******************************************************************
 * 과제공고내역 팝업 호출
 * parameters
 *  - POP_KEY	 : 팝업 key(선택)
 *  - NON_BTN_YN : 선택없음여부(선택) 
 *  - RTN_FUNC	 : 리턴함수(선택)
 * 참고 : rtask_0007_02_view.jsp, rtask_0007_02.js
 ******************************************************************/
rderp.common.popPrjNtfyInfo = function(params){
	if(params == null || params == undefined) params = {};
	gw.common.jexNewWin("/rcomm_0007_01.act", rtnUniqueTimePop, 700,550, params);
};

/*******************************************************************
 * 인적정보조회 팝업 호출
 * parameters
 *  - POP_KEY     : 팝업 key(선택)
 *  - RTN_FUNC    : 리턴함수(선택)
 *  - SEARCH_TYPE : 구분(선택) - A:일반, B:참여인력
 * 참고 : rexpe_0001_01_view.jsp, rexpe_0001_01.js
 ******************************************************************/
rderp.common.popPersonInfo = function(params){
	//alert(JSON.stringify(params))
	gw.common.jexNewWin("/rcomm_0008_01.act", rtnUniqueTimePop, 700, 570, params);
};

/*******************************************************************
 * 과제조회 팝업 호출
 * parameters
 *  - POP_KEY	: 팝업 key(선택)
 *  - GUBUN		: 폴링과제적용여부(선택)
 *  - SEARCH_NM	: 검색어(선택)
 *  - RTN_FUNC	: 리턴함수(선택)
 * 참고 : rexpe_0001_01_view.jsp, rexpe_0001_01.js
 ******************************************************************/
rderp.common.popPrjInfo = function(params){
	if(params == null || params == undefined) params = {};
	params["MENU_SEQ" ] = rderp_menu_seq;
	gw.common.jexNewWin("/rcomm_0009_03.act", rtnUniqueTimePop, 700, 550, params);
};

/*******************************************************************
 * 부서정보 팝업 호출
 * parameters
 *  - POP_KEY	 : 팝업 key(선택)
 *  - NON_BTN_YN : 선택없음여부(선택) 
 *  - RTN_FUNC	 : 리턴함수(선택)
 * 참고 : rinsu_0003_01_view.jsp, rinsu_0003_01.js
 ******************************************************************/
rderp.common.popDeptInfo = function(params){
	if(params == null || params == undefined) params = {};
	gw.common.jexNewWin("/rcomm_0010_01.act", rtnUniqueTimePop, 700,550, params);
};

/*******************************************************************
 * 과제담당자 팝업 호출
 * parameters
 *  - POP_KEY	 : 팝업 key(선택)
 *  - NON_BTN_YN : 선택없음여부(선택) 
 *  - RTN_FUNC	 : 리턴함수(선택)
 * 참고 : rtask_0006_01_view.jsp, rtask_0006_01.js
 ******************************************************************/
rderp.common.popUserGrpInfo = function(params){
	if(params == null || params == undefined) params = {};
	gw.common.jexNewWin("/rcomm_0011_01.act", rtnUniqueTimePop, 700,630, params);
};

/*******************************************************************
 * 과제신청내역조회 팝업 호출
 * parameters
 *  - POP_KEY	 : 팝업 key(선택)
 *  - NON_BTN_YN : 선택없음여부(선택) 
 *  - RTN_FUNC	 : 리턴함수(선택)
 * 참고 : rtask_0009_02_view.jsp, rtask_0009_02.js
 ******************************************************************/
rderp.common.popPrjApplInfo = function(params){
	if(params == null || params == undefined) params = {};
	gw.common.jexNewWin("/rcomm_0012_01.act", rtnUniqueTimePop, 700,550, params);
};

/*******************************************************************
 * 총괄과제조회 팝업 호출
 * parameters
 *  - POP_KEY	 : 팝업 key(선택)
 *  - NON_BTN_YN : 선택없음여부(선택) 
 *  - RTN_FUNC	 : 리턴함수(선택)
 * 참고 : rtask_0010_02_view.jsp, rtask_0010_02.js
 ******************************************************************/
rderp.common.popSumupPrjInfo = function(params){
	if(params == null || params == undefined) params = {};
	gw.common.jexNewWin("/rcomm_0014_01.act", rtnUniqueTimePop, 700,550, params);
};

/*******************************************************************
 * 지원기관과제번호조회 팝업 호출
 * parameters
 *  - POP_KEY	 : 팝업 key(선택)
 *  - NON_BTN_YN : 선택없음여부(선택) 
 *  - RTN_FUNC	 : 리턴함수(선택)
 * 참고 : rtask_0010_02_view.jsp, rtask_0010_02.js
 ******************************************************************/
rderp.common.popRndPrjInfo = function(params){
	if(params == null || params == undefined) params = {};
	gw.common.jexNewWin("/rcomm_0016_01.act", rtnUniqueTimePop, 680,560, params);
};

/*******************************************************************
 * 거래처조회 팝업 호출
 * parameters
 *  - POP_KEY	 : 팝업 key(선택)
 *  - NON_BTN_YN : 선택없음여부(선택) 
 *  - RTN_FUNC	 : 리턴함수(선택)
 * 참고 : rtask_0010_02_view.jsp, rtask_0010_02.js
 ******************************************************************/
rderp.common.popBaCustInfo = function(params){
	if(params == null || params == undefined) params = {};
	gw.common.jexNewWin("/rcomm_0017_01.act", rtnUniqueTimePop, 700,550, params);
};

/*******************************************************************
 * 계좌조회 팝업 호출
 * parameters
 *  - POP_KEY	 : 팝업 key(선택)
 *  - NON_BTN_YN : 선택없음여부(선택) 
 *  - RTN_FUNC	 : 리턴함수(선택)
 * 참고 : rtask_0010_02_view.jsp, rtask_0010_02.js
 ******************************************************************/
rderp.common.popFnAcctInfo = function(params){
	if(params == null || params == undefined) params = {};
	gw.common.jexNewWin("/rcomm_0018_01.act", rtnUniqueTimePop, 700,550, params);
};

/*******************************************************************
 * 사업장 팝업 호출
 * parameters
 *  - POP_KEY	 : 팝업 key(선택)
 *  - NON_BTN_YN : 선택없음여부(선택) 
 *  - BIZ_AUTH   : 2:담당사업장 9:전체 
 *  - RTN_FUNC	 : 리턴함수(선택)
 * 참고 : rinsu_0003_01_view.jsp, rinsu_0003_01.js
 ******************************************************************/
rderp.common.popBaSiteInfo = function(params){
	if(params == null || params == undefined) params = {};
	gw.common.jexNewWin("/rcomm_0019_01.act", rtnUniqueTimePop, 700,550, params);
};

/*******************************************************************
 * 회계단위조회 팝업 호출
 * parameters
 *  - POP_KEY	 : 팝업 key(선택)
 *  - NON_BTN_YN : 선택없음여부(선택) 
 *  - RTN_FUNC	 : 리턴함수(선택)
 * 참고 : rtask_0011_01_view.jsp, rtask_0011_01.js
 ******************************************************************/
rderp.common.popBaAcctInfo = function(params){
	if(params == null || params == undefined) params = {};
	gw.common.jexNewWin("/rcomm_0020_01.act", rtnUniqueTimePop, 700,550, params);
};

/*******************************************************************
 * R&D카드비목코드조회 팝업 호출
 * parameters
 *  - POP_KEY	 : 팝업 key(선택)
 *  - NON_BTN_YN : 선택없음여부(선택) 
 *  - RTN_FUNC	 : 리턴함수(선택)
 * 참고 : rtask_0012_02_view.jsp, rtask_0012_02.js
 ******************************************************************/
rderp.common.popRndCardInfo = function(params){
	if(params == null || params == undefined) params = {};
	gw.common.jexNewWin("/rcomm_0021_01.act", rtnUniqueTimePop, 700,550, params);
};

/*******************************************************************
 * 건물/호실조회 팝업 호출
 * parameters
 *  - POP_KEY	 : 팝업 key(선택)
 *  - NON_BTN_YN : 선택없음여부(선택) 
 *  - RTN_FUNC	 : 리턴함수(선택)
 * 참고 : rcomm_0025_01_view.jsp, rcomm_0025_01.js
 ******************************************************************/
rderp.common.popBdRoomInfo = function(params){
	if(params == null || params == undefined) params = {};
	gw.common.jexNewWin("/rcomm_0023_01.act", rtnUniqueTimePop, 700,560, params);
};

/*******************************************************************
 * 지급처계좌조회 팝업 호출
 * parameters
 *  - POP_KEY	 : 팝업 key(선택)
 *  - SEARCH_GB1 : 거래처(0),부서(2) 구분(선택)
 *  - RTN_FUNC	 : 리턴함수(선택)
 * 참고 : rexpe_0001_01_view.jsp, rexpe_0001_01.js
 ******************************************************************/
rderp.common.popProvAcctInfo = function(params){
	if(params == null || params == undefined) params = {};
	gw.common.jexNewWin("/rcomm_0024_01.act", rtnUniqueTimePop, 700, 580, params);
};

/*******************************************************************
 * 출장명령부 팝업 호출
 * parameters
 *  - POP_KEY	 : 팝업 key(선택)
 *  - NON_BTN_YN : 선택없음여부(선택) 
 *  - RTN_FUNC	 : 리턴함수(선택)
 * 참고 : rexpe_0001_01_view.jsp, rexpe_0001_01.js
 ******************************************************************/
rderp.common.popTripOrdInfo = function(params){
	if(params == null || params == undefined) params = {};
	gw.common.jexNewWin("/rcomm_0027_01.act", rtnUniqueTimePop, 680,690, params);
};

/*******************************************************************
 * 회의록 팝업 호출
 * parameters
 *  - POP_KEY	 : 팝업 key(선택)
 *  - NON_BTN_YN : 선택없음여부(선택) 
 *  - RTN_FUNC	 : 리턴함수(선택)
 * 참고 : rexpe_0001_01_view.jsp, rexpe_0001_01.js
 ******************************************************************/
rderp.common.popCfrcPursInfo = function(params){
	if(params == null || params == undefined) params = {};
	gw.common.jexNewWin("/rcomm_0028_01.act", rtnUniqueTimePop, 680,690, params);
};

/*******************************************************************
 * 참여인력조회 팝업 호출
 * parameters
 *  - PRJ_NO     : 과제번호(필수*)
 *  - PRJ_NM     : 과제명(필수*)
 *  - POP_KEY    : 팝업 key(선택)
 *  - CHK_GB     : 단일(1),다중(2)여부(선택)
 *  - REQ_SEQ_NO : 결의일련번호(선택)
 *  - RTN_FUNC   : 리턴함수(선택)
 * 참고 : rexpe_0001_01_view.jsp, rexpe_0001_01.js
 ******************************************************************/
rderp.common.popPartHmInfo = function(params){
	gw.common.jexNewWin("/rcomm_0029_01.act", rtnUniqueTimePop, 700, 550, params);
};

/*******************************************************************
 * 국적코드 팝업 호출
 * parameters
 *  - POP_KEY	 : 팝업 key(선택)
 *  - NON_BTN_YN : 선택없음여부(선택) 
 *  - RTN_FUNC	 : 리턴함수(선택)
 * 참고 : rtask_0018_02_view.jsp, rtask_0018_02.js
 ******************************************************************/
rderp.common.popNationInfo = function(params){
	if(params == null || params == undefined) params = {};
	gw.common.jexNewWin("/rcomm_0038_01.act", rtnUniqueTimePop, 500,440, params);
};

/*******************************************************************
 * 기본예산항목 팝업 호출
 * parameters
 *  - POP_KEY	 : 팝업 key(선택)
 *  - NON_BTN_YN : 선택없음여부(선택) 
 *  - RTN_FUNC	 : 리턴함수(선택)
 * 참고 : rtask_0003_01_view.jsp, rtask_0003_01.js
 ******************************************************************/
rderp.common.popBudgetInfo = function(params){
	if(params == null || params == undefined) params = {};
	gw.common.jexNewWin("/rcomm_0039_01.act", rtnUniqueTimePop, 700,550, params);
};

/*******************************************************************
 * 신청(결재)팝업 호출
 * parameters
 *  - BASE_APPRLINE_STGUP : 기본결재선설정(필수*)
 *  - APPR_DEPT_CD		  : 결재부서코드(필수*)
 *  - PRJ_NO			  : 과제번호(필수*)
 *  - POP_KEY			  : 팝업 key(선택)
 *  - RTN_FUNC			  : 리턴함수(선택)
 * 참고 : rexpe_0001_01_view.jsp, rexpe_0001_01.js
 ******************************************************************/
rderp.common.popApprInfo = function(params){
	gw.common.jexNewWin("/rcomm_0043_01.act", rtnUniqueTimePop, 400, 350, params);
};

/*******************************************************************
 * 물품분류조회 팝업 호출
 * parameters
 *  - POP_KEY	 : 팝업 key(선택)
 *  - NON_BTN_YN : 선택없음여부(선택)
 *  - RTN_FUNC	 : 리턴함수(선택)
 * 참고 : rcomm_0026_01_view.jsp, rcomm_0026_01.js
 ******************************************************************/
rderp.common.popItemCateInfo = function(params){
	if(params == null || params == undefined) params = {};
	gw.common.jexNewWin("/rcomm_0047_01.act", rtnUniqueTimePop, 750,630, params);
};

/*******************************************************************
 * 공통코드 팝업 호출
 * parameters
 *  - DIV_GRP_CD : 그룹코드(필수 *)
 *  - POP_KEY    : 팝업 key(선택)
 *  - NON_BTN_YN : 선택없음여부(선택) 
 *  - RTN_FUNC   : 리턴함수(선택)
 * 참고 : rtask_0051_01_view.jsp, rtask_0051_01.js
 ******************************************************************/
rderp.common.popCommCodeInfo = function(params) {
    if(params == null || params == undefined) params = {};
    gw.common.jexNewWin("/rcomm_0051_01.act", rtnUniqueTimePop, 700,550, params);
};

/*******************************************************************
 * 비목변경기준관리 팝업 호출
 * parameters
 *  - PRJ_NO     : 과제번호(필수 *)
 *  - POP_KEY    : 팝업 key(선택)
 *  - NON_BTN_YN : 선택없음여부(선택) 
 *  - RTN_FUNC   : 리턴함수(선택)
 * 참고 : rtask_0052_01_view.jsp, rtask_0052_01.js
 ******************************************************************/
rderp.common.popExpensesUpdMgr = function(params) {
	if(params == null || params == undefined) params = {};
    gw.common.jexNewWin("/rcomm_0052_01.act", rtnUniqueTimePop, 830,380, params);
};

/*******************************************************************
 * 참여율/지급한도체크 팝업 호출
 * parameters
 *  - USEFAC_SEQ_NO : 이용기관순번(선택)
 *  - PRJ_NO        : 과제번호(필수 *)
 *  - REQ_CNT       : 신청순번(필수 *) 
 * 참고 : rtask_0013_01_view.jsp, rtask_0013_01.js
 ******************************************************************/
rderp.common.popPartPayLmtChk = function(params) {
	if(params == null || params == undefined) params = {};
	gw.common.jexNewWin("/rtask_0013_07.act", rtnUniqueTimePop, 800,380, params);
};