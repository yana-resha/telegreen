const listPart = Array.from(document.querySelectorAll('.advantages__list-part'));


document.addEventListener('DOMContentLoaded', () => {
  const createObserver = () => {
    // создаем экземпляр IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // если целевой элемент находится в зоне видимости
          if (entry.isIntersecting) {
            jQuery(document).ready(function($){
              const title = $(entry.target).find('.advantages__list-part-content-title')[0];
              title.classList.add('fromLeftIn');
              title.classList.remove('fromLeftOut');
              const desc = $(entry.target).find('.advantages__list-part-content-description')[0];
              desc.classList.remove('fromRightOut');
              desc.classList.add('fromRightIn');

              const icon = $(entry.target).find('.advantages__list-part-icon')[0];
              icon.classList.remove('fromTopOut')
              icon.classList.add('fromTopIn')
              
            })
          } else {
            jQuery(document).ready(function($){
              const title = $(entry.target).find('.advantages__list-part-content-title')[0];
              const desc = $(entry.target).find('.advantages__list-part-content-description')[0];

              title.classList.remove('fromLeftIn');
              title.classList.add('fromLeftOut');
              desc.classList.remove('fromRightIn');
              desc.classList.add('fromRightOut');

              const icon = $(entry.target).find('.advantages__list-part-icon')[0];
              icon.classList.add('fromTopOut')
              icon.classList.remove('fromTopIn')
            })
          }
        });
      },
      {
        // процент пересечения целевого элемента с областью просмотра
        // 10%
        threshold: 0.8,
      }
    );
  
    // находим все секции
    // начинаем за ними наблюдать
    
    listPart.forEach(el => {

      observer.observe(el);
    })
  };
  
  createObserver();
  })


  const valueList = Array.from(document.querySelectorAll('.about__value-list-part'));

  document.addEventListener('DOMContentLoaded', () => {
    const createObserver = () => {
      // создаем экземпляр IntersectionObserver
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // если целевой элемент находится в зоне видимости
            if (entry.isIntersecting) {
              jQuery(document).ready(function($){
                console.log(entry.target)
                entry.target.classList.remove('fromRightOut');
                entry.target.classList.add('fromRightIn');
                
              })
            } else {
              jQuery(document).ready(function($){
                entry.target.classList.add('fromRightOut');
                entry.target.classList.remove('fromRightIn');
              })
            }
          });
        },
        {
          // процент пересечения целевого элемента с областью просмотра
          // 10%
          threshold: 0.8,
        }
      );
    
      // находим все секции
      // начинаем за ними наблюдать
      
      valueList.forEach(el => {
  
        observer.observe(el);
      })
    };
    
    if (valueList) {

      createObserver();
    }
    })
