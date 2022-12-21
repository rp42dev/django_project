$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
        .fromTo("section.panel.left", 1, { x: "-100%" }, { x: "0%", ease: Linear.easeNone })  // in from left
        .fromTo("section.panel.right", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })  // in from right
        .fromTo("section.panel.bottom", 1, { y: "-200%" }, { y: "0%", ease: Linear.easeNone }); // in from top

    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        triggerHook: "onLeave",
        duration: "300%"
    })
        .setPin("#trigger2")
        .setTween(wipeAnimation)
        .addTo(controller);
});

// build scene
var controller2 = new ScrollMagic.Controller();

var revealElements = document.getElementsByClassName("anim");
for (var i = 0; i < revealElements.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: revealElements[i],
        offset: 600,
        triggerHook: 0.9,
    })
        .setClassToggle(revealElements[i], "visible")
        .addTo(controller2);
}

// Parallax effect
const parallax = document.querySelectorAll(".parallax");
for (item of parallax) {
    const speed = item.getAttribute("data");
    window.addEventListener("scroll", function () {
        item.style.backgroundPositionY = window.pageYOffset * speed + "px";
    });
}
