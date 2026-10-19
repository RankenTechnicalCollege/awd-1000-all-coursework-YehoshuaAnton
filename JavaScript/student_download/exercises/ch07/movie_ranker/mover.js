"use strict";

const getElement = selector => document.querySelector(selector); 

const getElements = selector => document.querySelectorAll(selector); 

const moveDown = () => {
    const movieElements = getElements("#movie-title");
    let firstMovie = movieElements(0).textContent;
    let secondMovie = movieElements(1).textContent;

    movieElements(1).textContent = firstMovie;
    movieElements(0).textContent = secondMovie;
}

const moveUp = () => {
    const movieElements = getElements("#movie-title");
    let secondMovie = movieElements[0].textContent;
    let thirdMovie = movieElements[1].textContent;

    movieElements[1].textContent = thirdMovie;
    movieElements[2].textContent = secondMovie;
}

document.addEventListener("DOMContentLoaded", () => {
    getElement("#top_btn").addEventListener("click", moveDown);
    getElement("#up_btn").addEventListener("click", moveDown);
    getElement("#down_btn").addEventListener("click", moveup);
    getElement("#bottom_btn").addEventListener("click", moveUp);     
});