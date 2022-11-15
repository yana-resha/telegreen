const telegreen = document.querySelector('.hero')
const header = document.querySelector('.header');
const headerRelative = document.querySelector('.header__relative')

document.addEventListener('DOMContentLoaded', () => {
  const createObserver = () => {
    // создаем экземпляр IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // если целевой элемент находится в зоне видимости
          if (entry.isIntersecting) {
            headerRelative.classList.remove('padding-un')
            header.classList.remove('fixed-header')
          } else {
            header.classList.add('fixed-header')
            header.classList.add('header-on-top')
            headerRelative.classList.add('padding-un')
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
     observer.observe(telegreen);
  };

  if (telegreen) {
    createObserver();
  } 
  else {
    header.classList.add('fixed-header')
    header.classList.add('header-on-top')
    headerRelative.classList.add('padding-un')
  }
  
})
