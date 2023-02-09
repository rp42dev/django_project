$(window).scroll(function () {
    // Hide navbar on scroll down and show on scroll up
    $(window).scrollTop() > 0 ? $('.nav').css('top', '-120px') : $('.nav').css('top', '0');

});


$(window).on('load', function () {
    if ($('.message').length) {
        setTimeout(function () {
            $('.message').hide(200);
        }, 3000);
    }
    jQuery(".responsive_headline").fitText(1.2, { minFontSize: '43px', maxFontSize: '50px' });
});