var swiper = new Swiper(".project__swiper", {
  slidesPerView: 4,
  spaceBetween: 0,
  slidesPerGroup: 4,
  // loop: true,
  // loopFillGroupWithBlank: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".project__button-next",
    prevEl: ".project__button-prev",
  },
});