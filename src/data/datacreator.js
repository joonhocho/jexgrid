goog.require('JGM');
goog.require('Util');
goog.require('JGM.core.BaseModule');
goog.require('JGM.core.Grid');
goog.provide('JGM.data.DataCreator');
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

(function() {

 goog.exportSymbol('JGM.data.DataCreator', DataCreator);

 /**
   DataCreator 모듈. 새로운 데이터의 생성과 추가를 담당하는 모듈입니다.
   @module DataCreator

   @requires JGM
   @requires JGM.Grid
   @requires JGM.ColDefManager
   @requires JGM.EventManager
   @requires JGM.ViewportManager
   */

 /**
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
	  @... {JGM.Grid} args.grid - DataCreator 를 포함하는 {@link JGM.Grid Grid} 인스턴스
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

		this._ctnr = args.container;

		this.__creator_a__;

		/**
		  DataCreator 를 포함하는 {@link JGM.Grid Grid} 인스턴스.

		  @var {JGM.Grid} grid

		  @author 조준호
		  @since 1.1.1
		  @version 1.1.1
		  */
		this.grid = args.grid;

		/**
		  새로운 데이터 생성을 관리하는 {@link JGM.DataCreator DataCreator} 인스턴스 입니다.

		  @var {JGM.DataCreator} JGM.Grid.creator

		  @author 조준호
		  @since 1.1.6
		  @version 1.1.6
		  */
		this.grid.creator = this;

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
__background_a__: "#dfdfdf",

				  /**
					모듈의 border 의 두께를 정합니다. <br>기본값:<code>0</code>

					@type {number=} JGM.DataCreator.options.borderThickness
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  __borderThickness_b__: 0,

				  /**
					모듈의 border 스타일을 정합니다. <br>기본값:<code>"solid #D6D6D6"</code>

					@type {string=} JGM.DataCreator.options.border
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  __border_c__: "solid #D6D6D6",

				  /**
					모듈 내의 input 의 border 스타일을 정합니다. <br>기본값:<code>"solid #A7A7A7"</code>

					@type {string=} JGM.DataCreator.options.inputBorder
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  __inputBorder_d__: "solid #A7A7A7",

				  /**
					모듈 내의 input 의 두께를 정합니다. <br>기본값:<code>1</code>

					@type {number=} JGM.DataCreator.options.inputBorderThickness
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  __inputBorderThickness_e__: 1,

				  /**
					모듈 내의 input 의 높이를 정합니다. <br>기본값:<code>18</code>

					@type {number=} JGM.DataCreator.options.inputHeight
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  __inputHeight_f__: 18,

				  /**
					모듈 내의 input 의 margin 을 정합니다. <br>기본값:<code>8</code>

					@type {number=} JGM.DataCreator.options.inputMargin
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  __inputMargin_g__: 8,

				  /**
					모듈 내의 컬럼 명의 margin 을 정합니다. <br>기본값:<code>2</code>

					@type {number=} JGM.DataCreator.options.nameMargin
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  __nameMargin_h__: 2,

				  /**
					모듈 내의 컬럼 명의 font 를 정합니다. <br>기본값:<code>"12px Arial,Helvetica,sans-serif"</code>

					@type {string=} JGM.DataCreator.options.font
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  __font_i__: "12px Arial,Helvetica,sans-serif",

				  /**
					모듈의 높이를 정합니다. <br>기본값:<code>28</code>

					@type {number=} JGM.DataCreator.options.height
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  __height_j__: 28,

				  /**
					모듈의 padding 을 정합니다. <br>기본값:<code>3</code>

					@type {number=} JGM.DataCreator.options.padding
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  __padding_k__: 3,

				  /**
					{@link JGM.MenuBar MenuBar} 에 추가될 아이콘의 CSS 클래스 입니다. <br>기본값:<code>"creator-icon"</code>

					@type {string=} JGM.DataCreator.options.classCreatorIcon
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  __classCreatorIcon_l__: "creator-icon",

				  /**
					{@link JGM.MenuBar MenuBar} 에 추가될 아이콘의 이미지 url 입니다. <br>기본값:<code>imageUrl + "data-creator-icon.png"</code>

					@type {string=} JGM.DataCreator.options.creatorIconUrl
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  __creatorIconUrl_m__: this.grid._options.imageUrl + "data-creator-icon.png",

				  /**
					{@link JGM.MenuBar MenuBar} 에 추가될 아이콘 이미지의 폭 입니다. <br>기본값:<code>13</code>

					@type {number=} JGM.DataCreator.options.creatorIconWidth
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  __creatorIconWidth_n__: 13,

				  /**
					{@link JGM.MenuBar MenuBar} 에 추가될 아이콘 이미지의 높이 입니다. <br>기본값:<code>13</code>

					@type {number=} JGM.DataCreator.options.creatorIconHeight
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  __creatorIconHeight_o__: 13,

				  /**
					모듈의 CSS 클래스 입니다. <br>기본값:<code>"data-creator"</code>

					@type {string=} JGM.DataCreator.options.classCreator
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  __classCreator_p__: "data-creator",

				  /**
					모듈 내의 컬럼 명의 CSS 클래스 입니다. <br>기본값:<code>"data-creator-name"</code>

					@type {string=} JGM.DataCreator.options.classColName
					@private

					@author 조준호
					@since 1.1.1
					@version 1.1.1
					*/
				  __classColName_q__: "data-creator-name",

				  /**
					모듈 내의 input tag 에 적용되는 border radius 입니다. <br>기본값:<code>3</code>

					@type {number=} JGM.DataCreator.options.inputBorderRadius
					@private

					@author 조준호
					@since 1.1.7
					@version 1.1.7
					*/
				  __inputBorderRadius_r__: 3
		};

		this._options = JGM.__extend_e__(options, args.options, {
background:"__background_a__",
borderThickness:"__borderThickness_b__",
border:"__border_c__",
inputBorder:"__inputBorder_d__",
inputBorderThickness:"__inputBorderThickness_e__",
inputHeight:"__inputHeight_f__",
inputMargin:"__inputMargin_g__",
nameMargin:"__nameMargin_h__",
font:"__font_i__",
height:"__height_j__",
padding:"__padding_k__",
classCreatorIcon:"__classCreatorIcon_l__",
creatorIconUrl:"__creatorIconUrl_m__",
creatorIconWidth:"__creatorIconWidth_n__",
creatorIconHeight:"__creatorIconHeight_o__",
classCreator:"__classCreator_p__",
classColName:"__classColName_q__",
inputBorderRadius:"__inputBorderRadius_r__"
});

this.__inputMap_c__ = {};

this.__init();
}

