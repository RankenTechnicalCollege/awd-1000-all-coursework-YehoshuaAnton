"use strict"

function toggleNav() {
  const x = document.getElementById("navigation");
  if (x.className === "links-list") {
    x.className += " open";
  } else {
    x.className = "links-list";
  }
}