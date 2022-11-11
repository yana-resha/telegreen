document.addEventListener('DOMContentLoaded', () => {
  jQuery(document).ready(function($){

    const scrollBtn = $('.scroll-form')[0];
    if (scrollBtn) {

      scrollBtn.addEventListener('click', () => {
        const form = $('form')[0];
        const coord = form.offsetTop;
        window.scrollTo({ top: coord - 100, behavior: 'smooth' })
      })
    }
  })
})