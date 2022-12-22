$(function () { // wait for document ready
    // Animate reveal home header text
    var headerController = new ScrollMagic.Controller();
    $('.anim').each(function () {
            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.9,
                offset: 600,
            })
                .setClassToggle(this, 'visible')
            .addTo(headerController);
    });
    
    // Animate panels on scroll
    var homePanelController = new ScrollMagic.Controller();
    var wipeAnimation = new TimelineMax()
        .fromTo("section.panel.left", 1, { x: "-100%" }, { x: "0%", ease: Linear.easeNone })  // in from left
        .fromTo("section.panel.right", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })  // in from right
        .fromTo("section.panel.bottom", 1, { y: "-200%" }, { y: "0%", ease: Linear.easeNone }); // in from top

    new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        triggerHook: "onLeave",
        duration: "300%"
    })
        .setPin("#trigger2")
        .setTween(wipeAnimation)
        .addTo(homePanelController);
});
