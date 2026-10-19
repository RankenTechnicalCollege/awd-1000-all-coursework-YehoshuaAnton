document.addEventListener("DOMContentLoaded", () => {
    // get canvas and context
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    // configure line style
    ctx.lineWidth = 3;
    ctx.lineCap = "round";

    // flag to track state of drawing
    let isDrawing = false;

    // event handlers for mouse and touch
    canvas.addEventListener("pointerdown", () => {
        isDrawing = true;
        ctx.beginPath();
        
    });  
    canvas.addEventListener("pointermove", evt => {
        if (isDrawing) {
            ctx.lineTo(evt.offsetX, evt.offsetY);
            ctx.stroke();
        }
    });
    canvas.addEventListener("pointerup", () => isDrawing = false);
    canvas.addEventListener("pointerout", () => isDrawing = false);

    // event handler for clear button 
    const btn = document.querySelector("button");
    btn.addEventListener("click", () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    });
});