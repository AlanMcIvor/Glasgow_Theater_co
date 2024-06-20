// carousel.js
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll("[data-slides] .slide");
  let currentIndex = 0;
  const intervalTime = 3500; // Time in milliseconds for auto-play interval
  let autoPlayInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? "1" : "0";
      if (i === index) {
        slide.setAttribute("data-active", "");
      } else {
        slide.removeAttribute("data-active");
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // Start the auto-play
  autoPlayInterval = setInterval(nextSlide, intervalTime);

  //Stop auto-play on hover and restart on mouse leave
  const carousel = document.querySelector(".carousel");
  carousel.addEventListener("mouseover", () => {
    clearInterval(autoPlayInterval);
  });

  carousel.addEventListener("mouseleave", () => {
    autoPlayInterval = setInterval(nextSlide, intervalTime);
  });

  // Initial display
  showSlide(currentIndex);
});
