// let mobileNavIcon = document.querySelector("#mobile-nav-icon");
// let mobileMenu = document.querySelector("#mobile-menu");

// mobileNavIcon.addEventListener('click', () => {
//     mobileMenu.classList.toggle('show-mobile-nav');
// });

// let navul = document.querySelector('.navul');
// let lis = navul.getElementsByTagName('li');
// for (let i = 0; i < lis.length; i++) {
//     lis[i].addEventListener('click', () => {
//         for (ls of lis) {
//             ls.classList.remove('active');
//         }
//         lis[i].classList.add('active');
//     })
// }

// let images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

// let slideDiv = document.getElementById("slideDiv");
// let readyDiv = document.getElementById("readyDiv");

// let divWith = slideDiv.clientWidth;

// let carousel = 0;
// let currentIndex = 2;


// let moveSlideDiv = () => {
//     if (carousel == 0) {
//         slideDiv.style.marginLeft = - divWith + "px";
//         readyDiv.style.marginLeft = 0 + "px";
//     } else {
//         slideDiv.style.marginLeft = 0 + "px";
//         readyDiv.style.marginLeft = - divWith + "px";
//     }
//     setTimeout('changeDivPos()', 2000);
// }

// let changeDivPos = () => {
//     currentIndex++;
//     if (carousel == 0) {
//         slideDiv.style.display = "none";
//         slideDiv.style.marginLeft = divWith + "px";
//         slideImg.src = `./assets/imgs/${images[currentIndex % 5]}`;
//     } else {
//         readyDiv.style.display = "none";
//         readyDiv.style.marginLeft = divWith + "px";
//         readyImg.src = `./assets/imgs/${images[currentIndex % 5]}`;
//     }
//     setTimeout('changeImage()', 1000);
// }

// let changeImage = () => {
//     if (carousel == 0) {
//         carousel = 1;
//         slideDiv.style.display = "block";
//     } else {
//         carousel = 0;
//         readyDiv.style.display = "block";
//     }
//     setTimeout('moveSlideDiv()', 1000);
// }


// window.onload = moveSlideDiv();

// Zommer 
const enlargeDiv = document.querySelector(".enlarge-image");
const zoomImage = document.querySelector(".zoomimg");
const lens = document.querySelector(".lens");
const result = document.querySelector(".result");

const enlargeDivRect = enlargeDiv.getBoundingClientRect();
const zoomImageRect = zoomImage.getBoundingClientRect();
const lensRect = lens.getBoundingClientRect();
const resultRect = result.getBoundingClientRect();

enlargeDiv.addEventListener('mousemove',zoomIn);

result.style.backgroundImage = `url(${zoomImage.src})`;

function zoomIn(e){

  const {x,y} = getXYPos(e);

  lens.style.left = x + "px";
  lens.style.top = y + "px"

  let fx = resultRect.width / lensRect.width;
  let fy = resultRect.height / lensRect.height;

  result.style.backgroundSize = `${zoomImageRect.width * fx}px ${zoomImageRect.height * fy}px`;
  result.style.backgroundPosition = `-${x*fx}px -${y*fy}px`;
}

function getXYPos(e){

    let x = e.clientX - enlargeDivRect.left - (lensRect.width / 2);
    let y = e.clientY- enlargeDivRect.top - (lensRect.height / 2);

    let minX = 0;
    let minY = 0;
    let maxX = enlargeDivRect.width - lensRect.width;
    let maxY = enlargeDivRect.height - lensRect.height;

    if(x < minX) x = minX;
    if(y < minY ) y = minY;
    if(x > maxX) x = maxX;
    if(y > maxY) y = maxY;
    return {x,y};
}

