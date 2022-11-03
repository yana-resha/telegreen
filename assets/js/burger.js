const burger = $('.burger-btn')[0];
const nav = $('.header__nav')[0];

burger.addEventListener('click', (e) => {
  nav.classList.toggle('open-nav');
})