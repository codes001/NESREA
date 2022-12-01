const btn = document.getElementById ('menu-btn');
const overlay = document.getElementById ('overlay');
const menu = document.querySelector('.mobile-menu');
// const showmenu = document.getElementById('show-menu');
btn.addEventListener ('click', navToggle)

function navToggle () {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}