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

let images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];

let i = 0;

let changeImage = () => {

    if(i < 4){ 
        i++; 
        document.slide.src = `./assets/imgs/${images[i]}`;
    }
    else {
        i = 0;
        document.slide.src = `./assets/imgs/${images[i]}`;
    }
  
    setTimeout('changeImage()',3000);
}

window.onload = changeImage();