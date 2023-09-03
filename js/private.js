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

    // main slider
    let mainSlider = $('.banner-slick-slider')
    if($(mainSlider).length)  {
        $(mainSlider).slick({
            autoplay:true,
            slidesToShow: 1,
            dots:false,
            fade: true,
            cssEase: 'linear'
        });
    }

    // gerally slider
    let listImageSliser = $('.list-image__list');
    if(listImageSliser.length) {
        $(listImageSliser).slick({
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
    }

    // product slider
    let productSlider = $('.product__media-list');
    if(productSlider.length) {
        $('.product__media-list').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.thumbnail-list'
        });
        $('.thumbnail-list').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.product__media-list',
            dots: true,
            centerMode: true,
            focusOnSelect: true
        });
    }
    
});