$(function() {
    // alert(windows_width)
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
    } else {
        // alert("else screen");
        $("head").append('<link href="./style/small.css" rel="stylesheet" type="text/css">');  
        // document.write("<link href='small.css' rel='stylesheet' type='text/css'>");
        // window.location.reload(); 
        $(".logoimg").css("height", "60px");
        $(".logoimg").css("width", "80px");
        $(".logoimg").css("margin-left", "0px");
        $(".container").css("font-size", "12px");
        $(".navclass").css("position", "relative");
        $(".navclass").css("left", "-130px");
        $(".navclass").css("top", "40px");
        $(".form1").css("position", "relative");
        $(".form1").css("left", "-190px"); 
    }
})

//read big image
$(function() {
    enlargeImg();
})

function enlargeImg() {
$(".enlargeImg").click(function() {
    $('.imgBox').html("<div  class='enlargeImg_big'></div>");
    var imgSrc = $(this).attr('src');
    $(".enlargeImg_big").css("background-image", "url(" + imgSrc + ")");
    $(".enlargeImg_big").css("background-size", "contain");
    $('.enlargeImg_big').fadeIn(200);
})
$('.imgBox').on('click', '.enlargeImg_big', function() {
    $('.enlargeImg_big').fadeOut(200).remove();
})
}

//close and remove masking
function closeImg() {
$('.enlargeImg_big').fadeOut(200).remove();
}

// display second navigation
$(document).ready(function() {
$(".nav1").hover(function() {
    $(".nav2").css("display", "block");
},function() {
    $(".nav2").css("display", "none");
});
});
