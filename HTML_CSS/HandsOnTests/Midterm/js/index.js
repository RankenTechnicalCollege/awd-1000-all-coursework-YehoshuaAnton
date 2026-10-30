"use strict";

(() => {

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

  // Change the active link as the page is scrolled

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

  let currentSection = document.querySelector(".current");
})();