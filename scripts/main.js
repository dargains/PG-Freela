$(document).ready(function () {


    /* ~~~~~~~~~~~ PORTFOLIO ~~~~~~~~~~~~ */
    $(".portfolio .wrapper article aside").on('click', function() {
        window.location.href = 'project1.html';
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
        enableScroll();
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



    /* ----------- MISC -------------- */

    /* URL bar resize fix for mobile */
    var screenHeight = $(window).height();
    $('.single').css('height', screenHeight + 'px');

    /* ----------- TRANSLATIONS -------------- */

    // preparing language file
    var aLangKeys = new Array();

    aLangKeys['en'] = new Array();
    aLangKeys['pt'] = new Array();



    aLangKeys['en']['menu-about'] = 'About us';
    aLangKeys['en']['menu-portfolio'] = 'Portfolio';
    aLangKeys['en']['menu-expertise'] = '';
    aLangKeys['en']['menu-contact'] = '';
    aLangKeys['en']['hero-h2'] = '';
    aLangKeys['en']['about-h1'] = '';
    aLangKeys['en']['about-h2'] = '';
    aLangKeys['en']['pros-h1-1'] = '';
    aLangKeys['en']['pros-h2-1'] = '';
    aLangKeys['en']['pros-h1-2'] = '';
    aLangKeys['en']['pros-h2-2'] = '';
    aLangKeys['en']['pros-h1-3'] = '';
    aLangKeys['en']['pros-h2-3'] = '';
    aLangKeys['en']['pros-h1-4'] = '';
    aLangKeys['en']['pros-h2-4'] = '';
    aLangKeys['en']['quote-h1'] = '';
    aLangKeys['en']['quote-action'] = '';
    aLangKeys['en']['portfolio-h1'] = '';
    aLangKeys['en']['portfolio-h2'] = '';
    aLangKeys['en']['port-work-1-h1'] = '';
    aLangKeys['en']['port-work-1-h2'] = '';
    aLangKeys['en']['port-work-1-desc'] = '';
    aLangKeys['en']['port-work-1-p'] = '';
    aLangKeys['en']['expertise-h1'] = '';
    aLangKeys['en']['expertise-h2'] = '';
    aLangKeys['en']['expertise-reason-h1-1'] = '';
    aLangKeys['en']['expertise-reason-h2-1'] = '';
    aLangKeys['en']['expertise-reason-h1-2'] = '';
    aLangKeys['en']['expertise-reason-h2-2'] = '';
    aLangKeys['en']['expertise-reason-h1-3'] = '';
    aLangKeys['en']['expertise-reason-h2-3'] = '';
    aLangKeys['en']['expertise-reason-h1-4'] = '';
    aLangKeys['en']['expertise-reason-h2-4'] = '';
    aLangKeys['en']['expertise-reason-h1-5'] = '';
    aLangKeys['en']['expertise-reason-h2-5'] = '';
    aLangKeys['en']['expertise-reason-h1-6'] = '';
    aLangKeys['en']['expertise-reason-h2-6'] = '';
    aLangKeys['en']['quote-btn-more'] = '';
    aLangKeys['en']['contact-h1'] = '';
    aLangKeys['en']['contact-h2'] = '';
    aLangKeys['en']['reach-us-h1-first'] = '';
    aLangKeys['en']['reach-us-h2-first'] = '';
    aLangKeys['en']['reach-us-h1-second'] = '';
    aLangKeys['en']['reach-us-h2-second'] = '';
    aLangKeys['en']['footer-p-1'] = '';
    aLangKeys['en']['footer-p-2'] = '';



    aLangKeys['pt']['menu-about'] = 'Sobre nós';
    aLangKeys['pt']['menu-portfolio'] = 'Portfólio';
    aLangKeys['pt']['menu-expertise'] = 'Razões';
    aLangKeys['pt']['menu-contact'] = ' Contato';
    aLangKeys['pt']['hero-h2'] = 'Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo.';
    aLangKeys['pt']['about-h1'] = 'Sobre nós';
    aLangKeys['pt']['about-h2'] = 'Somos uma equipa de desevolvedores localizados em Lisboa Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, vero!';
    aLangKeys['pt']['pros-h1-1'] = 'O que fazemos';
    aLangKeys['pt']['pros-h2-1'] = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam illum, minima doloremque culpa magnam mollitia.';
    aLangKeys['pt']['pros-h1-2'] = 'Nossos serviços';
    aLangKeys['pt']['pros-h2-2'] = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam illum, minima doloremque culpa magnam mollitia.';
    aLangKeys['pt']['pros-h1-3'] = 'Nossa paixão';
    aLangKeys['pt']['pros-h2-3'] = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam illum, minima doloremque culpa magnam mollitia.';
    aLangKeys['pt']['pros-h1-4'] = 'Profissionalismo';
    aLangKeys['pt']['pros-h2-4'] = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam illum, minima doloremque culpa magnam mollitia.';
    aLangKeys['pt']['quote-h1'] = 'We grow brands by making decisions that are rooted in business strategy.';
    aLangKeys['pt']['quote-action'] = "Let's work together ";
    aLangKeys['pt']['portfolio-h1'] = 'Portfólio';
    aLangKeys['pt']['portfolio-h2'] = 'Nossos trabalhos mais recentes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium neque porro tempore facere, culpa vel.';
    aLangKeys['pt']['port-work-1-h1'] = 'Imagem 1';
    aLangKeys['pt']['port-work-1-h2'] = 'Product industry - Lorem ipsum';
    aLangKeys['pt']['port-work-1-desc'] = 'Web development + mobile website';
    aLangKeys['pt']['port-work-1-p'] = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores earum quis, doloremque harum numquam hic illo nemo, rem dicta vel nisi ipsam adipisci provident dolor cupiditate incidunt cum minus! At.';
    aLangKeys['pt']['expertise-h1'] = 'Por quê?';
    aLangKeys['pt']['expertise-h2'] = 'Para que investir em marketing digital? Quais seriam os reais benefícios? Separamos abaixo algum dos principais motivos.';
    aLangKeys['pt']['expertise-reason-h1-1'] = 'Reputação. Mostra para seus clientes a sua seriedade.';
    aLangKeys['pt']['expertise-reason-h2-1'] = 'Um site visualmente coerente dá credibilidade ao seu trabalho e mostra que investe na sua própria empresa. Para isso, utilizamos conceitos avançados de usabilidade para gerar uma experiência agradável para os visitantes.';
    aLangKeys['pt']['expertise-reason-h1-2'] = 'Visibilidade. Sua empresa sempre aberta, 24/7.';
    aLangKeys['pt']['expertise-reason-h2-2'] = 'Potencialize novas oportunidades de negócios através de técnicas de SEO focadas na sua área de atuação, destacando-se em motores de busca como o Google, Bing e Yahoo. Sua empresa estará sempre acessível, mesmo em horários não comerciais.';
    aLangKeys['pt']['expertise-reason-h1-3'] = 'Comunicação. Contato e feedback dinâmicos.';
    aLangKeys['pt']['expertise-reason-h2-3'] = 'A maior parte das pessoas prefere comunicar-se virtualmente a ter que ligar ou visitar pessoalmente um sítio. Um endereço eletrônico é muito mais fácil de ser lembrado que um número telefônico. Manter um website para a sua empresa significa acesso à opinião dos seus clientes em tempo real, e caso perceba que algo não esteja a andar como deveria, poderá elaborar um plano de ação que melhor adeque-se à situação.';
    aLangKeys['pt']['expertise-reason-h1-4'] = 'Concorrência. Sempre um passo à frente.';
    aLangKeys['pt']['expertise-reason-h2-4'] = 'Ter uma presença virtual te deixará muito à frente daqueles que fazem o mesmo trabalho que você. Uma marca forte é capaz de inspirar a confiança necessária para que, na hora de investir seu dinheiro, o cliente escolha com assertividade a sua empresa.';
    aLangKeys['pt']['expertise-reason-h1-5'] = 'Métricas. Meça a eficiência do seu website.';
    aLangKeys['pt']['expertise-reason-h2-5'] = 'Prezamos por um website otimizado e oferecemos ferramentas que permitem-lhe aceder informações de tráfego em tempo real, ingressos por região geográfica, como o visitantes chegaram no seu website e quanto tempo eles permaneceram lá.';
    aLangKeys['pt']['expertise-reason-h1-6'] = 'Expansão. Atinge novos horizontes.';
    aLangKeys['pt']['expertise-reason-h2-6'] = 'Expande seu negócio independentemente da localização geográfica da sua empresa. Ter uma presença online significa que clientes podem aceder seu website de qualquer sítio do mundo. Porque permancer local se pode ser global?';
    aLangKeys['pt']['quote-btn-more'] = 'Não estou convencido/a';
    aLangKeys['pt']['contact-h1'] = 'Contato';
    aLangKeys['pt']['contact-h2'] = 'Deixe-nos uma mensagem, nós somos amigáveis!';
    aLangKeys['pt']['reach-us-h1-first'] = 'Fale conosco...';
    aLangKeys['pt']['reach-us-h2-first'] = 'Sinta-se à vontade para nos enviar uma mensagem utilizando o formulário do site ou, se preferir, nos contactar via whatsapp, telemóvel, skype ou e-mail.';
    aLangKeys['pt']['reach-us-h1-second'] = '...sem compromissos :)';
    aLangKeys['pt']['reach-us-h2-second'] = 'Texto motivando cliente a contactar ';
    aLangKeys['pt']['footer-p-1'] = 'Feito com';
    aLangKeys['pt']['footer-p-2'] = 'por Studio Tagus :)';


    // onclick behavior
    $('.lang').click(function () {

        var lang = $(this).attr('id'); // obtain language id
        console.log ("lang, inside, is: " + lang)
        // translate all elements that has a key
        $('*[key]').each(function (i) {
            tagName = $(this).prop("tagName");
            text = $(this).text();
//            console.log("<" + tagName + " key='" + $(this).attr('key') + "'>" + text + "</" + tagName + ">");
            console.log($(this).attr('key'));

            $(this).text(aLangKeys[lang][$(this).attr('key')]);
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
            setTimeout(function () {
                console.log("lang is: " + lang)
//                $("#loadMore").text(aLangKeys[lang]['footer-p-2']);
//                $('#loadMore').text(aLangKeys['pt']['footer-p-2' + (click - 2)]);
                $('#loadMore').text(phrase[click - 2]);
            }, 1500);

        });

    });

    /* ----- POPUP DEVICE SCREEN FIX ------------- */
    var phone = $(".phone")
        , pcontent = $(".content-phone")
        , dcontent = $(".content-desktop")
        , slider = phone.innerWidth() - pcontent.innerWidth();
    dcontent.css("padding-right", slider + "px");
    pcontent.css("padding-right", slider + "px");
});


$(window).load(function () {
    $('.single').addClass('loaded');

    $(".single").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd'
        , function () {
            //doSomething
            $('#loader-wrapper').remove();
        });
});


/* PRE-LOADER (must be outisde document.ready) */