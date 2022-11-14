const sectionSkd = document.querySelector('.skd__about');

const titles = [...document.querySelectorAll('.about__values-title'), ...document.querySelectorAll('.skd__about-where-list-title')]




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

  // const desc = [...document.querySelectorAll('.skd__about-where-desc')]

  const skudList = [...document.querySelectorAll('.skd__skud-list-part')];


  

  const createObserverDesc = () => {
    // создаем экземпляр IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // если целевой элемент находится в зоне видимости
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('reverse')) {
              entry.target.classList.add('fromRightIn')
              entry.target.classList.remove('fromRightOut')
            } else {

            entry.target.classList.remove('fromLeftOut')
            entry.target.classList.add('fromLeftIn')
            }
           
          } else {

            if (entry.target.classList.contains('reverse')) {
              entry.target.classList.remove('fromRightIn')
              entry.target.classList.add('fromRightOut')
            } else {

            entry.target.classList.add('fromLeftOut')
            entry.target.classList.remove('fromLeftIn')
            }
            
          }
        });
      },
      {
        threshold: 0.3,
      }
    );
  
    // находим все секции
    // начинаем за ними наблюдать
    
    skudList.forEach(el => {
      observer.observe(el);
    })
  };

  if (sectionSkd) {

    createObserverDesc();
  }


  const advListImg = [...document.querySelectorAll('.about__desc-list-part-img')]

  const createObserverAdvList = () => {
    // создаем экземпляр IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // если целевой элемент находится в зоне видимости
          if (entry.isIntersecting) {
            
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'scale(1)';
           
          } else {

            entry.target.style.opacity = 0;
            entry.target.style.transform = 'scale(1.1)';
            
          }
        });
      },
      {
        threshold: 0.3,
      }
    );
  
    // находим все секции
    // начинаем за ними наблюдать
    
    advListImg.forEach(el => {
      observer.observe(el);
    })
  };

  if (sectionSkd) {

    createObserverAdvList();
  }
})