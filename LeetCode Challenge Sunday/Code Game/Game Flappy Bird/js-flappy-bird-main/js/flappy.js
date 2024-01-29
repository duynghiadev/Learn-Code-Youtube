function newElement(tagName, className) {
    const elem = document.createElement(tagName);
    elem.className = className;
    return elem;
};

function Pipe(reversed = false) {
    this.element = newElement('div', 'pipe');

    const edge = newElement('div', 'edge');
    const body = newElement('div', 'body');
    this.element.appendChild(reversed ? body : edge);
    this.element.appendChild(reversed ? edge : body);

    this.setOpeningHeight = totalHeight => body.style.height = `${totalHeight}px`;
};

function PipePair(totalHeight, openingGap, x) {
    this.element = newElement('div', 'pipe-pair');

    this.upper = new Pipe(true);
    this.lower = new Pipe(false);

    this.element.appendChild(this.upper.element);
    this.element.appendChild(this.lower.element);

    this.drawOpeningHeight = () => {
        const upperHeight = Math.random() * (totalHeight - openingGap);
        const lowerHeight = totalHeight - openingGap - upperHeight;
        this.upper.setOpeningHeight(upperHeight);
        this.lower.setOpeningHeight(lowerHeight);
    };

    this.getX = () => parseInt(this.element.style.left.split('px')[0]);
    this.setX = x => this.element.style.left = `${x}px`;
    this.getWidth = () => this.element.clientWidth;

    this.drawOpeningHeight();
    this.setX(x);
};

function WallsSequence(totalHeight, totalWidth, openingGap, wallGap, upScore) {
    this.pairs = [
        new PipePair(totalHeight, openingGap, totalWidth),
        new PipePair(totalHeight, openingGap, totalWidth + wallGap),
        new PipePair(totalHeight, openingGap, totalWidth + wallGap * 2),
        new PipePair(totalHeight, openingGap, totalWidth + wallGap * 3)
    ];

    const displacement = 3;
    this.animate = () => {
        this.pairs.forEach(pair => {
            pair.setX(pair.getX() - displacement);

            // When the element leaves the game zone, it gets drawed before being put back to the end of the line.
            if (pair.getX() < -pair.getWidth()) {
                pair.setX(pair.getX() + wallGap * this.pairs.length);
                pair.drawOpeningHeight();
            };

            // with birdWidth and pipeWidth, the score is raised only when the bird completely crosses the pipe wall.
            const middlePoint = totalWidth / 2;
            const birdWidth = 60;
            const pipeWidth = 130;
            const crossedPipeWall = pair.getX() + displacement + birdWidth + pipeWidth >= middlePoint && pair.getX() + birdWidth + pipeWidth < middlePoint;
            if(crossedPipeWall) upScore();
        });
    };
};

function Bird(totalHeight) {
    let flying = false;

    this.element = newElement('img', 'bird');
    this.element.src = 'img/bird.png';

    this.getY = () => parseInt(this.element.style.bottom.split('px')[0]);
    this.setY = y => this.element.style.bottom = `${y}px`;

    window.onkeydown = e => flying = true;
    window.onkeyup = e => flying = false;

    this.animate = () => {
        const newY = this.getY() + (flying ? 8 : -5);
        const maxHeight = totalHeight - this.element.clientHeight;

        if (newY <= 0) {
            this.setY(0);
        } else if (newY >= maxHeight) {
            this.setY(maxHeight);
        } else {
            this.setY(newY);
        };
    };

    this.setY(totalHeight / 2);
};

function Score() {
    this.element = newElement('span', 'score');
    this.updateScore = points => {
        this.element.innerHTML = points;
    };
    this.updateScore(0);
};

// Collision treatment
function elementsOverlapping(elementA, elementB) {
    const a = elementA.getBoundingClientRect();
    const b = elementB.getBoundingClientRect();

    const xAxis = a.left + a.width >= b.left && b.left + b.width >= a.left;
    const yAxis = a.top + a.height >= b.top && b.top + b.height >= a.top;
    return xAxis && yAxis;
};

function collided(bird, wallsSequence) {
    let collided = false;
    wallsSequence.pairs.forEach(pipePair => {
        if (!collided) {
            const upper = pipePair.upper.element;
            const lower = pipePair.lower.element;
            collided = elementsOverlapping(bird.element, upper)
                || elementsOverlapping(bird.element, lower);
        };
    });
    return collided;
};

function FlappyBird() {
    let points = 0;

    const gameZone = document.querySelector('[flappy]');
    const clientHeight = gameZone.clientHeight;
    const clientWidth = gameZone.clientWidth;

    const score = new Score();
    const wallsSequence = new WallsSequence(clientHeight, clientWidth, 200, 400,
        () => score.updateScore(++points));
    const bird = new Bird(clientHeight);

    gameZone.appendChild(score.element);
    gameZone.appendChild(bird.element);
    wallsSequence.pairs.forEach(pair => gameZone.appendChild(pair.element));

    this.start = () => {
        // game loop
        const timer = setInterval(() => {
            wallsSequence.animate();
            bird.animate();

            if (collided(bird, wallsSequence)) {
                clearInterval(timer);
            };
        }, 20);
    };
};

new FlappyBird().start();