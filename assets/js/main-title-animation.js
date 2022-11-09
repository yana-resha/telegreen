

jQuery(document).ready(function($){

    const title = $('.hero__title')[0];
    const bottomDesc = $('.hero__bottom-description')[0];
    const topDesc = $('.hero__top-description')[0];

    const salesTitle = $('.sales-hero__title')[0];
    const salesDesc = $('.sales-hero__bottom-description')[0];

    console.log(salesTitle)
    if (topDesc) {

        topDesc.classList.remove('fromTopOut');
        topDesc.classList.add('fromTopIn');
    }

    if (title) {
        
      title.classList.remove('scaleUpOut');
      title.classList.add('scaleUpIn');
    }

    if (bottomDesc) {

      bottomDesc.classList.remove('fromBottomOut');
      bottomDesc.classList.add('fromBottomIn');
    }

    if (salesTitle) {
        salesTitle.classList.remove('scaleUpOut');
        salesTitle.classList.add('scaleUpIn');
    }

    if (salesDesc) {
        salesDesc.classList.remove('fromBottomOut');
        salesDesc.classList.add('fromBottomIn');
    }

})