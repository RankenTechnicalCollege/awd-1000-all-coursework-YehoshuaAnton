"use strict";

// the event handler for the click event of each <h2> element
const toggleVisibility = evt => {
    const h2 = evt.currentTarget;          // get the <h2> element
    const div = h2.nextElementSibling;     // get the <div> element

    h2.classList.toggle("minus");
    div.classList.toggle("open");

    evt.preventDefault();  // cancel default action of child <a> element
};

document.addEventListener("DOMContentLoaded", () => {
    // get the <h2> elements
    const h2s = document.querySelectorAll("#faqs h2");
    
    // attach event handler for each <h2> tag
    for (let h2 of h2s) {
        h2.addEventListener("click", toggleVisibility);
    }
    // set focus on first <a> tag
    h2s[0].firstChild.focus();       
});