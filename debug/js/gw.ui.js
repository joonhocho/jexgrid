var gw;
if(!gw) gw={};
if(!gw.ui) gw.ui={};


if(typeof(gw.common) == "undefined") {
    document.write('<script type="text/javascript" src="js/gw.common.js"></script>');
}

$(function() {
    // id가 Btn으로 끝나는 객체에 대해 손모양 커서 표시           
    $("*[id$=Btn]").css("cursor", "hand");
    
    /*
    // 메뉴 접고 펼치기
    $("div.folder_box button").click(function() {
        $(this).parents("div").eq(0).toggleClass("menu_fold");
    });
    */
    
    /*
    $(".jexCalendar").each(function() {
        $(this).find("input[type='text']").jexCalendar();
    });
    
    $(".jexCalendar").find("input[type='button']").click(function() {
        $(this).prev().focus();
    });
    */
});


/********************************************************************
 * 구분자그룹코드에 속한 구분자 항목코드를 selectbox에 채우는 함수
 * - param1: 이용기관일련번호
 * - param2: 구분자그룹코드
 * - param3: 구분자항목코드
 *********************************************************************/
gw.ui.setDivItemToSelectBox = function(usefacSeqNo, divGrpCd, divItemCdId, valToKey) {
    /*
    $.ajax({
        type: "GET",
        url: "comm0015_01.jct",
        data: {
            "USEFAC_SEQ_NO": usefacSeqNo,
            "DIV_GRP_CD": divGrpCd
        },
        dataType: "json",
        success: function(data) {
            // 에러가 아닌 경우
            if(!data.COMMON_HEAD.ERROR) {
                // 자동 생성된 객체를 지우고
                $(divItemCdId + " .generated").remove();
                
                // JSON 객체데이터만큼 <option> 태그 생성
                $.each(data.REC, function() {
                    optVal = this.KEY;
                    
                    if(valToKey) {
                        optVal = this.DAT;
                    }
                    
                    html = "<option class='generated' value='" + optVal + "'>" + this.DAT + "</option>";
                    
                    //alert(html);
                    
                    $(divItemCdId).append(html);
                });
            }
        },
        complete:function(data, textStatus) {
        }
    });
    */
    
    var jsonValue = {};
    
    jsonValue["USEFAC_SEQ_NO"] = usefacSeqNo;
    jsonValue["DIV_GRP_CD"] = divGrpCd;
    
    jex.web.Ajax("comm0015_01", jsonValue, function(data) {
        if(!jex.web.isError(data)) {
            // 자동 생성된 객체를 지우고
            $(divItemCdId + " .generated").remove();
            
            // JSON 객체데이터만큼 <option> 태그 생성
            $.each(data.REC, function() {
                optVal = this.KEY;
                
                if(valToKey) {
                    optVal = this.DAT;
                }
                
                html = "<option class='generated' value='" + optVal + "'>" + this.DAT + "</option>";
                
                //alert(html);
                
                $(divItemCdId).append(html);
            });
        }
    },"jct");
};

gw.ui.setLowerDivItemToSelectBox = function(usefacSeqNo, divGrpCd, upperDivItemCd, divItemCdId, valToKey) {
    /*
    $.ajax({
        type: "GET",
        url: "comm0015_01.jct",
        data: {
            "USEFAC_SEQ_NO": usefacSeqNo,
            "DIV_GRP_CD": divGrpCd,
            "UPPER_DIV_ITEM_CD": upperDivItemCd
        },
        dataType: "json",
        success: function(data) {
            // 에러가 아닌 경우
            if(!data.COMMON_HEAD.ERROR) {
                // 자동 생성된 객체를 지우고
                $(divItemCdId + " .generated").remove();
                
                // JSON 객체데이터만큼 <option> 태그 생성
                $.each(data.REC, function() {
                    optVal = this.KEY;
                    
                    if(valToKey) {
                        optVal = this.DAT;
                    }
                    
                    html = "<option class='generated' value='" + optVal + "'>" + this.DAT + "</option>";
                    
                    //alert(html);
                    
                    $(divItemCdId).append(html);
                });
            }
        },
        complete:function(data, textStatus) {
        }
    });
    */
    
    var jsonValue = {};
    jsonValue["USEFAC_SEQ_NO"] = usefacSeqNo;
    jsonValue["DIV_GRP_CD"] = divGrpCd;
    jsonValue["UPPER_DIV_ITEM_CD"] = upperDivItemCd;
    jex.web.Ajax("comm0015_01", jsonValue, function(data) {
        if(!jex.web.isError(data)) {
                        
            // 자동 생성된 객체를 지우고
            $(divItemCdId + " .generated").remove();
            
            // JSON 객체데이터만큼 <option> 태그 생성
            $.each(data.REC, function() {
                optVal = this.KEY;
                
                if(valToKey) {
                    optVal = this.DAT;
                }
                
                html = "<option class='generated' value='" + optVal + "'>" + this.DAT + "</option>";
                
                //alert(html);
                
                $(divItemCdId).append(html);
            });
        }
    },"jct");
};

/********************************************************************
 * 특정 폼 동적 생성
 * - param1: 폼ID
 * - param2: 객체ID
 * - param3: 객체값
 *********************************************************************/
gw.ui.createFormObj = function(formId, formMethod, jsonValue, target) {
    
    var targetStr = "";
    
    if(typeof(target) != "undefined") {
        targetStr = " target='"+target+"' ";
    }
    
    $("body").append("<form id='"+formId+"' method='"+formMethod+"' "+targetStr+"></form>");
    
    if(typeof(jsonValue) !== "undefined") {
        $.each(jsonValue, function(i, v) {
            gw.ui.createHiddenFormObj(formId, i, v);
        });
    }
};

/********************************************************************
 * 특정 폼 동적 생성
 * - param1: 폼ID
 * - param2: 객체ID
 * - param3: 객체값
 *********************************************************************/
gw.ui.removeFormObj = function(formId) {
    $("form#"+formId).remove();
};

/********************************************************************
 * 특정 폼에 임시 값을 만들자
 * - param1: 폼ID
 * - param2: 객체ID
 * - param3: 객체값
 *********************************************************************/
gw.ui.createHiddenFormObj = function(formId, objId, objValue) {
    $("<textarea class='"+formId+"GeneratedObj' id='"+objId+"' name='"+objId+"' style='display: none;'>"+objValue+"</textarea>").appendTo($("#" + formId));
    //$("<input class='"+formId+"GeneratedObj' id='"+objId+"' name='"+objId+"' type='hidden' value='"+objValue+"'/>").appendTo($("#" + formId));
};

/********************************************************************
 * 특정 폼에 생성된 임시데이터 삭제
 * - param1: 폼ID
 *********************************************************************/
gw.ui.removeHiddenFormObj = function(formId) {
    $("#" + formId + " > textarea."+formId+"GeneratedObj").remove();
};

/********************************************************************
 * 우편번호 검색 (000000 형태)
 * - param1: 우편번호 객체ID
 * - param2: 주소1 객체ID
 * - param3: 주소2 객체ID
 *********************************************************************/
gw.ui.searchZip1 = function(zipObj, addr1Obj, addr2Obj) {
    //var url = "/comm0007_02.act?ZIP_OBJ=" + zipObj + "&ADDR1_OBJ=" + addr1Obj + "&ADDR2_OBJ=" + addr2Obj;
    //uf_newWin(url, 'searchZip1', 440, 498);
    var jsonValue = {
        "ZIP_OBJ": zipObj,
        "ADDR1_OBJ": addr1Obj,
        "ADDR2_OBJ": addr2Obj
    };
    
    gw.common.jexNewWin("/comm0007_02.act", 'searchZip1', 440, 498, jsonValue);
};


