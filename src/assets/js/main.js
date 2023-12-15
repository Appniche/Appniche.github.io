window.onload = (e) => {
  console.log("Page is loaded");
};

let btn = document.querySelector("#btn");
let menu = document.querySelector("#nav_menu");
let close_btn = document.querySelector("#cls_btn");

btn.addEventListener("click", () => {
  menu.classList.remove("hidden");
});

close_btn.addEventListener("click", () => {
  menu.classList.add("hidden");
});
// console.log("Hello world");
