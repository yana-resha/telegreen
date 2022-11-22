document.addEventListener('DOMContentLoaded', () => {
  jQuery(document).ready(function($){

    const postTitles = Array.from($('.blog-page__blog-content-bold'));

    const createObserverTitles = () => {
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
  
  
      postTitles.forEach(el => {

        observer.observe(el);
      })
  
      
  
    };
  
    if (postTitles.length > 0) {
  
      createObserverTitles();
    }

    const postText = Array.from($('.blog-page__blog-content-desc'));

    const createObserverText = () => {
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
          threshold: 0.3,
        }
      );
    
      // находим все секции
      // начинаем за ними наблюдать
  
  
      postText.forEach(el => {

        observer.observe(el);
      })
  
      
  
    };
  
    if (postText.length > 0) {
  
      // createObserverText();
    }

    
    
  })
})