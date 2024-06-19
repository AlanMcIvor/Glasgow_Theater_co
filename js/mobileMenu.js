const navbar = document.querySelector(".navbar");
const burger = document.querySelector(".burger_container");

burger.addEventListener("click", function () {
  navbar.classList.toggle("toggle");
});
