export const popularSlider = () => {
  let popularSlider = new Swiper(".popular__slider", {
    slidesPerView: 2,
    initialSlide: 0,
    spaceBetween: 10,
    navigation: {
      nextEl: ".popular__navigation-button--next",
      prevEl: ".popular__navigation-button--prev",
    },
    pagination: {
      el: ".popular__pagination",
      dynamicBullets: true,
    },
    breakpoints: {
      1560: {
        slidesPerView: 7.6,
        spaceBetween: 28,
        initialSlide: 0,
      },
      1250: {
        slidesPerView: 7.6,
        spaceBetween: 20,
      },
      992: {
          spaceBetween: 20,
          slidesPerView: 5,
      },
      767: {
        spaceBetween: 15,
        slidesPerView: 4,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 12,
      }
    },
  });
}