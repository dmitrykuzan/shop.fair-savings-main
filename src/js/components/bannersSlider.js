export const bannersSlider = () => {
  let bannersSlider = new Swiper(".banners", {
    slidesPerView: 1.1,
    spaceBetween: 8,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
    },

    breakpoints: {
      375: {
        slidesPerView: 1.1,
        initialSlide: 2,
      },
      575: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 2.5,
        spaceBetween: 15,
      },
      1320: {
        spaceBetween: 28,
        slidesPerView: 3.6,
        initialSlide: 2,
      },
    },
  });
};
