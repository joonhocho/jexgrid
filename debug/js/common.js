/*
if (top.location.href.indexOf("dev." > -1)) {
    if (window.location.href.indexOf("index.jsp") < 0 && window.location.href.indexOf("menuManage.jsp") < 0) document.write('<div style="position: absolute; width: 209px; height: 34px; z-index: 2; left: 10px; top: 10px; border:1" id="layer1"><font color="#00FFFF" size="3"><b>DEV SITE</b></font></div>');
}
*/
if (document.getElementById && !document.all){
    var isNS = true;
    var isIE = false;
}
else{
    var isIE = true;
    var isNS = false;
}

if(!window.event && window.captureEvents) {
  // set up event capturing for mouse events (add or subtract as desired)
  window.captureEvents(Event.MOUSEOVER|Event.MOUSEOUT|Event.CLICK|Event.DBLCLICK);
  // set window event handlers (add or subtract as desired)
  window.onmouseover = WM_getCursorHandler;
  window.onmouseout = WM_getCursorHandler;
  window.onclick = WM_getCursorHandler;
  window.ondblclick = WM_getCursorHandler;
  // create an object to store the event properties
  window.event = new Object;
}


var USE_PRINT = false;

/* 마우스 선택 부분 2바이트로 변환 시작 */
copyBool=false;
var copiedtext="";

/*
    select box 의 text 중 일치하는 항목을 찾아서 select한다.

    searchText          : 찾으려고 하는 text 값
    targetSelectBoxID   : searchText를 찾기 위한 select box 의 id
*/
function selectOptionValue(searchText, targetSelectBoxID){
    var toptions    = document.getElementById(targetSelectBoxID);
    var str         = searchText;

    if (str != '') {
        for (var idx= 0 ; idx < (toptions.options.length); idx++){

            if (toptions.options[idx].text.indexOf(str) > -1){
                toptions.options[idx].selected = true;
            }
            else{
                toptions.options[idx].selected = false;
            }
        }
    }

}

// select box 의 option들을 모두 삭제한다.
function deleteAllOptions(selectBoxObject) {

    var selObj = selectBoxObject;
    selObj.options.length = null;
    /*
    for (var r=0; r<selObj.options.length; r++) {
        selObj.options.length = null;
    }
    */
}

// select box 에 option을 추가한다.
function appendOption(selectBoxObject, optionValue, optionText) {
    var selObj = selectBoxObject;
    selObj.options[selObj.options.length] = new Option(optionText, optionValue);
    /*
    var optObj = document.createElement("OPTION");

    optObj.text = optionText;
    optObj.value = optionValue;
    selObj.options.add(optObj);
    */
}


/*
    select box 의 text 중 처음 일치하는 항목을 찾아서 select한다.

    searchText          : 찾으려고 하는 text 값
    targetSelectBoxID   : searchText를 찾기 위한 select box 의 id
*/
function searchOptionValue(searchText, targetSelectBoxID  ){
    var toptions    = document.getElementById(targetSelectBoxID);
    var str         = searchText;

    toptions.selectedIndex = -1;

    if (str != '') {
        for (var idx= 0 ; idx < (toptions.options.length); idx++){

            if (toptions.options[idx].text.indexOf(str) == 0){
                toptions.options[idx].selected = true;
                break;
            }
            else{
                toptions.options[idx].selected = false;
            }
        }
    }

}

function initiatecopy() {
    copyBool=true;
}

// 선택 부분 카피하여 클립보드에 붙임
function copyit() {
    if (copyBool) {
        copiedtext = "";
        document.execCommand("Copy");
        if(window.clipboardData.getData("Text") != ''){
            copiedtext=window.clipboardData.getData("Text");
        }
        copyBool=false;
    }
}

// 클릭하여 드래그한 부분 2바이트로 반환
    function clickHalf2Full(){
        var ctrl = window.event.ctrlKey;
        var shift = window.event.shiftKey;
        var obj_full = this;
        var temp_copy;
        var org_value;
        if(ctrl && shift && event.keyCode == 38){
            initiatecopy();
            copyit();
            org_value = obj_full.value;
            temp_copy = copiedtext;
            if(temp_copy != null && temp_copy.replace(/ /gi,"") != ''){
                this.value = org_value.substring(0,org_value.indexOf(copiedtext)) + Half2Full(copiedtext) + org_value.substring(org_value.indexOf(copiedtext)+copiedtext.length);
                window.clipboardData.setData("Text","");
            }
        }
    }

/* 마우스 선택 부분 2바이트로 변환 끝 */

function WM_getCursorHandler(e) {
  // set event properties to global vars (add or subtract as desired)
  window.event.clientX = e.pageX;
  window.event.clientY = e.pageY;
  window.event.x = e.layerX;
  window.event.y = e.layerY;
  window.event.screenX = e.screenX;
  window.event.screenY = e.screenY;
  // route the event back to the intended function
  return false;
  if ( routeEvent(e) == false ) {
    return false;
  } else {
    return true;
  }
}

// select box에 선택된 value를 리턴한다.(단 multi select는 지원 안함)
function getSelectBoxValue(obj)
{
    var options = obj.options;
    for(var i=0; i<options.length; i++) {
        if (options[i].selected) {
            return options[i].value;
        }
    }
}


// select box에 선택된 text를 리턴한다.(단 multi select는 지원 안함)
function getSelectBoxText(obj)
{
    var options = obj.options;
    for(var i=0; i<options.length; i++) {
        if (options[i].selected) {
            return options[i].text;
        }
    }
}

function initDocument(width, height)
{
    if ( typeof document.appletmain == "undefined" )  return;

    if(document.appletmain.isActive())
    {
        document.all("appletmain").style.visibility = "visible";
        document.all("appletmain").style.width = width;
        document.all("appletmain").style.height = height;
    }
    else
    {
        setTimeout("initDocument('" + width + "','" + height + "');",1);
    }
}



function initDocument1(width, height)
{
    if ( typeof appletmain1 == "undefined" )  return;

    if(appletmain.isActive())
    {
        document.all("appletmain1").style.visibility = "visible";
        document.all("appletmain1").style.width = width;
        document.all("appletmain1").style.height = height;
    }
    else
    {
        setTimeout("initDocument1('" + width + "','" + height + "');",1);
    }
}

// 캐릭터 타입 검증 'H'-한글, 'E'-영문, 'N'-숫자, 'Z'-기타
function getCharType(pValue){
    var bHan = false;
    var bAlp = false;
    var bNum = false;
    var bEtc = false;

    var retStr="";

    if(isEmpty(pValue)){
        return "";
    }

    for(var idx=0; idx < pValue.length; idx++){
        if (isAlpha(pValue[idx])) {
            bAlp = true;
        }
        else if (isNum(pValue[idx])) {
            bNum = true;
        }
        else if (isHangul(pValue[idx])) {
            bHan = true;
        }
        else {
            bEtc = true;
        }

        if (bHan) retStr = retStr + "H";
        if (bAlp) retStr = retStr + "E";
        if (bNum) retStr = retStr + "N";
        if (bEtc) retStr = retStr + "Z";
    }

    return retStr;
}

// 미암호화 분기
function go_pass(sUrl, sTarget){
    if (sTarget == null) {
        sTarget = "_self";
    }
    tempPassForm.target = sTarget;
    tempPassForm.action = sUrl;
    tempPassForm.submit();
}

// 암호화 분기
function go_tempPass(sUrl, sTarget){
    if (sTarget == null) {
        sTarget = "_self";
    }
    tempPassForm.target = sTarget;
    tempPassForm.action = sUrl;
    go_encSubmit(tempPassForm);
}


//새창 여는 함수
function uf_newWin( url, winName, sizeW, sizeH, frm)
{
    
    if(frm=="" || frm=="undefined" || frm==undefined) frm = document.frm;
    
    if(winName=="" || winName=="undefined") winName = "Default";

    var nLeft  = screen.width/2 - sizeW/2 ;
    var nTop  = screen.height/2 - sizeH/2 ;

    opt = ",toolbar=no,menubar=no,location=no,scrollbars=yes,status=yes,resizable=yes";
    window.open('', winName, "left=" + nLeft + ",top=" +  nTop + ",width=" + sizeW + ",height=" + sizeH  + opt );
    
    frm.target = winName;
    frm.action = url;
    frm.method = "post";

    fn_submit(frm);

}




//새창 여는 함수
function uf_newModalWin( url, winName, sizeW, sizeH)
{
    var nLeft  = screen.width/2 - sizeW/2 ;
    var nTop  = screen.height/2 - sizeH/2 ;



    opt = "scroll=no;status=no;help=no;resizable:no;";
    window.showModalDialog(url, winName, "dialogWidth=" + sizeW + "px;dialogHeight="  +sizeH + "px;dialogLeft=" + nLeft + ";dialogTop=" + nTop + ";" + opt);

}





