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

/* ===== GSAP ANIMATION =====*/
//NAV
gsap.from('.nav-logo, .nav-toggle', {opacity: 0, duration: 1, delay: 2, y:10})
gsap.from('.nav-item, .shop-items', {opacity: 0, duration: 1, delay: 2.1, y:30, stragger: 0.2})

//HOME
gsap.from('.name, .menu-social-media', {opacity: 0, duration: 1, delay: 1.5, y:30})
gsap.from('.menu-title', {opacity: 0, duration: 1, delay: 1.6, y:30})
gsap.from('.menu-description', {opacity: 0, duration: 1, delay: 1.8, y:30})
gsap.from('.menu-button', {opacity: 0, duration: 1, delay: 2.1, y:30})
gsap.from('.menu-img', {opacity: 0, duration: 1, delay: 1.3, y:30})