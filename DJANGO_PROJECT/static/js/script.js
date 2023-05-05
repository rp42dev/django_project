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

    document.querySelectorAll('.onclick').forEach((elem) => {
        elem.addEventListener('click', () => {
            elem.querySelector('a').click();
            return true;
        });
    });

    let marquee = document.querySelectorAll('.marquee__text');

    marquee.forEach(el => {

        let text = el.innerHTML;
        let textWidth = el.scrollWidth;
        el.innerHTML = text + text + text + text;
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