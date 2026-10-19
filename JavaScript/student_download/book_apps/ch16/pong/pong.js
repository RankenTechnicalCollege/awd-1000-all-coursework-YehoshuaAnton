document.addEventListener("DOMContentLoaded", () => {
    // get canvas and context
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    // set constant for midpoint of x-axis
    const midX = canvas.width / 2;

    // define objects for ball, paddle, and player with starting values
    let ball = {x: midX, y: 0, speedX: 1, speedY: 5}; 
    const paddle = {x: midX - 50, y: canvas.height - 50, len: 100, 
                    direction: 0};
    const player = {hits: 0, highScore: 0};

    // callback function for requestAnimationFrame() 
    const render = () => {
        // calculate paddle position
        paddle.x = paddle.x + paddle.direction;

        // calculate ball position
        ball.x = ball.x + ball.speedX;
        ball.y = ball.y + ball.speedY;

        // if ball hits right or left border, reverse x speed to simulate bounce
        if (ball.x < 0 || ball.x > canvas.width	) {
            ball.speedX = -ball.speedX;
        }
        // if ball hits top border, reverse y speed to simulate bounce
        if (ball.y < 0) {
            ball.speedY = -ball.speedY;
        }
        // if ball is below paddle level...
        if (ball.y > paddle.y) {
            const isLeftOfPaddle = ball.x < paddle.x;
            const isRightOfPaddle = ball.x > paddle.x + paddle.len;
            if (isLeftOfPaddle || isRightOfPaddle) {
                // missed - start over
                ball = {x: midX, y: 0, speedX: 1, speedY: 5};
                player.hits = 0;
            } else {
                // hit - reverse y speed to simulate bounce
                ball.speedY = -ball.speedY;

                // Change x speed based on where ball hits paddle to 
                // determine angle of bounce. If hits near middle of 
                // paddle, angle will be more up-and-down. Angle becomes
                // more side-to-side as ball hits toward paddle ends. 
                // (To make the angle of bounce more pronounced,
                // make the literal value more than .1)
                const midPaddle = paddle.x + (paddle.len / 2);
                ball.speedX = .1 * (ball.x - midPaddle);  

                // increment hits
                player.hits++;

                // update high score as needed
                if (player.hits > player.highScore) {
                    player.highScore = player.hits;
                }
            }
        }

        // clear previous drawing and start new path
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();

        // ball
        context.arc(ball.x, ball.y, 5, 0, Math.PI * 2);

        // paddle 
        context.moveTo(paddle.x, paddle.y);
        context.lineTo(paddle.x + paddle.len, paddle.y);

        // draw ball and paddle
        context.stroke();

        // draw hit count and high score text
        context.font = "20px sans-serif";
        context.fillText("Hits: " + player.hits, 20, paddle.y + 30);
        context.fillText("High Score: " + player.highScore, canvas.width - 140, paddle.y + 30);

        // continue animation
        requestAnimationFrame(render);
    };

    // event handlers
    document.addEventListener("keydown", e => {
        if(e.code == "ArrowLeft") paddle.direction = -5;
        if(e.code == "ArrowRight") paddle.direction = 5;
    });  
    document.addEventListener("keyup", () => {
        paddle.direction = 0;
    });

    // start animation
    requestAnimationFrame(render);
});