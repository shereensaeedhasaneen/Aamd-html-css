$(document).ready(function() {
    // var $h2 = $('.top-tabs h2');
    // var sticky = $('.top-tabs h2').offsetTop;
    // $('body').scroll(function() {
    //     if (window.pageYOffset > sticky) {
    //         $('.top-tabs h2').addClass("py-4");
    //     } else {
    //         $('.top-tabs h2').removeClass("py-4");
    //     }
    // });

    $('.shop-details .product__details__pic .col-lg-8 .parent-tats .nav-link').click(function() {
        $('.shop-details .product__details__pic .col-lg-8 .parent-tats .nav-link').removeClass('active')
        $(this).addClass('active')
    })

    // $('shop-details .owl-stage-outer').hover
    $(".shop-details .owl-stage-outer, .shop-details .owl-nav").hover(
        function() {
            $(".shop-details .owl-nav").css('opacity', 1);
        },
        function() {
            $(".shop-details .owl-nav").css('opacity', 0);
        }
    );

    // $(".shop-details .owl-stage-outer").hover(function() {
    //     $(this).fadeOut(100);
    //     $(this).fadeIn(500);
    // });


    // function headerTabs() {
    //     console.log('lkdf');
    //     // if (window.pageYOffset > sticky) {
    //     //     $h2.classList.add("py-4");
    //     // } else {
    //     //     $h2.classList.remove("py-4");
    //     // }
    // }
})