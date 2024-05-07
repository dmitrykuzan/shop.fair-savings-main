export const newDiscountSlider = () => {
  let newDiscountSlider = new Swiper(".new__discount-slider", {
    slidesPerView: 1.1,
    spaceBetween: 15,
    autoHeight: true,
    navigation: {
      nextEl: ".discount__button-next",
      prevEl: ".discount__button-prev",
    },
    pagination: {
      el: ".discount__pagination",
      dynamicBullets: true,
    },
    breakpoints: {
      1680: {
        slidesPerView: 3.1,
        spaceBetween: 28,
      },
      992: {
          spaceBetween: 20,
          slidesPerView: 2.1,
          autoHeight: true,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 15,
      }
    },
  });
}