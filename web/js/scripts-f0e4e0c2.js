/** @preserve
 *
 * slippry v1.3.1 - Responsive content slider for jQuery
 * http://slippry.com
 *
 * Authors: Lukas Jakob Hafner - @saftsaak
 *          Thomas Hurd - @SeenNotHurd
 *
 * Copyright 2015, booncon oy - http://booncon.com
 *
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function (a) { "use strict"; var b; b = { slippryWrapper: '<div class="sy-box" />', slideWrapper: '<div class="sy-slides-wrap" />', slideCrop: '<div class="sy-slides-crop" />', boxClass: "sy-list", elements: "li", activeClass: "sy-active", fillerClass: "sy-filler", loadingClass: "sy-loading", adaptiveHeight: !0, start: 1, loop: !0, captionsSrc: "img", captions: "overlay", captionsEl: ".sy-caption", initSingle: !0, responsive: !0, preload: "visible", pager: !0, pagerClass: "sy-pager", controls: !0, controlClass: "sy-controls", prevClass: "sy-prev", prevText: "Previous", nextClass: "sy-next", nextText: "Next", hideOnEnd: !0, transition: "fade", kenZoom: 120, slideMargin: 0, transClass: "transition", speed: 800, easing: "swing", continuous: !0, useCSS: !0, auto: !0, autoDirection: "next", autoHover: !0, autoHoverDelay: 100, autoDelay: 500, pause: 4e3, onSliderLoad: function () { return this }, onSlideBefore: function () { return this }, onSlideAfter: function () { return this } }, a.fn.slippry = function (c) { var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A; return e = this, 0 === e.length ? this : e.length > 1 ? (e.each(function () { a(this).slippry(c) }), this) : (d = {}, d.vars = {}, n = function () { var a, b, c; b = document.createElement("div"), c = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", MSTransition: "msTransitionEnd", OTransition: "oTransitionEnd", transition: "transitionEnd transitionend" }; for (a in c) if (void 0 !== b.style[a]) return c[a] }, w = function () { var a = document.createElement("div"), b = ["Khtml", "Ms", "O", "Moz", "Webkit"], c = b.length; return function (d) { if (d in a.style) return !0; for (d = d.replace(/^[a-z]/, function (a) { return a.toUpperCase() }) ; c--;) if (b[c] + d in a.style) return !0; return !1 } }(), z = function (b, c) { var d, e, f, g; return d = c.split("."), e = a(b), f = "", g = "", a.each(d, function (a, b) { b.indexOf("#") >= 0 ? f += b.replace(/^#/, "") : g += b + " " }), f.length && e.attr("id", f), g.length && e.attr("class", a.trim(g)), e }, A = function () { var a, b, c, e; c = {}, e = {}, a = 100 - d.settings.kenZoom, e.width = d.settings.kenZoom + "%", d.vars.active.index() % 2 === 0 ? (e.left = a + "%", e.top = a + "%", c.left = "0%", c.top = "0%") : (e.left = "0%", e.top = "0%", c.left = a + "%", c.top = a + "%"), b = d.settings.pause + 2 * d.settings.speed, d.vars.active.css(e), d.vars.active.animate(c, { duration: b, easing: d.settings.easing, queue: !1 }) }, l = function () { d.vars.fresh ? (d.vars.slippryWrapper.removeClass(d.settings.loadingClass), d.vars.fresh = !1, d.settings.auto && e.startAuto(), d.settings.useCSS || "kenburns" !== d.settings.transition || A(), d.settings.onSliderLoad.call(void 0, d.vars.active.index())) : a("." + d.settings.fillerClass, d.vars.slideWrapper).addClass("ready") }, q = function (b, c) { var e, f, g; e = b / c, f = 1 / e * 100 + "%", g = a("." + d.settings.fillerClass, d.vars.slideWrapper), g.css({ paddingTop: f }), l() }, g = function (b) { var c, d; void 0 !== a("img", b).attr("src") ? a("<img />").load(function () { c = b.width(), d = b.height(), q(c, d) }).attr("src", a("img", b).attr("src")) : (c = b.width(), d = b.height(), q(c, d)) }, f = function () { if (0 === a("." + d.settings.fillerClass, d.vars.slideWrapper).length && d.vars.slideWrapper.append(a('<div class="' + d.settings.fillerClass + '" />')), d.settings.adaptiveHeight === !0) g(a("." + d.settings.activeClass, e)); else { var b, c, f; c = 0, f = 0, a(d.vars.slides).each(function () { a(this).height() > c && (b = a(this), c = b.height()), f += 1, f === d.vars.count && (void 0 === b && (b = a(a(d.vars.slides)[0])), g(b)) }) } }, p = function () { d.settings.pager && (a("." + d.settings.pagerClass + " li", d.vars.slippryWrapper).removeClass(d.settings.activeClass), a(a("." + d.settings.pagerClass + " li", d.vars.slippryWrapper)[d.vars.active.index()]).addClass(d.settings.activeClass)) }, u = function () { !d.settings.loop && d.settings.hideOnEnd && (a("." + d.settings.prevClass, d.vars.slippryWrapper)[d.vars.first ? "hide" : "show"](), a("." + d.settings.nextClass, d.vars.slippryWrapper)[d.vars.last ? "hide" : "show"]()) }, i = function () { var b, c; d.settings.captions !== !1 && (b = "img" !== d.settings.captionsSrc ? d.vars.active.attr("title") : void 0 !== a("img", d.vars.active).attr("title") ? a("img", d.vars.active).attr("title") : a("img", d.vars.active).attr("alt"), c = "custom" !== d.settings.captions ? a(d.settings.captionsEl, d.vars.slippryWrapper) : a(d.settings.captionsEl), void 0 !== b && "" !== b ? c.html(b).show() : c.hide()) }, e.startAuto = function () { void 0 === d.vars.timer && void 0 === d.vars.delay && (d.vars.delay = window.setTimeout(function () { d.vars.autodelay = !1, d.vars.timer = window.setInterval(function () { d.vars.trigger = "auto", t(d.settings.autoDirection) }, d.settings.pause) }, d.vars.autodelay ? d.settings.autoHoverDelay : d.settings.autoDelay), d.settings.autoHover && d.vars.slideWrapper.unbind("mouseenter").unbind("mouseleave").bind("mouseenter", function () { void 0 !== d.vars.timer ? (d.vars.hoverStop = !0, e.stopAuto()) : d.vars.hoverStop = !1 }).bind("mouseleave", function () { d.vars.hoverStop && (d.vars.autodelay = !0, e.startAuto()) })) }, e.stopAuto = function () { window.clearInterval(d.vars.timer), d.vars.timer = void 0, window.clearTimeout(d.vars.delay), d.vars.delay = void 0 }, e.refresh = function () { d.vars.slides.removeClass(d.settings.activeClass), d.vars.active.addClass(d.settings.activeClass), d.settings.responsive ? f() : l(), u(), p(), i() }, s = function () { e.refresh() }, m = function () { d.vars.moving = !1, d.vars.active.removeClass(d.settings.transClass), d.vars.fresh || d.vars.old.removeClass("sy-ken"), d.vars.old.removeClass(d.settings.transClass), d.settings.onSlideAfter.call(void 0, d.vars.active, d.vars.old.index(), d.vars.active.index()), d.settings.auto && (d.vars.hoverStop && void 0 !== d.vars.hoverStop || e.startAuto()) }, r = function () { var b, c, f, g, h, i, j; d.settings.onSlideBefore.call(void 0, d.vars.active, d.vars.old.index(), d.vars.active.index()), d.settings.transition !== !1 ? (d.vars.moving = !0, "fade" === d.settings.transition || "kenburns" === d.settings.transition ? (d.vars.fresh ? (d.settings.useCSS ? d.vars.slides.css({ transitionDuration: d.settings.speed + "ms", opacity: 0 }) : d.vars.slides.css({ opacity: 0 }), d.vars.active.css("opacity", 1), "kenburns" === d.settings.transition && d.settings.useCSS && (h = d.settings.pause + 2 * d.settings.speed, d.vars.slides.css({ animationDuration: h + "ms" }), d.vars.active.addClass("sy-ken")), m()) : d.settings.useCSS ? (d.vars.old.addClass(d.settings.transClass).css("opacity", 0), d.vars.active.addClass(d.settings.transClass).css("opacity", 1), "kenburns" === d.settings.transition && d.vars.active.addClass("sy-ken"), a(window).off("focus").on("focus", function () { d.vars.moving && d.vars.old.trigger(d.vars.transition) }), d.vars.old.one(d.vars.transition, function () { return m(), this })) : ("kenburns" === d.settings.transition && A(), d.vars.old.addClass(d.settings.transClass).animate({ opacity: 0 }, d.settings.speed, d.settings.easing, function () { m() }), d.vars.active.addClass(d.settings.transClass).css("opacity", 0).animate({ opacity: 1 }, d.settings.speed, d.settings.easing)), s()) : ("horizontal" === d.settings.transition || "vertical" === d.settings.transition) && (i = "horizontal" === d.settings.transition ? "left" : "top", b = "-" + d.vars.active.index() * (100 + d.settings.slideMargin) + "%", d.vars.fresh ? (e.css(i, b), m()) : (j = {}, d.settings.continuous && (!d.vars.jump || "controls" !== d.vars.trigger && "auto" !== d.vars.trigger || (c = !0, g = b, d.vars.first ? (f = 0, d.vars.active.css(i, d.vars.count * (100 + d.settings.slideMargin) + "%"), b = "-" + d.vars.count * (100 + d.settings.slideMargin) + "%") : (f = (d.vars.count - 1) * (100 + d.settings.slideMargin) + "%", d.vars.active.css(i, -(100 + d.settings.slideMargin) + "%"), b = 100 + d.settings.slideMargin + "%"))), d.vars.active.addClass(d.settings.transClass), d.settings.useCSS ? (j[i] = b, j.transitionDuration = d.settings.speed + "ms", e.addClass(d.settings.transition), e.css(j), a(window).off("focus").on("focus", function () { d.vars.moving && e.trigger(d.vars.transition) }), e.one(d.vars.transition, function () { return e.removeClass(d.settings.transition), c && (d.vars.active.css(i, f), j[i] = g, j.transitionDuration = "0ms", e.css(j)), m(), this })) : (j[i] = b, e.stop().animate(j, d.settings.speed, d.settings.easing, function () { return c && (d.vars.active.css(i, f), e.css(i, g)), m(), this }))), s())) : (s(), m()) }, v = function (a) { d.vars.first = d.vars.last = !1, "prev" === a || 0 === a ? d.vars.first = !0 : ("next" === a || a === d.vars.count - 1) && (d.vars.last = !0) }, t = function (b) { var c, f; d.vars.moving || ("auto" !== d.vars.trigger && e.stopAuto(), c = d.vars.active.index(), "prev" === b ? (f = b, c > 0 ? b = c - 1 : d.settings.loop && (b = d.vars.count - 1)) : "next" === b ? (f = b, c < d.vars.count - 1 ? b = c + 1 : d.settings.loop && (b = 0)) : (b -= 1, f = c > b ? "prev" : "next"), d.vars.jump = !1, "prev" === b || "next" === b || b === c && !d.vars.fresh || (v(b), d.vars.old = d.vars.active, d.vars.active = a(d.vars.slides[b]), (0 === c && "prev" === f || c === d.vars.count - 1 && "next" === f) && (d.vars.jump = !0), r())) }, e.goToSlide = function (a) { d.vars.trigger = "external", t(a) }, e.goToNextSlide = function () { d.vars.trigger = "external", t("next") }, e.goToPrevSlide = function () { d.vars.trigger = "external", t("prev") }, j = function () { if (d.settings.pager && d.vars.count > 1) { var b, c, e; for (b = d.vars.slides.length, e = a('<ul class="' + d.settings.pagerClass + '" />'), c = 1; b + 1 > c; c += 1) e.append(a("<li />").append(a('<a href="#' + c + '">' + c + "</a>"))); d.vars.slippryWrapper.append(e), a("." + d.settings.pagerClass + " a", d.vars.slippryWrapper).click(function () { return d.vars.trigger = "pager", t(parseInt(this.hash.split("#")[1], 10)), !1 }), p() } }, k = function () { d.settings.controls && d.vars.count > 1 && (d.vars.slideWrapper.append(a('<ul class="' + d.settings.controlClass + '" />').append('<li class="' + d.settings.prevClass + '"><a href="#prev">' + d.settings.prevText + "</a></li>").append('<li class="' + d.settings.nextClass + '"><a href="#next">' + d.settings.nextText + "</a></li>")), a("." + d.settings.controlClass + " a", d.vars.slippryWrapper).click(function () { return d.vars.trigger = "controls", t(this.hash.split("#")[1]), !1 }), u()) }, o = function () { d.settings.captions !== !1 && ("overlay" === d.settings.captions ? d.vars.slideWrapper.append(a('<div class="sy-caption-wrap" />').html(z("<div />", d.settings.captionsEl))) : "below" === d.settings.captions && d.vars.slippryWrapper.append(a('<div class="sy-caption-wrap" />').html(z("<div />", d.settings.captionsEl)))) }, y = function () { t(d.vars.active.index() + 1) }, x = function (b) { var c, e, f, g; return g = "all" === d.settings.preload ? b : d.vars.active, f = a("img, iframe", g), c = f.length, 0 === c ? void y() : (e = 0, void f.each(function () { a(this).one("load error", function () { ++e === c && y() }).each(function () { this.complete && a(this).load() }) })) }, e.getCurrentSlide = function () { return d.vars.active }, e.getSlideCount = function () { return d.vars.count }, e.destroySlider = function () { d.vars.fresh === !1 && (e.stopAuto(), d.vars.moving = !1, d.vars.slides.each(function () { void 0 !== a(this).data("sy-cssBckup") ? a(this).attr("style", a(this).data("sy-cssBckup")) : a(this).removeAttr("style"), void 0 !== a(this).data("sy-classBckup") ? a(this).attr("class", a(this).data("sy-classBckup")) : a(this).removeAttr("class") }), void 0 !== e.data("sy-cssBckup") ? e.attr("style", e.data("sy-cssBckup")) : e.removeAttr("style"), void 0 !== e.data("sy-classBckup") ? e.attr("class", e.data("sy-classBckup")) : e.removeAttr("class"), d.vars.slippryWrapper.before(e), d.vars.slippryWrapper.remove(), d.vars.fresh = void 0) }, e.reloadSlider = function () { e.destroySlider(), h() }, h = function () { var f; return d.settings = a.extend({}, b, c), d.vars.slides = a(d.settings.elements, e), d.vars.count = d.vars.slides.length, d.settings.useCSS && (w("transition") || (d.settings.useCSS = !1), d.vars.transition = n()), e.data("sy-cssBckup", e.attr("style")), e.data("sy-classBackup", e.attr("class")), e.addClass(d.settings.boxClass).wrap(d.settings.slippryWrapper).wrap(d.settings.slideWrapper).wrap(d.settings.slideCrop), d.vars.slideWrapper = e.parent().parent(), d.vars.slippryWrapper = d.vars.slideWrapper.parent().addClass(d.settings.loadingClass), d.vars.fresh = !0, d.vars.slides.each(function () { a(this).addClass("sy-slide " + d.settings.transition), d.settings.useCSS && a(this).addClass("useCSS"), "horizontal" === d.settings.transition ? a(this).css("left", a(this).index() * (100 + d.settings.slideMargin) + "%") : "vertical" === d.settings.transition && a(this).css("top", a(this).index() * (100 + d.settings.slideMargin) + "%") }), d.vars.count > 1 || d.settings.initSingle ? (-1 === a("." + d.settings.activeClass, e).index() ? (f = "random" === d.settings.start ? Math.round(Math.random() * (d.vars.count - 1)) : d.settings.start > 0 && d.settings.start <= d.vars.count ? d.settings.start - 1 : 0, d.vars.active = a(d.vars.slides[f]).addClass(d.settings.activeClass)) : d.vars.active = a("." + d.settings.activeClass, e), k(), j(), o(), x(d.vars.slides), void 0) : this }, h(), this) } }(jQuery);



function smoothScroll(el) {
  jQuery('body,html').animate({
    scrollTop: $($(el).attr('href')).offset().top
  }, 600);
}


function isElementInViewport(el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
}

function destroySliderProperly(slider) {
    if (typeof slider != 'undefined') {
        if (slider) {
            //console.log('destroying slider properly');
            slider.unbind();
            slider.destroySlider();
            slider = null;
        }
    }
}

//Reset hits here
gameSliderHit = false;
gameSlider2Hit = false;
websiteSliderHit = false;
websiteSlider2Hit = false;
preziSliderHit1 = false;
preziSliderHit2 = false;
preziSliderHit3 = false;
preziSliderHit4 = false;
//codeSlider2Hit = false;
fnfSliderHit = false;



jQuery(document).ready(function () {

    // main slider
    homeSliderEl = jQuery('#home-slider').slippry({
        slippryWrapper: '<div class="sy-box home-slider" />',
        adaptiveHeight: false,
        useCSS: false,
        autoHover: false,
        pause: 40000,
        transition: 'fade'
    });



    $(window).scroll(function () {
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function () {


            if ($('#game-page').is(':visible')) {

                //-- games slider 1 trigger --//
                if ($('#game-page > div.image-caption.wow.flipInX.slide-para.animated > h3').length > 0) {
                    if (isElementInViewport($('#game-page > div.image-caption.wow.flipInX.slide-para.animated > h3')[0])) {

                        if (!gameSliderHit) {
                            ////////////////

                            gamessliderEl = jQuery('#games-slider').slippry({
                                
                                slippryWrapper: '<div class="sy-box games-slider" />', 
                                
                                adaptiveHeight: false,
                                useCSS: false, 
                                auto: false,
                                autoHover: false,
                                pause: 7000,
                                transition: 'horizontal',
                                speed: 800,
                                continuous: true,
                                autoDirection: 'prev',
                                loop: true,
                                pager: false,
                                easing: 'swing',
                                onSlideBefore: function (el, index_old, index_new) {
                                    if (index_old == index_new) {
                                        return;
                                    }

                                    $($('#games-slider .slider-detils')[index_new]).animate({
                                        opacity: 1
                                    }, 2000, "linear");
                                },

                                onSlideAfter: function (el, index_old, index_new) {
                                    //console.debug('onslideafter fired: old:' + index_old + " new: " + index_new);
                                    if (index_old == index_new) {
                                        //console.debug('index old and new are the same');
                                        return;
                                    }
                                    //console.debug('going to fade out slide that just slid in after 4 seconds');

                                    $($('#games-slider .slider-detils')[index_new]).delay(4200).animate({
                                        opacity: 0
                                    }, 800, "linear");
                                }

                            });



                            console.debug('gamessliderEl is not visible. setting up first time stuff');
                            gamessliderEl.startAuto();

                            $('#games-slider .slider-detils').css('opacity', '1');
                            console.debug('first time: going to fade out after 6.2s');

                            setTimeout(function () {
                                console.debug('first time fading out after delay');
                                $('#games-slider .slider-detils').animate({
                                    opacity: 0
                                }, 800, "linear")
                            }, 6200);
                            gameSliderHit = true;

                        }
                    }
                }

                //-- games slider 2 trigger --//
                if ($('#games-slider-2-trigger').length > 0) {
                    if (isElementInViewport($('#games-slider-2-trigger')[0])) {
                        if (!gameSlider2Hit) {

                            // Games slider 2
                            gamesSlider2El = jQuery('#games-slider2').slippry({
                                slippryWrapper: '<div class="sy-box games-slider2" />', 
                                adaptiveHeight: false, 
                                useCSS: false, 
                                autoHover: false,
                                pause: 7000,
                                transition: 'horizontal', 
                                speed: 800,
                                continuous: true,
                                autoDirection: 'next',
                                loop: true,
                                easing: 'swing',
                                onSliderLoad: function () {
                                    $('#games-slider2 .slider-detils').addClass('zoomInUp animated');
                                    $('#games-slider2 .slider-detils').css('opacity', '1');
                                    setTimeout(function myfunction() {
                                        $('#games-slider2 .slider-detils').removeClass('zoomInUp animated');
                                    }, 3000);
                                }

                            });
                            gameSlider2Hit = true;
                        }
                    }
                }


            }

            if ($('#website-page').is(':visible')) {

                
                //-- website slider 1 trigger --//
                if ($('#website-page > div.image-caption.wow.flipInX.slide-para.animated > h3').length > 0) {
                    if (isElementInViewport($('#website-page > div.image-caption.wow.flipInX.slide-para.animated > h3')[0])) {

                        if (!websiteSliderHit) {
                             websitesliderEl = jQuery('#website-slider').slippry({
                              slippryWrapper: '<div class="sy-box website-slider" />',
                              adaptiveHeight: false,
                              useCSS: false, 
                              auto: false,
                              autoHover: false,
                              pause: 7000,
                              transition: 'horizontal', 
                              speed: 800,
                              continuous: true,
                              autoDirection: 'prev',
                              loop: true,
                              pager: false,
                              easing: 'swing',
                              onSlideBefore: function (el, index_old, index_new) {
                                  if (index_old == index_new) {
                                      return;
                                  }
                                  $($('#website-slider .slider-detils')[index_new]).animate({
                                      opacity: 1
                                  }, 2000, "linear");
                              },

                              onSlideAfter: function (el, index_old, index_new) {
                                  if (index_old == index_new) {
                                      return;
                                  }
                                  $($('#website-slider .slider-detils')[index_new]).delay(4200).animate({
                                      opacity: 0
                                  }, 800, "linear");
                              }

                          });
                              websitesliderEl.startAuto();

                              $('#website-slider .slider-detils').css('opacity', '1');

                              setTimeout(function () {
                                  console.debug('first time fading out after delay');
                                  $('#website-slider .slider-detils').animate({
                                      opacity: 0
                                  }, 800, "linear")
                              }, 6200);

                            websiteSliderHit = true;

                            //console.log("Haven't sdf sdf sdf sdf sd fs df sd f sdf sd fsdf scrolled in 250ms!");
                        }

                    }
                }

              
                //-- website slider 2 trigger --//
                if ($('#website-page > div.image-caption.wow.flipInX.slide-para.animated > h3').length > 0) {
                    if (isElementInViewport($('#website-page > div.image-caption.wow.flipInX.slide-para.animated > h3')[1])) {

                        if (!websiteSlider2Hit) {
                            websiteslider2El = jQuery('#website-slider2').slippry({
                                slippryWrapper: '<div class="sy-box website-slider2" />',
                                adaptiveHeight: false,
                                useCSS: false,
                                auto: false,
                                autoHover: false,
                                pause: 7000,
                                transition: 'horizontal',
                                speed: 800,
                                continuous: true,
                                autoDirection: 'prev',
                                loop: true,
                                pager: false,
                                easing: 'swing',
                                onSlideBefore: function (el, index_old, index_new) {
                                    if (index_old == index_new) {
                                        return;
                                    }
                                    $($('#website-slider2 .slider-detils')[index_new]).animate({
                                        opacity: 1
                                    }, 2000, "linear");
                                },

                                onSlideAfter: function (el, index_old, index_new) {
                                    if (index_old == index_new) {
                                        return;
                                    }
                                    $($('#website-slider2 .slider-detils')[index_new]).delay(4200).animate({
                                        opacity: 0
                                    }, 800, "linear");
                                }

                            });
                            websiteslider2El.startAuto();

                            $('#website-slider2 .slider-detils').css('opacity', '1');

                            setTimeout(function () {
                                console.debug('first time fading out after delay');
                                $('#website-slider2 .slider-detils').animate({
                                    opacity: 0
                                }, 800, "linear")
                            }, 6200);

                            websiteSlider2Hit = true;

                            //console.log("Haven't sdf sdf sdf sdf sd fs df sd f sdf sd fsdf scrolled in 250ms!");
                        }

                    }
                }


            }

            if ($('#prezi-page').is(':visible')) {
                //-- prezi slider 1 trigger --//
                if ($('#prezi-page > div:nth-child(5) > h3').length > 0) {
                    if (isElementInViewport($('#prezi-page > div:nth-child(5) > h3')[0])) {

                        if (!preziSliderHit1) {
                            ////////////////

                            prezisliderEl = jQuery('#prezi-slider').slippry({
                                
                                slippryWrapper: '<div class="sy-box prezi-slider" />', 
                                
                                adaptiveHeight: false,
                                useCSS: false, 
                                auto: false,
                                autoHover: false,
                                pause: 7000,
                                transition: 'horizontal',
                                speed: 800,
                                continuous: true,
                                autoDirection: 'prev',
                                loop: true,
                                pager: false,
                                easing: 'swing',
                                onSlideBefore: function (el, index_old, index_new) {
                                    console.debug('onslidebefore fired: old:' + index_old + " new: " + index_new);
                                    if (index_old == index_new) {
                                        //console.debug('index old and new are the same');
                                        return;
                                    }
                                    //console.debug('going to start fading in new slide');

                                    $($('#prezi-slider .slider-detils')[index_new]).animate({
                                        opacity: 1
                                    }, 2000, "linear");
                                },

                                onSlideAfter: function (el, index_old, index_new) {
                                    console.debug('onslideafter fired: old:' + index_old + " new: " + index_new);
                                    if (index_old == index_new) {
                                        //console.debug('index old and new are the same');
                                        return;
                                    }
                                    //console.debug('going to fade out slide that just slid in after 4 seconds');

                                    $($('#prezi-slider .slider-detils')[index_new]).delay(4200).animate({
                                        opacity: 0
                                    }, 800, "linear");
                                }

                            });


                            //if (!($(prezisliderEl).is(':visible'))) {
                            //console.debug('prezi slider is not visible. setting up first time stuff');
                            prezisliderEl.startAuto();

                            $('#prezi-slider .slider-detils').css('opacity', '1');
                            //console.debug('first time: going to fade out after 6.2s');

                            setTimeout(function () {
                                //console.debug('first time fading out after delay');
                                $('#prezi-slider .slider-detils').animate({
                                    opacity: 0
                                }, 800, "linear")
                            }, 6200);
                            //}


                            //console.log('prezi slider 1 hit');
                            preziSliderHit1 = true;

                        }

                    }
                }

                //-- prezi slider 2 trigger --//
                if ($('#prezi-page > div:nth-child(8) > h3').length > 0) {
                    if (isElementInViewport($('#prezi-page > div:nth-child(8) > h3')[0])) {

                        if (!preziSliderHit2) {
                            ////////////////
                            prezislider2El = jQuery('#prezi-slider2').slippry({
                                
                                slippryWrapper: '<div class="sy-box prezi-slider2" />', 
                                
                                adaptiveHeight: false,
                                useCSS: false, 
                                auto: false,
                                autoHover: false,
                                pause: 7000,
                                transition: 'horizontal',
                                speed: 800,
                                continuous: true,
                                autoDirection: 'prev',
                                loop: true,
                                pager: false,
                                easing: 'swing',
                                onSlideBefore: function (el, index_old, index_new) {
                                    //console.debug('onslidebefore fired: old:' + index_old + " new: " + index_new);
                                    if (index_old == index_new) {
                                        //console.debug('index old and new are the same');
                                        return;
                                    }
                                    //console.debug('going to start fading in new slide');

                                    $($('#prezi-slider2 .slider-detils')[index_new]).animate({
                                        opacity: 1
                                    }, 2000, "linear");
                                },

                                onSlideAfter: function (el, index_old, index_new) {
                                    //console.debug('onslideafter fired: old:' + index_old + " new: " + index_new);
                                    if (index_old == index_new) {
                                        //console.debug('index old and new are the same');
                                        return;
                                    }
                                    //console.debug('going to fade out slide that just slid in after 4 seconds');

                                    $($('#prezi-slider2 .slider-detils')[index_new]).delay(4200).animate({
                                        opacity: 0
                                    }, 800, "linear");
                                }

                            });



                            //if (!($(prezislider2El).is(':visible'))) {
                            //console.debug('bdelement is not visible. setting up first time stuff');
                            prezislider2El.startAuto();

                            $('#prezi-slider2 .slider-detils').css('opacity', '1');
                            //console.debug('first time: going to fade out after 6.2s');

                            setTimeout(function () {
                                console.debug('first time fading out after delay');
                                $('#prezi-slider2 .slider-detils').animate({
                                    opacity: 0
                                }, 800, "linear")
                            }, 6200);
                            //}


                            //console.log('prezi slider 2 hit');
                            preziSliderHit2 = true;






                            //console.log("Haven't sdf sdf sdf sdf sd fs df sd f sdf sd fsdf scrolled in 250ms!");
                        }




                    }
                }

                //-- prezi slider 3 trigger --//
                if ($('#prezi-page > div:nth-child(11) > h3').length > 0) {
                    if (isElementInViewport($('#prezi-page > div:nth-child(11) > h3')[0])) {

                        if (!preziSliderHit3) {
                            ////////////////
                            prezislider3El = jQuery('#prezi-slider3').slippry({
                                
                                slippryWrapper: '<div class="sy-box prezi-slider3" />', 
                                
                                adaptiveHeight: false,
                                useCSS: false, 
                                auto: false,
                                autoHover: false,
                                pause: 7000,
                                transition: 'horizontal',
                                speed: 800,
                                continuous: true,
                                autoDirection: 'prev',
                                loop: true,
                                pager: false,
                                easing: 'swing',
                                onSlideBefore: function (el, index_old, index_new) {
                                    //console.debug('onslidebefore fired: old:' + index_old + " new: " + index_new);
                                    if (index_old == index_new) {
                                        //console.debug('index old and new are the same');
                                        return;
                                    }
                                    //console.debug('going to start fading in new slide');

                                    $($('#prezi-slider3 .slider-detils')[index_new]).animate({
                                        opacity: 1
                                    }, 2000, "linear");
                                },

                                onSlideAfter: function (el, index_old, index_new) {
                                    //console.debug('onslideafter fired: old:' + index_old + " new: " + index_new);
                                    if (index_old == index_new) {
                                        //console.debug('index old and new are the same');
                                        return;
                                    }
                                    //console.debug('going to fade out slide that just slid in after 4 seconds');

                                    $($('#prezi-slider3 .slider-detils')[index_new]).delay(4200).animate({
                                        opacity: 0
                                    }, 800, "linear");
                                }

                            });



                            //if (!($(prezislider3El).is(':visible'))) {
                            //console.debug('bdelement is not visible. setting up first time stuff');
                            prezislider3El.startAuto();

                            $('#prezi-slider3 .slider-detils').css('opacity', '1');
                            //console.debug('first time: going to fade out after 6.2s');

                            setTimeout(function () {
                                console.debug('first time fading out after delay prezi slider 3');
                                $('#prezi-slider3 .slider-detils').animate({
                                    opacity: 0
                                }, 800, "linear")
                            }, 6200);
                            //}


                            //console.log('prezi slider 3 hit');
                            preziSliderHit3 = true;







                            //console.log("Haven't sdf sdf sdf sdf sd fs df sd f sdf sd fsdf scrolled in 250ms!");
                        }




                    }
                }

                //-- prezi slider 4 trigger --//
                if ($('#prezi-page > div:nth-child(14) > h3').length > 0) {
                    if (isElementInViewport($('#prezi-page > div:nth-child(14) > h3')[0])) {

                        if (!preziSliderHit4) {
                            ////////////////




                            prezislider4El = jQuery('#prezi-slider4').slippry({
                                
                                slippryWrapper: '<div class="sy-box prezi-slider4" />', 
                                
                                adaptiveHeight: false,
                                useCSS: false, 
                                auto: false,
                                autoHover: false,
                                pause: 7000,
                                transition: 'horizontal',
                                speed: 800,
                                continuous: true,
                                autoDirection: 'prev',
                                loop: true,
                                pager: false,
                                easing: 'swing',
                                onSlideBefore: function (el, index_old, index_new) {
                                    //console.debug('onslidebefore fired: old:' + index_old + " new: " + index_new);
                                    if (index_old == index_new) {
                                        //console.debug('index old and new are the same');
                                        return;
                                    }
                                    //console.debug('going to start fading in new slide');

                                    $($('#prezi-slider4 .slider-detils')[index_new]).animate({
                                        opacity: 1
                                    }, 2000, "linear");
                                },

                                onSlideAfter: function (el, index_old, index_new) {
                                    //console.debug('onslideafter fired: old:' + index_old + " new: " + index_new);
                                    if (index_old == index_new) {
                                        //console.debug('index old and new are the same');
                                        return;
                                    }
                                    //console.debug('going to fade out slide that just slid in after 4 seconds');

                                    $($('#prezi-slider4 .slider-detils')[index_new]).delay(4200).animate({
                                        opacity: 0
                                    }, 800, "linear");
                                }

                            });



                            //if (!($(prezislider4El).is(':visible'))) {
                            //console.debug('bdelement is not visible. setting up first time stuff');
                            prezislider4El.startAuto();

                            $('#prezi-slider3 .slider-detils').css('opacity', '1');
                            //console.debug('first time: going to fade out after 6.2s');

                            setTimeout(function () {
                                console.debug('first time fading out after delay');
                                $('#prezi-slider4 .slider-detils').animate({
                                    opacity: 0
                                }, 800, "linear")
                            }, 6200);
                            //}


                            



                            //console.log('prezi slider 4 hit');
                            preziSliderHit4 = true;






                        }




                    }
                }

            }

            
                    
        
        }, 250));
    });



    //----------------------------------------- games-page ---------------------------------------------
    $('[data-open-page="game-page"]').click(function () {
        //console.log("setting gamesliderHit to false");

        gameSliderHit = false;

        if (typeof gamessliderEl != 'undefined') {
            if (gamessliderEl) {
                gamessliderEl.unbind();
                gamessliderEl.destroySlider();
                gamessliderEl = null;
            }
        }

        gameSlider2Hit = false;

        if (typeof gamesSlider2El != 'undefined') {
            if (gamesSlider2El) {
                $('#games-slider2 .slider-detils').css('opacity', '0');
                gamesSlider2El.unbind();
                gamesSlider2El.destroySlider();
                gamesSlider2El = null;
            }
        }
    });
    //----------------------------------------- games-page end ---------------------------------------------

    //----------------------------------------- prezi-page ---------------------------------------------
    $('[data-open-page="prezi-page"]').click(function () {
        //console.log("setting preziSliderHit1 to false");

        preziSliderHit1 = false;
        preziSliderHit2 = false;
        preziSliderHit3 = false;
        preziSliderHit4 = false;

        if (typeof prezisliderEl != 'undefined') {
            destroySliderProperly(prezisliderEl);
        }
        if (typeof prezislider2El != 'undefined') {
            destroySliderProperly(prezislider2El);
        }
        if (typeof prezislider3El != 'undefined') {
            destroySliderProperly(prezislider3El);
        }
        if (typeof prezislider4El != 'undefined') {
            destroySliderProperly(prezislider4El);
        }
    });
    //----------------------------------------- prezi-page end ---------------------------------------------

    //----------------------------------------- website-page ---------------------------------------------
    $('[data-open-page="website-page"]').click(function () {
        //console.log("setting gamesliderHit to false");

        websiteSliderHit = false;

        if (typeof websitesliderEl != 'undefined') {
            destroySliderProperly(websitesliderEl);
        }


        websiteSlider2Hit = false;

        if (typeof websiteslider2El != 'undefined') {
            destroySliderProperly(websiteslider2El);
        }
       
    });
    //----------------------------------------- website-page end ---------------------------------------------

    //----------------------------------------- code-page ---------------------------------------------
    //$('[data-open-page="code-page"]').click(function () {
    //    console.log("setting codeslider hit to false");

    //    codeSlider2Hit = false;

    //    if (typeof codeslider3El != 'undefined') {
    //        destroySliderProperly(codeslider3El);
    //    }
        
      
    //});
    //----------------------------------------- code-page end ---------------------------------------------


















    // Fix for the home pager buttons moving around when screen is resized.
    function myLoop2() {
        setTimeout(function () {
            //console.log('In function.......');

            if (typeof homeSliderEl != 'undefined') {
                //console.log('refreshing home slider');
                homeSliderEl.refresh();
            }
                myLoop2();
        }, 1000);
    }
    myLoop2();







  jQuery('#banner-slider').slippry({
      
      slippryWrapper: '<div class="sy-box banner-slider" />', 
      
      adaptiveHeight: false, // height of the sliders adapts to current slide
      useCSS: false, 
      autoHover: false,
      pause: 7000,
      transition: 'horizontal',
      speed: 2000,
      continuous: true,
      autoDirection: 'next',
      loop: true,
      pager: false,
      onSlideBefore: function (el, index_old, index_new) {

          //console.debug(index_new);
      	  $($('.banner-slider .slider-detils')[index_old]).animate({
              opacity: 0
          }, 700, function () {
          	$($('.banner-slider .slider-detils')[index_old]).delay(4000).animate({
          		opacity: 1
          	}, 1000);

          });

      	  $('.headline-logo').css('top', '-150px');
      	  $('.headline-logo').css('opacity', '0');
      	  $('.headline-logo').css("background-image", 'url(web/images/' + el.find('.slider-detils').attr('data-left-image') + ')');

      	  $('.headline-logo').delay(1500).animate({
      	      "opacity": "1",
      	      "top": "0px"
      	  }, 1000, "easeOutBounce", function () {
      	      $('.headline-logo').animate({ 
      	           
      	      }, 400, "easeOutBounce");
      	  });
      }
  });

  //codeHeadingSliderEl = jQuery('#code-slider').slippry({
  //    //auto: false,
      
  //    slippryWrapper: '<div class="sy-box code-slider" />', 
      
  //    adaptiveHeight: false, // height of the sliders adapts to current slide
  //    useCSS: false, 
  //    autoHover: false,
  //    pause: 0,
  //    transition: 'horizontal',
  //    speed: 10000,
  //    continuous: true,
  //    autoDirection: 'next',
  //    loop: true,
  //    pager: false,
  //    easing: 'linear' // easing to use in the animation [(see... [jquery www])]

  //});


//  var bdSliderTimer = null;
  
////----------------------------------------- Bd-page ---------------------------------------------
//  $('[data-open-page="bd-page"]').click(function () {

//      console.log('bd er slider.js er jaygay');
//      if (typeof bdsliderEl != 'undefined') {
//          destroySliderProperly(bdsliderEl);
//      }

//      bdsliderEl = jQuery('#bd-slider').slippry({
          
//          slippryWrapper: '<div class="sy-box bd-slider" />', 
          
//          adaptiveHeight: false,
//          useCSS: false, 
//          auto: false,
//          autoHover: false,
//          pause: 7000,
//          transition: 'horizontal',
//          speed: 800,
//          continuous: true,
//          autoDirection: 'prev',
//          loop: true,
//          pager: false,
//          easing: 'swing',
//          onSlideBefore: function (el, index_old, index_new) {
//              //console.debug('onslidebefore fired: old:' + index_old + " new: " + index_new);
//              if (index_old == index_new) {
//                  //console.debug('index old and new are the same');
//                  return;
//              }
//              //console.debug('going to start fading in new slide');

//              $($('#bd-slider .slider-detils')[index_new]).animate({
//                  opacity: 1
//              }, 2000, "linear");
//          },

//          onSlideAfter: function (el, index_old, index_new) {
//              //console.debug('onslideafter fired: old:' + index_old + " new: " + index_new);
//              if (index_old == index_new) {
//                  //console.debug('index old and new are the same');
//                  return;
//              }
//              //console.debug('going to fade out slide that just slid in after 4 seconds');

//              $($('#bd-slider .slider-detils')[index_new]).delay(4200).animate({
//                  opacity: 0
//              }, 800, "linear");
//          },
//          onSliderLoad: function () {
//              if (bdSliderTimer) {
//                  clearInterval(bdSliderTimer);
//              }
//              bdsliderEl.startAuto();

//              $('#bd-slider .slider-detils').css('opacity', '1');
//              //console.debug('first time: going to fade out after 6.2s');

//              bdSliderTimer = setTimeout(function () {
//                  console.debug('first time fading out after delay');
//                  $('#bd-slider .slider-detils').animate({
//                      opacity: 0
//                  }, 800, "linear")
//              }, 6200);
//          }

//      });



//      //if (!($(bdsliderEl).is(':visible'))) {
//      //    //console.debug('bdelement is not visible. setting up first time stuff');
          
//      //} 
//  });
//    //----------------------------------------- Bd-page end ---------------------------------------------

//    //----------------------------------------- MIT-page ---------------------------------------------

//  var mitTimer = null;

//  $('[data-open-page="mit-page"]').click(function () {

//      console.log('MIT er slider.js er jaygay');

//      if (typeof mitsliderEl != 'undefined') {
//          destroySliderProperly(mitsliderEl);
//      }


//      mitsliderEl = jQuery('#mit-slider').slippry({
          
//          slippryWrapper: '<div class="sy-box mit-slider" />', 
          
//          adaptiveHeight: false,
//          useCSS: false, 
//          auto: false,
//          autoHover: false,
//          pause: 7000,
//          transition: 'horizontal',
//          speed: 800,
//          continuous: true,
//          autoDirection: 'prev',
//          loop: true,
//          pager: false,
//          easing: 'swing',
//          onSlideBefore: function (el, index_old, index_new) {
//              //console.debug('onslidebefore fired: old:' + index_old + " new: " + index_new);
//              if (index_old == index_new) {
//                  //console.debug('index old and new are the same');
//                  return;
//              }
//              //console.debug('going to start fading in new slide');

//              $($('#mit-slider .slider-detils')[index_new]).animate({
//                  opacity: 1
//              }, 2000, "linear");
//          },

//          onSlideAfter: function (el, index_old, index_new) {
//              //console.debug('onslideafter fired: old:' + index_old + " new: " + index_new);
//              if (index_old == index_new) {
//                  //console.debug('index old and new are the same');
//                  return;
//              }
//              //console.debug('going to fade out slide that just slid in after 4 seconds');

//              $($('#mit-slider .slider-detils')[index_new]).delay(4200).animate({
//                  opacity: 0
//              }, 800, "linear");
//          },

//          onSliderLoad: function () {
//              if (mitTimer) {
//                  clearInterval(mitTimer);
//              }
//              //console.debug('bdelement is not visible. setting up first time stuff');
//              mitsliderEl.startAuto();

//              $('#mit-slider .slider-detils').css('opacity', '1');
//              //console.debug('first time: going to fade out after 6.2s');

//              mitTimer = setTimeout(function () {
//                  console.debug('first time fading out after delay');
//                  $('#mit-slider .slider-detils').animate({
//                      opacity: 0
//                  }, 800, "linear")
//              }, 6200);
//          }

//      });

//  });
//    //----------------------------------------- MIT-page end ---------------------------------------------

//    //----------------------------------------- fnf-page ---------------------------------------------
//  var fnfTimer = null;

//  $('[data-open-page="fnf-page"]').click(function () {
//     console.log('fnf er slider.js er jaygay');

//     if (typeof fnfsliderEl != 'undefined') {
//         destroySliderProperly(fnfsliderEl);
//     }

//     fnfsliderEl = jQuery('#fnf-slider').slippry({
         
//         slippryWrapper: '<div class="sy-box fnf-slider" />',
         
//         adaptiveHeight: false,
//         useCSS: false,
//         auto: false,
//         autoHover: false,
//         pause: 7000,
//         transition: 'horizontal',
//         speed: 800,
//         continuous: true,
//         autoDirection: 'prev',
//         loop: true,
//         pager: false,
//         easing: 'swing',
//         onSlideBefore: function (el, index_old, index_new) {
//             if (index_old == index_new) {
//                 return;
//             }
//             $($('#fnf-slider .slider-detils')[index_new]).animate({
//                 opacity: 1
//             }, 2000, "linear", function () {
//                 $(this).delay(4200).animate({
//                     opacity: 0
//                 }, 800, "linear");
//             });

//             $($('#fnf-slider .slider-detils')[index_old]).delay(2000).animate({
//                 opacity: 0
//             }, 1000, "linear");

//             var classToChangeTo = $(el).find('.slider-detils').attr('data-class-change');

//             if (classToChangeTo) {

//                 $('#fnf-page .image-caption').css('animation-name', 'fadeOutRightBig');
//                 $('#fnf-page .image-slideshow').css('animation-name', 'fadeOutLeftBig');

//                 $('.image-caption.safsmi,.image-caption.family,.image-caption.friends').removeClass('safsmi friends family');
//                 $('#fnf-page .image-caption').addClass(classToChangeTo);
//                 setTimeout(function () {
//                     $('#fnf-page .image-caption').css('animation-name', 'fadeInRightBig');
//                     $('#fnf-page .image-slideshow').css('animation-name', 'fadeInLeftBig');
//                 }, 800);
//             }
//         },

//         onSliderLoad: function () {

//             console.log('fnf Loaded. autostart enabling and setting delay to run fadeout');

//             if (fnfTimer) {
//                 clearInterval(fnfTimer);
//             }
//             fnfsliderEl.startAuto();
//             $('#fnf-page .image-caption').removeClass('safsmi friends family');
//             $('#fnf-page .image-caption').addClass('family');
//             $($('#fnf-slider .slider-detils')).css('opacity', '1');

//             fnfTimer = setTimeout(function () {
//                 $($('#fnf-slider .slider-detils')).animate({
//                     opacity: 0
//                 }, 800, "linear");
//             }, 6200);

             
//         }
//     });
//  });



   


  function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  

  jQuery('#select-setting').click( function() {
    if(jQuery('#settings-jump').hasClass('open')) {
      jQuery('#settings-jump').switchClass('open','closed',1000);
    } else if(jQuery('#settings-jump').hasClass('closed')) {
      jQuery('#settings-jump').switchClass('closed','open',1000);
    } 
    return false;
  });
  jQuery('#settings-jump a').click( function () {
    if(jQuery('#settings-jump').hasClass('open')) {
      jQuery('#settings-jump').switchClass('open','closed',1000);
    }
  });
});

var slideshowTimers = new Array();

$(function () {
    $(window).bind("scroll", function (event) {
        $(".my-slideshow:in-viewport").each(function () {

            if (!$(this).hasClass("playing"))
            {
                $(this).find('ul li').removeClass("current-slide animated");
                $($(this).find('ul li')[0]).addClass("current-slide");

                $(this).find('ul').each(function () {
                    (function ($set) {
                        slideshowTimers.push(setInterval(function () {
                            var $cur = $set.find('.current-slide').removeClass('current-slide animated');
                            var $next = $cur.next().length ? $cur.next() : $set.children().eq(0);
                            $next.addClass("current-slide animated " + $next.data("entry-animation"));
                        }, Math.random() * (7000 - 6000) + 6000));
                    })($(this));
                });
                //endregion

                $(this).addClass("playing");
            }
        });




        $(".my-slideshow2:in-viewport").each(function () {

            if (!$(this).hasClass("playing")) {
                //console.log("in slideshow");
                $($(this).find('ul')[0]).addClass("current-slideshow");
                $(this).find('ul.current-slideshow').each(function () {
                    runSlideshowForCurrentUl($(this));
                });
                //endregion

                $(this).addClass("playing");
            }
        });
    });
});


function runSlideshowForCurrentUl($this) {
    
        $this.find('li').removeClass("current-slide animated fadeIn slideInLeft");
        $($this.find('li')[0]).addClass("current-slide animated slideInLeft");

    //setting caption text and animation
        var caption = $this.parent().parent().next().children().eq(0);
        caption.removeClass("family safsmi friends");
        caption.addClass($this.data("caption-class") + " animated slideInRight");

        setTimeout(function myfunction() {
            caption.removeClass("animated slideInRight");
        }, 2000);

        (function ($set) {
            var timer = setInterval(function () {
                var $cur = $set.find('.current-slide').removeClass('current-slide animated fadeIn');
                var $next;
                if ($cur.next().length) {
                    $next = $cur.next().length ? $cur.next() : $set.children().eq(0);
                }
                else {
                    clearInterval(timer);
                    $set.removeClass("current-slideshow");
                    if ($set.next().length > 0) {
                        $set.next().addClass("current-slideshow");
                        runSlideshowForCurrentUl($set.next());
                        return;
                    }
                    else {
                        $set.siblings().eq(0).addClass("current-slideshow");
                        runSlideshowForCurrentUl($set.siblings().eq(0));
                        return;
                    }
                }
                if ($next) {
                    $next.addClass('current-slide animated fadeIn');
                }
            }, 15000);

            slideshowTimers.push(timer);
        })($this);

}