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
