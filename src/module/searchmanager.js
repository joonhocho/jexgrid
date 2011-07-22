/*!
 * AUTHOR
 *   The JexGrid was written and is maintained by:
 *       Joon Ho Cho <joonho1101@gmail.com>
 * COPYRIGHT
 *   Copyright (c) 2010-2011, WebCash Inc. All rights reserved.
 */
(function() {

 goog.require('JGM.core.BaseModule');

 goog.provide('JGM.module.SearchManager');

 JGM.module.SearchManager = SearchManager;

function SearchManager(args) {
	this.mid = args.mid;

	this._ctnr = args.container;
	this.__mask_a__;

	this.__search_c__;
	this.__masterInput_p__;
	this.__tag_d__;
	this.__advButton_q__;
	this.__adv_e__;

	this.grid = args.grid;
	
	/**
	필터링을 하여 데이터 검색을 관리하는 {@link JGM.SeachManager SeachManager} 인스턴스 입니다.

	@var {public JGM.SeachManager} JGM.Grid.search

	@author 조준호
	@since 1.2.0
	@version 1.2.1
	*/
	this.grid.search = this;

	var options = {
		__background_a__: "#f0f0f0",
		__borderThickness_b__: 1,
		__border_c__: "solid #d6d6d6",

		__inputBorder_d__: "1px solid #A7A7A7",
		__inputPadding_e__: 0,

		__searchbarAlign_f__: "center",
		__searchbarMargin_g__: 3,
		__searchbarWidth_h__: "99%",
		__searchbarHeight_i__: 20,

		__tagsHeight_j__: 26,
		__tagsPadding_k__: 2,
		__tagsBorderRadius_l__: 3,

		__advButtonColor_m__: "#123272",
		__advButtonFont_n__: "bold 12px Arial,Helvetica,sans-serif",
		__advButtonPadding_o__: 5,

		__advButtonBg_p__: "",
		__advButtonBgHover_q__: "url(" + this.grid._options.imageUrl + "more-options-bg-hover.png) repeat-x scroll center",
		__advButtonBgActive_r__: "url(" + this.grid._options.imageUrl + "more-options-bg-active.png) repeat-x scroll center",
		__advButtonBgOpened_s__: "url(" + this.grid._options.imageUrl + "more-options-bg-opened.png) repeat-x scroll center",

		__advButtonBorderThickness_t__: 1,
		__advButtonBorder_u__: "solid transparent",
		__advButtonBorderHover_v__: "solid #a4a4a4",
		__advButtonBorderActive_w__: "solid #c5c5c5",
		__advButtonBorderOpened_x__: "solid #bfbfbf",

		__advButtonIconWidth_y__: 9,
		__advButtonIconMargin_z__: 2,
		__advButtonIconUrl_A__: this.grid._options.imageUrl + "more-options.png",
		__advButtonIconCloseUrl_B__: this.grid._options.imageUrl + "more-options-close.png",

		__tagPadding_C__: 2,
		__tagBorder_D__: "solid #93979D",
		__tagBorderThickness_E__: 1,
		__tagFont_F__: "bold 13px Arial",
		__tagColor_G__: "#282853",
		__tagBackground_H__: "url(" + this.grid._options.imageUrl + "tag-background.png) repeat-x scroll center",

		__tagRemoveIconWidth_I__: 12,
		__tagRemoveIconUrl_J__: this.grid._options.imageUrl + "tag-close.png",
		__tagRemoveIconHoverUrl_K__: this.grid._options.imageUrl + "tag-close-hover.png",

		__advFont_L__: "11px Arial",
		__advInputWidth_M__: 30,

		__classMask_N__: "search-mask",
		__classSearchbar_O__: "search-bar",
		__classAdvButtonName_P__: "more-option-name",
		__classAdvButton_Q__: "more-options",
		__classAdvButtonIcon_R__: "more-icon",
		__classClearTags_S__: "clear-tags",
		__classTagbar_T__: "search-tags",
		__classTag_U__: "search-tag",
		__classTagName_V__: "search-tag-name",
		__classRemoveTag_W__: "search-tag-remove",
		__classAdvanced_X__: "search-advanced",
		__classOptionCol_Y__: "search-option-col",
		__classOption_Z__: "search-option",
		__classSearchIcon_aa__: "search-icon",
		__searchIconUrl_ab__: this.grid._options.imageUrl + "search-icon.png",
		__searchIconWidth_ac__: 15,
		__searchIconHeight_ad__: 15,
		__keyMap_ae__: undefined,
		__tagRemoveIconActiveUrl_af__: this.grid._options.imageUrl + "tag-close-active.png",
		
		__syncMaster_ag__: false
	};

	this._options = JGM.__extend_e__(options, args.options, {

		background:"__background_a__",
		borderThickness:"__borderThickness_b__",
		border:"__border_c__",

		inputBorder:"__inputBorder_d__",
		inputPadding:"__inputPadding_e__",

		searchbarAlign:"__searchbarAlign_f__",
		searchbarMargin:"__searchbarMargin_g__",
		searchbarWidth:"__searchbarWidth_h__",
		searchbarHeight:"__searchbarHeight_i__",

		tagsHeight:"__tagsHeight_j__",
		tagsPadding:"__tagsPadding_k__",
		tagsBorderRadius:"__tagsBorderRadius_l__",

		advButtonColor:"__advButtonColor_m__",
		advButtonFont:"__advButtonFont_n__",
		advButtonPadding:"__advButtonPadding_o__",

		advButtonBg:"__advButtonBg_p__",
		advButtonBgHover:"__advButtonBgHover_q__",
		advButtonBgActive:"__advButtonBgActive_r__",
		advButtonBgOpened:"__advButtonBgOpened_s__",

		advButtonBorderThickness:"__advButtonBorderThickness_t__",
		advButtonBorder:"__advButtonBorder_u__",
		advButtonBorderHover:"__advButtonBorderHover_v__",
		advButtonBorderActive:"__advButtonBorderActive_w__",
		advButtonBorderOpened:"__advButtonBorderOpened_x__",

		advButtonIconWidth:"__advButtonIconWidth_y__",
		advButtonIconMargin:"__advButtonIconMargin_z__",
		advButtonIconUrl:"__advButtonIconUrl_A__",
		advButtonIconCloseUrl:"__advButtonIconCloseUrl_B__",

		tagPadding:"__tagPadding_C__",
		tagBorder:"__tagBorder_D__",
		tagBorderThickness:"__tagBorderThickness_E__",
		tagFont:"__tagFont_F__",
		tagColor:"__tagColor_G__",
		tagBackground:"__tagBackground_H__",

		tagRemoveIconWidth:"__tagRemoveIconWidth_I__",
		tagRemoveIconUrl:"__tagRemoveIconUrl_J__",
		tagRemoveIconHoverUrl:"__tagRemoveIconHoverUrl_K__",

		advFont:"__advFont_L__",
		advInputWidth:"__advInputWidth_M__",

		classMask:"__classMask_N__",
		classSearchbar:"__classSearchbar_O__",
		classAdvButtonName:"__classAdvButtonName_P__",
		classAdvButton:"__classAdvButton_Q__",
		classAdvButtonIcon:"__classAdvButtonIcon_R__",
		classClearTags:"__classClearTags_S__",
		classTagbar:"__classTagbar_T__",
		classTag:"__classTag_U__",
		classTagName:"__classTagName_V__",
		classRemoveTag:"__classRemoveTag_W__",
		classAdvanced:"__classAdvanced_X__",
		classOptionCol:"__classOptionCol_Y__",
		classOption:"__classOption_Z__",

		classSearchIcon:"__classSearchIcon_aa__",
		searchIconUrl:"__searchIconUrl_ab__",
		searchIconWidth:"__searchIconWidth_ac__",
		searchIconHeight:"__searchIconHeight_ad__",
		keyMap: "__keyMap_ae__",
		tagRemoveIconActiveUrl: "__tagRemoveIconActiveUrl_af__",
		syncMaster:"__syncMaster_ag__"
	});

	this.__filterMap_f__ = {};
	this.__tagMap_g__ = {};
	this.__nameMap_h__ = {};
	this.__codeMap_i__ = {};
	this.__global_r__ = [];
	this.__globalMap_s__ = {};
	this.__hasFilter_x__;
	this.__keyToName_y__ = {};
	
	this.__init();
}

var prototype = SearchManager.prototype;

prototype.__onCreateCss_V__ = function() {
	var gridId = "#" + this.grid.mid + " .",
		o = this._options,
		border = o.__borderThickness_b__ + "px " + o.__border_c__,
		tagsBorderRadius = "border-radius:" + o.__tagsBorderRadius_l__ + "px;-moz-border-radius:" + o.__tagsBorderRadius_l__ + "px",
		advButtonBorder = o.__advButtonBorderThickness_t__ + "px " + o.__advButtonBorder_u__,
		advButtonBorderHover = o.__advButtonBorderThickness_t__ + "px " + o.__advButtonBorderHover_v__,
		advButtonBorderActive = o.__advButtonBorderThickness_t__ + "px " + o.__advButtonBorderActive_w__,
		advButtonBorderOpened = o.__advButtonBorderThickness_t__ + "px " + o.__advButtonBorderOpened_x__,
		tagsInnerHeight = o.__tagsHeight_j__ - 2 * o.__tagsPadding_k__,
		advButtonHeight = tagsInnerHeight - 2 * o.__advButtonBorderThickness_t__,
		tagHeight = tagsInnerHeight - 2 * o.__tagBorderThickness_E__,
		classMask = gridId + o.__classMask_N__,
		classSearchar = gridId + o.__classSearchbar_O__,
		classAdvButton = gridId + o.__classAdvButton_Q__,
		classRemoveTag = gridId + o.__classRemoveTag_W__,
		rules = [];

	rules.push(classMask + "{" + JGM.__CONST_g__.__cssUnselectable_a__ + "overflow:hidden;width:100%;background:" + o.__background_a__ +"}");
	rules.push(classMask + " button{margin:0;padding:0 3px}");
	rules.push(classMask + " input{border:" + o.__inputBorder_d__ + ";padding:" + o.__inputPadding_e__ + "}");

	rules.push(classSearchar + "{text-align:" + o.__searchbarAlign_f__ + ";border-bottom:" + border + "}");
	rules.push(classSearchar + " input{width:" + o.__searchbarWidth_h__ + ";margin:" + o.__searchbarMargin_g__ + "px 0;height:" + o.__searchbarHeight_i__ + "px;" + tagsBorderRadius + "}");

	rules.push(gridId + o.__classTagbar_T__ + "{cursor:default;height:" + (o.__tagsHeight_j__ - o.__tagsPadding_k__) + "px;padding:" + o.__tagsPadding_k__ + "px 0 0 " + o.__tagsPadding_k__ + "px;border-bottom:" + border + "}");

	rules.push(classAdvButton + "{float:left;margin-right:" + o.__tagsPadding_k__ + "px;background:" + o.__advButtonBg_p__ + ";border:" + advButtonBorder + ";padding:0 " + o.__advButtonPadding_o__ + "px;" + tagsBorderRadius + "}");
	rules.push(classAdvButton + ":hover{background:" + o.__advButtonBgHover_q__ + ";border:" + advButtonBorderHover + "}");
	rules.push(classAdvButton + ".opened{background:" + o.__advButtonBgOpened_s__ + ";border:" + advButtonBorderOpened + "}");
	rules.push(classAdvButton + ":active{background:" + o.__advButtonBgActive_r__ + ";border:" + advButtonBorderActive + "}");

	rules.push(gridId + o.__classAdvButtonName_P__ + "{float:left;color:" + o.__advButtonColor_m__ + ";font:" + o.__advButtonFont_n__ + ";line-height:" + advButtonHeight + "px}");
	rules.push(gridId + o.__classAdvButtonIcon_R__ + "{float:left;height:" + advButtonHeight + "px;margin-left:" + o.__advButtonIconMargin_z__ + "px;background:url(" + o.__advButtonIconUrl_A__ + ") no-repeat center;width:" + o.__advButtonIconWidth_y__ + "px}");
	rules.push(classAdvButton + ".opened ." + o.__classAdvButtonIcon_R__ + "{background:url(" + o.__advButtonIconCloseUrl_B__ + ") no-repeat center}");

	rules.push(gridId + o.__classTag_U__ + "{float:left;border:" + o.__tagBorderThickness_E__ + "px " + o.__tagBorder_D__ + ";margin:0 " + o.__tagsPadding_k__ + "px " + o.__tagsPadding_k__ + "px 0;padding:0 " + o.__tagPadding_C__ + "px;background:" + o.__tagBackground_H__ + ";" + tagsBorderRadius + "}");
	rules.push(gridId + o.__classTagName_V__ + "{float:left;color:" + o.__tagColor_G__ + ";font:" + o.__tagFont_F__ + ";line-height:" + tagHeight + "px}");
	rules.push(classRemoveTag + "{float:left;margin-left:" + o.__tagPadding_C__ + "px;background:url(" + o.__tagRemoveIconUrl_J__ + ") no-repeat center;width:" + o.__tagRemoveIconWidth_I__ + "px;height:" + tagHeight + "px}");
	rules.push(classRemoveTag + ":hover{background:url(" + o.__tagRemoveIconHoverUrl_K__ + ") no-repeat center}");
	rules.push(classRemoveTag + ":active{background:url(" + o.__tagRemoveIconActiveUrl_af__ + ") no-repeat center}");

	rules.push(gridId + o.__classClearTags_S__ + "{height:" + tagsInnerHeight + "px}");

	rules.push(gridId + o.__classAdvanced_X__ + "{cursor:default;font:" + o.__advFont_L__ + ";border-bottom:" + border + "}");
	rules.push(gridId + o.__classOptionCol_Y__ + "{display:inline-block;vertical-align:top}");
	rules.push(gridId + o.__classOptionCol_Y__ + " input{width:" + o.__advInputWidth_M__ + "px;margin-right:2px;" + tagsBorderRadius + "}");
	rules.push(gridId + o.__classSearchIcon_aa__ + "{background:url(" + o.__searchIconUrl_ab__ + ") no-repeat center;width:" + o.__searchIconWidth_ac__ + "px;height:" + o.__searchIconHeight_ad__ + "px}");

	return rules.join("");
};

SearchManager.getInstance = function(args) {
	return new SearchManager(args);
};

prototype.__init = function() {
	var opt = this._options,
		thisIns = this,
		mask,
		hasFilter,
		tag;

	mask = this.__mask_a__ = $("<div class='" + opt.__classMask_N__ + "'>").prependTo(this._ctnr);

	this.__search_c__ = $("<div class='" + opt.__classSearchbar_O__ + "'><input type='text'/></div>").appendTo(mask);

	this.__masterInput_p__ = this.__search_c__.children(":eq(0)").keyup(function(e) {
		if (e.which === Util.keyMapKeydown.enter) {
			thisIns.__parse_k__($(this)[0].value);
		}
		else if (e.which === Util.keyMapKeydown.esc) {
			thisIns.__removeAllOptions_n__();
		}
	});

	hasFilter = this.__hasFilter_x__ = this.grid.colDefMgr.get().some(function(a){return Util.isNotNull(a.filter);});
	tag = this.__tag_d__ =
		$("<div class='" + opt.__classTagbar_T__ + "'>" + (hasFilter ? "<div class='" + opt.__classAdvButton_Q__ + "'><div class='" + opt.__classAdvButtonName_P__ + "'>추가 옵션</div><div class='" + opt.__classAdvButtonIcon_R__ + "'></div></div>" : "") + "<button type='button' class='" + opt.__classClearTags_S__ + "' onclick='JGM.m.SearchManager." + this.mid + ".__removeAllOptions_n__()'>모든 필터 제거</button></div>")
		.appendTo(mask);

	if (hasFilter) {
		var adv = this.__adv_e__ = $("<div class='" + opt.__classAdvanced_X__ + "'>").appendTo(mask).hide()
			.keyup(function(e) {
				if (e.which === Util.keyMapKeydown.enter) {
					var key = e.target.getAttribute("key");
					thisIns.__registerOption_l__(key, thisIns.__keyToName_y__[key], e.target.getAttribute("tag"), e.target.value);
					e.target.value = "";
				}
			});

		this.__advButton_q__ = tag.children(":eq(0)").click(function() {
			$(this).toggleClass("opened");
			adv.toggle("fast");
		});
	}

	this.grid.event.bind({
		onRenderModules: this.__onRenderModules_aE__,
		onCreateCss: this.__onCreateCss_V__,
		onFilter: this.__onFilter_ar__,
		onDestroy: this.__destroy_aA__,
		onAfterRenderModules: this.__onAfterRenderModules_aF__
	}, this);
};

prototype.__onRenderModules_aE__ = function() {
	var html = [],
		opt = this._options,
		mask = this.__mask_a__;
	if (this.__hasFilter_x__) {			
		var colDefs = this.grid.colDefMgr.get(),
			len = colDefs.length,
			keymap = opt.__keyMap_ae__,
			nmap = this.__nameMap_h__,
			kmap = this.__keyToName_y__,
			colDef,
			nick,
			key,
			i = 0;
		for (; i < len; i++) {
			colDef = colDefs[i];
			if (Util.isNotNull(colDef.filter)) {
				key = colDef.key;
				if (Util.isNull(keymap) || !keymap.hasOwnProperty(key)) {
					nick = colDef.name || key;
				}
				else {
					nick = keymap[key];
				}
				
				nmap[nick] = key;
				kmap[key] = nick;

				html.push("<div class='" + opt.__classOptionCol_Y__ + "'>");
				this.__registerFilter_j__(key, nick, colDef.name, colDef.filter, html);
				html.push("</div>");
			}
		}

		this.__adv_e__[0].innerHTML = html.join("");
	}
	
	if (Util.isNotNull(this.grid.menubar)) {
		this.grid.menubar.addIcon(opt.__classSearchIcon_aa__, "데이터 검색을 합니다.", opt.__searchIconWidth_ac__, opt.__searchIconHeight_ad__, function() {
			mask.toggle("fast");
		});
		mask.hide();
	}
};

prototype.__onAfterRenderModules_aF__ = function() {
	var map = this.__filterMap_f__,
		keymap,
		key,
		tag,
		item,
		adv = this.__adv_e__;
		
	for (key in map) {
		if (map.hasOwnProperty(key)) {
			keymap = map[key];
			for (tag in keymap) {
				if (keymap.hasOwnProperty(tag)) {
					if (tag !== "andor" && tag !== "parser" && tag !== "validator") {
						(item = keymap[tag]).input = adv.find("#" + key + item.option.name);
					}
				}
			}
		}
	}
};

prototype.__destroy_aA__ = function() {
	var key,
		tag,
		base,
		gmap = this.__globalMap_s__,
		fmap = this.__filterMap_f__,
		ftmap,
		tmap = this.__tagMap_g__,
		ttmap,
		ttbmap;

	for (key in gmap) {
		if (gmap.hasOwnProperty(key)) {
			JGM.__delete$_n__(gmap[key], "tag");
			JGM.__deleteArray_r__(gmap[key], "list");
		}
	}
	
	for (key in fmap) {
		if (fmap.hasOwnProperty(key)) {
			ftmap = fmap[key];
			for (tag in ftmap) {
				if (ftmap.hasOwnProperty(tag)) {
					if (tag !== "andor" && tag !== "parser" && tag !== "validator") {
						JGM.__delete$_n__(ftmap[tag], "input");
					}
					JGM.__deleteMap_l__(ftmap, tag);
				}
			}
			JGM.__deleteMap_l__(fmap, key);
		}
	}

	for (key in tmap) {
		if (tmap.hasOwnProperty(key)) {
			ttmap = tmap[key];
			for (tag in ttmap) {
				if (ttmap.hasOwnProperty(tag)) {
					ttbmap = ttmap[tag];
					for (base in ttbmap) {
						if (ttbmap.hasOwnProperty(base)) {
							JGM.__delete$_n__(ttbmap[base], "tag");
							JGM.__deleteMap_l__(ttbmap, base);
						}
					}
					JGM.__deleteMap_l__(ttmap, tag);
				}
			}
			JGM.__deleteMap_l__(tmap, key);
		}
	}
	
	JGM._destroy(this, {
		name: "SearchManager",
		path: "search",
		"$": "__masterInput_p__ __advButton_q__ __mask_a__ __search_c__ __tag_d__ __adv_e__",
		property: "_ctnr __hasFilter_x__",
		array: "__global_r__",
		map: "__globalMap_s__ __filterMap_f__ __tagMap_g__ __codeMap_i__ __nameMap_h__ _options __keyToName_y__"
	});
};

prototype.__onFilter_ar__ = function(success, failed) {
	if (this.__global_r__.length === 0 && Util.isEmptyObj(this.__codeMap_i__)) {
		return;
	}

	var options,
		tagMap = this.__tagMap_g__,
		key,
		tag,
		len = success.length,
		data,
		value,
		andor,
		filterMap = this.__filterMap_f__,
		and = this.constructor.CONST.and,
		base,
		hasGlobal = this.__global_r__.length > 0,
		i,
		keymap;
	
	if (hasGlobal) {
		var global = this.__global_r__,
			globalToFind,
			j,
			k,
			val,
			cols = this.grid.colDefMgr.get().filter(function(c){return !c.noSearch;}),
			keylen = cols.length,
			keys = [];
		for (i = 0; i < keylen; i++) {
			keys.push(cols[i].key);
		}
	}
					
	data_loop:
	for (i = len - 1; i >= 0; i--) {
		data = success[i];
		if (hasGlobal) {
			globalToFind = global.slice();
			k = 0;
			key_loop:
			for (; globalToFind.length !== 0 && k < keylen; k++) {
				if (Util.isNull(val = data[keys[k]])) {
					continue;
				}
				if (!Util.isString(val)) {
					val = val.toString();
				}
				for (j = globalToFind.length - 1; j >= 0; j--) {
					if (val.indexOf(globalToFind[j]) !== -1) {
						globalToFind.removeAt(j);
					}
				}
			}
			if (globalToFind.length !== 0) {
				success.removeAt(i);
				failed.push(data);
				continue data_loop;
			}
		}
		for (key in tagMap) {
			if (tagMap.hasOwnProperty(key)) {
				keymap = tagMap[key];
				andor = filterMap[key].andor;
				value = data[key];
				if (andor === and) {
					for (tag in keymap) {
						if (keymap.hasOwnProperty(tag)) {
							options = keymap[tag];
							for (base in options) {
								if (options.hasOwnProperty(base)) {
									if (!options[base].fn(value)) {
										success.removeAt(i);
										failed.push(data);
										continue data_loop;
									}
								}
							}
						}
					}
				}
				else {
					for (tag in keymap) {
						if (keymap.hasOwnProperty(tag)) {
							options = keymap[tag];
							for (base in options) {
								if (options.hasOwnProperty(base)) {
									if (options[base].fn(value)) {
										continue data_loop;
									}
								}
							}
						}
					}
					success.removeAt(i);
					failed.push(data);
					continue data_loop;
				}
			}
		}
	}
};

prototype.__registerFilter_j__ = function(key, nick, name, filter, html) {
	if (this.__filterMap_f__.hasOwnProperty(key)) {
		return;
	}

	if (filter === "number") {
		filter = this.constructor.__numberFilter_d__;
	}
	else if (filter === "string") {
		filter = this.constructor.__stringFilter_e__;
	}

	var option,
		len = filter.length,
		i = 0,
		mid = this.mid,
		classOpt = this._options.__classOption_Z__,
		fkmap,
		tmap,
		tag,
		oname;
		
	fkmap = this.__filterMap_f__[key] = {andor:this.constructor.CONST.and};
	tmap = this.__tagMap_g__[key] = {};

	html.push("<table>");

	for (; i < len; i++) {
		option = filter[i];
		oname = option.name;
		if (oname === "parser") {
			fkmap.parser = option.fn;
			continue;
		}
		if (oname === "validator") {
			fkmap.validator = option.fn;
			continue;
		}
		tag = option.tag;
		fkmap[tag] = {option:option};
		tmap[tag] = {};
		html.push("<tr title='" + option.comment(name, "입력값") + "'><td><div class='" + classOpt + "'>" + name + " " + tag +
			"</td><td><input id='" + key + oname + "' key='" + key + "' tag='" + tag + "' type='text'><button type='button' onclick=\"JGM.m.SearchManager." + mid + ".__registerOption_l__('" + key + "','" + nick + "','" + tag + "',this.previousSibling.value)\">등록</button></div></td></tr>");
	}
	html.push("</table>");
};

prototype.__parse_k__ = function(str) {
	var arg,
		key,
		name,
		tag,
		base,
		args = Util.split(str),
		len = args.length,
		status = 2,
		change = false,
		global = [],
		nmap = this.__nameMap_h__,
		fmap = this.__filterMap_f__,
		i = 0;

	for (; i < len; i++) {
		arg = args[i];
		if (arg === "") {
			continue;
		}
		switch(status) {// 0 -> key obtained, 1 -> key&tag obtained, 2 -> arg obtained
			case 0:
				if (fmap[key].hasOwnProperty(arg)) {
					tag = arg;
					status = 1;
				}
			break;
			case 1:
				base = arg;
				status = 2;
			break;
			case 2:
				if (arg.charAt(0) === "@") {
					arg = arg.substring(1);
					if (nmap.hasOwnProperty(arg)) {
						if (Util.isNotNullAnd(key, name, tag, base)) {
							if (this.__registerOption_l__(key, name, tag, base, true)) {
								change = true;
							}
						}
						key = nmap[arg];
						name = arg;
						tag = undefined;
						base = undefined;
						status = 0;
					}
					else if (Util.isNull(key)) {
						global.push(arg);
					}
					else {
						base += " " + arg;
					}
				}
				else if (Util.isNull(key)) {
					global.push(arg);
				}
				else {
					base += " " + arg;
				}
			break;
			default:
		}
	}
	if (Util.isNotNullAnd(key, name, tag, base)) {
		if (this.__registerOption_l__(key, name, tag, base, true)) {
			change = true;
		}
	}
	if (this.__registerGlobal_v__(global)) {
		change = true;
	}
	
	
	this.__syncMasterInput_u__();
	
	if (change) {
		this.grid.dataMgr.refresh();
	}
};

prototype.__syncMasterInput_u__ = function() {
	if (this._options.__syncMaster_ag__) {
		var inputStr = this.__global_r__.join(" "),
			tagMap = this.__tagMap_g__,
			keyToName = this.__keyToName_y__,
			key,
			tag,
			base,
			keymap,
			basemap;
		for (key in tagMap) {
			if (tagMap.hasOwnProperty(key)) {
				keymap = tagMap[key];
				for (tag in keymap) {
					if (keymap.hasOwnProperty(tag)) {
						basemap = keymap[tag];
						for (base in basemap) {
							if (basemap.hasOwnProperty(base)) {
								inputStr += " @" + keyToName[key] + " " + tag + " " + base;
							}
						}
					}
				}
			}
		}					
		this.__masterInput_p__[0].value = $.trim(inputStr);
	}
	else {
		this.__masterInput_p__[0].value = "";
	}
};

prototype.__registerGlobal_v__ = function(toAdd) {
	var i = 0,
		len = toAdd.length,
		global = this.__global_r__;
	for (; i < len; i++) {
		if (global.indexOf(toAdd[i]) !== -1) {
			toAdd.removeAt(i--);
		}
		else {
			global.push(toAdd[i]);
		}
	}
	
	if (toAdd.length === 0) {
		return false;
	}
		
	var opt = this._options;
	this.__globalMap_s__[toAdd[0]] = {
		tag:$("<div class='" + opt.__classTag_U__ + "' title='" + toAdd.join(", ") + " 를 포함하는'><div class='" + opt.__classTagName_V__ + "'>" + toAdd.join(" ") +
		"</div><div class='" + opt.__classRemoveTag_W__ + "' title='필터 제거' onclick=\"JGM.m.SearchManager." + this.mid + ".__removeGlobal_w__('" + toAdd[0] + "')\"></div></div>").appendTo(this.__tag_d__),
		list: toAdd
	};
	return true;
};

prototype.__removeGlobal_w__ = function(index) {
	var gmap = this.__globalMap_s__;
	if (gmap.hasOwnProperty(index)) {
		var item = gmap[index];
		item.tag.remove();
		delete item.tag;
		this.__global_r__.removeList(item.list);
		item.list.length = 0;
		delete item.list;
		delete gmap[index];
		this.__syncMasterInput_u__();
		this.grid.dataMgr.refresh();
	}
};

prototype.__registerOption_l__ = function(key, nick, optionTag, base, norefresh) {
	var fmap = this.__filterMap_f__,
		fkmap,
		fkomap,
		cmap = this.__codeMap_i__;
	if (fmap.hasOwnProperty(key) && (fkmap = fmap[key]).hasOwnProperty(optionTag)) {
		fkomap = fkmap[optionTag];
		if (Util.isNull(base)) {
			var input = fkomap.input;
			base = $.trim(input.val());
			input.val("");
		}
		else {
			base = $.trim(base);
		}
			
		if (base.length === 0) {
			return false;
		}

		if (Util.isNotNull(fkmap.parser)) {
			base = fkmap.parser(base);
		}

		if (cmap.hasOwnProperty(key + "@T" + optionTag + "@B" + base)) {
			return false;
		}

		if (Util.isNotNull(fkmap.validator)) {
			if (!fkmap.validator(base)) {
				return false;
			}
		}

		var option = fkomap.option,
			andor = fkmap.andor;
	}
	else {
		return false;
	}

	var tagmap = this.__tagMap_g__[key];
	if (tagmap[optionTag].hasOwnProperty(base)) {
		return false;
	}

	var options,
		parsedOther,
		tag,
		otherbase,
		filtermap = this.__filterMap_f__[key],
		oomap;
	for (tag in tagmap) {
		if (tagmap.hasOwnProperty(tag)) {
			options = tagmap[tag];
			for (otherbase in options) {
				if (options.hasOwnProperty(otherbase)) {
					oomap = options[otherbase];
					if (Util.isNotNull(filtermap.parser)) {
						parsedOther = filtermap.parser(otherbase);
					}
					else {
						parsedOther = otherbase;
					}

					if (SearchManager.__checkDisable_c__(option.type, oomap.option.type, andor, base, parsedOther)) {
						delete cmap[key + "@T" + oomap.option.tag + "@B" + parsedOther];
						oomap.tag.remove();
						delete oomap.tag;
						delete oomap.option;
						delete oomap.fn;
						delete options[otherbase];
					}
				}
			}
		}
	}

	cmap[key + "@T" + optionTag + "@B" + base] = true;
	this.__createTag_o__(key, option, base, nick);

	if (!norefresh) {
		this.__syncMasterInput_u__();
		this.grid.dataMgr.refresh();
	}

	return true;
};

prototype.__removeOption_m__ = function(key, tag, base) {
	var tmap = this.__tagMap_g__,
		tkmap,
		tktmap;
	if (tmap.hasOwnProperty(key) && (tkmap = tmap[key]).hasOwnProperty(tag) && (tktmap = tkmap[tag]).hasOwnProperty(base)) {
		var option = tktmap[base];
		option.tag.remove();
		delete option.tag;
		delete option.option;
		delete option.fn;
		delete tktmap[base];
		delete this.__codeMap_i__[key + "@T" + tag + "@B" + base];
		this.__syncMasterInput_u__();
		this.grid.dataMgr.refresh();
	}
};

prototype.__removeAllOptions_n__ = function() {
	var key,
		global = this.__globalMap_s__,
		item,
		map = this.__tagMap_g__,
		tag,
		base,
		tagmap,
		basemap,
		bb;

	for (key in global) {
		if (global.hasOwnProperty(key)) {
			item = global[key];
			item.tag.remove();
			delete item.tag;
			item.list.length = 0;
			delete item.list;
			delete global[key];
		}
	}
	this.__global_r__.length = 0;
		
	for (key in map) {
		if (map.hasOwnProperty(key)) {
			tagmap = map[key];
			for (tag in tagmap) {
				if (tagmap.hasOwnProperty(tag)) {
					basemap = tagmap[tag];
					for (base in basemap) {
						if (basemap.hasOwnProperty(base)) {
							bb = basemap[base];
							bb.tag.remove();
							delete bb.tag;
							delete bb.option;
							delete bb.fn;
							delete basemap[base];
						}
					}
				}
			}
		}
	}

	this.__codeMap_i__ = {};
	this.__syncMasterInput_u__();
	
	this.grid.dataMgr.refresh();
};

prototype.__createTag_o__ = function(key, option, base, nick) {
	var opt = this._options;
	return (this.__tagMap_g__[key][option.tag][base] = {
		tag:$("<div class='" + opt.__classTag_U__ + "' title='" + option.comment(nick, base) + "'><div class='" + opt.__classTagName_V__ + "'>@" + nick + " " + option.tag + " " + base +
		"</div><div class='" + opt.__classRemoveTag_W__ + "' title='필터 제거' onclick=\"JGM.m.SearchManager." + this.mid + ".__removeOption_m__('" + key + "','" + option.tag + "','" + base + "')\"></div></div>").appendTo(this.__tag_d__),
		option:option,
		fn:option.fn(base)
	});
};

var con = SearchManager.CONST = {
		lt:0,
		lte:1,
		eq:2,
		neq:3,
		gt:4,
		gte:5,
		and:6,
		or:7,
		T:8,
		F:9
	},
	lt = con.lt,
	gt = con.gt,
	eq = con.eq,
	neq = con.neq,
	and = con.and,
	or = con.or,
	T = con.T,
	F = con.F,
	comp = SearchManager.__comparator_a__ = {},
	complt = comp[lt] = function(a,b){return a <= b;},
	compgt = comp[gt] = function(a,b){return a >= b;},
	compeq = comp[eq] = function(a,b){return a === b;},
	compT = comp[T] = function(){return true;},
	dmap = SearchManager.__disableMap_b__ = {},
	dmaplt = dmap[lt] = {},
	dmapgt = dmap[gt] = {},
	dmapeq = dmap[eq] = {},
	dmapneq = dmap[neq] = {};

comp[F] = function(){return false;};

dmaplt[lt] = {};
dmaplt[lt][and] = compT;
dmaplt[lt][or] = compT;
dmaplt[gt] = {};
dmaplt[gt][and] = complt;
dmaplt[gt][or] = compgt;
dmaplt[eq] = {};
dmaplt[eq][and] = compT;
dmaplt[eq][or] = compgt;
dmaplt[neq] = {};
dmaplt[neq][and] = complt;
dmaplt[neq][or] = compT;

dmapgt[lt] = {};
dmapgt[lt][and] = compgt;
dmapgt[lt][or] = complt;
dmapgt[gt] = {};
dmapgt[gt][and] = compT;
dmapgt[gt][or] = compT;
dmapgt[eq] = {};
dmapgt[eq][and] = compT;
dmapgt[eq][or] = complt;
dmapgt[neq] = {};
dmapgt[neq][and] = compgt;
dmapgt[neq][or] = compT;

dmapeq[lt] = {};
dmapeq[lt][and] = compT;
dmapeq[lt][or] = complt;
dmapeq[gt] = {};
dmapeq[gt][and] = compT;
dmapeq[gt][or] = compgt;
dmapeq[eq] = {};
dmapeq[eq][and] = compT;
dmapeq[eq][or] = compeq;
dmapeq[neq] = {};
dmapeq[neq][and] = compT;
dmapeq[neq][or] = compT;

dmapneq[lt] = {};
dmapneq[lt][and] = compgt;
dmapneq[lt][or] = compT;
dmapneq[gt] = {};
dmapneq[gt][and] = complt;
dmapneq[gt][or] = compT;
dmapneq[eq] = {};
dmapneq[eq][and] = compT;
dmapneq[eq][or] = compT;
dmapneq[neq] = {};
dmapneq[neq][and] = compeq;
dmapneq[neq][or] = compT;

SearchManager.__checkDisable_c__ = function(toEnable, other, andor, base, otherbase) {
	try {
		return this.__disableMap_b__[toEnable][other][andor](base, otherbase);
	}
	catch (e) {
		return false;
	}
};

SearchManager.__numberFilter_d__ = [
	{
		name:"gt",
		tag:">",
		type:gt,
		comment:function(name, base) {
			return name + " 이(가) " + base + "보다 큰";
		},
		fn:function(base) {
			if (Util.isString(base)) {
				base = base.toFloat();
			}
			return function(value) {
				return value > base;
			};
		}
	},
	{
		name:"gte",
		tag:">=",
		type:gt,
		comment:function(name, base) {
			return name + " 이(가) " + base + "보다 크거나 같은";
		},
		fn:function(base) {
			if (Util.isString(base)) {
				base = base.toFloat();
			}
			return function(value) {
				return value >= base;
			};
		}
	},
	{
		name:"lt",
		tag:"<",
		type:lt,
		comment:function(name, base) {
			return name + " 이(가) " + base + "보다 작은";
		},
		fn:function(base) {
			if (Util.isString(base)) {
				base = base.toFloat();
			}
			return function(value) {
				return value < base;
			};
		}
	},
	{
		name:"lte",
		tag:"<=",
		type:lt,
		comment:function(name, base) {
			return name + " 이(가) " + base + "보다 작거나 같은";
		},
		fn:function(base) {
			if (Util.isString(base)) {
				base = base.toFloat();
			}
			return function(value) {
				return value <= base;
			};
		}
	},
	{
		name:"eq",
		tag:"=",
		type:eq,
		comment:function(name, base) {
			return name + " 이(가) " + base + "인";
		},
		fn:function(base) {
			if (Util.isString(base)) {
				base = base.toFloat();
			}
			return function(value) {
				return value === base;
			};
		}
	},
	{
		name:"neq",
		tag:"!=",
		type:neq,
		comment:function(name, base) {
			return name + " 이(가) " + base + "이(가) 아닌";
		},
		fn:function(base) {
			if (Util.isString(base)) {
				base = base.toFloat();
			}
			return function(value) {
				return value !== base;
			};
		}
	},
	{
		name:"contains",
		tag:"*=",
		comment:function(name, base) {
			return name + " 이(가) 숫자 " + base + "를 포함하는";
		},
		fn:function(base) {
			if (Util.isNumber(base)) {
				base = base.toString();
			}
			else {
				base = $.trim(base);
			}
			return function(value) {
				return (value.toString()).indexOf(base) !== -1;
			};
		}
	},
	{
		name:"parser",
		fn:function(str) {
			return str.toFloat();
		}
	},
	{
		name:"validator",
		fn:function(val) {
			return !isNaN(val);
		}
	}
];

SearchManager.__stringFilter_e__ = [
	{
		name:"to",
		tag:"<=",
		type:lt,
		comment:function(name, base) {
			return name + " 이(가) " + base + "보다 사전에서 이전인";
		},
		fn:function(base) {
			base = $.trim(base).toLowerCase();
			return function(value) {
				return value.toLowerCase() <= base;
			};
		}
	},
	{
		name:"from",
		tag:">=",
		type:gt,
		comment:function(name, base) {
			return name + " 이(가) " + base + "보다 사전에서 이후인";
		},
		fn:function(base) {
			base = $.trim(base).toLowerCase();
			return function(value) {
				return value.toLowerCase() >= base;
			};
		}
	},
	{
		name:"equals",
		tag:"=",
		type:eq,
		comment:function(name, base) {
			return name + " 이(가) " + base + "와(과) 같은";
		},
		fn:function(base) {
			base = $.trim(base).toLowerCase();
			return function(value) {
				return value.toLowerCase() === base;
			};
		}
	},
	{
		name:"notEquals",
		tag:"!=",
		type:neq,
		comment:function(name, base) {
			return name + " 이(가) " + base + "이(가) 아닌";
		},
		fn:function(base) {
			base = $.trim(base).toLowerCase();
			return function(value) {
				return value.toLowerCase() !== base;
			};
		}
	},
	{
		name:"startsWith",
		tag:"^=",
		comment:function(name, base) {
			return name + " 이(가) " + base + "(으)로 시작하는";
		},
		fn:function(base) {
			base = $.trim(base).toLowerCase();
			var baselen = base.length;
			return function(value) {
				return value.substr(0, baselen).toLowerCase() === base;
			};
		}
	},
	{
		name:"endsWith",
		tag:"$=",
		comment:function(name, base) {
			return name + " 이(가) " + base + "(으)로 끝나는";
		},
		fn:function(base) {
			base = $.trim(base).toLowerCase();
			var baselen = base.length;
			return function(value) {
				return value.substr(value.length - baselen, value.length).toLowerCase() === base;
			};
		}
	},
	{
		name:"contains",
		tag:"*=",
		comment:function(name, base) {
			return name + " 이(가) " + base + "을(를) 포함하는";
		},
		fn:function(base) {
			base = $.trim(base).toLowerCase();
			return function(value) {
				return value.toLowerCase().indexOf(base) !== -1;
			};
		}
	},
	{
		name:"containsAny",
		tag:"|=",
		comment:function(name, base) {
			return name + " 이(가) " + base + "들 중 하나 이상을 포함하는";
		},
		fn:function(base) {
			base = base.toLowerCase();
			var baseArr = Util.split(base),
				baseArrlen = baseArr.length;
			if (baseArrlen <= 1) {
				return function(value) {
					return value.toLowerCase().indexOf(base) !== -1;
				};
			}
			return function(value) {
				value = value.toLowerCase();
				var i = 0;
				for (; i < baseArrlen; i++) {
					if (value.indexOf(baseArr[i]) !== -1) {
						return true;
					}
				}
				return false;
			};
		}
	},
	{
		name:"containsAll",
		tag:"&=",
		comment:function(name, base) {
			return name + " 이(가) " + base + "들 모두를 포함하는";
		},
		fn:function(base) {
			base = base.toLowerCase();
			var baseArr = Util.split(base),
				baseArrlen = baseArr.length;
			if (baseArrlen <= 1) {
				return function(value) {
					return value.toLowerCase().indexOf(base) !== -1;
				};
			}
			return function(value) {
				value = value.toLowerCase();
				var i = 0;
				for (; i < baseArrlen; i++) {
					if (value.indexOf(baseArr[i]) === -1) {
						return false;
					}
				}
				return true;
			};
		}
	}
];

JGM._add("SearchManager", SearchManager);
}());