//새창 여는 함수
function uf_frmNewWin( url, winName, sizeW, sizeH)
{
    var nLeft  = screen.width/2 - sizeW/2 ;
    var nTop  = screen.height/2 - sizeH/2 ;
    var pos = 0;
    var winObj;

    opt = ",toolbar=no,menubar=no,location=no,scrollbars=no,status=no, resizable = yes";
    winObj = window.open("", winName, "width=" + sizeW + ",height=" + sizeH  + opt );

    if (winObj == null) {
        alert("팝업차단 기능을 해지하십시오.\n\n[ 도구->인터넷옵션->개인 정보->팝업차단] 체크해지");
        return;
    }


    document.frm.target = winName;
    document.frm.action = url;
    document.frm.submit();

}


//새창 여는 함수
function uf_frmNewWin2(userFrm, url, winName, sizeW, sizeH)
{
    var nLeft  = screen.width/2 - sizeW/2 ;
    var nTop  = screen.height/2 - sizeH/2 ;
    var pos = 0;
    var winObj;

    opt = ",toolbar=no,menubar=no,location=no,scrollbars=no,status=no, resizable = no";
    winObj = window.open("", winName, "width=" + sizeW + ",height=" + sizeH  + opt );

    if (winObj == null) {
        alert("팝업차단 기능을 해지하십시오.\n\n[ 도구->인터넷옵션->개인 정보->팝업차단] 체크해지");
        return;
    }


    userFrm.target = winName;
    userFrm.action = url;
    userFrm.submit();

}



//새창 사이즈 정함
function uf_reSize ( sizeW, sizeH)
{
    window.resizeTo( sizeW, sizeH );
    moveCenter();

}

// 화면을 중앙으로 이동
function moveCenter() {
   if (document.layers) {
       var sinist = screen.width / 2 - outerWidth / 2;
       var toppo = screen.height / 2 - outerHeight / 2;
   } else {
       var sinist = screen.width / 2 - document.body.offsetWidth / 2;
       var toppo = -55 + screen.height / 2 - document.body.offsetHeight / 2;
   }
   self.moveTo(sinist, toppo);
}

//옵션이 있는경우

function selDataChange(form) {
  var DataIndex=form.url.selectedIndex;
  if (form.url.options[DataIndex].value != null) {
       location=form.url.options[DataIndex].value;
  }
}

function selDataChange2(form) {
  var DataIndex=form.url2.selectedIndex;
  if (form.url2.options[DataIndex].value != null) {
       location=form.url2.options[DataIndex].value;
  }
}

/**
 * 입력값이 NULL인지 체크
 */
function isNull(input) {
    if (input.value == null || input.value == "") {
        return true;
    }
    return false;
}

/**
 * 입력값에 스페이스 이외의 의미있는 값이 있는지 체크
 * ex) if (isEmpty(form.keyword)) {
 *         alert("검색조건을 입력하세요.");
 *     }
 */
function isEmptyByObj(input) {
    return isEmpty(input.value);
}


/**
 * 입력값에 특정 문자(chars)가 있는지 체크
 * 특정 문자를 허용하지 않으려 할 때 사용
 * ex) if (containsChars(form.name,"!,*&^%$#@~;")) {
 *         alert("이름 필드에는 특수 문자를 사용할 수 없습니다.");
 *     }
 */
function containsChars(input,chars) {
    for (var inx = 0; inx < input.value.length; inx++) {
       if (chars.indexOf(input.value.charAt(inx)) != -1)
           return true;
    }
    return false;
}

/**
 * 입력값이 특정 문자(chars)만으로 되어있는지 체크
 * 특정 문자만 허용하려 할 때 사용
 * ex) if (!containsCharsOnly(form.blood,"ABO")) {
 *         alert("혈액형 필드에는 A,B,O 문자만 사용할 수 있습니다.");
 *     }
 */
function containsCharsOnly(input,chars) {
    for (var inx = 0; inx < input.value.length; inx++) {
       if (chars.indexOf(input.value.charAt(inx)) == -1)
           return false;
    }
    return true;
}
function isStartWith(input,chars) {
    for (var inx = 0; inx < chars.length; inx++) {
       if (chars.indexOf(input.value.charAt(0)) == -1)
           return false;
    }
    return true;
}
/**
 * 입력값이 알파벳인지 체크
 */
