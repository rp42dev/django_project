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

(function ($) {

    let marquee = document.querySelectorAll('.marquee__text');

    // added event listener because it doesn't get the right width
    marquee.forEach(el => {
        // set a default rate, the higher the value, the faster it is
        let rate = 200;
        // get the width of the element
        let distance = el.clientWidth;
        // get the margin-right of the element
        let style = window.getComputedStyle(el);
        let marginRight = parseInt(style.marginRight) || 0;
        // get the total width of the element
        let totalDistance = distance + marginRight;
        // get the duration of the animation 
        // for a better explanation, see the quoted codepen in the first comment
        let time = totalDistance / rate;
        // get the parent of the element
        let container = el.parentElement;

        gsap.to(container, time, {
            repeat: -1,
            x: '-' + totalDistance,
            ease: Linear.easeNone,
        });
    });



    const zoomElems = document.querySelectorAll('.zoom');

    zoomElems.forEach((zoomElem) => {
        let amount = zoomElem.getAttribute('data-amount');
        if (amount == null) {
            amount = 0.5;
        }
        gsap.timeline({
            scrollTrigger: {
                trigger: zoomElem,
                start: 'top 90%',
                end: '+=70%',
                scrub: 3,
                toggleActions: 'play none none reverse',
            }
        })
            .fromTo(zoomElem, {
                opacity: 0,
                scale: amount,
            }, {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power4.out',
            });
    });

    const fadeElems = document.querySelectorAll('.fade');

    fadeElems.forEach((fadeElem) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: fadeElem,
                start: 'top 90%',
                end: '+=70%',
                scrub: 3,
                toggleActions: 'play none none reverse',
            }
        })
            .fromTo(fadeElem, {
                opacity: 0,
                y: 100,
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power4.out',
            });
    });


    ScrollTrigger.refresh();
})(jQuery);
