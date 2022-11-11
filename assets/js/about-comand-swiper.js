var swiper = new Swiper(".about__comand-swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  // loop: true,
  // loopFillGroupWithBlank: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".about__comand-button-next",
    prevEl: ".about__comand-button-prev",
  },

  breakpoints: {
    1361: {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
    },

    700: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
    },

    1: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2,
    },

    // 1: {

    //   slidesPerView: 1,
    //   spaceBetween: 0,
    //   slidesPerGroup: 1,

    // }

  }
});