/********************************************************************
 * 우편번호 검색 (000-000 형태)
 * - param1: 우편번호1 객체ID
 * - param1: 우편번호2 객체ID
 * - param2: 주소1 객체ID
 * - param3: 주소2 객체ID
 *********************************************************************/
gw.ui.searchZip2 = function(zip1Obj, zip2Obj, addr1Obj, addr2Obj) {
    //var url = "/comm0007_02.act?ZIP1_OBJ=" + zip1Obj + "&ZIP2_OBJ=" + zip2Obj + "&ADDR1_OBJ=" + addr1Obj + "&ADDR2_OBJ=" + addr2Obj;
    //uf_newWin(url,'searchZip2',440, 498);
    
    var jsonValue = {
        "ZIP1_OBJ": zip1Obj,
        "ZIP2_OBJ": zip2Obj,
        "ADDR1_OBJ": addr1Obj,
        "ADDR2_OBJ": addr2Obj
    };
    
    gw.common.jexNewWin("/comm0007_02.act", 'searchZip2', 440, 498, jsonValue);
};

/********************************************************************
 * 부서 검색
 * - param1: 부서코드 객체ID
 * - param2: 부서명 객체ID
 * - param3: 이용기관일련번호
 * - param4: 선택 부서코드(옵션)
 *********************************************************************/
gw.ui.searchDept = function(deptCdObj, deptNmObj, usefacSeqNo, deptCd) {
    /*
    var url = "/comm0001_01.act?USEFAC_SEQ_NO="+usefacSeqNo+"&DEPT_CD_OBJ=" + deptCdObj + "&DEPT_NM_OBJ=" + deptNmObj;
    
    if(deptCd) {
        url += "&DEPT_CD=" + deptCd;
    } else {
        if(deptCdObj !== null) {
            url += "&DEPT_CD=" + $("#" + deptCdObj).val();
        }
    }
    
    uf_newWin(url,"searchDept",440, 550);
    */
    
    var jsonValue = {
        "USEFAC_SEQ_NO": usefacSeqNo,
        "DEPT_CD_OBJ": deptCdObj,
        "DEPT_NM_OBJ": deptNmObj
    };
    
    if(deptCd) {
        jsonValue["DEPT_CD"] = deptCd;
    } else {
        jsonValue["DEPT_CD"] = $("#" + deptCdObj).val();
    }
    
    gw.common.jexNewWin("/comm0001_01.act", "searchDept", 440, 550, jsonValue);
};

/********************************************************************
 * 부서 검색2
 * - param1: 부서코드 객체ID
 * - param2: 부서명 객체ID
 * - param3: 이용기관일련번호
 * - param4: 선택 부서코드(옵션)
 *********************************************************************/
gw.ui.searchDept2 = function(deptCdObj, deptNmObj, usefacSeqNo, deptCd) {
    /*
    var url = "/comm0001_01.act?USEFAC_SEQ_NO="+usefacSeqNo+"&DEPT_CD_OBJ=" + deptCdObj + "&DEPT_NM_OBJ=" + deptNmObj;
    
    if(deptCd) {
        url += "&DEPT_CD=" + deptCd;
    } else {
        if(deptCdObj !== null) {
            url += "&DEPT_CD=" + $("#" + deptCdObj).val();
        }
    }
    
    uf_newWin(url,"searchDept",440, 550);
    */
    
    var jsonValue = {
        "USEFAC_SEQ_NO": usefacSeqNo,
        "DEPT_CD_OBJ": deptCdObj,
        "DEPT_NM_OBJ": deptNmObj
    };
    
    if(deptCd) {
        jsonValue["DEPT_CD"] = deptCd;
    } else {
        jsonValue["DEPT_CD"] = $("#" + deptCdObj).val();
    }
    
    gw.common.jexNewWin("/rcomm_0010_01.act", "searchDept", 550, 520, jsonValue);
    
    uf_rcomm_0010_01Params = function(popkey, param) {
        $("input[name="+deptNmObj+"]").val(param.DEPT_NM);
        $("input[name="+deptCdObj+"]").val(param.DEPT_CD);
    }   
};

/********************************************************************
 * 사업장 검색
 * - param1: 사업장코드 객체ID
 * - param2: 사업장명 객체ID
 * - param3: 이용기관일련번호
 * - param4: 선택 사업장코드(옵션)
 *********************************************************************/
gw.ui.searchSite = function(siteCdObj, siteNmObj, usefacSeqNo, siteCd) {
    /*
    var url = "/comm0019_01.act?USEFAC_SEQ_NO="+usefacSeqNo+"&SITE_CD_OBJ=" + siteCdObj + "&SITE_NM_OBJ=" + siteNmObj;
    //+ "&SITE_CD=" + siteCd;
    if(siteCd) {
        url += "&SITE_CD=" + siteCd;
    } else {
        if(siteCdObj && $("#" + siteCdObj).val()) {
            url += "&SITE_CD=" + $("#" + siteCdObj).val();
        }
    }
    
    uf_newWin(url,"searchSite",440, 550);
    */
    
    var jsonValue = {
        "USEFAC_SEQ_NO": usefacSeqNo,
        "SITE_CD_OBJ": siteCdObj,
        "SITE_NM_OBJ": siteNmObj
    };
    
    if(siteCd) {
        jsonValue["SITE_CD"] = siteCd;
    } else {
        if(siteCdObj && $("#" + siteCdObj).val()) {
            jsonValue["SITE_CD"] = $("#" + siteCdObj).val();
        }
    }
    
    gw.common.jexNewWin("/comm0019_01.act", "searchSite", 440, 550, jsonValue);
};

/********************************************************************
 * 사업부문 검색
 * - param1: 사업부문코드 객체ID
 * - param2: 사업부문명 객체ID
 * - param3: 이용기관일련번호
 *********************************************************************/
gw.ui.searchBizunit = function(bizunitCdObj, bizunitNmObj, usefacSeqNo, bizunitCd) {
    /*
    var url = "/comm0025_01.act?USEFAC_SEQ_NO="+usefacSeqNo+"&BIZUNIT_CD_OBJ=" + bizunitCdObj + "&BIZUNIT_NM_OBJ=" + bizunitNmObj;
    
    if(bizunitCd) {
        url += "&BIZUNIT_CD=" + bizunitCd;
    } else {
        if(bizunitCdObj && $("#" + bizunitCdObj)) {
            url += "&BIZUNIT_CD=" + $("#" + bizunitCdObj).val();
        }
    }
    
    uf_newWin(url,"searchBizunit",440, 550);
    */
    
    var jsonValue = {
        "USEFAC_SEQ_NO": usefacSeqNo,
        "BIZUNIT_CD_OBJ": bizunitCdObj,
        "BIZUNIT_NM_OBJ": bizunitNmObj
    };
    
    if(bizunitCd) {
        jsonValue["BIZUNIT_CD"] = bizunitCd;
    } else {
        if(bizunitCdObj && $("#" + bizunitCdObj)) {
            jsonValue["BIZUNIT_CD"] = $("#" + bizunitCdObj).val();
        }
    }
    
    gw.common.jexNewWin("/comm0025_01.act", "searchBizunit", 440, 550, jsonValue);
};

/********************************************************************
 * 사용자 검색
 * - param1: 사용자아이디 객체ID
 * - param2: 사용자명 객체ID
 * - param3: 이용기관일련번호
 * - param4: 선택 사용자아이디(옵션)
 *********************************************************************/
