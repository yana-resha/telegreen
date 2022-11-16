jQuery(document).ready(function($){

    const serviceList = Array.from($('.services__list-part'));

    const createObserver = () => {
      // создаем экземпляр IntersectionObserver
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const parent = $(entry.target).parent('.system-adv-container')[0];
            const img = $(parent).find('.system-advantages__grid-img')[0];
            // если целевой элемент находится в зоне видимости
            if (entry.isIntersecting) {
                entry.target.classList.remove('fromBottomOut')
                entry.target.classList.add('fromBottomIn')
        
            } else {
              entry.target.classList.add('fromBottomOut')
              entry.target.classList.remove('fromBottomIn');

  
            }
          });
        },
        {
          // процент пересечения целевого элемента с областью просмотра
          // 10%
          threshold: 0.2,
        }
      );
    
      // находим все секции
      // начинаем за ними наблюдать
      serviceList.forEach(el => observer.observe(el));
    };
  
    if (serviceList.length > 0) {
  
      createObserver();
    }

  })
