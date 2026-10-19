import { getElement } from './lib_DOM.js';  
import { getToggleHandler, loadImages, 
    startSlideShow } from './lib_slide_show.js';

document.addEventListener("DOMContentLoaded", () => {
    // define the slides
    const slides = [
        {href:"release.jpg", title:"Catch and Release"}, 
        {href:"deer.jpg", title:"Deer at Play"},
        {href:"hero.jpg", title:"The Big One!"},
        {href:"bison.jpg", title:"Roaming Bison"}    
    ];
	
    // attach the event handler for the Play/Pause button
    getElement("#pause_resume").addEventListener(
        "click", getToggleHandler());  

    // load the images and start the slide show
    loadImages(slides);
    startSlideShow(getElement("#image"), getElement("#caption"));
});