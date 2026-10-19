import users from "./mod_users.js";

const tbody = document.querySelector("#users tbody");
for (let user of users) {
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.appendChild(document.createTextNode(user.name));
    tr.appendChild(td1);

    const td2 = document.createElement("td");
    td2.appendChild(document.createTextNode(user.phone));
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    td3.appendChild(document.createTextNode(user.email));
    tr.appendChild(td3);

    tbody.appendChild(tr);
}