DataCreator.getInstance = function(args) {
	return new DataCreator(args);
};

var prototype = DataCreator.prototype;

prototype.__init = function() {
	this.__creator_a__ =
		$("<div class='" + this._options.__classCreator_p__ + "'>")
		.appendTo(this._ctnr);

	this.bindEvents();
};

prototype.bindEvents = function() {
	var events = {
onRenderModules: this.__onRenderModules_aE__,
				 onCreateCss: this.__onCreateCss_V__,
				 onDestroy: this.__destroy_aA__
	};
	this.grid.event.bind(events, this);
};

prototype.__onCreateCss_V__ = function() {
	var gridId = "#" + this.grid.mid + " .",
		o = this._options,
		border = o.__borderThickness_b__ + "px " + o.__border_c__,
		rules = [];

	rules.push(gridId + o.__classCreator_p__ + "{" + JGM.__CONST_g__.__cssUnselectable_a__ + "float:left;width:100%;padding-left:8px;background:" + o.__background_a__ + ";border-top:" + border + ";font:" + o.__font_i__ + "}");
	rules.push(gridId + o.__classCreator_p__ + " button{float:left;margin:" + o.__padding_k__ + "px " + o.__padding_k__ + "px 0 0;height:" + (o.__height_j__ - 2 * o.__padding_k__) + "px}");
	rules.push(gridId + o.__classCreator_p__ + " input{float:left;padding:0;margin-top:" + ((o.__height_j__ - o.__inputHeight_f__ - 2 * o.__inputBorderThickness_e__) / 2) + "px;height:" + o.__inputHeight_f__ + "px;border:" + o.__inputBorderThickness_e__ + "px " + o.__inputBorder_d__ + ";border-radius:" + o.__inputBorderRadius_r__ + "px;-moz-border-radius:" + o.__inputBorderRadius_r__ + "px}");
	rules.push(gridId + o.classCol + "{float:left;overflow:hidden;white-space:nowrap;line-height:" + o.__height_j__ + "px;margin-right:" + o.__inputMargin_g__ + "px}");
	rules.push(gridId + o.__classColName_q__ + "{float:left;margin-right:" + o.__nameMargin_h__ + "px}");
	rules.push(gridId + o.__classCreatorIcon_l__ + "{background:url(" + o.__creatorIconUrl_m__ + ") no-repeat center;width:" + o.__creatorIconWidth_n__ + "px;height:" + o.__creatorIconHeight_o__ + "px}");

	return rules.join("");
};

