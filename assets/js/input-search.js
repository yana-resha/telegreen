document.addEventListener('DOMContentLoaded', () => {
  jQuery(document).ready(function($){
    const afishaList = $('.afisha__list')[0];
    const searchInput = $('.afisha__search-input')[0];

    if (searchInput) {

      searchInput.addEventListener('input', (e) => {
        if (e.target.value.length > 0) {
  
          for (let i of afishaList.children) {
  
            let needContent = i.getAttribute('data-key').toUpperCase();
            i.style.display = 'flex';
            if (!needContent.includes(e.target.value.toUpperCase())) {
              i.style.display = 'none';
            } else {
              i.style.display = 'flex';
            }
          }
        } else {
          for (let i of afishaList.children) {
            i.style.display = 'flex';
          }
        }
      })
    }
  })
})