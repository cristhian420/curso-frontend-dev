const emailUser = document.querySelector('.nav-right-email');
const menuEmail = document.querySelector('.menu-nav-main-container');

menuEmail.addEventListener('click', tooglemenuEmail);


function tooglemenuEmail(){
    menuEmail.classList.add('active');
};

console.log(menuEmail.getAttribute('class'));