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

    //scroll animation
    jQuery(function($) {
      var doAnimations = function() {
        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.concept__list-item-image');
            $animatables_delay = $('.concept__list-item-text');
        if ($animatables.length == 0) {
          $(window).off('scroll', doAnimations);
        }
        $animatables.each(function(i) {
           var $animatable = $(this);
          if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                $animatable.addClass('animated');
                setTimeout(function() { 
                    $animatables_delay.addClass('animated');
                }, 600);
          } else {
            $animatable.removeClass('animated'); 
            $animatables_delay.removeClass('animated'); 
          }
        });
      };
      $(window).on('scroll', doAnimations);
      $(window).trigger('scroll'); 
    }); 

    // main slider
    let mainSlider = $('.banner-slick-slider')
    if($(mainSlider).length)  {
        $(mainSlider).slick({
            autoplay:true,
            autoplaySpeed: 8000,
            slidesToShow: 1,
            dots:false,
            fade: true,
            cssEase: 'linear', 
            speed: 5000,
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

    // teamplate page fix height
    let heightHeader = $('.header').height();
    let teamplatePage = $('.template-page-detail');

    if(teamplatePage.length) {
        $(teamplatePage).css({
            'padding-top': heightHeader + 'px'
        })
    }


    $( ".faq accordion-tab summary" ).on( "click", function() {
      $(this).toggleClass('active');
    } );

    $( ".product-shipping__body details h3" ).on( "click", function() {
      $(this).toggleClass('active');
      $('.product-shipping__content').slideToggle(300);
    } );
});