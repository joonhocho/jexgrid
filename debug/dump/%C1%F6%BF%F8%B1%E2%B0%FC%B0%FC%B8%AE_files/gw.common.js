var gw;
if(!gw) gw={};
if(!gw.common) gw.common={};

if(typeof(gw.ui) == "undefined") {
	document.write('<script type="text/javascript" src="js/gw.ui.js"></script>');
}

//새창 여는 함수
gw.common.newResizableWin = function (url, winName, sizeW, sizeH)
{
	var nLeft  = screen.width/2 - sizeW/2 ;
	var nTop  = screen.height/2 - sizeH/2 ;

	opt = ",toolbar=no,menubar=no,location=no,scrollbars=yes,status=no,resizable=yes";
	window.open(url, winName, "left=" + nLeft + ",top=" +  nTop + ",width=" + sizeW + ",height=" + sizeH  + opt );

}


//새창 여는 함수
gw.common.frmNewWin = function(formId, url, winName, sizeW, sizeH)
{
	var nLeft  = screen.width/2 - sizeW/2 ;
    var nTop  = screen.height/2 - sizeH/2 ;
    var pos = 0;
    var winObj;
    
    opt = ",toolbar=no,menubar=no,location=no,scrollbars=yes,status=no, resizable = yes";
    winObj = window.open("", winName, "width=" + sizeW + ",height=" + sizeH  + opt );

    if (winObj == null) {
        alert("팝업차단 기능을 해지 하시기 바랍니다..\n\n[ 도구->인터넷옵션->개인 정보->팝업차단] 체크해지");
        return;
    }

    var userFrm = document.getElementById(formId);
    var originTarget = userFrm.target;
    var originAction = userFrm.action; 
    userFrm.target = winName;
    userFrm.action = url;
    jex.web.doSubmit(formId, false);
    userFrm.target = originTarget;
    userFrm.action = originAction;
}


//새창 여는 함수
gw.common.newWin =  function( url, winName, sizeW, sizeH)
{
	var nLeft  = screen.width/2 - sizeW/2 ;
	var nTop  = screen.height/2 - sizeH/2 ;

	opt = ",toolbar=no,menubar=no,location=no,scrollbars=yes,status=no,resizable=no";
	window.open(url, winName, "left=" + nLeft + ",top=" +  nTop + ",width=" + sizeW + ",height=" + sizeH  + opt );

}


//새창 여는 함수
gw.common.jexNewWin =  function( url, winName, sizeW, sizeH, jsonValue) {
	var nLeft  = screen.width/2 - sizeW/2 ;
	var nTop  = screen.height/2 - sizeH/2 ;

	gw.ui.createFormObj("generatedSubmitForm", "post", jsonValue);
	
	//jex.web.doSubmit("generatedSubmitForm", false, null, {sizeW: sizeW_, sizeH: sizeH_, target: "mark_0001_02", action:"mark_0001_02.act"});
	
	opt = ",toolbar=no,menubar=no,location=no,scrollbars=yes,status=no, resizable = yes";
    winObj = window.open("", winName, "width=" + sizeW + ",height=" + sizeH  + opt );

    if (winObj == null) {
        alert("팝업차단 기능을 해지 하시기 바랍니다..\n\n[ 도구->인터넷옵션->개인 정보->팝업차단] 체크해지");
        return;
    }
    
    var userFrm = document.getElementById("generatedSubmitForm");
    userFrm.target = winName;
    userFrm.action = url;
    jex.web.doSubmit("generatedSubmitForm", false);
    //document.getElementById("generatedSubmitForm").submit();
    
    //alert($("form#generatedSubmitForm").html());
    
    gw.ui.removeFormObj("generatedSubmitForm");

}

gw.common.jexSubmit = function(url, jsonValue) {
	gw.ui.createFormObj("generatedSubmitForm", "post", jsonValue);

	var userFrm = document.getElementById("generatedSubmitForm");
    userFrm.action = url;
    userFrm.submit();
    //jex.web.doSubmit("generatedSubmitForm", false);
    
    gw.ui.removeFormObj("generatedSubmitForm");
}

gw.common.autoResizeWin = function() {
	/*
	var width = window.outerWidth;
	var height = document.getElementById("p-wrap").scrollHeight;
	//var width = $("#p-wrap").css("scrollWidth").replace(/px/, "");
	//var height = $("#p-wrap").css("scrollHeight").replace(/px/, "");
	
	alert(width);
	
	window.resizeTo(width, height);
	
	
	http://zerry82.tistory.com/294 참고
	*/
	try
    {
        // tool box and border length
        var deltaHeight, deltaWidth;

        if (window.outerHeight) {
            deltaWidth = window.outerWidth - window.innerWidth;
            deltaHeight = window.outerHeight - window.innerHeight;
        }
        else {
            // if ie..
            if (document.documentElement.clientWidth) {
                
                // get window fake outer size
                var fakeOuterWidth = document.documentElement.clientWidth;
                var fakeOuterHeight = document.documentElement.clientHeight;

                // resize to innerSize
                window.resizeTo(fakeOuterWidth, fakeOuterHeight);

                // get window fake inner size
                var fakeInnerWidth = document.documentElement.clientWidth;
                var fakeInnerHeight = document.documentElement.clientHeight;

                // get delta
                deltaWidth = fakeOuterWidth - fakeInnerWidth;
                deltaHeight = fakeOuterHeight - fakeInnerHeight;
            }
            else {
                // not support -_-;;; ignore resizing;;;; sorry;;;;
                throw "browser does not support!"
            }
        }
        window.resizeTo(x + deltaWidth, y + deltaHeight);
    }catch(e){}        

}

gw.common.resizeTo = function(width, height) {
	window.resizeTo(width, height);
	/*
	//alert(document.body.clientHeight);
	//window.resizeTo(document.body.clientWidth, document.body.clientHeight + 40);
	
	var width = $("#p-wrap").css("width").replace(/px/, "");
	var height = $("#p-wrap").css("height").replace(/px/, "");
	
	alert(height);
	
	window.resizeTo(document.body.clientWidth, height);
	*/
}

gw.common.getFileDownloadUrl = function(usefacSeqNo, attfileSeqNo) {
	return gw.common.getFileUrl(usefacSeqNo, attfileSeqNo, null);
}

gw.common.getFileUrl = function(usefacSeqNo, attfileSeqNo, cmd) {
	url = "http://172.20.20.225:8080/comm0008_01.act?USEFAC_SEQ_NO="+usefacSeqNo+"&ATTFILE_SEQ_NO="+attfileSeqNo;
//	url = "http://172.20.20.225:8080/comm0008_01.act?USEFAC_SEQ_NO="+usefacSeqNo+"&ATTFILE_SEQ_NO="+attfileSeqNo;
	if(cmd != null) {
		url += "&CMD="+cmd;
	}
	return url;
}


gw.common.getFilePreviewUrl = function(usefacSeqNo, attfileSeqNo) {
	return getFileUrl(usefacSeqNo, attfileSeqNo, "preview");
}
