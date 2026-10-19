/*
If you run this code from the file system, it doesn't work 
correctly.  To run this app, deploy it to a web server 
such as node.js http-server and run it from that web server.
*/

// private variables and constants
let timer = null;
let running = true;
let speed = 2000;
const nodes = { image: null, caption: null };
const img = { cache: [], counter: 0 };

// private functions
function stopSlideShow() {
    clearInterval(timer);
}

function displayNextImage() {
    img.counter = ++img.counter % img.cache.length;
    const image = img.cache[img.counter];
    nodes.image.src = image.src;
    nodes.image.alt = image.alt;
    nodes.caption.textContent = image.alt;
};

// public functions
function loadImages(slides) {
    for (let slide of slides) {
        const image = new Image();
        image.src = "images/" + slide.href;
        image.alt = slide.title;
        img.cache.push(image);
    }
}

function startSlideShow(image, caption) {
    if (image && caption) {
        nodes.image = image; 
        nodes.caption = caption;
    }
    displayNextImage();
    timer = setInterval(displayNextImage, speed);
}

function getToggleHandler() {
    return evt => {
        if (running) { 
            stopSlideShow(); 
        } else { 
            startSlideShow();
        }
        const button = evt.currentTarget;
        button.value = (running) ? "Resume" : "Pause";
        running = !running;    // toggle running flag
    };
}

export { loadImages, startSlideShow, getToggleHandler };