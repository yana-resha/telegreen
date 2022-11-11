var swiper = new Swiper(".about__advantages-swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  slidesPerGroup: 4,
  // loop: true,
  // loopFillGroupWithBlank: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".about__adv-swiper-button-next",
    prevEl: ".about__adv-swiper-button-prev",
  },

  breakpoints: {
    1361: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 4,
    },

    800: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
    },

    530: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
    },

    1: {

      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,

    }

  }
});