const shuffle = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

class Game {
  constructor() {
    this.score = 0;
    this.boardWidth = 10;
    this.boardHeight = 23;
    this.currentBoard = new Array(this.boardHeight)
      .fill(0)
      .map(() => new Array(this.boardWidth).fill(0));
    this.landedBoard = new Array(this.boardHeight)
      .fill(0)
      .map(() => new Array(this.boardWidth).fill(0));
    this.currentBag = null;
    this.currentTetromino = this.randomTetromino();
    this.nextTetromino = this.getNextTetromino();
    this.canvas = document.getElementById("tetris-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.gameInterval = null;
    this.gameOver = false;
  }

  draw(blockSize = 24, padding = 4) {
    /* Vẽ khung của board */
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.lineWidth = 2;
    this.ctx.rect(
      padding,
      padding,
      blockSize * this.boardWidth + padding * (this.boardWidth + 1),
      blockSize * (this.boardHeight - 3) + padding * (this.boardHeight - 3 + 1)
    );
    this.ctx.stroke();

    /* Lặp qua các phần tử của mảng board và vẽ các block tại đúng vị trí */
    for (let i = 3; i < this.boardHeight; i++) {
      for (let j = 0; j < this.boardWidth; j++) {
        if (this.currentBoard[i][j] > 0) {
          this.ctx.fillStyle = this.getColor(this.currentBoard[i][j]);
        } else {
          this.ctx.fillStyle = "rgb(248, 248, 248)";
        }
        this.ctx.fillRect(
          padding * 2 + j * (blockSize + padding),
          padding * 2 + (i - 3) * (blockSize + padding),
          blockSize,
          blockSize
        );
      }
    }

    /* Viết ra các đoạn text */
    this.ctx.fillStyle = "rgb(0, 0, 0)";
    this.ctx.font = "28px";
    this.ctx.fillText("TIẾP THEO:", 300, 28);
    this.ctx.fillText("ĐIỂM SỐ:", 300, 200);
    this.ctx.fillText(this.score.toString(), 300, 230);

    /* Vẽ ra tetromino tiếp theo */
    if (this.nextTetromino) {
      for (let i = 0; i < this.nextTetromino.height; i++) {
        for (let j = 0; j < this.nextTetromino.width; j++) {
          if (this.nextTetromino.shape[i][j] > 0) {
            this.ctx.fillStyle = this.getColor(this.nextTetromino.shape[i][j]);
          } else {
            this.ctx.fillStyle = "rgb(255, 255, 255)";
          }
          this.ctx.fillRect(
            300 + j * padding + j * blockSize,
            50 + i * padding + i * blockSize,
            blockSize,
            blockSize
          );
        }
      }
    }
  }

  getColor(cellNumber) {
    switch (cellNumber) {
      case 1:
        return LShape.color;
      case 2:
        return JShape.color;
      case 3:
        return OShape.color;
      case 4:
        return TShape.color;
      case 5:
        return SShape.color;
      case 6:
        return ZShape.color;
      case 7:
        return IShape.color;
    }
  }

  generateBag() {
    const newBag = [
      new LShape(1, 4),
      new JShape(1, 4),
      new OShape(2, 4),
      new TShape(2, 4),
      new SShape(2, 4),
      new ZShape(2, 4),
      new IShape(0, 4),
    ];

    return shuffle(newBag);
  }

  randomTetromino() {
    if (this.currentBag === null) {
      this.currentBag = this.generateBag();
    }
    const tetromino = this.currentBag.shift();
    if (this.currentBag.length === 0) {
      this.currentBag = this.generateBag();
    }
    this.nextTetromino = this.getNextTetromino();
    return tetromino;
  }

  getNextTetromino() {
    return this.currentBag[0];
  }

  play() {
    this.gameInterval = setInterval(() => {
      this.progress();
      this.updateCurrentBoard();
      this.draw();
    }, 800);
  }

  progress() {
    let nextTetromino = new this.currentTetromino.constructor(
      this.currentTetromino.row + 1,
      this.currentTetromino.col,
      this.currentTetromino.angle
    );
    if (
      !this.bottomOverlapped(nextTetromino) &&
      !this.landedOverlapped(nextTetromino)
    ) {
      this.currentTetromino.fall();
    } else {
      this.mergeCurrentTetromino();

      const clearableRowIndexes = this.findClearableRows();
      this.clearRows(clearableRowIndexes);
      this.score += this.calculateScore(clearableRowIndexes.length);
      if (this.isGameOver()) {
        clearInterval(this.gameInterval);
        this.gameOver = true;
      }

      this.currentTetromino = this.randomTetromino();
    }
  }

  leftOverlapped(tetromino) {
    if (tetromino.col < 0) {
      return true;
    } else {
      return false;
    }
  }

  rightOverlapped(tetromino) {
    if (tetromino.col + tetromino.width > this.boardWidth) {
      return true;
    } else {
      return false;
    }
  }

  bottomOverlapped(tetromino) {
    if (tetromino.row + tetromino.height > this.boardHeight) {
      return true;
    } else {
      return false;
    }
  }

  landedOverlapped(tetromino) {
    for (let i = 0; i < tetromino.height; i++) {
      for (let j = 0; j < tetromino.width; j++) {
        if (
          tetromino.shape[i][j] > 0 &&
          this.landedBoard[tetromino.row + i][tetromino.col + j] > 0
        ) {
          return true;
        }
      }
    }
    return false;
  }

  mergeCurrentTetromino() {
    for (let i = 0; i < this.currentTetromino.height; i++) {
      for (let j = 0; j < this.currentTetromino.width; j++) {
        if (this.currentTetromino.shape[i][j] > 0) {
          this.landedBoard[this.currentTetromino.row + i][
            this.currentTetromino.col + j
          ] = this.currentTetromino.shape[i][j];
        }
      }
    }
  }

  tryMoveDown() {
    if (this.gameOver) {
      return;
    }

    this.progress();
    this.updateCurrentBoard();
    this.draw();
  }

  tryMoveLeft() {
    if (this.gameOver) {
      return;
    }

    const tempTetromino = new this.currentTetromino.constructor(
      this.currentTetromino.row,
      this.currentTetromino.col - 1,
      this.currentTetromino.angle
    );
    if (
      !this.leftOverlapped(tempTetromino) &&
      !this.landedOverlapped(tempTetromino)
    ) {
      this.currentTetromino.col -= 1;
      this.updateCurrentBoard();
      this.draw();
    }
  }

  tryMoveRight() {
    if (this.gameOver) {
      return;
    }

    const tempTetromino = new this.currentTetromino.constructor(
      this.currentTetromino.row,
      this.currentTetromino.col + 1,
      this.currentTetromino.angle
    );
    if (
      !this.rightOverlapped(tempTetromino) &&
      !this.landedOverlapped(tempTetromino)
    ) {
      this.currentTetromino.col += 1;
      this.updateCurrentBoard();
      this.draw();
    }
  }

  tryRotating() {
    if (this.gameOver) {
      return;
    }

    const tempTetromino = new this.currentTetromino.constructor(
      this.currentTetromino.row + 1,
      this.currentTetromino.col,
      this.currentTetromino.angle
    );
    tempTetromino.rotate();
    if (
      !this.rightOverlapped(tempTetromino) &&
      !this.bottomOverlapped(tempTetromino) &&
      !this.landedOverlapped(tempTetromino)
    ) {
      this.currentTetromino.rotate();
      this.updateCurrentBoard();
      this.draw();
    }
  }

  updateCurrentBoard() {
    for (let i = 0; i < this.boardHeight; i++) {
      for (let j = 0; j < this.boardWidth; j++) {
        this.currentBoard[i][j] = this.landedBoard[i][j];
      }
    }

    for (let i = 0; i < this.currentTetromino.height; i++) {
      for (let j = 0; j < this.currentTetromino.width; j++) {
        if (this.currentTetromino.shape[i][j] > 0) {
          this.currentBoard[this.currentTetromino.row + i][
            this.currentTetromino.col + j
          ] = this.currentTetromino.shape[i][j];
        }
      }
    }
  }

  findClearableRows() {
    const clearableIndexes = [];

    this.landedBoard.forEach((row, index) => {
      if (row.every((cell) => cell > 0)) {
        clearableIndexes.push(index);
      }
    });

    return clearableIndexes;
  }

  clearRows(rowIndexes) {
    for (let i = this.landedBoard.length - 1; i >= 0; i--) {
      for (let j = 0; j < rowIndexes.length; j++) {
        if (rowIndexes[j] === i) {
          this.landedBoard.splice(rowIndexes[j], 1);
        }
      }
    }

    for (let i = 0; i < rowIndexes.length; i++) {
      this.landedBoard.unshift(new Array(this.boardWidth).fill(0));
    }
  }

  calculateScore(rowsCount) {
    return (rowsCount * (rowsCount + 1)) / 2;
  }

  isGameOver() {
    for (let i = 0; i < this.boardWidth; i++) {
      if (this.landedBoard[2][i] > 0) {
        return true;
      }
    }

    return false;
  }
}

class Tetromino {
  constructor(row, col, angle = 0) {
    if (this.constructor === Tetromino) {
      throw new Error("This is an abstract class.");
    }
    this.row = row;
    this.col = col;
    this.angle = angle;
  }

