var grid;
var colDefs         = [];
var gridOptions     = rderp.grid.getDefaultOptions();

var rtask_0008_t01_01                   = {};
rtask_0008_t01_01.subContents           = {};
rtask_0008_t01_01.subContents.openYn    = {};

var sumupPrjNo = "";
var prjNo = "";
var anl   = "";

$(function() {
    //parent.resizeFrameHeight(900);
	
	/*** 과제 담당자 or 관리자 일경우에만 보여준다. ***/
	if($("#_GWM01_YN").val() == "Y" || $("#_B0007_YN").val() == "Y"){
		$("#btnSumupPrjModify").attr("style","display:visible");
		$("#btnPrjInfoModify").attr("style","display:visible");
		$("#btnPrjEvmSetUp").attr("style","display:visible");
	}

    // location 지정
    parent.$("#content").find(".content_box").find("#location").html("과제관리 &gt 과제정보관리 &gt 과제정보 &gt 기본정보");

    fn_makeGrid();

    /**************************************************************************
     * 과제정보 로딩  이벤트부
     **************************************************************************/
    if(parent.gPrjInfo != null) {
    	sumupPrjNo = parent.$("#SUMUP_PRJ_NO").val();
    	prjNo   = parent.$("#PRJ_NO").val();
        anl     = parent.$("#P_ANL").val();
		
        fnSelect();
    }

    /**************************************************************************
     * 과제정보복사 버튼 클릭 이벤트부
     **************************************************************************/
    $("#btnPrjInfoModify").click(function() {
        if(prjNo == "") {
            alert("조회된 과제가 없습니다. 먼저 과제를 선택해 주세요.");
            return;
        }
        parent.parent.openTab("menu_id_82", "연차과제관리", "/rtask_0010_02.act?DETAIL_MODE=2&selPrjNo="+prjNo);
    });

    /**************************************************************************
     * 총괄과제변경 버튼 클릭 이벤트부
     **************************************************************************/
    $("#btnSumupPrjModify").click(function() {
        if(prjNo == "") {
            alert("조회된 과제가 없습니다. 먼저 과제를 선택해 주세요.");
            return;
        }
        parent.parent.openTab("menu_id_81", " 총괄과제관리", "/rtask_0009_02.act?DETAIL_MODE=2&selSumupPrjNo="+sumupPrjNo);
    });
   
    /**************************************************************************
     * 과제환경설정 버튼 클릭 이벤트부
     **************************************************************************/
    $("#btnPrjEvmSetUp").click(function() {
        if(prjNo == "") {
            alert("조회된 과제가 없습니다. 먼저 과제를 선택해 주세요.");
            return;
        }
        //if ($("").find("#menu_id_83").length > 0) {
        //    var yn = confirm("이미 존재하는과제환경설정이 실행되어있습니다. 해당 과제환경설정 으로 이동 하시겠습니까?");
        //    if (yn){
                parent.parent.openTab("menu_id_83", "과제환경설정", "/rtask_0011_01.act?selPrjNo="+prjNo);
        //    }
        //}
    });
	$("#BtnCardReq").click(function() {
		parent.parent.openTab("menu_id_100", "법인카드발급신청", "/rexpe_0011_01.act");
	});
	/*************************************************
     * 기본정보 디스플레이
     **************************************************/
	/*
    $("#a_info").toggle(function(e) {
        e.preventDefault();
        $("#div_info1_cont").show();
        $(this).find("img").attr("src", "img/comm/button/btn_upmore.gif");
        rtask_0008_t01_01.subContents.openYn[$(this).attr("id")] = true;
    }, function(e) {
        e.preventDefault();
        $("#div_info1_cont").hide();
        $(this).find("img").attr("src", "img/comm/button/btn_dnmore.gif");
        rtask_0008_t01_01.subContents.openYn[$(this).attr("id")] = false;
    });
    */
	/*************************************************
     * 과제카드발급내역 디스플레이
     **************************************************/
	/*
    $("#b_info").toggle(function(e) {
        e.preventDefault();
        $("#div_info2_cont").show();
        $(this).find("img").attr("src", "img/comm/button/btn_upmore.gif");
        rtask_0008_t01_01.subContents.openYn[$(this).attr("id")] = true;
        
    	parent.resizeFrameHeight($(document.body).find("div:first").height());
    }, function(e) {
        e.preventDefault();
        $("#div_info2_cont").hide();
        $(this).find("img").attr("src", "img/comm/button/btn_dnmore.gif");
        rtask_0008_t01_01.subContents.openYn[$(this).attr("id")] = false;

    	parent.resizeFrameHeight($(document.body).find("div:first").height());
    });
    */
});
//증빙구분 renderer
function renAcctDivCd(value) {
    var option  = $("#selAcctDivCd option");
    var result  = "10";

    for(var i=0 ; i < option.length ; i++) {
        if(option[i].value == voidChk(value,"10")) {
            result = option[i].text;
            break;
        }
    }

    return result;
}
//주민번호 renderer
function renSsn(value) {
    return value.substring(0,6) + '-*******' ;
}
function fn_makeGrid() {
    /*************************************************
     * 첫번째그리드 설정-->
     **************************************************/
    gridOptions.ViewportManager = {rowsPerPage: 6, rowH: 20,   autoColWEnabled: true};
    gridOptions.DataManager = {};
    gridOptions.SelectionManager = {};

    //사용자정의 에디터
    //증빙구분 selectbox
    var selAcctDivCd =JGM.create("Editor", {
        edit : function() {
            var selectboxHtml = "<select style='width:120px;'>";
                selectboxHtml += $("#selAcctDivCd").html();
                selectboxHtml += "</select>";
            return selectboxHtml;
        }
    });

    //그리드 컬럼 정의 (과제관리계좌)
    colDefs = [
        {key:"ROW_SEQ"     			,name:"No"		,width:50		,colClass:"t_center",  renderer:   function(value, rowIdx, colIdx, datarow, colDef, viewMgr) {return ++rowIdx;}},
        {key:"RES_NM"               ,name:"재원"		,width:100      ,colClass:"t_center"},
        {key:"MNG_ACCT_DIV_CD"      ,name:"계좌구분"	,width:120   	,editor:selAcctDivCd, renderer:renAcctDivCd, colClass:"t_left"},
        {key:"MNG_ACCT_BNK_NM"      ,name:"계좌내역"	,width:200   	,colClass:"t_left"},
        {key:"ACCT_NICK_NM"     	,name:"계좌 별칭"	,width:200   	,colClass:"t_center"},
        {key:"MNG_RMK"              ,name:"비고"		,width:400      , colClass:"t_left"}
    ];

    //그리드 생성
    grid  = JGM.grid({ container:$("#myGrid") , options:gridOptions, colDefs:colDefs });

    //더블클릭이벤트정의
    grid.event.register({e:"dblclickCanvas",f:function(e,cell) {

    },t : this});

    grid.event.register({e:"onBeforeUpdateDatarow", f:function(dataRow, change) {
        if(typeof(console) == "undefined") {

        } else {
            console.log(dataRow,change);
            change.title = 'asdfasdf';
        }
    },t : this});
}
/***************************************
* 총괄과제상세내역  select
***************************************/
function fnSelect() {
    var input = {};

    input['PRJ_NO'] = prjNo;
    input['USEFAC_SEQ_NO'] = gUsefacSeqNo; //이용수차장님은 항상 gUsefacSeqNo 로 받아온다.

    //과제정보
    jex.web.Ajax("rtask_0008_t01_01_r001", input, function(dat) {
        $("#PRJ_SUP_ORG_NM"    ).html(voidChk(dat.PRJ_SUP_ORG_NM,""));
		$("#DTL_SUP_ORG_NM"    ).html(voidChk(dat.DTL_SUP_ORG_NM,""));
		if(voidChk(anl, "") != "") {
			$("#SPAN_ANL").html(anl+"차 ");
		}
        $("#PRJ_SUP_ENTP_NM"   ).html(voidChk(dat.PRJ_SUP_ENTP_NM,""));
        $("#PRJ_PROG_STS_NM"   ).html(voidChk(dat.PRJ_PROG_STS_NM,""));
        $("#SUMUP_RCH_DT"      ).html(voidChk(dat.SUMUP_RCH_DT,""));
        if(voidChk(dat.PRJ_END_DT,"") == "--") {
            $("#PRJ_END_DT"        ).html("");
        } else {
            $("#PRJ_END_DT"        ).html(voidChk(dat.PRJ_END_DT,""));
        }
        $("#PRJ_RCH_DT"        ).html(voidChk(dat.PRJ_RCH_ST_DT,"")+" ~ "+voidChk(dat.PRJ_RCH_END_DT,""));
        $("#PRJ_DEPT_NM"       ).html(voidChk(dat.PRJ_DEPT_NM,""));
        $("#MGT_ORG_NM"        ).html(voidChk(dat.MGT_ORG_NM,""));
        $("#PRJ_CHRG_GRP_NM"   ).html(voidChk(dat.PRJ_CHRG_GRP_NM,""));
        $("#PRJ_CARD_DIV_NM"   ).html(voidChk(dat.PRJ_CARD_DIV_NM,""));
        $("#PRJ_CARD_DIV_CD"   ).html(voidChk(dat.PRJ_CARD_DIV_CD,""));
        $("#PRJ_SUP_ORG_PRJ_NO").html(voidChk(dat.PRJ_SUP_ORG_PRJ_NO,""));
        $("#PRJ_DPMNS_BIZ_NM"  ).html(voidChk(dat.PRJ_DPMNS_BIZ_NM,""));
        $("#SUMUP_PRJ_KR_NM"   ).html(voidChk(dat.SUMUP_PRJ_KR_NM,""));
        $("#UP_SUMUP_PRJ_NM"   ).html(voidChk(dat.UP_SUMUP_PRJ_NM,""));
    },"jct",true);

    fnSelectDetail(input);
}

