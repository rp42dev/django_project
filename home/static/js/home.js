
(function ($) {

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