gw.ui.searchUser = function(userIdObj, userNmObj, usefacSeqNo, callbackFn, multiSelectFlag, searchGb3Flag) {
    /*
    var multiSelectYn = multiSelectFlag;
    
    if(multiSelectYn != "Y") {
        multiSelectYn = "N";
    }
    
    //var multiSelectYn = multiSelectFlag?"Y":"N";
    
    //if(userId) {
    //  url += "&USER_ID=" + userId;
    //} else {
        if(userIdObj && $("#" + userIdObj)) {
            url += "&USER_ID=" + $("#" + userIdObj).val();
        }
    //}
    
    var url = "/comm0006_01.act?USEFAC_SEQ_NO="+usefacSeqNo+"&USER_ID_OBJ=" + userIdObj + "&USER_NM_OBJ=" + userNmObj + "&MULTI_SELECT_YN=" + multiSelectYn + "&CALLBACK_FN="+callbackFn;
    uf_newWin(url,"searchUser",985, 560);
    */
    
    var multiSelectYn = multiSelectFlag?"Y":"N";
    var searchGb3 = "N";
    if( searchGb3Flag == "Y")  searchGb3 = "Y";
    var jsonValue = {
        "MULTI_SELECT_YN": multiSelectYn,
        "USEFAC_SEQ_NO": usefacSeqNo,
        "USER_ID_OBJ": userIdObj,
        "USER_NM_OBJ": userNmObj,
        "CALLBACK_FN": callbackFn, 
        "SEARCH_GB3":searchGb3
 
    };
    
    gw.common.jexNewWin("/comm0006_01.act", "searchUser",985, 560, jsonValue);
};



/********************************************************************
 * 사용자, 부서, 사업장 검색
 * - param1: 사용자아이디 객체ID
 * - param2: 사용자명 객체ID
 * - param3: 부서코드 객체ID
 * - param2: 부서명 객체ID
 * - param1: 사업장코드 객체ID
 * - param2: 사업장명 객체ID
 * - param3: 이용기관일련번호
 *********************************************************************/
gw.ui.searchUserComplex = function(userIdObj, userNmObj, deptCdObj, deptNmObj, siteCdObj, siteNmObj, usefacSeqNo) {
    /*
    var url = "/comm0023_01.act?USEFAC_SEQ_NO="+usefacSeqNo;
    
    if(userIdObj !== null) {
        url += "&USER_ID_OBJ=" + userIdObj + "&USER_NM_OBJ=" + userNmObj + "&USER_ID=" + $("#" + userIdObj).val();
    }
    
    if(deptCdObj !== null) {
        url += "&DEPT_CD_OBJ=" + deptCdObj + "&DEPT_NM_OBJ=" + deptNmObj + "&DEPT_CD=" + $("#" + deptCdObj).val();
    }
    
    if(siteCdObj !== null) {
        url += "&SITE_CD_OBJ=" + siteCdObj + "&SITE_NM_OBJ=" + siteNmObj + "&SITE_CD=" + $("#" + siteCdObj).val();
    }
    
    //alert(url);
    
    uf_newWin(url,"searchUserComplex",980, 555);
    */
    
    var jsonValue = {
        "USEFAC_SEQ_NO": usefacSeqNo
    };
    
    if(userIdObj !== null) {
        jsonValue["USER_ID_OBJ"] = userIdObj;
        jsonValue["USER_NM_OBJ"] = userNmObj;
        jsonValue["USER_ID"] = $("#" + userIdObj).val();
    }
    
    if(deptCdObj !== null) {
        jsonValue["DEPT_CD_OBJ"] = deptCdObj;
        jsonValue["DEPT_NM_OBJ"] = deptNmObj;
        jsonValue["DEPT_CD"] = $("#" + deptCdObj).val();
    }
    
    if(siteCdObj !== null) {
        jsonValue["SITE_CD_OBJ"] = siteCdObj;
        jsonValue["SITE_NM_OBJ"] = siteNmObj;
        jsonValue["SITE_CD"] = $("#" + siteCdObj).val();
    }
    
    gw.common.jexNewWin("/comm0023_01.act","searchUserComplex",980, 555, jsonValue);
};

/********************************************************************
 * 단일 파일 업로드
 * - param1: 이용기관일련번호
 * - param2: 콜백함수
 * - param3: 업무구분
 *********************************************************************/
gw.ui.uploadSingleFile = function(usefacSeqNo, callbackFn, oper) {
    if(typeof(oper) === "undefined") {
        oper = "etc";
    }
    
    /*
    
    var url = "comm0011_01.act?USEFAC_SEQ_NO="+usefacSeqNo+"&CALLBACK_FN=" + callbackFn + "&OPER=" + oper;
    uf_newWin(url,"uploadSingleFile",500, 300);
    */
    
    var jsonValue = {
        "USEFAC_SEQ_NO": usefacSeqNo,
        "CALLBACK_FN": callbackFn,
        "OPER": oper
    };
    
    gw.common.jexNewWin("/comm0011_01.act","uploadSingleFile",500, 200, jsonValue);
};

/****************************************************
 * 레이어 화면에 파일 리스트 보여주는 스크립트 (증빙관련 ppp_appr_vouch테이블.)
 * 만든이 : 하지훈
 * 만든시간 : 20110407
 * param : usefac_seq_no & appr_seq_no 
 * 주의사항 : 레이어 다운로드 화면인 layerfiledonw.jsp가 필요하며, 밑의 함수를 흉내낸것임.
 ************************************************************/
gw.ui.vouchfileDownload = function(usefacSeqNo, apprSeqno) {
    /*
    document.frm.layerSeqNo.value=seq;
    document.frm.target = "ifrmFileDown";
    document.frm.action= url;
    document.frm.submit();
    */
    var ifrm = $("#ifrmFileDown");
    var url = "/comm0047_01.act?USEFAC_SEQ_NO="+usefacSeqNo+"&APPR_SEQ_NO="+apprSeqno;
        
    //alert(url);
    
    ifrm.attr("src", url);
    
    if (document.layers) {
        //document.all.ifrmFileDown.style.top = event.y+document.documentElement.scrollTop;
        //document.all.ifrmFileDown.style.left = event.x-270;
        ifrm.css("top", event.y+document.documentElement.scrollTop);
        ifrm.css("left", event.x-270);
    } else {
        //document.all.ifrmFileDown.style.top = event.clientY+document.documentElement.scrollTop;
        //document.all.ifrmFileDown.style.left = event.clientX-270;
        ifrm.css("top", event.clientY+document.documentElement.scrollTop);
        ifrm.css("left", event.clientX-270);
    }
    //document.all.ifrmFileDown.style.visibility="visible";
    ifrm.css("visibility", "visible");
};


/**************************************************************************
* 레이어 화면에 파일 리스트 보여주는 스크립트
* 만든이        : 정성훈
* 만든시간      : 2009-08-07 10:44오전
* Param         : seq - 업무에 해당하는 순차 번호
* 주의사항      : 레이어 다운로드 화면을 사용하기 위해서는 layerFileDown.jsp 가 include 되어 있어야 합니다.
**************************************************************************/
gw.ui.fileDownloadLayer = function(usefacSeqNo, tblNm, relkey_1, relkey_2, relkey_3, relkey_4, relkey_5) {
    /*
    document.frm.layerSeqNo.value=seq;
    document.frm.target = "ifrmFileDown";
    document.frm.action= url;
    document.frm.submit();
    */
    var ifrm = $("#ifrmFileDown");
    var url = "/comm0010_01.act?USEFAC_SEQ_NO="+usefacSeqNo+"&TBL_NM="+tblNm+"&RELKEY_1=" + relkey_1;
    
    
    if(typeof(relkey_2) !== "undefined") url += "&RELKEY_2=" + relkey_2;
    if(typeof(relkey_3) !== "undefined") url += "&RELKEY_3=" + relkey_3;
    if(typeof(relkey_4) !== "undefined") url += "&RELKEY_4=" + relkey_4;
    if(typeof(relkey_5) !== "undefined") url += "&RELKEY_5=" + relkey_5;
    
    //alert(url);
    
    ifrm.attr("src", url);
    
    if (document.layers) {
        //document.all.ifrmFileDown.style.top = event.y+document.documentElement.scrollTop;
        //document.all.ifrmFileDown.style.left = event.x-270;
        ifrm.css("top", event.y+document.documentElement.scrollTop);
        ifrm.css("left", event.x-270);
    } else {
        //document.all.ifrmFileDown.style.top = event.clientY+document.documentElement.scrollTop;
        //document.all.ifrmFileDown.style.left = event.clientX-270;
        ifrm.css("top", event.clientY+document.documentElement.scrollTop);
        ifrm.css("left", event.clientX-270);
    }
    //document.all.ifrmFileDown.style.visibility="visible";
    ifrm.css("visibility", "visible");
};

