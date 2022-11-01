const li = Array.from(document.querySelectorAll('.header__nav-list-part'));

const buttonCategory = document.querySelector('.category-open');
const categoryList = document.querySelector('.category-list')

const allActiveButton = Array.from(document.querySelectorAll('.btn-list'))

const allDropdown = Array.from(document.querySelectorAll('.nav-dropdown'))
li.forEach(el => {
  
  el.addEventListener('click', (e) => {
    const button = el.querySelector('.btn-list');
    const drop = el.querySelector('.nav-dropdown');
    if (button) {

      allDropdown.forEach(el => {
        if (el !== drop) {
          el.classList.remove('nav-dropdown-active')
        }
      })

      button.classList.toggle('active');
      drop.classList.toggle('nav-dropdown-active');
        

      drop.addEventListener('click', (e) => {
        e.stopPropagation();
        drop.classList.add('nav-dropdown-active');
      })
    }
    if (!button) {
      allDropdown.forEach(el => {
       el.classList.remove('nav-dropdown-active')
      })
    }
    allActiveButton.forEach(el => {
      if (el !== button && el.classList.contains('active')) {
        el.classList.remove('active')
        
      }
    })
      

    
  })
})


// buttonCategory.addEventListener('click', () => {
//   buttonCategory.classList.toggle('active')
//   categoryList.classList.toggle('category-list-open');
// })

