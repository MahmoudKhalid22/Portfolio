// // import { pr } from "./appData.js";

const preloader = document.querySelector(".preloader");
const progress = document.querySelector(".progress");
const menuIcon = document.querySelector(".menu");
const menuItem = document.querySelector(".nav-links");

// // const card = document.querySelectorAll(".card");
// // const p = document.querySelectorAll(".info > p");
// // const header = document.querySelector("header .container");
// // const cssIcon = document.querySelector(".fa-css3-alt");
// // const project = document.querySelector(".projects");
// // const display = document.getElementById("display");
// // const projects = document.querySelector(".projects .container");
// // const contactP = document.querySelector(".contact p");
const form = document.querySelector(".form");
// // const smenu = document.querySelector(".nav-links-icon");

// preloader
window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});
// progress
function scroller() {
  const { scrollTop, scrollHeight } = document.documentElement;
  const scrollPercentage = `${
    (scrollTop / (scrollHeight - window.innerHeight)) * 100
  }%`;
  progress.style.width = scrollPercentage;
}
window.addEventListener("scroll", scroller);

//navbar
menuIcon.addEventListener("click", () => {
  menuItem.classList.toggle("vi");
});
// form submit
form.addEventListener("submit", () => {
  alert(`Your messege has been sent ! thank you 😁`);
});

// // // const projectCard = document.querySelector(".project-card");
// // const projectImage = document.querySelector(".pr-img");
// // const projectInfo = document.querySelector(".project-category");
// // const projectTitle = document.querySelector(".project-title span");
// // const projectDemo = document.querySelector(".more-details-demo");
// // const projectGitHub = document.querySelector(".more-details");
// // const projectMenu = document.querySelector(".projectMenu");

// // const rightProject = document.querySelector(".fa-chevron-right");
// // const leftProject = document.querySelector(".fa-chevron-left");

// // let projectIndex = 0;

// // //display projects as reviews in js
// // display.addEventListener("click", () => {
// //   projects.classList.toggle("containerII");
// //   projectMenu.classList.toggle("projectMenuItem");
// //   // console.log(projects.classList.contains("containerII"));
// //   // console.log(projects);
// //   if (projectMenu.classList.contains("projectMenuItem")) {
// //     showProject();
// //   }
// // });

// // rightProject.addEventListener("click", () => {
// //   projectIndex++;
// //   if (projectIndex > 11) {
// //     projectIndex = 0;
// //   }
// //   showProject();
// // });
// // leftProject.addEventListener("click", () => {
// //   projectIndex--;
// //   if (projectIndex < 0) {
// //     projectIndex = 11;
// //   }
// //   showProject();
// // });

// // const showProject = () => {
// //   projectImage.src = pr[projectIndex].img;
// //   projectInfo.textContent = pr[projectIndex].name;
// //   projectTitle.textContent = pr[projectIndex].langauage;
// //   projectDemo.href = pr[projectIndex].demo;
// //   projectGitHub.href = pr[projectIndex].github;
// // };
