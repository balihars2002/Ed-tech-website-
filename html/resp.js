burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav_list');
rightnav = document.querySelector('.rightnav');
burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-list');
    navlist.classList.toggle('v-list');
    navbar.classList.toggle('h-nav');
})

