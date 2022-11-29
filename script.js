const dark = document.querySelector(".fa-moon");
const light = document.querySelector(".fa-lightbulb");
const card = document.querySelectorAll(".card");
const p = document.querySelectorAll(".info > p");
const header = document.querySelector("header .container");
const cssIcon = document.querySelector(".fa-css3-alt");
const project = document.querySelector(".projects");
const phone = document.querySelector(".contact .info h3");

dark.addEventListener("click", function () {
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.86)";
  light.style.display = "block";
  dark.style.display = "none";
  for (let i = 0; i < card.length; i++) {
    card[i].style.backgroundColor = "black";
    card[i].style.boxShadow = "0 5px 5px rgba(1 1 1 / 15%)";
    p[i].style.color = "white";
  }
  header.style.backgroundColor = "rgb(36, 36, 36)";
  cssIcon.style.color = "white";
  project.style.backgroundColor = "#000016";
  phone.style.color = "white";
});

light.addEventListener("click", function () {
  document.body.style.backgroundColor = "rgba(255, 255, 255, 0.86)";
  light.style.display = "none";
  dark.style.display = "block";
  for (let i = 0; i < card.length; i++) {
    card[i].style.backgroundColor = "white";
    p[i].style.color = "black";
  }
  cssIcon.style.color = "blue";
  header.style.backgroundColor = "#f0f0f0";
  project.style.backgroundColor = "#ececec";
  phone.style.color = "black";
});
