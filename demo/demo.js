function setCode(code) {
	document.getElementById('codebox').value = code;
}
function run(id) {
	if (id !== undefined)
		setCode(getCode(id));
	eval(document.getElementById('codebox').value);
}
function getCode(id) {
	return document.getElementById(id).value;
}

function print(str) {
	document.getElementById('console').value = str + "\n" + document.getElementById('console').value;
}

function clearConsole() {
	document.getElementById('console').value = "";
}

var a = {
	key:"key2"
	, name: "달력"
	, width: 200
	, renderer:function(value) {
		var html = "";

		html += '<span class="jexCalendar">';
		html += '	<input type="text" class="testCal" name="txtStartDt" value="" size="10" class="text" fieldName="시작일자" format="date" />';
		html += '	<input type="button" class="btn_calendar" />';
		html += '</span>';

		return html;

	}
}