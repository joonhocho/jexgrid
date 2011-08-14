jQuery.fn.extend({
	jexDiv: function(cmd, opt) {
		var $r = $(this);
		var jexDivFn={
				make:function(opt) {
					var dfltOpt = {
									closable	:true,
									draggalbe	:true,
									handle		:"#p-title",
									closebtn	:"#close",
									speed		:"0",
									staticP		:true,
									show		:false,
									zindex		:1000,
									align		:"O",
									x			:0,
									y			:0,
									blur		:false,
									bgindex		:999,
									closeOthers	:true,
									toogle		:true,
									blurpostionX:0,
									blurpostionY:0,
									opacity		:50,
									doccontainer:"container"};

					if (opt!=null&&opt!=undefined) $.each(opt, function(i,v) { dfltOpt[i] = v; });

					$r.data("opt",dfltOpt);
					
					
					if (dfltOpt.draggalbe) {
						var ddopt = {};
						if (dfltOpt.handle!=null) {
							ddopt = {handle:dfltOpt.handle};
						    $r.find(dfltOpt.handle).css("cursor", "move");
						    if (dfltOpt.closable)  $r.find(dfltOpt.handle).dblclick(function() { jexDivFn['hide'](opt); });
						}
						$r.draggable(ddopt);
					}
					
					$r.css("z-index",dfltOpt.zindex);
					$r.css("left",   dfltOpt.x+"px");
				    $r.css("top",	 dfltOpt.y+"px");
					$r.css("z-index",$r.data("opt").zindex);
					
			
					$r.find(dfltOpt.closebtn).click(function() { jexDivFn['hide'](opt); });
					
					if (dfltOpt.closeable) {
						$r.keypress(function(event){
							switch (event.keyCode) {
								case 27:
								case 32:
								case 13:
									jexDivFn['hide'](opt);
								break;
							};
							switch (event.charCode) {
								case 27:
								case 32:
								case 13:
									jexDivFn['hide'](opt);
								break;
						};
						});
					};
					
					if (!opt.show) {
						jexDivFn['hide'](opt);
					} else {
						if (opt.init!=null) jexDivFn['show']($("#"+opt.init));
						else jexDivFn['show'](opt);
					}
        		},
				show:function(opt) {
					if ($r.data("opt").toogle) {
						if ($r.data("isShow"))	jexDivFn['hide'](opt);
						else 					showFn(opt);
					}
					else showFn(opt);
    				/*
        			if ($r.data("isShow")) {
        			    $r.fadeOut($r.data("opt").speed, function() { showFn(opt); });
        			} else {
        				showFn(opt);
        			}
        			*/
        		},
        		hide:function(opt) {
        		    $r.fadeOut($r.data("opt").speed);
        		    $("#_jex_div_bg").fadeOut($r.data("opt").speed);
        		    $r.data("isShow",false);
        		},
        		isOpen:function(opt) {
        			return $r.data("isShow");
        		}
		};
		function showFn(opt) {
			if ($r.data("opt").staticP) {
		    	var x;
	 		    var y;
	 		    if (opt==null&&opt==undefined) {
	 		    	var x = $r.data("opt").x;
		 		    var y = $r.data("opt").y;
	 		    } else if ((opt!=null||opt!=undefined)&&opt.offset!=undefined) {
	 		    	var al=0;
		 		    var at=0;
		 		    if($r.data("opt").align=="L") al=-opt.width();
		 		    if($r.data("opt").align=="R") al=opt.width();
		 		    if($r.data("opt").align=="T") at=-opt.width();
		 		    if($r.data("opt").align=="B") at=opt.width();
		 		    var x = opt.offset().left  + $r.data("opt").x + (al);
		 		    var y = opt.offset().top   + $r.data("opt").y + (at); 		    	
				} else 	if (opt.pageX!=undefined&&opt.pageY!=undefined) {
				   var x = opt.pageX;
		 		   var y = opt.pageY-10;
				} else {
	 		    	var x = $r.data("opt").x;
		 		    var y = $r.data("opt").y;
				}
				$r.css("position",	"absolute");
				$r.css("left",		x+"px");
				$r.css("top",		y+"px");
			}
			if ($r.data("opt").blur) {
				$r.css("z-index",$r.data("opt").bgindex);
				if ($("#_jex_div_bg").length==0) {
					var opacity = $r.data("opt").opacity;
					var opacity2= $r.data("opt").opacity/100;
					var height = $(document.body).find("#"+$r.data("opt").doccontainer).height()-$r.data("opt").blurpostionY+"px";
					if (height==undefined || height=="0px") height="100%";
					var styleStr= "position:absolute;left:"+$r.data("opt").blurpostionX+"px;top:"+$r.data("opt").blurpostionY+"px;width:100%;height:"+height+";background-color:#000000;FILTER:filter: alpha(opacity="+opacity+"); -khtml-opacity: "+opacity2+"; -moz-opacity:"+opacity2+"; opacity: "+opacity2+";z-index:"+$r.data("opt").bgindex+"'";
					$bg = $("<div id='_jex_div_bg' style='"+styleStr+"'></div>");
					//$bg.css("z-index",$r.data("opt").bgindex);
					$bg.appendTo($(document.body));
					
					$r.css("z-index",$r.data("opt").zindex);
				} else {
					$("#_jex_div_bg").show();
					$r.css("z-index",$r.data("opt").zindex);
				}
			}
			if ($r.data("opt").closeOthers) {
				$.each($("["+_jextype+"=div]"),function() {
					$(this).hide();
					$(this).data("isShow",false);
				});
			}
			$r.fadeIn($r.data("opt").speed, function() {
				$r.data("isShow",true);
			});
		};
		return jexDivFn[cmd](opt);
    }
});
