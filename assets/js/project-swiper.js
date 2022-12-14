var swiper = new Swiper(".project__swiper", {
  slidesPerView: 4,
  spaceBetween: 0,
  slidesPerGroup: 4,
  // loop: true,
  // loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".project__button-next",
    prevEl: ".project__button-prev",
  },

  breakpoints: {
    1185: {
      slidesPerView: 4,
      spaceBetween: 0,
      slidesPerGroup: 4,
    },

    900: {
        slidesPerView: 3,
        spaceBetween: 0,
        slidesPerGroup: 3,
    },

    577: {
      slidesPerView: 2,
      spaceBetween: 0,
      slidesPerGroup: 2,
    },

    1: {

      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,

    }

  }
});