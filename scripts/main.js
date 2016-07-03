$(document).ready(function () {

    $(".slick-port").slick();

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

    /* ~~~~~~~~~~~ MENU EXIT (portfolio) ~~~~~~~~~~~~ */
    
    $('.return-btn').on('click', function(){
       window.history.back();
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

    /* ----------- FORM --------------*/
    var frmvalidator  = new Validator("contact_form");
    frmvalidator.addValidation("name","req","Por favor escreva o seu nome.");
    frmvalidator.addValidation("email","req","Por favor escreva o seu e-mail");
    frmvalidator.addValidation("email","email","Por favor escreva um e-mail válido.");

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
    aLangKeys['en']['menu-expertise'] = 'Reasons';
    aLangKeys['en']['menu-contact'] = 'Contact';
    aLangKeys['en']['about-h1'] = 'About us';
    aLangKeys['en']['about-h2'] = 'We are a team of web developers located in Lisbon, Portugal. We are proud to deliver high quality websites with professionalism and efficiency.';
    aLangKeys['en']['pros-h1-1'] = 'Transparency';
    aLangKeys['en']['pros-h2-1'] = 'No surprises. We will be keeping you on track throughout the development phase and constantly looking forward for your feedback if it suits your expectations.';
    aLangKeys['en']['pros-h1-2'] = 'Commitment';
    aLangKeys['en']['pros-h2-2'] = "If you can dream it, we can build it. For Studio Tagus our customer's satisfaction is our biggest committal.";
    aLangKeys['en']['pros-h1-3'] = 'On Time';
    aLangKeys['en']['pros-h2-3'] = 'Nope, no headaches! Your project will be done within the given deadline and with the expected quality.';
    aLangKeys['en']['pros-h1-4'] = 'Passion';
    aLangKeys['en']['pros-h2-4'] = 'Besides everything, we love what we do. Because of that we wholeheartedly dedicate ourselves to our work and have great respect for our customers.';
    aLangKeys['en']['portfolio-h1'] = 'Portfolio';
    aLangKeys['en']['portfolio-h2'] = 'We work with clients all over the globe, delivering creative and high quality solutions with the latest technology. Here are just a few of our most recent projects.';
    aLangKeys['en']['quote-h1'] = 'Let your dreams go. They can become your reality.';
    aLangKeys['en']['quote-action'] = 'Talk to us';
    aLangKeys['en']['expertise-h1'] = 'Why?';
    aLangKeys['en']['expertise-h2'] = 'Why invest in digital marketing? What are the actual benefits? Below you can find some of the greatest reasons to have a digital presence.';
    aLangKeys['en']['expertise-reason-h1-1'] = "<span>Reputation: </span> Show your customers you're serious about it.";
    aLangKeys['en']['expertise-reason-h2-1'] = 'A visually coherent website gives your work credibility and shows you do invest in your own company. With that in mind, we use advanced usability concepts to generate a pleasent experience for users, thus making them engaged with its content.';
    aLangKeys['en']['expertise-reason-h1-2'] = '<span>Visibility:</span>You online, 24/7.';
    aLangKeys['en']['expertise-reason-h2-2'] = 'Potentiate new business opportunities through SEO techniques targeted on your occupation field. This will help highlighting your compmany in famous search engines like Google, Bing and Yahoo. You will be always accessible, even in non-business hours.';
    aLangKeys['en']['expertise-reason-h1-3'] = '<span>Communication:</span> Dynamic contact and feedback.';
    aLangKeys['en']['expertise-reason-h2-3'] = 'Most people prefer to get in touch online rather than make a call or visit a certain place in person.  Electronic addresses are much easier to keep in mind than phone numbers. This will help you get much more feedbacks and, in case you notice things are not going as they should, you will be able to elaborate an action plan that better fits the situation.';
    aLangKeys['en']['expertise-reason-h1-4'] = '<span>Competition</span>: Always one step ahead.';
    aLangKeys['en']['expertise-reason-h2-4'] = 'Having a virtual presence will undoubtedly leave you far ahead from those who run the same business you do. A strong brand can create deep trust and, once the trust is there and your client is willing to invest, he/she will choose your company with assertiveness.';
    aLangKeys['en']['expertise-reason-h1-5'] = '<span>Statistics:</span> Calculate how effective your new website is.';
    aLangKeys['en']['expertise-reason-h2-5'] = 'We care for an optimized website and offer tools that allow you to access traffic information in real time, accesses by geographic region, how visitors got in your website and how long they stayed there.';
    aLangKeys['en']['expertise-reason-h1-6'] = '<span>Expansion:</span> reach new horizons.';
    aLangKeys['en']['expertise-reason-h2-6'] = 'Expand your business regardless of geographic location. Having an online presence means that customers can access your website from anywhere in the world. Why attend nearby customers only when you can go global?';
    aLangKeys['en']['quote-btn-more'] = 'Show More';
    aLangKeys['en']['contact-h1'] = 'Contact';
    aLangKeys['en']['contact-h2'] = '';
    aLangKeys['en']['reach-us-h1-first'] = 'Send us a message...';
    aLangKeys['en']['reach-us-h2-first'] = 'Feel free to send us a message using the contact form below or, if you wish, you can skype, whatsapp, e-mail or phone us.';
    aLangKeys['en']['reach-us-h1-second'] = '...with no pressure :)';
    aLangKeys['en']['reach-us-h2-second'] = 'We will help you finding a great solution for your business.';
    aLangKeys['en']['placeholder-name'] = 'Name *';
    aLangKeys['en']['placeholder-email'] = 'E-mail *';
    aLangKeys['en']['placeholder-msg'] = 'Message *';
    aLangKeys['en']['placeholder-'] = '';
    aLangKeys['en']['footer-p-1'] = 'Made with';
    aLangKeys['en']['footer-p-2'] = 'by Studio Tagus :)';




    aLangKeys['pt']['menu-about'] = 'Sobre nós';
    aLangKeys['pt']['menu-portfolio'] = 'Portfólio';
    aLangKeys['pt']['menu-expertise'] = 'Razões';
    aLangKeys['pt']['menu-contact'] = 'Contato';
    aLangKeys['pt']['about-h1'] = 'Sobre nós';
    aLangKeys['pt']['about-h2'] = 'Somos uma equipa de desevolvedores web baseados em Lisboa, Portugal. Nós nos orgulhamos em entregar websites de qualidade com eficiência e profissionalismo.';
    aLangKeys['pt']['pros-h1-1'] = 'Transparência';
    aLangKeys['pt']['pros-h2-1'] = 'Nada de surpresas. Acompanhe de perto a construção do seu projeto e apresente feedback durante o desenvolvimento.';
    aLangKeys['pt']['pros-h1-2'] = 'Compromisso';
    aLangKeys['pt']['pros-h2-2'] = 'Se pode sonhar, podemos construir. Para o <b>Studio Tagus</b> a satisfação total do nosso cliente é o maior compromisso.';
    aLangKeys['pt']['pros-h1-3'] = 'Pontualidade';
    aLangKeys['pt']['pros-h2-3'] = 'Sem dores de cabeça! Seu projeto será terminado dentro do prazo determinado e com a qualidade expectada.';
    aLangKeys['pt']['pros-h1-4'] = 'Paixão';
    aLangKeys['pt']['pros-h2-4'] = 'Acima de tudo, trabalhamos por amor à nossa profissão. Por isso temos total dedicação ao que fazemos e imenso respeito por nossos clientes.';
    aLangKeys['pt']['portfolio-h1'] = 'Portfólio';
    aLangKeys['pt']['portfolio-h2'] = 'Nós trabalhamos com clientes nacionais e internacionais, entregando soluções construidas com criatividade e tecnologia de ponta. Aqui está apenas alguns dos nossos projetos mais recentes.';
    aLangKeys['pt']['quote-h1'] = 'Faça com que seus sonhos deixem de ser sonhos.';
    aLangKeys['pt']['quote-action'] = 'Fale connosco';
    aLangKeys['pt']['expertise-h1'] = 'Porquê?';
    aLangKeys['pt']['expertise-h2'] = 'Para que investir em marketing digital? Quais seriam os reais benefícios? Separamos abaixo algum dos principais motivos.';
    aLangKeys['pt']['expertise-reason-h1-1'] = '<span>Reputação: </span>Mostra para seus clientes a sua seriedade.';
    aLangKeys['pt']['expertise-reason-h2-1'] = 'Um site visualmente coerente dá credibilidade ao seu trabalho e mostra que investe na sua própria empresa. Para isso, utilizamos conceitos avançados de usabilidade para gerar uma experiência agradável para os visitantes.';
    aLangKeys['pt']['expertise-reason-h1-2'] = '<span>Visibilidade:</span> Sua empresa sempre aberta, 24/7.';
    aLangKeys['pt']['expertise-reason-h2-2'] = 'Potencialize novas oportunidades de negócios através de técnicas de SEO focadas na sua área de atuação, destacando-se em motores de busca como o Google, Bing e Yahoo. Sua empresa estará sempre acessível, mesmo em horários não comerciais.';
    aLangKeys['pt']['expertise-reason-h1-3'] = '<span>Comunicação:</span> Contato e feedback dinâmicos.';
    aLangKeys['pt']['expertise-reason-h2-3'] = 'A maior parte das pessoas prefere comunicar-se virtualmente a ter que ligar ou visitar pessoalmente um sítio. Um endereço eletrônico é muito mais fácil de ser lembrado que um número telefônico. Manter um website para a sua empresa significa acesso à opinião dos seus clientes em tempo real, e caso perceba que algo não esteja a andar como deveria, poderá elaborar um plano de ação que melhor adeque-se à situação.';
    aLangKeys['pt']['expertise-reason-h1-4'] = '<span>Concorrência:</span> Sempre um passo à frente.';
    aLangKeys['pt']['expertise-reason-h2-4'] = 'Ter uma presença virtual te deixará muito à frente daqueles que fazem o mesmo trabalho que você. Uma marca forte é capaz de inspirar a confiança necessária para que, na hora de investir seu dinheiro, o cliente escolha com assertividade a sua empresa.';
    aLangKeys['pt']['expertise-reason-h1-5'] = '<span>Métricas:</span> Meça a eficiência do seu website.';
    aLangKeys['pt']['expertise-reason-h2-5'] = 'Prezamos por um website otimizado e oferecemos ferramentas que permitem-lhe aceder informações de tráfego em tempo real, ingressos por região geográfica, como o visitantes chegaram no seu website e quanto tempo eles permaneceram lá.';
    aLangKeys['pt']['expertise-reason-h1-6'] = '<span>Expansão:</span> Atinge novos horizontes.';
    aLangKeys['pt']['expertise-reason-h2-6'] = 'Expande seu negócio independentemente da localização geográfica da sua empresa. Ter uma presença online significa que clientes podem aceder seu website de qualquer sítio do mundo. Porque permancer local se pode ser global?';
    aLangKeys['pt']['quote-btn-more'] = 'Mostrar mais';
    aLangKeys['pt']['contact-h1'] = 'Contato';
    aLangKeys['pt']['contact-h2'] = '';
    aLangKeys['pt']['reach-us-h1-first'] = 'Fale conosco...';
    aLangKeys['pt']['reach-us-h2-first'] = 'Sinta-se à vontade para nos enviar uma mensagem utilizando o formulário do site ou, se preferir, nos contactar via whatsapp, telemóvel, skype ou e-mail.';
    aLangKeys['pt']['reach-us-h1-second'] = '...sem compromissos :)';
    aLangKeys['pt']['reach-us-h2-second'] = 'Vamos ajudar-lhe a encontrar a melhor solução.';
    aLangKeys['pt']['placeholder-name'] = 'Nome *';
    aLangKeys['pt']['placeholder-email'] = 'E-mail *';
    aLangKeys['pt']['placeholder-msg'] = 'Mensagem *';
    aLangKeys['pt']['placeholder-'] = '';
    aLangKeys['pt']['footer-p-1'] = 'Feito com';
    aLangKeys['pt']['footer-p-2'] = 'por Studio Tagus :)';




    var lang = "pt";
    console.log(lang);
    // onclick behavior
    $('.lang').click(function () {

        lang = $(this).attr('id'); // obtain language id
        console.log("lang, inside, is: " + lang)

        // translate all elements that has a key
        $('*[key]').each(function (i) {
            tagName = $(this).prop("tagName");

            text = $(this).text();
            //            console.log(tagName);
            //console.log("<" + tagName + " key='" + $(this).attr('key') + "'>" + text + "</" + tagName + ">");
            console.log($(this).attr('key'));
            //            console.log(text);
            //            console.log("click dentro do lang: " + click);
            if (tagName === "INPUT" || tagName === "TEXTAREA") {
                $(this).attr("placeholder", aLangKeys[lang][$(this).attr('key')]);
            } else {
                $(this).html(aLangKeys[lang][$(this).attr('key')]);
            }

        });

    });



    /* ----------- EXPERTISE LIST ~ SHOW AND HIDE CONTENT -------------- */

    size_li = $("#expertise .row").size();
    start = 1; //how many rows it starts showing
    add = 1; //how many rows are added per click
    click = 1; //how many times the button was clicked

    var phrase = new Array();

    phrase['pt'] = new Array();
    phrase['en'] = new Array();

    phrase['pt'][0] = "mostrar mais";

    phrase['en'][0] = "show more";

    $('#expertise .row:lt(' + start + ')').show();
    $('#loadMore').click(function (e) {
        console.log("dentro do clique: " + lang + ". Estás no clique: " + click);
        click++;
        if (click > 2) {
            $(this).hide()
        }
        e.preventDefault();
        start = (start + add <= size_li) ? start + add : size_li;
        $('#expertise .row:lt(' + start + ')').slideDown(1500, function () {
            setTimeout(function () {
                console.log("lang is: " + lang)
                    //                $("#loadMore").text(aLangKeys[lang]['footer-p-2']);
                    //                $('#loadMore').text(aLangKeys['pt']['footer-p-2' + (click - 2)]);
                $('#loadMore').text(phrase[lang][click - 2]);
            }, 1500);

        });

    });


});


$(window).load(function () {
    $('.single').addClass('loaded');

    $(".single").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd'
        , function () {
            //doSomething

            $('#loader-wrapper').remove();
        });

    /* ~~~~~~~~~~~ HERO ~~~~~~~~~~~~ */

    setTimeout(function () {
        var string = "STUDIO"
            , q = $.map(string.split(''), function (letter) {
                return $('<span>' + letter + '</span>');
            });

        var dest = $(".hero .wrapper-hero .studio")
            , c = 0
            , i = setInterval(function () {
                q[c].appendTo(dest).hide().fadeIn(700);
                c += 1;
                if (c >= q.length) clearInterval(i);
            }, 200);
        $(".tr").delay(1300).html("TAGUS").hide().fadeIn(1700);
        $(".hero .wrapper-hero").css("border-width", "2px").fadeIn(2000);
    }, 500);


});
