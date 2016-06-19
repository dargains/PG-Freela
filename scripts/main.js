$(document).ready(function () {


    /* ~~~~~~~~~~~ PORTFOLIO ~~~~~~~~~~~~ */
    $(".popupPortfolio").hide();

    $(".itemPortfolio").click(function () {
        var index = $(".itemPortfolio").index(this) + 1
            , itemPop = $(".popupPortfolio" + index);
        $(".popupPortfolio").show();
        itemPop.show();
        $(".popupPortfolio").css("top", Math.max(0, (($(window).height() - $($(".popupPortfolio")).outerHeight()) / 2) +
            $(window).scrollTop()) + "px");
        $(".popupPortfolio").css("left", Math.max(0, (($(window).width() - $($(".popupPortfolio")).outerWidth()) / 2) +
            $(window).scrollLeft()) + "px");
        disableScroll();
    });

    $(".closePortfolio").click(function () {
        $(this).parent().parent().hide();
        $(".popupPortfolio").hide();
        enableScroll();
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


    /* ~~~~~~~~~~~ MENU ~~~~~~~~~~~~ */

    // variables
    var $page = $('.single');
    var lastPos = undefined;
    var menuOpen = false;

    $('.menu_toggle').on('click', function () {
        $page.toggleClass('shazam');

        if ($($page).hasClass('shazam')) {
            disableScroll();
        } else if (!$($page).hasClass('shazam')) {
            enableScroll();
        }

    });

    $('.content').on('click', function () {
        $page.removeClass('shazam');
    });




    var goTo = function (clicked, dest) {
        $(clicked).on('click', function (e) {
            var stopScrollOn = "scroll wheel DOMMouseScroll mousewheel touchmove";

            $page.removeClass('shazam');


            enableScroll();
            //prevent the default action, which is to visit the href attribute and go to the top
            e.preventDefault();

            $('html, body').on(stopScrollOn, function () {

                $('html, body').stop();
            });

            $('html, body').stop(true, false).animate({
                scrollTop: $(dest).offset().top
            }, 1500, function () {
                $('html, body').off(stopScrollOn);
                $('html, body').stop();
            });

        });
    }

    /* ----------- NAVIGATION -------------- */

    goTo("#menu-about", "#about-start");
    goTo("#menu-portfolio", "#portfolio-start");
    goTo("#menu-contact", "#contact-start");
    goTo("#menu-expertise", "#expertise-start");
    goTo('.hero-down', "#about-start");
    goTo('.drop-from-hero', "#about-start");
    goTo(".drop-to-contact", "#contact-start");

    /* ----------- FOOTER -------------- */
    $('.click-heart').on('click', function () {
        $(this).addClass("animated-heart").delay(300).queue(function (next) {
            $(this).removeClass("animated-heart");
            next();
        });

        $('.footer p:first-child').addClass("wobble").delay(1000).queue(function (next) {
            $(this).removeClass("wobble");
            next();
        });

        $('.footer p:last-child').addClass("shake").delay(1000).queue(function (next) {
            $(this).removeClass("shake");
            next();
        });
    });

    /* ----------- EXPERTISE LIST ~ SHOW AND HIDE CONTENT -------------- */
    size_li = $("#expertise .row").size();
    start = 1;
    add = 1;
    click = 1;
    phrase = ['Calma, temos mais bons motivos!', 'Sim, ainda mais!', 'yay!', 'Ótimos motivos, uh?', 'é... chegamos ao fim'];


    $('#expertise .row:lt(' + start + ')').show();
    $('#loadMore').click(function (e) {
        click++;
        e.preventDefault();
        start = (start + add <= size_li) ? start + add : size_li;
        $('#expertise .row:lt(' + start + ')').slideDown(1500, function () {
            $('#loadMore').text(phrase[click - 2]);
        });

    });

    /* ----------- MISC -------------- */

    /* URL bar resize fix for mobile */
    var screenHeight = $(window).height();
    $('.single').css('height', screenHeight + 'px');


});