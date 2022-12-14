// pet2
function func() {
	var vs = $('#test').val();
	if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
		if(vs =="all"){
			$('.all').show()
			$('.box1s').hide()
			$('.box2s').hide()
			$('.box3s').hide()
			$('.box4s').hide()
			$('.box5s').hide()
			$('.box6s').hide()	
		}else if(vs =="Water"){
			$('.all').hide()
			$('.box1s').show()
			$('.box2s').hide()
			$('.box3s').hide()
			$('.box4s').hide()
			$('.box5s').hide()
			$('.box6s').hide()
		}else if(vs =="Carbohydrates"){
			$('.all').hide()
			$('.box1s').hide()
			$('.box2s').show()
			$('.box3s').hide()
			$('.box4s').hide()
			$('.box5s').hide()
			$('.box6s').hide()
		}else if(vs =="Protein"){
			$('.all').hide()
			$('.box1s').hide()
			$('.box2s').hide()
			$('.box3s').show()
			$('.box4s').hide()
			$('.box5s').hide()
			$('.box6s').hide()
		}else if(vs =="Fat"){
			$('.all').hide()
			$('.box1s').hide()
			$('.box2s').hide()
			$('.box3s').hide()
			$('.box4s').show()
			$('.box5s').hide()
			$('.box6s').hide()
		}else if(vs =="Minerals"){
			$('.all').hide()
			$('.box1s').hide()
			$('.box2s').hide()
			$('.box3s').hide()
			$('.box4s').hide()
			$('.box5s').show()
			$('.box6s').hide()
		}else if(vs =="Vitamins"){
			$('.all').hide()
			$('.box1s').hide()
			$('.box2s').hide()
			$('.box3s').hide()
			$('.box4s').hide()
			$('.box5s').hide()
			$('.box6s').show()
		}
		
	  // smart devices
	}else{
		if(vs =="all"){
			$('.all').show()
			$('.box1').hide()
			$('.box2').hide()
			$('.box3').hide()
			$('.box4').hide()
			$('.box5').hide()
			$('.box6').hide()
			
		}else if(vs =="Water"){
			$('.all').hide()
			$('.box1').show()
			$('.box2').hide()
			$('.box3').hide()
			$('.box4').hide()
			$('.box5').hide()
			$('.box6').hide()
		}else if(vs =="Carbohydrates"){
			$('.all').hide()
			$('.box1').hide()
			$('.box2').show()
			$('.box3').hide()
			$('.box4').hide()
			$('.box5').hide()
			$('.box6').hide()
		}else if(vs =="Protein"){
			$('.all').hide()
			$('.box1').hide()
			$('.box2').hide()
			$('.box3').show()
			$('.box4').hide()
			$('.box5').hide()
			$('.box6').hide()
		}else if(vs =="Fat"){
			$('.all').hide()
			$('.box1').hide()
			$('.box2').hide()
			$('.box3').hide()
			$('.box4').show()
			$('.box5').hide()
			$('.box6').hide()
		}else if(vs =="Minerals"){
			$('.all').hide()
			$('.box1').hide()
			$('.box2').hide()
			$('.box3').hide()
			$('.box4').hide()
			$('.box5').show()
			$('.box6').hide()
		}else if(vs =="Vitamins"){
			$('.all').hide()
			$('.box1').hide()
			$('.box2').hide()
			$('.box3').hide()
			$('.box4').hide()
			$('.box5').hide()
			$('.box6').show()
		}
	}
        
}
