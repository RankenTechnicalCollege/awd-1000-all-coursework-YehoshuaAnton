import { readFile, writeFile } from "fs/promises";

const fileName = "email_list.txt";

// private helper functions
async function readEmails() {
    const str = await readFile(fileName, "utf8");
    return JSON.parse(str);
}

async function writeEmails(data) {
    await writeFile(fileName, JSON.stringify(data));
}

// public named exports
export async function getEmails(request, response) {
    try {
        const data = await readEmails();
	    response.json(data);
    } catch (e) {
        console.log(e);
        response.json({error:{message:"Unable to get emails."}});
    }
};

export async function addEmail(request, response) {
    try {
        const data = await readEmails();
        const maxId = data.reduce((prev, current) => (prev.id > current.id) ? prev.id : current.id, 0);

        const newEmail = request.body;
        newEmail.id = maxId + 1;

        data.push(newEmail);
        await writeEmails(data);

        response.json(newEmail);
    } catch (e) {
        console.log(e);
        response.json({error:{message:"Unable to add email."}});
    }
};

export async function deleteEmail(request, response) {
    try {
        const data = await readEmails();
        const id = request.params.id;
        const newData = data.filter(e => e.id != id);
        await writeEmails(newData);
        response.json({});
    } catch (e) {
        console.log(e);
        response.json({error:{message:"Unable to delete email."}});
    }
};