  get shape() {
    return this.constructor.shapes[this.angle];
  }

  get width() {
    return this.shape[0].length;
  }

  get height() {
    return this.shape.length;
  }

  fall() {
    this.row += 1;
  }

  rotate() {
    if (this.angle < 3) {
      this.angle += 1;
    } else {
      this.angle = 0;
    }
  }

  move(direction) {
    if (direction === "left") {
      this.col -= 1;
    } else if (direction === "right") {
      this.col += 1;
    }
  }
}

class LShape extends Tetromino {}

LShape.shapes = [
  [
    [1, 0],
    [1, 0],
    [1, 1],
  ],

  [
    [1, 1, 1],
    [1, 0, 0],
  ],

  [
    [1, 1],
    [0, 1],
    [0, 1],
  ],

  [
    [0, 0, 1],
    [1, 1, 1],
  ],
];

LShape.color = "rgb(255, 87, 34)";

class JShape extends Tetromino {}

JShape.shapes = [
  [
    [0, 2],
    [0, 2],
    [2, 2],
  ],

  [
    [2, 0, 0],
    [2, 2, 2],
  ],

  [
    [2, 2],
    [2, 0],
    [2, 0],
  ],

  [
    [2, 2, 2],
    [0, 0, 2],
  ],
];

JShape.color = "rgb(63, 81, 181)";

class OShape extends Tetromino {}

OShape.shapes = [
  [
    [3, 3],
    [3, 3],
  ],

  [
    [3, 3],
    [3, 3],
  ],

  [
    [3, 3],
    [3, 3],
  ],

  [
    [3, 3],
    [3, 3],
  ],
];

OShape.color = "rgb(255, 235, 59)";

class TShape extends Tetromino {}

TShape.shapes = [
  [
    [0, 4, 0],
    [4, 4, 4],
  ],

  [
    [4, 0],
    [4, 4],
    [4, 0],
  ],

  [
    [4, 4, 4],
    [0, 4, 0],
  ],

  [
    [0, 4],
    [4, 4],
    [0, 4],
  ],
];

TShape.color = "rgb(156, 39, 176)";

class SShape extends Tetromino {}

SShape.shapes = [
  [
    [0, 5, 5],
    [5, 5, 0],
  ],

  [
    [5, 0],
    [5, 5],
    [0, 5],
  ],

  [
    [0, 5, 5],
    [5, 5, 0],
  ],

  [
    [5, 0],
    [5, 5],
    [0, 5],
  ],
];

SShape.color = "rgb(76, 175, 80)";

class ZShape extends Tetromino {}

ZShape.shapes = [
  [
    [6, 6, 0],
    [0, 6, 6],
  ],

  [
    [0, 6],
    [6, 6],
    [6, 0],
  ],

  [
    [6, 6, 0],
    [0, 6, 6],
  ],

  [
    [0, 6],
    [6, 6],
    [6, 0],
  ],
];

ZShape.color = "rgb(183, 28, 28)";

class IShape extends Tetromino {}

IShape.shapes = [
  [[7], [7], [7], [7]],

  [[7, 7, 7, 7]],

  [[7], [7], [7], [7]],

  [[7, 7, 7, 7]],
];

IShape.color = "rgb(0, 188, 212)";

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  game.updateCurrentBoard();
  game.draw();
  game.play();

  window.addEventListener("keydown", (event) => {
    switch (event.keyCode) {
      case 37: // Left
        game.tryMoveLeft();
        break;

      case 38: // Up
        game.tryRotating();
        break;

      case 39: // Right
        game.tryMoveRight();
        break;

      case 40: // Down
        game.tryMoveDown();
        break;
    }
  });
});
