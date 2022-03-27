const slider = $(".bannerswiper");
slider.swiper({
  loop: true,
  nextButton: '.ik-m-recommend-specialbanner .swiper-button-next',
  prevButton: '.ik-m-recommend-specialbanner .swiper-button-prev',
  pagination: '.swiper-pagination',
  paginationClickable: true,
  direction: 'horizontal',
  loopPreventsSlide: false,
  freeMode: true,
  slidesPerView: 'auto',
  // autoplay: 1000,
  releaseOnEdges: false,
  slidesOffsetBefore: 12,
  onSlideChangeEnd: (s) => { s.fixLoop(); }
});


var bannerslider = new Swiper('.bannerslider', {
  loop: true,
  nextButton: '.ik-m-recommend-specialslide .swiper-button-next',
  prevButton: '.ik-m-recommend-specialslide .swiper-button-prev',
  pagination: '.ik-m-recommend-specialslide--pagination',
  paginationClickable: true,
});