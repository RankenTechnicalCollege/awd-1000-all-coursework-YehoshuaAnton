"use strict";

(function () {
  const navHeight = document.getElementById("nav");
  const sectionOffset = document.querySelectorAll("main section");
  sectionOffset.forEach((section) => {
    window.addEventListener("resize", () => {
      section.style.paddingTop = `${navHeight.clientHeight}px`;
      console.log(section.style.paddingTop);
    });
  });
})()