
$( document ).ready(function() {

    $(window).scroll(function() {
       var headerH = $('.header').outerHeight(true);
       console.log(headerH);
       var scrollVal = $(this).scrollTop();
        if ( scrollVal > headerH ) {
            $('.header').addClass('fixmenu');
        } else {
            $('.header').removeClass('fixmenu');
        }
    });



    $('.header__button').click(function(){
        $('.menu-nav, .header__button-line').toggleClass('active');
    });

    $('.banner-slick-slider').slick({
      autoplay:true,
      slidesToShow: 1,
      dots:false,
      fade: true,
      cssEase: 'linear'
    });

    $('.list-image__list').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        slidesToShow: 4,
        speed: 7000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
              }
            }
        ]
    });
});