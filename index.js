const menu_btn=document.querySelector(".hamburger");
const mobile_menu=document.querySelector("nav ul");
menu_btn.addEventListener('click',function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('show'); 
})


