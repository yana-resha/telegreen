document.addEventListener('DOMContentLoaded', () => {
  jQuery(document).ready(function($){

    const contactTitles = Array.from($('.contact-page__contact-bold'));

    const createObserverTitles = () => {
      // создаем экземпляр IntersectionObserver
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // если целевой элемент находится в зоне видимости
            if (entry.isIntersecting) {
              entry.target.classList.remove('fromRightOut')
              entry.target.classList.add('fromRightIn')
             
            } else {
              entry.target.classList.add('fromRightOut')
              entry.target.classList.remove('fromRightIn')
            }
          });
        },
        {
          // процент пересечения целевого элемента с областью просмотра
          // 10%
          threshold: 0.9,
        }
      );
    
      // находим все секции
      // начинаем за ними наблюдать
  
  
      contactTitles.forEach(el => {

        observer.observe(el);
      })
  
      
  
    };
  
    if (contactTitles.length > 0) {
  
      createObserverTitles();
    }

    const contactText = Array.from($('.contact-page__contact-desc'));

    const createObserverText = () => {
      // создаем экземпляр IntersectionObserver
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // если целевой элемент находится в зоне видимости
            if (entry.isIntersecting) {
              entry.target.classList.remove('fromLeftOut')
              entry.target.classList.add('fromLeftIn')
             
            } else {
              entry.target.classList.add('fromLeftOut')
              entry.target.classList.remove('fromLeftIn')
            }
          });
        },
        {
          // процент пересечения целевого элемента с областью просмотра
          // 10%
          threshold: 0.3,
        }
      );
    
      // находим все секции
      // начинаем за ними наблюдать
  
  
      contactText.forEach(el => {

        observer.observe(el);
      })
  
      
  
    };
  
    if (contactText.length > 0) {
  
      createObserverText();
    }

    
    
  })
})