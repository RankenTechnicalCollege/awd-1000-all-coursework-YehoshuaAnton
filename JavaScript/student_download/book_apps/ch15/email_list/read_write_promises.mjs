import { readFile, writeFile } from "fs/promises";

const fname = "email_list.txt";
const email = "mike@murach.com (Mike Murach)";

try {
    let list = await readFile(fname, "utf8");
    list += "\n" + email;

    await writeFile(fname, list);
    console.log(email + " written to file.");
} catch(e) {
    console.log(e.message);
}