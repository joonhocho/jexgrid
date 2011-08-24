window.console && window.console.log && window.console.log('reading javascript source "DataCreator.js"...');//IF_DEBUG

goog.require('jx.util');
goog.require('jx.grid');
goog.require('jx.grid.BaseModule');
goog.require('jx.grid.Grid');

goog.provide('jx.grid.DataCreator');

/*!
 * AUTHOR
 *   The JexGrid was written and is maintained by:
 *       Joon Ho Cho <joonho1101@gmail.com>
 * COPYRIGHT
 *   Copyright (c) 2010-2011, WebCash Inc. All rights reserved.
 */

/**
  JGM
  @scope JGM
  */

(function() {'use strict';
var JGM = goog.getObjectByName('jx.grid'),
	Util = goog.getObjectByName('jx.util'),
	BaseModule = goog.getObjectByName('jx.grid.BaseModule');

 goog.exportSymbol('jx.grid.DataCreator', DataCreator);

 /**
   DataCreator 모듈. 새로운 데이터의 생성과 추가를 담당하는 모듈입니다.
   DataCreator 클래스. 새로운 데이터의 생성과 추가를 담당합니다.

   @class {DataCreator} JGM.DataCreator

   @author 조준호
   @since 1.1.1
   @version 1.1.7
   */

	/**
	  DataCreator 컨스트럭터 입니다.

	  @constructor {DataCreator} DataCreator
	  @param {Object} args - DataCreator 모듈 파라미터 오브젝트
	  @... {jQuery} args.container - DataCreator 를 넣을 컨테이너 오브젝트
	  @... {jx.grid.Grid} args.grid - DataCreator 를 포함하는 {@link jx.grid.Grid} 인스턴스
	  @... {Object} args.options - DataCreator 옵션 오브젝트
	  @returns {DataCreator} DataCreator 모듈 인스턴스를 리턴합니다.

	  @author 조준호
	  @since 1.1.1
	  @version 1.1.1
	  */
	function DataCreator(args) {
		/**
		  {@link JGM} 이 할당해주는 DataCreator 모듈 고유 아이디입니다. 읽기 전용.

		  @var {string} mid

		  @author 조준호
		  @since 1.1.1
		  @version 1.1.1
		  */
		this.mid = args.mid;

		this._ctnr = args['container'];

		this._creator;

		/**
		  DataCreator 를 포함하는 {@link jx.grid.Grid} 인스턴스.

		  @var {jx.grid.Grid} grid

		  @author 조준호
		  @since 1.1.1
		  @version 1.1.1
		  */
		this.grid = args.grid;

		/**
		  새로운 데이터 생성을 관리하는 {@link JGM.DataCreator DataCreator} 인스턴스 입니다.

		  @var {JGM.DataCreator} jx.grid.Grid.creator

		  @author 조준호
		  @since 1.1.6
		  @version 1.1.6
		  */
		this.grid['creator'] = this;

		/**
		  DataCreator 모듈의 기본 옵션 값들을 정의합니다.

		  @type {Object} options
		  @private

		  @author 조준호
		  @since 1.1.1
		  @version 1.1.1
		  */
		var options = {
			/**
			  모듈의 기본 배경을 정합니다. <br>기본값:<code>"#dfdfdf"</code>

			  @type {string=} JGM.DataCreator.options.background
			  @private

			  @author 조준호
			  @since 1.1.1
			  @version 1.1.1
			  */
'background': "#dfdfdf",

				  /**
					모듈의 border 의 두께를 정합니다. <br>기본값:<code>0</code>

					@type {number=} JGM.DataCreator.options.borderThickness
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  'borderThickness': 0,

				  /**
					모듈의 border 스타일을 정합니다. <br>기본값:<code>"solid #D6D6D6"</code>

					@type {string=} JGM.DataCreator.options.border
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  'border': "solid #D6D6D6",

				  /**
					모듈 내의 input 의 border 스타일을 정합니다. <br>기본값:<code>"solid #A7A7A7"</code>

					@type {string=} JGM.DataCreator.options.inputBorder
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  'inputBorder': "solid #A7A7A7",

				  /**
					모듈 내의 input 의 두께를 정합니다. <br>기본값:<code>1</code>

					@type {number=} JGM.DataCreator.options.inputBorderThickness
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  'inputBorderThickness': 1,

				  /**
					모듈 내의 input 의 높이를 정합니다. <br>기본값:<code>18</code>

					@type {number=} JGM.DataCreator.options.inputHeight
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  'inputHeight': 18,

				  /**
					모듈 내의 input 의 margin 을 정합니다. <br>기본값:<code>8</code>

					@type {number=} JGM.DataCreator.options.inputMargin
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  'inputMargin': 8,

				  /**
					모듈 내의 컬럼 명의 margin 을 정합니다. <br>기본값:<code>2</code>

					@type {number=} JGM.DataCreator.options.nameMargin
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  'nameMargin': 2,

				  /**
					모듈 내의 컬럼 명의 font 를 정합니다. <br>기본값:<code>"12px Arial,Helvetica,sans-serif"</code>

					@type {string=} JGM.DataCreator.options.font
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  'font': "12px Arial,Helvetica,sans-serif",

				  /**
					모듈의 높이를 정합니다. <br>기본값:<code>28</code>

					@type {number=} JGM.DataCreator.options.height
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  'height': 28,

				  /**
					모듈의 padding 을 정합니다. <br>기본값:<code>3</code>

					@type {number=} JGM.DataCreator.options.padding
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  'padding': 3,

				  /**
					{@link JGM.MenuBar MenuBar} 에 추가될 아이콘의 CSS 클래스 입니다. <br>기본값:<code>"creator-icon"</code>

					@type {string=} JGM.DataCreator.options.classCreatorIcon
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  'classCreatorIcon': "creator-icon",

				  /**
					{@link JGM.MenuBar MenuBar} 에 추가될 아이콘의 이미지 url 입니다. <br>기본값:<code>imageUrl + "data-creator-icon.png"</code>

					@type {string=} JGM.DataCreator.options.creatorIconUrl
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  'creatorIconUrl': this.grid._options['imageUrl'] + "data-creator-icon.png",

				  /**
					{@link JGM.MenuBar MenuBar} 에 추가될 아이콘 이미지의 폭 입니다. <br>기본값:<code>13</code>

					@type {number=} JGM.DataCreator.options.creatorIconWidth
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  'creatorIconWidth': 13,

				  /**
					{@link JGM.MenuBar MenuBar} 에 추가될 아이콘 이미지의 높이 입니다. <br>기본값:<code>13</code>

					@type {number=} JGM.DataCreator.options.creatorIconHeight
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  'creatorIconHeight': 13,

				  /**
					모듈의 CSS 클래스 입니다. <br>기본값:<code>"data-creator"</code>

					@type {string=} JGM.DataCreator.options.classCreator
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  'classCreator': "data-creator",

				  /**
					모듈 내의 컬럼 명의 CSS 클래스 입니다. <br>기본값:<code>"data-creator-name"</code>

					@type {string=} JGM.DataCreator.options.classColName
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  'classColName': "data-creator-name",

				  /**
					모듈 내의 input tag 에 적용되는 border radius 입니다. <br>기본값:<code>3</code>

					@type {number=} JGM.DataCreator.options.inputBorderRadius
					@private

					@author 조준호
					@since 1.1.7
					@version 1.1.7
					*/
				  'inputBorderRadius': 3
		};

		this._options = JGM._extend(options, args['options']);

this._inputMap = {};

this.__init();
}

DataCreator.getInstance = function(args) {
	return new DataCreator(args);
};

var prototype = DataCreator.prototype;

prototype.__init = function() {
	this._creator =
		$("<div class='" + this._options['classCreator'] + "'>")
		.appendTo(this._ctnr);

	this.bindEvents();
};

prototype.bindEvents = function() {
	var events = {
'onRenderModules': this._onRenderModules,
				 'onCreateCss': this._onCreateCss,
				 'onDestroy': this._destroy
	};
	this.grid['event'].bind(events, this);
};

prototype._onCreateCss = function() {
	var gridId = "#" + this.grid['mid'] + " .",
		opt = this._options,
		border = opt['borderThickness'] + "px " + opt['border'],
		rules = [];

	rules.push(gridId + opt['classCreator'] + "{" + JGM._CONST._cssUnselectable + "float:left;width:100%;padding-left:8px;background:" + opt['background'] + ";border-top:" + border + ";font:" + opt['font'] + "}");
	rules.push(gridId + opt['classCreator'] + " button{float:left;margin:" + opt['padding'] + "px " + opt['padding'] + "px 0 0;height:" + (opt['height'] - 2 * opt['padding']) + "px}");
	rules.push(gridId + opt['classCreator'] + " input{float:left;padding:0;margin-top:" + ((opt['height'] - opt['inputHeight'] - 2 * opt['inputBorderThickness']) / 2) + "px;height:" + opt['inputHeight'] + "px;border:" + opt['inputBorderThickness'] + "px " + opt['inputBorder'] + ";border-radius:" + opt['inputBorderRadius'] + "px;-moz-border-radius:" + opt['inputBorderRadius'] + "px}");
	rules.push(gridId + opt['classCol'] + "{float:left;overflow:hidden;white-space:nowrap;line-height:" + opt['height'] + "px;margin-right:" + opt['inputMargin'] + "px}");
	rules.push(gridId + opt['classColName'] + "{float:left;margin-right:" + opt['nameMargin'] + "px}");
	rules.push(gridId + opt['classCreatorIcon'] + "{background:url(" + opt['creatorIconUrl'] + ") no-repeat center;width:" + opt['creatorIconWidth'] + "px;height:" + opt['creatorIconHeight'] + "px}");

	return rules.join("");
};

prototype._onRenderModules = function() {
	var html = [],
		colDefs = this.grid['colDefMgr'].getAll(),
		len = colDefs.length,
		colDef,
		opt = this._options,
		classCol = opt['classCol'],
		classColName = opt['classColName'],
		thisIns = this,
		creator = this._creator,
		imap = this._inputMap,
		i = 0,
		keyupfn = function(e) {
			if (e.which === Util.keyMapKeydown.enter) {
				thisIns._addData();
			}
		};

	for (; i < len; i++) {
		colDef = colDefs[i];
		if (colDef['inputOnCreate'] === true) {
			html.push("<div key='" + colDef['key'] + "' class='" + classCol + "'><div class='" + classColName + "'>" + colDef['name'] + "</div><input type='text' value='" + Util.ifNull(colDef['defaultValue'], "") + "' style='width:" + colDef['width'] + "px'/></div>");
		}
	}

	creator[0].innerHTML = html.join("") + "<button type='button' onclick='JGM.m.DataCreator." + this.mid + "._addData()'>등록</button><button type='button' onclick='JGM.m.DataCreator." + this.mid + "._reset()'>초기화</button>";

	for (i = 0; i < len; i++) {
		colDef = colDefs[i];
		if (colDef['inputOnCreate'] === true) {
			imap[colDef['key']] = creator.find("div[key='" + colDef['key'] + "'] input").keyup(keyupfn);
		}
	}

	if (Util.isNotNull(this.grid['menubar'])) {
		this.grid['menubar'].addIcon(opt['classCreatorIcon'], "데이터 로우를 추가합니다.", opt['creatorIconWidth'], opt['creatorIconHeight'], function() {
				creator.toggle("fast");
				});
		creator.hide();
	}
};

prototype._addData = function() {
	var key,
		imap = this._inputMap,
		cmgr = this.grid['colDefMgr'],
		colDef,
		input,
		newData = {},
		colDefs = cmgr.getAll(),
		len = colDefs.length,
		i = 0;
	for (key in imap) {
		if (imap.hasOwnProperty(key)) {
			colDef = cmgr.getByKey(key);
			input = imap[key];
		}
	}
	for (; i < len; i++) {
		colDef = colDefs[i];
		key = colDef['key'];
		if (imap.hasOwnProperty(key)) {
			newData[key] = imap[key][0].value;
		}
		else if (colDef['defaultValue'] !== undefined) {
			newData[key] = colDef['defaultValue'];
		}
	}

	/**
	  새로운 데이터를 생성을 완료하고 그리드에 입력하기 전에 발생되는 이벤트입니다.

	  @event {Event} onAfterDataCreate
	  @param {Object} newData - 새로 생성된 로우 데이터

	  @author 조준호
	  @since 1.1.1
	  @version 1.1.1
	  */
	this.grid['event'].trigger("onAfterDataCreate", [newData], true);
	this.grid['dataMgr'].add(newData, {'isNew':true});
};

prototype._reset = function() {
	var key,
		cmgr = this.grid['colDefMgr'],
		colDef,
		imap = this._inputMap;
	for (key in imap) {
		if (imap.hasOwnProperty(key)) {
			colDef = cmgr.getByKey(key);
			if (colDef['defaultValue'] !== undefined) {
				imap[key][0].value = colDef['defaultValue'];
			}
		}
	}
};

prototype._destroy = function() {
	var i,
		imap = this._inputMap;
	for (i in imap) {
		if (imap.hasOwnProperty(i)) {
			JGM._delete$(imap, i);
		}
	}

	JGM._destroy(this, {
name: "DataCreator",
path: "creator",
"$": "_creator",
map: "_inputMap _options"
});
};
}());