function isAlphabet(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 알파벳 대문자인지 체크
 */
function isUpperCase(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 알파벳 소문자인지 체크
 */
function isLowerCase(input) {
    var chars = "abcdefghijklmnopqrstuvwxyz ";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값에 숫자만 있는지 체크
 */
function isNumber(input) {
    var chars = "0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 알파벳,숫자로 되어있는지 체크
 */
function isAlphaNum(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";
    return containsCharsOnly(input,chars);
}

function isBigAlphaNum(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ";
    return containsCharsOnly(input,chars);
}
/**
 * 입력값이 숫자,대시(-)로 되어있는지 체크
 */
function isNumDash(input) {
    var chars = "-0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 숫자,콤마(,)로 되어있는지 체크
 */
function isNumComma(input) {
    var chars = ",0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 사용자가 정의한 포맷 형식인지 체크
 * 자세한 format 형식은 자바스크립트의 'regular expression'을 참조
 */
function isValidFormat(input,format) {
    if (input.value.search(format) != -1) {
        return true; //올바른 포맷 형식
    }
    return false;
}

/**
 * 입력값이 이메일 형식인지 체크
 * ex) if (!isValidEmail(form.email)) {
 *         alert("올바른 이메일 주소가 아닙니다.");
 *     }
 */
function isValidEmail(input) {
//    var format = /^(\S+)@(\S+)\.([A-Za-z]+)$/;
    var format = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;
    return isValidFormat(input,format);
}

/**
 * 입력값이 전화번호 형식(숫자-숫자-숫자)인지 체크
 */
function isValidPhone(input) {
    var format = /^(\d+)-(\d+)-(\d+)$/;
    return isValidFormat(input,format);
}

/**
 * 입력값의 바이트 길이를 리턴
 * ex) if (getByteLength(form.title) > 100) {
 *         alert("제목은 한글 50자(영문 100자) 이상 입력할 수 없습니다.");
 *     }
 */
function getByteLength(input) {
    var byteLength = 0;
    for (var inx = 0; inx < input.value.length; inx++) {
        var oneChar = escape(input.value.charAt(inx));
        if ( oneChar.length == 1 ) {
            byteLength ++;
        } else if (oneChar.indexOf("%u") != -1) {
            byteLength += 2;
        } else if (oneChar.indexOf("%") != -1) {
            byteLength += oneChar.length/3;
        }
    }
    return byteLength;
}

/**
 * 문자열의 바이트 길이를 리턴
 */
function getStringByteLength(str) {
    var byteLength = 0;
    for (var inx = 0; inx < str.length; inx++) {
        var oneChar = escape(str.charAt(inx));
        if ( oneChar.length == 1 ) {
            byteLength ++;
        } else if (oneChar.indexOf("%u") != -1) {
            byteLength += 2;
        } else if (oneChar.indexOf("%") != -1) {
            byteLength += oneChar.length/3;
        }
    }
    return byteLength;
}

/**
 * 입력값에서 콤마를 없앤다.
 */
function removeComma(input) {
    return input.replace(/,/gi,"");
}

/**
 * 선택된 라디오버튼이 있는지 체크
 */
function hasCheckedRadio(input) {
    if (input.length > 1) {
        for (var inx = 0; inx < input.length; inx++) {
            if (input[inx].checked) return true;
        }
    } else {
        if (input.checked) return true;
    }
    return false;
}

/**
 * 선택된 라디오버튼이 있는지 체크
 */
function getCheckedRadioValue(input) {
    if (input.length > 1) {
        for (var inx = 0; inx < input.length; inx++) {
            if (input[inx].checked) return input[inx].value;
        }
    } else {
        if (input.checked) return input.value;
    }
    return false;
}


/**
 * 선택된 체크박스가 있는지 체크
 */
function hasCheckedBox(input) {
    return hasCheckedRadio(input);
}


/**
 * 선택된 체크박스가  몇개인지  그 개수를 반환
 */
function hasMultiCheckedRadio(input) {
var kkkk = 0;
    if (input.length > 1) {
        for (var inx = 0; inx < input.length; inx++) {
            if (input[inx].checked) {
            kkkk++;
            }
        }
    } else {
         if (input.checked) kkkk=1;
    }
    return kkkk;
}

/**
 * 유효한(존재하는) 월(月)인지 체크
 */
function isValidMonth(mm) {
    var m = parseInt(mm,10);
    return (m >= 1 && m <= 12);
}

/**
 * 유효한(존재하는) 일(日)인지 체크
 */
function isValidDay(yyyy, mm, dd) {
    var m = parseInt(mm,10) - 1;
    var d = parseInt(dd,10);

    var end = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
    if ((yyyy % 4 == 0 && yyyy % 100 != 0) || yyyy % 400 == 0) {
        end[1] = 29;
    }

    return (d >= 1 && d <= end[m]);
}

/**
 * 유효한(존재하는) 시(時)인지 체크
 */
function isValidHour(hh) {
    var h = parseInt(hh,10);
    return (h >= 1 && h <= 24);
}

/**
 * 유효한(존재하는) 분(分)인지 체크
 */
function isValidMin(mi) {
    var m = parseInt(mi,10);
    return (m >= 1 && m <= 60);
}

/**
 * Time 형식인지 체크(느슨한 체크)
 */
function isValidTimeFormat(time) {
    return (!isNaN(time) && time.length == 12);
}

/**
 * 유효하는(존재하는) Time 인지 체크
 * ex) var time = form.time.value; //'200102310000'
 *     if (!isValidTime(time)) {
 *         alert("올바른 날짜가 아닙니다.");
 *     }
 */
function isValidTime(time) {
    var year  = time.substring(0,4);
    var month = time.substring(4,6);
    var day   = time.substring(6,8);
    var hour  = time.substring(8,10);
    var min   = time.substring(10,12);

    if (parseInt(year,10) >= 1900  && isValidMonth(month) &&
        isValidDay(year,month,day) && isValidHour(hour)   &&
        isValidMin(min)) {
        return true;
    }
    return false;
}

/**
 * Time 스트링을 자바스크립트 Date 객체로 변환
 * parameter time: Time 형식의 String
 */
function toTimeObject(time) { //parseTime(time)
    var year  = time.substr(0,4);
    var month = time.substr(4,2) - 1; // 1월=0,12월=11
    var day   = time.substr(6,2);
    var hour  = time.substr(8,2);
    var min   = time.substr(10,2);

    return new Date(year,month,day,hour,min);
}

/**
 * 자바스크립트 Date 객체를 Time 스트링으로 변환
 * parameter date: JavaScript Date Object
 */
function toTimeString(date) { //formatTime(date)
    var year  = date.getFullYear();
    var month = date.getMonth() + 1; // 1월=0,12월=11이므로 1 더함
    var day   = date.getDate();
    var hour  = date.getHours();
    var min   = date.getMinutes();

    if (("" + month).length == 1) { month = "0" + month; }
    if (("" + day).length   == 1) { day   = "0" + day;   }
    if (("" + hour).length  == 1) { hour  = "0" + hour;  }
    if (("" + min).length   == 1) { min   = "0" + min;   }

    return ("" + year + month + day + hour + min)
}
/**
 * Time이 현재시각 이후(미래)인지 체크
 */
function isFutureTime(time) {
    return (toTimeObject(time) > new Date());
}

/**
 * Time이 현재시각 이전(과거)인지 체크
 */
function isPastTime(time) {
    return (toTimeObject(time) < new Date());
}

/**
 * 주어진 Time 과 y년 m월 d일 h시 차이나는 Time을 리턴
 * ex) var time = form.time.value; //'20000101000'
 *     alert(shiftTime(time,0,0,-100,0));
 *     => 2000/01/01 00:00 으로부터 100일 전 Time
 */
function shiftTime(time,y,m,d,h) { //moveTime(time,y,m,d,h)
    var date = toTimeObject(time);

    date.setFullYear(date.getFullYear() + y); //y년을 더함
    date.setMonth(date.getMonth() + m);       //m월을 더함
    date.setDate(date.getDate() + d);         //d일을 더함
    date.setHours(date.getHours() + h);       //h시를 더함

    return toTimeString(date);
}

/**
 * 두 Time이 몇 개월 차이나는지 구함
 * time1이 time2보다 크면(미래면) minus(-)
 */
function getMonthInterval(time1,time2) { //measureMonthInterval(time1,time2)
    var date1 = toTimeObject(time1);
    var date2 = toTimeObject(time2);

    var years  = date2.getFullYear() - date1.getFullYear();
    var months = date2.getMonth() - date1.getMonth();
    var days   = date2.getDate() - date1.getDate();

    return (years * 12 + months + (days >= 0 ? 0 : -1) );
}

/**
 * 두 Time이 며칠 차이나는지 구함
 * time1이 time2보다 크면(미래면) minus(-)
 */
function getDayInterval(time1,time2) {
    var date1 = toTimeObject(time1);
    var date2 = toTimeObject(time2);
    var day   = 1000 * 3600 * 24; //24시간

    return parseInt((date2 - date1) / day, 10);
}

/**
 * 두 Time이 몇 시간 차이나는지 구함
 * time1이 time2보다 크면(미래면) minus(-)
 */
function getHourInterval(time1,time2) {
    var date1 = toTimeObject(time1);
    var date2 = toTimeObject(time2);
    var hour  = 1000 * 3600; //1시간

    return parseInt((date2 - date1) / hour, 10);
}

/**
 * 현재 시각을 Time 형식으로 리턴
 */
function getCurrentTime() {
    return toTimeString(new Date());
}

/**
 * 현재 시각과 y년 m월 d일 h시 차이나는 Time을 리턴
 */
function getRelativeTime(y,m,d,h) {

    return shiftTime(getCurrentTime(),y,m,d,h);
}

/**
 * 현재 年을 YYYY형식으로 리턴
 */
function getYear() {

    return getCurrentTime().substr(0,4);
}

/**
 * 현재 月을 MM형식으로 리턴
 */
function getMonth() {

    return getCurrentTime().substr(4,2);
}

/**
 * 현재 日을 DD형식으로 리턴
 */
function getDay() {

    return getCurrentTime().substr(6,2);
}

/**
 * 현재 時를 HH형식으로 리턴
 */
function getHour() {

    return getCurrentTime().substr(8,2);
}

/**
 * 오늘이 무슨 요일이야?
 * ex) alert('오늘은 ' + getDayOfWeek() + '요일입니다.');
 */
function getDayOfWeek() {
    var now = new Date();

    var day = now.getDay(); //일요일=0,월요일=1,...,토요일=6
    var week = new Array('일','월','화','수','목','금','토');

    return week[day];
}


/**
 * 특정날짜의 요일을 구한다.
 */
function getDayOfWeek(time) {
    var now = toTimeObject(time);

    var day = now.getDay(); //일요일=0,월요일=1,...,토요일=6
    var week = new Array('일','월','화','수','목','금','토');

    return week[day];
}


/**
 * 특정날짜의 요일의 배열 값을 구한다.
 */
function getDayOfWeekNum(time) {
    var now = toTimeObject(time);

    var day = now.getDay(); //일요일=0,월요일=1,...,토요일=6

    return day;
}


/**
*   문자열의 오른쪽 끝에서 부터 지정된 개수만큼의 문자들을 리턴한다.
*/

function substrInverse(str, num)
{
    var len;

    len = str.length;

    return str.substr(len - num, num);
}

/**
*  문자열로의 특정위치로부터 지정된 개수의 문자들을 리턴한다.
*/
function substrMid(str, idx, num)
{
    return str.substr( idx-1, num);
}



/**
* Cookie 구하기
*/


function getCookie(uName) {

    var flag = document.cookie.indexOf(uName+'=');
    if (flag != -1) {
        flag += uName.length + 1
        end = document.cookie.indexOf(';', flag)

        if (end == -1) end = document.cookie.length
        return unescape(document.cookie.substring(flag, end))
    }
}

    function Half2Full(HalfVal)
    {
            var arg;
            arg = myHalf2Full(HalfVal);
        return arg;
    }

function myHalf2Full(HalfVal)
{
        var FullChar = [
               "　", "！","＂","＃","＄","％","＆","＇","（",       //33~
        "）","＊","＋","，","－","．","／","０","１","２",      //41~
        "３","４","５","６","７","８","９","：","；","＜",      //51~
        "＝","＞","？","＠","Ａ","Ｂ","Ｃ","Ｄ","Ｅ","Ｆ",      //61~
        "Ｇ","Ｈ","Ｉ","Ｊ","Ｋ","Ｌ","Ｍ","Ｎ","Ｏ","Ｐ",      //71~
        "Ｑ","Ｒ","Ｓ","Ｔ","Ｕ","Ｖ","Ｗ","Ｘ","Ｙ","Ｚ",      //81~
        "［","￦","］","＾","＿","｀","ａ","ｂ","ｃ","ｄ",      //91~
        "ｅ","ｆ","ｇ","ｈ","ｉ","ｊ","ｋ","ｌ","ｍ","ｎ",      //101~
        "ｏ","ｐ","ｑ","ｒ","ｓ","ｔ","ｕ","ｖ","ｗ","ｘ",      //111~
        "ｙ","ｚ","｛","｜","｝","～"                           //121~
        ];
    var stFinal = "";
        var ascii;
        for( i = 0; i < HalfVal.length; i++)
        {
                ascii = HalfVal.charCodeAt(i);
                if( (31 < ascii && ascii < 128))
                {
                  stFinal += FullChar[ascii-32];
                }
                else
                {
                  stFinal += HalfVal.charAt(i);
                }
        }
        return stFinal;
}
function frmMoney(input){
    input.value = putComma(input);
}
function unFrmMoney(input){
    input.value = replace(input.value,",","");
}
function frmDate(input){
    if(input.value=="") return
    input.value = input.value.substring(0,4) + "-" + input.value.substring(4,6) + "-" + input.value.substring(6,8);
}
function unFrmDate(input){
    input.value = replace(input.value,"-","");
}
function frmTime(input){
    input.value = input.value.substring(0,2) + ":" + input.value.substring(2,4) + ":" + input.value.substring(4,6);
}
function unFrmTime(input){
    input.value = replace(input.value,":","");
}
function frmAcct(input){
    input.value = input.value.substring(0,3) + "-" + input.value.substring(3,9) + "-" + input.value.substring(9,14);
}
function unFrmAcct(input){
    input.value = replace(input.value,"-","");
}


function putCashDash(value){
    if(value=="") return ;
    value = value.substring(0,4) + "-" + value.substring(4,8) + "-" + value.substring(8,12)+ "-" + value.substring(12);
    return value;
}

function selectAll(input) {
    for(i=0;i<input.options.length;i++){
        input.options[i].selected=true;
    }
}

// 이중 거래를 방지 하기 위해 처리페이지로 서브밋 전에 호출하여 준다.
/*
function setDupCheckInfo(target_frm)
{
    // 기존 생성된 오브젝트 삭제
    if(target_frm._submit_time != null && target_frm._submit_time != undefined  ) {
        target_frm.removeChild(_submit_time);
    }

    var e=document.createElement("input");
    now = new Date();
    e.setAttribute("type" , "hidden");
    e.setAttribute("name" , "_submit_time");
    e.setAttribute("value", new Date().getTime());
    e.setAttribute("_temp2","true");
    target_frm.appendChild(e);
}
*/

function setSelect(input,str) {
    for(i=0;i<input.options.length;i++){
        if(input.options[i].value == str)
            input.options[i].selected=true;
    }
}
// 외환에서 특정 통화일때 소수점이하 금액없애기
function Curr(str1, str2){
    obj1 = eval("frm."+str1+".value")
    obj2 = eval("frm."+str2+".style")
    if(obj1=="JPY"||obj1=="ITL"||obj1=="BEF"||obj1=="KRW"){
        obj2.display = "none"
    }else{
        obj2.display = ""
    }
}
function Curr2(str1, str2, str3){
    obj1 = eval("frm."+str1+".value")
    obj2 = eval("frm."+str2+".style")
    obj3 = eval("frm."+str3+".style")
    if(obj1=="JPY"||obj1=="ITL"||obj1=="BEF"||obj1=="KRW"){
        obj2.display = "none"
        obj3.display = "none"
    }else{
        obj2.display = ""
        obj3.display = ""
    }
}


/*
* 한미은행 고객번호 세팅(9자리)
* 앞에 '0'을 채운다
* by ysd 2002-03-28 11:36오전
**/

function fill_cifno(obj){
    var temp="";

    if(obj.value == null || obj.value.length < 1 ){
        alert("고객번호를 입력하세요");
        obj.focus();
        return false;
    }
    if(obj.value.length != 9 ){
        for(i=0;i<(9-obj.value.length);i++){
            temp +="0";
        }
        obj.value = temp+obj.value;
    }else{
        obj.value = obj.value;
    }

    return true;
}



////////////////////////////////////////////////////////////////
// 데이터 전송형태 관련
////////////////////////////////////////////////////////////////

// get 방식의 파라미터를 해당폼에 input hidden 객체로 생성한다.
function get2post(frm,sSearch){
    if (sSearch.length > 0) {

        var asKeyValues = sSearch.split('&');
        var asKeyValue  = '';

        for (var i = 0; i < asKeyValues.length; i++) {

            asKeyValue = asKeyValues[i].split('=');
            var e = document.createElement("input");
            e.setAttribute("type","hidden");
            e.setAttribute("name",asKeyValue[0]);
            e.setAttribute("value",asKeyValue[1]);
            e.setAttribute("_temp","true");

//          alert("[" + e.name +"]:[" + e.value +"]");

            frm.appendChild(e);
        }
     }
//   alert("form 객체 갯수" + frm.elements.length);
}

// get2post로 생성한 임시 객체를 파괴한다.
function removeTempAttribute(frm){
    var idx=0;
    while (idx<frm.elements.length) {
        var obj = frm.elements[idx];

        if( obj.getAttribute("_temp") != null && obj.getAttribute("_temp") == "true"){
            frm.removeChild(obj);
            continue;
        }
        idx++;
    }
}



////////////////////////////////////////////////////////////////
// checkbox 관련
////////////////////////////////////////////////////////////////

// check 한 개수를 리턴한다.
function getCheckedCount( aElem ) {

    var elem = document.all;
    var cnt = 0;

    for ( var i=0; i<document.all.length; i++ ) {
        if ( ( elem[i].type == "checkbox" ) && ( elem[i].checked ) && ( elem[i].name == aElem ) )   cnt = cnt + 1;
    }

    return cnt;
}

    // 지정한 이름의 checkbox를 찾아서 주어진 값에 해당하는 box를 check한다.
function checkValue( aElem, aValue ) {

    var elem = document.all;
    var cnt = 0;

    for ( var i=0; i<document.all.length; i++ ) {
        if ( ( elem[i].type == "checkbox" ) && ( elem[i].name == aElem ) && ( elem[i].value == aValue ) )   elem[i].checked = true;
    }
}



// 지정한 이름을 가진 모든 checkbox를 check 한다.
function checkAll( aElem ) {

    var elem = document.all;
    var cnt = 0;

    for ( var i=0; i<document.all.length; i++ ) {
        if ( ( elem[i].type == "checkbox" ) && ( elem[i].name == aElem ) )  elem[i].checked = true;
    }
}

// 지정한 이름을 가진 모든 checkbox를 uncheck 한다.
function uncheckAll( aElem ) {

    var elem = document.all;
    var cnt = 0;

    for ( var i=0; i<document.all.length; i++ ) {
        if ( ( elem[i].type == "checkbox" ) && ( elem[i].name == aElem ) )  elem[i].checked = false;
    }
}

// 지정한 이름을 가진 모든 checkbox의 checked 값을 반전 한다.
function invertCheck( aElem ) {

    var elem = document.all;
    var cnt = 0;

    for ( var i=0; i<document.all.length; i++ ) {
        if ( ( elem[i].type == "checkbox" ) && ( elem[i].name == aElem ) )  {
            if ( elem[i].checked ) {
                elem[i].checked = false;
            }
            else{
                elem[i].checked = true;
            }
        }
    }
}









            ////////////////////////////////
// UTIL 함수
////////////////////////////////

var isDivEvent = false;

function hideOneNav(){
    if (!isDivEvent) {
        window.account.style.visibility='hidden';
    }
    else{
        isDivEvent = false;
    }
}


function showOneNav(obj){
    isDivEvent = true;
    window.account.style.left = getLeftPos(obj);
    window.account.style.top = getTopPos(obj) + obj.offsetHeight - 8;
    window.account.style.visibility='visible';
    return false;
}

function getLeftPos(obj){
    var parentObj = null;
    var clientObj = obj;
    var left = obj.offsetLeft + document.body.clientLeft;

    while((parentObj=clientObj.offsetParent) != null){
        left = left + parentObj.offsetLeft;
        clientObj = parentObj;
    }

    return left;
}

function getTopPos(obj){
    var parentObj = null;
    var clientObj = obj;
    var top = obj.offsetTop + document.body.clientTop;

    while((parentObj=clientObj.offsetParent) != null){
        top = top + parentObj.offsetTop;
        clientObj = parentObj;
    }

    return top;
}

/**
*  문자열에 있는 특정문자패턴을 다른 문자패턴으로 바꾸는 함수.
*/

/*
function replace(targetStr, searchStr, replaceStr)
{
    var len, i, tmpstr;

    len = targetStr.length;
    tmpstr = "";

    for ( i = 0 ; i < len ; i++ ) {
        if ( targetStr.charAt(i) != searchStr ) {
            tmpstr = tmpstr + targetStr.charAt(i);
        }
        else {
            tmpstr = tmpstr + replaceStr;
        }
    }

    return tmpstr;
}
*/

function replace(targetStr, searchStr, replaceStr)
{
    var i=0,j=0;
    if (targetStr == null || searchStr == null || replaceStr == null) return "";

    var tmpStr = "";

    var tlen = targetStr.length;
    var slen = searchStr.length;


    var i=0;
    var j=0;

    while (i < tlen - slen+1)
    {
        j = i + slen;

        if (targetStr.substring(i,j) == searchStr)
        {
            tmpStr += replaceStr;
            i += slen;

        }
        else
        {
            tmpStr += targetStr.substring(i, i + 1);
            i++;
        }



    }

    tmpStr +=  targetStr.substring(i);

    return tmpStr;


}

/**
*  문자열에서 좌우 공백제거
*/

function trim(str)
{
    return replace(str," ","");
}

/**
*   콤마설정.
*/

function putComma(input) {
    var num = input;

    if (num < 0) {
        num *= -1;
        var minus = true
    }else{
        var minus = false
    }

    var dotPos = (num+"").split(".")
    var dotU = dotPos[0]
    var dotD = dotPos[1]
    var commaFlag = dotU.length%3

    if(commaFlag) {
        var out = dotU.substring(0, commaFlag)
        if (dotU.length > 3) out += ","
    }
    else var out = ""

    for (var i=commaFlag; i < dotU.length; i+=3) {
        out += dotU.substring(i, i+3)
        if( i < dotU.length-3) out += ","
    }

    if(minus) out = "-" + out
    if(dotD) return out + "." + dotD
    else return out
}


//월의 끝 일자 얻기
function getEndDate(datestr){

    //널인지?
    if(isEmpty(datestr)){
        return null;
    }

    //숫자인지?
    if(!isNum(datestr)){
        return null;
    }

    //길이가 8자리?
    if(datestr.length != 6){
        return null;
    }

    var yy = Number(datestr.substring(0,4));
    var mm = Number(datestr.substring(4,6));

    //윤년 검증
    var boundDay = "";

    if(mm != 2){
        var mon=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
        boundDay = mon[mm-1];
    }
    else{
        if (yy%4 == 0 && yy%100 != 0 || yy%400 == 0){
            boundDay = 29;
        }
        else{
            boundDay = 28;
        }
    }

    return boundDay;
}

// Left 빈자리 만큼 padStr 을 붙인다.
function lpad(src, len, padStr){
    var retStr = "";
    var padCnt = Number(len) - String(src).length;
    for(var i=0;i<padCnt;i++) retStr += String(padStr);
    return retStr+src;
}

// Right 빈자리 만큼 padStr 을 붙인다.
function rpad(src, len, padStr){
    var retStr = "";
    var padCnt = Number(len) - String(src).length;
    for(var i=0;i<padCnt;i++) retStr += String(padStr);
    return src+retStr;
}


// 전화번호 국번검증
function isValidDDDPhoneNum(dddphonenum)
{

    // 널인가?
    if (isEmpty(dddphonenum)) {
        return null;
    }


    if ( dddphonenum != "02" && dddphonenum != "031" && dddphonenum != "032" && dddphonenum != "033" && dddphonenum != "041" &&
         dddphonenum != "042" && dddphonenum != "043" && dddphonenum != "051" && dddphonenum != "052" && dddphonenum != "053" &&
         dddphonenum != "054" && dddphonenum != "055" && dddphonenum != "061" && dddphonenum != "062" && dddphonenum != "063" &&
         dddphonenum != "064" && dddphonenum != "011" && dddphonenum != "016" && dddphonenum != "017" && dddphonenum != "018" && dddphonenum != "019" && dddphonenum != "010" )
    {

        ERR_MSG = "잘못된 전화번호 국번입니다.";
        return false;
    }

    return true;

}


// 대문자변환
function toUpperCase(str){

    if(isEmpty(str)) return str;
    return str.toUpperCase();
}


// 숫자검증
function isNum(str){

    if(isEmpty(str)) return false;

    for(var idx=0;idx < str.length;idx++){
        if(str.charAt(idx) < '0' || str.charAt(idx) > '9'){
            return false;
        }
    }
    return true;
}


// 영문자검증
function isAlpha(str){

    if(isEmpty(str)) return false;

    for(var idx=0;idx < str.length;idx++){
        if(!((str.charAt(idx) >='a' && str <= 'z') || (str.charAt(idx) >= 'A' && str <= 'Z'))){
            return false;
        }
    }
    return true;
}


// 한글검증
function isHangul(str){

    if(isEmpty(str)) return false;

    for(var idx=0;idx < str.length;idx++){
      var c = escape(str.charAt(idx));
      if ( c.indexOf("%u") == -1 ) {
            return false;
        }
    }
    return true;
}


// 실제길이 반환( 한글 2byte 계산 )
function getByteLength(s){

   var len = 0;
   if ( s == null ) return 0;
   for(var i=0;i<s.length;i++){
      var c = escape(s.charAt(i));
      if ( c.length == 1 ) len ++;
      else if ( c.indexOf("%u") != -1 ) len += 2;
      else if ( c.indexOf("%") != -1 ) len += c.length/3;
   }
   return len;
}


// 빈값인지 리턴한다.
function isEmpty(pValue){
    if (pValue == null || pValue.replace(/ /gi,"") == "") {
        return true;
    }
    return false;
}




//검색날짜 유효기간
function getBoundDate1(yy,mm,dd,stdDate)
{
    var today = new Date();
    today.setYear(stdDate.substring(0,4));
    today.setMonth(stdDate.substring(4,6)-1);
    today.setDate(stdDate.substring(6,8));
    today.setHours(today.getHours());
    today.setMinutes(today.getMinutes());
    today.setSeconds(today.getSeconds());

    yy = Number(yy);
    mm = Number(mm);
    dd = Number(dd);

    var date = new Date();

    var DAY = 24 * 60 * 60 * 1000;

    if ( yy != 0 ){
        date.setTime(today.getTime() + DAY * 365 * yy);
    }

    if ( mm != 0 ){
        date.setTime(today.getTime() + DAY * 30 * mm);
    }

    if ( dd != 0 ){
        date.setTime(today.getTime() + DAY * dd);
    }

    return lpad(new String(date.getYear()),4,'0') + lpad(new String(date.getMonth() + 1),2,'0') + lpad(new String(date.getDate()),2,'0');
}



function getBoundDate(yy, mm, dd) {
    yy = Number(yy);
    mm = Number(mm);
    dd = Number(dd);

    var date = new Date();

    var DAY = 24 * 60 * 60 * 1000;


    if ( yy != 0 ){
        date.setTime(datToday.getTime() + DAY * 365 * yy);
    }

    if ( mm != 0 ){
        date.setTime(datToday.getTime() + DAY * 30 * mm);
    }

    if ( dd != 0 ){
        date.setTime(datToday.getTime() + DAY * dd);
    }

    return lpad(new String(date.getYear()),4,'0') + lpad(new String(date.getMonth() + 1),2,'0') + lpad(new String(date.getDate()),2,'0');
}


//검색날짜 체크
function isVaildTerm(obj,yy,mm,dd)
{
    var datestr = obj.value;


    //널인지?
    if(isEmpty(datestr)){
        return null;
    }

    // 날짜 포맷제거
    obj_removeformat(obj);

    //8자리인지?
    if (getByteLength(datestr) != 8) {
        alert("날짜는 '-'를 제외한 8자리 숫자로 입력하십시오.");
        return false;

    }



    // yy,mm,dd,fromto가 없을 경우
    if (yy == null) yy = 0;
    if (mm == null) mm = 0;
    if (dd == null) dd = 0;

    // 검색날짜 유효기간 가져오기
    var boundDate = getBoundDate(yy,mm,dd);

    if (yy < 0  || mm < 0  || dd < 0) {
        if ( boundDate > datestr) {
            alert("유효하지 않은 검색날짜입니다.\n유효한 날짜는" + boundDate.substring(0,4) + "년 " + boundDate.substring(4,6) + "월 " + boundDate.substring(6) + "일부터 입니다.");
            obj.select();
            return false;
        }
    } else {
        if ( boundDate < datestr) {
            alert("유효하지 않은 검색날짜입니다.\n유효한 날짜는" + boundDate.substring(0,4) + "년 " + boundDate.substring(4,6) + "월 " + boundDate.substring(6) + "일까지 입니다.");
            obj.select();
            return false;
        }
    }


    return true;

}


//오늘날짜
function getToDay()
{

    var date = new Date();

    var year  = date.getFullYear();
    var month = date.getMonth() + 1; // 1월=0,12월=11이므로 1 더함
    var day   = date.getDate();

    if (("" + month).length == 1) { month = "0" + month; }
    if (("" + day).length   == 1) { day   = "0" + day;   }

    return ("" + year + month + day)

}



function selectComboBox(targt, optValue)
{
    last = targt.length;
    for(var i=0; i<last; i++){
        if(targt.options[i].value == optValue){
            targt.selectedIndex = i;
            targt.options[i].selected;
        }
    }
}


function isExistsComboBoxValue(targt, optValue)
{
    last = targt.length;
    for(var i=0; i<last; i++){
        if(targt.options[i].value == optValue){
            return true;
        }
    }
    return false;
}



// 콤보박스로 날짜입력
function getCal(frmName, yearFieldName, monthFieldName, dayFieldName){

var schdate = yearFieldName.value + "" + monthFieldName.value + "" + dayFieldName.value;
window.open("/comm/comm01_03_01p.jsp?frmName=" + frmName.name + "&yearFieldName=" + yearFieldName.name + "&monthFieldName=" + monthFieldName.name + "&dayFieldName=" + dayFieldName.name + "&schdate=" + schdate,"Window2","status=no,height=180,width=160,resizable=no,left="+window.event.screenX+",top="+window.event.screenY+",scrollbars=no");
}




/*
* 한미은행 사업자번호 세팅(10자리)
* 앞에 '0'을 채운다
* by lsj 2002-06-19 3:56오후
**/

function fill_corpno(obj){
    var temp="";

    if(obj.value == null || obj.value.length < 1 ){

        return false;
    }
    if(obj.value.length != 10 ){
        for(i=0;i<(10-obj.value.length);i++){
            temp +="0";
        }
        obj.value = temp+obj.value;
    }else{
        obj.value = obj.value;
    }

    return true;
}



/*
* 전화번호
* 앞에 '0'을 채운다
* by 황상훈 2002-10-23 11:26오후
**/

function fill_zero(obj, is4){
    var temp="";

    if(obj.value == null || obj.value.length < 1 ) {
        return false;
    }

    if (is4 == 'Y' ) {
        return true;
    } else {
        if(obj.value.length != 4 ) {
            for(i=0;i<(4-obj.value.length);i++){
                temp +="0";
            }
            obj.value = temp+obj.value;
        }else{
            obj.value = obj.value;
        }

        return true;
    }
}

/*
* 예금명을 알맞게 잘라서 화면에 뿌려준다.
*
* by 이성재 2002-11-10 05:04 오후
*/
function cnv_name(name_str) {
    var str=name_str;
//    var re = /ｇｏｏｄｂａｎｋ．ｃｏｍ/g;
    var re = /goodbank.com/g;
    str = str.replace(re, "굿뱅크");
    var re = /\（/;
    str = str.replace(re, "<br>(");
    if(str.indexOf('／') != -1) {
        document.write(str.substring(0,str.indexOf('／')))
    } else {
        document.write(str)
    }
}



/*
* ip 형식에 맞는 데이터인지 검증
*/
function isValidIP(v) {
    return (v.search(/^\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}$/) > -1);
}





function setUserInfo(frm, userIfrm, cnt) {
    if (cnt == 0 ) return;
    else if (cnt == 1) {
        createObject(frm, "director_seq", userIfrm.frm.director_seq.value);     // 담당자
        createObject(frm, "nm", userIfrm.frm.nm.value);                         // 성명
        createObject(frm, "part", userIfrm.frm.part.value);                     // 직급
        createObject(frm, "office_tel", userIfrm.frm.office_tel.value);         // 사무실
        createObject(frm, "tel", userIfrm.frm.tel.value);                       // 핸드폰
        createObject(frm, "email", userIfrm.frm.email.value);                   // email
        createObject(frm, "memo", userIfrm.frm.memo.value);                     // 주요담당업무

        if (userIfrm.frm.admin_seq.checked)    createObject(frm, "admin_seq", userIfrm.frm.director_seq.value);

    } else {

        for (var i=0; i< cnt ; i++) {
            createObject(frm, "director_seq", userIfrm.frm.director_seq[i].value);      // 담당자
            createObject(frm, "nm", userIfrm.frm.nm[i].value);                          // 성명
            createObject(frm, "part", userIfrm.frm.part[i].value);                      // 직급
            createObject(frm, "office_tel", userIfrm.frm.office_tel[i].value);          // 사무실
            createObject(frm, "tel", userIfrm.frm.tel[i].value);                        // 핸드폰
            createObject(frm, "email", userIfrm.frm.email[i].value);                    // email
            createObject(frm, "memo", userIfrm.frm.memo[i].value);                      // 주요담당업무

            if (userIfrm.frm.admin_seq[i].checked)    createObject(frm, "admin_seq", userIfrm.frm.director_seq[i].value);

        }

    }

}

function createObject(frm, nm, key) {
        var e = document.createElement("input");
        e.setAttribute("type","hidden");
        e.setAttribute("name",nm);
        e.setAttribute("value",key);
        e.setAttribute("_temp","true");

        frm.appendChild(e);

}

/* 마우스 선택 부분 2바이트로 변환 초기화 시작 */
function half2full_init(){
    for (var idx=0; idx<document.all.tags('INPUT').length; idx++){
        var obj = document.all.tags('INPUT')[idx];
        if(obj.type == "text"){
            if(obj.getAttribute("onkeydown") == null)     obj.onkeydown     = clickHalf2Full;
        }
    }
}
/* 마우스 선택 부분 2바이트로 변환 초기화 끝 */



function httpSyncCall(url, formName) {
    var objReq = null;
    objReq = new ActiveXObject("Microsoft.XMLHTTP");

    objReq.open("POST", url, false);

    objReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    if (formName) {
        objReq.send(Form.serialize(formName));
    }
    else {
        objReq.send("");
    }


    return objReq.responseText;
}


/**
 * 선택된 라디오버튼의 index를 구한다.
 */
function hasCheckedRadioNum(input) {
var kkkk = 0;
    if (input.length > 1) {
        for (var inx = 0; inx < input.length; inx++) {
            if (input[inx].checked) {
            kkkk = inx;
            }
        }
    } else {
         if (input.checked) kkkk=0;
    }
    return kkkk;
}


/**
 * 선택된 라디오버튼의 값을 반환한다.
 */
function getRadioValue(Input) {
    var reData = "";
    if (Input.length > 1) {
        for (var inx = 0; inx < Input.length; inx++) {
            var cutData = "";
            if (Input[inx].checked) {
                cutData = Input[inx].value.split("|");
                reData += cutData[0];
            }
        }
    } else {
        var cutData = "";
        if (Input.checked){
            cutData = Input.value.split("|");
            reData = cutData[0];
        }
    }

    return reData;
}


/**
 * 선택된 라디오버튼의 TEXT값을 반환한다.
 */
function getRadioText(Input) {

    var reData = "";
    if (Input.length > 1) {
        for (var inx = 0; inx < Input.length; inx++) {
            var cutData = "";
            if (Input[inx].checked) {
                cutData = Input[inx].value.split("|");
                reData += cutData[1];
            }
        }
    } else {
        var cutData = "";
        if (Input.checked){
            cutData = Input.value.split("|");
            reData = cutData[1];
        }
    }

    return reData;
}


/**
 * 선택된 체크박스 값을 구분자로 반환한다.
 */
function getCheckboxValue(Input, delim) {
    var reData = "";


    if (Input.length > 1) {
        for (var inx = 0; inx < Input.length; inx++) {
            var cutData = "";
            if (Input[inx].checked){
                cutData = Input[inx].value.split("|");
                reData += cutData[0]+delim;
            }
        }
        reData = reData.substring(0,reData.length-1);
    } else {
        if (Input.checked){
            cutData = Input.value.split("|");
            reData = cutData[0];
        }
    }

    return reData;
}


//텍스트 에어리어 글자수 제한
 /**
   EX)
    <textarea name="name" onChange="CheckStrLen('500',this);" onKeyUp="CheckStrLen('500',this); >
    한글500자 , 영문1000자 제한
 */
 function CheckStrLen(maxlen,field)
 {
   var temp; //들어오는 문자값...
   var msglen;
   msglen = maxlen*2;
   var value= field.value;

   l =  field.value.length;
   tmpstr = "" ;

   if (l == 0)
   {
    value = maxlen*2;
   }
   else
   {
    for(k=0;k<l;k++)
    {
     temp =value.charAt(k);

     if (escape(temp).length > 4)
   msglen -= 2;
     else
   msglen--;

     if(msglen < 0)
     {
   alert("총 영문 "+(maxlen*2)+"자 한글 " + maxlen + "자 까지 입력 할 수 있습니다.");
    field.value= tmpstr;
   break;
     }
     else
     {
   tmpstr += temp;
     }
    }
   }
 }


/*******************************************그룹웨어 하면서 추가된 함수들이나 기존 함수들중 수정된 함수들을 넣었다.**************************************************/
var IS_SUBMIT = false;      //전체 이중서브밋 방지 변수

/**
    //cookie값을 설정하는 함수이다.
    cookieName  = cookie setting name
    cookieValue = cookie setting value
    expiredays  = cookie setting day
**/

function setCookie(cookieName, cookieValue, expiredays) {
    var todayDate = new Date();
    var cookieDay;
    if(expiredays==undefined){
        cookieDay = "1";
    }else{
        cookieDay = expiredays;
    }
    todayDate.setDate( todayDate.getDate() + cookieDay );
    document.cookie = cookieName + "=" + encodeURIComponent(cookieValue) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}


/**
    //img 첨부파일을 추가하는 함수이다.
    fieldName  = 추가할 파일명
**/
function addImgFile(fileName) {
    uf_frmNewWin("../comm/comm_0006_01.jsp?fileName="+fileName+"","파일첨부", 500, 240);
}

function addImgFileOpt(fileName, fileOption, fileID ) {
    uf_frmNewWin("../comm/comm_0006_01.jsp?fileName="+fileName+"&fileOption="+fileOption+"&fileID="+fileID,"파일첨부", 500, 240);
}

/**
 *    달력 display 추가부분이다.
 */
var GblCalTempValue = "";
var target, target2, target3;
var fieldTarget;
var calendarInput = "";
var s1,s2,s3;
function MiniTextCal(cal)
{
    GblCalTempValue = cal.value;
    calendarInput = cal;
    calValue = cal.value;
    calValue = replace(calValue,'.','');
    calValue = replace(calValue,',','');

    if(calValue.length!=8 && calValue.length > 0){
        alert('YYYYMMDD형식으로 입력바랍니다.');
        return;
    }

    var jucke   = "";
    var juche2  = "";
    var juche3  = "";

    jucke  = calValue.substr(0,4);
    juche2 = calValue.substr(4,2);
    juche3 = calValue.substr(6,2);

    target=jucke;
    target2=juche2;
    target3=juche3;
    fieldTarget = cal;


//    alert(event.offsetX);
//    alert(event.clientX);

    //마우스찍었을때 좌표
    x = (document.layers) ? loc.pageX : event.clientX;
    y = (document.layers) ? loc.pageY : event.clientY;

     //레이어이름
     if(document.all.minical.length > 1){
        if(!opener){
            minical[0].style.pixelTop    = y+document.documentElement.scrollTop-130;
            minical[0].style.pixelLeft    = x-8-200;

        }else{
            if( document.body.clientWidth < x + 200)
            {
                x = x + (document.body.clientWidth - x - 320);
            }

            if( document.body.clientHeight < y)
            {
                y = y ;
            }

            minical[0].style.pixelTop    = y+document.documentElement.scrollTop;
            minical[0].style.pixelLeft    = x;
        }
        minical[0].style.display = (minical[0].style.display == "block") ? "none" : "block";
    }else{
        if(!opener){
            minical.style.pixelTop    = y+document.documentElement.scrollTop-130;
            minical.style.pixelLeft    = x-8-200;
        }else{
            if( document.body.clientWidth < x + 200)
            {
                x = x + (document.body.clientWidth - x - 320);
            }

            if( document.body.clientHeight < y )
            {
                y = y ;
            }

            minical.style.pixelTop    = y+document.documentElement.scrollTop;
            minical.style.pixelLeft    = x;
        }
        minical.style.display = (minical.style.display == "block") ? "none" : "block";
    }

    Show_textCal(target,target2,target3);
}


function Show_textCal(sYear,sMonth,sDay)
{
    var isSStrong = "";
    var isEStrong = "";
    var divHeight=0;
    if(sYear<1900 && sYear!="") return;
    if(document.all.minical.length > 1){
        document.all.minical[0].innerHTML="";
    }
    Cal_Week = "";
    Cal_HTML = "";      //달력소스
    /*********************이전 다음 년월 찾기*******************/
    /*
    2009년 7월 15일로 셋팅한것임
    나중에는 jsp에서 글로벌 변수 만들어서 써라.ㅡㅡ;;
    */
    var datToday=new Date();

    var intThisYear = sYear;
    var intThisMonth = sMonth;
    var intThisDay = sDay;
    var intThisYearMin = (parseInt(sYear)-1);
    var intThisYearPlu = (parseInt(sYear)+1);

    intThisYearMin = intThisYearMin.toString();
    intThisYearPlu = intThisYearPlu.toString();

    if (intThisDay==0) intThisDay = datToday.getDate();
    if (intThisMonth==0) intThisMonth = datToday.getMonth()+1;
    if (intThisYear==0) intThisYear = datToday.getYear();
    if (intThisMonth == 1)
    {
        intPrevYear=intThisYear-1;
        intPrevMonth=12;
        intNextYear=intThisYear;
        intNextMonth=2;
    }
    else if (intThisMonth==12)
    {
        intPrevYear=intThisYear;
        intPrevMonth=11;
        intNextYear=(parseInt(intThisYear) + 1);
        intNextMonth=1;
    }
    else
    {
        intPrevYear=intThisYear;
        intPrevMonth=intThisMonth -1;
        intNextYear=intThisYear;
        intNextMonth=Math.ceil(intThisMonth) + 1;
    }


    NowThisYear = sYear;
    NowThisMonth = sMonth;
    NowThisDay = sDay;
    if (NowThisDay==0) NowThisDay = datToday.getDate();
    if (NowThisMonth==0) NowThisMonth = datToday.getMonth()+1;
    if (NowThisYear==0) NowThisYear = datToday.getYear();


    /*********************해당월의 1일의 시작요일찾기 *******************/
    var first_date=new Date(intThisYear,intThisMonth-1,1)
        intFirstWeekday=first_date.getDay();
        intFirstWeekday++
        //intSecondWeekDay=intFirstWeekday
    var intThirdWeekDay=intFirstWeekday



    var datThisDay = intThisYear.toString() +  "-" + intThisMonth.toString() + "-" + intThisDay.toString();

    intThisWeekday = first_date.getDay();
    intThisWeekday++
    if (intThisWeekday == 1) varThisWeekday = "일";
    if (intThisWeekday == 2) varThisWeekday = "월";
    if (intThisWeekday == 3) varThisWeekday = "화";
    if (intThisWeekday == 4) varThisWeekday = "수";
    if (intThisWeekday == 5) varThisWeekday = "목";
    if (intThisWeekday == 6) varThisWeekday = "금";
    if (intThisWeekday == 7) varThisWeekday = "토";
    intPrintDay=1;
    secondPrintDay=1;
    thirdPrintDay=1;

    Stop_Flag=0;


    /*********************해당월의 마지막 날짜 구하기 *******************/
    if (intThisMonth == 4 || intThisMonth==6 || intThisMonth==9 || intThisMonth==11)
    {
        intLastDay=30;
    }
    else if (intThisMonth==2 && !(intThisYear % 4 == 0))
    {
        intLastDay=28;
    }
    else if (intThisMonth==2 && intThisYear % 4 == 0)
    {
        if (intThisYear % 100 == 0)
        {
            if (intThisYear % 400 == 0)
                intLastDay=29;
            else
                intLastDay=28;
        }
        else
        {
            intLastDay=29;
        }
    }
    else
    {
        intLastDay=31;
    }



    if (intPrevMonth==4 || intPrevMonth==6 || intPrevMonth==9 || intPrevMonth==11)
        intPrevLastDay=30;
    else if (intPrevMonth==2 &&  !(intPrevYear % 4 == 0))
        intPrevLastDay=28;
    else if (intPrevMonth==2 && intPrevYear % 4 == 0)
    {
        if (intPrevYear % 100 == 0)
        {
            if (intPrevYear % 400 == 0)
                intPrevLastDay=29;
            else
                intPrevLastDay=28;
        }
        else
        {
            intPrevLastDay=29;
        }
    }
    else
    {
        intPrevLastDay=31;
    }
    Stop_Flag=0;

    Cal_HTML=Cal_HTML + "<div style='position:absolute; top:0px;left:0px;z-index:20;margin:0 0 0 1px; '>";
    Cal_HTML=Cal_HTML + "<table class='calendar_simple' summary='calendar' style='margin-top:10px;'>";
    Cal_HTML=Cal_HTML + "   <colgroup>";
    Cal_HTML=Cal_HTML + "       <col span='7' width='23px' />";
    Cal_HTML=Cal_HTML + "   </colgroup>";
    Cal_HTML=Cal_HTML + "   <thead>";
    Cal_HTML=Cal_HTML + "       <tr>";
    Cal_HTML=Cal_HTML + "       <td colspan='7' align='center'>";
    Cal_HTML=Cal_HTML + "           <ul class='calendar' style='text-align:center;'>";
    Cal_HTML=Cal_HTML + "               <li style='padding-left:18px;'><img src='../../img/comm/button/btn_calendar_prev.gif' alt='이전연도' onClick='javascript:Show_textCal(" + intThisYearMin.toString() + "," + intThisMonth.toString() + ",1); return false;'  style='cursor:hand'></li>";
    Cal_HTML=Cal_HTML + "               <li>&nbsp;<strong> " + intThisYear.toString() + "</strong>&nbsp;<li>";
    Cal_HTML=Cal_HTML + "               <li><img src='../../img/comm/button/btn_calendar_next.gif' alt='다음연도'  onClick='javascript:Show_textCal(" + intThisYearPlu.toString() + "," + intThisMonth.toString() + ",1); return false;' style='cursor:hand'><li>";
    Cal_HTML=Cal_HTML + "               <li class='mgl10'><img src='../../img/comm/button/btn_calendar_prev.gif'  alt='이전 월'  onClick='javascript:Show_textCal(" + intPrevYear.toString() + "," + intPrevMonth.toString() + ",1); return false;' style='cursor:hand'></li>";
    Cal_HTML=Cal_HTML + "               <li>&nbsp;<strong>" + intThisMonth.toString() + "</strong>&nbsp;<li>";
    Cal_HTML=Cal_HTML + "               <li><img src='../../img/comm/button/btn_calendar_next.gif' alt='다음달'  onClick='javascript:Show_textCal(" + intNextYear.toString() + "," + intNextMonth.toString() + ",1); return false;'  style='cursor:hand'><li>";
    Cal_HTML=Cal_HTML + "           </ul>";
    Cal_HTML=Cal_HTML + "       </td>";
    Cal_HTML=Cal_HTML + "       </tr>";
    Cal_HTML=Cal_HTML + "       <tr>";
    Cal_HTML=Cal_HTML + "           <th scope='col' class='line_left'>일</th>";
    Cal_HTML=Cal_HTML + "           <th scope='col'>월</th>";
    Cal_HTML=Cal_HTML + "           <th scope='col'>화</th>";
    Cal_HTML=Cal_HTML + "           <th scope='col'>수</th>";
    Cal_HTML=Cal_HTML + "           <th scope='col'>목</th>";
    Cal_HTML=Cal_HTML + "           <th scope='col'>금</th>";
    Cal_HTML=Cal_HTML + "           <th scope='col' class='line_right'>토</th>";
    Cal_HTML=Cal_HTML + "       </tr>";
    Cal_HTML=Cal_HTML + "   </thead>";
    Cal_HTML=Cal_HTML + "   <tbody>";

    for (var intLoopWeek=1;intLoopWeek<=6;intLoopWeek++)
    {

        Cal_HTML=Cal_HTML + "<tr>";
        for (var intLoopDay=1;intLoopDay<=7;intLoopDay++)
        {
            if (intThirdWeekDay > 1)
            {
                Cal_HTML=Cal_HTML + "<td>&nbsp;</td>";
                intThirdWeekDay=intThirdWeekDay-1;
            }
            else
            {
                if (thirdPrintDay > intLastDay)
                {
                    Cal_HTML=Cal_HTML + "<td>&nbsp;</td>";
                }
                else
                {
                    Cal_HTML=Cal_HTML + "<td onclick='doTextClick()' ";
                    if (intThisYear-NowThisYear==0 && intThisMonth-NowThisMonth==0 && thirdPrintDay-intThisDay==0)
                    {
                        // 선택일
                        Cal_HTML=Cal_HTML + "  class='today' ";
                        Cal_Week= "class='today'";
                    }
                    else if  (intLoopDay==7)
                    {
                        // 토요일
                        Cal_HTML=Cal_HTML + "  class='sat' ";
                        Cal_Week= "class='sat'";
                    }
                    else if  (intLoopDay==1)
                    {
                        // 일요일
                        Cal_HTML=Cal_HTML + "  class='sun' ";
                        Cal_Week= "class='sun'";
                    }
                    else
                    {
                        // 평일
                        Cal_HTML=Cal_HTML + "";
                        Cal_Week= "";
                    }

                    Cal_HTML=Cal_HTML+ " ><a href='#dummy' " + Cal_Week + " onClick='return false;' title='" + intThisYear.toString() + "-" + intThisMonth.toString() + "-" + thirdPrintDay.toString() + "' >" + thirdPrintDay.toString()+ "</a> ";
                }
                thirdPrintDay++;

                if (thirdPrintDay > intLastDay)    Stop_Flag=1;

            }
            Cal_HTML=Cal_HTML + "</td>";
        }
        Cal_HTML=Cal_HTML + "</tr>";
        if (Stop_Flag==1) break;

    }

    Cal_HTML=Cal_HTML + "       </tbody>                                                                                                                  ";
    Cal_HTML=Cal_HTML + "   </table>                                   ";

    if(intLoopWeek=="6"){
        divHeight = "195px";
    }else if(intLoopWeek=="5"){
        divHeight = "175px";
    }else if(intLoopWeek=="4"){
        divHeight = "155px";
    }

    //달력 높이 지정 추가 송진성 2008.07.30

    Cal_HTML=Cal_HTML+ "</div>";


    if(document.all.minical.length > 1){
        document.all.minical[0].innerHTML="<iframe name='tmpCalIfra' width='181px' height='"+divHeight+"' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' class='calendar_outline'></iframe>";
        document.all.minical[0].innerHTML+=Cal_HTML;
    }else{
        document.all.minical.innerHTML="<iframe name='tmpCalIfra' width='181px' height='"+divHeight+"' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' class='calendar_outline'></iframe>";
        document.all.minical.innerHTML+=Cal_HTML;
    }
}


function doTextClick() {
    var cal_Day = window.event.srcElement.title;
    //window.event.srcElement.style.borderColor = "990000";
    if (cal_Day.length > 7) {
        getFixed(cal_Day);
        fieldTarget.focus();
        fieldTarget.value = s1+s2+s3;

        if(document.all.minical.length > 1){
            document.all.minical[0].style.display='none';
        }else{
            document.all.minical.style.display='none';
        }
    }
    if(calendarInput!=""){
        calendarInput.focus();
        calendarInput.blur();
    }
}

function getFixed(sDate){
    var s;
    var arr;

    s = new String(sDate);
    arr = s.split("-");
    if(arr.length == 3){
        s = arr[0] + "-";
        if(arr[1].length == 1) arr[1] = "0" + arr[1];
        s1 = arr[0];
        s = s + arr[1] + "-";
        s2 = arr[1];
        if(arr[2].length == 1) arr[2] = "0" + arr[2];
        s3 = arr[2];
        s = s + arr[2];
    }else{
        s = sDate;
    }
    return s;
}

function doOut() {
    if(document.all.minical.length > 1){
        document.all.minical[0].style.display='none';
    }else{
        document.all.minical.style.display='none';
    }
}


//전체선택 check함수 작성자  윤렬이
var checkflag = "false";

function uf_check(docname) {

    var field = eval(docname);

    if(field!=null){
        var lengthChk = field.length;
        if(lengthChk!=null){
            if (checkflag == "false") {
                for (i = 0; i < field.length; i++) {
                    if(field[i].disabled==false){
                        field[i].checked = true;
                    }
                }
                    checkflag = "true";
            } else {
                for (i = 0; i < field.length; i++) {
                    if(field[i].disabled==false){
                        field[i].checked = false;
                    }
                }
                    checkflag = "false";
            }
        }else{
            if (checkflag == "false") {
                if(field.disabled==false){
                    field.checked = true;
                }
                checkflag = "true";
            } else {
                if(field.disabled==false){
                    field.checked = false;
                }
                checkflag = "false";
            }
        }
    }else{
        alert('선택할 대상이 없습니다.');
    }
}
//전체선택 check 함수 끝



/**
 * 날짜를 계산해서 검색시작일의 값을 변경해준다
 */
function dateSetting(startobj,endobj, index, gubun,today) {
    var lastDay = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); // 각 달의 마지막 날짜를 배열변수에 저장한다.
    var date = new Date(today.substring(0,4),today.substring(4,6)-1,today.substring(6,8),"12","30");

    if (gubun == "D" && index == 0){
        startobj.value = today; // 당일
        endobj.value = today;
        return;
    }
    else if (gubun == "D"){
        date.setDate(date.getDate() + index);        //일을 뺀다
   }
    else if (gubun == "M"){
        date.setMonth(date.getMonth() + index);       //개월을 뺀다
    }
    else{
        alert("Script Error");
        return;
    }

    if(date.getDate() > lastDay[date.getMonth()]) {
        date.setDate(lastDay[date.getMonth()]);
    }

    endobj.value = date.getFullYear() + lpad(date.getMonth()+1, 2, "0") + lpad(date.getDate(), 2, "0");

}


/**
 * 두 Time이 몇 개월 차이나는지 구함
 * time1이 time2보다 크면(미래면) minus(-)
 */
function getMonthInterval(time1,time2) { //measureMonthInterval(time1,time2)
    var date1 = toTimeObject(time1);
    var date2 = toTimeObject(time2);

    var years  = date2.getFullYear() - date1.getFullYear();
    var months = date2.getMonth() - date1.getMonth();
    var days   = date2.getDate() - date1.getDate();

    return (years * 12 + months + (days >= 0 ? 0 : -1) );
}

/**
 * 두 Time이 며칠 차이나는지 구함
 * time1이 time2보다 크면(미래면) minus(-)
 */
function getDayInterval(time1,time2) {
    var date1 = toTimeObject(time1);
    var date2 = toTimeObject(time2);
    var day   = 1000 * 3600 * 24; //24시간

    return parseInt((date2 - date1) / day, 10);
}

/**
 * 두 Time이 몇 시간 차이나는지 구함
 * time1이 time2보다 크면(미래면) minus(-)
 */
function getHourInterval(time1,time2) {
    var date1 = toTimeObject(time1);
    var date2 = toTimeObject(time2);
    var hour  = 1000 * 3600; //1시간

    return parseInt((date2 - date1) / hour, 10);
}


//팝업을 닫아준다.
var unloadFlag = 'close';
var retnPopupObj=new Array();
function uf_closeOpenPopups() {
    if( unloadFlag != 'close' ) {   
        unloadFlag = 'close';   
        return; 
    }

    if( retnPopupObj != null ) {
        if( retnPopupObj.length > 0 ) {
            var i=0;
            while( i < retnPopupObj.length ) {
                retnPopupObj[i++].close();
            }
            
            retnPopupObj=null;
            retnPopupObj=new Array();
        }
    }
}

window.onunload = function() {
    uf_closeOpenPopups();   
}

//부모창 클릭 제어
if( opener != null ) {
    opener.document.onmousedown = mouseDown;
}
function mouseDown(e) {
    //opener.alert('팝업을 닫고 이용해주세요.');
    //window.focus();
}



