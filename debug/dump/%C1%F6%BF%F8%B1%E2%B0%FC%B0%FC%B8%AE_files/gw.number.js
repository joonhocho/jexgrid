var gw;
if(!gw) gw={};
if(!gw.number) gw.number={};


document.write('<script type="text/javascript" src="js/number-functions.js"></script>');

gw.number.format = function(str, format) {
	try {
		//if(parseInt(str) > 0) {
			str = parseInt(str).numberFormat(format);
		//}
	}
	catch(e) {
		//alert(e);
	}
	
	return str;
};

gw.number.moneyFormat = function(str) {
	return gw.number.format(str, "#,0");
};

gw.number.parseInt = function(str) {
	return parseInt(str, 10);
};