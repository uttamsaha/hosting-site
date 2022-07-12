var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
