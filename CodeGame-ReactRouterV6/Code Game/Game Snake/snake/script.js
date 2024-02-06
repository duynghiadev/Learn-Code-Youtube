const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext('2d');
const highScoreElement = document.getElementById("high-score");
const scoreElement = document.getElementById("score");

const createRect = (x, y, width, height, color) => {
    canvasContext.fillStyle = color
    canvasContext.fillRect(x, y, width, height)
}

const applePosition = () => {
    appleX = Math.floor(Math.random() * canvas.width / size) * size;
    appleY = Math.floor(Math.random() * canvas.height / size) * size;
}

const changeDirection = e => {
    if (e.key === "ArrowUp" && y != size) {
        x = 0;
        y = -size;
    } else if (e.key === "ArrowDown" && y != -size) {
        x = 0;
        y = size;
    } else if (e.key === "ArrowLeft" && x != size) {
        x = -size;
        y = 0;
    } else if (e.key === "ArrowRight" && x != -size) {
        x = size;
        y = 0;
    }
}

const onGameOver = () => {
    dead.play();
    clearInterval(game);
    canvasContext.font = "40px Arial";
    canvasContext.fillStyle = "white";
    canvasContext.fillText("Game Over.",
        canvas.width / 2 - 100, canvas.height / 2 - 20);
}

let gameOver = false;
let appleX, appleY;
let snakeX = 0, snakeY = 0;
let x = 0, y = 25;
let snake = [];
let score = 0;
let size = 25;

// Get high score from local storage
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score: ${highScore}`;

// load audio files
let dead = new Audio();
let eat = new Audio();

dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";

const init = () => {
    if (gameOver) return onGameOver();

    // When snake eat apple
    if (snakeX === appleX && snakeY === appleY) {
        eat.play();
        applePosition();
        snake.push([appleY, appleX]);
        score++;
        highScore = score >= highScore ? score : highScore;

        localStorage.setItem("high-score", highScore);
        scoreElement.innerText = `Score: ${score}`;
        highScoreElement.innerText = `High Score: ${highScore}`;
    }

    snakeX += x;
    snakeY += y;

    for (let i = snake.length - 1; i > 0; i--) snake[i] = snake[i - 1];
    snake[0] = [snakeX, snakeY];

    createRect(0, 0, canvas.width, canvas.height, "green");
    createRect(appleX, appleY, size, size, "red");

    for (let i = 0; i < snake.length; i++) {
        createRect(snake[i][0], snake[i][1], size, size, "yellow");

        // Check snake head hit body
        if (snake[0][1] === snake[i][1] && i !== 0 && snake[0][0] === snake[i][0]) {
            gameOver = true;
        }
    }
    
    // Check snake hit wall
    checkHitWall();
}

const checkHitWall = () => {
    if (snakeX == - size) {
        snakeX = canvas.width;
    } else if (snakeX == canvas.width) {
        snakeX = -size;
    } else if (snakeY == - size) {
        snakeY = canvas.height;
    } else if (snakeY == canvas.height) {
        snakeY = -size;
    }
}

applePosition();
let game = setInterval(init, 150);
setTimeout(() => {
    document.addEventListener("keyup", changeDirection);
}, 2);