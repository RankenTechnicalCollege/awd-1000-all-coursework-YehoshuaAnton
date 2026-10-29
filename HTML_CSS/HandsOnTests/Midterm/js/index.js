"use strict";

(() => {
  // Dynamically change the offset of the section depending on the height of the nav

  const navHeight = document.getElementById("nav");
  const sectionOffset = document.querySelectorAll("section");
  sectionOffset.forEach((section) => {
    window.addEventListener("resize", () => {
      section.style.paddingTop = `${navHeight.clientHeight}px`;
      window.location = window.top.location;
    });
  });

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
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / (sections.length - 1)) {
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