new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 3,
    loop: true,
    spaceBetween: 35,
    simulateTouch: true,
    touchRatio: 1,
});


new Swiper('.swiper-2', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 3,
    loop: true,
    spaceBetween: 35,
    simulateTouch: true,
    touchRatio: 1,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        850: {
            slidesPerView: 2,
        },
        1260: {
            slidesPerView: 3,
        },
    },
});


const burgerMenu = document.querySelector('.burger');
const menuHeader = document.querySelector('.menu');
if (burgerMenu) {
    burgerMenu.addEventListener("click", function(e) {
        burgerMenu.classList.toggle('_active');
        menuHeader.classList.toggle('_active');
        document.body.classList.toggle('_lock')
    });
}


const accordion1 = document.querySelector('.questions__question-1');
const content1 = document.querySelector('.questions__content-1');
if (accordion1) {
    accordion1.addEventListener("click", function(e) {
        accordion1.classList.toggle('_focus');
        content1.classList.toggle('_focus');
    });
}

const accordion2 = document.querySelector('.questions__question-2');
const content2 = document.querySelector('.questions__content-2');
if (accordion2) {
    accordion2.addEventListener("click", function(e) {
        accordion2.classList.toggle('_focus');
        content2.classList.toggle('_focus');
    });
}



function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}


const btnServices = document.querySelector('.goto-services');
const services = document.querySelector('#services');

btnServices.addEventListener('click', () => {
    scrollTo(services);
    burgerMenu.classList.remove('_active');
    menuHeader.classList.remove('_active');
    document.body.classList.remove('_lock')
})


const btnProduct = document.querySelector('.goto-product');
const product = document.querySelector('#product');
const product2 = document.querySelector('#product2');

btnProduct.addEventListener('click', () => {
    if (document.documentElement.clientWidth > 1260) {
        scrollTo(product);
    } else {
        scrollTo(product2);
    }
    burgerMenu.classList.remove('_active');
    menuHeader.classList.remove('_active');
    document.body.classList.remove('_lock')
})


const btnAbout = document.querySelector('.goto-about');
const about = document.querySelector('#about');

btnAbout.addEventListener('click', () => {
    scrollTo(about);
    burgerMenu.classList.remove('_active');
    menuHeader.classList.remove('_active');
    document.body.classList.remove('_lock')
})