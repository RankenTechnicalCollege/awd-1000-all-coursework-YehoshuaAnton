"use strict";

// get name, dob, and colors and split into arrays
const names = prompt("Enter your full name").split(" ");
const dob = prompt("Enter your DOB in mm-dd-yyyy format").split("-");
const colors = prompt("Enter your favorite colors, separated by commas")
    .split(",");

// capitalize each name
for (let i in names) {
    const firstLetter = names[i].substring(0, 1).toUpperCase();
    const restOfName = names[i].substring(1).toLowerCase();
    names[i] = firstLetter + restOfName;
}

// trim any spaces from colors
for (let i in colors) {
    colors[i] = colors[i].trim();
}

// create a display string for the colors
const firstColors = colors.slice(0, -1);
const lastColor = colors.at(-1);
const colorString = `${firstColors.join(", ")} and ${lastColor}`;

// display bio
alert(`Hello, my name is ${names.join(" ")}.
I was born in ${dob[2]}.
I have ${colors.length} favorite colors: ${colorString}.`);
