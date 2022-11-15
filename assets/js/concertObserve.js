
const systemAdvList = [...document.querySelectorAll('.system-advantages__container')]




document.addEventListener('DOMContentLoaded', () => {
  jQuery(document).ready(function($){
  const createObserver = () => {
    // создаем экземпляр IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          
          
          
          const entryGrid = $(entry.target).find('.system-adv-container')[0];
          const gridReverse = $(entryGrid).find('.grid-reverse')[0]
          // если целевой элемент находится в зоне видимости
          if (entry.isIntersecting) {
            if (!entryGrid.classList.contains('desc-container') && !entryGrid.classList.contains('title-container')) {
               if (gridReverse) {
                 entry.target.classList.remove('fromRightOut')
                 entry.target.classList.add('fromRightIn')
               } else {
                entry.target.classList.remove('fromLeftOut')
                entry.target.classList.add('fromLeftIn')

               }
            }
           
          } else {
            if (!entryGrid.classList.contains('desc-container') && !entryGrid.classList.contains('title-container')) {
            if (gridReverse) {

              entry.target.classList.add('fromRightOut')
              entry.target.classList.remove('fromRightIn')
            } else {
              
              entry.target.classList.add('fromLeftOut')
              entry.target.classList.remove('fromLeftIn')
            }
            // fromRightOut
            }
          }
        

        });
      },
      {
        // процент пересечения целевого элемента с областью просмотра
        // 10%
        threshold: 0.5,
      }
    );
  
    // находим все секции
    // начинаем за ними наблюдать


    systemAdvList.forEach(el => {

      observer.observe(el);
    })

    

  };

  if (systemAdvList.length > 0) {

    createObserver();
  }

  })
})