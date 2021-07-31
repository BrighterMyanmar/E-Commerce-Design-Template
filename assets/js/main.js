let mobileNavIcon = document.querySelector("#mobile-nav-icon");
let mobileMenu = document.querySelector("#mobile-menu");

mobileNavIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('show-mobile-nav');
});

let navul = document.querySelector('.navul');
let lis = navul.getElementsByTagName('li');
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', () => {
        for (ls of lis) {
            ls.classList.remove('active');
        }
        lis[i].classList.add('active');
    })
}

let i = 0;
let mLeft = 0;
let slides = document.querySelector('.slides');
var myInterval = setInterval(() => {
    mLeft += 700;
    i++;
    if (i <= 4) {
        slides.style.marginLeft = -mLeft + "px";
    } else {
        i = 0;
        mLeft = 0;
        slides.style.marginLeft = mLeft + "px";
    }
}, 5000);

let moveMargin = function (mg) {
    categoryBox.style.marginLeft = mg + "px";
}

let categoryBox = document.querySelector('.category-box');
let rightSlideArrow = document.querySelector('.right-slide-arrow');
let leftSlideArrow = document.querySelector('.left-slide-arrow');

let mi = 0;
rightSlideArrow.addEventListener('click', () => {
    console.log(categoryBox.children.length);
    if (mi + 7 < categoryBox.children.length) {
        mi += 1;
    }
    console.log(mi);
    moveMargin(-mi * 150);
});
leftSlideArrow.addEventListener('click', () => {
    if (mi > 0) {
        mi -= 1;
    }
    moveMargin(-(mi * 150));
});

let timerHour = document.querySelector('.timer-hour');
let timerMinute = document.querySelector('.timer-minus');
let timerSecond = document.querySelector('.timer-second');
setInterval(() => {
    let nowTime = new Date();
    timerHour.innerHTML = nowTime.getHours() % 12;
    timerMinute.innerHTML=nowTime.getMinutes();
    timerSecond.innerHTML = nowTime.getSeconds();
}, 1000);


