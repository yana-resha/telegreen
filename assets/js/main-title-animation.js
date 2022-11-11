

jQuery(document).ready(function($){

    const title = $('.hero__title')[0];
    const bottomDesc = $('.hero__bottom-description')[0];
    const topDesc = $('.hero__top-description')[0];

    const salesTitle = $('.sales-hero__title')[0];
    const salesDesc = $('.sales-hero__bottom-description')[0];

    const aboutCompanyTitle = $('.about__container').find('.sales__block-title-container')[0];
    const aboutCompanyDesc = $('.about__desc-container')[0];

    const skdTitle = $('.skd__about-container').find('.sales__block-title-container')[0];

    if (topDesc) {

        topDesc.classList.remove('fromTopOut');
        topDesc.classList.add('fromTopIn');
    }

    if (title) {
      // scaleUpOut
      // scaleUpIn
      title.classList.remove('fromTopOut');
      title.classList.add('fromTopIn');
    }

    if (bottomDesc) {

      bottomDesc.classList.remove('fromBottomOut');
      bottomDesc.classList.add('fromBottomIn');
    }

    if (salesTitle) {
        salesTitle.classList.remove('fromTopOut');
        salesTitle.classList.add('fromTopIn');
    }

    if (salesDesc) {
        salesDesc.classList.remove('fromBottomOut');
        salesDesc.classList.add('fromBottomIn');
    }

    if (aboutCompanyTitle) {
      aboutCompanyTitle.classList.remove('fromRightOut');
      aboutCompanyTitle.classList.add('fromRightIn');
    }

    if (aboutCompanyDesc) {
      aboutCompanyDesc.classList.remove('fromLeftOut');
      aboutCompanyDesc.classList.add('fromLeftIn');
    }

    if (skdTitle) {
      
      skdTitle.classList.remove('fromRightOut');
      skdTitle.classList.add('fromRightIn');
    }

})