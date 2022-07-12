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

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    //if pageY offset > 100px
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
