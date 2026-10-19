"use strict";

let isValid = false;
while (!isValid) {
    const email = prompt("Enter your email address:");
    if (email.startsWith("_") || email.startsWith(".")) {
        alert("Email address may not start with a period or underscore.");        
    } else if (!email.includes("@")) {
        alert("Email address must contain an @ symbol.");        
    } else if (!email.includes(".")) {
        alert("Email address must contain a period.");        
    } else if (!email.includes(".", email.indexOf("@"))) {
        alert("The period must come after the @ symbol.");        
    } else {
        alert(`You entered: ${email}.\nThis is a valid email address.`);
        isValid = true;
    }
}
