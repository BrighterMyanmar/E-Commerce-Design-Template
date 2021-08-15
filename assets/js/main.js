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

let images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

let slideDiv = document.getElementById("slideDiv");
let readyDiv = document.getElementById("readyDiv");

let divWith = slideDiv.clientWidth;

let carousel = 0;
let currentIndex = 2;


let moveSlideDiv = () => {
    if (carousel == 0) {
        slideDiv.style.marginLeft = - divWith + "px";
        readyDiv.style.marginLeft = 0 + "px";
    } else {
        slideDiv.style.marginLeft = 0 + "px";
        readyDiv.style.marginLeft = - divWith + "px";
    }
    setTimeout('changeDivPos()', 2000);
}

let changeDivPos = () => {
    currentIndex++;
    if (carousel == 0) {
        slideDiv.style.display = "none";
        slideDiv.style.marginLeft = divWith + "px";
        slideImg.src = `./assets/imgs/${images[currentIndex % 5]}`;
    } else {
        readyDiv.style.display = "none";
        readyDiv.style.marginLeft = divWith + "px";
        readyImg.src = `./assets/imgs/${images[currentIndex % 5]}`;
    }
    setTimeout('changeImage()', 1000);
}

let changeImage = () => {
    if (carousel == 0) {
        carousel = 1;
        slideDiv.style.display = "block";
    } else {
        carousel = 0;
        readyDiv.style.display = "block";
    }
    setTimeout('moveSlideDiv()', 1000);
}


window.onload = moveSlideDiv();

// refactoring