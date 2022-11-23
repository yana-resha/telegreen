var swiper = new Swiper(".afisha__calendar-swiper", {
  slidesPerView: "auto",
  freeMode: true,
  clickable: true,
  grabCursor: true,
  // centeredSlides: true,
  spaceBetween: 45,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    901: {
      spaceBetween: 45,
    },

    630: {
      spaceBetween: 30,
    },

    471: {
      spaceBetween: 20,
    },

    397: {
      spaceBetween: 10,
    },

    1: {
      spaceBetween: 10,
    },
  }
});