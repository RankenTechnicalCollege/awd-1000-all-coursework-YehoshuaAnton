"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    // get the main image and caption elements
    const mainImage = getElement("#main_image");
    const caption = getElement("#caption");
    
    // get all the <a> elements in the <ul> element
    const imageLinks = document.querySelectorAll("#image_list a");
    
    // process image links
    for ( let link of imageLinks ) {  

        // preload image
        const image = new Image();
        image.src = link.href;
        
        // attach event handler for click event of <a> element
        link.addEventListener("click", evt => {
            mainImage.src = link.href;
            mainImage.alt = link.title;
            caption.textContent = link.title;

            evt.preventDefault(); // cancel the default action of the link
        });
    }

    // set focus on first image link
    imageLinks[0].focus();
});