gw.ui.fileDownloadLayer2 = function(jsonParam) {
    
//  alert("테이블명:"+jsonParam.TBL_NM+", 필드명1:"+jsonParam.FLD_NM1+", 필드값1:"+jsonParam.FLD_VAL1);
//  return;
    var ifrm = $("#ifrmFileDown");
    var url = "/rcomm_0101_01_r001.act?TBL_NM="+jsonParam.TBL_NM+"&FLD_NM1="+jsonParam.FLD_NM1+"&FLD_VAL1="+jsonParam.FLD_VAL1;
    
    if(typeof(jsonParam.FLD_NM2) !== "undefined") url += "&FLD_NM2=" + jsonParam.FLD_NM2;
    if(typeof(jsonParam.FLD_NM3) !== "undefined") url += "&FLD_NM3=" + jsonParam.FLD_NM3;
    if(typeof(jsonParam.FLD_NM4) !== "undefined") url += "&FLD_NM4=" + jsonParam.FLD_NM4;
    if(typeof(jsonParam.FLD_NM5) !== "undefined") url += "&FLD_NM5=" + jsonParam.FLD_NM5;

    if(typeof(jsonParam.FLD_VAL2) !== "undefined") url += "&FLD_VAL2=" + jsonParam.FLD_VAL2;
    if(typeof(jsonParam.FLD_VAL3) !== "undefined") url += "&FLD_VAL3=" + jsonParam.FLD_VAL3;
    if(typeof(jsonParam.FLD_VAL4) !== "undefined") url += "&FLD_VAL4=" + jsonParam.FLD_VAL4;
    if(typeof(jsonParam.FLD_VAL5) !== "undefined") url += "&FLD_VAL5=" + jsonParam.FLD_VAL5;

    ifrm.attr("src", url);
    
    if (document.layers) {
        //document.all.ifrmFileDown.style.top = event.y+document.documentElement.scrollTop;
        //document.all.ifrmFileDown.style.left = event.x-270;
        ifrm.css("top", event.y+document.documentElement.scrollTop);
        ifrm.css("left", event.x-270);
    } else {
        //document.all.ifrmFileDown.style.top = event.clientY+document.documentElement.scrollTop;
        //document.all.ifrmFileDown.style.left = event.clientX-270;
        ifrm.css("top", event.clientY+document.documentElement.scrollTop);
        ifrm.css("left", event.clientX-270);
    }
    //document.all.ifrmFileDown.style.visibility="visible";
    ifrm.css("visibility", "visible");
};

/*
//REL 테이블을 거치지 않는 다운로드...
gw.ui.fileDownloadLayer = function(usefacSeqNo, tblNm) {
    //document.frm.layerSeqNo.value=seq;
    //document.frm.target = "ifrmFileDown";
    //document.frm.action= url;
    //document.frm.submit();
    var ifrm = $("#ifrmFileDown");
    var url = "/comm0010_01.act?USEFAC_SEQ_NO="+usefacSeqNo+"&TBL_NM="+tblNm;
    
    
    //alert(url);
    
    ifrm.attr("src", url);
    
    if (document.layers) {
        //document.all.ifrmFileDown.style.top = event.y+document.documentElement.scrollTop;
        //document.all.ifrmFileDown.style.left = event.x-270;
        ifrm.css("top", event.y+document.documentElement.scrollTop);
        ifrm.css("left", event.x-270);
    } else {
        //document.all.ifrmFileDown.style.top = event.clientY+document.documentElement.scrollTop;
        //document.all.ifrmFileDown.style.left = event.clientX-270;
        ifrm.css("top", event.clientY+document.documentElement.scrollTop);
        ifrm.css("left", event.clientX-270);
    }
    //document.all.ifrmFileDown.style.visibility="visible";
    ifrm.css("visibility", "visible");
};
*/

gw.ui.openScheViewWin = function(usefacSeqNo, userId, scheSeqNo) {
    /*
    var url = "pers0023_01.act?USEFAC_SEQ_NO="+usefacSeqNo+"&USER_ID="+userId+"&SCHE_SEQ_NO="+scheSeqNo;
    uf_newWin(url,'openScheViewWin',680, 600);
    */
    
    var jsonValue = {
        "USEFAC_SEQ_NO": usefacSeqNo,
        "USER_ID": userId,
        "SCHE_SEQ_NO": scheSeqNo
    };
    
    gw.common.jexNewWin("/pers0023_01.act","openScheViewWin",680, 600, jsonValue);
};

gw.ui.delSche = function(usefacSeqNo, userId, scheSeqNo, callbackFn) {
    var jsonValue = {
        "USEFAC_SEQ_NO": usefacSeqNo,
        "USER_ID": userId,
        "SCHE_SEQ_NO": scheSeqNo
    };

    jex.web.Ajax("pers0026_01", jsonValue, function(data) {
        if(!jex.web.isError(data)) {
            alert("삭제되었습니다.");
            
            if(typeof(callbackFn) == "function") {
                callbackFn();
            }
        }
    },"jct");
};

gw.ui.delTodo = function(usefacSeqNo, userId, todoSeqNo, callbackFn) {
    var jsonValue = {
            "USEFAC_SEQ_NO": usefacSeqNo,
            "USER_ID": userId,
            "TODO_SEQ_NO": todoSeqNo
    };
    
    jex.web.Ajax("pers0028_01", jsonValue, function(data) {
        if(!jex.web.isError(data)) {
            alert("삭제되었습니다.");
            
            if(typeof(callbackFn) == "function") {
                callbackFn();
            }
        }
    },"jct");
};


gw.ui.openScheModifyWin = function(usefacSeqNo, userId, scheSeqNo) {
    /*
    var url = "pers0025_01.act?USEFAC_SEQ_NO="+usefacSeqNo+"&USER_ID="+userId+"&SCHE_SEQ_NO="+scheSeqNo;
    uf_newWin(url,'openScheModifyWin',680, 600);
    */
    
    var jsonValue = {
        "USEFAC_SEQ_NO": usefacSeqNo,
        "USER_ID": userId,
        "SCHE_SEQ_NO": scheSeqNo
    };
    
    gw.common.jexNewWin("/pers0025_01.act","openScheModifyWin",680, 600, jsonValue);
};

