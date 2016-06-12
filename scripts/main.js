$(document).ready(function () {
    $(".popupPortfolio").hide();

    $("article").click(function () {
        $(".popupPortfolio").show();
        //trava o scroll
        html.data('scroll-position', scrollPosition);
        html.data('previous-overflow', html.css('overflow'));
        html.css('overflow', 'hidden');
        window.scrollTo(scrollPosition[0], scrollPosition[1]);

    });

    $(".closePortfolio").click(function () {
        $(".popupPortfolio").hide();
        //libera o scroll
        var scrollPosition = html.data('scroll-position');
        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(scrollPosition[0], scrollPosition[1]);
    });

    $(".hero-down").click(function(){
        $('html,body').animate({
        scrollTop: $('#bla').offset().top}, 'slow');
    })

    var scrollPosition = [
      self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
      self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
    ];
    var html = $('html');

});
