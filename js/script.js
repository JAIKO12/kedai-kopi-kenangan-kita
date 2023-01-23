// toggle class active

const navbarNav = document.querySelector(".navbar-nav");
const burgerMenu = document.querySelector("#hamburger-menu");

// keika hamburger menu diklik
burgerMenu.onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan side bar

document.addEventListener("click", function (e) {
  if (!burgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
