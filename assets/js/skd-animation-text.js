const sectionSkd = document.querySelector('.skd__about');

const titles = [...document.querySelectorAll('.about__values-title'), ...document.querySelectorAll('.skd__about-where-list-title')]

console.log(titles)



document.addEventListener('DOMContentLoaded', () => {
  const createObserver = () => {
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
            // fromRightOut
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


    titles.forEach(el => {

      observer.observe(el);
    })

    

  };

  if (sectionSkd) {

    createObserver();
  }

  // const createObserverClient = () => {
  //   // создаем экземпляр IntersectionObserver
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         // если целевой элемент находится в зоне видимости
  //         if (entry.isIntersecting) {
  //           const title = document.querySelector('.clients__title')
  //           title.classList.remove('scaleUpOut')
  //           title.classList.add('scaleUpIn')
  //           const list = document.querySelector('.clients__list');
  //           list.classList.remove('fromBottomOut')
  //           list.classList.add('fromBottomIn')
           
  //         } else {
  //           const title = document.querySelector('.clients__title')
  //           title.classList.add('scaleUpOut')
  //           title.classList.remove('scaleUpIn')
  //           const list = document.querySelector('.clients__list');
  //           list.classList.add('fromBottomOut')
  //           list.classList.remove('fromBottomIn')
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.3,
  //     }
  //   );
  
  //   // находим все секции
  //   // начинаем за ними наблюдать
    
  //     observer.observe(clientSection);
  // };

  // if (clientSection) {

  //   createObserverClient();
  // }
})