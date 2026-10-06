/* 
  Student Name: Yehoshua Anton
  File Name: script.js
  Date: 10/06/2026
*/

function hamburger() {
  var menu = document.getElementById("menu-links");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}