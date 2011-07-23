goog.require('array_extension');
goog.require('engine_extension');
goog.require('jx.util');
goog.require('jx.grid');
goog.require('jx.grid.BaseModule');
goog.require('jx.grid.Grid');
goog.require('jx.data.DataManager');

goog.provide('jx.grid.SearchManager');

/*!
 * AUTHOR
 *   The JexGrid was written and is maintained by:
 *       Joon Ho Cho <joonho1101@gmail.com>
 * COPYRIGHT
 *   Copyright (c) 2010-2011, WebCash Inc. All rights reserved.
 */
(function() {
var JGM = goog.getObjectByName('jx.grid'),
	Util = goog.getObjectByName('jx.util'),
	BaseModule = goog.getObjectByName('jx.grid.BaseModule');

 goog.exportSymbol('jx.grid.SearchManager', SearchManager);
 JGM._add("SearchManager", SearchManager);

function SearchManager(args) {
	this.mid = args.mid;

	this._ctnr = args['container'];
	this._mask;

	this._search;
	this._masterInput;
	this._tag;
	this._advButton;
	this._adv;

	this.grid = args.grid;
	
	/**
	필터링을 하여 데이터 검색을 관리하는 {@link JGM.SeachManager SeachManager} 인스턴스 입니다.

	@var {JGM.SeachManager} JGM.Grid.search

	@author 조준호
	@since 1.2.0
	@version 1.2.1
	*/
	this.grid.search = this;

	var options = {
		'_background': "#f0f0f0",
		'_borderThickness': 1,
		'_border': "solid #d6d6d6",

		'_inputBorder': "1px solid #A7A7A7",
		'_inputPadding': 0,

		'_searchbarAlign': "center",
		'_searchbarMargin': 3,
		'_searchbarWidth': "99%",
		'_searchbarHeight': 20,

		'_tagsHeight': 26,
		'_tagsPadding': 2,
		'_tagsBorderRadius': 3,

		'_advButtonColor': "#123272",
		'_advButtonFont': "bold 12px Arial,Helvetica,sans-serif",
		'_advButtonPadding': 5,

		'_advButtonBg': "",
		'_advButtonBgHover': "url(" + this.grid._options['imageUrl'] + "more-options-bg-hover.png) repeat-x scroll center",
		'_advButtonBgActive': "url(" + this.grid._options['imageUrl'] + "more-options-bg-active.png) repeat-x scroll center",
		'_advButtonBgOpened': "url(" + this.grid._options['imageUrl'] + "more-options-bg-opened.png) repeat-x scroll center",

		'_advButtonBorderThickness': 1,
		'_advButtonBorder': "solid transparent",
		'_advButtonBorderHover': "solid #a4a4a4",
		'_advButtonBorderActive': "solid #c5c5c5",
		'_advButtonBorderOpened': "solid #bfbfbf",

		'_advButtonIconWidth': 9,
		'_advButtonIconMargin': 2,
		'_advButtonIconUrl': this.grid._options['imageUrl'] + "more-options.png",
		'_advButtonIconCloseUrl': this.grid._options['imageUrl'] + "more-options-close.png",

		'_tagPadding': 2,
		'_tagBorder': "solid #93979D",
		'_tagBorderThickness': 1,
		'_tagFont': "bold 13px Arial",
		'_tagColor': "#282853",
		'_tagBackground': "url(" + this.grid._options['imageUrl'] + "tag-background.png) repeat-x scroll center",

		'_tagRemoveIconWidth': 12,
		'_tagRemoveIconUrl': this.grid._options['imageUrl'] + "tag-close.png",
		'_tagRemoveIconHoverUrl': this.grid._options['imageUrl'] + "tag-close-hover.png",

		'_advFont': "11px Arial",
		'_advInputWidth': 30,

		'_classMask': "search-mask",
		'_classSearchbar': "search-bar",
		'_classAdvButtonName': "more-option-name",
		'_classAdvButton': "more-options",
		'_classAdvButtonIcon': "more-icon",
		'_classClearTags': "clear-tags",
		'_classTagbar': "search-tags",
		'_classTag': "search-tag",
		'_classTagName': "search-tag-name",
		'_classRemoveTag': "search-tag-remove",
		'_classAdvanced': "search-advanced",
		'_classOptionCol': "search-option-col",
		'_classOption': "search-option",
		'_classSearchIcon': "search-icon",
		'_searchIconUrl': this.grid._options['imageUrl'] + "search-icon.png",
		'_searchIconWidth': 15,
		'_searchIconHeight': 15,
		'_keyMap': undefined,
		'_tagRemoveIconActiveUrl': this.grid._options['imageUrl'] + "tag-close-active.png",
		
		'_syncMaster': false
	};

	this._options = JGM._extend(options, args['options'], {

		background:"_background",
		borderThickness:"_borderThickness",
		border:"_border",

		inputBorder:"_inputBorder",
		inputPadding:"_inputPadding",

		searchbarAlign:"_searchbarAlign",
		searchbarMargin:"_searchbarMargin",
		searchbarWidth:"_searchbarWidth",
		searchbarHeight:"_searchbarHeight",

		tagsHeight:"_tagsHeight",
		tagsPadding:"_tagsPadding",
		tagsBorderRadius:"_tagsBorderRadius",

		advButtonColor:"_advButtonColor",
		advButtonFont:"_advButtonFont",
		advButtonPadding:"_advButtonPadding",

		advButtonBg:"_advButtonBg",
		advButtonBgHover:"_advButtonBgHover",
		advButtonBgActive:"_advButtonBgActive",
		advButtonBgOpened:"_advButtonBgOpened",

		advButtonBorderThickness:"_advButtonBorderThickness",
		advButtonBorder:"_advButtonBorder",
		advButtonBorderHover:"_advButtonBorderHover",
		advButtonBorderActive:"_advButtonBorderActive",
		advButtonBorderOpened:"_advButtonBorderOpened",

		advButtonIconWidth:"_advButtonIconWidth",
		advButtonIconMargin:"_advButtonIconMargin",
		advButtonIconUrl:"_advButtonIconUrl",
		advButtonIconCloseUrl:"_advButtonIconCloseUrl",

		tagPadding:"_tagPadding",
		tagBorder:"_tagBorder",
		tagBorderThickness:"_tagBorderThickness",
		tagFont:"_tagFont",
		tagColor:"_tagColor",
		tagBackground:"_tagBackground",

		tagRemoveIconWidth:"_tagRemoveIconWidth",
		tagRemoveIconUrl:"_tagRemoveIconUrl",
		tagRemoveIconHoverUrl:"_tagRemoveIconHoverUrl",

		advFont:"_advFont",
		advInputWidth:"_advInputWidth",

		classMask:"_classMask",
		classSearchbar:"_classSearchbar",
		classAdvButtonName:"_classAdvButtonName",
		classAdvButton:"_classAdvButton",
		classAdvButtonIcon:"_classAdvButtonIcon",
		classClearTags:"_classClearTags",
		classTagbar:"_classTagbar",
		classTag:"_classTag",
		classTagName:"_classTagName",
		classRemoveTag:"_classRemoveTag",
		classAdvanced:"_classAdvanced",
		classOptionCol:"_classOptionCol",
		classOption:"_classOption",

		classSearchIcon:"_classSearchIcon",
		searchIconUrl:"_searchIconUrl",
		searchIconWidth:"_searchIconWidth",
		searchIconHeight:"_searchIconHeight",
		keyMap: "_keyMap",
		tagRemoveIconActiveUrl: "_tagRemoveIconActiveUrl",
		syncMaster:"_syncMaster"
	});

	this._filterMap = {};
	this._tagMap = {};
	this._nameMap = {};
	this._codeMap = {};
	this._global = [];
	this._globalMap = {};
	this._hasFilter;
	this._keyToName = {};
	
	this.__init();
}

var prototype = SearchManager.prototype;

prototype._onCreateCss = function() {
	var gridId = "#" + this.grid.mid + " .",
		o = this._options,
		border = o._borderThickness + "px " + o._border,
		tagsBorderRadius = "border-radius:" + o._tagsBorderRadius + "px;-moz-border-radius:" + o._tagsBorderRadius + "px",
		advButtonBorder = o._advButtonBorderThickness + "px " + o._advButtonBorder,
		advButtonBorderHover = o._advButtonBorderThickness + "px " + o._advButtonBorderHover,
		advButtonBorderActive = o._advButtonBorderThickness + "px " + o._advButtonBorderActive,
		advButtonBorderOpened = o._advButtonBorderThickness + "px " + o._advButtonBorderOpened,
		tagsInnerHeight = o._tagsHeight - 2 * o._tagsPadding,
		advButtonHeight = tagsInnerHeight - 2 * o._advButtonBorderThickness,
		tagHeight = tagsInnerHeight - 2 * o._tagBorderThickness,
		classMask = gridId + o._classMask,
		classSearchar = gridId + o._classSearchbar,
		classAdvButton = gridId + o._classAdvButton,
		classRemoveTag = gridId + o._classRemoveTag,
		rules = [];

	rules.push(classMask + "{" + JGM._CONST._cssUnselectable + "overflow:hidden;width:100%;background:" + o._background +"}");
	rules.push(classMask + " button{margin:0;padding:0 3px}");
	rules.push(classMask + " input{border:" + o._inputBorder + ";padding:" + o._inputPadding + "}");

	rules.push(classSearchar + "{text-align:" + o._searchbarAlign + ";border-bottom:" + border + "}");
	rules.push(classSearchar + " input{width:" + o._searchbarWidth + ";margin:" + o._searchbarMargin + "px 0;height:" + o._searchbarHeight + "px;" + tagsBorderRadius + "}");

	rules.push(gridId + o._classTagbar + "{cursor:default;height:" + (o._tagsHeight - o._tagsPadding) + "px;padding:" + o._tagsPadding + "px 0 0 " + o._tagsPadding + "px;border-bottom:" + border + "}");

	rules.push(classAdvButton + "{float:left;margin-right:" + o._tagsPadding + "px;background:" + o._advButtonBg + ";border:" + advButtonBorder + ";padding:0 " + o._advButtonPadding + "px;" + tagsBorderRadius + "}");
	rules.push(classAdvButton + ":hover{background:" + o._advButtonBgHover + ";border:" + advButtonBorderHover + "}");
	rules.push(classAdvButton + ".opened{background:" + o._advButtonBgOpened + ";border:" + advButtonBorderOpened + "}");
	rules.push(classAdvButton + ":active{background:" + o._advButtonBgActive + ";border:" + advButtonBorderActive + "}");

	rules.push(gridId + o._classAdvButtonName + "{float:left;color:" + o._advButtonColor + ";font:" + o._advButtonFont + ";line-height:" + advButtonHeight + "px}");
	rules.push(gridId + o._classAdvButtonIcon + "{float:left;height:" + advButtonHeight + "px;margin-left:" + o._advButtonIconMargin + "px;background:url(" + o._advButtonIconUrl + ") no-repeat center;width:" + o._advButtonIconWidth + "px}");
	rules.push(classAdvButton + ".opened ." + o._classAdvButtonIcon + "{background:url(" + o._advButtonIconCloseUrl + ") no-repeat center}");

	rules.push(gridId + o._classTag + "{float:left;border:" + o._tagBorderThickness + "px " + o._tagBorder + ";margin:0 " + o._tagsPadding + "px " + o._tagsPadding + "px 0;padding:0 " + o._tagPadding + "px;background:" + o._tagBackground + ";" + tagsBorderRadius + "}");
	rules.push(gridId + o._classTagName + "{float:left;color:" + o._tagColor + ";font:" + o._tagFont + ";line-height:" + tagHeight + "px}");
	rules.push(classRemoveTag + "{float:left;margin-left:" + o._tagPadding + "px;background:url(" + o._tagRemoveIconUrl + ") no-repeat center;width:" + o._tagRemoveIconWidth + "px;height:" + tagHeight + "px}");
	rules.push(classRemoveTag + ":hover{background:url(" + o._tagRemoveIconHoverUrl + ") no-repeat center}");
	rules.push(classRemoveTag + ":active{background:url(" + o._tagRemoveIconActiveUrl + ") no-repeat center}");

	rules.push(gridId + o._classClearTags + "{height:" + tagsInnerHeight + "px}");

	rules.push(gridId + o._classAdvanced + "{cursor:default;font:" + o._advFont + ";border-bottom:" + border + "}");
	rules.push(gridId + o._classOptionCol + "{display:inline-block;vertical-align:top}");
	rules.push(gridId + o._classOptionCol + " input{width:" + o._advInputWidth + "px;margin-right:2px;" + tagsBorderRadius + "}");
	rules.push(gridId + o._classSearchIcon + "{background:url(" + o._searchIconUrl + ") no-repeat center;width:" + o._searchIconWidth + "px;height:" + o._searchIconHeight + "px}");

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

	mask = this._mask = $("<div class='" + opt._classMask + "'>").prependTo(this._ctnr);

	this._search = $("<div class='" + opt._classSearchbar + "'><input type='text'/></div>").appendTo(mask);

	this._masterInput = this._search.children(":eq(0)").keyup(function(e) {
		if (e.which === Util.keyMapKeydown.enter) {
			thisIns._parse($(this)[0].value);
		}
		else if (e.which === Util.keyMapKeydown.esc) {
			thisIns._removeAllOptions();
		}
	});

	hasFilter = this._hasFilter = this.grid.colDefMgr.get().some(function(a){return Util.isNotNull(a.filter);});
	tag = this._tag =
		$("<div class='" + opt._classTagbar + "'>" + (hasFilter ? "<div class='" + opt._classAdvButton + "'><div class='" + opt._classAdvButtonName + "'>추가 옵션</div><div class='" + opt._classAdvButtonIcon + "'></div></div>" : "") + "<button type='button' class='" + opt._classClearTags + "' onclick='JGM.m.SearchManager." + this.mid + "._removeAllOptions()'>모든 필터 제거</button></div>")
		.appendTo(mask);

	if (hasFilter) {
		var adv = this._adv = $("<div class='" + opt._classAdvanced + "'>").appendTo(mask).hide()
			.keyup(function(e) {
				if (e.which === Util.keyMapKeydown.enter) {
					var key = e.target.getAttribute("key");
					thisIns._registerOption(key, thisIns._keyToName[key], e.target.getAttribute("tag"), e.target.value);
					e.target.value = "";
				}
			});

		this._advButton = tag.children(":eq(0)").click(function() {
			$(this).toggleClass("opened");
			adv.toggle("fast");
		});
	}

	this.grid.event.bind({
		'onRenderModules': this._onRenderModules,
		'onCreateCss': this._onCreateCss,
		'onFilter': this._onFilter,
		'onDestroy': this._destroy,
		'onAfterRenderModules': this._onAfterRenderModules
	}, this);
};

prototype._onRenderModules = function() {
	var html = [],
		opt = this._options,
		mask = this._mask;
	if (this._hasFilter) {			
		var colDefs = this.grid.colDefMgr.get(),
			len = colDefs.length,
			keymap = opt._keyMap,
			nmap = this._nameMap,
			kmap = this._keyToName,
			colDef,
			nick,
			key,
			i = 0;
		for (; i < len; i++) {
			colDef = colDefs[i];
			if (Util.isNotNull(colDef['filter'])) {
				key = colDef['key'];
				if (Util.isNull(keymap) || !keymap.hasOwnProperty(key)) {
					nick = colDef['name'] || key;
				}
				else {
					nick = keymap[key];
				}
				
				nmap[nick] = key;
				kmap[key] = nick;

				html.push("<div class='" + opt._classOptionCol + "'>");
				this._registerFilter(key, nick, colDef['name'], colDef['filter'], html);
				html.push("</div>");
			}
		}

		this._adv[0].innerHTML = html.join("");
	}
	
	if (Util.isNotNull(this.grid.menubar)) {
		this.grid.menubar.addIcon(opt._classSearchIcon, "데이터 검색을 합니다.", opt._searchIconWidth, opt._searchIconHeight, function() {
			mask.toggle("fast");
		});
		mask.hide();
	}
};

prototype._onAfterRenderModules = function() {
	var map = this._filterMap,
		keymap,
		key,
		tag,
		item,
		adv = this._adv;
		
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

prototype._destroy = function() {
	var key,
		tag,
		base,
		gmap = this._globalMap,
		fmap = this._filterMap,
		ftmap,
		tmap = this._tagMap,
		ttmap,
		ttbmap;

	for (key in gmap) {
		if (gmap.hasOwnProperty(key)) {
			JGM._delete$(gmap[key], "tag");
			JGM._deleteArray(gmap[key], "list");
		}
	}
	
	for (key in fmap) {
		if (fmap.hasOwnProperty(key)) {
			ftmap = fmap[key];
			for (tag in ftmap) {
				if (ftmap.hasOwnProperty(tag)) {
					if (tag !== "andor" && tag !== "parser" && tag !== "validator") {
						JGM._delete$(ftmap[tag], "input");
					}
					JGM._deleteMap(ftmap, tag);
				}
			}
			JGM._deleteMap(fmap, key);
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
							JGM._delete$(ttbmap[base], "tag");
							JGM._deleteMap(ttbmap, base);
						}
					}
					JGM._deleteMap(ttmap, tag);
				}
			}
			JGM._deleteMap(tmap, key);
		}
	}
	
	JGM._destroy(this, {
		name: "SearchManager",
		path: "search",
		"$": "_masterInput _advButton _mask _search _tag _adv",
		property: "_ctnr _hasFilter",
		array: "_global",
		map: "_globalMap _filterMap _tagMap _codeMap _nameMap _options _keyToName"
	});
};

