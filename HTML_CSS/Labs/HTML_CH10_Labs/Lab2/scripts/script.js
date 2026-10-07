/*
  Student Name: Yehoshua Anton
  File Name: script.js
  Date: 10/07/2026
*/

// Global variables
const answer = document.querySelector("#answer p");
const heading = document.querySelector("#answer h2");

// Hamburger menu function
function hamburger() {
  const navlinks = document.getElementById("nav-links");
  const menuicon = document.getElementById("icon");
  if (navlinks.style.display === "block") {
    navlinks.style.display = "none";
    menuicon.style.color = "#2A1F14";
  } else {
    navlinks.style.display = "block";
    menuicon.style.display = "#F6EEE4";
  }
}

// Function to display first answer
function ans1() {
  heading.style.display = "block";
  answer.textContent = "Step back and observe the situation for a few minutes. Wait to see if a parent arrives. If the animal is in immediate danger from a predator or is in the road, remove the baby and bring to a rescue center.";
}

function ans2() {
  heading.style.display = "block";
  answer.textContent = "You cannot tell if an animal has rabies simply by seeing it. A test must be performed to determine if an animal has rabies. Do not approach wildlife that you suspect might be rabid. Contact us to have the animal removed.";
}

function ans3() {
  heading.style.display = "block";
  answer.textContent = "No. This is a myth. The parents will retrieve the baby bird and place it back in its nest. If the parents do not return, contact us.";
}

function ans4() {
  heading.style.display = "block";
  answer.textContent = "We need volunteers to help feed animals, care for animals, and clean animal pens. We also accept donations.";
}