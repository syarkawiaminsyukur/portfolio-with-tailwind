// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const toTop = document.querySelector("#to-top");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// navbar-fixed
window.onscroll = function () {
  document.querySelector("header").classList.toggle("navbar-fixed", window.scrollY > 0);
  if (window.scrollY > 0) {
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// klik diluar navbar

window.addEventListener("click", function (e) {
  if (e.target != navMenu && e.target != hamburger) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// darkmode toggle
const darkToggle = document.querySelector("#dark-mode");

darkToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
