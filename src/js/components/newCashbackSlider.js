export const newCashbackSlider = () => {
  let newCashbackSlider = new Swiper(".new__slider", {
    slidesPerView: 1.1,
    spaceBetween: 15,
    autoHeight: true,
    navigation: {
      nextEl: ".new__button-next",
      prevEl: ".new__button-prev",
    },
    pagination: {
      el: ".new__pagination",
      dynamicBullets: true,
    },
    breakpoints: {
      1680: {
        slidesPerView: 4.1,
        spaceBetween: 28,
      },
      1250: {
        slidesPerView: 3.1,
        spaceBetween: 20,
      },
      992: {
          spaceBetween: 20,
          slidesPerView: 2,
          autoHeight: true,
      },
      767: {
        spaceBetween: 15,
        slidesPerView: 3,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 15,
      }
    },
  });
}