/***************************************
* 총괄과제상세내역  select
***************************************/
function fnSelectDetail(input) {
    //과제관리계좌

    //과제별 관리
    jex.web.Ajax("rtask_0010_02_r003", input, function(dat) {
        grid.dataMgr.set(dat.REC);
        if(dat.REC.length < 1) {
            //jex.web.info("RDWM0001");
        }
    },"jct",true);

    /*
    jex.web.Ajax("rtask_0010_02_r003", input, function(dat) {
        var data = null;

        for( idx=0 ; idx<dat.REC.length ; idx++) {
            var d = {};
            d["SEQ_NO"]        = dat.REC[idx].SEQ_NO;//순번
            d["ACCT_DIV_CD"]   = dat.REC[idx].ACCT_DIV_CD;
            d["TOT_NM"]        = dat.REC[idx].MNG_BNK_NM+" "+dat.REC[idx].MNG_ACCT_NO+" "+dat.REC[idx].MNG_ACCT_OWNR_NM;
            d["RMK"]            = dat.REC[idx].RMK;
            data.push(d);
        }
        alert(dat.REC);
        grid.dataMgr.set(dat.REC);
    },"jct",true);
    */

    return;
}

/***************************************
* div 펼침/닫힘 이벤트 
***************************************/
fn_divDisplay = function(obj){
	var addhight = 20;
	if($("#"+obj).css("display")=="none"){
		uf_divShow(obj);
	}
	else{
		uf_divHidden(obj);
	}

	parent.resizeFrameHeight($(document.body).find("div:first").height()+addhight);
};


$(document).ready(function(){
	parent.resizeFrameHeight($(document.body).find("div:first").height()+20);
});

/*
$(document).ready(function(){
    //화면  Tab 스크롤 resize
	var h = $(document.body).find("div:first").height();
	parent.resizeFrameHeight(h);
});
*/