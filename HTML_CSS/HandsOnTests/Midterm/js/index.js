"use strict";

(() => {

  // Write skills list to the page

  const skillsUL = document.getElementById("skills-list");
  const skills = ["Software Development", "Web Development", "Database Management", "Organization", "Object-Oriented Programming", "C#/Java", "SQL", "HTML/CSS", "JavaScript"];

  skills.forEach((skill) => {
    skillsUL.innerHTML += `<li>${skill}</li>`
  })

  // Dynamically change the offset of the section depending on the height of the nav

  const navHeight = document.getElementById("nav");
  const sectionOffset = document.querySelectorAll("section");
  function updateSectionPaddingTop() {
    sectionOffset.forEach((section) => {
      section.style.paddingTop = `${navHeight.clientHeight}px`;
    });
  }
  updateSectionPaddingTop();
  window.addEventListener("resize", updateSectionPaddingTop);

  // Add the "active" class to links when clicked and remove it from the previous active link

  let activeLink = document.querySelector(".active");
  const links = document.querySelectorAll("nav ul li");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      activeLink.classList.remove("active");
      link.classList.add("active");
      activeLink = link;
    });
  });

  // Change the active link as the page is scrolled and change the background color of the active and hovered links to match the background color of the current section

  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", () => {
    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - navHeight.clientHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    links.forEach((link) => {
      link.classList.remove("active");
      if (link.classList.contains(currentSection)) {
        link.classList.add("active");
      }
    });
  });

  // Change the background color of the active and hovered links based on the background color of the current section

  const background = document.querySelector("div#grid-container").style;
  let currentBackground = document.getElementsByClassName("current")[0].style;
  background.backgroundColor = "light-dark(white, #282828FF)";
  console.log(background.getPropertyValue("background-color"));
})();