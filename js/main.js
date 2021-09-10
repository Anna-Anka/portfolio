$(function () {
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