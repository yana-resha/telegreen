

jQuery(document).ready(function($){

    const title = $('.hero__title')[0];
    const bottomDesc = $('.hero__bottom-description')[0];
    const topDesc = $('.hero__top-description')[0];

    const salesTitle = $('.sales-hero__title')[0];
    const salesDesc = $('.sales-hero__bottom-description')[0];

    const aboutCompanyTitle = $('.about__container').find('.sales__block-title-container')[0];
    const aboutCompanyDesc = $('.about__desc-container')[0];

    const skdTitle = $('.skd__about-container').find('.sales__block-title-container')[0];

    const salesTitleTwo = $('.sales__block-title-container')[0];

    const vacationTitle = $('.vacation__article-title')[0];

    const catalogDesc = $('.eq-category__description')[0];
    const buyersListTitle = Array.from($('.buyers__list-title'));

    const buyersPayTitle = $('.buyers-pay__main-title-container')[0];

    const faqTitle = $('.faq__title-container')[0];
    const faqDesc = $('.faq__desc-container')[0];

    const blogPageTitle = $('.blog-page__container-title')[0]



    if (topDesc) {

        topDesc.classList.remove('fromLeftOut');
        topDesc.classList.add('fromLeftIn');
    }

    if (title) {
      title.classList.remove('fromRightOut');
      title.classList.add('fromRightIn');
    }

    if (bottomDesc) {

      bottomDesc.classList.remove('fromLeftOut');
      bottomDesc.classList.add('fromLeftIn');
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

    if (salesTitleTwo) {
      salesTitleTwo.classList.remove('fromRightOut');
      salesTitleTwo.classList.add('fromRightIn');
    }

    if (vacationTitle) {
      vacationTitle.classList.remove('fromLeftOut');
      vacationTitle.classList.add('fromLeftIn');
    }

    if (catalogDesc) {

      catalogDesc.classList.remove('fromLeftOut');
      catalogDesc.classList.add('fromLeftIn');

    }

    if (buyersListTitle.length > 0) {
      buyersListTitle.forEach(el => {
        el.classList.remove('fromRightOut');
        el.classList.add('fromRightIn');

      })
    }

    if (buyersPayTitle) {
      buyersPayTitle.classList.remove('fromRightOut');
      buyersPayTitle.classList.add('fromRightIn');
    }

    if (faqTitle) {
      faqTitle.classList.remove('fromRightOut');
      faqTitle.classList.add('fromRightIn');
    }

    if (faqDesc) {
      faqDesc.classList.remove('fromLeftOut');
      faqDesc.classList.add('fromLeftIn');
    }

    if (blogPageTitle) {

      blogPageTitle.classList.remove('fromRightOut');
      blogPageTitle.classList.add('fromRightIn');

    }
})