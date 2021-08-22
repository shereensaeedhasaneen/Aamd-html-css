$(document).ready(function() {
    var $h2 = $('.top-tabs h2');
    var sticky = $('.top-tabs h2').offsetTop;
    $('body').scroll(function() {
        if (window.pageYOffset > sticky) {
            $('.top-tabs h2').addClass("py-4");
        } else {
            $('.top-tabs h2').removeClass("py-4");
        }
    });


    // function headerTabs() {
    //     console.log('lkdf');
    //     // if (window.pageYOffset > sticky) {
    //     //     $h2.classList.add("py-4");
    //     // } else {
    //     //     $h2.classList.remove("py-4");
    //     // }
    // }
})