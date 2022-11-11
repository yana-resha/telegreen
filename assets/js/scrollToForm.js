document.addEventListener('DOMContentLoaded', () => {
  jQuery(document).ready(function($){

    const scrollBtn = Array.from($('.scroll-form'));
    if (scrollBtn.length > 0) {

      scrollBtn.forEach(el => {
        el.addEventListener('click', () => {
          const form = $('form')[0];
          const coord = form.offsetTop;
          window.scrollTo({ top: coord - 100, behavior: 'smooth' })
        })
      }) 

      
    }
  })
})