gw.ui.openScheAddLayer = function (usefacSeqNo, userId, startDate, endDate) {
    gw.ui.initScheCalSelectBox("addFormScheCalSeqNo", usefacSeqNo, userId);
    
    //$("#addFormScheCalSeqNo").change();
    
    //var url = "pers0024_01.act?START_DATE=" + startDate;
    //uf_newWin(url, null, 680, 576);
    // 폼 초기화
    $("#addScheFrm").resetForm();
    
    
    //$("tr#addScheShrTr").addClass("border_block");
    
    
    //처음 기본 설정에 맞는 시간을 설정하도록 하는 부분~
    var jsonValue = {};
    jsonValue["USEFAC_SEQ_NO"] = usefacSeqNo;
    jsonValue["USER_ID"] = userId;

    var timeStart = "";
    var timeEnd = "";

   
    
    jex.web.Ajax("pers0048_01", jsonValue, function(data) {
        $.each(data.REC, function(i) {
               if(data.REC[i].SCHE_CAL_NM == $("#addFormScheCalSeqNo option:selected").text()) {
                   timeStart = data.REC[i].START_TIME;
                   timeEnd = data.REC[i].END_TIME;
               }
        });

    },"jct", false);

    
    
    if(jex.web.null2void(startDate) === "") {
        startDate = g_today_yyyyMMdd;
    }
    
    if(jex.web.null2void(endDate) === "") {
        endDate = startDate;
    }
    
    try {
        startDate = Date.parseExact($.trim(startDate), "yyyyMMdd").toString("yyyy-MM-dd");
        endDate = Date.parseExact($.trim(endDate), "yyyyMMdd").toString("yyyy-MM-dd");
    } 
    catch(e) {
    }
    
    
    
    
    
    $("#addScheFrm").find("input[name=START_DATE]").val(startDate);
    $("#addScheFrm").find("input[name=END_DATE]").val(endDate);
    
    
    
    $("#addScheLayer").draggable();
    $("#addScheLayer").show();
    $("#addPeriod").addClass("border_none");
    $("tr#onlyMySche").removeClass("border_none");
    $("tr#addScheShrTr").addClass("border_none");
    $("tr#addRepeatarea").addClass("border_none");
    
    
    
    $("#addScheFrm").find("#SCHE_SUBJ").focus();
    
    //달력 값이 00시 00분이 아니면서, 23시50분도 아니면서 undefined도 아닌 경우 -> default시간이 아님 - 시간 출력하는 곳.
    if((timeStart == "000000" && timeEnd == "000000") || (typeof timeStart == "undefined" && typeof timeEnd == "undefined") || (timeStart == "000000" && timeEnd =="233000") ) {

        $("#addScheFrm").find("input[name=RSTART_TIME][value='0000']").attr("checked", true);
        $("#addScheFrm").find("input[name=REND_TIME][value='2330']").attr("checked", true);

        $("#addScheFrm").find("#textStart").val( $("#addScheFrm").find("input[name=RSTART_TIME][value='0000']").siblings("label").text());
        $("#addScheFrm").find("#textEnd").val( $("#addScheFrm").find("input[name=REND_TIME][value='2330']").siblings("label").text());
        
        //select box 값 설정.
        $("#addScheFrm").find("#ALLDAY_YN").attr("checked","checked");
        $("#addScheFrm").find(".timesetarea").hide();
    }
    else {//값이 default인 경우.
        
        var hourStart = timeStart.substring(0,4);
        var hourEnd   = timeEnd.substring(0,4);

        $("#addScheFrm").find("input[name=RSTART_TIME][value='" + hourStart + "']").attr("checked", true);
        $("#addScheFrm").find("input[name=REND_TIME][value='" + hourEnd + "']").attr("checked", true);

        $("#addScheFrm").find("#textStart").val( $("#addScheFrm").find("input[name=RSTART_TIME][value='" + hourStart + "']").siblings("label").text());
        $("#addScheFrm").find("#textEnd").val( $("#addScheFrm").find("input[name=REND_TIME][value='" + hourEnd + "']").siblings("label").text());
        
        
        //select box 값 설정.
        
        
        $("#addScheFrm").find("#ALLDAY_YN").removeAttr("checked");
        $("#addScheFrm").find(".timesetarea").show();
        
        
    }
};


gw.ui.openScheModifyLayer = function(usefacSeqNo, userId, scheSeqNo) {
    gw.ui.initScheCalSelectBox("modifyFormScheCalSeqNo", usefacSeqNo, userId);
    
    //$("#modifyFormScheCalSeqNo").change();
    
    var jsonValue = {
        "USEFAC_SEQ_NO": usefacSeqNo,
        "USER_ID": userId,
        "SCHE_SEQ_NO": scheSeqNo
    };

    jex.web.Ajax("pers0023_01", jsonValue, function(data) {
        if(!jex.web.isError(data)) {
            $("#modifyScheFrm").find("#USEFAC_SEQ_NO").val(usefacSeqNo);
            $("#modifyScheFrm").find("#USER_ID").val(userId);
            $("#modifyScheFrm").find("#SCHE_SEQ_NO").val(scheSeqNo);

            var startDate = gw.date.format(data.START_DATE, "yyyyMMdd", "yyyy-MM-dd");
            var endDate = gw.date.format(data.END_DATE, "yyyyMMdd", "yyyy-MM-dd");
            var startTime_HHmm = gw.date.format(data.START_TIME, "HHmmss", "HHmm");
            var endTime_HHmm = gw.date.format(data.END_TIME, "HHmmss", "HHmm");
            
            $("#modifyScheFrm").find("#SCHE_SUBJ").val(data.SCHE_SUBJ);
            $("#modifyScheFrm").find("#SCHE_CONT").val(data.SCHE_CONT);
            $("#modifyScheFrm").find("input[name=START_DATE]").val(startDate);
            $("#modifyScheFrm").find("input[name=END_DATE]").val(endDate);
            $("#modifyScheFrm").find("#REPEAT_KIND").val(data.REPEAT_KIND);
            $("#modifyScheFrm").find("#SCHE_CATE_SEQ_NO").val(data.SCHE_CATE_SEQ_NO);
            $("#modifyScheFrm").find("select[name=SCHE_CAL_SEQ_NO]").val(data.SCHE_CAL_SEQ_NO);
            
            //select box 값 설정.
            $("#modifyScheFrm").find("input[name=RSTART_TIME][value='" + startTime_HHmm + "']").attr("checked", true);
            $("#modifyScheFrm").find("input[name=REND_TIME]  [value='" + endTime_HHmm + "']")  .attr("checked", true);

            $("#modifyScheFrm").find("#textStart").val( $("#modifyScheFrm").find("input[name=RSTART_TIME][value='" + startTime_HHmm + "']").siblings("label").text());
            $("#modifyScheFrm").find("#textEnd").val( $("#modifyScheFrm").find("input[name=REND_TIME][value='" + endTime_HHmm + "']").siblings("label").text());
            
            
            
            $("#modifyScheFrm").find("#PLACE").val(data.PLACE);
            $("#modifyScheFrm").find("#SCHE_KIND").val(data.SCHE_KIND);
            
            if(data.SCHE_KIND == "2"){  //회사
                $("#modifyScheFrm").find("tr#onlyMySche").addClass("border_none");
                $("#modifyScheFrm").find("tr#ModifyScheShrTr").addClass("border_none");
                $("#modifyScheFrm").find("input[name=SCHE_KIND_radio][value='" + data.SCHE_KIND + "']").attr("checked","checked");
                $("#modifyScheFrm").find("#shrpopBtn").css("display","");
                
            }
            else if(data.SCHE_KIND == "3"){   //공유
                $("#modifyScheFrm").find("tr#onlyMySche").removeClass("border_none");
                $("#modifyScheFrm").find("tr#ModifyScheShrTr").removeClass("border_none");
                $("#modifyScheFrm").find("input[name=SCHE_KIND_radio][value='1']").attr("checked","checked");
                $("#modifyScheFrm").find("#shrpopBtn").css("display","none");
            }
            
            else if(data.SCHE_KIND == "1"){   //개인
                $("#modifyScheFrm").find("tr#onlyMySche").removeClass("border_none");
                $("#modifyScheFrm").find("tr#ModifyScheShrTr").addClass("border_none");
                $("#modifyScheFrm").find("input[name=SCHE_KIND_radio][value='" + data.SCHE_KIND + "']").attr("checked","checked");
                $("#modifyScheFrm").find("#shrpopBtn").css("display","");
            }
            $("#modifyScheFrm").find("input[name=SCHE_KIND_radio]").attr("disabled",true);
            
            $("#modifyScheFrm").find("input[name=SHR_USER_INFO]").val(data.SHR_USER_INFO);
            if(data.SHR_USER_INFO == ""){
                $("#ModifyScheShrTr").addClass("border_none");
            }
            else{
                $("#ModifyScheShrTr").removeClass("border_none");   
            }
            
            $("#modifyScheFrm").find("input[name='OPEN_YN'][value='"+data.OPEN_YN+"']").attr("checked", true);
            
            var attfileHtml = "";
            
            $.each(data.ATTFILE_REC, function(i){
                attfileHtml += "<option value='"+data.ATTFILE_REC[i].ATTFILE_SEQ_NO+"'>"+data.ATTFILE_REC[i].FILE_NM+"</option>";
            });
            
            $("#modifyScheFrm").find("#ATTFILE_SEQ_NO").html(attfileHtml);
            
            $("#modifyScheFrm").find("#ALLDAY_YN").val(data.ALLDAY_YN);
            
            
            
            if(data.ALLDAY_YN === "Y" || (startTime_HHmm == "0000" && endTime_HHmm == "2330") ) {
                
                
                $("#modifyScheFrm").find("#ALLDAY_YN").attr("checked","checked");
                $("#modifyScheFrm").find(".timesetarea").hide();
                
                
            }
                
            else {
                $("#modifyScheFrm").find("#ALLDAY_YN").removeAttr("checked");
                $("#modifyScheFrm").find(".timesetarea").show();
                
            }
            
            $("#modifyScheFrm").find("#hideDateLayer").text(startDate);
            
            if(startDate != endDate && data.REPEAT_KIND > 1) {//반복일정일때..
                
                $("#ModifyPeriod").removeClass("border_none");
                $("#modifyRepeatarea").removeClass("border_none");
                
                
            }
            else if(startDate != endDate && data.REPEAT_KIND == 1){
            
                $("#ModifyPeriod").removeClass("border_none");
                $("#modifyRepeatarea").addClass("border_none");
            }
            else{
                $("#ModifyPeriod").addClass("border_none");
                $("#modifyRepeatarea").addClass("border_none");
            }
            
            if(data.NO_REPEAT_END_YN === "Y") {
                $("#modifyScheFrm").find("input[name='NO_REPEAT_END_YN']").attr("checked", true);
            }
            else {
                $("#modifyScheFrm").find("input[name='NO_REPEAT_END_YN']").attr("checked", false);
            }
            
            /*
            uf_alldayYnOnClick();
            */
        }
    },"jct");
    
    //uf_repeatKindOnChange();
    $("#modifyScheLayer").draggable();
    $("#modifyScheLayer").show();
    
    $("#modifyScheFrm").find("#SCHE_SUBJ").focus();
};


