

jQuery(document).ready(function($){

    const title = $('.hero__title')[0];
    const bottomDesc = $('.hero__bottom-description')[0];
    const topDesc = $('.hero__top-description')[0];

    topDesc.classList.remove('fromTopOut');
    topDesc.classList.add('fromTopIn');
    title.classList.remove('scaleUpOut');
    title.classList.add('scaleUpIn');
    bottomDesc.classList.remove('fromBottomOut');
    bottomDesc.classList.add('fromBottomIn');

})