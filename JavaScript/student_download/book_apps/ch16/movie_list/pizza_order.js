// drag/drop methods
const dragStart = evt => 
    evt.dataTransfer.setData("topping", evt.target.id);

const dragOver = evt => 
    evt.preventDefault();  // default is to not allow drag

const drop = evt => {
    evt.preventDefault();  // default is to not allow drop
    const id = evt.dataTransfer.getData("topping");
    const ul = evt.target.querySelector("ul");
    const li = document.querySelector("#" + id);
    ul.appendChild(li);
};

document.addEventListener("DOMContentLoaded", () => {
    // get div elements and save button
    const toppings = document.querySelector("#toppings");
    const order = document.querySelector("#order");
    const saveBtn = document.querySelector("button");

    // add dragstart event handler for each li 
    // element in toppings div
    const items = toppings.querySelectorAll("li");
    items.forEach(li => {
        li.addEventListener("dragstart", dragStart);
    });

    // make order div a drop target
    order.addEventListener("dragover", dragOver);  
    order.addEventListener("drop", drop);

    // make toppings div a drop target so can drag items back
    toppings.addEventListener("dragover", dragOver);  
    toppings.addEventListener("drop", drop);

    // save button click event handler
    saveBtn.addEventListener("click", () => {
        // forEach() works with NodeList object returned by 
        // querySelectorAll() but map() doesn't in many browsers - 
        // use the spread operator to convert NodeList to an array
        const selectedItems = [...order.querySelectorAll("li")];
        const values = selectedItems.map(item => item.textContent);
        const msg = "Your pizza has the following toppings:\n" 
            + values.join(", ");
        alert(msg);
    });
});

