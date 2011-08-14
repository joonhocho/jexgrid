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

