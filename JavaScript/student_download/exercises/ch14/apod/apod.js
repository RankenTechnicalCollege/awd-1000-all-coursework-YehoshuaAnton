"use strict";

function getElement(selector) {
    return document.querySelector(selector);
}

// returns date string in YYYY-MM-DD format - default param value is today's date
function getDateString(dt = new Date()) {
    return `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}`;
}

async function getPicture(date) {
    const dateString = getDateString(date);
    const domain = `https://api.nasa.gov/planetary/apod`;
    const request = `?api_key=DEMO_KEY&date=${dateString}`;
    const response = await fetch(domain + request);
    return await response.json();  
}

function clear() {
    getElement("#title").textContent = "";
    getElement("#display").textContent = "";
    getElement("#explanation").textContent = "";
    getElement("#msg").textContent = "";
}

function displayPicture(data) {
    
    if (data.error) {                          // error
        getElement("#msg").textContent = data.error.message; 
    } 
    else if (data.code) {                     // problem
        getElement("#msg").textContent = data.msg; 
    }      
    else {                                    // success 
        // header
        getElement("#title").textContent = data.title;

        // image or video
        const displayDiv = getElement("#display");
        if (data.media_type === "image") {
            const img = document.createElement("img");
            img.src = data.url;
            img.alt = "NASA photo";
            img.width = 700;
            displayDiv.appendChild(img);
        } 
        else if (data.media_type === "video") {
            const iframe = document.createElement("iframe");
            iframe.src = data.url;
            iframe.allowFullscreen = true;
            iframe.setAttribute("frameborder", "0");
            displayDiv.appendChild(iframe);
        }

        // text
        getElement("#explanation").textContent = data.explanation;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // set textbox to today's date in YYYY-MM-DD format 
    const dateTextbox = getElement("#date");
    dateTextbox.value = getDateString();
    dateTextbox.focus();

    getElement("#view_button").addEventListener("click", async () => {
        clear();  // clear any previous display
        
        const dateString = getElement("#date").value;
        const date = new Date(dateString);

        if (date == "Invalid Date") {
            const msg = "Please enter a valid date in YYYY-MM-DD format.";
            getElement("#msg").textContent = msg;
        } else {
            try {
                const data = await getPicture(date);
                displayPicture(data);
            } catch(e) {
                getElement("#msg").textContent = e.message;
            }
        }

        getElement("#date").focus();
    });
});