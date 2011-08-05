
var grid;
var colDefs     = [];
var gridOptions = rderp.grid.getDefaultOptions();

var mode    = "";
var updPop  = "N";
var data    = [];
var params  = {};

$(function() {
    
    /***********************************************************
     * 타이틀 설정
     **********************************************************/
    TitleSearch();
   
    /***********************************************************
     * 그리드 설정
     **********************************************************/
    fnMakeGrid();

    /***********************************************************
     * 검색 버튼
     **********************************************************/
    $("#btn_search").click(function() {
        if($("#SEARCH_NM").val() == "(항목코드 / 항목명)") {
            $("#SEARCH_NM").val("");
        }

        gridSearch();
    });

    /*******************************************************************
     * 선택없음 클릭 이벤트
     ******************************************************************/
    $("#btn_s_blank").click(function() {
        grid.selMgr.selectRow(JGM.create("Cell", {grid:grid, row:0, col:0}));
/**
        params = {};

        if(typeof eval("opener."+$("#RTN_FUNC").val()) != "undefined") {
            eval("opener."+$("#RTN_FUNC").val()+"("+$("#POP_KEY").val()+", params)");
        }
        self.close();
**/        
    });

    /*******************************************************************
     * 엔터키처리
     ******************************************************************/
    $("#SEARCH_NM").keypress(function(e) {
        if(e.keyCode == "13") {
            e.preventDefault();
            $("#btn_search").click();
            return false;
        }
     });

    /***********************************************************
     * 체크박스 선택된 리스트 꺼내기
     **********************************************************/
    $("#btnSave").click(function(e) {
 //       var jsonREC = grid.checkMgr.getCheckList();
        
//        if(jsonREC.length < 1) {
//            alert("선택된 내역이 없습니다.");
//            return;
//        }
//        
//        var input = {
//              "EXT1"          : jsonREC[0].EXT1,
//                "DIV_GRP_CD"  : jsonREC[0].DIV_GRP_CD,
//                "DIV_ITEM_CD" : jsonREC[0].DIV_ITEM_CD
//            };
        var input = {};
        
        var REC = new Array();
        var datRec = grid.dataMgr.all;
        for(var idx=0;idx<datRec.length;idx++){
            REC.push( {
                EXT1          : datRec[idx].EXT1,
                DIV_GRP_CD    : datRec[idx].DIV_GRP_CD,
                DIV_ITEM_CD   : datRec[idx].DIV_ITEM_CD
            });
        }
        input['REC'                 ] = REC;
        
        if(jex.web.confirm("저장 하시겠습니까?")){  
            jex.web.Ajax("rcomm_0053_01_u001"
                , input
                , function(dat) {
                    
                    alert("저장 되었습니다.");
                    //목록 리스트 재조회 
                     gridSearch();
                },"jct",true);
        }
       
    });

    /*선택없음 버튼 표시 유무처리*/
    if($("#NON_BTN_YN").val() == "Y") {
        $("#btn_s_blank").css("display", "");
    }

});

/***************************************
* 타이틀 조회
***************************************/
function TitleSearch() {
    var input = {
        "DIV_GRP_CD" : $("#DIV_GRP_CD").val()
    };

    jex.web.Ajax("rcomm_0051_01_r001", input, function(dat) {
        if(!jex.web.isError(dat)) {
            $("#TITLE_NAME").html(dat.DIV_GRP_NM+"조회");
        } else {
            $("#TITLE_NAME").html("공통코드조회");
        }
    },"jct");
}

function fnMakeGrid() {
     
    gridOptions = rderp.grid.getDefaultOptions();
    gridOptions.ViewportManager = {rowsPerPage: 15,    rowH: 20,    autoColWEnabled: false};
    //gridOptions.Collapser = {key:"BGT_ITEM_CD",Tree: {nodeKey:"BGT_ITEM_CD", parentKey:"BGT_ITEM_CD_UP"}};
    gridOptions.EditManager = {};
    gridOptions.SelectionManager = {};
//    gridOptions.CheckManager = {isRadio:true};
    
    //사용자정의 에디터
    //증빙구분 selectbox
    var ext1 =JGM.create("Editor", {
        edit : function(value) {
            var rtnHTML = "";
            var option  = $("#ext1 option");
            
            rtnHTML += "<option class='generated' value='1'>one</option>";
            rtnHTML += "<option class='generated' value='2'>two</option>";
            rtnHTML += "<option class='generated' value='0'>three</option>";

            for(var i=0 ; i < option.length ; i++){
                if(option[i].value == voidChk(value,"10")){
                    rtnHTML += "<option class='generated' selected value='"+option[i].value+"'>" + option[i].text + "</option>";
                } else {
                    rtnHTML += "<option class='generated' value='"+option[i].value+"'>" + option[i].text + "</option>";
                }
            }

            var selectboxHtml = "<select style='width:180px;'>";
                selectboxHtml += rtnHTML;
                selectboxHtml += "</select>";
            return selectboxHtml;
        }
    }); 
    //증빙구분 renderer
    function renEvdiAttDivCd(value){
        var option  = $("#ext1 option");     
        var result  = "";
        for(var i=0 ; i < option.length ; i++){
            if(option[i].value == voidChk(value,"10")){
                result = option[i].text;
                break;
            }
        }
        return result;      
    }
    //텍스트 에디터
    var textEditor = JGM.create("Editor", {});  

    colDefs = [
        {key:"DIV_ITEM_CD"      ,name:"소속부처코드"  ,width:80   ,colClass:"t_center"    ,sorter:"text"},
        {key:"DIV_ITEM_NM"      ,name:"소속부처명"   ,width:200  ,sorter:"text"},
        {key:"EXT1"             ,name:"현재부처명"   ,width:180  ,editor:ext1, renderer:renEvdiAttDivCd, colClass:"t_left" , resizeble:false},
        {key:"DIV_GRP_CD"       ,hidden:true}
    ];

    grid = JGM.grid({ datalist: jctdata.REC, container:$("#myGrid"),  colDefs:colDefs,  options:gridOptions  });

   
    /***********************************************************
     * 클릭이벤트정의
     **********************************************************/
    /**
    grid.event.register({e:"clickCanvas",f:function(e,cell) {
        params = cell.getDatarow();
        grid.checkMgr.check(params);
    },t : this});
    **/

}

/***************************************
* 리스트 조회
***************************************/
function gridSearch() {

    var input = {
        "ACT_YN"      : 'Y'
        ,"SEARCH_NM"  : $("#SEARCH_NM").val()
        ,"DIV_GRP_CD" : $("#DIV_GRP_CD").val()
    };

    jex.web.Ajax("rcomm_0051_01_r002", input, function(dat) {
        if(!jex.web.isError(dat)){
            grid.dataMgr.set(dat.REC);
        }
    },"jct");
}

/***************************************
* 기본예산항목팝업
***************************************/
function uf_rcomm_0051_01Params() {
    var checkedList = grid.checkMgr.getCheckList();

    if(checkedList.length < 1) {
        alert("선택된 내역이 없습니다.");
        return;
    }

    // 메인화면에 함수 존재시
    if($("#RTN_FUNC").val() != "") {
        if(typeof eval("opener."+$("#RTN_FUNC").val()) != "undefined") {
            eval("opener."+$("#RTN_FUNC").val()+"("+$("#POP_KEY").val()+", params)");
        }
    }

    self.close();
}

