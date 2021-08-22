'use strict';

(function($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function() {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");


        /*------------------
            Gallery filter
        --------------------*/
        $('.filter__controls li').on('click', function() {
            $('.filter__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.product__filter').length > 0) {
            var containerEl = document.querySelector('.product__filter');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function() {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Search Switch
    $('.search-switch').on('click', function() {
        $('.search-model').fadeIn(400);
        console.log('run');
    });

    $('.search-close-switch').on('click', function() {
        $('.search-model').fadeOut(400, function() {
            $('#search-input').val('');
        });
    });

    /*------------------
		Navigation
	--------------------*/
    // $(".mobile-menu").slicknav({
    //     prependTo: '#mobile-menu-wrap',
    //     allowParentLinks: true
    // });

    /*------------------
        Accordin Active
    --------------------*/
    $('.collapse').on('shown.bs.collapse', function() {
        $(this).prev().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function() {
        $(this).prev().removeClass('active');
    });

    //Canvas Menu
    $(".canvas__open").on('click', function() {
        $(".offcanvas-menu-wrapper").addClass("active");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".offcanvas-menu-overlay, .close-menu").on('click', function() {
        $(".offcanvas-menu-wrapper").removeClass("active");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    /*-----------------------
        Hero Slider
    ------------------------*/

    /*-----------------------
        Hero Slider
    ------------------------*/

    $('.auc-soon-slide').owlCarousel({
        loop: true,
        margin: 10,
        // autoplay: true,
        // navigation: true,
        // nav: true,
        // navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
        // navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        // navigationText: ["<div class='nav-btn prev-slide'></div>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })

    var hgwin = $(window).height();
    // $(".hero .swiper-container").css("height", "664px")
    $(".hero .swiper-container").height(hgwin - 128),
        // $(".hero").height(729),



        $('.auction-follow-slide').owlCarousel({
            loop: true,
            margin: 10,
            // autoplay: true,
            // navigation: true,
            nav: true,
            // navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
            // navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            // navigationText: ["<div class='nav-btn prev-slide'></div>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })

    // #Menu
    $(".cat button").blur(function() {
        setTimeout(function() {
            $(".cat .drop-1 ul").removeClass("show");
            $(".cat .dropdown.drop-1").removeClass("borderrad")
            $(".cat #Icon_down_solid").removeClass("svg-tran")
        }, 120)
    })

    $(".cat button").click(function() {
        $(".cat .drop-1 ul").toggleClass("show");
        $(".cat .dropdown.drop-1").toggleClass("borderrad")
        $(".cat #Icon_down_solid").toggleClass("svg-tran")
        console.log("Test R");
    })

    $(".menu-user button").blur(function() {
        setTimeout(function() {
            $(".menu-user .drop-user1 ul").removeClass("show");
            $(".menu-user .dropdown.drop-user1").removeClass("borderrad")
            $("#Icon_down").removeClass("svg-tran")
        }, 120)
    })

    $(".menu-user button").click(function() {
        $(".menu-user .drop-user1 ul").toggleClass("show");
        $(".menu-user .dropdown.drop-user1").toggleClass("borderrad")
        $("#Icon_down").toggleClass("svg-tran")
    })

    /*--------------------------
        Header
    ----------------------------*/

    // #dells
    $(".heart").click(function() {
        $(this).toggleClass("fas")
    })

    // #dells


    // #selling
    $(".selling .dot").click(function() {
        // $(this).css("display", "none")
        $(this).css("opacity", "0")
    })

    if (innerWidth < 1200) {
        $(".header-taps").slideUp()
    }
    if (innerWidth > 1200) {
        $(".open-tabs").slideUp()
    }

    $(".selling .open-tabs").click(function() {
        $(".header-taps").slideToggle()
    })
    if (innerWidth < 1200) {
        $(".header-taps .nav .nav-link").click(function() {
            $(".header-taps").slideToggle()
            $(".burger-check").prop("checked", false)
        })
    }


    // #selling


    $(".owl-prev").html('<i class="fas fa-1x fa-chevron-left"></i>');
    $(".owl-next").html('<i class="fa fa-chevron-right"></i>');

    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

    /*-------------------
		Radio Btn
	--------------------- */
    $(".product__color__select label, .shop__sidebar__size label, .product__details__option__size label").on('click', function() {
        $(".product__color__select label, .shop__sidebar__size label, .product__details__option__size label").removeClass('active');
        $(this).addClass('active');
    });

    /*-------------------
		Scroll
	--------------------- */
    $(".nice-scroll").niceScroll({
        cursorcolor: "#0d0d0d",
        cursorwidth: "5px",
        background: "#e5e5e5",
        cursorborder: "",
        autohidemode: true,
        horizrailenabled: false
    });

    /*------------------
        CountDown
    --------------------*/
    // For demo preview start
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    if (mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end


    // Uncomment below and use your date //

    /* var timerdate = "2020/12/30" */

    $("#countdown").countdown(timerdate, function(event) {
        $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Days</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Hours</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Minutes</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Seconds</p> </div>"));
    });

    /*------------------
		Magnific
	--------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*-------------------
		Quantity change
	--------------------- */
    var proQty = $('.pro-qty');
    proQty.prepend('<span class="fa fa-angle-up dec qtybtn"></span>');
    proQty.append('<span class="fa fa-angle-down inc qtybtn"></span>');
    proQty.on('click', '.qtybtn', function() {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    var proQty = $('.pro-qty-2');
    proQty.prepend('<span class="fa fa-angle-left dec qtybtn"></span>');
    proQty.append('<span class="fa fa-angle-right inc qtybtn"></span>');
    proQty.on('click', '.qtybtn', function() {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    /*------------------
        Achieve Counter
    --------------------*/
    $('.cn_num').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})(jQuery);