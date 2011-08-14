var gw;
if(!gw) gw={};
if(!gw.date) gw.date={};


if (typeof(JSON) === 'undefined') {
    document.write('<script type="text/javascript" src="js/json2.js"></script>');
}

if(typeof(Date.parseExact) === "undefined") {
    document.write('<script type="text/javascript" src="js/date-ko-KR.js"></script>');
}


gw.date.format = function(dateStr, fromFormat, toFormat) {
    try {
        dateStr = Date.parseExact($.trim(dateStr), fromFormat).toString(toFormat);
    }
    catch(e) {
        //alert(e);
    }
    
    return dateStr;
}



/********************************************************************
 * 겹치는 기간인지 비교
 * 비교대상 시작일자가 시작일자와 종료일자 사이에 있지 않고
 * 비교대상 종료일자가 시작일자와 종료일자 사이에 있지 않아야 함.
 *********************************************************************/
gw.date.isOverlapTerm = function(srcStartDate, srcStartTime, srcEndDate, srcEndTime, tgtStartDate, tgtStartTime, tgtEndDate, tgtEndTime) {

    var isOvelap = false;
    var srcStartDt = "";
    var srcEndDt = "";
    var tgtStartDt = "";
    var tgtEndDt = "";

    try {
        srcStartDt = Date.parseExact(srcStartDate + srcStartTime, 'yyyyMMddHHmmss');
    }
    catch(e) {
        srcStartDt = Date.parseExact(srcStartDate + "000000", 'yyyyMMddHHmmss');
    }

    try {
        srcEndDt = Date.parseExact(srcEndDate + srcEndTime, 'yyyyMMddHHmmss');
    }
    catch(e) {
        srcEndDt = Date.parseExact(srcEndDate + "000000", 'yyyyMMddHHmmss');
    }

    try {
        tgtStartDt = Date.parseExact(tgtStartDate + tgtStartTime, 'yyyyMMddHHmmss');
    }
    catch(e) {
        tgtStartDt = Date.parseExact(tgtStartDate + "000000", 'yyyyMMddHHmmss');
    }

    try {
        tgtEndDt = Date.parseExact(tgtEndDate + tgtEndTime, 'yyyyMMddHHmmss');
    }
    catch(e) {
        tgtEndDt = Date.parseExact(tgtEndDate + "000000", 'yyyyMMddHHmmss');
    }

    // 비교대상 시작일자가 시작일자와 종료일자 사이에 있으면 false
    if(tgtStartDt.between(srcStartDt, srcEndDt)) {
        isOvelap = true;
    }

    // 비교대상 종료일자가 시작일자와 종료일자 사이에 있으면 false
    if(tgtEndDt.between(srcStartDt, srcEndDt)) {
        isOvelap = true;
    }

    return isOvelap;
}