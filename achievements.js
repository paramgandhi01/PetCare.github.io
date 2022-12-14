function myFunction() {
    var dots = document.getElementById("s1");
    var moreText = document.getElementById("s2");
    var btnText = document.getElementById("myBtn");
    
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "<img class= 'side-pic-left' src='images/ourvision.png'/>"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "<img class= 'side-pic-left' src='images/ourvision.png'/>"; 
      moreText.style.display = "inline";
    }
}
function myFunction1() {
    var dots1 = document.getElementById("s3");
    var moreText1 = document.getElementById("s4");
    var btnText1 = document.getElementById("myBtn1");
    
  
    if (dots1.style.display === "none") {
      dots1.style.display = "inline";
      btnText1.innerHTML = "<img class= 'side-pic-right' src='images/Ourgoals.jpg'/>"; 
      moreText1.style.display = "none";
    } else {
      dots1.style.display = "none";
      btnText1.innerHTML = "<img class= 'side-pic-right' src='images/Ourgoals.jpg'/>"; 
      moreText1.style.display = "inline";
    }
}
function myFunction2() {
    var dots2 = document.getElementById("s5");
    var moreText2 = document.getElementById("s6");
    var btnText2 = document.getElementById("myBtn2");
    
  
    if (dots2.style.display === "none") {
      dots2.style.display = "inline";
      btnText2.innerHTML = "<img class= 'side-pic-left1' src='images/achievements.jpg'/>"; 
      moreText2.style.display = "none";
    } else {
      dots2.style.display = "none";
      btnText2.innerHTML = "<img class= 'side-pic-left1' src='images/achievements.jpg'/>"; 
      moreText2.style.display = "inline";
    }
}
function Func2()
{
  window.location= "Harshithaphase3.html";
}

    