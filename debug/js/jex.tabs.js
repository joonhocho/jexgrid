/**
 * 전역변수 선언
 * Jex TAB에서 사용하는 전역변수를 선언한다.
 * 전역변수는 _globalJexVar 이라는 변수에 JSON형태로 저장한다.
 */

var _globalJexTabVar = {
						JEX_TAB_CLS_SELECT	:"mul_tab_on",
						JEX_TAB_CLS_UNSELECT:"mul_tab",
						JEX_TAB_TEMPLETE	:"<li id=\"%ID%\" class=\"mul_tab\" style=\"cursor:pointer\" target=\"%TARGET%\"><a class=\"mul_txt\">%NAME%</a><a class=\"mul_btn\"><img id='close' src=\"img/groupware/btn_multitabx.gif\"/></a></li>",
						JEX_TAB_M_TEMPLETE	:"<li id=\"%ID%\" class=\"mul_tab\" style=\"cursor:pointer\" target=\"%TARGET%\"><a class=\"mul_txt\">%NAME%</a></li>"
					};
var _globalJexSelectId = "";

var _jex_title = "";
//var _jex_title_prefix	= "GROUPWARE -- ";
var _jex_title_prefix	= "";
var _jex_title_postfix	= "";

/**
 * DIV안에 UL/LI가 존재해야 한다.
 * LI의 TARGET ATTRIBUTE는 DIV안에 존재하는 DIV ID이다.
 */
$(function(){
	// Load시 처리되어야 할 로직이 존재한다면. 이 부분에 작성
});

/**
 *  JS클래스 생성
 */
var jex;
if (jex==null || jex==undefined) jex = function(){};
jex.tabs = function(){};

/**
 * TAB을 생성한다.
 */
jex.tabs.make = function($div) {
	var $menuList	= $div.find("#multitab").find("UL").find("LI");
	var $divList	= $div.find("#tab_body").find("DIV");
	jex.tabs.hideAll($div);

};

/**
 * ** 외부에서 특별한 사항이 아니면 호출 하지 않도록 권고 **
 * 1. TAB에 CLASS(UN_SELECT)를 입혀준다.
 * 2. 각 DIV를 숨긴다.
 */
jex.tabs.hideAll = function($div) {
	var $menuList	= $div.find("#multitab").find("UL").find("LI");
	var $divList	= $div.find("#tab_body").find("DIV");
	$.each($menuList, function(i,v){
		$(this).find("img").attr("src", "img/groupware/btn_multitabx.gif");
		$(this).attr("class", _globalJexTabVar.JEX_TAB_CLS_UNSELECT);
	});
	$.each($divList, function(i,v){ $(this).hide(); });
};

/**
 * 새로운 메뉴를 탭에 추가한다.
 */
