let mobileNavIcon = document.querySelector("#mobile-nav-icon");
let mobileMenu = document.querySelector("#mobile-menu");

mobileNavIcon.addEventListener('click',()=>{
    mobileMenu.classList.toggle('show-mobile-nav');
});

let navul = document.querySelector('.navul');
let lis = navul.getElementsByTagName('li');
for(let i = 0; i < lis.length; i++){
    lis[i].addEventListener('click',()=>{
        for(ls of lis){
            ls.classList.remove('active');
        }
        lis[i].classList.add('active');
    })
}

let i = 0;
let mLeft = 0;
let slides = document.querySelector('.slides');
var myInterval = setInterval(()=>{
    mLeft += 700;
    i++;
    if(i <= 4){
        slides.style.marginLeft = -mLeft + "px";
    }else{
        i = 0;
        mLeft = 0;
        slides.style.marginLeft = mLeft + "px";
    }
},5000)