const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamicon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoICon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamicon.addEventListener('click',toggleMobileMenu);
menuCarritoICon.addEventListener('click',toggleCarritoAside);


function toggleDesktopMenu() {
    const isasideClosed = aside.classList.contains('inactive');
  
    if (!isasideClosed) {
        aside.classList.add('inactive'); // si esta abierto el aside y abro destok se cierra

    }


    desktopMenu.classList.toggle('inactive')

}

function toggleMobileMenu() {
    const isDestokMenuClosed = desktopMenu.classList.contains('inactive');
  
    if (!isDestokMenuClosed) {
        aside.classList.add('inactive');

    }

    mobileMenu.classList.toggle('inactive')

}

function toggleCarritoAside() {

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
        if (!isMobileMenuClosed) {
            mobileMenu.classList.add('inactive');

        }
         aside.classList.toggle('inactive') ;
}

function toggleMobileMenu() {

    const isasideClosed = aside.classList.contains('inactive');
  
        if (!isasideClosed) {
            aside.classList.add('inactive');

        }
         mobileMenu.classList.toggle('inactive') ;
}