window.onload = function () /*fonction d'affichage de la fenêtre de jeux à l'ouverture de la page html.*/ {
    let canvasWidth = 900;
    let canvasHeight = 600;
    let blockSize = 30
    let ctx;
    let delay = 100;
    let snakee;
    let applee;
    let widthInBlocks = canvasWidth / blockSize;
    let heightInBlocks = canvasHeight / blockSize;
    let score;
    let timeout;

    init();

    function init() {

        let canvas = document.createElement('canvas'); /*fonction canvas pour faire apparaitre une zone interactive (déssin) sur son HTML.*/
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.border = "30px outset rgba(0,0,0,.8)";
        canvas.style.boxShadow = " 0px 0px 0px black, 0 0 3em rgb(0,0,250), 0 0 3em rgb(0,0,250)";
        canvas.style.margin = "0 auto";
        canvas.style.display = "block";
        canvas.style.backgroundColor = "rgba(0, 150, 200,.8)";
        document.body.appendChild(canvas); /*Appelation du canvas dans le body*/
        ctx = canvas.getContext('2d'); /* variable pour le contexte de notre canvas '2d'*/
        snakee = new Snake([
            [6, 4],
            [5, 4],
            [4, 4],
            [3, 4]
        ], "right");
        applee = new Apple([10, 10]);
        score = 0;
        refreshCanvas();
    }

    function refreshCanvas() {

        snakee.advance();
        if (snakee.checkCollision()) {
            gameOver();
        } else {
            if (snakee.isEatingApple(applee)) {
                score++;
                snakee.ateApple = true;
                do {
                    applee.setNewPosition();
                }
                while (applee.isOnSnake(snakee));
            }

            ctx.clearRect(0, 0, canvasWidth, canvasHeight); /* pour effacer une zone que l'on souhaite */
            /*ctx.fillRect(xCoord, yCoord, 100, 50); les deux premières valeurs sont le positionnement horizontal et vertical.
            Les deux autres sont la dimension de notre dessin comme là un rectangle de 100 px sur 50 px.*/
            drawScore();
            snakee.draw();
            applee.draw();
            timeout = setTimeout(refreshCanvas, delay); /* pour refresh une fonction après un délai passé */
        }
    }

    function gameOver() {
        ctx.save();
        ctx.font = "bold 70px sans-serif";
        ctx.fillStyle = "rgba(210,0,0,.9)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        let centreX = canvasWidth / 2;
        let centerY = canvasHeight / 2;
        ctx.strokeText("Game Over", centreX, centerY - 180);
        ctx.fillText("Game Over", centreX, centerY - 180);
        ctx.font = "bold 50px sans-serif";
        ctx.strokeText("Press the Space Key to replay", centreX, centerY - 120);
        ctx.fillText("Press the Space Key to replay", centreX, centerY - 120);
        ctx.restore();
    }

    function restart() {
        snakee = new Snake([
            [6, 4],
            [5, 4],
            [4, 4],
            [3, 4]
        ], "right");
        applee = new Apple([10, 10]);
        score = 0;
        clearTimeout(timeout);
        refreshCanvas();
    }

    function drawScore() {
        ctx.save();
        ctx.font = "bold 200px sans-serif";
        ctx.fillStyle = "rgba(0,0,0,.7)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        let centreX = canvasWidth / 2;
        let centerY = canvasHeight / 2;
        ctx.fillText(score.toString(), centreX, centerY);
        ctx.restore();
    }

    function drawBlock(ctx, position) {
        let x = position[0] * blockSize;
        let y = position[1] * blockSize;
        ctx.fillRect(x, y, blockSize, blockSize);
        /* les deux premières valeurs sont le positionnement horizontal et vertical.
                Les deux autres sont la dimension de notre dessin comme là un rectangle de 100 px sur 50 px.*/
    }

    function Snake(body, direction) {
        this.body = body;
        this.direction = direction;
        this.ateApple = false;
        this.draw = function () {
            ctx.save();
            ctx.fillStyle = "#33cc33";
            for (let i = 0; i < this.body.length; i++) {
                drawBlock(ctx, this.body[i]);
            }
            ctx.restore();
        };

        this.advance = function () {
            let nextPosition = this.body[0].slice();
            switch (this.direction) {
                case "left":
                    nextPosition[0] -= 1;
                    break;
                case "right":
                    nextPosition[0] += 1;
                    break;
                case "down":
                    nextPosition[1] += 1;
                    break;
                case "up":
                    nextPosition[1] -= 1;
                    break;
                default:
                    throw ("Invalid Direction");
            }
            this.body.unshift(nextPosition);
            if (!this.ateApple)
                this.body.pop();
            else
                this.ateApple = false;
        };

        this.setDirection = function (newDirection) {
            let allowedDirection;
            switch (this.direction) {
                case "left":
                case "right":
                    allowedDirection = ["up", "down"];
                    break;
                case "down":
                case "up":
                    allowedDirection = ["left", "right"];
                    break;
                default:
                    throw ("Invalid Direction");
            }
            if (allowedDirection.indexOf(newDirection) > -1) {
                this.direction = newDirection;
            }
        };

        this.checkCollision = function () {
            let wallCollision = false;
            let snakeCollision = false;
            let head = this.body[0];
            let rest = this.body.slice(1);
            let snakeX = head[0];
            let snakeY = head[1];
            let minX = 0;
            let minY = 0;
            let maxX = widthInBlocks - 1;
            let maxY = heightInBlocks - 1;
            let isNoteBetweenHorizontalWalls = snakeX < minX || snakeX > maxX;
            let isNoteBetweenVerticalwalls = snakeY < minY || snakeY > maxY;

            if (isNoteBetweenHorizontalWalls || isNoteBetweenVerticalwalls) {
                wallCollision = true;
            }

            for (let i = 0; i < rest.length; i++) {
                if (snakeX === rest[i][0] && snakeY === rest[i][1]) {
                    snakeCollision = true;
                }
            }

            return wallCollision || snakeCollision;
        };

        this.isEatingApple = function (appleToEat) {
            let head = this.body[0];
            if (head[0] === appleToEat.position[0] && head[1] === appleToEat.position[1])
                return true;
            else
                return false;
        };
    }

    function Apple(position) {
        this.position = position;
        this.draw = function () {
            ctx.save();
            ctx.fillStyle = "#ff0000";
            ctx.beginPath();
            let radius = blockSize / 2;
            let x = this.position[0] * blockSize + radius;
            let y = this.position[1] * blockSize + radius;
            ctx.arc(x, y, radius, 0, Math.PI * 2, true);
            ctx.fill();
            ctx.restore();
        };

        this.setNewPosition = function () {
            let newX = Math.round(Math.random() * (widthInBlocks - 1));
            let newY = Math.round(Math.random() * (heightInBlocks - 1));
            this.position = [newX, newY];
        };

        this.isOnSnake = function (snakeToCheck) {
            let isOnSnake = false;

            for (let i = 0; i < snakeToCheck.body.length; i++) {
                if (this.position[0] === snakeToCheck.body[i][0] && this.position[1] === snakeToCheck.body[i][1]) {
                    isOnSnake = true;
                }
            }
            return isOnSnake;
        };
    }

    document.onkeydown = function handleKeyDown(e) {
        let key = e.keyCode;
        let newDirection;
        switch (key) {
            case 37:
                newDirection = "left";
                break;
            case 38:
                newDirection = "up";
                break;
            case 39:
                newDirection = "right";
                break;
            case 40:
                newDirection = "down";
                break;
            case 32:
                restart();
                return;
            default:
                return;

        };
        snakee.setDirection(newDirection);
    }
}