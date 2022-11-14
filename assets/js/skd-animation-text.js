




document.addEventListener('DOMContentLoaded', () => {
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


      observer.observe(systemTitle);

    

  };

  if (systemTitle) {

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