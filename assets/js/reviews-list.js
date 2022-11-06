
document.addEventListener('DOMContentLoaded', () => {

  jQuery(document).ready(function($){

    let zIndex1 = 2;
    let zIndex2 = 0;
    const part = Array.from($('.rewievs__list-part'))
    part.forEach(el => {
      zIndex1 +=10;
      zIndex2 += 10;
      const img = $(el).find('.rewievs__list-part-img-block')[0];
      const back = $(el).find('.rewievs__list-part-background')[0];
      img.style.zIndex = zIndex1;
      back.style.zIndex = zIndex2;
    })
  });
})
