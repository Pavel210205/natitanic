$(document).ready(function () {
    $('.menu__burger').click(function (event) {
        $('.menu__burger,.menu__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $(".slider").slick({
        dots: true,
        speed: 750,
        easing: "ease-out",
        swipe: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    swipe: true,
                    toughThreshold: 15,
                    waitForAnimate: false,
                }
            }],
    });

});

