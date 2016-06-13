$(document).ready(function () {


    $(".popupPortfolio").hide();

    $("article").click(function () {
        var html = $('html');
        $(".popupPortfolio").show();
        $(".popupPortfolio").css("top", Math.max(0, (($(window).height() - $($(".popupPortfolio")).outerHeight()) / 2) +
            $(window).scrollTop()) + "px");
        $(".popupPortfolio").css("left", Math.max(0, (($(window).width() - $($(".popupPortfolio")).outerWidth()) / 2) +
            $(window).scrollLeft()) + "px");
        disableScroll();
    });

    $(".closePortfolio").click(function () {
        $(".popupPortfolio").hide();
        enableScroll();
    });

    $(".hero-down").click(function () {
        $('html,body').animate({
            scrollTop: $('#hero-end').offset().top
        }, 'slow');
    });


    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    var keys = {
        37: 1
        , 38: 1
        , 39: 1
        , 40: 1
    };

    function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    function disableScroll() {
        if (window.addEventListener) // older FF
            window.addEventListener('DOMMouseScroll', preventDefault, false);
        window.onwheel = preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        window.ontouchmove = preventDefault; // mobile
        document.onkeydown = preventDefaultForScrollKeys;
    }

    function enableScroll() {
        if (window.removeEventListener)
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
    }


    /* ~~~~~~~~~~~ HEADER ~~~~~~~~~~~~ */

    // elements
    var $page = $('.single');
    var lastPos = undefined;
    var menuOpen = false;

    $('.menu_toggle').on('click', function () {
        $page.toggleClass('shazam');
        var t = $(window).scrollTop();
        menuOpen = !menuOpen;
        lastPos = $(window).scrollTop();

        console.log("Last pos is: " + menuOpen);


        //When animation is over
        $(".content").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd'
            , function () {
/*
                    $('html,body').animate({

              scrollTop: $('#hero-end').offset() + 200
        }, 'slow');
*/


            });

    });

    $('.content').on('click', function () {
        $page.removeClass('shazam');


    });




    /* ----------- MISC -------------- */

    /* URL bar resize fix for mobile */
    var screenHeight = $(window).height();
    $('.single').css('height', screenHeight + 'px');

});