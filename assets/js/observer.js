const telegreen = document.querySelector('.hero')
const header = document.querySelector('.header');
const createObserver = () => {
  // создаем экземпляр IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // если целевой элемент находится в зоне видимости
        if (entry.isIntersecting) {
 
          header.classList.remove('fixed-header')
        } else {
          header.classList.add('fixed-header')
          header.classList.add('header-on-top')
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
   observer.observe(telegreen);
};

createObserver();