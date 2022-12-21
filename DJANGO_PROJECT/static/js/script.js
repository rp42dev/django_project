var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var nav = document.querySelector('.nav');
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        nav.style.top = "0";
    } else {
        nav.style.top = "-120px";
    }
    prevScrollpos = currentScrollPos;
}

var animate = document.querySelectorAll('.animate');
for (var i = 0; i < animate.length; i++) {
    animate[i].addEventListener('animationend', function () {
        this.classList.remove('animate');
    });
}
