document.addEventListener('DOMContentLoaded', () => {
  jQuery(document).ready(function($){

    const catalogSections = [...Array.from($('.eq-catalog'))];

    const scrollBtn = $('.scroll-to-category')[0];
    scrollBtn.style.zIndex = '50';

    function scrollToCategory () {

      const categorySection = $('.eq-category__list')[0];
      if (categorySection) {
        const coord = categorySection.offsetTop;
        window.scrollTo({ top: coord - 150, behavior: 'smooth' });

      }
    
    }

    scrollBtn.addEventListener('click', () => {
      scrollToCategory();
      scrollBtn.classList.remove('block')
    })


    const btns = [...Array.from($('.eq-category__list-part-btn'))];


    if (catalogSections.length > 0) {
      btns.forEach(el => {
        el.addEventListener('click', (e) => {
          const btnId = $(e.currentTarget).attr('data-section');
          catalogSections.forEach(section => {
            section.classList.remove('open');
            if (section.id === btnId) {
              section.classList.add('open');
              const coord = section.offsetTop;
              window.scrollTo({ top: coord - 50, behavior: 'smooth' })
              scrollBtn.classList.add('block');
            }
          })
        })
      })
    }
  })
})