var swiper = new Swiper('.mySwiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
});
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 5,
    spaceBetween: 100,
    loop: true,
    centeredSlides: true,
    on: {
        init: function () {
          this.slides[this.activeIndex].style.transform = 'scaleY(1.1) translateY(4%)';
        },
        slideChange: function () {
          this.slides.forEach((slide) => {
            slide.style.transform = 'scaleX(1)';
          });
          this.slides[this.activeIndex].style.transform = 'scaleY(1.1) translateY(4%)';
        }
      }
  });