const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamicon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamicon.addEventListener('click',toggleDesktopMenu1);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')

}

function toggleDesktopMenu1() {
    mobileMenu.classList.toggle('inactive')

}