prototype.__onRenderModules_aE__ = function() {
	var html = [],
		colDefs = this.grid.colDefMgr.getAll(),
		len = colDefs.length,
		colDef,
		opt = this._options,
		classCol = opt.classCol,
		classColName = opt.__classColName_q__,
		thisIns = this,
		creator = this.__creator_a__,
		imap = this.__inputMap_c__,
		i = 0,
		keyupfn = function(e) {
			if (e.which === Util.keyMapKeydown.enter) {
				thisIns.__addData_d__();
			}
		};

	for (; i < len; i++) {
		colDef = colDefs[i];
		if (colDef.inputOnCreate === true) {
			html.push("<div key='" + colDef.key + "' class='" + classCol + "'><div class='" + classColName + "'>" + colDef.name + "</div><input type='text' value='" + Util.ifNull(colDef.defaultValue, "") + "' style='width:" + colDef.width + "px'/></div>");
		}
	}

	creator[0].innerHTML = html.join("") + "<button type='button' onclick='JGM.m.DataCreator." + this.mid + ".__addData_d__()'>등록</button><button type='button' onclick='JGM.m.DataCreator." + this.mid + ".__reset_e__()'>초기화</button>";

	for (i = 0; i < len; i++) {
		colDef = colDefs[i];
		if (colDef.inputOnCreate === true) {
			imap[colDef.key] = creator.find("div[key='" + colDef.key + "'] input").keyup(keyupfn);
		}
	}

	if (Util.isNotNull(this.grid.menubar)) {
		this.grid.menubar.addIcon(opt.__classCreatorIcon_l__, "데이터 로우를 추가합니다.", opt.__creatorIconWidth_n__, opt.__creatorIconHeight_o__, function() {
				creator.toggle("fast");
				});
		creator.hide();
	}
};

prototype.__addData_d__ = function() {
	var key,
		imap = this.__inputMap_c__,
		cmgr = this.grid.colDefMgr,
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
		key = colDef.key;
		if (imap.hasOwnProperty(key)) {
			newData[key] = imap[key][0].value;
		}
		else if (colDef.defaultValue !== undefined) {
			newData[key] = colDef.defaultValue;
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
	this.grid.event.trigger("onAfterDataCreate", [newData]);
	this.grid.dataMgr.add(newData, {isNew:true});
};

prototype.__reset_e__ = function() {
	var key,
		cmgr = this.grid.colDefMgr,
		colDef,
		imap = this.__inputMap_c__;
	for (key in imap) {
		if (imap.hasOwnProperty(key)) {
			colDef = cmgr.getByKey(key);
			if (colDef.defaultValue !== undefined) {
				imap[key][0].value = colDef.defaultValue;
			}
		}
	}
};

prototype.__destroy_aA__ = function() {
	var i,
		imap = this.__inputMap_c__;
	for (i in imap) {
		if (imap.hasOwnProperty(i)) {
			JGM.__delete$_n__(imap, i);
		}
	}

	JGM._destroy(this, {
name: "DataCreator",
path: "creator",
"$": "__creator_a__",
map: "__inputMap_c__ _options"
});
};

JGM._add("DataCreator", DataCreator);
}());
