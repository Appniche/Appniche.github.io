window.onload = (e) => {
  console.log("Page is loaded");
};

let btn = document.querySelector("#btn");
let cls_btn = document.querySelector("#close_btn");
let menu = document.getElementById("nav_menu");


btn.addEventListener("click", () => {
  menu.classList.toggle("open");
  cls_btn.classList.toggle("hidden");
});

close_btn.addEventListener("click", () => {
  menu.classList.toggle("open");
  cls_btn.classList.toggle("hidden");
});
