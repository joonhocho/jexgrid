Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

jQuery.fn.extend({
	
	jexTbl: function(cmd, opt) {
		var $r = $(this);
		var $r2= $(this).parent().parent().parent().parent();
		var dat= null;
		if ($r.data("opt")!=null&&$r.data("opt")['root']!=null&&$r.data("opt")['root']!=undefined) {
			$r2 = $r.data("opt")['root'];
		}
		var jexTblFn={
						make	:function(opt)	{
                			opt.cPage = 1;
                			if (opt.changeList!=null&&opt.changeList.length>0&&$r2.find("#"+opt.changeList).val()!=null&&$r2.find("#"+opt.changeList).val()!=undefined&&$r2.find("#"+opt.changeList).val()!=null&&$r2.find("#"+opt.changeList).val().length>0) opt.cnt = $("#"+opt.changeList).val();
							$r.data("opt",	opt);
							$r.data("data", []);
							if (opt.changeList!=null&&opt.changeList.length>0) {
								$r2.find("#"+$r.data("opt").changeList).change(function() {
									opt.cnt = $r2.find("#"+$r.data("opt").changeList).val();
									$r.data("cur", 1);
									$r.jexTbl('setAll',$r.data("data"));
								});
							}
						},
						init	: function(opt) {
							var opt2 = $r.data("opt");
							opt2.cPage=1;
							$r.data("cur",1);
							$r.data("opt",opt2);
						},
						isLastPage:function(opt) {
							if ($r.data("opt").cPage == $r.data("lastCpage"))	return true;
							else												return false;
						},
						getCpage:function(opt) {
							return $r.data("opt").cPage;
						},
						getNextCpage:function(opt) {
							return $r.data("opt").cPage+1;
						},
						getBeforeCpage:function(opt) {
							return $r.data("opt").cPage-1;
						},
						next	:function(opt) {
								if ( jexTblFn['isLastPage'](opt)) {
									alert("마지막 페이지 입니다.");
									return;
								}
								var option = $r.data("opt");
								option.cPage = option.cPage+1;
								$r.data("opt", option);
    							$r.data("data",	opt);
								$r.jexTbl('setAll',$r.data("data"));
						},
						before	:function(opt) {
							var option = $r.data("opt");
							if (option.cPage == 1) {
								alert("첫페이지 입니다.");
								return;
							}
							option.cPage = option.cPage-1;
							$r.data("opt", option);
							$r.data("data",	opt);
							$r.jexTbl('setAll',$r.data("data"));
						},
						hasNext	:function(opt, i) {
							return $r.data("hasNext");
						},
						addRow2 :function(opt, i) {
							var dat = $r.data("data");
							if (dat==null || dat==undefined) dat = [];
							dat.push(opt);
							$r.data("data", dat);
							if (i==undefined) {
								i = $r.find("tbody").find("tr").length;
							}
							jexTblFn.addRow(opt, i);
						},
						addRow	:function(opt, i) {
							var tr =  $($r.data("opt").tr_tpl);
							if (!isNaN(i)) tr.attr("id",i);
							if (opt!=null) { 
								$.each(tr.find("*"), function(i,v) {
									if ($(this).attr("id") == undefined) return true;
									var prt_dt = opt[$(this).attr("id")];
									
									if ($(this).attr("fn")!=null) {
										var exec= $(this).attr("fn")+"(";
										var arg = JSON.parse($(this).attr("arg"));
										for (var j=0; j<arg.length;j++) {
											if (arg[j]=="this") exec=exec+"\""+prt_dt+"\"";
											else				exec=exec+"\""+arg[j]+"\"";
											if (j!=arg.length-1) exec=exec+",";
										}
										exec=exec+")";
										var d = eval(exec);
										prt_dt=d.VIEW_PRT_NM;
									}
									if ($(this).attr("type")=="radio" || $(this).attr("type")=="checkbox") {
										if (prt_dt!=null && prt_dt!=undefined) $(this).attr("checked",true);
									} else if ($(this).attr("type")=="text") {
										$(this).val(prt_dt);
									} else {
										$(this).html(prt_dt);
									}
								});
								if ($r.data("opt") !=null && $r.data("opt").onclick != null && $r.data("opt").onclick != undefined) {
									if (typeof($r.data("opt").onclick['_JEX_ALL_COLUMN'])=="function") {
										tr.css("cursor", "pointer");
										tr.click(function(e) {
											$r.data("opt").onclick['_JEX_ALL_COLUMN']($r.data("data")[i], tr, e);
										});
									} else {
										$.each($r.data("opt").onclick, function(i2,v) {
											tr.find("#"+i2).css("cursor", "pointer");
											tr.find("#"+i2).click(function(e) {
												v($r.data("data")[i], $(this), e);
											});
										});
									}
								}
								if ($r.data("opt") !=null && $r.data("opt").onDblclick != null && $r.data("opt").onDblclick != undefined) {
									if (typeof($r.data("opt").onDblclick['_JEX_ALL_COLUMN'])=="function") {
										tr.css("cursor", "pointer");
										tr.dblclick(function(e) {
											$r.data("opt").onDblclick['_JEX_ALL_COLUMN']($r.data("data")[i], tr, e);
										});
									} else {
										$.each($r.data("opt").onDblclick, function(i2,v) {
											tr.find("#"+i2).css("cursor", "pointer");
											tr.find("#"+i2).dblclick(function(e) {
												v($r.data("data")[i], $(this), e);
											});
										});
									}
								}
							} else {
    							$.each(tr.find("td"), function() {
    								$(this).html("");
    							});
							}
							tr.appendTo($r.find("tbody"));
						},
						addNRow	:function(opt) {
							var data_size = opt.length;
							var cnt = parseInt($r.data("opt").cnt,10);
							var cur	= parseInt($r.data("cur"));
							if (isNaN(cnt)) cnt=data_size;
							if (isNaN(cur)) cur=1;
							var s = (((cur-1)*cnt)-(($r.data("opt").cPage-1)*$r.data("opt").maxCnt))+1;
							if (s<0) s=1;
//							if (s==1) s=0;
							var ep = s+cnt-1;
							if ($r.data("opt").page==null||$r.data("opt").page==undefined) {
								ep = data_size;
							}
							for (var i=s-1;i<ep;i++) {
								if (i <= data_size)	jexTblFn.addRow(opt[i], i);
								else				jexTblFn.addRow(null);
							}
							$r.data("data", $r.data("data").concat(opt));
						},
						setAll	 :function(opt) {
							try { jexTblFn.setMaxCnt(gw.paging.getPgReqCnt()); }catch (e) {;}
							
							$r.data("data", []);
							if (opt==null||opt==undefined) opt=[];
							if ($.data("opt").cPage == 1) {
								opt.cur	  = 1;
							}
							jexTblFn.removeAll(opt);
							jexTblFn.addNRow(opt);
							try { jexTblFn.setPage(opt); }catch (e) {;}
						},
						setTotCnt:function(opt) {
							$r.data("totCnt",	opt);
						},
						setMaxCnt:function(opt) {
							var option = $r.data("opt");
							option.maxCnt = opt;
							$r.data("opt", option);
							$r.data("data",	opt);
						},
						setPageNo:function(opt) {
							$r.data("cur", opt);
						},
						setPage	 :function(opt) {
							var footer		=$r.data("opt").footer;
							var page		=$r.data("opt").page;
							var changeList	=$r.data("opt").changeList;
							var totCntView	=$r.data("opt").totCntView;
							var data_size	=$r.data("data").length;
							var cPage		=$r.data("opt").cPage;
							var cur			=parseInt($r.data("cur"));
							var cnt			=parseInt($r.data("opt").cnt,10);
							var totCnt		=parseInt($r.data("opt").totCnt,10);
							var hasNext		=false;
							
							if (cPage<=0) cPage=1;
							if (isNaN(cur)) 	cur=1;
							if (isNaN(cnt)) 	cnt=data_size;
							if (isNaN(totCnt)) 	totCnt=data_size;
							if (cnt==0)		cnt=1;
							var pageCnt = (data_size/cnt)+1;
							var pageCnt2= ($r.data("opt").maxCnt/cnt)+1;
							var sp  	= parseInt((pageCnt2-1)*(cPage-1)+1);
							var ep  	= sp+pageCnt-1;
							if ($r.data("opt").maxCnt > data_size) $r.data("lastCpage", cPage);
							else if ($r.data("lastCpage") == $r.data("opt").cPage) $r.data("lastCpage", -1);
							if (cur < sp) cur=sp;
							if (cur > ep) cur=sp;
							var o = $r.data("opt");
							o.cur=cur;
							$r.data("opt",o);
							
							//alert($r.data("opt").maxCnt);
							
							pageCnt	= (pageCnt>pageCnt2)?pageCnt2:pageCnt;
							var endPage = 0;
							$r2.find("#"+footer).find("#"+page).html("");
							if ($r.data("opt").maxCnt <= data_size) hasNext=true;
							$r.data("hasNext", hasNext);
							
							for (var i=sp; i<sp+pageCnt-1; i++) {
								if (i==cur) {
									if ($r.data("opt").isMbl!=undefined && $r.data("opt").isMbl) {
										$r2.find("#"+footer).find("#"+page).append("<a class='on'>"+i+"</a>");
									} else {
										$r2.find("#"+footer).find("#"+page).append("<strong>"+i+"</strong>");
									}
								} else {
									$r2.find("#"+footer).find("#"+page).append("<a id='"+i+"'>"+i+"</a>");
								}
								endPage = i;
							}
							$r2.find("#"+footer).find("#"+page).find("a").css("cursor","pointer");
							$r2.find("#"+footer).find("#"+page).find("a").click(function(){
								$r.data("cur", $(this).attr("id"));
								jexTblFn.setAll($r.data("data"));
							});
							
							$r2.find("#"+totCntView).html(cur+"/"+endPage);
							
						},
						setCache :function(opt) {
							$r.data("usrCache", opt);
						},
						getCache :function(opt) {
							return $r.data("usrCache");
						},
						removeAll:function(opt) {
							$r.data("data",[]);
							$r.find("tbody").find("tr").remove();
						},
						get		:function(opt) {
							if (typeof(opt) == "number") {
    							return $r.data("data")[opt];
							} else if (typeof(opt) == "string") {
								var result = [];
								var $dat;
								if (opt=="viewData") {
									$dat = $r.find("tbody").find("tr");
								} else {
									$dat = $r.find("tbody").find("tr").find("td").find(opt);
								}
								for (var i=0; i<$dat.length; i++) {
									result.push($r.data("data")[_jexTbl_Get_Tr_Id($dat.eq(i))]);
								}
								return result;
							}
						},
						getObj	:function(opt) {
							return $r.find("tbody").find("tr").find("td").find(opt);
						},
						getAll	:function(opt) {
							return $r.data("data");
						}
					 };
		return jexTblFn[cmd](opt);
	}
});

function _jexTbl_Get_Tr($r) {
	if ($r.get(0).tagName.toLowerCase()=="tr") return $r;
	else return _jexTbl_Get_Tr($r.parents());
}

function _jexTbl_Get_Tr_Id($r) {
	if ($r.get(0).tagName.toLowerCase()=="tr") return $r.attr("id");
	else return _jexTbl_Get_Tr_Id($r.parents());
}