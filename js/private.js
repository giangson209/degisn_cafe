
$( document ).ready(function() {
    $('.header__button').click(function(){
        $('.menu-nav, .header__button-line').toggleClass('active');
    });

    $('.banner-slick-slider').slick({
      slidesToShow: 1,
      dots:false,
    });

    $('.list-image__list').slick({
      arrows: false,
      slidesToShow: 4,
      dots:false,
      centerMode: true,
    });
});