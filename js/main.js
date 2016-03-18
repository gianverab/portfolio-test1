$(document).ready(function(){

	'use strict';

	var topoffset = 60; //variable for menu height
	var wheight = $(window).height(); //get the height of the window

	$('.navbar-collapse a').click(function (e) {
    	if($('.navbar-toggle').css('display') == 'block' && !$(this).siblings().length){
        	$('.navbar-collapse').collapse('toggle');
    	}
	});
	$("body").click(function(event) {
        // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called 
         if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible") ) {
            $('.navbar-collapse').collapse('toggle');
        }
  	});

	//Set to window tallness
	$('.fullheight').css('height', wheight);

	//Replace IMG inside header with a background image
	$('#featured .item img').each(function(){
		var imgSrc = $(this).attr('src');
		$(this).parent().css({
			'background-image': 'url('+imgSrc+')'
		});
		$(this).remove();
	});
	
	//Adjust height of header element on window resize
	$(window).resize(function () {
		wheight = $(window).height();
		$('.fullheight').css('height', wheight);
	});

	//Activate Scrollspy
	$('body').scrollspy({
		target: 'header .navbar',
		offset: topoffset
	});

	var hash = $(this).find('li.active a').attr('href');

		if(hash !== '#featured'){
			$('header nav').addClass('inbody');
		}else{
			$('header nav').removeClass('inbody');
	}
	//Add an inbody class to nav when scrollspy event fires
	$('.navbar-fixed-top').on('activate.bs.scrollspy', function(){
		var hash = $(this).find('li.active a').attr('href');

		if(hash !== '#featured'){
			$('header nav').addClass('inbody');
		}else{
			$('header nav').removeClass('inbody');
		}
	})

	//Show info for portfolio items
	$('.work').on('mouseover', function(){
		$(this).find('.work-info').css('visibility','visible');
	})
	$('.work').on('mouseout', function(){
		$(this).find('.work-info').css('visibility','hidden');
	})

	//Use smooth scrolling when clicking on navigation
	$('.navbar a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') === 
			this.pathname.replace(/^\//,'') && 
			location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top-topoffset+2
				}, 500);
				return false;
      		} //target.length
    	} //click function
  	}); //smooth scrolling

});
