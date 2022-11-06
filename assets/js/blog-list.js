
document.addEventListener('DOMContentLoaded', () => {
  jQuery(document).ready(function($){

    const button = $('.blog__btn')[0];
    const blogs = Array.from($('.blog__list-part'));
  
    if (blogs.length > 2) {
      blogs.forEach((el, index) => {
        if (index >= 2) {
          // el.style.display = 'none';
          el.classList.add('list-close');
        }
      })
    }
  
    button.addEventListener('click', () => {
      console.log(button.textContent)
      if (button.textContent = 'Еще статьи') {
  
        const closeLi = Array.from($('.list-close'))
        closeLi.forEach(el => {
          el.classList.remove('list-close');
          el.classList.add('list-open')
        })
        button.style.display = 'none'
      }
    })
  });
})
