document.addEventListener('DOMContentLoaded', () => {
  const scrollBtn = document.querySelector('.scroll-to-top');
  if (scrollBtn) {
    scrollBtn.style.zIndex = 50;
  }
  if (window.pageYOffset > 300 && scrollBtn) {
    scrollBtn.classList.add('block')
  } 
  if (window.pageYOffset < 300 && scrollBtn) {
    scrollBtn.classList.remove('block')
  } 
  document.addEventListener('scroll', () => {
    
    if (window.pageYOffset > 300  && scrollBtn) {
      scrollBtn.classList.add('block')
    }
    if (window.pageYOffset < 300  && scrollBtn) {
      scrollBtn.classList.remove('block')
    }
  })

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
})