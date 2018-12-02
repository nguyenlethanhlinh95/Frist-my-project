
$(document).ready(function(){
	//stick slide
	  $('.slickSlide').slick({
	      dots: true,
		  infinite: false,
		  arrows: false,
		  speed: 500,
		  slidesToShow: 4,
		  slidesToScroll: 4,
		  autoplay: true,
		   // autoplaySpeed: 2000,
		  // adaptiveHeight: true,
		  responsive: [
		  				
					    {
					      breakpoint: 992,
					      settings: {
					        slidesToShow: 2,
					        slidesToScroll: 2,					 
					        dots: false
					      }
					    },						    
					    {
					      breakpoint: 480,
					      settings: {
					        slidesToShow: 1,
					        slidesToScroll: 1,
					        dots: false
					      }
					    }
					  ]
	  });

	 $(window).on('scroll',function(){
		 	var position = window.scrollY;
		 	if(position > 60){
		 		$('.navbar').addClass('bg-dark').css({
		 			'margin-top':'0',
		 			'transition': '0.4s'

		 		});
		 	}else{
		 		$('.navbar').removeClass('bg-dark').css({
		 			'margin-top':'25px',
		 			'transition': '0.4s'

		 		});
		 	}
		 });


	 //the characters
	 	$('.filter_control').removeClass('active');
	  	$('#characters').addClass('active');

	  	// $('.item').fadeOut();
	  	// console.log(data);
	  	

	  	// $(this).addClass('active');

	  	// setTimeout(function(){
	  	// $('.character').fadeIn();
	  		
	  	// },200);



  		$('#characters').click(function(event) {
	  	/* Act on the event */
	  	event.preventDefault();
	  	$('.filter_control').removeClass('active');
	  	$(this).addClass('active');

	  	$('.item').fadeOut();
	  	// console.log(data);
	  	

	  	$(this).addClass('active');

	  	setTimeout(function(){
	  	$('.character').fadeIn();
	  		
	  	},200)
	  });

	  $('#artworks').click(function(event) {
	  	/* Act on the event */
	  	event.preventDefault();
	  	$('.filter_control').removeClass('active');
	  	$(this).addClass('active');

	  	$('.item').fadeOut();
	  	setTimeout(function(){
	  	$('.artwork').fadeIn();
	  		
	  	},200)
	  });

	  //end the characters
		  ///pop up images
		  $('.view').magnificPopup({
		  	type: 'image'
		  });


	  //click to scroll
	  $('.cricle').on('click', function(event) {
	  	// alert($('#info').offset().top);
	  	var get_coordinate_present = $(this).offset().top;
	  	var get_coordinate_future = $('#info').offset().top - 100;
	  	var total = get_coordinate_present + get_coordinate_future;
	  	// alert(total);

	  	console.log(get_coordinate_present);
	  	console.log(get_coordinate_future);

	  	$('html').animate({ scrollTop : get_coordinate_future}, 1500,"easeOutBack");


	  	// alert(get_coordinate_future);
	  	// $(this).animate({ scrollTop : $('#info').offset().top}, 1500,"easeOutBack");
	  	/* Act on the event */
	  });


	$('.nav-link').on('click', function() {
		var __this = $(this);
		$('html, body').animate({
			scrollTop: $(__this.attr('href')).offset().top
		}, 1500);
	});

/*
	if (window.matchMedia("(max-width: 7680px)").matches) {
	  // the viewport is at least 400 pixels wide 
	  alet(1);

	}*/

	$( window ).resize(function() {
		var wedt = $( window ).width();
	  	
	  	if (wedt <= 991){
	  		$('.navbar').addClass('bg-dark').css({
		 			'margin-top':'0',
		 			'transition': '0.4s'

		 		});
	  	}else{
	  		$('.navbar').removeClass('bg-dark').css({
		 			'margin-top':'25px',
		 			'transition': '0.4s'

		 		});
		 		
	  	}
	});


});// end to ready 

