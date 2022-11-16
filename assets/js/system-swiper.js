var swiper = new Swiper(".other-system__swiper", {
  slidesPerView: 3,
  spaceBetween: 40,
  slidesPerGroup: 3,
  // loop: true,
  // loopFillGroupWithBlank: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  pagination: {
    el: ".other-system__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".other-system__next",
    prevEl: ".other-system__prev",
  },

  breakpoints: {
    1071: {
      slidesPerView: 3,
      spaceBetween: 40,
      slidesPerGroup: 3,
    },

    801: {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 2,
    },

    1: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
    },

    // 1: {
// 
      // slidesPerView: 1,
      // spaceBetween: 0,
      // slidesPerGroup: 1,
// 
    // }

  }
});