/********************************************************************
 * 공유자 조회
 * - param1: 사용자그룹 객체ID
 * - param3: 이용기관일련번호
 *********************************************************************/
gw.ui.searchShareUser = function(userStrObj, usefacSeqNo, userId) {
    /*
    var url = "/comm0030_01.act?USEFAC_SEQ_NO="+usefacSeqNo+"&DAT=DEPT|MY_USER_GRP|USER_GRP";
    
    if(userStrObj !== null) {
        url += "&USER_STR_OBJ=" + userStrObj;
    }
    
    uf_newWin(url,"searchShareUser",980, 555);
    */
    
    var jsonValue = {
        "USEFAC_SEQ_NO": usefacSeqNo,
        "DAT": "DEPT|MY_USER_GRP|USER_GRP"
    };
    
    if(userStrObj !== null) {
        jsonValue["USER_STR_OBJ"] = userStrObj;
    }
    
    gw.common.jexNewWin("/comm0030_01.act","searchShareUser",980, 555, jsonValue);
};

/********************************************************************
 * 이메일 수신자 조회
 * - param1: 사용자그룹 객체ID
 * - param3: 이용기관일련번호
 *********************************************************************/
gw.ui.searchEmailUser = function(userStrObj, usefacSeqNo, userId) {
    /*
    var url = "/comm0030_01.act?USEFAC_SEQ_NO="+usefacSeqNo+"&DAT=DEPT|MY_USER_GRP|MY_NMCARD_GRP|USER_GRP";
    
    if(userStrObj !== null) {
        url += "&USER_STR_OBJ=" + userStrObj;
    }
    
    uf_newWin(url,"searchEmailUser",980, 555);
    */
    
    var jsonValue = {
        "USEFAC_SEQ_NO": usefacSeqNo,
        "DAT": "DEPT|MY_USER_GRP|MY_NMCARD_GRP|USER_GRP"
    };
    
    if(userStrObj !== null) {
        jsonValue["USER_STR_OBJ"] = userStrObj;
    }
    
    gw.common.jexNewWin("/comm0030_01.act","searchEmailUser",980, 555, jsonValue);
};

/********************************************************************
 * 업무요청자 조회
 * - param1: 사용자그룹 객체ID
 * - param3: 이용기관일련번호
 *********************************************************************/
gw.ui.searchDeptUser = function(userStrObj, usefacSeqNo, userId, infoGb1) {
    var jsonValue = {
        "USEFAC_SEQ_NO": usefacSeqNo,
        "DAT": "DEPT"
    };
    
    if(userStrObj !== null) {
        jsonValue["USER_STR_OBJ"] = userStrObj;
    }
    if(infoGb1 !== null) {
        jsonValue["INFO_GB_1"] = infoGb1;
    }
    
    gw.common.jexNewWin("/comm0030_01.act","searchDeptUser",980, 555, jsonValue);
};

/********************************************************************
 * 결재선 사용주체 조회
 * - param1: 사용자그룹 객체ID
 * - param3: 이용기관일련번호
 *********************************************************************/
gw.ui.searchApprlineOwner = function(callbackFn, usefacSeqNo) {
    /*
    var url = "/comm0039_01.act?PAGE_TITLE=결재선 사용주체&USEFAC_SEQ_NO="+usefacSeqNo+"&DAT=DEPT&CALLBACK_FN="+callbackFn;
    
    uf_newWin(url,"searchApprlineOwner",640, 410);
    */
    
    var jsonValue = {
        "USEFAC_SEQ_NO": usefacSeqNo,
        "PAGE_TITLE": "결재선 사용주체",
        "DAT": "DEPT",
        "CALLBACK_FN": callbackFn
    };
    
    gw.common.jexNewWin("/comm0039_01.act","searchApprlineOwner",640, 410, jsonValue);
};

/********************************************************************
 * 결재자 조회
 * - param1: 사용자그룹 객체ID
 * - param3: 이용기관일련번호
 *********************************************************************/
gw.ui.searchApprUser = function(callbackFn, usefacSeqNo) {
    /*
    var url = "/comm0039_01.act?PAGE_TITLE=결재자&USEFAC_SEQ_NO="+usefacSeqNo+"&DAT=DEPT|USER&CALLBACK_FN="+callbackFn;
    
    uf_newWin(url,"searchApprUser",640, 410);
    */
    
    var jsonValue = {
        "USEFAC_SEQ_NO": usefacSeqNo,
        "PAGE_TITLE": "결재자",
        "DAT": "DEPT|USER",
        "CALLBACK_FN": callbackFn
    };
    
    gw.common.jexNewWin("/comm0039_01.act","searchApprUser",640, 410, jsonValue);
};

gw.ui.openTodoModifyWin = function(usefacSeqNo, userId, todoSeqNo) {
    /*
    var url = "pers0031_01.act?USEFAC_SEQ_NO="+usefacSeqNo+"&USER_ID="+userId+"&TODO_SEQ_NO="+todoSeqNo;
    uf_newWin(url,'openTodoModifyWin', 540, 400);
    */
    
    var jsonValue = {
        "USEFAC_SEQ_NO": usefacSeqNo,
        "USER_ID": userId,
        "TODO_SEQ_NO": todoSeqNo
    };
    
    gw.common.jexNewWin("/pers0031_01.act",'openTodoModifyWin', 540, 400, jsonValue);
};


