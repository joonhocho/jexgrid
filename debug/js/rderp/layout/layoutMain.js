/*******************************************************************************
 * Copyright (c) 2010 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/
var _jex_page_id;
var _jex_layout_global_var = {};
var tMenuList = {};

$(function() {
	jex.web.Ajax("comm_0001_01_r005", {}, function(data) {
		tMenuList = data.MENU_JSON.REC;//[0].sub;
		jex.tabs.make($("#tabs"));		
		_jex_layout_global_var['menu'] = data.MENU_JSON;
		/**
		 * 상단메뉴를 그린다.
		 */
		
		$.each(tMenuList, function(i, v) {
			var first_sub = _getFirstData(v);
			$menu = $("<a></a>");
			$menu.attr("id", v.id);
			$menu.attr("url", v.url); 

			
			if (first_sub!=undefined) {
				$menu.attr("f_sub_id", first_sub.id);
				$menu.attr("f_sub_nm", first_sub.name);
				$menu.attr("f_sub_url",first_sub.URL);
				
			}
			
			$menu.text(v.name);
			$li = $("<li style='cursor:pointer'></li>");
			
			$menu.click( function() { 
				
				if ($(this).attr("f_sub_url")==null || $(this).attr("f_sub_url")==undefined) {
					alert("정의된 메뉴의 URL을 찾지 못하였습니다. ID ::["+$(this).attr("id")+"]");
					return false;
				}
				
				_jex_page_id = jex.tabs.add($("#tabs"), $(this).attr("f_sub_id"), $(this).attr("f_sub_nm"), "/" + $(this).attr("f_sub_url"));
			});			
						
			$li.append($menu);
			$("#topmenubar").find("UL").append($li);
			
		});

		
	}, "jct", false);
		
	/**
	 * 배너에 대해서 tab을 띄워준다.
	 */
	$("#header").find("#logo").click(function() {
//		openTab("main", "메인화면", "rtask_0001_01.act");
//		openTab(boardSub01[0].id, boardSub01[0].name ,"main_0007_01.act");
	});

	/**
	 * 페이지 로딩시 현황탭 오픈
	 */
	$("#header").find("#logo").click();
	

	$("#scrollLeft").click(function() {
		if ($("#tabs").find("#multitab").find("UL").width()>=$("#tabs").find("#multitab").width())  {
			$("#tabs").find("#multitab").find("UL").find("LI").animate( {
				"left" : "-="+$("#tabs").find("#multitab").find("UL").find("LI:first").width()
			}, "fast");
		}
	});

	$("#scrollRight").click(function() {
		if ($("#tabs").find("#multitab").find("UL").find("LI").position().left < 0) {
			$("#tabs").find("#multitab").find("UL").find("LI").animate( {
				"left" : "+="+$("#tabs").find("#multitab").find("UL").find("LI:first").width()
			}, "fast");
		}
	});
	
	
	/**
	 * 로그아웃 
	 */
	$("#layoutMain_btn_logout").click(function(){
		jex.web.Ajax("comm_logout", {} , function(data) {
			jex.web.info("WM0042", function(){
				$("#frm01").attr("method", "post");
				$("#frm01").attr("action", "main_0001_01.act");
				jex.web.doSubmit("frm01",false);
			});
		},"jct");
	});
	

	/*******************************************************
	 * 위임자전환 클릭시
	 *******************************************************/
	$("#mand_change").click(function(){
		uf_newWin('/rbase_0001_03.act','newWin',500,450);
	});

	
	/**
	 * 사용자 검색
	 
	$("#layoutMain_btn_logout").click(function(){
				
		uf_newModalDialog('comm0006_01.act',prarmObject, 985, 560);
		getDataList("C");
		
	});*/

	openTab("rmain_0001_01", "메인화면", "/rmain_0001_01.act");
	
	//메인화면을 제외한 탭닫기
	$("#tabAllClose").click(function() {
		var $menuList	=$("#multitab").find("UL").find("LI");
		$.each($menuList, function(i,v){
			if( v.id != "rmain_0001_01" ) {
				jex.tabs.close($("#tabs"),v.id);
			}
		});
	});
	
});

function openTab(id, name, url) {
	_jex_page_id = jex.tabs.add($("#tabs"), id, name, url);
};

function loadTab(id, name, url) {
	// openTab이 있으므로 의미없음.
	_jex_page_id = jex.tabs.close($("#tabs"), id);
	_jex_page_id = jex.tabs.add($("#tabs"), id, name, url);
};

function closeTab(id) {
	_jex_page_id = jex.tabs.close($("#tabs"), id);
}

function _getFirstData(d) {
	var result;
	if (!isNaN(d.length)) {
		if (d.length==0) return undefined;
		$.each(d, function(i,v) {
			if (v.type=="folder")	{
				result = _getFirstData(v.sub);
				if (result==undefined)	return true;
				else					return false;
			} else {
				result = v;
				return false;
			}
		});
	} else {
		if (d.type=="folder")	result = _getFirstData(d.sub);
		else					result = d;
	}
	return result;
};

function uf_MandIdLogOut(p_id,p_MandId){
	jex.web.Ajax("comm_logout", {} , function(data) {
		uf_MandInLogIn(p_id,p_MandId);
	},"jct");
}
function uf_MandInLogIn(data,data2){
	jex.web.Ajax("main_0001_01_r001", {USEFAC_SEQ_NO: gUsefacSeqNo ,MAND_USER_ID:data2, USER_ID:data, USER_PW:"", LOGIN_GB:"2"}, function(data) {
		$("#frm01").attr("method", "post");
		$("#frm01").attr("action", "rderp_layoutMain.act");
		jex.web.doSubmit("frm01",false);
	},"jct");
	
}