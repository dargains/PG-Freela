$(document).ready(function () {
    $(".popupPortfolio").hide();

    $("article").click(function () {
        $(".popupPortfolio").show();
    });

    $(".closePortfolio").click(function () {
        $(".popupPortfolio").hide();
    });
});
