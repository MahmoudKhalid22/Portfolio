// import { pr } from "./appData.js";

const preloader = document.querySelector(".preloader");
const progress = document.querySelector(".progress");
const menuIcon = document.querySelector(".menu");
const menuItem = document.querySelector(".nav-links");
// ANIMATIONS
const about = document.querySelector(".about");
const leftAbout = document.querySelector(".leftAbout");
const rightAbout = document.querySelector(".rightAbout");
const contactInfo = document.querySelector(".contactInfo");
const contactUser = document.querySelector(".contactUser");
const serviceTitle = document.querySelector(".serviceTitle");
const subHead = document.querySelector(".with");
const responsive = document.querySelector(".responsive");
const modern = document.querySelector(".modern");
const clean = document.querySelector(".clean");
const browser = document.querySelector(".browser");
// // const card = document.querySelectorAll(".capr-imgrd");
// // const p = document.querySelectorAll(".info > p");
// // const header = document.querySelector("header .container");
// // const cssIcon = document.querySelector(".fa-css3-alt");
// // const project = document.querySelector(".projects");
// // const display = document.getElementById("display");
// // const projects = document.querySelector(".projects .container");
// // const contactP = document.querySelector(".contact p");
const form = document.querySelector(".form");
const formInput = document.querySelectorAll(".inForm");
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
  formInput.forEach((input) => {
    input.value = "";
  });

  alert(`Your messege has been sent ! thank you 😁`);
});

// form validation

// animation
window.addEventListener("scroll", () => {
  // ABOUT SECTION
  if (window.innerHeight >= leftAbout.getBoundingClientRect().top + 20) {
    // console.log("greater");
    leftAbout.classList.add("scrollLeftAbout");
  } else {
    leftAbout.classList.remove("scrollLeftAbout");
  }
  if (window.innerHeight >= rightAbout.getBoundingClientRect().top + 50) {
    rightAbout.classList.add("scrollRightAbout");
  } else {
    rightAbout.classList.remove("scrollRightAbout");
  }
  // FORM SECTION
  // if (window.innerHeight >= contactInfo.getBoundingClientRect().top) {
  // contactInfo.classList.add("removeContactInfo");
  // } else {
  // contactInfo.classList.remove("removeContactInfo");
  // }
  // if (window.innerHeight >= contactUser.getBoundingClientRect().top) {
  // contactUser.classList.add("removeContactUser");
  // } else {
  // contactUser.classList.remove("removeContactUser");
  // },
  // SERVICE SECTION
  if (window.innerHeight >= serviceTitle.getBoundingClientRect().top + 50) {
    serviceTitle.classList.add("removeServiceTitle");
  } else {
    serviceTitle.classList.remove("removeServiceTitle");
  }
  if (window.innerHeight >= subHead.getBoundingClientRect().top + 50) {
    subHead.classList.add("removeWith");
  } else {
    subHead.classList.remove("removeWith");
  }
  if (window.innerHeight >= responsive.getBoundingClientRect().top + 60) {
    responsive.classList.add("removeResponsive");
  } else {
    responsive.classList.remove("removeResponsive");
  }
  if (window.innerHeight >= modern.getBoundingClientRect().top + 60) {
    modern.classList.add("removeModern");
  } else {
    modern.classList.remove("removeModern");
  }
  if (window.innerHeight >= clean.getBoundingClientRect().top + 60) {
    clean.classList.add("removeClean");
  } else {
    clean.classList.remove("removeClean");
  }
  if (window.innerHeight >= browser.getBoundingClientRect().top + 60) {
    browser.classList.add("removeBrowser");
  } else {
    browser.classList.remove("removeBrowser");
  }

  // console.log(window.scrollY - 00);
  // console.log(serviceTitle.offsetTop);
});

// turns

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
