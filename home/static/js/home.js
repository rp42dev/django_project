
(function ($) {
    // marquee animation from https://codepen.io/lelamanolio/pen/ZEYRJJJ
    let marquee = document.querySelectorAll('.marquee__text');

    // added event listener because it doesn't get the right width
    addEventListener("load", function () {
        marquee.forEach(el => {
            // set a default rate, the higher the value, the faster it is
            let rate = 100;
            // get the width of the element
            let distance = el.offsetWidth;
            // get the margin-right of the element
            let style = window.getComputedStyle(el);
            let marginRight = parseInt(style.marginRight) || 8;
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

