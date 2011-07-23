goog.require('jx.util');
goog.require('jx.util$');
goog.require('jx.grid');
goog.require('jx.grid.BaseModule');
goog.require('jx.grid.Grid');

goog.provide('jx.grid.PrintManager');

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

 goog.exportSymbol('jx.grid.PrintManager', PrintManager);
 JGM._add("PrintManager", PrintManager);

function PrintManager(args) {
	this.mid = args.mid;

	this._ctnr = Util$.safe$(args.container);
	this.grid = args.grid;

	var options = {
		title:					"Print Preview",
		font:					"15px arial,sans-serif",
		headerFontColor:		"#27413E",
		headerBackgroundColor:	"#DCDEDE",
		tableBorderColor:		"#6E7174",
		headerBorderColor:		"#909192",
		cellBorderColor:		"#D0D7E5",
		winOptions: {
			name:			"Print Preview",
			width:			800,
			height:			600,
			directories:	"no",
			location:		"no",
			menubar:		"no",
			status:			"no",
			toolbar:		"no"
		}
	};

	this._options = JGM.__extend_e__(options, args.options);

	this.__init();
}

PrintManager.getInstance = function(args) {
	return new PrintManager(args);
};

var prototype = PrintManager.prototype;

prototype.__init = function() {
	var manager = this;
	this._ctnr[0].innerHTML = "<button type='button'>Print</button>";
	this._ctnr.click(function() { manager.print(); });
};

prototype.print = function() {
	var printHtml = this.getPrintHtml(this.grid.colDefMgr.get(), this.grid.dataMgr.datalist),
      printWin = Util.open(this._options.winOptions);
	printWin.document.write(printHtml);
	printWin.document.close();
};

prototype.getPrintHtml = function(colDefs, datalist) {
   var opt = this._options,
      tableBorderColor = opt.tableBorderColor,
      headerBorderColor = opt.headerBorderColor,
      cellBorderColor = opt.cellBorderColor,
      html = [],
      collen = colDefs.length,
      lastCol = collen - 1,
      datalen = datalist.length,
      last = datalen - 1,
      datarow,
      i = 0,
      j;

	html.push("<html><head>");
	html.push("<title>" + opt.title + "</title>");
	html.push("</head><body onload='window.print();'>");
	html.push("<table width='100%' cellspacing='0' cellpadding='0'><tbody><tr><td align='left'>");
	html.push("<table width='100%' cellspacing='0' cellpadding='2' style='border-collapse:collapse'>");
	html.push("<tbody style='font:" + opt.font + ";'>");
	html.push("<tr style='background-color:" + opt.headerBackgroundColor + ";color:" + opt.headerFontColor + ";text-align:center'>");

	for (; i < collen; i++) {
		html.push("<td style='border:solid 1px " + headerBorderColor + ";'>" + colDefs[i].name + "</td>");
	}
	html.push("</tr>");

	for (i = 0; i < datalen; i++) {
		datarow = datalist[i];
		html.push("<tr>");
		if (i === 0) {
			for (j = 0; j < collen; j++) {
				if (j === 0) {
					html.push("<td style='border:solid 1px " + cellBorderColor + ";border-top:solid 1px " + headerBorderColor + ";border-left:solid 1px " + tableBorderColor + "'>" + datarow[colDefs[j].key] + "</td>");
            }
				else if (j === lastCol) {
					html.push("<td style='border:solid 1px " + cellBorderColor + ";border-top:solid 1px " + headerBorderColor + ";border-right:solid 1px " + tableBorderColor + "'>" + datarow[colDefs[j].key] + "</td>");
            }
				else {
					html.push("<td style='border:solid 1px " + cellBorderColor + ";border-top:solid 1px " + headerBorderColor + "'>" + datarow[colDefs[j].key] + "</td>");
            }

			}
      }
		else if (i < last) {
			for (j = 0; j < collen; j++) {
				if (j === 0) {
					html.push("<td style='border:solid 1px " + cellBorderColor + ";border-left:solid 1px " + tableBorderColor + "'>" + datarow[colDefs[j].key] + "</td>");
            }
				else if (j === lastCol) {
					html.push("<td style='border:solid 1px " + cellBorderColor + ";border-right:solid 1px " + tableBorderColor + "'>" + datarow[colDefs[j].key] + "</td>");
            }
				else {
					html.push("<td style='border:solid 1px " + cellBorderColor + "'>" + datarow[colDefs[j].key] + "</td>");
            }
			}
      }
		else {
			for (j = 0; j < collen; j++) {
				if (j === 0) {
					html.push("<td style='border:solid 1px " + cellBorderColor + ";border-bottom:solid 1px " + tableBorderColor + ";border-left:solid 1px " + tableBorderColor + "'>" + datarow[colDefs[j].key] + "</td>");
            }
				else if (j === lastCol) {
					html.push("<td style='border:solid 1px " + cellBorderColor + ";border-bottom:solid 1px " + tableBorderColor + ";border-right:solid 1px " + tableBorderColor + "'>" + datarow[colDefs[j].key] + "</td>");
            }
				else {
					html.push("<td style='border:solid 1px " + cellBorderColor + ";border-bottom:solid 1px " + tableBorderColor + "'>" + datarow[colDefs[j].key] + "</td>");
            }
			}
      }
		html.push("</tr>");
	}
	html.push("</tbody></table></td></tr></tbody></table></body></html>");
	return html.join("");
};

}());
