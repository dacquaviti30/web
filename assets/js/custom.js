/**
	Custom JS

	1. HEADER CONTENT SLIDE
	2. FIXED MENU
	3. COUNTER
	4. TESTIMONIAL SLIDE (SLICK SLIDER)
	5. CLIENT SLIDE (SLICK SLIDER)
	6. SCROLL TOP BUTTON
	7. MENU SMOOTH SCROLLING
	8. MIXIT FILTER ( FOR PORTFOLIO )
	9. FANCYBOX ( FOR PORTFOLIO POPUP VIEW )
	10. MOBILE MENU CLOSE
	11. PRELOADER
	12. INSTAGRAM SLIDER (SLICK SLIDER)
	13. WOW ANIMATION

**/

jQuery(function($){


	/* ----------------------------------------------------------- */
	/*  1. HEADER CONTENT SLIDE (SLICK SLIDER)
	/* ----------------------------------------------------------- */

	jQuery('.header-slide').slick({
		dots: false,
		infinite: true,
		speed: 500,
		arrows:false,
		autoplay: true,
      	slidesToShow: 1,
		slide: 'span',
		fade: true,
		cssEase: 'linear'
	});

	/* ----------------------------------------------------------- */
	/*  2. FIXED MENU
	/* ----------------------------------------------------------- */

/*
	jQuery(window).bind('scroll', function () {
   if ($(window).scrollTop() >= 0) {
        $('.main-navbar').addClass('navbar-fixed-top');
        $('.logo').addClass('logo-compressed');
        $('.main-nav li a').addClass('less-padding');
        $('.search-area').css('height','44');
        $('.search-area input[type="text"]').css('top','35%');


	   }  else {
	        $('.main-navbar').removeClass('navbar-fixed-top');
	        $('.logo').removeClass('logo-compressed');
	        $('.main-nav li a').removeClass('less-padding');
	        $('.search-area').css('height','44');
	        $('.search-area input[type="text"]').css('top','11%');
	    }
	});
*/

	/* ----------------------------------------------------------- */
	/*  3. COUNTER
	/* ----------------------------------------------------------- */

	jQuery('.counter').counterUp({
        delay: 10,
        time: 1000
    });


	/* ----------------------------------------------------------- */
	/*  4. TESTIMONIAL SLIDE(SLICK SLIDER)
	/* ----------------------------------------------------------- */

	jQuery('.testimonial-slider').slick({
		dots: false,
		infinite: true,
		speed: 500,
		arrows:true,
		autoplay: true,
      	slidesToShow: 1,
		slide: 'div',
		cssEase: 'linear'
	});

	/* ----------------------------------------------------------- */
	/*  5. CLIENT SLIDE (SLICK SLIDER)
	/* ----------------------------------------------------------- */

	$('.client-table').slick({
	  dots: false,
	  infinite: true,
	  arrows:false,
	  speed: 300,
	  autoplay: true,
	  slidesToShow: 6,
	  slidesToScroll: 6,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 4,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

	/* ----------------------------------------------------------- */
	/*  6. SCROLL TOP BUTTON
	/* ----------------------------------------------------------- */

	//Check to see if the window is top if not then display button

	  jQuery(window).scroll(function(){
	    if ($(this).scrollTop() > 300) {
	      $('.scrollToTop').fadeIn();
	    } else {
	      $('.scrollToTop').fadeOut();
	    }
	  });

	  //Click event to scroll to top

	  jQuery('.scrollToTop').click(function(){
	    $('html, body').animate({scrollTop : 0},800);
	    return false;
	  });

	/* ----------------------------------------------------------- */
	/*  7. MENU SMOOTH SCROLLING
	/* ----------------------------------------------------------- */

		//MENU SCROLLING WITH ACTIVE ITEM SELECTED

		// Cache selectors
		var lastId,
		topMenu = $(".main-nav"),
		topMenuHeight = topMenu.outerHeight()+13,
		// All list items
		menuItems = topMenu.find("a"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
		  var item = $($(this).attr("href"));
		  if (item.length) { return item; }
		});

		// Bind click handler to menu items
		// so we can get a fancy scroll animation
		menuItems.click(function(e){
		  var href = $(this).attr("href"),
		      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+32;
		  jQuery('html, body').stop().animate({
		      scrollTop: offsetTop
		  }, 1500);
		  e.preventDefault();
		});

		// Bind to scroll
		jQuery(window).scroll(function(){
		   // Get container scroll position
		   var fromTop = $(this).scrollTop()+topMenuHeight;

		   // Get id of current scroll item
		   var cur = scrollItems.map(function(){
		     if ($(this).offset().top < fromTop)
		       return this;
		   });
		   // Get the id of the current element
		   cur = cur[cur.length-1];
		   var id = cur && cur.length ? cur[0].id : "";

		   if (lastId !== id) {
		       lastId = id;
		       // Set/remove active class
		       menuItems
		         .parent().removeClass("active")
		         .end().filter("[href=#"+id+"]").parent().addClass("active");
		   }
		})

	/* ----------------------------------------------------------- */
	/*  8. MIXIT FILTER ( FOR PORTFOLIO )
	/* ----------------------------------------------------------- */

		jQuery(function(){
		    $('#mixit-container').mixItUp();
		});

	/* ----------------------------------------------------------- */
	/*  9. FANCYBOX ( FOR PORTFOLIO POPUP VIEW )
	/* ----------------------------------------------------------- */

		jQuery(document).ready(function() {
			$(".fancybox").fancybox();
		});

	/* ----------------------------------------------------------- */
	/*  10. MOBILE MENU CLOSE
	/* ----------------------------------------------------------- */

	jQuery('.navbar-nav').on('click', 'li a', function() {
	  $('.in').collapse('hide');
	});

	/* ----------------------------------------------------------- */
	/*  11. PRELOADER
	/* ----------------------------------------------------------- */

	jQuery(window).load(function() { // makes sure the whole site is loaded
      $('.loader').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(100).css({'overflow':'visible'});
    })

    /* ----------------------------------------------------------- */
	/*  12. INSTAGRAM SLIDER (SLICK SLIDER)
	/* ----------------------------------------------------------- */

	jQuery('.instagram-feed').slick({
		dots: true,
		infinite: true,
		speed: 500,
		arrows:true,
		autoplay: true,
      	slidesToShow: 1,
		slide: 'div',
		cssEase: 'linear'
	});

	/* ----------------------------------------------------------- */
	/*  13. WOW ANIMATION
	/* ----------------------------------------------------------- */

	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();

});

/* ----------------------------------------------------------- */
/*  14. PARALLAX
/* ----------------------------------------------------------- */
$(document).ready(function(){
    //** notice we are including jquery and the color plugin at
    //** http://code.jquery.com/color/jquery.color-2.1.0.js

    var scroll_pos = 0;
    var animation_begin_pos = 0; //where you want the animation to begin
		var animation_middle_pos = $( document ).height()/2;
    var animation_end_pos = $( document ).height();//where you want the animation to stop
		console.log(animation_end_pos);
    var beginning_color = new $.Color( 'rgb(255,255,255)' ); //we can set this here, but it'd probably be better to get it from the CSS; for the example we're setting it here.
  	var middle_color = new $.Color( 'rgb(239,187,216)' );
		var ending_color = new $.Color( 'rgba(93,201,255)' ); ;//what color we want to use in the end
    $(document).scroll(function() {
				animation_middle_pos = $( document ).height()/2;
				animation_end_pos = $( document ).height();//where you want the animation to stop
        scroll_pos = $(this).scrollTop();
        if(scroll_pos >= animation_begin_pos && scroll_pos < animation_middle_pos ) {
           // console.log( 'scrolling and animating' );
            //we want to calculate the relevant transitional rgb value

            var percentScrolled = scroll_pos / ( animation_end_pos - animation_begin_pos );

            var newRed = beginning_color.red() + ( ( middle_color.red() - beginning_color.red() ) * percentScrolled*2 );
            var newGreen = beginning_color.green() + ( ( middle_color.green() - beginning_color.green() ) * percentScrolled*2 );
            var newBlue = beginning_color.blue() + ( ( middle_color.blue() - beginning_color.blue() ) * percentScrolled*2 );
            var newColor = new $.Color( newRed, newGreen, newBlue );
            //console.log( newColor.red(), newColor.green(), newColor.blue() );
            $('body').animate({ backgroundColor: newColor }, 0);
        }
			else if (scroll_pos >= animation_middle_pos && scroll_pos <= animation_end_pos ) {
            var percentScrolled = scroll_pos / ( animation_end_pos - animation_begin_pos );

            var newRed = middle_color.red() + ( ( ending_color.red() - middle_color.red() ) * (percentScrolled-0.5)*2 );
            var newGreen = middle_color.green() + ( ( ending_color.green() - middle_color.green() ) * (percentScrolled-0.5)*2 );
            var newBlue = middle_color.blue() + ( ( ending_color.blue() - middle_color.blue() ) * (percentScrolled-0.5)*2 );
            var newColor = new $.Color( newRed, newGreen, newBlue );
            //console.log( newColor.red(), newColor.green(), newColor.blue() );
            $('body').animate({ backgroundColor: newColor }, 0);
        }
				else if ( scroll_pos > animation_end_pos ) {
             $('body').animate({ backgroundColor: ending_color }, 0);
        } else if ( scroll_pos < animation_begin_pos ) {
             $('body').animate({ backgroundColor: beginning_color }, 0);

        } else { }
    });
});
