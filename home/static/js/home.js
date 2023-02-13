

init = function () {
    const splitElements = document.querySelectorAll('.fade-left');
    const imageElemants = document.querySelectorAll('.fade-right');

    const rotatedElem7deg = document.querySelectorAll('.rotate-7deg');

    rotatedElem7deg.forEach((rotatedElem7deg) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: rotatedElem7deg,
                start: 'top 80%',
                end: '+=80%',
                scrub: 2,
                // markers: true,
            }
        })
            .fromTo(rotatedElem7deg, {
                rotate: 0,
            }, {
                rotate: -7,
                duration: 1,
                ease: 'power4.out',
            });
    });

    const rotatedleft = document.querySelectorAll('.rotate-left');

    rotatedleft.forEach((elem) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: elem,
                start: 'top 80%',
                end: '+=80%',
                scrub: 2,
                // markers: true,
            }
        })
            .fromTo(elem, {
                rotate: -7,
                opacity: 0,
            }, {
                rotate: 0,
                opacity: 1,
                duration: 1,
                ease: 'power4.out',
            });
    });

    const rotatedright = document.querySelectorAll('.rotate-right');

    rotatedright.forEach((elem,) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: elem,
                start: 'top 80%',
                end: '+=80%',
                scrub: 2,
                // markers: true,
            }
        })
            .fromTo(elem, {
                rotate: 7,
                opacity: 0,
            }, {
                rotate: 0,
                opacity: 1,
                duration: 1,
                ease: 'power4.out',
            });
    });

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
};

$(window).on('load', function () {

    setTimeout(function () {
        init();
    }, 200);

});


