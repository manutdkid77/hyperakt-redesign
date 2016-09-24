$(document).ready(function(){

	//Navbar Toggle
	//$('body').toggleClass('move-body');
	$('.menu-icon').on('click',function(){
		$('body').toggleClass('move-body');
		$('nav').toggleClass('move-nav');
		//var navp=$(document).scrollTop()+'px';		

		//workaround for mobile devices which don't support scrollTop()

		//For the if statement we can use,
		// window.scrollTo($(document).offset().left,$(document).scrollTop()+'px')
		// for the left value for scrollTo, here we dont move to top of window on opening nav menu. But results in errors and may break some functionality.
		//Instead just specify the value as 0, its okay if users have reach the top of screen when opening this nav menu

		if(navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {           
 		   window.scrollTo(0,$(document).scrollTop()+'px')
		} else {
			$('nav').css('top',$(document).scrollTop()+'px');    		
			}
		
	});

	$(document).on('scroll',function(){

		if($(document).scrollTop()>$('#section-1').offset().top){
			$('.ion-planet').css('color','grey');
			$('.menu-icon').css('color','grey');
		}
		else{
			$('.ion-planet').css('color','white');	
			$('.menu-icon').css('color','white');	
		}
	});

	$('.menu-icon-close').on('click',function(){
		$('body').toggleClass('move-body');
		$('nav').toggleClass('move-nav');
	});

	//Slideshow
	$('.quote-gallery').slick();

});