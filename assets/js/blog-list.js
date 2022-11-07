
document.addEventListener('DOMContentLoaded', () => {
  jQuery(document).ready(function($){

    const button = $('.blog__btn')[0];
    const blogs = Array.from($('.blog__list-part'));
    const content = Array.from($('.blog__list-part-content'));
    content.forEach(el => {
      const divContent = $(el).find('div')[1];
      if (divContent.textContent.length > 205) {
        
        let arr = divContent.textContent.split('');
        let newTextContent = '';
        for (i = 0; i < 204; ++i) {
          newTextContent += arr[i];
        }

        newTextContent += '...';
        divContent.textContent = newTextContent;
      }
    })

   
    
    if (window.screen.availWidth < 481 && window.screen.availWidth > 390) {
      if (blogs.length > 4) {
        blogs.forEach((el, index) => {
          if (index >= 4) {
            // el.style.display = 'none';
            el.classList.add('list-close');
          }
        })
      }
    } else {
      if (blogs.length > 3) {
        blogs.forEach((el, index) => {
          if (index >= 3) {
            // el.style.display = 'none';
            el.classList.add('list-close');
          }
        })
      }
    }

    window.addEventListener('resize', (e) => {
      if (window.screen.availWidth < 481 && window.screen.availWidth > 390) {
        if (blogs.length > 4) {
          blogs.forEach((el, index) => {
            if (index >= 4) {
              el.classList.add('list-close');
            } else {
              el.classList.remove('list-close');
            }
          })
        }
      } else {
        if (blogs.length > 3) {
          blogs.forEach((el, index) => {
            if (index >= 3) {
              el.classList.add('list-close');
            } else {
              el.classList.remove('list-close');
            }
          })
        }
      }
    })
  
    
  });
})
