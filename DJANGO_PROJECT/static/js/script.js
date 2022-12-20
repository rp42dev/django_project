
// Path: DJANGO_PROJECT\static\js\scripts.js

// event listener for scroll event
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('transparent', window.scrollY < 100);
});