/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav_menu'),
      toggleMenu = document.getElementById('nav_toggle'),
      closeMenu = document.getElementById('nav_close')

//SHOW
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

//SHOW
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})