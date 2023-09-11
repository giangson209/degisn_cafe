$( document ).ready(function() {

    $(window).scroll(function() {
        var headerH = $('.header').outerHeight(true);
        var scrollVal = $(this).scrollTop();
        if ( scrollVal > headerH ) {
            $('.header').addClass('fixmenu');
        } else {
            $('.header').removeClass('fixmenu');
        }
    });



    $('.header__button').click(function(){
        $('.menu-nav, .header__button-line, body').toggleClass('active');
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
    var helpers = {
        addZeros: function (n) {
            return (n < 10) ? '0' + n : '' + n;
        }
    };
    let productSlider = $('.product__media-list');
    if(productSlider.length) {

        var currentSlide;
        var slidesCount;
        var sliderCounter = document.createElement('div');
        sliderCounter.classList.add('slider__counter');

        var updateSliderCounter = function(slick, currentIndex) {
            currentSlide = slick.slickCurrentSlide() + 1;
            slidesCount = slick.slideCount;
            $(sliderCounter).text(currentSlide + '/' +slidesCount)
        };

        productSlider.on('init', function(event, slick) {
            productSlider.append(sliderCounter);
            updateSliderCounter(slick);
        });

        productSlider.on('afterChange', function(event, slick, currentSlide) {
            updateSliderCounter(slick, currentSlide);
        });

        $('.product__media-list').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            // infinite: true, 
            asNavFor: '.thumbnail-list',
            nextArrow: '<a href="javascript:void(0)" class="arr-right"><img src="https://mars-cafe-sgp.myshopify.com/cdn/shop/t/2/assets/arr-right.png" alt=""></a>',
            prevArrow: '<a href="javascript:void(0)" class="arr-left"><img src="https://mars-cafe-sgp.myshopify.com/cdn/shop/t/2/assets/arr-left.png" alt=""></a>',
        });
        $('.thumbnail-list').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            asNavFor: '.product__media-list',
            dots: true,
            // centerMode: true,
            focusOnSelect: true,
            // infinite: true 
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


    $( ".faq accordion-tab summary").on( "click", function() {
        $(this).toggleClass('active');
    });

    $(".product-shipping__body details h3").on( "click", function() {
        $(this).toggleClass('active');
        $('.product-shipping__content').slideToggle(300);
    });

    // message
    $('#message').on("input", function() {
        let messageInput = $(this).val();
        $('#messagePush').val(messageInput)
    })

    // check message
     $("form[action='/cart/add'] [type=submit]").on("click", function(e) {
        if(runCheckSubmit()){
            return true;
        }else{
            alert('メッセージを入力してください。')
            return false;
        }
    });

    function runCheckSubmit() {
        let result = true;
        if ($("#message").val() == '') {
            result = false;
        }
        return result;
    }

    // Cart-shipping
    let delivery = $('#datePicker');
    if(delivery.length) {
        const datePicker = document.getElementById("datePicker");
        const today = new Date();
        const nextDay = new Date();
        nextDay.setDate(today.getDate() + 1);

        flatpickr(datePicker, {
            mode: "single",
            minDate: today,
            dateFormat: "Y-m-d",
            locale: "ja",
            disable: [
                function(date) {
                    return (
                        date.getDate() === today.getDate() &&
                        date.getMonth() === today.getMonth() &&
                        date.getFullYear() === today.getFullYear()
                    ) || (
                        date.getDate() === nextDay.getDate() &&
                        date.getMonth() === nextDay.getMonth() &&
                        date.getFullYear() === nextDay.getFullYear()
                    );
                },
            ],
        });
    }

    // Delivery time
    $('.delivery-select').change(function() {
        let homeDeliveryValue = $(this).val();
        $('#DeliveryTime').val(homeDeliveryValue);
    });

});