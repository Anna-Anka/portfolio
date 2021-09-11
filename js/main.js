$(function () {
    /*$(".menu__link, .header__icon, .logo").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body, html').animate({
            scrollTop: top
        }, 1500);
    });*/

    $('.menu__burger, .menu__link').on('click', function () {
        $('.header__navigation').toggleClass('header__navigation--active');
        $('.menu__burger').toggleClass('menu__burger--active');
        $('body').toggleClass('lock');
        $('.header__top').toggleClass('header__top--active');
    });

    $('.reviews__items').slick({
        dots: true,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinity: true
    });

    var mixer = mixitup('.works__items');
    $('.gallery__link').fancybox({
        cyclic: true,
    });
}); 