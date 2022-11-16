jQuery(document).ready(function($){

  const gridText = Array.from($('.system-advantages__grid-content'));

    const createObserver = () => {
      // создаем экземпляр IntersectionObserver
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const parent = $(entry.target).parent('.system-adv-container')[0];
            const img = $(parent).find('.system-advantages__grid-img')[0];
            // если целевой элемент находится в зоне видимости
            if (entry.isIntersecting) {
              if (!entry.target.classList.contains('grid-reverse')) {
                entry.target.classList.remove('fromTopOut')
                entry.target.classList.add('fromTopIn')
                img.classList.remove('fromTopOut')
                img.classList.add('fromTopIn')
              } else {
                entry.target.classList.remove('fromBottomOut')
                entry.target.classList.add('fromBottomIn')
                img.classList.remove('fromBottomOut')
                img.classList.add('fromBottomIn')
              }
             
            } else {
              if (!entry.target.classList.contains('grid-reverse')) {
              entry.target.classList.add('fromTopOut')
              entry.target.classList.remove('fromTopIn')
              img.classList.add('fromTopOut')
              img.classList.remove('fromTopIn')
              } else {
                entry.target.classList.add('fromBottomOut')
                entry.target.classList.remove('fromBottomIn')
                img.classList.add('fromBottomOut')
                img.classList.remove('fromBottomIn')

              }
            }
          });
        },
        {
          // процент пересечения целевого элемента с областью просмотра
          // 10%
          threshold: 0.4,
        }
      );
    
      // находим все секции
      // начинаем за ними наблюдать
      gridText.forEach(el => observer.observe(el));
    };
  
    if (gridText.length > 0) {
  
      createObserver();
    }

})
  
  
 
//   if ($(window).width() > 1265) {
//     const list = $('.system__list')[0];
//     const listContainer = $('.system__container')[0];
//     const width = $(listContainer).width() + 120;
//     list.style.width = `${width}px`
//     // const left = ($(listContainer).width() - $(list).width()) / 2;
//     // const left = ($(window).width() - $(list).width()) ;
//     const left = Math.max(0, (($(list).outerWidth() - $(listContainer).width()) / 2));
    
//     list.style.left = `-${left}px`;
//     list.style.rigth = `${left}px`
//     console.log(left)
//   }
// });