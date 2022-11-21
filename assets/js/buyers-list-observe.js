


document.addEventListener('DOMContentLoaded', () => {
  jQuery(document).ready(function($){
 
    const buyersListPart = [...Array.from($('.buyers__to-buy-list').find('li')), ...Array.from($('.buyers__to-return-list').find('li'))];

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
  
  
      buyersListPart.forEach(el => {

        observer.observe(el);
      })
  
      
  
    };
  
    if (buyersListPart.length > 0) {
  
      // createObserver();
    }

    const buyersListPartPay = [...Array.from($('.buyers-pay__process-list-part'))];

    const createObserverPay = () => {
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
  
  
      buyersListPartPay.forEach(el => {

        observer.observe(el);
      })
  
      
  
    };
  
    if (buyersListPartPay.length > 0) {
  
      createObserverPay();
    }



   })
})