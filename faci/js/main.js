$(function(){
	var swiper = new Swiper('.case-box', {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.case-next',
        prevEl: '.case-prev',
      },
    });
    var swiper = new Swiper('.news-box', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.news-next',
        prevEl: '.news-prev',
      },
    });
})
