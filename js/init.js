/*
 * Copyright (c) 2019 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	glax_tm_lang_box();
	glax_tm_lang_offset();
	glax_tm_imgtosvg();
	glax_tm_data_images();
	glax_tm_article();
	glax_tm_hamburger();
	glax_tm_submenu();
	glax_tm_mobile_info();
	glax_tm_widget_opener();
	glax_tm_widget_inside();
	glax_tm_widget_closer();
	glax_tm_about_shape();
	glax_tm_about_shape_2();
	glax_tm_miniboxes();
	glax_tm_rating_height();
	glax_tm_isotope();
	glax_tm_jarallax();
	glax_tm_stickyy();
	glax_tm_totop();
	glax_tm_portfolio();
	glax_tm_filter_effect();
	glax_tm_justified();
	glax_tm_magnific_popup();
	glax_tm_sidebar_shape();
	glax_tm_contact_form();
	
	
	jQuery(window).on('resize',function(e){
		e.preventDefault();
		
		glax_tm_about_shape();
		glax_tm_about_shape_2();
		glax_tm_miniboxes();
		glax_tm_rating_height();
		glax_tm_isotope();
		glax_tm_stickyy();
		glax_tm_sidebar_shape();
		glax_tm_lang_offset();
		
	});
	
	jQuery(window).on('load', function(e) {
		e.preventDefault();
		
		glax_tm_isotope();
		glax_tm_stickyy();
		
	});
	
});


// -----------------------------------------------------
// --------------------  FUNCTIONS  --------------------
// -----------------------------------------------------

// -----------------------------------------------------
// -----------------  LANGUAGE BOX  --------------------
// -----------------------------------------------------

function glax_tm_lang_box(){
	
	"use strict";
	
	var button		= jQuery('.glax_tm_topbar_wrap .language .selected');
	var box			= jQuery('.glax_tm_wrapper_all .lang_box');
	
	button.on('click',function(){
		if(box.hasClass('opened')){
			box.removeClass('opened');
		}else{
			box.addClass('opened');
		}
	});
}

function glax_tm_lang_offset(){
	
	"use strict";
	
	var lang		= jQuery('.glax_tm_topbar_wrap .language').offset().left;
	var box			= jQuery('.glax_tm_wrapper_all .lang_box');
	
	box.css({left: (lang+60) + 'px'});
}

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function glax_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function glax_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -----------------------------------------------------
// --------------------  SWIPER ------------------------
// -----------------------------------------------------

function glax_tm_article(){
	
	"use strict";
	
	var swiper = new Swiper('.swiper-container', {
		direction:'horizontal',
		loop:'true',
      pagination: {
        el: '.swiper-pagination',
        type: 'custom',
		  renderCustom: function (swiper, current, total) {
			  var currentIndex;
			  if(current<10){
				  currentIndex = '0'+ current;
			  }else{
				  currentIndex = current;
			  }
			   var totalIndex;
			  if(total<10){
				  totalIndex = '0'+ total;
			  }else{
				  totalIndex = total;
			  }
			  currentIndex = '<span class="current">' + currentIndex + '</span>';
			  totalIndex = '<span class="total">' + totalIndex + '</span>';
			  return  currentIndex + '<span class="divider"> / </span>' + totalIndex;
		  }
      },
      navigation: {
        nextEl: '.tm_next_button',
        prevEl: '.tm_prev_button',
      },
    });
}

// -----------------------------------------------------
// ------------------  HAMBURGER  ----------------------
// -----------------------------------------------------

function glax_tm_hamburger(){
	
	"use strict";
	
	var hamburger 		= jQuery('.hamburger');
	var mobileMenu		= jQuery('.glax_tm_mobile_bar_wrap .menu_list_wrap');
	var allLi			= jQuery('.glax_tm_dropdown_wrap .short_info_wrap ul li');
	var mainbox			= jQuery('.glax_tm_dropdown_wrap .drop_list');
	
	hamburger.on('click',function(){
		var element 	= jQuery(this);
		
		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			if(allLi.hasClass('opened')){
				allLi.removeClass('opened');
				mainbox.slideUp();
			}
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
}


// -----------------------------------------------------
// -----------------    SUBMENU    ---------------------
// -----------------------------------------------------

function glax_tm_submenu(){
	
	"use strict";
	
	var nav 		= jQuery('ul.nav');
	
	nav.find('a').on('click', function(e){
		var element 			= jQuery(this);
		var parentItem			= element.parent('li');
		var parentItems			= element.parents('li');
		var parentUls			= parentItem.parents('ul.sub_menu');
		var subMenu				= element.next();
		var allSubMenusParents 	= nav.find('li');
		
		allSubMenusParents.removeClass('opened');
		
		if(subMenu.length){
			
			e.preventDefault();
			
			if(!(subMenu.parent('li').hasClass('active'))){
				if(!(parentItems.hasClass('opened'))){parentItems.addClass('opened');}
				
				allSubMenusParents.each(function(){
					var el = jQuery(this);
					if(!el.hasClass('opened')){el.find('ul.sub_menu').slideUp();}
				});
				
				allSubMenusParents.removeClass('active');
				parentUls.parent('li').addClass('active');
				subMenu.parent('li').addClass('active');
				subMenu.slideDown();
				
				// for recalculate scrollable height
				var scrollableE = jQuery('.scrollable');
				scrollableE.each(function(){
					var elE = jQuery(this);
					var hhhE = elE.height();hhhE++;
					setTimeout(function(){elE.css({height:hhhE});},500);
					setTimeout(function(){hhhE--;elE.css({height:hhhE});},600);
				});
				
			}else{
				subMenu.parent('li').removeClass('active');
				subMenu.slideUp();
			}
			return false;
		}
	});
}

// -----------------------------------------------------
// --------------    GLAX MOBILE INFO    ---------------
// -----------------------------------------------------

function glax_tm_mobile_info(){
	
	"use strict";
	
	var wrapper				= jQuery('.glax_tm_mobile_bar_wrap');
	var allLi				= wrapper.find('.short_info_wrap ul li');
	var mainList			= wrapper.find('.short_info_wrap ul li a');
	var mainbox				= jQuery('.glax_tm_mobile_bar_wrap .drop_list');
	
	mainList.on('click',function(){
		var element			= jQuery(this);
		var thisLi			= element.parent();
		var attr			= thisLi.attr("data-type");
		var extra			= jQuery('.glax_tm_dropdown_wrap .drop_list.'+attr);
		
		// variables to close mobilemenu
		var hamburger 		= jQuery('.hamburger');
		var mobileMenu		= jQuery('.glax_tm_mobile_bar_wrap .menu_list_wrap');
		
		
		if(thisLi.hasClass('opened')){
			thisLi.removeClass('opened');
			extra.slideUp();
		}else{
			if(hamburger.hasClass('is-active')){
				hamburger.removeClass('is-active');
				mobileMenu.slideUp();
			}
			mainbox.slideUp();
			allLi.removeClass('opened');
			thisLi.addClass('opened');
			extra.slideDown();
		}
			
	});
}

// -----------------------------------------------------
// ----------    GLAX WIDGET OPENER   ------------------
// -----------------------------------------------------

function glax_tm_widget_opener(){
	
	"use strict";
	
	var topbar				= jQuery('.glax_tm_topbar_wrap');
	var list				= topbar.find('.right_part_wrap ul li');
	var button				= topbar.find('.right_part_wrap ul li a');
	var widget				= jQuery('.glax_tm_widget_wrap');
	var overlay				= jQuery('.glax_tm_widget_window_overlay');
	
	button.on('click',function(){
		var element			= jQuery(this);
		var allLi			= element.parent();
		var attr			= allLi.attr("data-style");
		var extraClass		= jQuery('.widget_dropdown_wrap .drop_list.'+attr);
		var widgetAttr		= jQuery('.glax_tm_widget_wrap .widget_icons_wrap ul li.'+attr);
			
		list.addClass('opened');
		widget.addClass('opened');
		overlay.addClass('opened');
		
		setTimeout(function(){widgetAttr.addClass('opened');},650);
		setTimeout(function(){
			extraClass.slideDown();
		 },600);
		glax_tm_widget_inside();
		
		
		return false;
	});
	
}

function glax_tm_widget_inside(){
	
	"use strict";
	
	var widget			= jQuery('.glax_tm_widget_wrap');
	var alLi			= jQuery('.glax_tm_widget_wrap .widget_icons_wrap ul li');
	var button			= widget.find('.widget_icons_wrap ul li a');
	var dropBox			= jQuery('.widget_dropdown_wrap .drop_list');
	
	button.on('click',function(){
		
		var element			= jQuery(this);
		var elementLi		= element.parent();
		var attr			= elementLi.attr("data-style");
		var dropList		= jQuery('.widget_dropdown_wrap .drop_list.'+attr);
		
		if(!elementLi.hasClass('opened')){
			dropBox.slideUp();
			alLi.removeClass('opened');
			elementLi.addClass('opened');
			dropList.slideDown();
		}
		
	});
	
}

function glax_tm_widget_closer(){
	
	"use strict";
	
	var overlay			= jQuery('.glax_tm_widget_window_overlay');
	var dropBox			= jQuery('.widget_dropdown_wrap .drop_list');
	var widget			= jQuery('.glax_tm_widget_wrap');
	var topbarList		= jQuery('.glax_tm_topbar_wrap .right_part_wrap ul li');
	var innerLi 		= jQuery('.widget_icons_wrap ul li');
	
	overlay.on('click',function(){
		
		dropBox.slideUp();
		widget.removeClass('opened');
		overlay.removeClass('opened');
		innerLi.removeClass('opened');
		setTimeout(function(){topbarList.removeClass('opened');},900);
	
	});
	
}

// -----------------------------------------------------
// -----------    HOME INTRODUCE SHAPE    --------------
// -----------------------------------------------------

function glax_tm_about_shape(){
	"use strict";
	
	var box				= jQuery('.qqq').outerWidth();
	var boxWidth		= Math.floor((box-75)*0.7);
	var shape			= jQuery('.qqq .shape_top .first');
	
	shape.css({borderLeftWidth:boxWidth});
}

function glax_tm_about_shape_2(){
	"use strict";
	
	var box				= jQuery('.qqq').outerWidth();
	var boxWidth		= Math.floor((box-75)*0.7);
	var shape			= jQuery('.qqq .shape_bottom .first');
	
	shape.css({borderRightWidth:boxWidth});
}

// -----------------------------------------------------
// -----------------    MINI BOXES    ------------------
// -----------------------------------------------------

 function glax_tm_miniboxes(){
	 
  "use strict";
	 
  var el 			= jQuery('.glax_tm_miniboxes');
	 
  if(el.length){
   el.each(function(index, element) {
         
    var child		= jQuery(element).find('.glax_tm_minibox');
    
    child.css({height:'auto'});
    // Get an array of all element heights
    
    var W 		= jQuery(window).width();
    if(W > 480){
     var elementHeights = child.map(function() {return jQuery(this).outerHeight();}).get();
    
     // Math.max takes a variable number of arguments
     // `apply` is equivalent to passing each height as an argument
     var maxHeight 		= Math.max.apply(null, elementHeights);
     
     // Set each height to the max height
     child.css({height:maxHeight+'px'}); 
    }
   });  
  }
 }

// -----------------------------------------------------
// -------------    RATING HEIGHT    -------------------
// -----------------------------------------------------

function glax_tm_rating_height(){
	
	"use strict";
	
	var rating			= jQuery('.glax_tm_rating_wrap .leftbox');
	var div				= jQuery('.glax_tm_rating_wrap .rating_text .inner').width();
	
	rating.css({minHeight:div+170});
	
}

// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------
function glax_tm_isotope(){
	
	"use strict";
	
	jQuery('.masonry').isotope({
		itemSelector: '.item',
		masonry: {
			
		}
	});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function glax_tm_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed
		});
	});
}


// -----------------------------------------------------
// --------------    STICKY SIDEBAR    -----------------
// -----------------------------------------------------

function glax_tm_stickyy(){
	 
	"use strict";

	var el 		= jQuery('.fn_w_sminiboxes');

	if(el.length){
		el.each(function(index, element) {
			var child	= jQuery(element).find('.fn_w_sminibox');
			child.css({height:'auto'});
			var W 		= jQuery(window).width();
			if(W > 1400){
				var elementHeights = child.map(function() {return jQuery(this).outerHeight();}).get();
				var maxHeight 		= Math.max.apply(null, elementHeights);
				child.css({height:maxHeight+'px'}); 
			}
		}); 
	}

}

// -----------------------------------------------------
// --------------------    TOTOP    --------------------
// -----------------------------------------------------

function glax_tm_totop(){
	
	"use strict";
	
	jQuery(".glax_tm_totop").on('click', function(e) {
		e.preventDefault();		
		jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
}


// -------------------------------------------------
// --------------    PORTFOLIO    ------------------
// -------------------------------------------------

// filterable 
function glax_tm_portfolio(){

	"use strict";

	if(jQuery().isotope) {

		// Needed variables
		var list 		 = jQuery('.glax_tm_portfolio_list');
		var filter		 = jQuery('.glax_tm_portfolio_filter');

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				var selector = jQuery(this).attr('data-filter');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				return false;
			});	

			// Change active element class
			filter.find('a').on('click', function() {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});	
		}
	}
}

function glax_tm_filter_effect(){
	"use strict";
	
	var button			= jQuery('.glax_tm_projects_wrap .all_projects');
	var element			= jQuery('.glax_tm_projects_wrap .filter_list');
	
	button.on('click',function(){
		if(element.hasClass('opened')){
			element.removeClass('opened');
			element.slideUp();
		}else{
			element.addClass('opened');
			element.slideDown();
		}	
		return false;
	});
}

// -----------------------------------------------------
// --------------    JUSTIFIED   -----------------------
// -----------------------------------------------------

function glax_tm_justified(){
	"use strict";
	
	jQuery('.glax_tm_justified_wrap').justifiedGallery({
//    images : photos,
    rowHeight: 300,
	margins:10
  
});
	
}

// -----------------------------------------------------
// --------------    MAGNIFIC POPUP    -----------------
// -----------------------------------------------------

function glax_tm_magnific_popup(){
	
	"use strict";
	
	jQuery('.open-popup-link').magnificPopup({
		type:'inline',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});
	
	jQuery('.gallery').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			}
		});
	});
	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
	});
	jQuery('.popup-youtube').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			//type: 'iframe',
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
}

// -----------------------------------------------------
// ---------------    SIDEBAR SHAPE    -----------------
// -----------------------------------------------------

function glax_tm_sidebar_shape(){
	"use strict";
	
	var box				= jQuery('.glax_tm_request_estimate_wrap .definition').outerWidth();
	var boxWidth		= Math.floor(box*0.267); //80
	var boxWidth2		= box-boxWidth; //220
	var boxHeight		= Math.floor(box*0.183);//55
	var shape1			= jQuery('.glax_tm_request_estimate_wrap .first_shape .first');
	var shape2			= jQuery('.glax_tm_request_estimate_wrap .first_shape .second');
	var shape3			= jQuery('.glax_tm_request_estimate_wrap .first_shape .third');
	var shape4			= jQuery('.glax_tm_request_estimate_wrap .second_shape .first');
	var shape5			= jQuery('.glax_tm_request_estimate_wrap .second_shape .second');
	var shape6			= jQuery('.glax_tm_request_estimate_wrap .second_shape .third');
	
	shape1.css({borderRightWidth:boxWidth,borderBottomWidth:boxWidth});
	shape2.css({borderRightWidth:boxWidth,borderBottomWidth:boxWidth});
	shape3.css({borderRightWidth:boxWidth,borderBottomWidth:boxHeight});
	shape4.css({borderLeftWidth:boxWidth2,borderBottomWidth:boxWidth});
	shape5.css({borderLeftWidth:boxWidth2,borderBottomWidth:boxWidth});
	shape6.css({borderLeftWidth:boxWidth2,borderBottomWidth:boxHeight});
	
}

// -----------------------------------------------------
// -----------------    ACCORDION    -------------------
// -----------------------------------------------------

jQuery(".glax_tm_accordion").friendslab_accordion({
	showIcon: false, //boolean	
	animation: true, //boolean
	closeAble: true, //boolean
	slideSpeed: 500 //integer, miliseconds
});

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function glax_tm_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}

// -----------------------------------------------------
// -------------------    COUNTER    -------------------
// -----------------------------------------------------

jQuery('.glax_tm_counter').each(function() {

	"use strict";

	var el		= jQuery(this);
	el.waypoint({
		handler: function(){

			if(!el.hasClass('stop')){
				el.addClass('stop').countTo({
					refreshInterval: 50,
					formatter: function (value, options) {
						return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
					},	
				});
			}
		},offset:'80%'	
	});
});