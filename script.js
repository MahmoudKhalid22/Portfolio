const dark = document.querySelector(".fa-moon");
const light = document.querySelector(".fa-lightbulb");
const card = document.querySelectorAll(".card");
const p = document.querySelectorAll(".info > p");
const header = document.querySelector("header .container");
const cssIcon = document.querySelector(".fa-css3-alt");
const project = document.querySelector(".projects");
const phone = document.querySelectorAll(".info> h3");

const menuIcon = document.querySelector(".menu");
const menuItem = document.querySelector(".navigation>ul");
const close = document.querySelector(".close");

// Dark Mode
dark.addEventListener("click", function () {
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.86)";
  light.style.display = "block";
  dark.style.display = "none";
  for (let i = 0; i < card.length; i++) {
    card[i].style.backgroundColor = "black";
    card[i].style.boxShadow = "0 5px 5px rgba(1 1 1 / 15%)";
    p[i].style.color = "white";
    phone[i].style.color = "white";
  }
  // for (let j = o; i < phone.length; j++) {
  //   phone[j].style.color = "white";
  // }
  header.style.backgroundColor = "rgb(36, 36, 36)";
  cssIcon.style.color = "white";
  project.style.backgroundColor = "#000016";
});
// Light Mode
light.addEventListener("click", function () {
  document.body.style.backgroundColor = "rgba(255, 255, 255, 0.86)";
  light.style.display = "none";
  dark.style.display = "block";
  for (let i = 0; i < card.length; i++) {
    card[i].style.backgroundColor = "white";
    p[i].style.color = "black";
    phone[i].style.color = "black";
  }
  // for (let j = o; i < phone.length; j++) {
  //   phone[j].style.color = "black";
  // }
  cssIcon.style.color = "blue";
  header.style.backgroundColor = "#f0f0f0";
  project.style.backgroundColor = "#ececec";
});

// menu icons
menuIcon.addEventListener("click", () => {
  close.style.display = "block";
  menuItem.style.display = "block";
  menuIcon.style.display = "none";
});
close.addEventListener("click", () => {
  menuIcon.style.display = "block";
  menuItem.style.display = "none";
  close.style.display = "none";
});
