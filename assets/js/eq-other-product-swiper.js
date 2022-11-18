var swiper = new Swiper(".eq-detail__other-product-swiper", {
  slidesPerView: 3,
  spaceBetween: 70,
  slidesPerGroup: 3,
  // loop: true,
  // loopFillGroupWithBlank: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

  navigation: {
    nextEl: ".eq-detail__other-next",
    prevEl: ".eq-detail__other-prev",
  },

  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 70,
      slidesPerGroup: 3,
    },

    700: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
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