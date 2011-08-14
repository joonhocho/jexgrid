document.write('<script type="text/javascript" src="js/jquery-ui.nonWidgets.min.js"></script>');
jQuery.fn.extend({
	jexTree: function(cmd, opt) {
		var $r		= $(this);
		var jexTreeFn={
						make	 :function(opt)	{
							var dfltopt = {
									folderClickFold : true,
									namePrefix		: "",
									speed			: 200,
									movable		: false,
									movableFn		:null
							};
							jexTreeFn['unfoldAll'](opt);
							$button = $r.find("button");
							$button.click(function() {	foldUnfold($(this)); });
							if (opt!=null || opt!=undefined) { $.each(opt, function(i,v) { dfltopt[i] = v; }); }
							$r.data("tree_opt", dfltopt);
						},
						foldAll	 :function(opt) {
							var $ul = $r.find("ul");
							$.each($ul, function() { $(this).hide(); });
							$button = $r.find("button");
							for (var i=0; i<$button.length; i++) {
								$button.eq(i).find("span").html("+");
							}
						},
						moveUp :function(opt) {
							if ($r.index() == 0) return;
							$r.prev().before($r);
						},
						moveDown:function(opt) {
							if ($r.parent().find("> li").length-1 == $r.index()) return;
							$r.next().after($r);
						},
						unfoldAll :function(opt) {
							var $ul = $r.find("ul");
							$.each($ul, function() { $(this).show(); });
							$button = $r.find("button");
							for (var i=0; i<$button.length; i++) {
								$button.eq(i).find("span").html("-");
							}
						},
						getParent:function(opt) {
							return getParentItm($r.parent());
						},
						add		 :function(opt) {
							var $li = $("<li id='"+opt.id+"'></li>");
							$li.data("cRow", opt); //차후에 필요하면 캐쉬하자.
							if (opt.type=="folder") {
								$li.attr("class","h3 nav_tree_on nav_tree_last");
								
								//$li.append("<button type='button'>-</button><a class='nav_tree_label' style=\"cursor:pointer\"><img src='img/tree/ftv2folderopen.gif' alt='folder' />"+getOpt($r).namePrefix+"</a><a style=\"cursor:pointer\">"+opt.name+"</a><ul  class=\"connectedSortable\"></ul>");
								$li.append("<button type='button'><span class='disn'>-</span></button><a style=\"cursor:pointer\"><img src='img/tree/ftv2folderopen.gif' alt='folder' />"+getOpt($r).namePrefix+"</a><a style=\"cursor:pointer\">"+opt.name+"</a><ul  class=\"h4_menu\"></ul>");
								
								$li.find("button").click(function() { foldUnfold($(this)); });
								if (getOpt($r).folderClickFold) {
									$li.find("a:first").click(function() { foldUnfold($(this).parent().find("button")); });
									$li.find("a:eq(1)").click(function() { foldUnfold($(this).parent().find("button")); });
								}
								if (!getOpt($r).folderClickFold) {
									$li.find("a:first").click(  function() {  var $this=$(this);  if (getOpt($r).onclick!=null && getOpt($r).onclick!=undefined) getOpt($r).onclick(opt, $this); });
									$li.find("a:eq(1)").click(function() {  var $this=$(this);  if (getOpt($r).onclick!=null && getOpt($r).onclick!=undefined) getOpt($r).onclick(opt, $this); });
								}
							} else {
								$li.attr("class","h4_menu nav_tree_off");
								$li.append("<a style=\"cursor:pointer\"><img src='img/tree/ftv2doc.gif' alt='doc' />"+getOpt($r).namePrefix+"</a><a style=\"cursor:pointer\">"+opt.name+"</a>");
								$li.find("a").click(function() { var $this=$(this); if (getOpt($r).onclick!=null && getOpt($r).onclick!=undefined) getOpt($r).onclick(opt, $this); });
							}
							$li.appendTo($r);
							$li.data('dat', opt);
							if (getOpt($r).movable) {
								$li.parent().find("img:first").css("cursor","move");
								$li.parent().sortable({	handle			:'img:first',
																items			:'> li',
																axis				:'y',
																connectWith	:".connectedSortable",
																update			: function(e,ui) {
																						if (typeof(getOpt($r).movableFn)=="function") return getOpt($r).movableFn(e,ui,$(this));
																					}
															}); 
							}
						},
						addList	 :function(opt) {
							addTree(opt, $r);
						},
						remove	 :function(opt) {
							$r.remove();
						}
					 };
		
		function getParentItm($c) {
			if ($c.parent().data("tree_opt")!=null&&$c.parent().data("tree_opt")!=undefined) return "root";
			if ($c.parent().get(0).tagName.toLowerCase()=="li") {
				return $c.parent();
			}
			else return getParentItm($c.parent());
		};
		function getOpt($d) {
			if ($d.get(0).tagName.toLowerCase() == "body") return {};
			if ($d.data("tree_opt")==null||$d.data("tree_opt")==undefined) return getOpt($d.parent());
			return $d.data("tree_opt");
		};
		function addTree(json, $prnt) {
			$.each(json, function(i,v) {
				$prnt.jexTree('add',v);
				if (v.type=="folder") addTree(v.sub, $prnt.find("#"+v.id).find("ul"));
			});
		}; 
		function foldUnfold($r) {
			//var stat = $r.html();
			var stat = $r.find("span").html();
			var opt	 = getOpt($r);
			// unfold
			if (stat=="-") {
				//$r.html("+");
				$r.find("span").html("+");
				$r.css("background", "url(/img/comm/etc/btn_tree_collapse.gif) no-repeat 0 0px");
				$r.parent().find("UL:first").slideUp(opt.speed);
				$r.parent().attr("class","h3 nav_tree_off nav_tree_last");
			}
			// fold
			if (stat=="+") {
				//$r.html("-");
				$r.find("span").html("-");
				$r.css("background", "url(/img/comm/etc/btn_tree_collapse.gif) no-repeat 0 -13px");
				$r.parent().find("UL:first").slideDown(opt.speed);
				$r.parent().attr("class","h3 nav_tree_on nav_tree_last");
			}
		};
		return jexTreeFn[cmd](opt);
	}
});
