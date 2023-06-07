// МОДАЛЬНОЕ ОКНО
const cookies = document.getElementById("cookies");
const cookiesBtn = document.getElementById("cookies__btn");
cookiesBtn.addEventListener("click", function () {
    cookies.style.display = "none";
});
// МОДАЛЬНОЕ ОКНО

// СЛАЙДЕР
let offset = 0;
const sliderLine = document.querySelector('.slider__items');

document.querySelector('.slider__arrow-right').addEventListener('click', function(){
    offset = offset + 350;
    if (offset > 350) {
        offset = -350;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider__arrow-left').addEventListener('click', function () {
    offset = offset - 350;
    if (offset < -350) {
        offset = 350;
    }
    sliderLine.style.left = -offset + 'px';
});
// СЛАЙДЕР


// ФИЛЬТРАЦИЯ
const option = document.querySelector('.hat__option'),
    items = document.querySelectorAll('.products__item');
    optionItems = document.querySelectorAll('.option__item');

function filter() {
    option.addEventListener('click', event => {
        const targetId = event.target.dataset.id;
        const target = event.target;

        optionItems.forEach(optionItem => optionItem.classList.remove('active'));
        target.classList.add('active');

        switch(targetId) {
            case 'all':
                getItems('products__item')
                break
            case 'desk':
                getItems(targetId)
                break
            case 'bedroom':
                getItems(targetId)
                break
            case 'lighting':
                getItems(targetId)
                break
            case 'accessories':
                getItems(targetId)
                break
        }
    })
}

filter()

function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}
// ФИЛЬТРАЦИЯ


// АНИМАЦИЯ ПРИ СКРОЛЛЕ
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 20;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset> animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('animate__animated');
                animItem.classList.add('animate__fadeInDown');
            } else  {
                if (!animItem.classList.contains('_anime-no-hide')){
                    animItem.classList.remove('animate__animated');
                    animItem.classList.remove('animate__fadeInDown');
                }
            }
        }

        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
    }
}
// АНИМАЦИЯ ПРИ СКРОЛЛЕ

// ТАБЫ

const tabsBtn = document.querySelectorAll('.line__item');
const tabsItems = document.querySelectorAll('.clients__item')

tabsBtn.forEach(function(item) {
    item.addEventListener('click', function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('line_active')) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('line_active')
            });
            tabsItems.forEach(function(item) {
                item.classList.remove('show');
            });
    
            currentBtn.classList.add('line_active');
            currentTab.classList.add('show');
        }
    });
});

document.querySelector('.line__item').click()
// ТАБЫ


// АККОРДЕОН 

const accordionBtn = document.querySelector('.accordion_worths');
const accordionContent = document.querySelector('.accordion__items');

accordionBtn.addEventListener('click', function open() {

    if (accordionBtn.classList.contains('accordion_worths-active')) {
        accordionBtn.classList.remove('accordion_worths-active');
    } else {
        accordionBtn.classList.add('accordion_worths-active');
    }

    if (accordionContent.classList.contains('accordion-hidden')) {
        accordionContent.classList.add('accordion__worths_wrapper');
        accordionContent.classList.remove('accordion-hidden');
    } else if (accordionContent.classList.contains('accordion__worths_wrapper')) {
        accordionContent.classList.remove('accordion__worths_wrapper');
        accordionContent.classList.add('accordion-hidden');
    }
});


// БУРГЕР МЕНЮ

const burgerBtn = document.querySelector('.burger__wrapper');
const burgerContent = document.querySelector('.burger__list');


function toggleMenu() {
    burgerContent.classList.toggle('burger__list-active');
}

burgerBtn.addEventListener('click', toggleMenu)
