const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

document.onclick = function (e) {
  if (e.target.id !== "nav" && e.target.id !== "toggle") {
    nav.classList.remove("nav--visible");
    navToggle.classList.remove("active-bar");
  }
};
navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
  navToggle.classList.toggle("active-bar");
  if (nav.classList.contains("nav--visible")) {
    nav.classList.add("active");
  }
});

// scrool to top with js
let upTuTop = document.getElementById("back-to-top");
window.onscroll = function () {
  this.scrollY >= 200
    ? upTuTop.classList.add("show")
    : upTuTop.classList.remove("show");
};
upTuTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const boxes = document.querySelectorAll(".fade");
const checkBoxes = () => {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
};
checkBoxes();
window.addEventListener("scroll", checkBoxes);

const dark = document.querySelector(".logo-dark-theme");
const light = document.querySelector(".logo-light-theme");
const btn = document.getElementById("dark-mode-toggle");
btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  dark.classList.toggle("show-dark");
  light.classList.toggle("hide-dark");
});
