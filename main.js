const emailUser = document.querySelector('.nav-right-email');
const menuEmail = document.querySelector('.menu-nav-main-container');

emailUser.addEventListener('click', tooglemenuEmail);


function tooglemenuEmail(){
    menuEmail.classList.toggle('inactive');
}