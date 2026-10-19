const startAngle = 0, endAngle = Math.PI * 2;      

function drawSolidCircle(x, y, radius, ctx) {
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.fill();
};

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "yellow";
    drawSolidCircle(100, 100, 75, ctx);          // fill background color

    ctx.fillStyle = "black";
    drawSolidCircle(80, 70, 5, ctx);             // draw left eye 
    drawSolidCircle(120, 70, 5, ctx);            // draw right eye
    
    ctx.beginPath();
    ctx.arc(100, 100, 75, startAngle, endAngle); // outer circle outline
    
    ctx.moveTo(135, 100);                        
    ctx.arc(100, 100, 35, startAngle, Math.PI);  // mouth (half circle)

    ctx.stroke();                                // draw outline and mouth
});