        function DropDown(el) {
        	this.dd = el;
        	this.initEvents();
        }
DropDown.prototype = {
	initEvents: function () {
		var obj = this;

		obj.dd.on('click', function (event) {
			$(this).toggleClass('active');
			event.stopPropagation();
		});
	}
}



$(function () {

	var dd = new DropDown($('#dd1'));
	var dd2 = new DropDown($('#dd2'));

	$(document).click(function () {
		// all dropdowns
		$('.wrapper-dropdown-3').removeClass('active');
	});

});

// You can also use "$(window).load(function() {"
$(function () {
	// Slideshow 4
	$("#slider4").responsiveSlides({
		auto: false,
		pager: false,
		nav: true,
		speed: 500,
		namespace: "callbacks",
		before: function () {
			$('.events').append("<li>before event fired.</li>");
		},
		after: function () {
			$('.events').append("<li>after event fired.</li>");
		}
	});

	$("#slider5").responsiveSlides({
		auto: false,
		pager: false,
		nav: true,
		speed: 500,
		namespace: "callbacks",
		before: function () {
			$('.events').append("<li>before event fired.</li>");
		},
		after: function () {
			$('.events').append("<li>after event fired.</li>");
		}
	});

});
