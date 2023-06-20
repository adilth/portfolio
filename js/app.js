//nav bar
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

// scroll to top with js
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
//scroll behavior
const boxes = document.querySelectorAll(".fade");
const checkBoxes = () => {
  const triggerBottom = (window.innerHeight / 4) * 3;
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
//dark mode
const dark = document.querySelector(".logo-dark-theme");
const light = document.querySelector(".logo-light-theme");
const btn = document.getElementById("dark-mode-toggle");
let darkMode = localStorage.getItem("darkMode");
const enableDarkMode = () => {
  dark.classList.add("show-dark");
  document.body.classList.add("dark-theme");
  light.classList.add("hide-dark");
  localStorage.setItem("darkMode", "enabled");
};
const disableDarkMode = () => {
  // dark.classList.remove("show-dark");
  document.body.classList.remove("dark-theme");
  localStorage.setItem("darkMode", null);
  // light.classList.remove("hide-dark");
};
if (darkMode === "enabled") {
  enableDarkMode();
}
btn.addEventListener("click", function () {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

document.querySelector(".yearNow").textContent = new Date().getFullYear();
