const li = Array.from(document.querySelectorAll('.header__nav-list-part'));
const buttonCategory = document.querySelector('.category-open');
const categoryList = document.querySelector('.category-list')

const allActiveButton = Array.from(document.querySelectorAll('.btn-list'))

const allDropdown = Array.from(document.querySelectorAll('.nav-dropdown'))


jQuery(document).ready(function($){

li.forEach(el => {
  el.addEventListener('mouseover', (e) => {
    e.stopPropagation();
    
    const btn = $(el).find('button')[0];
    const drop = $(el).find('.nav-dropdown')[0];
    allDropdown.forEach(drop => {
      drop.classList.remove('nav-dropdown-active');
    })
    if (btn) {
      drop.classList.add('nav-dropdown-active');
      document.body.addEventListener('click', (e) => { 
        if (e.target !== btn) {
          const activeDrop = Array.from($('.nav-dropdown-active'));
          if (activeDrop) {
            activeDrop.forEach(el => el.classList.remove('nav-dropdown-active'))
          }
        }
      })
     }
   })
  })
})