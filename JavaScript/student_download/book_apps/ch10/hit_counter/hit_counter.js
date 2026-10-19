"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

    // add to existing hits
    let localHits = localStorage.hits ?? "0";    // get hits
    localHits = Number(localHits) + 1;           // increment by 1
    localStorage.hits = localHits;               // set hits
    
    let sessionHits = sessionStorage.hits ?? "0";
    sessionHits = Number(sessionHits) + 1;
    sessionStorage.hits = sessionHits;

    // display hits
    console.log("Hits for this browser: " + localStorage.hits);
    console.log("Hits for this session: " + sessionStorage.hits);

    // display hits
    getElement("#browser_hits").textContent = localStorage.hits ?? "1";
    getElement("#session_hits").textContent = sessionStorage.hits ?? "1";

});