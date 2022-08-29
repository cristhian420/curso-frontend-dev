const emailUser = document.querySelector('.nav-right-email');
const menuEmail = document.querySelector('.menu-nav-main-container');
const closeIconMobile = document.querySelector('.icono');
const menuMobileImg = document.querySelector('.menu-nav-left--icon');
const menuMobile = document.querySelector('.menu-mobile--total-container');
const cartIcon = document.querySelector('.nav-right--cartIcon');
const myOrderMenu = document.querySelector('.aside--my-order-cart');


emailUser.addEventListener('click', toogleMenuEmail);
closeIconMobile.addEventListener('click',toogleMenuMobile);
menuMobileImg.addEventListener('click',toogleMenuMobile);
cartIcon.addEventListener('click',toogleCartMenu);

function toogleMenuEmail(){
    const isCartMenuOpen = !myOrderMenu.classList.contains('inactive');

    if(isCartMenuOpen) {
        myOrderMenu.classList.add('inactive');
    }
    menuEmail.classList.toggle('inactive');
}

function toogleMenuMobile(){
    const isCartMenuOpen = !myOrderMenu.classList.contains('inactive');

    if(isCartMenuOpen) {
        myOrderMenu.classList.add('inactive');
    }
    menuMobile.classList.toggle('inactive');
}

function toogleCartMenu(){
    const isMenuMobileOpen = !menuMobile.classList.contains('inactive');
    const isMenuEmailOpen = !menuEmail.classList.contains('inactive');

    if(isMenuMobileOpen || isMenuEmailOpen) {
        menuMobile.classList.add('inactive');
        menuEmail.classList.add('inactive');
    }
    myOrderMenu.classList.toggle('inactive');

}

console.log()
