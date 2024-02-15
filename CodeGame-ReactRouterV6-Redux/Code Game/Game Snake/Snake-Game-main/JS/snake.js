import { withWall, board } from './dom.js'

export let snake = {
    snakeSpeed:  350,
    snakeGrowth: 2,
    body: [
        {x:6, y:5},
        {x:5, y:5},
        {x:4, y:5}
        ]
}

export const drawSnake = () => {
    board.innerHTML = ' ';
    snake.body.forEach(pos => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = pos.y;
        snakeElement.style.gridColumnStart = pos.x;
        snakeElement.classList.add('snake');
        board.appendChild(snakeElement);
    });
}

//Cheak if the input position collision with the snake position

export const onSnakePos = (x, y, ignoreHead = false) => {
    if(ignoreHead) {
        for(let i = 1; i < snake.body.length; i++) {
            if(snake.body[i].x === x && snake.body[i].y === y) return true;
        }
    } else {
        for(let i = 0; i < snake.body.length; i++) {
            if(snake.body[i].x === x && snake.body[i].y === y) return true;
        }
    }
    return false;
}

//Cheak if the snake head collision with the wall

export const checkWall = (head) => {
    if(withWall) return head.x < 1 || head.x > 26 || head.y < 1 || head.y > 26;
    else return false;
}

//Cheak collision with snake head

export const checkSnakeHead = (head) => {
    return  onSnakePos(head.x, head.y, true);
}