jex.tabs.add = function($div, id, name, url,fn) {
	
	if ($div.find("ul").find("#"+id).length > 0) {

		jex.tabs.close($div,id);
		
		/**
		//		var yn = confirm("이미 존재하는 TAB입니다. 해당 TAB으로 이동 하시겠습니까?");
		var yn = true;
		if (yn) jex.tabs.select($div, id);
		
		window.frames["ifr"].location.reload();
		
		return;
		 **/		
	}
	
	if ($div.find("ul").find("#"+id).length > 0) {
		//top.frames["ifr_"+id].location.reload();
		
		//alert(typeof(top.frames["ifr_"+id].location.href));
		
		//if(typeof(top.frames["ifr_"+id].location.href) != "undefined") {
		try {
			top.frames["ifr_"+id].location.href = url;
		}
		catch(e) {
			$(top.frames["ifr_"+id]).attr("src", url);
		}
		
		jex.tabs.select($div, id);
		
		/*
		$.get("/loadIfr.act?KEY="+id, function(data) {
			$div.find("#tab_body").find("#"+targetId).html(data);
			
			var ifr = $div.find("#tab_body").find("#"+targetId).find("iframe");
			ifr.attr("src",url);
			top.frames["ifr_"+id].location.reload();  
			
			jex.tabs.select($div, id);
			
			//Drag&Drop
			$div.find("#multitab").find("UL").sortable();
			$div.find("#multitab").find("UL").disableSelection();
		});
		*/
		return;
	}

	var targetId= "tar_"+id;
	var liStr 	= _globalJexTabVar.JEX_TAB_TEMPLETE.replace(/%NAME%/g, name).replace(/%ID%/g, id).replace(/%TARGET%/g, targetId);
	if (id == "rmain_0001_01") {
		liStr 	= _globalJexTabVar.JEX_TAB_M_TEMPLETE.replace(/%NAME%/g, name).replace(/%ID%/g, id).replace(/%TARGET%/g, targetId);
	}
	var div		= "<div id=\""+targetId+"\" name='"+name+"'></div>";
	
	$div.find("#multitab").find("UL").append(liStr);
	$div.find("#tab_body").append(div);
	$div.find("#multitab").find("UL").find("#"+id).click(function() {
		jex.tabs.select($div,id);
	});
	$div.find("#multitab").find("UL").find("#"+id).find("#close").click(function() {
		jex.tabs.close($div,id);
	});
	/**
	 * IFRAME을 LOAD 한다.
	 */
	$.get("/loadIfr.act?KEY="+id, function(data) {
		$div.find("#tab_body").find("#"+targetId).html(data);
		$div.find("#tab_body").find("#"+targetId).find("iframe").attr("src",url);
		jex.tabs.select($div, id);
		
		//Drag&Drop
		$div.find("#multitab").find("UL").sortable();
		$div.find("#multitab").find("UL").disableSelection();
	});
	if ($div.find("#multitab").find("UL").width()+$div.find("#multitab").find("UL").find("LI:first").width()>=$div.find("#multitab").width()) {
		$div.find("#multitab").find("UL").width($div.find("#multitab").find("UL").width()+$div.find("#multitab").find("UL").find("LI:first").width());
//		$div.find("#multitab").find("UL").find("LI").animate( { "left" : "-="+$div.find("#multitab").find("UL").find("LI:first").width() }, "fast");
	}
	_jex_page_id = targetId;
	return targetId;
};

/**
 * 탭을 선택한다.
 */
jex.tabs.select = function($div, id) {

	_jex_page_id = "tar_" + id;
	_jex_title = $(document.body).find("#"+$.trim(_jex_page_id)).attr("name");

	document.title = _jex_title_prefix + _jex_title + _jex_title_postfix;
	
	//alert($("#content").find(".content_box").find("h1:first").html());
	var tab	  = $div.find("#multitab").find("UL").find("#"+id);
	var divId = tab.attr("target");
	jex.tabs.hideAll($div);
	$div.find("#multitab").find("UL").find("#"+id).attr("class", _globalJexTabVar.JEX_TAB_CLS_SELECT);
	$div.find("#multitab").find("UL").find("#"+id).find("img").attr("src", "img/groupware/btn_multitabx_on.gif");
	$div.find("#tab_body").find("#"+divId).show();
	_globalJexSelectId = id;
	
	if ( id == "menu_id_80" ) {
		var $frameTest = $("#tar_menu_id_80").find("iframe");
		if(typeof($frameTest[0].contentWindow.fnGoTabPage) != "undefined") {
			//$frameTest[0].contentWindow.fnGoTabPage("01");
			$frameTest[0].contentWindow.fnGoTabPageFind();
		}	
	}	
};


/**
 * 탭을 닫는다.
 */
jex.tabs.close = function($div, id) {
	var tab	  = $div.find("#multitab").find("UL").find("#"+id);
	var divId = tab.attr("target");
	var nextTab = $div.find("#multitab").find("UL").find("#"+id).next();
	if (nextTab.length < 1)  nextTab = $div.find("#multitab").find("UL").find("#"+id).prev();
	
	//해당 TAB을 삭제1
	$div.find("#tab_body").find("#"+divId).remove();
	$div.find("#multitab").find("UL").find("#"+id).remove();
	if ($div.find("#multitab").find("UL").width()>=$("#tabs").find("#multitab").width()) $div.find("#multitab").find("UL").width($div.find("UL").find("#multitab").width()-$div.find("#multitab").find("UL").find("LI:first").width());
	if (nextTab.length > 0 && _globalJexSelectId == id) jex.tabs.select($div, nextTab.attr("id"));
};