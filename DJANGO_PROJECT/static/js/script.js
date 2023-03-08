$(window).scroll(function () {
    // Hide navbar on scroll down and show on scroll up
    $(window).scrollTop() > 0 ? $('.nav').css('top', '-200px') : $('.nav').css('top', '0');

});


$(window).on('load', function () {
    if ($('.message').length) {
        setTimeout(function () {
            $('.message').hide(200);
        }, 5000);
    }
});

$(window).on('load', function () {

    let marquee = document.querySelectorAll('.marquee__text');

    marquee.forEach(el => {

        let text = el.innerHTML;
        let textWidth = el.scrollWidth;
        el.innerHTML = text + text;
        let textSpeed = el.getAttribute('data-speed');

        let textDirection = el.getAttribute('data-direction');

        if (textSpeed == null) {
            textSpeed = 15;
        }


        const tl = gsap.timeline({
            repeat: -1,
            ease: 'none',
            yoyo: true,
        });
        

        tl.to(el, {
            x: textDirection == 'right' ? textWidth : -textWidth,
            duration: textSpeed,
            ease: 'none',
        });
            
    });

    gsap.to(".bg", {
        scrollTrigger: {
            scrub: true
        },
        y: (i, target) => ScrollTrigger.maxScroll(window) * target.dataset.speed,
        ease: "none"
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
});
