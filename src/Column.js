console && console.log && console.log('reading javascript source "Column.js"...');//IF_DEBUG

goog.require('jx.grid');
goog.require('jx.events.EventDispatcher');

goog.provide('jx.grid.Column');

(function() {'use strict';
	var EventDispatcher = goog.getObjectByName('jx.events.EventDispatcher');

	goog.exportSymbol('jx.grid.Column', Column);

	function Column(args) {
		if (!(args['manager'] && typeof args['manager']== 'object')) {
			throw new Error('Column needs a valid manager!');
		}
		this.manager = args['manager'];

		/**
		  로우 데이터에서 해당 컬럼 데이터를 가져올 때 사용되는 키입니다. 컬럼
		  정의 오브젝트에서 필수적으로 각 컬럼마다 유니크한 키 값을 지정해줘야
		  합니다. <br>기본값:<code>undefined</code>

		  @type {string=} jgrid.grid.ColumnManager.options.colDef.key
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		// stringify
		this.key = args['key']+ '';
		if (!this.key) {
			throw new Error('Column needs a non-empty key!');
		}

		var error = 'column key=' + this.key;

		if (this.manager.hasKey(this.key)) {
			throw new Error('Duplicate column key!' + error);
		}

		/**
		  컬럼 이름. 이 값이 지정될 경우 컬럼 헤더에 key 값 대신 이 값을
		  이름으로 대신 표시합니다. <br>기본값:<code>""</code>

		  @type {string=} jgrid.grid.ColumnManager.options.colDef.name
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		// stringify
		this.name = args['name']? args['name']+ '' : '';

		/**
		  컬럼 헤더에 입력할 타이틀 attribute 의 내용. <br>기본값:<code>undefined</code>

		  @type {string=} jgrid.grid.ColumnManager.options.colDef.title
		  @private

		  @author 조준호
		  @since 1.1.7
		  @version 1.1.7
		  */
		// stringify
		this.title = args['title']? args['title']+ '' : '';

		/**
		  컬럼 헤더에 이름값 입력 여부. <br>기본값:<code>false</code>

		  @type {boolean=} jgrid.grid.ColumnManager.options.colDef.noName
		  @private

		  @author 조준호
		  @since 1.1.7
		  @version 1.1.7
		  */
		// booleanify
		this.noName = !!args['noName'];

		/**
		  컬럼 헤더에 타이틀 attribute 입력 여부. <br>기본값:<code>false</code>

		  @type {boolean=} jgrid.grid.ColumnManager.options.colDef.noTitle
		  @private

		  @author 조준호
		  @since 1.1.7
		  @version 1.1.7
		  */
		// booleanify
		this.noTitle = !!args['noTitle'];

		// stringify
		this.type = args['type']+ '' || null;

		/**
		  새로운 로우 데이터를 생성하거나 셀의 데이터를 del 키를 눌러서 삭제했을 경우에
		  컬럼에 자동적으로 채워지는 컬럼의 기본 값입니다. <br>기본값:<code>undefined</code>

		  @type {?=} jgrid.grid.ColumnManager.options.colDef.defaultValue
		  @private

		  @author 조준호
		  @since 1.1.1
		  @version 1.1.1
		  */
		// as is
		this.defaultValue = args['defaultValue'];

		/**
		  {@link jgrid.grid.DataCreator DataCreator} 를 사용하여 새로운 로우 데이터를 생성할 경우,
		  로우 데이터의 컬럼 값을 직접적으로 입력할지의 여부입니다. <br>기본값:<code>undefined</code>

		  @type {boolean=} jgrid.grid.ColumnManager.options.colDef.inputOnCreate
		  @private

		  @author 조준호
		  @since 1.1.1
		  @version 1.1.1
		  */
		// booleanify
		this.inputOnCreate = !!args['inputOnCreate'];

		/**
		  컬럼의 기본 폭 픽셀. <br>기본값:<code>80</code>

		  @type {number=} jgrid.grid.ColumnManager.options.colDef.width
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		// numberify
		this.width = Number(args['width']);
		this.width = this.width || 90;

		/**
		  컬럼의 폭을 조절할 경우 사용되는 최소 폭 픽셀. <br>기본값:<code>30</code>

		  @type {number=} jgrid.grid.ColumnManager.options.colDef.minW
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		// numberify
		this.minW = Number(args['minW']);
		this.minW = this.minW || 30;

		/**
		  컬럼의 폭을 조절할 경우 사용되는 최대 폭 픽셀. <br>기본값:<code>undefined</code>

		  @type {number=} jgrid.grid.ColumnManager.options.colDef.maxW
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		// numberify
		this.maxW = Number(args['maxW']) || null;

		/**
		  컬럼의 폭 조절 가능 여부. <br>기본값:<code>false</code>

		  @type {boolean=} jgrid.grid.ColumnManager.options.colDef.resizable
		  @private

		  @author 조준호
		  @since 1.1.2
		  @version 1.1.2
		  */
		// booleanify
		this.resizable = !!args['resizable'];

		/**
		  컬럼의 숨기기 여부. <br>기본값:<code>false</code>

		  @type {boolean=} jgrid.grid.ColumnManager.options.colDef.hidden
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		// booleanify
		this.hidden = !!args['hidden'];

		/**
		  컬럼이 필터링 시에 검색에 포함되는지 여부.<br>기본값:<code>false</code>

		  @type {boolean=} jgrid.grid.ColumnManager.options.colDef.noSearch
		  @private

		  @author 조준호
		  @since 1.2.0
		  @version 1.2.0
		  */
		// booleanify
		this.noSearch = !!args['noSearch'];

		/**
		  마우스를 컬럼 셀위에 올려놓을 경우 보여지는 툴팁의 활성 여부. <br>기본값:<code>false</code>

		  @type {boolean=} jgrid.grid.ColumnManager.options.colDef.tooltipEnabled
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		// booleanify
		this.tooltipEnabled = !!args['tooltipEnabled'];

		/**
		  컬럼 셀 노드들에 적용되는 CSS 클래스. <br>기본값:<code>undefined</code>

		  @type {string=} jgrid.grid.ColumnManager.options.colDef.colClass
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		// stringify
		this.colClass = args['colClass']+ '' || null;

		/**
		  컬럼 셀 노드들에 공통적으로 적용되는 CSS style 입니다.<br>
		  주의할 점: 이 옵션에 입력된 style 이 적용되었을때 DOM 의 크기가 변하면 그리드의 내부적인 크기 계산에 오류가 생깁니다.
		  꼭, 크기에 영향이 없는 style 변경을 할때만 사용하세요.
		  <br>기본값:<code>""</code>

		  @type {string=} jgrid.grid.ColumnManager.options.colDef.style
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		// stringify
		this.style = args['style']+ '' || null;

		/**
		  컬럼 헤더에게 적용되는 CSS style 입니다.<br>
		  주의할 점: 이 옵션에 입력된 style 이 적용되었을때 DOM 의 크기가 변하면 그리드의 내부적인 크기 계산에 오류가 생깁니다.
		  꼭, 크기에 영향이 없는 style 변경을 할때만 사용하세요.
		  <br>기본값:<code>""</code>

		  @type {string=} jgrid.grid.ColumnManager.options.colDef.headerStyle
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		// stringify
		this.headerStyle = args['headerStyle']+ '' || null;

		/**
		  데이터 parsing 을 담당하는 함수입니다. 그리드에 입력되거나 내용이 변경되는 모든 데이터는 이 함수에 의해서
		  parsing 이 됩니다.
		  !!!!!!!!!!!!!!!
		  커스텀 필터 또는 "string", "number" 를 입력할 수 있습니다.<br>기본값:<code>undefined</code>

		  @type {Array.<Object> | string=} jgrid.grid.ColumnManager.options.colDef.parser
		  @private

		  @author 조준호
		  @since 1.3.0
		  @version 1.3.0
		  */
		if (args['parser']&& typeof args['parser']!= 'function') {
			throw new Error('Invalid parser!' + error);
		}
		this.parser = args['parser']|| null;

		/**
		  필터링 시에 사용될 추가 옵션 필터입니다. 커스텀 필터 또는 "string", "number" 를 입력할 수 있습니다.<br>기본값:<code>undefined</code>
		  !!!!!!!!!!
		  @type {Array.<Object> | string=} jgrid.grid.ColumnManager.options.colDef.validator
		  @private

		  @author 조준호
		  @since 1.3.0
		  @version 1.3.0
		  */
		if (args['validator']&& typeof args['validator']!= 'function') {
			throw new Error('Invalid validator!' + error);
		}
		this.validator = args['validator']|| null;

		/**
		  컬럼 셀 랜더러.
		  렌더러는 파라미터로 {@link jgrid.grid.Cell Cell} 인스턴스 또는
		  value, rowIdx, colIdx, datarow, colDef, {@link jgrid.grid.ViewportManager ViewportManager} 를 순서대로 받고,
		  셀 HTML 을 리턴하는 Function 입니다.
		  <br>기본값:기본 텍스트 렌더러

		  @type {Function=} jgrid.grid.ColumnManager.options.colDef.renderer
		  @private
		  @see jgrid.grid.ColumnManager.options.colDef.rendererInput

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		if (args['renderer']&& typeof args['renderer']!= 'function') {
			throw new Error('Invalid renderer!' + error);
		}
		this.renderer = args['renderer']|| null;

		/**
		  컬럼 데이터 합계의 {@link jgrid.grid.Footer Footer} 에 표시 여부.
		  "krw" 입력시 \ 10,000,000 포맷으로 렌더링하며, "usd" 입력시 $ 10,000,000.00 포맷으로 렌더링 합니다.
		  함수 입력시 컬럼명과 합계 값을 파라미터로 받습니다.
		  <br>기본값:<code>undefined</code>

		  @type {Function=} jgrid.grid.ColumnManager.options.colDef.sumRenderer
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		if (args['sumRenderer']&& typeof args['sumRenderer']!= 'function') {
			throw new Error('Invalid sum renderer!' + error);
		}
		this.sumRenderer = args['sumRenderer']|| null;

		/**
		  셀 에디팅을 할 때 사용되는 컬럼 에디터. <br>기본값:<code>undefined</code>

		  @type {jgrid.grid.Editor=} jgrid.grid.ColumnManager.options.colDef.editor
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		if (args['editor']&& typeof args['editor']!= 'object') {
			throw new Error('Invalid editor!' + error);
		}
		this.editor = args['editor']|| null;

		/**
		  컬럼 정렬할 때 사용되는 컬럼 정렬 오브젝트. <br>기본값:<code>undefined</code>

		  @type {Object=} jgrid.grid.ColumnManager.options.colDef.sorter
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		this.sorter = args['sorter']|| null;

		/**
		  필터링 시에 사용될 추가 옵션 필터입니다. 커스텀 필터 또는 "string", "number" 를 입력할 수 있습니다.<br>기본값:<code>undefined</code>

		  @type {Array.<Object> | string=} jgrid.grid.ColumnManager.options.colDef.filter
		  @private

		  @author 조준호
		  @since 1.2.0
		  @version 1.2.0
		  */
		this.filter = args['filter']|| null;
	}

	goog.inherits(Column, EventDispatcher);

	var proto = Column.prototype;

	proto.show = function() {
		if (this.hidden) {
			this.hidden = false;
			this.dispatchEvent({
				'type': 'hidden',
				'value': false
			});
			return true;
		}
		return false;
	}

	proto.hide = function() {
		if (!this.hidden) {
			this.hidden = true;
			this.dispatchEvent({
				'type': 'hidden',
				'value': true
			});
			return true;
		}
		return false;
	}

	proto.setHidden = function(hidden) {
		return hidden ? this.hide() : this.show();
	}

	proto.setWidth = function(w) {
		w = Number(w);
		if (w && this.width !== w) {
			this.width = w;
			this.dispatchEvent({
				'type': 'width',
				'value': w
			});
			return w;
		}
		return false;
	}

	proto.setRenderer = function(renderer) {
		if (this.renderer !== renderer) {
			if (renderer && typeof renderer != 'function') {
				var error = 'column key=' + this.key;
				throw new Error('Invalid renderer!' + error);
			}
			this.renderer = renderer || null;
			this.dispatchEvent({
				'type': 'renderer',
				'value': renderer
			});
		}
	}

}());
