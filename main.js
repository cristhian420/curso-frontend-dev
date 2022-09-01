const emailUser = document.querySelector('.nav-right-email');
const menuEmail = document.querySelector('.menu-nav-main-container');
const closeIconMobile = document.querySelector('.icono');
const menuMobileImg = document.querySelector('.menu-nav-left--icon');
const menuMobile = document.querySelector('.menu-mobile--total-container');
const cartIcon = document.querySelector('.nav-right--cartIcon');
const myOrderMenu = document.querySelector('.aside--my-order-cart');
const cardsContainer = document.querySelector('.cards-container');
const closeIconDetail = document.querySelector('.product-detail--close');
const productDetailCardImg = document.querySelector('.product-detail--img');
const textContainerProductDetailCard = document.querySelector('.text-container--product-detail-card');
const asideProductDetailContainer = document.querySelector('#aside--product-detail-card');
const productList = [{
    name: 'playera',
    price: 120,
    image: 'https://cdn.shopify.com/s/files/1/0365/1921/5241/products/20201003_131156_530x@2x.jpg?v=1601754362',
    description: 'playera super way hippiosa'
},
{
    name: 'blusa',
    price: 100,
    image: 'https://m.media-amazon.com/images/I/71jJW0yEygS._AC_UX385_.jpg',
    description: 'blusa jippiosa whitexican'

},
{
    name: 'falda',
    price: 80,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdx7g45j8ZmMp9wUuZMpZ61hsOiVcGE34hyw&usqp=CAU',
    description: 'falda super mamadora'
},
{
    name: 'gorra',
    price: 105,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutn0eeTMYlBdo3ClViFRAmM9SSuQtmoRZ4Q&usqp=CAU',
    description: 'gorra estilo 60s'
},
{
    name: 'tenis',
    price: 300,
    image: 'https://http2.mlstatic.com/D_NQ_NP_658019-MLM44413340941_122020-O.webp',
    description: 'tenis tipo fila pero hippies'
},];

emailUser.addEventListener('click', toogleMenuEmail);
closeIconMobile.addEventListener('click',toogleMenuMobile);
menuMobileImg.addEventListener('click',toogleMenuMobile);
cartIcon.addEventListener('click',toogleCartMenu);
closeIconDetail.addEventListener('click', toggleProductCardDetail)


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
    const isProductDetailAsideOpen = !asideProductDetailContainer.classList.contains('inactive');

    if(isMenuMobileOpen || isMenuEmailOpen || isProductDetailAsideOpen) {
        menuMobile.classList.add('inactive');
        menuEmail.classList.add('inactive');
        asideProductDetailContainer.classList.add('inactive');
    }
    myOrderMenu.classList.toggle('inactive');

}

function toggleProductCardDetail(){
    const isMenuMobileOpen = !menuMobile.classList.contains('inactive');
    const isCartMenuOpen = !myOrderMenu.classList.contains('inactive');
    const isMenuEmailOpen = !menuEmail.classList.contains('inactive');


    if(isMenuMobileOpen || isMenuEmailOpen || isCartMenuOpen) {
        menuMobile.classList.add('inactive');
        menuEmail.classList.add('inactive');
        myOrderMenu.classList.add('inactive');
    }
    asideProductDetailContainer.classList.toggle('inactive');

}

function closeAllMenus(){
    menuMobile.classList.add('inactive');
    menuEmail.classList.add('inactive');
    asideProductDetailContainer.classList.add('inactive');
    myOrderMenu.classList.add('inactive');
}

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.classList.add('product-img');
        productImg.addEventListener('click',toggleProductCardDetail);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoText = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoText.append(productName, productPrice);

        const productInfoFigure = document.createElement('figure');
        const productCartIcon = document.createElement('img');
        productCartIcon.setAttribute('src', '/icons/bt_add_to_cart.svg');
        
        productInfoFigure.append(productCartIcon);
        productInfo.append(productInfoText,productInfoFigure);
        productCard.append(productImg,productInfo);
        
        
        cardsContainer.appendChild(productCard);
    }
}


    // productDetailCardImg.setAttribute('src', productList.image);
    // const textContainerPrice = document.createElement('p');
    // textContainerPrice.classList.add('precio');
    // textContainerPrice.innerText = '$' + productList.price;
    
    // const textContainerTitle = document.createElement('p');
    // textContainerTitle.classList.add('titulo');
    // textContainerTitle.innerText = productList.name;
    
    // const textContainerDescription = document.createElement('p');
    // textContainerDescription.classList.add('description');
    // textContainerDescription.innerText = productList.description;

    // textContainerProductDetailCard.append(textContainerPrice, textContainerTitle, textContainerDescription);




renderProducts(productList);


