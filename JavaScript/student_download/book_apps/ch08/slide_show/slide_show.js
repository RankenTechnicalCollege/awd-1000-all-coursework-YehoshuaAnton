"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    // get elements for the image and caption
    const mainImage = getElement("#main_image");   // the img element for the show
    const caption = getElement("#caption");        // the h2 element for the caption

    // get all the <a> elements in the <ul> element
    const links = document.querySelectorAll("#image_list a");
        
    // Process images
    const imageCache = [];
    let image = null;

    for (let link of links) {
        // Preload image 
        image = new Image();
        image.src = link.href;
        image.alt = link.title;
        // add image to array 
        imageCache.push(image);
    }

    // set initial image and caption
    mainImage.src = imageCache[0].src;
    mainImage.alt = imageCache[0].alt;
    caption.textContent = imageCache[0].alt;

    // start slide show
    let imageCounter = 0;
    setInterval(() => {  // first parameter – anonymous function
        // calculate the index for the current image
        imageCounter = (imageCounter + 1) % imageCache.length;

        // get image object from array
        image = imageCache[imageCounter];

        // set image and caption with values from image object
        mainImage.src = image.src;
        mainImage.alt = image.alt;
        caption.textContent = image.alt;
    },
    2000);               // second parameter - 2 second interval
});