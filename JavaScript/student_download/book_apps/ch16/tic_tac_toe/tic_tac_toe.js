document.addEventListener("DOMContentLoaded", () => {
    // for building tic-tac-toe board
    const len = 100;

    // for placing X's and O's
    let isX = true;

    // get canvas and context
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    ctx.font = "56px arial";

    // add squares at each corner and in the middle
    ctx.strokeRect(0, 0, len, len);      // upper left
    ctx.strokeRect(0, 200, len, len);    // lower left
    ctx.strokeRect(200, 0, len, len);    // upper right
    ctx.strokeRect(200, 200, len, len);  // lower right
    ctx.strokeRect(100, 100, len, len);  // middle

    // add outer border
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // event handler for click event
    canvas.addEventListener("click", evt => {
        const text = isX ? "X" : "O";
        ctx.fillText(text, evt.offsetX, evt.offsetY);
        
        isX = !isX;  // toggle isX flag
    });
});