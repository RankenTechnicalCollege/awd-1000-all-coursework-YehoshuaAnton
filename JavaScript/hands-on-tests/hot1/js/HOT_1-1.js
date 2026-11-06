"use strict";

(() => {
  let movies = ["Movie 1", "Movie 2", "Movie 3"];
  const input = document.getElementById("movie"),
    submit = document.getElementById("submit"),
    display = document.getElementById("display");
  submit.addEventListener("click", () => {
    movies[movies.length] = input.value;
    for (let i = 0; i < movies.length; i++) {
      display.innerHTML += movies[i];
    }
  });
})();