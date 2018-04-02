function loadSWF(url) {
    swfobject.embedSWF(url, "flashcontent", "500", "280", "7");
}

function clearAllSlideshowTimers() {
    for (var i = 0; i < slideshowTimers.length; i++) {
        clearInterval(slideshowTimers[i]);
        $(".my-slideshow.playing").removeClass("playing");
    }
}


$(".minimize").click(function () {
    if ($(".contact-form.collapsed").length > 0) {
        $(".contact-form.collapsed").removeClass("collapsed");
    }
    else {
        $(".contact-form").addClass("collapsed");
    }


    //if ($(".contact-info").css("height") == "0px") {
    //    $(".contact-form").css("background-color", "");
    //    $(".contact-form").css("opacity", "0");
    //    $(".contact-form").css("padding-bottom", "");
    //    $(".contact-info").children().css("display", "block");
    //    $(".contact-info").css("opacity", "0");
    //    $("#check").css("display", "none");

    //    $(".contact-info").animate({
    //        "min-height": "525px",
    //        opacity: 1
    //    }, 1000, function () {
    //    });

    //    $(".contact-form").animate({
    //        opacity: 1
    //    }, 1000, function () {
            
    //    });
    //}
    //else {
    //    $(".contact-info").animate({
    //        height: 0,
    //        opacity: 0

    //    }, 1000, function () {
    //        $(".contact-info").children().css("display", "none");
    //        $("#minimize").css("display", "block");
    //        $("#minimize").css("opacity", "1");
    //        $(".contact-info").css("height", "0");
    //        $(".contact-info").animate({
    //            height: 0,
    //            opacity: 1
    //        }, 300, function () {
    //        });
    //    });

    //    $(".contact-form").animate({
    //        opacity: 0
    //    }, 1000, function () {
    //        $(".contact-form").css("padding-bottom", "3px");
    //        $(".contact-form").css("background-color", "rgba(0, 0, 0, 0)");
    //        $(".contact-form").animate({
    //            opacity: 1
    //        }, 300, function () {
    //        });
    //    });
    //}
    

   

});


function stopMapScroll(mapContainerClass, mapElementId) {

	var $mapElement = $('#' + mapElementId);
	var $mapContainer = $('.' + mapContainerClass);

	$mapElement.addClass('scrolloff');              

	$mapContainer.on("mouseup", function () {       
		$mapElement.addClass('scrolloff');
	});
	$mapContainer.on("mousedown", function () {     
		$mapElement.removeClass('scrolloff');
	});

	$mapElement.mouseleave(function () {            
		$mapElement.addClass('scrolloff');            
	});
}

//wow = new WOW(
//                      {
//                      	boxClass: 'wow',
//                      	animateClass: 'animated',
//                      	offset: 100,
//                      	mobile: true,
//                      	live: true
//                      }
//                    )
//wow.init();

$(function () {
	$('nav#menu-left').mmenu();
});

function showOrHideNavs() {
    if ($(".active-overlay .rslides > li:first").length > 0) {
        if ($(".active-overlay .rslides > li:first").attr("class") != undefined && $(".active-overlay .rslides > li:first").attr("class").indexOf("_on") !== -1) {
            $(".active-overlay .prev").hide();
        } else {
            $(".active-overlay .prev").show();
        }

        if ($(".active-overlay .rslides > li:last").attr("class") != undefined && $(".active-overlay .rslides > li:last").attr("class").indexOf("_on") !== -1) {
            $(".active-overlay .next").hide();
        } else {
            $(".active-overlay .next").show();
        }
    }
}

