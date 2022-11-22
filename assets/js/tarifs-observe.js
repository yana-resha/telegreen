document.addEventListener('DOMContentLoaded', () => {
  jQuery(document).ready(function($){

    const tarifTitles = Array.from($('.tarifs__list-part-title'));

    const createObserver = () => {
      // создаем экземпляр IntersectionObserver
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // если целевой элемент находится в зоне видимости
            if (entry.isIntersecting) {
              entry.target.classList.remove('scaleDownOut')
              entry.target.classList.add('scaleDownIn')
              
             
            } else {
              entry.target.classList.add('scaleDownOut')
              entry.target.classList.remove('scaleDownIn')
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
  
  
      tarifTitles.forEach(el => {

        observer.observe(el);
      })
  
      
  
    };
  
    if (tarifTitles.length > 0) {
  
      createObserver();
    }

    const tarifText = Array.from($('.tarifs__list-part-content-bottom-commission'));

    const createObserverText = () => {
      // создаем экземпляр IntersectionObserver
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // если целевой элемент находится в зоне видимости
            if (entry.isIntersecting) {
              entry.target.classList.remove('scaleDownOut')
              entry.target.classList.add('scaleDownIn')
             
            } else {
              entry.target.classList.add('scaleDownOut')
              entry.target.classList.remove('scaleDownIn')
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
  
  
      tarifText.forEach(el => {

        observer.observe(el);
      })
  
      
  
    };
  
    if (tarifText.length > 0) {
  
      // createObserverText();
    }

    
    
  })
})