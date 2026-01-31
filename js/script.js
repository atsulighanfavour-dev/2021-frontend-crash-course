// const mobileBtn = document.getElementById("mobile-cta");
// nav = document.querySelector("nav");
// mobileBtn = document.getElementById("mobile-exit");

// mobileBtn.addEventListener("click", () => {
//   nav.classList.add("menu-btn");
// });

// mobileBtn.addEventListener("click", () => {
//   nav.classList.remove("menu-btn");
// });

// Correct Code
const mobileBtn = document.getElementById("mobile-cta");
const nav = document.querySelector("nav");
const mobileBtnExit = document.getElementById("mobile-exit");

mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});

mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});