gw.ui.generateTodoRecHtml = function(usefacSeqNo, userId, data) {
    var todoHtml = "";

    if(data.REC.length > 0) {

        $.each(data.REC, function(i) {

            var expireDate = data.REC[i].EXPIRE_DATE;

            try {
                expireDate = Date.parseExact($.trim(expireDate), "yyyyMMdd").toString("yyyy-MM-dd");
            }
            catch(e) {
            }

            todoHtml +="<tr id='todoItem' todoSeqNo='"+data.REC[i].TODO_SEQ_NO+"'>"
                +"<td class='"+data.REC[i].COLOR_CLS_NM+"'>&nbsp;</td>";
                //+"<td><a href='javascript:' onclick=\"uf_newWin('pers_0002_03.htm','view2Win',680, 600)\"><s>(완료)테스트1</s></a></td>"
                
            var subj = data.REC[i].SUBJ;

            // 완료상태이면
            if(data.REC[i].STS === "2") {
                subj = "<s>"+subj+"</s>";
            }

            var impLevImg = "";

            if(data.REC[i].IMP_LEV === "1") {
                impLevImg = "ico_low2.gif";
            }
            else if(data.REC[i].IMP_LEV === "2") {
                impLevImg = "ico_middle2.gif";
            }
            else if(data.REC[i].IMP_LEV === "3") {
                impLevImg = "ico_high2.gif";
            }

            todoHtml +="<td><a href='javascript:' onclick=\"gw.ui.openTodoModifyWin('"+usefacSeqNo+"', '"+userId+"', '"+data.REC[i].TODO_SEQ_NO+"')\">"+subj+"</a></td>"
                +"<td class='t_right'><img src='img/groupware/"+impLevImg+"' alt='' /></td>"
                +"<td class='t_right'>"+expireDate+"</td>"
                +"</tr>";
        });
    }
    else {
        todoHtml +="<tr><td colspan='4' class='t_center'>데이터가 없습니다.</td></tr>";
    }

    return todoHtml;
};

gw.ui.openTodoAddWin = function() {
    //uf_newWin('pers0030_01.act', "openTodoAddWin", 540, 400);
    gw.common.jexNewWin("/pers0030_01.act",'openTodoAddWin', 540, 400);
};


gw.ui.openModifyScheCalWin = function(usefacSeqNo, userId) {
    //var url = "pers0048_01.act?USEFAC_SEQ_NO="+usefacSeqNo+"&USER_ID="+userId;
    //uf_newWin(url, "openModifyScheCalWin", 700, 310);
    
    var jsonValue = {
        "USEFAC_SEQ_NO": usefacSeqNo,
        "USER_ID": userId
    };
    
    gw.common.jexNewWin("/pers0048_01.act",'openModifyScheCalWin', 700, 310, jsonValue);
};

gw.ui.openModifyScheCateWin = function(usefacSeqNo, userId) {
    var jsonValue = {
        "USEFAC_SEQ_NO": usefacSeqNo,
        "USER_ID": userId
    };
    
    gw.common.jexNewWin("/pers0007_02.act",'openModifyScheCateWin', 700, 310, jsonValue);
};


gw.ui.goScheSearchPage = function() {
    location.href = "pers0050_01.act";
};

gw.ui.initScheCalSelectBox = function(obj, usefacSeqNo, userId) {
    var html = "";
    //var html = "";
    
    //alert(usefacSeqNo);

    var jsonValue = {
        "USEFAC_SEQ_NO"  : usefacSeqNo,
        "USER_ID"  : userId
    }; 

    jex.web.Ajax("pers0049_02", jsonValue, function(data) {
        $.each(data.REC, function(i) {
            var selected = "";
            
            if(i === 0) {
                selected = "selected";
            }
            
            // 회사 달력이면...
            /*
            if(data.REC[i].CAL_KIND == "2") {
                html += "<option class='company_color' style='color: #ffffff;' calKind='"+data.REC[i].CAL_KIND+"'  value='"+data.REC[i].SCHE_CAL_SEQ_NO+"' "+selected+">"+data.REC[i].SCHE_CAL_NM+"</option>";
            }
            else {
                html += "<option class='"+data.REC[i].COLOR_CLS_NM+" "+data.REC[i].FONT_COLOR_CLS_NM+"' calKind='"+data.REC[i].CAL_KIND+"'  value='"+data.REC[i].SCHE_CAL_SEQ_NO+"' "+selected+">"+data.REC[i].SCHE_CAL_NM+"</option>";
            }
            */
            if(data.REC[i].CAL_KIND != "2") {
                html += "<option class='"+data.REC[i].COLOR_CLS_NM+" "+data.REC[i].FONT_COLOR_CLS_NM+"' calKind='"+data.REC[i].CAL_KIND+"'  value='"+data.REC[i].SCHE_CAL_SEQ_NO+"' "+selected+">"+data.REC[i].SCHE_CAL_NM+"</option>";
            }
        });
        
        $("#"+obj).html(html);
    },"jct");
};

gw.ui.initTodoCateSelectBox = function(obj, usefacSeqNo, userId) {
    //var html = "<option value=''>선택하세요.</option>";
    var html = "";
    
    var jsonValue = {
        "USEFAC_SEQ_NO"  : usefacSeqNo,
        "USER_ID"  : userId
    }; 

    //if(jex.web.null2void(g_today_yyyyMMdd) !== "") {
    //  jsonValue["SEARCH_START_DATE"] = "";
    //  jsonValue["SEARCH_END_DATE"] = "";
    //}


    jex.web.Ajax("pers0007_01", jsonValue, function(data) {
        var selected = "";
        
        $.each(data.REC, function(i) {
            if(i === 0) {
                selected = "selected";
            }
            
            html += "<option class='"+data.REC[i].COLOR_CLS_NM+"' value='"+data.REC[i].TODO_CATE_SEQ_NO+"' "+selected+">"+data.REC[i].TODO_CATE_NM+"</option>";
        });
        
        $("#"+obj).html(html);
    },"jct");
};


gw.ui.previewImageByUrl = function(imgUrl) {
    /*
    window.open( "/comm0035_01.act?IMG_URL="+imgUrl, "previewImageByUrl",  
        "resizable=1,HEIGHT=200,WIDTH=200");
    */
    
    var jsonValue = {
        "IMG_URL": imgUrl
    };
    
    gw.common.jexNewWin("/comm0035_01.act",'previewImageByUrl', 200, 200, jsonValue);
};

gw.ui.previewImageByObj = function(imgObj) {
    //window.open( "/comm0035_01.act?IMG_OBJ="+imgObj, "previewImageByUrl", "resizable=1,HEIGHT=200,WIDTH=200");
    var jsonValue = {
        "IMG_OBJ": imgObj
    };
    
    gw.common.jexNewWin("/comm0035_01.act",'previewImageByObj', 200, 200, jsonValue);
};

gw.ui.getFileDownloadUrl = function(usefacSeqNo, attfileSeqNo) {    
    return "/comm0008_01.act?USEFAC_SEQ_NO="+usefacSeqNo+"&ATTFILE_SEQ_NO="+attfileSeqNo;
};

gw.ui.strtoWebvalue = function(text) {
    
    var sb = "";
    for(var i=0; i<text.length; i++) {
        var checks = text[i]+"";
        
        if(checks == "[") {
            sb += "\\[";
        }
        if(checks == "]") {
            sb += "\\]";
        }
        else{
            sb += checks;
        }
    }
    return sb;
            
};


/********************************************************************
 * 메일함 세팅권한 설정
 *********************************************************************/
gw.ui.authBoardSetting = function(usefacSeqNo, userId) {    
    var resultData = "";
    var jsonValue = {
        "USEFAC_SEQ_NO"  : usefacSeqNo,
        "USER_ID"  : userId
    }; 
    jex.web.Ajax("base0082_01_l002", jsonValue, function(data) {
        resultData = data.NCNT;
    },"jct");
    
    return resultData;
};