$(document).ready(function () {

    // Design page click and scroll

    //$('.hs-content').on('click', function (e) {

    //    var leftIndex = (-32 * $(this).index()) + 4;
    //    if ($(this).index() == 0) {
    //        leftIndex = 0;
    //    }
    //    var leftValue = '' + leftIndex + '%';
    //    $('.hs-content-wrapper').animate({
    //        left: leftValue
    //    }, 500, 'swing');
    //});
    

    $(".hs-content").click(function () {

        var leftValue = $(this).offset().left + $(".scroller-wrapper").scrollLeft() - 60;
        $('.scroller-wrapper').animate({
            scrollLeft: leftValue
        }, 500);
    });



    // Recipe "slideshows"
    $(".rslides").responsiveSlides({
        auto: false,
        pager: false,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        before: function () {
            $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
            showOrHideNavs();
            $('.events').append("<li>after event fired.</li>");
        }
    });



    $(".w100 tr").each(function () {
        $(this).find("td:nth-child(9)").css("color", "red").css("font-weight", "bold");
    });

	//Used to send the user to the top of the page
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash,
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 1000, 'swing', function () {
		    setTimeout(function () {
				$('html, body').stop().animate({
					'scrollTop': $target.offset().top
				}, 100, 'swing')
			}, 400);

			window.location.hash = target;
		});
	});

	wow = new WOW(
									{
										boxClass: 'wow',
										animateClass: 'animated',
										offset: 100,
										mobile: true,
										live: true
									}
								)
	wow.init();

	$(document).ready(function () {



		$(function () {
			$('nav#menu-left').mmenu();
		});


		//Owl carousel - need to ditch
		//$("#owl-demo").owlCarousel({
		//	items: 1,
		//	lazyLoad: true,
		//	autoPlay: true,
		//	navigation: true,
		//	navigationText: ["", ""],
		//	rewindNav: false,
		//	scrollPerPage: false,
		//	pagination: false,
		//	paginationNumbers: false
		//});

		$('.tooltip').addClass('displayed');
		setTimeout(function () {
			$('.tooltip').removeClass('displayed');
		}, 6000);


	});





	//stop the user from scrolling until after 5 seconds
	setTimeout(function () {
		$('body').css('overflow', '');
		$('body').css('width', '');
	}, 5000);

	$('.fade-caption').hover(
							 function () {
							 	$(this).find('.caption').fadeIn(250);
							 },
							 function () {
							 	$(this).find('.caption').fadeOut(250);
							 }
					 );


	stopMapScroll('contact-map', 'map');


	//Albums hover and fading in/out
	var albumsArray = $('.album-fade');
	$.each(albumsArray, function (index, albumEl) {
		//for each album, do this

	    var imagesArray = $(albumEl).find('.album-images-hidden ul li');

		if (imagesArray.length > 1) {
		    var indexToDisplay = 0;
		    setInterval(function () {
		        var srcString = $(imagesArray[indexToDisplay]).attr("data-thumb");

		        $(albumEl).find('img').addClass("fadeOut animated");
		        setTimeout(function() {
		            $(albumEl).find('.album-cover-pic').attr("src", srcString);
		            $(albumEl).find('img').removeClass("fadeOut animated");
		            $(albumEl).find('img').addClass("fadeIn animated");
		        }, 500)

		        if (++indexToDisplay >= imagesArray.length) {
		            indexToDisplay = 0;
		        }
		    }, 5000 + Math.floor(Math.random()*1000));
		} else {
			var srcString = $(imagesArray[0]).attr("data-thumb");
			$(albumEl).find('.album-cover-pic').attr("src", srcString);
		}

		$(albumEl).click(function () {
			$('.demo').empty();
			$(albumEl).find('.album-images-hidden ul').clone().appendTo(".demo");
			$('.demo ul').switchClass("lightSlider-template", "lightSlider", 1000, "easeInOutQuad");
			$('.demo ul').attr("id", "lightSlider");
			$('.overlay-caption').text("");

			if (typeof slider != 'undefined') {
				if (slider) {
					//console.debug("destorying slider");
					slider.destroy();
					slider = null;
				}
			}

			$(".demo").css("visibility", "hidden");
			openNav('myNav');

			setTimeout(function () {
			    slider = $('#lightSlider').lightSlider({
				    gallery: true,
				    item: 1,
				    loop: true,
				    slideMargin: 0,
				    thumbItem: 9,
				    auto: true,
				    mode: 'fade',
				    speed: 700,
				    pause: 6000,
				    autoWidth: false,
				    onBeforeSlide: function (el) {
					    //console.debug('onBeforeSlide');
					    $('.overlay-caption').text("");
				    },
				    onAfterSlide: function (el) {
					    //console.debug('onAfterSlide');
					    var caption = el.find('.active').attr('data-caption');
					    if (caption) {
						    $('.overlay-caption').text(caption);
					    }
					    else {
						    $('.overlay-caption').text("");
					    }
				    }
			    });

			    setTimeout(function () {
				    //console.debug('setting caption text for the first time');
				    var caption = slider.find('li.active').attr('data-caption');
				    if (caption) {
					    $('.overlay-caption').text(caption);
				    }
			    }, 800);

			    setTimeout(function () {
			        $(".demo").css("visibility", "visible");
			    }, 200);
			}, 500);




		});

	});

	$('.album-fade').hover(
		 function () {
		 	$(this).find('.caption').fadeIn(250);

		 },
		 function () {
		 	$(this).find('.caption').fadeOut(250);
		 }
 );


	// Navigation hover
	$(".top-nav li").hover(
		 function () {
		 	$(this).addClass("active");

		 },
		 function () {
		 	$(this).removeClass("active");

		 }
 );


    //$(".contact-form").on('transitionend webkitTransitionEnd oTransitionEnd', function () {
    //    $("#minimize").animate({
    //            height: 35
    //        }, 1000, function () {
    //        });
    //});

    $(".contact-form").mouseover(function () {
        $(".minimize").animate({
            height: 35
        }, 1000, function () {
        });
    });

    $('.search').hover(function () {
        $(this).removeClass('minimized');
    }, function () {
        if ($(this).is(":focus") || $(this).val()) {
            //console.debug('has focus');
        }
        else {
            $(this).addClass('minimized');
        }
    });

    $('.search').on('blur', function () {
        if (!$(this).val()) {
            $(this).addClass('minimized');
        }
    });

    $(".open-page").click(function (e) {
        e.preventDefault();

        // clear all timers for all the slideshows --------
        clearAllSlideshowTimers();
        // ------------------------------------------------

        // take away the wow effect from the grid blocks because they will keep reinitilising while they are on the screen.
        $(".grid-block.wow").removeAttr("style");
        $(".grid-block.wow").removeClass("wow");
        // reinitalise wow to ensure that every time the pages open, the reveal animations play again.
        wow.init();

    	var pageToOpen = $(this).attr("data-open-page");
    	var target = $("#" + pageToOpen);
    	$target = $(target);

    	if ($target.is(":visible")) {
    	    $("#" + pageToOpen).siblings(".hidden-page").andSelf().slideUp('fast');
    		return;
    	}

    	$("#" + pageToOpen).siblings(".hidden-page").andSelf().slideUp('fast');
    	$(".hidden-sub-page").slideUp('fast');
    	$(".hidden-section").slideUp('fast');
    	$(".hidden-page").slideUp('fast');


    	$("#" + pageToOpen).delay(500).slideToggle('slow', function () {
    		$('html, body').stop().animate({
    			'scrollTop': $target.offset().top
    		}, 800, 'swing', function () {
    		    window.location.hash = '#' + pageToOpen;
    		    
    		});
    	});

    	$('.round-menu').removeClass("active");
    	$('.menu-wrapper').removeClass("active");
    });



    $(".open-sub-page").click(function (e) {
        e.preventDefault();
        var parentPage = $(this).attr("data-open-page").split("#")[0];

        // First open the parent page if not open 
        if (!$('#' + parentPage).is(":visible")) {
            if ($('[data-open-page="' + parentPage + '"]').length > 0) {
                $('[data-open-page="' + parentPage + '"]').first().trigger("click");
            }
        }


        var pageToOpen = $(this).attr("data-open-page").split("#")[1];  

        var target = $("#" + pageToOpen);
        $target = $(target);

        if ($target.is(":visible")) {
            $(".hidden-sub-page").slideUp('fast');
            return;
        }

        $(".hidden-sub-page").slideUp('fast');
        $("#" + pageToOpen).slideToggle('fast', function () {
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 1200, 'swing', function () {
                window.location.hash = '#' + parentPage + '#' + pageToOpen;
            });
        });

        $('.round-menu').removeClass("active");
        $('.menu-wrapper').removeClass("active");

    });

    $(".trigger").draggable({
        axis: "x",
        iframeFix: true,
        start: function (event, ui) {
            $(".trigger").css("pointer-events", "none");
        },
        stop: function (event, ui) {
            $(".trigger").css("left", "");
            if (event.offsetX > 100) {
                $(".menu-wrapper").toggleClass("left-aligned");
            } 
            $(".trigger").css("pointer-events", "");
        }
    });

    $(".trigger").click(function () {
            if ($(this).parent().hasClass("active")) {
                $(this).parent().removeClass("active");
                $(this).parent().parent().removeClass("active");
                return;
            }

            $('.round-menu').removeClass("active");
            $('.menu-wrapper').removeClass("active");

            $(this).parent().addClass("active");
            $(this).parent().parent().addClass("active");
    });


    $('.hover-control a').click(function (e) {
        e.preventDefault();
        var divId = $(this).attr('data-display-recipe')
        openNav(divId);
    });

    $('.load-more-btn').click(function (e) {
        e.preventDefault();

        $('.artical-grid.cooking-grid:hidden:lt(3)')
            .css('opacity', 0)
            .slideDown(1000)
            .animate(
                { opacity: 1 },
                { queue: false, duration: 1000 }
            );
        if ($('.artical-grid.cooking-grid:hidden').length <= 0) {
            $('.load-more-btn').hide();
        }
    });

    $('.know-more-btn').click(function (e) {
        e.preventDefault();

        $('.bd-know-more')
            .css('opacity', 0)
            .slideDown(1000)
            .animate(
                { opacity: 1 },
                { queue: false, duration: 1000 }
            );
        $('.know-more-btn').hide();
    });

    $('.load-game-btn').click(function (e) {
        e.preventDefault();
        loadSWF('https://dl.dropboxusercontent.com/s/xj9my345lp7xwaf/Char.swf');

        //loadSWF('https://dl.dropboxusercontent.com/u/10661977/Char.swf');
        if ($('.flash-game-container').is(':visible')) {
            $('.flash-game-container')
                .css('opacity', 1)
                .slideUp(1000)
                .animate(
                    { opacity: 0 },
                    { queue: false, duration: 1000 }
                );
        }
        else {

            $('.flash-game-container')
                .css('opacity', 0)
                .slideDown(1000)
                .animate(
                    { opacity: 1 },
                    { queue: false, duration: 1000 }
                );
        }
        });
   
    $('.open-game-btn').click(function (e) {
            $('.flash-game-container')
                .css('opacity', 1)
                .slideUp(1000)
                .animate(
                    { opacity: 0 },
                    { queue: false, duration: 1000 }
                );
    });

    $('.show-next-section').click(function (e) {
        //get next div
        var divToShow = $(this).next('.hidden-section');

        //if it's visible already, hide it
        if (divToShow.is(':visible')) {
            divToShow.slideUp();
        }
        else {
            //if it's not visible already, make it visible and make all the other divs in the siblings invisible
            $(this).siblings('.hidden-section').slideUp();
            divToShow
                .css('opacity', 0)
                .slideDown(700)
                .animate(
                    { opacity: 1 },
                    { queue: false, duration: 700 }
            );

            if ($(this).data("open-sub-page")) {
                var $this = $(this);
                setTimeout(function () {
                    window.location.hash = "#" + $this.closest(".hidden-page").attr("id") + "#" + $this.data("open-sub-page");
                    setTimeout(function () {
                        $('html, body').stop().animate({
                            'scrollTop': $this.offset().top
                        }, 1000, 'swing')
                    }, 400);
                }, 1000);
            }
            else {
                var $this = $(this);
                setTimeout(function () {
                    window.location.hash = "#" + $this.closest(".hidden-page").attr("id");
                }, 1000);
            }
        }
    });

    var targetPage = window.location.href.split('#')[1];
    var targetSubPage = window.location.href.split('#')[2];

    setTimeout(function () {
        if ($('[data-open-page="' + targetPage + '"]').length > 0) {
            $('[data-open-page="' + targetPage + '"]').first().trigger("click");
        }
    }, 5000);

    setTimeout(function () {
        if ($('[data-open-sub-page="' + targetSubPage + '"]').length > 0) {
            $('[data-open-sub-page="' + targetSubPage + '"]').first().trigger("click");
            setTimeout(function () {
                window.location.hash = "#" + targetPage + "#" + targetSubPage;
            }, 3000);
        }
    }, 6000);

    $(window).on("resize", function () {

        if ($(this).width() <= 575) {
            homeSliderEl.goToSlide(1);
            homeSliderEl.stopAuto();
            $(".folder__thumb").removeAttr("style");
        }
        else {
            homeSliderEl.startAuto();
        }
        // Invoke the resize event immediately
    }).resize();
    

});


/* Open when someone clicks on the span element */
function openNav(divId) {
    $("#" + divId).addClass("active-overlay");
    showOrHideNavs();
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
	$(".overlay").removeClass("active-overlay");
}

function stopYouTubeVid(id) {
    var video = $("#" + id).attr("src");
    $("#" + id).attr("src", "");
    $("#" + id).attr("src", video);
}