$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.home__rp42 h1', {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power4.out'
    });

    gsap.from('.home__image', {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power4.out'
    });

        gsap.timeline({
            scrollTrigger: {
                trigger: ".home__content",
                start: '80% 80%',
                end: '+=80%',
                scrub: 2,
            }
        })
            .fromTo(".home__rp42 h1", {
                x: 20,
            }, {
                x: 0,
                duration: 2,
                ease: 'power4.out',
            })
            .fromTo(".home__img-wrapper", {
                x: -10,
            }, {
                x: 0,
                duration: 1,
                ease: 'power4.out',
            }, 0);

    const rightElements = document.querySelectorAll('.right');

    rightElements.forEach((rightElement) => {
        let amount = rightElement.getAttribute('data-amount');
        if (amount == null) {
            amount = 10;
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
            amount = 10;
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
            amount = 10;
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
            amount = 10;
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

    // fitText
    const getThreshold = () => {
        var width = $(window).width();
        if (width < 1800 && width > 1200) {
            threshold = 0.26;
        } else {
            threshold = 0.2;
        }
        return threshold;
    }

    $(".home__rp42 h1").fitText(getThreshold());

    $(window).resize(function () {
        width = $(window).width();
        if (width < 1800 && width > 1200) {
            threshold = 0.26;
        } else {
            threshold = 0.2;
        }
        $(".home__rp42 h1").fitText(threshold);
    });
});