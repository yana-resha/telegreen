jQuery(document).ready(function($){

  let zIndex1 = 2;
  let zIndex2 = 0;
  const part = Array.from($('.rewievs__list-part-img-block'));

  part.forEach(el => {
    zIndex1 += 10;
    zIndex2 += 10;
    const imgGroup = Array.from($(el).find('img'))
    imgGroup[0].style.zIndex = `${zIndex1}`;
    imgGroup[1].style.zIndex = `${zIndex2}`;
  })
});