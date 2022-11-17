document.addEventListener('DOMContentLoaded', () => {

  jQuery(document).ready(function($){

    const catalogListTitle = [...Array.from($('.eq-catalog__title'))];

    const catalogDesc = [...Array.from($('.eq-catalog_product-desc'))];

    const createObserver = () => {
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
              entry.target.classList.remove('fromLefIn')
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
  
  
      catalogListTitle.forEach(el => {

        observer.observe(el);
      })
  
      
  
    };
  
    if (catalogListTitle.length > 0) {
  
      createObserver();
    }

    const createObserverDesc = () => {
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
              entry.target.classList.remove('fromLefIn')
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
  
  
      catalogDesc.forEach(el => {

        observer.observe(el);
      })
  
      
  
    };
  
    if (catalogDesc.length > 0) {
  
      createObserverDesc();
    }
  
  


  })

}) 