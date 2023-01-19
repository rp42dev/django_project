$(window).scroll(function () {
    // Hide navbar on scroll down and show on scroll up
    $(window).scrollTop() > 0 ? $('.nav').css('top', '-120px') : $('.nav').css('top', '0');

    // Parallax effect
    $('.parallax').css({
        'background-position': 'center ' + ($(this).scrollTop() * 0.5) + 'px'
    });
});

$(window).on('load', function () {
    // Remove animation class after animation ends
    $('.animate').on('animationend', function () {
        $(this).removeClass('animate');
    });

    // Loader animation
    setTimeout(function () {
        $('.loader-wrapper').hide(200);
    }, 1000);
});

