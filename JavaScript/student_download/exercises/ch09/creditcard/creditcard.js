"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const form = getElement("form");

    // attach invalid event handlers

    form.addEventListener("submit", evt => {
        // handle submit event
    });

});