/********************************************************************
 * 메일함 세팅( left메뉴 )
 *********************************************************************/
gw.ui.mailboxSetting = function() {
    gw.common.jexNewWin("/mail0047_02.act", "mailboxset", 700, 310);
};

/********************************************************************
 * 연락처 세팅( left메뉴 )
 *********************************************************************/
gw.ui.contactSetting = function() {
    gw.common.jexNewWin("/conf0023_02.act", "contactset", 700, 310);
};

/*********************************************************************
 * 일정관리 세팅(left메뉴)
 *********************************************************************/
gw.ui.persSetting = function() {
    gw.common.jexNewWin("/pers0048_01.act", "persSetting",640,428);
};


// 양식번호로 결재상세조회URL 가져오기
gw.ui.getApprDetailUrlByFormSeqNo = function(formSeqNo) {
    
    //alert("test" + formSeqNo);
    
    var url = "";
    
    // 가수금수입결의
    if(formSeqNo == "101") {
        url = "/impo_1004_01.act";
    }
    // 일반지출결의
    else if(formSeqNo == "201") {
        url = "/expe_1001_03.act";
    }
    // 현금경비지출결의
    else if(formSeqNo == "202") {
        url = "/expe_1003_03.act";
    }
    // 법인카드지출결의
    else if(formSeqNo == "203") {
        url = "/expe_1005_03.act";
    }
    // 법인카드사전승인
    else if(formSeqNo == "204") {
        url = "/expe_1004_03.act";
    }
    else {
        url = "/appr0043_24.act";
    }
    
    return url;
};

//양식번호로 결재상세조회URL 가져오기
gw.ui.viewApprDetail  = function(usefacSeqNo, apprSeqNo) {
    var jsonValue = {};
    var url = "";

    jsonValue["USEFAC_SEQ_NO"] = usefacSeqNo;
    jsonValue["APPR_SEQ_NO"]   = apprSeqNo;
    
    //alert(JSON.stringify(jsonValue));
    
    //jex.web.Ajax("appr0087_01", jsonValue, function(data) {
    jex.web.Ajax("appr0074_04", jsonValue, function(data) {
        if(!jex.web.isError(data)) {
            
            //alert(JSON.stringify(data));
            
            url = gw.ui.getApprDetailUrlByFormSeqNo(data.FORM_SEQ_NO);
        }
    },"jct");
    
    gw.common.jexNewWin(url, "appwWin", 940, 800,jsonValue);
    
};


gw.ui.openDutyAddLayer = function (usefacSeqNo, dutySeqNo) {
    // 모든 폼초기화
    $("#addDutyFrm").each(function(){     
        this.reset();   
    });
    var g_today_yyyyMMdd = "";
    var g_today = "";
    var jsonValue = {};
    jsonValue["USEFAC_SEQ_NO"] = usefacSeqNo;
    jsonValue["DUTY_SEQ_NO"] = dutySeqNo;
    

    jex.web.Ajax("duty0015_01", jsonValue, function(data) {
        if(!jex.web.isError(data)) {
            
            try {
                var g_today_yyyyMMdd = new Date().toString("yyyyMMdd");
                g_today = Date.parseExact($.trim(g_today_yyyyMMdd), "yyyyMMdd").toString("yyyy-MM-dd");
            } 
            catch(e) {
            }
            $("#addDutyFrm").find("#HANDLE_PLAN_DATE").val(g_today);
            $("#addDutyFrm").find("#DUTY_STS_SEQ_NO").val(data.SEQ_NO);
        }
    },"jct");
    
    
    $("#addDutyLayer").draggable();
    $("#addDutyLayer").show();
};


gw.ui.openDutyModifyLayer = function(usefacSeqNo, dutySeqNo, stsSeqno) {
    // 모든 폼초기화
    $("#modifyDutyFrm").each(function(){     
        this.reset();   
    }); 
    
    var jsonValue = {};
    jsonValue["USEFAC_SEQ_NO"] = usefacSeqNo;
    jsonValue["DUTY_SEQ_NO"] = dutySeqNo;
    jsonValue["DUTY_STS_SEQ_NO"] = stsSeqno;
        
    jex.web.Ajax("duty0003_02", jsonValue, function(data) {
        if(!jex.web.isError(data)) {
            //alert(data.REC[0].OPINION);
            $("#modifyDutyFrm").find("label[id=STS_USER_INFO]").text(data.REC[0].HANDLE_USER_DEPT_NM+" "+data.REC[0].HANDLE_USER_NM+"("+data.REC[0].HANDLE_USER_ID+")");
            $("#modifyDutyFrm").find("input[id=HANDLE_PLAN_DATE]").val(gw.date.format(data.REC[0].HANDLE_PLAN_DATE, "yyyyMMdd", "yyyy-MM-dd"));
            $("#modifyDutyFrm").find("#DIV_GRP_CD").val(data.REC[0].STS);
            $("#modifyDutyFrm").find("#DUTY_STS_SEQ_NO").val(stsSeqno);
            $("#modifyDutyFrm").find("#OPINION").val(data.REC[0].OPINION);
            //alert(JSON.stringify(data.STS_ATTFILE_REC[0]));
            var attfileHtml = "";
            $.each(data.STS_ATTFILE_REC, function(i){
                attfileHtml += "<option value='"+data.STS_ATTFILE_REC[i].ATTFILE_SEQ_NO+"'>"+data.STS_ATTFILE_REC[i].FILE_NM+"</option>";
            });
            
            //alert(attfileHtml);
            $("#modifyDutyFrm").find("#ATTFILE_SEQ_NO").html(attfileHtml);
            
        }
    },"jct");

    $("#modifyDutyLayer").draggable();
    $("#modifyDutyLayer").show();
};


gw.ui.openDutyDetailLayer = function(usefacSeqNo, dutySeqNo, stsSeqno) {
    // 모든 폼초기화
    $("#detailDutyFrm").each(function(){     
        this.reset();   
    }); 
    
    var jsonValue = {};
    jsonValue["USEFAC_SEQ_NO"] = usefacSeqNo;
    jsonValue["DUTY_SEQ_NO"] = dutySeqNo;
    jsonValue["DUTY_STS_SEQ_NO"] = stsSeqno;
        
    jex.web.Ajax("duty0003_02", jsonValue, function(data) {
        if(!jex.web.isError(data)) {
            $("#detailDutyFrm").find("#STS_USER_INFO").text(data.REC[0].HANDLE_USER_DEPT_NM+" "+data.REC[0].HANDLE_USER_NM+"("+data.REC[0].HANDLE_USER_ID+")");
            $("#detailDutyFrm").find("#HANDLE_PLAN_DATE").text(gw.date.format(data.REC[0].HANDLE_PLAN_DATE, "yyyyMMdd", "yyyy-MM-dd"));
            $("#detailDutyFrm").find("#DIV_GRP_CD").text(data.REC[0].STS_NM);
            $("#detailDutyFrm").find("#DUTY_STS_SEQ_NO").val(stsSeqno);
            $("#detailDutyFrm").find("#OPINION").val(data.REC[0].OPINION);
            var attfileHtml = "";
            $.each(data.STS_ATTFILE_REC, function(i){
                attfileHtml += "<a href=\"/comm0008_01.act?USEFAC_SEQ_NO="+usefacSeqNo+"&ATTFILE_SEQ_NO="+data.STS_ATTFILE_REC[i].ATTFILE_SEQ_NO+"\"><img src='/proto/web/img/comm/etc/ico_file.gif' alt='' />"+data.STS_ATTFILE_REC[i].FILE_NM+"</a>";
            });
            
            $("#detailDutyFrm").find("#ATTFILE_SEQ_NO").html(attfileHtml);
            
        }
    },"jct");

    $("#detailDutyLayer").draggable();
    $("#detailDutyLayer").show();
};



