
(function ($) {

    const scrollxElem = document.querySelectorAll('.scroll-x');

    scrollxElem.forEach((scrollx) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: scrollx,
                start: 'top 80%',
                end: '+=80%',
                scrub: 2,
                // markers: true,
            }
        })
            .fromTo(scrollx, {
                x: 100,
            }, {
                x: 0,
                duration: 1,
                ease: 'power4.out',
            });
    });

    const splitElements = document.querySelectorAll('.fade-left');
    const imageElemants = document.querySelectorAll('.fade-right');

    splitElements.forEach((splitElement) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: splitElement,
                start: 'top 80%',
                end: '+=80%',
                scrub: 2,
                // markers: true,
            }
        })
            .fromTo(splitElement, {
                y: 100,
                x: -100,
                opacity: 0,
            }, {
                y: 0,
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power4.out',
            });
    });

    imageElemants.forEach((imageElemant) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: imageElemant,
                start: 'top 80%',
                end: '+=80%',
                scrub: 2,
                // markers: true,
            }
        })
            .fromTo(imageElemant, {
                y: 100,
                x: 100,
                opacity: 0,
            }, {
                y: 0,
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power4.out',
            });
    });

    const rightElements = document.querySelectorAll('.right');

    rightElements.forEach((rightElement) => {
        let amount = rightElement.getAttribute('data-amount');
        if (amount == null) {
            amount = 30;
        }
        gsap.timeline({
            scrollTrigger: {
                trigger: rightElement,
                start: 'top 90%',
                end: '+=70%',
                scrub: 2,
            }
        })
            .fromTo(rightElement, {
                x: parseInt(amount),
            }, {
                x: 0,
                duration: 1,
                ease: 'power4.out',
            });

    });

    const leftElements = document.querySelectorAll('.left');

    leftElements.forEach((leftElement) => {
        let amount = leftElement.getAttribute('data-amount');
        if (amount == null) {
            amount = 30;
        }
        gsap.timeline({
            scrollTrigger: {
                trigger: leftElement,
                start: 'top 90%',
                end: '+=70%',
                scrub: 2,
            }
        })
            .fromTo(leftElement, {
                x: -parseInt(amount),
            }, {
                x: 0,
                duration: 1,
                ease: 'power4.out',
            });
    });

    const upElements = document.querySelectorAll('.up');

    upElements.forEach((upElement) => {
        let amount = upElement.getAttribute('data-amount');
        if (amount == null) {
            amount = 30;
        }
        gsap.timeline({
            scrollTrigger: {
                trigger: upElement,
                start: 'top 90%',
                end: '+=70%',
                scrub: 2,
            }
        })
            .fromTo(upElement, {
                y: -parseInt(amount),
            }, {
                y: 0,
                duration: 1,
                ease: 'power4.out',
            });
    });

    const downElements = document.querySelectorAll('.down');

    downElements.forEach((upElement) => {
        let amount = downElement.getAttribute('data-amount');
        if (amount == null) {
            amount = 30;
        }
        gsap.timeline({
            scrollTrigger: {
                trigger: downElement,
                start: 'top 90%',
                end: '+=70%',
                scrub: 2,
            }
        })
            .fromTo(downElement, {
                y: parseInt(amount),
            }, {
                y: 0,
                duration: 1,
                ease: 'power4.out',
            });
    });

    const fadeElements = document.querySelectorAll('.fade');

    fadeElements.forEach((fadeElement) => {
        let duration = fadeElement.getAttribute('data-duration');
        if (duration == null) {
            duration = 1;
        }
        gsap.timeline({
            scrollTrigger: {
                trigger: fadeElement,
                start: 'top 90%',
                end: '+=70%',
                scrub: 2,
            }
        })
            .fromTo(fadeElement, {
                opacity: 0,
            }, {
                opacity: 1,
                duration: parseInt(duration),
                ease: 'power4.out',
            });
    });

    ScrollTrigger.refresh();
})(jQuery);

