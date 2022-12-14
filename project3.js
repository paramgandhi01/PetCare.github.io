// pet1
$(function() {
    // alert(windows_width)
	// if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
	//   // 当前设备是移动设备
	  
	// }
    var windows_width = $(window).width()
 if ($(window).width() > 1024) {
        // alert("screen");  
        $("head").append('<link href="./style/big.css" rel="stylesheet" type="text/css">');
        // document.write("<link href='big.css' rel='stylesheet' type='text/css'>"); 
        // window.location.reload(); //
        $(".logoimg").css("height", "90px");
        $(".logoimg").css("width", "150px");
        $(".logoimg").css("margin-left", "40px");
        $(".container").css("font-size", "16px");
        
        $(".navclass").css("position", "relative");
        $(".navclass").css("left", "0px");
        $(".navclass").css("top", "0px");
        $(".form1").css("position", "relative");
        $(".form1").css("left", "0px");


		$(".pet3box").css("width", "80%");
		$(".pet3box").css("padding-left", "20%");
		$(".pet3box p").css("line-height", "40px");
		$(".leftboxs h2").css("font-size", "30px");
		$("img").css("margin-left", "60px");
    } else {
        // alert("else screen");
		$(".pet3box").css("width", "100%");
		$(".pet3box").css("padding-left", "0%");
        $("head").append('<link href="./style/small.css" rel="stylesheet" type="text/css">');  
        // document.write("<link href='small.css' rel='stylesheet' type='text/css'>");
        // window.location.reload(); 
        $(".logoimg").css("height", "60px");
        $(".logoimg").css("width", "80px");
        $(".logoimg").css("margin-left", "0px");
        $(".container").css("font-size", "12px");
        $(".navclass").css("position", "relative");
        $(".navclass").css("left", "-88px");
        $(".navclass").css("top", "40px");
        $(".form1").css("position", "relative");
        $(".form1").css("left", "-190px"); 
		
		$(".ull").css("margin-left", "40px");
		$(".all").css("margin", "0");
		$(".pet3box p").css("line-height", "20px");
		$(".leftboxs h2").css("font-size", "20px");
		$("img").css("margin-left", "0px");
		
    }
})
$(document).ready(function() {
$(".nav1").hover(function() {
    $(".nav2").css("display", "block");
},function() {
    $(".nav2").css("display", "none");
});
});
