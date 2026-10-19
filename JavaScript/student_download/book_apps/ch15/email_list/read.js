"use strict";

const fs = require("fs");

fs.readFile("email_list.txt", "utf8", (error, text) => {
	if (error) console.log(error.message);
	else console.log(text);
});