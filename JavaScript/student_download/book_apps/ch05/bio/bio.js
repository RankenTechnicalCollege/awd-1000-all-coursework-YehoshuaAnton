"use strict";

function getAsArray(promptMsg, separator = " ") {
    return prompt(promptMsg).split(separator);
}

// use rest operator for the following functions so can accept either a 
// comma-separated list of arguments or an array with a spread operator
function capitalize(...words) {
    const capitalizedWords = [];
    for (let word of words) {
        const firstLetter = word.substring(0,1).toUpperCase();
        const restOfWord = word.substring(1).toLowerCase();
        capitalizedWords.push(firstLetter + restOfWord);
    }
    return capitalizedWords;
}

function trim(...items) {
    const trimmedItems = [];
    for (let item of items) {
        trimmedItems.push(item.trim());
    }
    return trimmedItems;
}

function getColorsString(...items) {
    const firstItems = items.slice(0, -1);
    const lastItem = items.at(-1);
    return `${firstItems.join(", ")} and ${lastItem}`;
}

function displayBio(names, dob, colors) {
    alert("Hello, my name is " + names.join(" ") + ".\n" +
          "I was born in " + dob.at(-1) + ".\n" +
          "I have " + colors.length + " favorite colors: " +
          getColorsString(...colors) + ".");
}

const names = capitalize(...getAsArray("Enter your full name"));
const dob = getAsArray("Enter your DOB in mm-dd-yyyy format", "-");

const msg = "Enter your favorite colors, separated by commas";
const colors = trim(...getAsArray(msg, ","));

displayBio(names, dob, colors);