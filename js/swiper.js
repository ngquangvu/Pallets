var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  breakpoints: {
      "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
      },
      "@0.75": {
          slidesPerView: 2,
          spaceBetween: 14,
      },
      "@1.00": {
          slidesPerView: 2,
          spaceBetween: 14,
      },
      "@1.50": {
          slidesPerView: 4,
          spaceBetween: 20,
      },
  },
});