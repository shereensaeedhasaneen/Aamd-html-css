$(document).ready(function() {
    if ($('#radio-1').prop("checked") == true) {
        $("#radio_1").addClass("active")
        $("#radio_2").removeClass("active")
    }
    $(document).on('change', '.radio-custom', function() {
        if ($('#radio-1').prop("checked") == true) {
            $("#radio_1").addClass("active")
            $("#radio_2").removeClass("active")
            $(".new-input input").attr("disabled", true)
            $(".new-input button").attr("disabled", true)
        } else if ($('#radio-2').prop("checked") == true) {
            $("#radio_1").removeClass("active")
            $("#radio_2").addClass("active")
        }
    });
    $(document).on('change', '#radio-2', function() {
        $(".active .inner-save form input").removeAttr("disabled")
        $(".active .inner-save form button").removeAttr("disabled")
    })
});



var swiper = new Swiper('.swiper-hero', {
    loop: true,
    // direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: false,
    },
    breakpoints: {
        '@0.75': {
            clickable: true,
            // direction: 'vertical',
        },
        '@1.00': {
            clickable: true,
            // direction: 'vertical',
        },
        '@1.50': {
            clickable: true,
            direction: 'vertical',
        },
    },
    autoplay: {
        delay: 3000,
    },
});
// swiper.autoplay.stop();



var swiper = new Swiper(".swiper-latest", {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});




$(document).ready(function() {
    // Notification
    $(".notif-cont").slideUp()
    $(".notif-cont").slideUp("fast")

    $(".btn-notification").click(function() {
            $(".notif-cont").slideToggle("fast")
        })
        // Notification nice-scroll
    // $(".notif-cont").niceScroll({
    //     cursorcolor: "#fd1266",
    //     cursorwidth: "5px",
    //     cursorborder: "none",
    //     cursorborderradius: "5px",
    //     // autohidemode: false,
    //     // railpadding: { top: 0, right: 0, left: 0, bottom: 0 },
    //     horizrailenabled: false,
    //     preventmultitouchscrolling: true
    // });

})