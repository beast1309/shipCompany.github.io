$(function () {

    $('.header-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        speed: 1200,
    });

    $('.history__road-map__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,

    });

    $('.project-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        speed: 1200,
    });

    $('.corp__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        speed: 1200,
        centerPadding: '100px',
    });

    $('.map-info__nav-btn--1').on('click', function () {
        $('.map-info__nav-btn--1').toggleClass('active');
        $('.map-info__list--1').toggleClass('active');
        $('.map-location--1').toggleClass('active');
        $('.map-info__nav-btn--2').removeClass('active');
        $('.map-info__list--2').removeClass('active');
        $('.map-location--2').removeClass('active');

        $('.map-info__nav-btn--1.active').attr('disabled', true);
        $('.map-info__nav-btn--2').removeAttr('disabled');
    });



    $('.map-info__nav-btn--2').on('click', function () {
        $('.map-info__nav-btn--2').toggleClass('active');
        $('.map-info__list--2').toggleClass('active');
        $('.map-location--2').toggleClass('active');
        $('.map-info__nav-btn--1').removeClass('active');
        $('.map-info__list--1').removeClass('active');
        $('.map-location--1').removeClass('active');


        $('.map-info__nav-btn--2.active').attr('disabled', true);
        $('.map-info__nav-btn--1').removeAttr('disabled');
    });





    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    )
    wow.init();

});