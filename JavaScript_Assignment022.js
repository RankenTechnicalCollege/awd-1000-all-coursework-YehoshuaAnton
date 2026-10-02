(function () {
  "use strict";

  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");

  const SNAKE_SIZE = 64;

  function getRandom(min, max) {
    return min + (Math.floor(Math.random() * ((max - min) / SNAKE_SIZE)) * SNAKE_SIZE);
  }

  function resizeCanvas() {
    canvas.height = window.innerHeight - (window.innerHeight % SNAKE_SIZE);
    canvas.width = window.innerWidth - (window.innerWidth % SNAKE_SIZE);
  }

  window.addEventListener("resize", resizeCanvas);

  resizeCanvas();

  const snake = [];

  let score = 0;
  let interval = 300;
  let direction = "ArrowRight";
  let prevDirection = "ArrowRight";
  let xSnake = -SNAKE_SIZE, ySnake = 0;
  let xApple, yApple;

  const apple = document.createElement("img");
  apple.src = "./apple.png";

  function drawApple() {
    xApple = getRandom(0, canvas.width);
    yApple = getRandom(0, canvas.height);
  }

  const snakeHead = document.createElement("img");
  snakeHead.src = "./snake.png";
  const snakeBody = document.createElement("img");
  snakeBody.src = "./body.png";
  apple.onload = () => {
    do {
      drawApple();
    } while (xApple === 0 && yApple === 0);
  };
  snakeHead.onload = () => {
    setInterval(() => {
      let xSource = 0, ySource = 0;
      switch (direction) {
        case "ArrowRight":
          xSource = 0;
          ySource = SNAKE_SIZE;
          xSnake += SNAKE_SIZE;
          break;
        case "ArrowLeft":
          xSource = SNAKE_SIZE;
          ySource = 0;
          xSnake -= SNAKE_SIZE;
          break;
        case "ArrowUp":
          xSource = SNAKE_SIZE;
          ySource = SNAKE_SIZE;
          ySnake -= SNAKE_SIZE;
          break;
        case "ArrowDown":
          xSource = 0;
          ySource = 0;
          ySnake += SNAKE_SIZE;
          break;
      }

      if (xSnake === xApple && ySnake === yApple) {
        score++;
        snake.length++;
        drawApple();
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      snake[0] = context.drawImage(snakeHead, xSource, ySource, SNAKE_SIZE, SNAKE_SIZE, xSnake, ySnake, SNAKE_SIZE, SNAKE_SIZE);
      for (let i = 1; i < snake.length; i++) {
        snake.push(context.drawImage(snakeBody, xSnake, ySnake));
      }
      context.drawImage(apple, xApple, yApple);
      prevDirection = direction;

      if (xSnake > canvas.width || xSnake < 0 || ySnake > canvas.height || ySnake < 0) {
        //lose
      }
    }, score < 5 ? interval : interval += 25);
  };

  document.addEventListener("keydown", e => {
    switch (e.key) {
      case "ArrowRight":
        if (prevDirection !== "ArrowLeft") {
          direction = e.key;
        }
        break;
      case "ArrowLeft":
        if (prevDirection !== "ArrowRight") {
          direction = e.key;
        }
        break;
      case "ArrowUp":
        if (prevDirection !== "ArrowDown") {
          direction = e.key;
        }
        break;
      case "ArrowDown":
        if (prevDirection !== "ArrowUp") {
          direction = e.key;
        }
        break;
    }
  });
}());