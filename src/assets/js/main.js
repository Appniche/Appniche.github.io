window.onload = (e) => {
  console.log("Page is loaded");
};

let btn = document.querySelector("#btn");
let menu = document.getElementById("nav_menu");


btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  // btn.style.border = "1px solid #fff"
});

// console.log("Hello world");
