var _jex_page_id;
var _jex_menu_seq = 0;
var _jex_title = "";
var _jex_title_prefix       = "";
var _jex_title_postfix  = "";
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
    var id       = filename.split(".")[0];
    
    // 수입결의서 등록
    if( id == "rexpe_0009_02" ) {
        id = "rexpe_0009_01";
    }
    
    // 수정세금계산서
    if( id == "revid_0002_06" || id == "revid_0002_07" || id == "revid_0002_08" || id == "revid_0002_09") {
        id = "revid_0002_01";
    }   
    
    // 공지사항
    if( id == "board0001_01" || id == "board0002_01") {
        id = "board0016_01";
    }       
    
    /*
    if (id.indexOf("base") > -1) {
        alert(id);
    }
    */
    
    // 사용자관리
    if( id == "base_0003_02" || id == "base0003_04") {
        id = "base0013_01";
    }   
    
    // 연구소 현황 조회 tab메뉴 이동시 레프트 메뉴를 잡아주기 위해 코드 추가
    if( id == "rwork_0028_01" || id == "rwork_0029_01" || id == "rwork_0030_01" || id == "rwork_0031_01" || id == "rwork_0032_01" || id == "rwork_0033_01" )
        id = "rwork_0027_01";
    setLeftMenu(id);
    
});


function setLeftMenu(id, name) {
    getMenuSeq(parent.tMenuList, id);
    var menuseq  = _jex_menu_seq;

    var menu     = parent.tMenuList[menuseq].sub;
    if (name==undefined) name    = parent.tMenuList[menuseq].name;
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
    var menuseq  = _jex_menu_seq;

    var menu     = parent.tMenuList[menuseq].sub;
    if (name==undefined) name    = parent.tMenuList[menuseq].name;

    $("#_jex_left_title").html(name); //왼쪽메뉴 메뉴 명을 기입해준다.
    
    ///////////////////////////////////////////////
    // Location 설정 하는 부분
    ///////////////////////////////////////////////     
    getLocation(id, name, _jex_title);
    $("#Left_Menu").jexTree('make', {onclick:function(opt) { var url=opt.url; if (url==undefined || url==null) url=opt.id+".act"; parent.openTab(opt.id, opt.name, "/"+url+_url_post_fix); } });
    $("#Left_Menu").jexTree('addList', menu);
}


function getMenuSeq(list, id) {
//  alert(list);
    var result = false;
    $.each(list, function(i,v) {
        if (v.type=="folder") {
            result = getMenuSeq(v.sub, id);
            if (result) {
                _jex_menu_seq = i;
                return false;
            } else  {
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
