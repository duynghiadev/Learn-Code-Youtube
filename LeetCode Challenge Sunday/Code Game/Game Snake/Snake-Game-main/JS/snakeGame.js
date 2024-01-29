import { addNewScoreToDB, top3Arr } from './firestore.js'
import { gameOn, dirX, dirY, watch, withWall, board, newGameSpeed } from './dom.js'
import { gameOverSound, snakeEatSound } from './audio.js'
import { food, drawFood, randomPosFood } from './food.js'
import { snake, drawSnake, onSnakePos, checkWall, checkSnakeHead } from './snake.js'

//Collision between snake and the food

const snakeEatFood = () => {
    if (onSnakePos(food.posX, food.posY)) {
        snakeEatSound.play();
        randomPosFood();
        scoreUp();
        for (let i = 0; i < snake.snakeGrowth; i++) {
            snake.body.push({ ...snake.body[snake.body.length - 1] });
        }
    }
}

//Update snake position

const update = () => {
    if (dirX === 0 && dirY === 0) return;
    for (let i = snake.body.length - 1; i > 0; i--) {
        snake.body[i].x = snake.body[i - 1].x;
        snake.body[i].y = snake.body[i - 1].y;
    }
    snake.body[0].x += dirX;
    snake.body[0].y += dirY;
    if (!withWall) {
        if (snake.body[0].x === 27) snake.body[0].x = 1;
        else if (snake.body[0].x === 0) snake.body[0].x = 26;

        if (snake.body[0].y === 27) snake.body[0].y = 1;
        else if (snake.body[0].y === 0) snake.body[0].y = 26;
    }
}

//Update score and game speed

const lvlUpWhen = 2;
let currentscore = 0, counter = 0, speedUp = 0, currentlvl = 1;
const score = document.querySelector('.score');
const level = document.querySelector('.lvl');
const scoreUp = () => {
    counter++;
    currentscore += currentlvl * 20;
    currentlvl = 1 + Math.floor(counter / 2);
    if (!(counter % lvlUpWhen)) {
        level.textContent = `Level - ${currentlvl}`;
        if (currentlvl < 8) speedUp = (currentlvl - 1) * 30;
        else if (currentlvl < 12) speedUp += 15;
        else speedUp += 8;
        newGameSpeed(speedUp);
    }
    score.textContent = currentscore;
}

//Reset snake game

const resetGame = () => {
    document.location.reload();
}

//New personal record update + update local storage

const newPersonalRecord = () => {
    if (currentscore > localStorage.getItem('highScore')) {
        const newPersonalRecordElement = document.querySelector('.newPersonalRecord');
        newPersonalRecordElement.classList.remove('d-none');
        localStorage.setItem('highScore', currentscore);
    }
}

//Update game over top 3 table

const updateTop3Table = (counter, top3Div, newChamp) => {
    if (counter === 0) {
        top3Arr[2] = top3Arr[1];
        top3Arr[1] = top3Arr[0];
        top3Arr[0] = newChamp;
    } else if (counter === 1) {
        top3Arr[2] = top3Arr[1];
        top3Arr[1] = newChamp;
    } else {
        top3Arr[2] = newChamp;
    }
    const gameOverElement = document.querySelector('.gameOver');
    gameOverElement.removeChild(top3Div);
    gameOverElement.innerHTML += `
    <span class="top3div">
    <h5 class="top3txt">TOP #3</h5>
    <div class="top3scores">
        <h6 class="1st">1. ${top3Arr[0].nickname} .... ${top3Arr[0].score}</h6>
        <h6 class="2nd">2. ${top3Arr[1].nickname} .... ${top3Arr[1].score}</h6>
        <h6 class="3rd">3. ${top3Arr[2].nickname} .... ${top3Arr[2].score}</h6>
    </div> 
    <input type="button" value="Play Again" class="playAgain btn btn-danger my-1">`;
    const playAgain = document.querySelector('.playAgain');
    playAgain.addEventListener('click', resetGame);
}

//Update on DB new top 3 score and get nickname from user

const newTop3Score = () => {
    for (let i = 0; i < 3; i++) {
        if (top3Arr[i].score < currentscore) {
            const top3Div = document.querySelector('.top3div');
            top3Div.classList.add('d-none');
            const newTop3Form = document.querySelector('.newTop3');
            newTop3Form.classList.remove('d-none');
            newTop3Form.addEventListener('submit', (e) => {
                e.preventDefault();
                const newChamp = {
                    nickname: newTop3Form.nickname.value,
                    score: currentscore
                };
                newTop3Form.classList.add('d-none');
                updateTop3Table(i, top3Div, newChamp);
                addNewScoreToDB(currentscore, newTop3Form.nickname.value);
                top3Div.classList.remove('d-none');
            });
            return;
        }
    }
}

//Game over board

const newBoardGameOver = () => {
    board.innerHTML = `
    <span class="gameOver">
      <h2>GAME OVER!</h2>
      <h5 class="newPersonalRecord d-none">
      **New Personal Record**
     </h5>
      <form class="newTop3  d-none">
         <h5>**New TOP #3 Record** </h5>
        <input type="text" class="my-3" id="nickname" placeholder="Enter Your Nickname" minlength="3" maxlength="12" required >
        <input class="btn" type="submit" id="send" value="Send">
      </form>
      <span class="top3div">
      <h5 class="top3txt">TOP #3</h5>
      <div class="top3scores">
          <h6 class="1st">1. ${top3Arr[0].nickname} .... ${top3Arr[0].score}</h6>
          <h6 class="2nd">2. ${top3Arr[1].nickname} .... ${top3Arr[1].score}</h6>
          <h6 class="3rd">3. ${top3Arr[2].nickname} .... ${top3Arr[2].score}</h6>
      </div> 
      <input type="button" value="Play Again" class="playAgain btn btn-danger my-1">
      </span>
    </span>`;
    const playAgain = document.querySelector('.playAgain');
    playAgain.addEventListener('click', resetGame);
    newPersonalRecord();
    newTop3Score();
}

//Cheking game over --> wall, snake eat himself

const checkGameOver = () => {
    const head = snake.body[0];
    if (checkWall(head) || checkSnakeHead(head)) {
        clearInterval(gameOn);
        clearInterval(watch);
        gameOverSound.play();
        newBoardGameOver();
        return true;
    }
    return false;
}


//Start snake game functions

export const game = () => {
    snakeEatFood();
    update();
    drawSnake();
    drawFood();
    checkGameOver();
}




