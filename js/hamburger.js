const navIcons = document.querySelector(".nav__icons");
const navMenuFlex = document.querySelector(".nav-menu__flex");

navIcons.addEventListener("click", () => {
  navMenuFlex.classList.toggle("active");
  console.log("hi");
});
