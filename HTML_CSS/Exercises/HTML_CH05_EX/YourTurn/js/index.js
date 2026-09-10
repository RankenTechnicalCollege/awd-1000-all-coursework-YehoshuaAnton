"use strict"

function toggleNav() {
  let x = document.getElementById("navigation");
  if (x.className === "links-list") {
    x.className += " open";
  } else {
    x.className = "links-list";
  }
}