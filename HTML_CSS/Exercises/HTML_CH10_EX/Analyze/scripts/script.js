/*
    Student Name: Yehoshua Anton
    File Name: script.js
    Date: 10/06/2026
*/

// Global variables
const figElement = document.getElementById("placeholder");
const imgSource = document.getElementById("image");
const figCap = document.querySelector("figcaption");

//Function to display the first picture
function pic1() {
    imgSource.src = "images/trunk-bay.jpg";
    imgSource.alt = "Elevated view of Trunk Bay beach on St. John";
    figElement.style.display = "block";
    figCap.textContent = "Trunk Bay in St. John";
}

// Function to display the second picture
function pic2() {
    imgSource.src = "images/sanjuan.jpg";
    imgSource.alt = "Elevated view of San Juan coast";
    figElement.style.display = "block";
    figCap.textContent = "Coast of San Juan";
}

// Function to display the third picture
function pic3() {
    imgSource.src = "images/curacao.jpg";
    imgSource.alt = "The blue waters of Curacao";
    figElement.style.display = "block";
    figCap.textContent = "Curacao";
}