
document.addEventListener('DOMContentLoaded', () => {

  jQuery(document).ready(function($){
    const fixedBtn = $('.fixed-btn')[0] 
    const vacationSection = $('.vacation')[0];
    if (vacationSection) {
      fixedBtn.style.display = 'none';
    } else {
      fixedBtn.style.display = 'initial';
    }
  })
})
