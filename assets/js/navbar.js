const burger = document.querySelector('#hamburger');
const ul = document.querySelector('#burger');
burger.addEventListener('click', () => {
    document.querySelector('#burger').classList.toggle('show');
});

window.addEventListener("scroll", function () {
    var TheNavbar = document.querySelector('#theNavbar');
    TheNavbar.classList.toggle('sticky', window.scrollY > 0);
});

