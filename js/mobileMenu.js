// this script controls the mobile menu

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const mobileMenu = document.querySelector(".mobile_menu");

toggleBtn.onclick = function () {
  mobileMenu.classList.toggle("open");
  const isOpen = mobileMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
