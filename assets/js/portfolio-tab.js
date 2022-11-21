jQuery(document).ready(function($){

  const openProjectSlide = Array.from($('.portfolio__swiper-btn'));
  
  const openProjectDesc = Array.from($('.portfolio__description-block'));

  if (openProjectSlide.length > 0) {
    openProjectSlide.forEach(el => {
      if ($(el).attr('data-project') == '1') {
        el.classList.add('active');
      }
      el.addEventListener('click', (e) => {
        const elAttr = $(el).attr('data-project');
        openProjectSlide.forEach(element => element.classList.remove('active'));
        openProjectDesc.forEach(element => element.classList.remove('active'))
        el.classList.add('active');
        const desc = openProjectDesc.filter(desc => $(desc).attr('data-project-desc') == elAttr);
        desc[0].classList.add('active');

      })
    })

    openProjectDesc.forEach(el => {
      if ($(el).attr('data-project-desc') == '1') {
        el.classList.add('active')
      }
    })
  }
    // .attr('data-project')


  // if (openProjectSlide[0]) {

  //   const allOpenProjectSlide = Array.from($('.portfolio__swiper-btn'));

  //   allOpenProjectSlide.forEach(el => {
  //     el.addEventListener('click', (e) => {
  //       console.log(el)
  //     })
  //   })

  // }

  


 })