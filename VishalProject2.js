var myIndex = 0;
var myIndex2 = 0;
  slide1();
  slide2();
  function slide1() {
    var i;
    var x = document.getElementsByClassName("firstimg");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(slide1, 3000); 
  }
  function slide2() {
    var j;
    var y = document.getElementsByClassName("secondimg");
    for (j = 0; j < y.length; j++) {
      y[j].style.display = "none";  
    }
    myIndex++;
    if (myIndex > y.length) {myIndex = 1}    
    y[myIndex-1].style.display = "block";  
    setTimeout(slide2, 2000); 
  }


function myFunction() {
    var dots = document.getElementById("s1");
    var moreText = document.getElementById("s2");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Top Methods to Train Your Cat"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
  