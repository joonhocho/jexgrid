var batchInsYN = $("#BATCH_INS_YN").val();
var printYN    = $("#PRINT_YN").val();
var fileYN     = $("#FILE_YN").val();

/*********************************************************
 * web 화면에 따라 location 지정
 *********************************************************/


document.write("	<!-- 타이틀 -->");
document.write("	<div class='h1_cboth'>");
document.write("		<h1 class='f_left'></h1>"); 
document.write("		<div class='f_right'>");
document.write("			<div class='location'>");
//document.write("				<span class='location_btn'>");

/*********************************************************
 * web 화면에 따라 버튼 활성화
 *********************************************************/
//일괄등록 버튼 활성화 구분
if(batchInsYN == "Y"){
	//document.write("					<a href='#'><img src='img/comm/button/btn_register.gif' alt='일괄등록' /></a>");
}
//인쇄 버튼 활성화 구분
if(printYN == "Y"){
	//document.write("					<a href='#'><img src='img/comm/button/btn_print.gif' alt='인쇄' /></a>");
}
//파일저장 버튼 활성화 구분
if(fileYN == "Y" || fileYN == "y"){
	document.write("					<a href='#' jexgridbutton='rcomm_download' jexgridId='' type='button' ><img src='img/comm/button/btn_filesave.gif' alt='파일저장' /></a>");
}
/*********************************************************
 * web 화면에 따라 버튼 활성화
 *********************************************************/
//document.write("				</span>");
document.write("			</div>");
document.write("		</div>");
document.write("	</div>");
document.write("	<!-- 타이틀  -->");

