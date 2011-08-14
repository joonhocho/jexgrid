var _monthFlag_ = "N";

jQuery.fn.extend({
    jexCalendar: function(mon, cmd, opt) {

        var $r = $(this);
        var getMonLen    = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var getWeek      = ["일","월","화","수","목","금","토"];
        var baseDt       = {year:0000, mon:1, dt:1, week:5};    // 기준일자 0000월 1월 1일은 토요일 이었음. (기준일을 변경하면 정상 작동하지 않을수 있음.--로직변경이 필요)

        var jexCalFn = {
            show:function(opt) {
                jexCalFn['drawCalendar'](opt);
                var x = $r.offset().left;
                var y = $r.offset().top+$r.height()+3;

                if(x+200 > document.body.clientWidth) {
                    x = $r.offset().left - 136;
                }

                $("#_jex_calendar").css("left", x+"px");
                $("#_jex_calendar").css("top",  y+"px");

                $("#_jex_calendar").show();
            },
            hide:function(opt) {
                $("#_jex_calendar").hide();
            },
            getDate:function(opt) {
                return $(this).val().replace(/-/g, "");
            },
            beforeDate:function(opt) {
                var result = {};
                if(opt.mon==1) {
                    result.year = opt.year - 1;
                    result.mon  = 12;
                } else {
                    result.year = opt.year;
                    result.mon  = opt.mon -1;
                }
                return result;
            },
            nextDate:function(opt) {
                var result = {};
                if(opt.mon==12) {
                    result.year = opt.year + 1;
                    result.mon  = 1;
                } else {
                    result.year = opt.year;
                    result.mon  = opt.mon+1;
                }
                return result;
            },
            getToday:function(opt) {
                var result = {};
                var oDate   = new Date();
                var dYear   = oDate.getFullYear();
                var dMon    = oDate.getMonth()+1;
                var dDay    = oDate.getDate    ();

                result.year = dYear;
                result.mon  = dMon;
                result.day  = dDay;

                return result;
            },
            drawCalendar:function(opt) {
                var today = jexCalFn['getToday']();

                if ($("#_jex_calendar").length == 0) {
                    $(document.body).append(htmlCode);
                    $("#_jex_calendar").css("position",    "absolute");
                    $("#_jex_calendar").css("left",        10+"px");
                    $("#_jex_calendar").css("top",        10+"px");;
                }
                $("#_jex_calendar").find("#layer_calendar").find("#closeBtn").unbind('click');
                $("#_jex_calendar").find("#layer_calendar").find("#closeBtn").click(function() {
                    $("#_jex_calendar").hide();
                });

                $("#_jex_calendar").find("#layer_calendar_mon").find("#closeBtn").unbind('click');
                $("#_jex_calendar").find("#layer_calendar_mon").find("#closeBtn").click(function() {
                    $("#_jex_calendar").find("#layer_calendar_mon").hide();
                    $("#_jex_calendar").find("#layer_calendar").show();
                });

                $("#_jex_calendar").find("#layer_calendar_year").find("#closeBtn").unbind('click');
                $("#_jex_calendar").find("#layer_calendar_year").find("#closeBtn").click(function() {
                    $("#_jex_calendar").find("#layer_calendar_year").hide();
                    $("#_jex_calendar").find("#"+$("#_jex_calendar").find("#layer_calendar_year").data("target")).show();
                });

                $("#_jex_calendar").find("#goToday").unbind('click');
                $("#_jex_calendar").find("#goToday").click(function() {
                    jexCalFn['drawCalendar']({year:today.year, mon:today.mon,day:today.day});
                });

                $("#_jex_calendar").find("#layer_calendar").find("#prev_mon").unbind('click');
                $("#_jex_calendar").find("#layer_calendar").find("#prev_mon").click(function() {
                    var beforeDate = jexCalFn['beforeDate']($r.data("opt"));
                    jexCalFn['drawCalendar']({year:beforeDate.year, mon:beforeDate.mon,day:-1});
                });

                $("#_jex_calendar").find("#layer_calendar").find("#next_mon").unbind('click');
                $("#_jex_calendar").find("#layer_calendar").find("#next_mon").click(function() {
                    var nextDate = jexCalFn['nextDate']($r.data("opt"));
                    jexCalFn['drawCalendar']({year:nextDate.year, mon:nextDate.mon,day:-1});
                });

                $("#_jex_calendar").find("#layer_calendar").find("#open_year").unbind('click');
                $("#_jex_calendar").find("#layer_calendar").find("#open_year").click(function() {
                    $("#_jex_calendar").find("#layer_calendar" ).hide();
                    $("#_jex_calendar").find("#layer_calendar_year").show();

                    $("#_jex_calendar").find("#layer_calendar_year").data("target", "layer_calendar");
                    setYearTbl(parseInt($("#_jex_calendar").find("#layer_calendar").find(".font_year").html(),10));
                    // $("#_jex_calendar").find("#layer_calendar_mon").find(".font_year").html($("#_jex_calendar").find("#layer_calendar").find(".font_year").html());
                });

                $("#_jex_calendar").find("#layer_calendar").find(".font_month").unbind('click');
                $("#_jex_calendar").find("#layer_calendar").find(".font_month").click(function() {
                    $("#_jex_calendar").find("#layer_calendar").hide();
                    $("#_jex_calendar").find("#layer_calendar_mon").show();

                    $("#_jex_calendar").find("#layer_calendar_mon").find(".font_year").html($("#_jex_calendar").find("#layer_calendar").find(".font_year").html());
                });

                $("#_jex_calendar").find("#layer_calendar_mon").find("#prev_year").unbind('click');
                $("#_jex_calendar").find("#layer_calendar_mon").find("#prev_year").click(function() {
                    $("#_jex_calendar").find("#layer_calendar_mon").find(".font_year").html(parseInt($("#_jex_calendar").find("#layer_calendar_mon").find(".font_year").html(),10)-1);
                });

                $("#_jex_calendar").find("#layer_calendar_mon").find("#next_year").unbind('click');
                $("#_jex_calendar").find("#layer_calendar_mon").find("#next_year").click(function() {
                    $("#_jex_calendar").find("#layer_calendar_mon").find(".font_year").html(parseInt($("#_jex_calendar").find("#layer_calendar_mon").find(".font_year").html(),10)+1);
                });

                $("#_jex_calendar").find("#layer_calendar_mon").find(".font_year").unbind('click');
                $("#_jex_calendar").find("#layer_calendar_mon").find(".font_year").click(function() {
                    $("#_jex_calendar").find("#layer_calendar_mon" ).hide();
                    $("#_jex_calendar").find("#layer_calendar_year").show();

                    $("#_jex_calendar").find("#layer_calendar_year").data("target", "layer_calendar_mon");

                    setYearTbl($("#_jex_calendar").find("#layer_calendar_mon").find(".font_year").html());
                    // $("#_jex_calendar").find("#layer_calendar_mon").find(".font_year").html($("#_jex_calendar").find("#layer_calendar").find(".font_year").html());
                });

                $("#_jex_calendar").find("#layer_calendar_year").find("#prev_year_list").unbind('click');
                $("#_jex_calendar").find("#layer_calendar_year").find("#prev_year_list").click(function() {
                    setYearTbl(parseInt($("#_jex_calendar").find("#layer_calendar_year").data("nYear"),10)-10);
                });

                $("#_jex_calendar").find("#layer_calendar_year").find("#next_year_list").unbind('click');
                $("#_jex_calendar").find("#layer_calendar_year").find("#next_year_list").click(function() {
                    setYearTbl(parseInt($("#_jex_calendar").find("#layer_calendar_year").data("nYear"),10)+10);
                });

                $("#_jex_calendar").find("#layer_calendar_mon").find("table").find("tbody").find("tr").find("td").unbind('click');
                $("#_jex_calendar").find("#layer_calendar_mon").find("table").find("tbody").find("tr").find("td").click(function() {
                    $("#_jex_calendar").find("#layer_calendar").find(".font_month").html($(this).find("a").html());
                    $("#_jex_calendar").find("#layer_calendar_mon").find("#closeBtn").click();
                    jexCalFn['drawCalendar']({year:parseInt($("#_jex_calendar").find("#layer_calendar_mon").find(".font_year").html()), mon:parseInt($(this).find("a").html(),10),day:-1});
                });

                function setYearTbl(year) {
                    var strYear = parseInt(parseInt(year,10)/10)*10-1;
                    var endYear = parseInt(parseInt(year,10)/10)*10+10;

                    var titStr = strYear + "~" + endYear;

                    $("#_jex_calendar").find("#layer_calendar_year").data("nYear",year);

                    $("#_jex_calendar").find("#layer_calendar_year").find(".font_year").html(titStr);

                    $("#_jex_calendar").find("#layer_calendar_year").find("table").find("tbody").find("tr").remove();

                    var tr = $("<tr></tr>");

                    var insYear = strYear;

                    for(var i=0; i<12; i++) {
                        var td = $("<td><a>"+(insYear+i)+"</a><b>년</b></td>");
                        td.clone().appendTo(tr);
                        if ((i+1)%4==0) {
                            tr.clone().appendTo($("#_jex_calendar").find("#layer_calendar_year").find("table").find("tbody"));
                            tr = $("<tr></tr>");
                        }
                    }

                    $("#_jex_calendar").find("#layer_calendar_year").find("table").find("tbody").find("tr").find("a").unbind('click');
                    $("#_jex_calendar").find("#layer_calendar_year").find("table").find("tbody").find("tr").find("a").click(function() {
                        $("#_jex_calendar").find("#"+$("#_jex_calendar").find("#layer_calendar_year").data("target")).find(".font_year").html($(this).html());
                        $("#_jex_calendar").find("#layer_calendar_year").find("#closeBtn").click();

                        if ($("#_jex_calendar").find("#layer_calendar_year").data("target")=="layer_calendar") {
                            var y = parseInt($("#_jex_calendar").find("#"+$("#_jex_calendar").find("#layer_calendar_year").data("target")).find(".font_year").html(),10);
                            var m = parseInt($("#_jex_calendar").find("#"+$("#_jex_calendar").find("#layer_calendar_year").data("target")).find(".font_month").html(),10);
                            jexCalFn['drawCalendar']({year:y, mon:m,day:-1});
                        }
                    });
                }
                if (opt==null || opt==undefined || opt.year==undefined) opt = jexCalFn['getToday']();

                $r.data("opt",opt);

                if(mon != 'month') {
                    $("#_jex_calendar").find("#layer_calendar").find(".font_year").html(opt.year);
                    $("#_jex_calendar").find("#layer_calendar").find(".font_month").html(opt.mon);
                    $("#_jex_calendar").find("#layer_calendar").find("table").find("tbody").find("tr").remove();
                } else {
                    $("#_jex_calendar").find(".font_year").html(opt.year);
                    $("#_jex_calendar").find(".font_month").html(opt.mon);
                }

                var fDt = jexCalFn['getFirstDay'  ]({year:opt.year,mon:opt.mon});
                var eDt = jexCalFn['getMonEndDate']({year:opt.year,mon:opt.mon});

                var tr = $("<tr></tr>");
                var dd = 0; //일자를 보관
                var cw = 0; //요일을 보관

                var cs = 5*7;                   // 1달이 5주
                if (fDt+eDt >= cs) cs = 6*7;    // 1달이 6주

                for (var i=0;i<cs;i++) {
                    var td = $("<td><a>&nbsp;</a></td>");
                    if (cw==0) td.attr("class","sun");
                    if (cw==6) td.attr("class","sat");
                    if (i>=fDt)dd++;
                    if (dd<=0 || dd>eDt) td.attr("class","none");
                    if (dd>0 && dd<=eDt) td.find("a").html(dd);
                    if (today.year==opt.year&&today.mon==opt.mon&&today.day==dd) td.find("a").attr("class", "today");
                    if (opt.day==dd) td.attr("class", "select");
                    tr.append(td);
                    if (cw==6) {
                        tr.clone(true).appendTo($("#_jex_calendar").find("#layer_calendar").find("table").find("tbody"));
                        tr = $("<tr></tr>");
                        cw=0;
                        continue;
                    }
                    cw++;
                }
                if(mon != 'month') {
                    $("#_jex_calendar").find("#layer_calendar").find("table").find("tbody").find("tr").find("td").unbind('click');
                    $("#_jex_calendar").find("#layer_calendar").find("table").find("tbody").find("tr").find("td").click(function() {
                        if (isNaN($(this).find("a").html())) return ;

                        var mmm = (parseInt($("#_jex_calendar").find("#layer_calendar").find(".font_month").html(),10)<10)?"0"+$("#_jex_calendar").find("#layer_calendar").find(".font_month").html():$("#_jex_calendar").find("#layer_calendar").find(".font_month").html();
                        var ddd = (parseInt($(this).find("a").html(),10)<10)?"0"+$(this).find("a").html():$(this).find("a").html();

                        $r.val($("#_jex_calendar").find("#layer_calendar").find(".font_year").html()+"-"+mmm+"-"+ddd);

                        if(typeof af_calendarSelectDate == 'function') {
                            af_calendarSelectDate($r.selector);
                        }

                        jexCalFn['hide']();
                    });
                } else {
                   $("#_jex_calendar").find("table").find("tbody").find("tr").find("td").unbind('click');
                    $("#_jex_calendar").find("table").find("tbody").find("tr").find("td").click(function() {
                        if (isNaN($(this).find("a").html())) return ;

                        var ddd = (parseInt($(this).find("a").html(),10)<10)?"0"+$(this).find("a").html():$(this).find("a").html();
                        $r.val($("#_jex_calendar").find(".font_year").html()+"-"+ddd);

                        if(typeof af_calendarSelectDate == 'function') {
                            af_calendarSelectDate($r.selector);
                        }

                        jexCalFn['hide']();
                    });
                }
            },
            getMonEndDate:function(opt) {
                if (opt.mon==2&&(opt.year%4==0 && (opt.year%100!=0||opt.year%400==0)))    return 29;
                else                                                                      return getMonLen[opt.mon-1];
            },
            getFirstDay:function(opt) {
                var yearlen        = opt.year - baseDt.year;
                var yun_yearlen = parseInt((opt.year-1)/4,10) - parseInt((opt.year-1)/100,10) + parseInt((opt.year-1)/400,10);
                var dt_cnt        = yearlen + yun_yearlen + 1;

                for (var i=0; i<opt.mon-1; i++) { dt_cnt = dt_cnt+jexCalFn['getMonEndDate']({"year":opt.year, "mon":i+1}); }
                var week        = (baseDt.week+dt_cnt+1)%7;

                return week;
            }
        };

        $r.focus(function() {
            /*
            var rDat = $r.val().split("-");
            var opt  = {};
            if (rDat.length > 2) {
                opt.year = parseInt(rDat[0],10);
                opt.mon  = parseInt(rDat[1],10);

                try {
                    opt.day  = parseInt(rDat[2],10);
                } catch (e) {
                    opt.day = -1;
                }
            };
            jexCalFn['show'](opt);
            */
            calendarfocus(event, $r, jexCalFn, mon);
        });
        // $r.blur (function() { jexCalFn['hide']({}); });
        if (cmd==undefined) {
            if ($.trim($r.val())==""&&$.trim($r.html())=="") {
                var today = jexCalFn['getToday']();
                if ($r.get(0).tagName.toLocaleLowerCase()=="input") $r.val(today.year+"-"+today.mon+"-"+today.day);
            }
            return;
        }
        return jexCalFn[cmd](opt);
    }
});
function calendarfocus(evt, data, jexCalFn, mon) {
    if(evt.type == "click") {
        var htmlCode = rtnHTML(mon);
        var rDat    = data.val().split("-");
        var opt     = {};
        var len     = 0;

        if(mon != 'month') {
            len = 2;
        } else {
            len = 1;
        }
        if (rDat.length > len) {
            opt.year = parseInt(rDat[0],10);
            opt.mon  = parseInt(rDat[1],10);

            try {
                opt.day  = parseInt(rDat[2],10);
            } catch (e) {
                opt.day = -1;
            }
        };
        jexCalFn['show'](opt);
    }
}
function rtnHTML(mon) {
    if ($("#_jex_calendar").length>0 && _monthFlag_ == "Y") {
        $("#_jex_calendar").remove();
    }

    htmlCode = "";

    htmlCode+= "<div id='_jex_calendar' style='display:none;position:relative;z-index:15000'>";

    if(mon != 'month') {
        htmlCode+=      "<div id='layer_calendar' class='layer_calendar'>";
        htmlCode+=          "<div class='cal_bx_top'>";
        htmlCode+=              "<a id='goToday' ><img src='/proto/web/img/groupware/btn_cal_today.gif' alt='오늘' /></a>";
        htmlCode+=              "<a id='closeBtn'><img src='/proto/web/img/groupware/btn_cal_close.gif' alt='닫기' /></a>";
        htmlCode+=          "</div>";
        htmlCode+=          "<div class='cal_bx_middle'>";
        htmlCode+=              "<strong class='font_year'></strong>";
        htmlCode+=              "<a id='open_year' style='cursor:pointer;vertical-align:-5px;padding-left:5px;'><img src='/proto/web/img/groupware/img_year_btn.gif' alt='년도 선택' /></a>";
        htmlCode+=              "<a id='prev_mon' class='month_btn'><img src='/proto/web/img/groupware/month_btn_l.png' alt='' /></a>";
        htmlCode+=              "<strong style='cursor:pointer' class='font_month'></strong>";
        htmlCode+=              "<a id='next_mon' class='month_btn'><img src='/proto/web/img/groupware/month_btn_r.png' alt='' /></a>";
        htmlCode+=          "</div>";
        htmlCode+=          "<div class='cal_bx_bottom'>";
        htmlCode+=              "<table id='dayList'>";
        htmlCode+=                  "<colgroup>";
        htmlCode+=                  "<col style='width:15%' />";
        htmlCode+=                  "<col style='width:14%' />";
        htmlCode+=                  "<col style='width:14%' />";
        htmlCode+=                  "<col style='width:14%' />";
        htmlCode+=                  "<col style='width:14%' />";
        htmlCode+=                  "<col style='width:14%' />";
        htmlCode+=                  "<col style='width:15%' />";
        htmlCode+=                  "</colgroup>";
        htmlCode+=                  "<thead>";
        htmlCode+=                      "<tr>";
        htmlCode+=                          "<th class='sun'>일</th>";
        htmlCode+=                          "<th>월</th>";
        htmlCode+=                          "<th>화</th>";
        htmlCode+=                          "<th>수</th>";
        htmlCode+=                          "<th>목</th>";
        htmlCode+=                          "<th>금</th>";
        htmlCode+=                          "<th class='sat'>토</th>";
        htmlCode+=                      "</tr>";
        htmlCode+=                  "</thead>";
        htmlCode+=                  "<tbody>";
        htmlCode+=                  "</tbody>";
        htmlCode+=              "</table>";
        htmlCode+=          "</div>";
        htmlCode+=        "</div>";
    }
    if(mon != 'month') {
        htmlCode+=    "<div id='layer_calendar_mon' class='layer_calendar calendar_bg2' style='display:none;position:absolute;top:0px;left:0px'>";
    } else {
        htmlCode+=    "<div id='layer_calendar_mon' class='layer_calendar calendar_bg2' style='display:;position:absolute;top:0px;left:0px'>";
    }
    htmlCode+=          "<div class='cal_bx_top'>";
    htmlCode+=              "<a id='closeBtn'><img src='/proto/web/img/groupware/btn_cal_close.gif' alt='닫기' /></a>";
    htmlCode+=          "</div>";
    htmlCode+=          "<div class='cal_bx_middle'>";
    htmlCode+=              "<a id='prev_year' class='month_btn'><img src='/proto/web/img/groupware/month_btn_l.png' alt='' /></a>";
    htmlCode+=              "<strong style='cursor:pointer' class='font_year'></strong>";
    htmlCode+=              "<a id='next_year' class='month_btn'><img src='/proto/web/img/groupware/month_btn_r.png' alt='' /></a>";
    htmlCode+=          "</div>";
    htmlCode+=          "<div class='cal_bx_bottom2'>";
    htmlCode+=              "<table>";
    htmlCode+=                  "<colgroup>";
    htmlCode+=                  "<col style='width:25%' />";
    htmlCode+=                  "<col style='width:25%' />";
    htmlCode+=                  "<col style='width:25%' />";
    htmlCode+=                  "<col style='width:25%' />";
    htmlCode+=                  "</colgroup>";
    htmlCode+=                  "<tbody>";
    htmlCode+=                      "<tr>";
    htmlCode+=                          "<td><a>1</a><b>월</b></td>";
    htmlCode+=                          "<td><a>2</a><b>월</b></td>";
    htmlCode+=                          "<td><a>3</a><b>월</b></td>";
    htmlCode+=                          "<td><a>4</a><b>월</b></td>";
    htmlCode+=                      "</tr>";
    htmlCode+=                      "<tr>";
    htmlCode+=                          "<td><a>5</a><b>월</b></td>";
    htmlCode+=                          "<td><a>6</a><b>월</b></td>";
    htmlCode+=                          "<td><a>7</a><b>월</b></td>";
    htmlCode+=                          "<td><a>8</a><b>월</b></td>";
    htmlCode+=                      "</tr>";
    htmlCode+=                      "<tr>";
    htmlCode+=                          "<td><a>9</a><b>월</b></td>";
    htmlCode+=                          "<td><a>10</a><b>월</b></td>";
    htmlCode+=                          "<td><a>11</a><b>월</b></td>";
    htmlCode+=                          "<td><a>12</a><b>월</b></td>";
    htmlCode+=                      "</tr>";
    htmlCode+=                  "</tbody>";
    htmlCode+=              "</table>";
    htmlCode+=          "</div>";
    htmlCode+=        "</div>";

    htmlCode+=        "<div id='layer_calendar_year' class='layer_calendar calendar_bg2' style='display:none;position:absolute;top:0px;left:0px'>";
    htmlCode+=          "<div class='cal_bx_top'>";
    htmlCode+=              "<a id='closeBtn'><img src='/proto/web/img/groupware/btn_cal_close.gif' alt='닫기' /></a>";
    htmlCode+=          "</div>";
    htmlCode+=          "<div class='cal_bx_middle'>";
    htmlCode+=              "<a id='prev_year_list' class='month_btn'><img src='/proto/web/img/groupware/month_btn_l.png' alt='' /></a>";
    htmlCode+=              "<strong style='cursor:pointer' class='font_year'></strong>";
    htmlCode+=              "<a id='next_year_list' class='month_btn'><img src='/proto/web/img/groupware/month_btn_r.png' alt='' /></a>";
    htmlCode+=          "</div>";
    htmlCode+=          "<div class='cal_bx_bottom2'>";
    htmlCode+=              "<table>";
    htmlCode+=                  "<colgroup>";
    htmlCode+=                  "<col style='width:25%' />";
    htmlCode+=                  "<col style='width:25%' />";
    htmlCode+=                  "<col style='width:25%' />";
    htmlCode+=                  "<col style='width:25%' />";
    htmlCode+=                  "</colgroup>";
    htmlCode+=                  "<tbody>";
    htmlCode+=                  "</tbody>";
    htmlCode+=              "</table>";
    htmlCode+=          "</div>";
    htmlCode+=        "</div>";

    htmlCode+=      "</div>";

    return htmlCode;
}
$(function() {
    /*
    $(".jexCalendar").each(function() {
        $(this).find("input[type='text']").jexCalendar();
    });
    */

    $(".jexCalendar, .jexTerm").find("input[type='text']").each(function() {
        $(this).jexCalendar();
    });

    $(".jexCalendar, .jexTerm").find("input[type='button']").each(function() {
        $(this).bind("click", function() {
            $(this).prev().focus();
        });
    });

    /*
    $(".jexCalendar, .jexTerm").find("input[type='text']").livequery(function() {
        $(this).jexCalendar();
    });

    $(".jexCalendar, .jexTerm").find("input[type='button']").livequery("click", function() {
        $(this).prev().focus();
    });
    */

    // 시작일자가 종료일자보다 작은 경우
    $(".jexTerm").find("input[type='text']").change(function(e) {
        var startDate = Date.parseExact($(this).parent().find("input[type='text']:first").val(), 'yyyy-MM-dd');
        var endDate = Date.parseExact($(this).parent().find("input[type='text']:last").val(), 'yyyy-MM-dd');

        if(startDate > endDate || endDate < startDate) {
            // 시작일자를 수정한거면 시작일자를 종료일자로 설정
            if($(this).prevAll("input[type='text']").html() == null) {
                alert("시작일자는 종료일자보다 같거나 작아야 합니다.");
                $(this).val($(this).nextAll("input[type='text']").val());
            }
            // 종료일자를 수정한거면 종료일자를 시작일자로 설정
            else {
                alert("종료일자는 시작일자보다 같거나 커야 합니다.");
                $(this).val($(this).prevAll("input[type='text']").val());
            }
        }

        //if(startDate.isAfter(endDate)) {
        //    alert("시작일자는 종료일자보다 같거나 작아야 합니다.");

        //}
    });

    /*
    $(".jexCalendar").find("input[type='text']").livequery(function() {
        $(this).jexCalendar();
    });

    $(".jexCalendar").find("input[type='button']").livequery("click", function() {
        $(this).prev().focus();
    });
    */

    //$('.ui-datepicker').hide();
});