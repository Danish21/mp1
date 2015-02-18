$(document).ready(function(){
	
	
	var headerHeight = $(window).height()-70;
	var headerWidth  = $(window).width();
	$("#dynamicText").css('top', ""+ (headerHeight/2)-100+"px" );
	$("#dynamicText").css('left', ""+ (headerWidth/2)-180+"px" );
	$("#searchBox").css('top', ""+ (headerHeight/2)-50+"px" );
	$("#searchBox").css('left', ""+ (headerWidth/2)-150+"px" );
	

	
    var myString = "Where are you dining today?";

	var myArray = myString.split("");
	var loopTimer;

	function frameLooper() {
		
		if(myArray.length > 0) {
			var x=document.getElementById("dynamicText");

			x.innerHTML += myArray.shift();
			
		} else {
			clearTimeout(loopTimer); 
            return false;
		}
	}

	loopTimer = setInterval(frameLooper,70);


	/*Dynamically had text to iphone*/
	frameLooper();
	var index = 1;
	var myString2 = "Worst Pizza Ever, Wil never ever eat this for the rest of my life";
    
	var myArray2 = myString2.split("");
	var loopTimer2;
	var y;
	function frameLooper2() {
		
		if(myArray2.length > 0) {
			 y=document.getElementById("dynamicReview");

			y.innerHTML += myArray2.shift();
			
		}else{

			if(index==1){
				y.innerHTML =" ";
				myString2 = "World you got to check this Flavor. 5 stars!";
				myArray2 = myString2.split("");
				index =0;
			}else{
				y.innerHTML =" ";
				myString2 = "Worst Pizza Ever, Wil never ever eat this for the rest of my life";
				myArray2 = myString2.split("");
				index=1;
			}
		}

	}

	loopTimer2 = setInterval(frameLooper2,70);

	

	//sticky navbar
	$(window).scroll(function() {
	if ($(this).scrollTop() > 50){  
	    $('nav').addClass("sticky");
	    $('.mainLogo').addClass("stickyLogo");
	    $('.navOptions').addClass("stickyOptions");
	  }
	  else{
	    $('nav').removeClass("sticky");
	    $('.mainLogo').removeClass("stickyLogo");
	    $('.navOptions').removeClass("stickyOptions");
	  }
	});


	//Dynamically resize main screen
	$(window).resize(function() {
		headerHeight = $(window).height()-70;
		headerWidth  = $(window).width();
		$('header').css("height",""+ headerHeight + "px"  );
		$("#dynamicText").css('top', ""+ (headerHeight/2)-100+"px" );
		$("#dynamicText").css('left', ""+ (headerWidth/2)-180+"px" );
		$("#searchBox").css('top', ""+ (headerHeight/2)-50+"px" );
		$("#searchBox").css('left', ""+ (headerWidth/2)-150+"px" );
		updateSlideShowWidth();
		//$("#playButton").css('left', ""+ (headerWidth/2)-75+"px" );
	});


	/*Modal code*/
	$("#employee1").click(function(){
		headerHeight = $(window).height()-70;
		headerWidth  = $(window).width();
		$("#modalEmployee1").css('top', ""+ (headerHeight/2)-100+"px" );
		$("#modalEmployee1").css('left', ""+ (headerWidth/2)-90+"px" );
		$("#modalEmployee1").css("visibility", "visible");
			

	});
	$("#exitModal1").click(function(){

		$("#modalEmployee1").css("visibility", "hidden");
		// 			

	});
	$("#employee2").click(function(){ 
		headerHeight = $(window).height()-70;
		headerWidth  = $(window).width();
		$("#modalEmployee2").css('top', ""+ (headerHeight/2)-100+"px" );
		$("#modalEmployee2").css('left', ""+ (headerWidth/2)-90+"px" );
		$("#modalEmployee2").css("visibility", "visible");
				

	});
	$("#exitModal2").click(function(){

		$("#modalEmployee2").css("visibility", "hidden");
					

	});
	$("#employee3").click(function(){
		headerHeight = $(window).height()-70;
		headerWidth  = $(window).width();
		$("#modalEmployee3").css('top', ""+ (headerHeight/2)-100+"px" );
		$("#modalEmployee3").css('left', ""+ (headerWidth/2)-90+"px" );
		$("#modalEmployee3").css("visibility", "visible");
					

	});
	$("#exitModal3").click(function(){
		
		$("#modalEmployee3").css("visibility", "hidden");
					

	});
	$("#employee4").click(function(){
		headerHeight = $(window).height()-70;
		headerWidth  = $(window).width();
		$("#modalEmployee4").css('top', ""+ (headerHeight/2)-100+"px" );
		$("#modalEmployee4").css('left', ""+ (headerWidth/2)-90+"px" );
		$("#modalEmployee4").css("visibility", "visible");
	
				

	});
	$("#exitModal4").click(function(){
		$("#modalEmployee4").css("visibility", "hidden");
				
	});

	/*"navbar is scroll"*/

	$('a[href*=#]').click(function(event){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    event.preventDefault();
	});


	/*NavBar highlighting on section*/
	var aChildren =[]; // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < 5; i++) {    
        
        // var ahref = $(aChild).attr('href');
        var ahref;
        if(i==0){
         	ahref = "#Mission";
        }
        else if(i==1){
         	ahref = "#theTeam";
        }
        else if(i==2 || i==3){
         	ahref= "#subscriptionForm";
        }
        else if(i==4){
         	ahref = "#mainDiv";
        }
        aChildren[i]="#menu"+(i+1) +" a";
       
        aArray.push(ahref);
     } // this for loop fills the aArray with attribute href values
     
    
    $(window).scroll(function(){
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            
            var divPos = $(theID).offset().top; // get the offset of the div from the top of page
            var divHeight = $(theID).height(); // get the height of the div in question
            
            if ( (windowPos <= divPos) && ( (divPos+divHeight) <= (windowPos + windowHeight) ) ) {
                $(aChildren[i]).css('color', 'red');
                $(aChildren[i]).css('text-decoration', 'underline');
            } else {
                $(aChildren[i]).css('color', 'white');
                 $(aChildren[i]).css('text-decoration', 'none');
            }
        }

    });
	/*Nav Bar Highlighting stuff done*//**/

	/*slideshow*/
	var currentPosition = 0;

	console.log("hello");
	$('.slide').css('width', ""+headerWidth+"px");
	var slides = $('.slide');
	var numberOfSlides = slides.length;
	
	slides.wrapAll('<div id="slidesHolder"></div>')
	slides.css({ 'float' : 'left' });
	$('#slidesHolder').css('width', headerWidth * numberOfSlides);


	function changePosition() {
			if(currentPosition == numberOfSlides - 1) {
				currentPosition = 0;
			} else {
				currentPosition++;
			}
			moveSlide();
	}
	
	function moveSlide() {
				$('#slidesHolder')
				  .animate({'marginLeft' : headerWidth*(-currentPosition)});
	}

	var slideMover = setInterval(changePosition,2000);
	/*slideshow*/
	function updateSlideShowWidth(){
		$('.slide').css('width', ""+headerWidth+"px");
		$('#slidesHolder').css('width', headerWidth * numberOfSlides);

	}
});