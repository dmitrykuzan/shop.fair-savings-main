export const similarSlider = () => {
  let similarSlider = new Swiper(".similar__slider", {
    slidesPerView: 1.1,
    spaceBetween: 28,
    navigation: {
      nextEl: ".similar__navigation-button--next",
      prevEl: ".similar__navigation-button--prev",
    },
    pagination: {
      el: ".similar__pagination",
      dynamicBullets: true,
    },
    breakpoints: {
      1680: {
        slidesPerView: 5,
        spaceBetween: 28,
      },
      1250: {
        slidesPerView: 4,
        // spaceBetween: 20,
      },
      992: {
          slidesPerView: 3,
      },
      // 767: {
      //   slidesPerView: 2,
      // },
      575: {
        slidesPerView: 2,
        spaceBetween: 15,
      }
    },
  });
}