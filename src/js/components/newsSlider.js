export const newsSlider = () => {
  let newsSlider = new Swiper(".news__slider", {
    spaceBetween: 15,
    slidesPerView: 1.1,
    pagination: {
      el: ".news__pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".news__navigation-button--next",
      prevEl: ".news__navigation-button--prev",
    },
    breakpoints: {
      1280: {
        slidesPerView: 5.1,
        spaceBetween: 28,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    }
  });
}