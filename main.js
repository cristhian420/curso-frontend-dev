const emailUser = document.querySelector('.nav-right-email');
const menuEmail = document.querySelector('.menu-nav-main-container');
const closeIconMobile = document.querySelector('.icono');
const menuMobileImg = document.querySelector('.menu-nav-right');
const menuMobile = document.querySelector('.menu-mobile--total-container');


emailUser.addEventListener('click', toogleMenuEmail);
closeIconMobile.addEventListener('click',toogleMenuMobile);
menuMobileImg.addEventListener('click',toogleMenuMobile);

function toogleMenuEmail(){
    menuEmail.classList.toggle('inactive');
}

function toogleMenuMobile(){
    menuMobile.classList.toggle('inactive');
}