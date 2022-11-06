const burger = $('.burger-btn')[0];
const nav = $('.header__nav')[0];

document.addEventListener('DOMContentLoaded', () => {
  burger.addEventListener('click', (e) => {
    nav.classList.toggle('open-nav');
  })
})