prototype._onFilter = function(success, failed) {
	if (this._global.length === 0 && Util.isEmptyObj(this._codeMap)) {
		return;
	}

	var options,
		tagMap = this._tagMap,
		key,
		tag,
		len = success.length,
		data,
		value,
		andor,
		filterMap = this._filterMap,
		and = this.constructor.CONST.and,
		base,
		hasGlobal = this._global.length > 0,
		i,
		keymap;
	
	if (hasGlobal) {
		var global = this._global,
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

prototype._registerFilter = function(key, nick, name, filter, html) {
	if (this._filterMap.hasOwnProperty(key)) {
		return;
	}

	if (filter === "number") {
		filter = this.constructor._numberFilter;
	}
	else if (filter === "string") {
		filter = this.constructor._stringFilter;
	}

	var option,
		len = filter.length,
		i = 0,
		mid = this.mid,
		classOpt = this._options['_classOption'],
		fkmap,
		tmap,
		tag,
		oname;
		
	fkmap = this._filterMap[key] = {'andor':this.constructor.CONST.and};
	tmap = this._tagMap[key] = {};

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
		fkmap[tag] = {'option':option};
		tmap[tag] = {};
		html.push("<tr title='" + option.comment(name, "입력값") + "'><td><div class='" + classOpt + "'>" + name + " " + tag +
			"</td><td><input id='" + key + oname + "' key='" + key + "' tag='" + tag + "' type='text'><button type='button' onclick=\"JGM.m.SearchManager." + mid + "._registerOption('" + key + "','" + nick + "','" + tag + "',this.previousSibling.value)\">등록</button></div></td></tr>");
	}
	html.push("</table>");
};

prototype._parse = function(str) {
	var arg,
		key,
		name,
		tag,
		base,
		args = Util.split(str),
		len = args['length'],
		status = 2,
		change = false,
		global = [],
		nmap = this._nameMap,
		fmap = this._filterMap,
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
							if (this._registerOption(key, name, tag, base, true)) {
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
		if (this._registerOption(key, name, tag, base, true)) {
			change = true;
		}
	}
	if (this._registerGlobal(global)) {
		change = true;
	}
	
	
	this._syncMasterInput();
	
	if (change) {
		this.grid.dataMgr.refresh();
	}
};

prototype._syncMasterInput = function() {
	if (this._options['_syncMaster']) {
		var inputStr = this._global.join(" "),
			tagMap = this._tagMap,
			keyToName = this._keyToName,
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
		this._masterInput[0].value = $.trim(inputStr);
	}
	else {
		this._masterInput[0].value = "";
	}
};

prototype._registerGlobal = function(toAdd) {
	var i = 0,
		len = toAdd.length,
		global = this._global;
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
	this._globalMap[toAdd[0]] = {
		tag:$("<div class='" + opt._classTag + "' title='" + toAdd.join(", ") + " 를 포함하는'><div class='" + opt._classTagName + "'>" + toAdd.join(" ") +
		"</div><div class='" + opt._classRemoveTag + "' title='필터 제거' onclick=\"JGM.m.SearchManager." + this.mid + "._removeGlobal('" + toAdd[0] + "')\"></div></div>").appendTo(this._tag),
		list: toAdd
	};
	return true;
};

prototype._removeGlobal = function(index) {
	var gmap = this._globalMap;
	if (gmap.hasOwnProperty(index)) {
		var item = gmap[index];
		item.tag.remove();
		delete item.tag;
		this._global.removeList(item.list);
		item.list.length = 0;
		delete item.list;
		delete gmap[index];
		this._syncMasterInput();
		this.grid.dataMgr.refresh();
	}
};

prototype._registerOption = function(key, nick, optionTag, base, norefresh) {
	var fmap = this._filterMap,
		fkmap,
		fkomap,
		cmap = this._codeMap;
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

	var tagmap = this._tagMap[key];
	if (tagmap[optionTag].hasOwnProperty(base)) {
		return false;
	}

	var options,
		parsedOther,
		tag,
		otherbase,
		filtermap = this._filterMap[key],
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

					if (SearchManager._checkDisable(option.type, oomap.option.type, andor, base, parsedOther)) {
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
	this._createTag(key, option, base, nick);

	if (!norefresh) {
		this._syncMasterInput();
		this.grid.dataMgr.refresh();
	}

	return true;
};

prototype._removeOption = function(key, tag, base) {
	var tmap = this._tagMap,
		tkmap,
		tktmap;
	if (tmap.hasOwnProperty(key) && (tkmap = tmap[key]).hasOwnProperty(tag) && (tktmap = tkmap[tag]).hasOwnProperty(base)) {
		var option = tktmap[base];
		option.tag.remove();
		delete option.tag;
		delete option.option;
		delete option.fn;
		delete tktmap[base];
		delete this._codeMap[key + "@T" + tag + "@B" + base];
		this._syncMasterInput();
		this.grid.dataMgr.refresh();
	}
};

prototype._removeAllOptions = function() {
	var key,
		global = this._globalMap,
		item,
		map = this._tagMap,
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
	this._global.length = 0;
		
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

	this._codeMap = {};
	this._syncMasterInput();
	
	this.grid.dataMgr.refresh();
};

prototype._createTag = function(key, option, base, nick) {
	var opt = this._options;
	return (this._tagMap[key][option.tag][base] = {
		tag:$("<div class='" + opt._classTag + "' title='" + option.comment(nick, base) + "'><div class='" + opt._classTagName + "'>@" + nick + " " + option.tag + " " + base +
		"</div><div class='" + opt._classRemoveTag + "' title='필터 제거' onclick=\"JGM.m.SearchManager." + this.mid + "._removeOption('" + key + "','" + option.tag + "','" + base + "')\"></div></div>").appendTo(this._tag),
		option:option,
		fn:option.fn(base)
	});
};

var con = SearchManager.CONST = {
		'lt':0,
		'lte':1,
		'eq':2,
		'neq':3,
		'gt':4,
		'gte':5,
		'and':6,
		'or':7,
		'T':8,
		'F':9
	},
	lt = con.lt,
	gt = con.gt,
	eq = con.eq,
	neq = con.neq,
	and = con.and,
	or = con.or,
	T = con.T,
	F = con.F,
	comp = SearchManager._comparator = {},
	complt = comp[lt] = function(a,b){return a <= b;},
	compgt = comp[gt] = function(a,b){return a >= b;},
	compeq = comp[eq] = function(a,b){return a === b;},
	compT = comp[T] = function(){return true;},
	dmap = SearchManager._disableMap = {},
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

SearchManager._checkDisable = function(toEnable, other, andor, base, otherbase) {
	try {
		return this._disableMap[toEnable][other][andor](base, otherbase);
	}
	catch (e) {
		return false;
	}
};

SearchManager._numberFilter = [
	{
		'name':"gt",
		'tag':">",
		'type':gt,
		'comment':function(name, base) {
			return name + " 이(가) " + base + "보다 큰";
		},
		'fn':function(base) {
			if (Util.isString(base)) {
				base = base.toFloat();
			}
			return function(value) {
				return value > base;
			};
		}
	},
	{
		'name':"gte",
		'tag':">=",
		'type':gt,
		'comment':function(name, base) {
			return name + " 이(가) " + base + "보다 크거나 같은";
		},
		'fn':function(base) {
			if (Util.isString(base)) {
				base = base.toFloat();
			}
			return function(value) {
				return value >= base;
			};
		}
	},
	{
		'name':"lt",
		'tag':"<",
		'type':lt,
		'comment':function(name, base) {
			return name + " 이(가) " + base + "보다 작은";
		},
		'fn':function(base) {
			if (Util.isString(base)) {
				base = base.toFloat();
			}
			return function(value) {
				return value < base;
			};
		}
	},
	{
		'name':"lte",
		'tag':"<=",
		'type':lt,
		'comment':function(name, base) {
			return name + " 이(가) " + base + "보다 작거나 같은";
		},
		'fn':function(base) {
			if (Util.isString(base)) {
				base = base.toFloat();
			}
			return function(value) {
				return value <= base;
			};
		}
	},
	{
		'name':"eq",
		'tag':"=",
		'type':eq,
		'comment':function(name, base) {
			return name + " 이(가) " + base + "인";
		},
		'fn':function(base) {
			if (Util.isString(base)) {
				base = base.toFloat();
			}
			return function(value) {
				return value === base;
			};
		}
	},
	{
		'name':"neq",
		'tag':"!=",
		'type':neq,
		'comment':function(name, base) {
			return name + " 이(가) " + base + "이(가) 아닌";
		},
		'fn':function(base) {
			if (Util.isString(base)) {
				base = base.toFloat();
			}
			return function(value) {
				return value !== base;
			};
		}
	},
	{
		'name':"contains",
		'tag':"*=",
		'comment':function(name, base) {
			return name + " 이(가) 숫자 " + base + "를 포함하는";
		},
		'fn':function(base) {
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
		'name':"parser",
		'fn':function(str) {
			return str.toFloat();
		}
	},
	{
		'name':"validator",
		'fn':function(val) {
			return !isNaN(val);
		}
	}
];

SearchManager._stringFilter = [
	{
		'name':"to",
		'tag':"<=",
		'type':lt,
		'comment':function(name, base) {
			return name + " 이(가) " + base + "보다 사전에서 이전인";
		},
		'fn':function(base) {
			base = $.trim(base).toLowerCase();
			return function(value) {
				return value.toLowerCase() <= base;
			};
		}
	},
	{
		'name':"from",
		'tag':">=",
		'type':gt,
		'comment':function(name, base) {
			return name + " 이(가) " + base + "보다 사전에서 이후인";
		},
		'fn':function(base) {
			base = $.trim(base).toLowerCase();
			return function(value) {
				return value.toLowerCase() >= base;
			};
		}
	},
	{
		'name':"equals",
		'tag':"=",
		'type':eq,
		'comment':function(name, base) {
			return name + " 이(가) " + base + "와(과) 같은";
		},
		'fn':function(base) {
			base = $.trim(base).toLowerCase();
			return function(value) {
				return value.toLowerCase() === base;
			};
		}
	},
	{
		'name':"notEquals",
		'tag':"!=",
		'type':neq,
		'comment':function(name, base) {
			return name + " 이(가) " + base + "이(가) 아닌";
		},
		'fn':function(base) {
			base = $.trim(base).toLowerCase();
			return function(value) {
				return value.toLowerCase() !== base;
			};
		}
	},
	{
		'name':"startsWith",
		'tag':"^=",
		'comment':function(name, base) {
			return name + " 이(가) " + base + "(으)로 시작하는";
		},
		'fn':function(base) {
			base = $.trim(base).toLowerCase();
			var baselen = base.length;
			return function(value) {
				return value.substr(0, baselen).toLowerCase() === base;
			};
		}
	},
	{
		'name':"endsWith",
		'tag':"$=",
		'comment':function(name, base) {
			return name + " 이(가) " + base + "(으)로 끝나는";
		},
		'fn':function(base) {
			base = $.trim(base).toLowerCase();
			var baselen = base.length;
			return function(value) {
				return value.substr(value.length - baselen, value.length).toLowerCase() === base;
			};
		}
	},
	{
		'name':"contains",
		'tag':"*=",
		'comment':function(name, base) {
			return name + " 이(가) " + base + "을(를) 포함하는";
		},
		'fn':function(base) {
			base = $.trim(base).toLowerCase();
			return function(value) {
				return value.toLowerCase().indexOf(base) !== -1;
			};
		}
	},
	{
		'name':"containsAny",
		'tag':"|=",
		'comment':function(name, base) {
			return name + " 이(가) " + base + "들 중 하나 이상을 포함하는";
		},
		'fn':function(base) {
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
		'name':"containsAll",
		'tag':"&=",
		'comment':function(name, base) {
			return name + " 이(가) " + base + "들 모두를 포함하는";
		},
		'fn':function(base) {
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

}());
