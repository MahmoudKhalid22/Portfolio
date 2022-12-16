// //import pr from "./app";
import { pr } from "/JS/appData.js";

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

const display = document.getElementById("display");
const projects = document.querySelector(".projects .container");

// Dark Mode
dark.addEventListener("click", () => {
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.86)";
  light.style.display = "block";
  dark.style.display = "none";
  card.forEach((item) => {
    item.style.backgroundColor = "black";
    item.style.boxShadow = "0 5px 5px rgba(1 1 1 / 15%)";
    item.style.color = "white";
  });
  p.forEach((item) => {
    item.style.color = "white";
  });
  phone.forEach((item) => {
    item.style.color = "white";
  });
  header.style.backgroundColor = "rgb(36, 36, 36)";
  cssIcon.style.color = "white";
  project.style.backgroundColor = "#000016";
});
// light mode
light.addEventListener("click", () => {
  document.body.style.backgroundColor = "rgba(255, 255, 255, 0.86)";
  light.style.display = "none";
  dark.style.display = "block";
  card.forEach((item) => {
    item.style.backgroundColor = "white";
    item.style.boxShadow = "5px 5px 5px 5px rgba(1 1 1 / 35%)";
    item.style.color = "black";
  });
  p.forEach((item) => {
    item.style.color = "black";
  });
  phone.forEach((item) => {
    item.style.color = "black";
  });
  header.style.backgroundColor = "#f0f0f0";
  cssIcon.style.color = "black";
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

// const projectCard = document.querySelector(".project-card");
const projectImage = document.querySelector(".pr-img");
const projectInfo = document.querySelector(".project-category");
const projectTitle = document.querySelector(".project-title span");
const projectDemo = document.querySelector(".more-details-demo");
const projectGitHub = document.querySelector(".more-details");
const projectMenu = document.querySelector(".projectMenu");

const rightProject = document.querySelector(".fa-chevron-right");
const leftProject = document.querySelector(".fa-chevron-left");

let projectIndex = 0;

//display projects as reviews in js
display.addEventListener("click", () => {
  projects.classList.toggle("containerII");
  projectMenu.classList.toggle("projectMenuItem");
  // console.log(projects.classList.contains("containerII"));
  // console.log(projects);
});

rightProject.addEventListener("click", () => {
  projectIndex++;
  if (projectIndex > 11) {
    projectIndex = 0;
  }
  showProject();
});
leftProject.addEventListener("click", () => {
  projectIndex--;
  if (projectIndex < 0) {
    projectIndex = 11;
  }
  showProject();
});

const showProject = () => {
  projectImage.src = pr[projectIndex].img;
  projectInfo.textContent = pr[projectIndex].name;
  projectTitle.textContent = pr[projectIndex].langauage;
  projectDemo.href = pr[projectIndex].demo;
  projectGitHub.href = pr[projectIndex].github;
};
