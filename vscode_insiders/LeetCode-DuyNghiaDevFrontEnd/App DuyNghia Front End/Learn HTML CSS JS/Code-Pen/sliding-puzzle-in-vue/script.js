// 👀 Change the "ratio" value below to alter the board size

const app = new Vue({
  el: '#board',

  data: () => ({
    ratio: 4, // 👈 A little buggy at some sizes; works best at 4, but ¯\_(ツ)_/¯
    squares: [],
    solution: [],
    illegalMoves: [],
    invertSwipe: false,
    gameStarted: false }),


  watch: {
    // Each time the squares change, update the list of legal moves
    squares(newSquares) {
      if (this.gameStarted) {
        // We need nextTick here or the board will render legal moves based on where the empty square *used to* be
        this.$nextTick(() => {
          const legalMoves = this.getLegalMoves();
          newSquares.forEach((square, index) => {
            newSquares[index].isPossibleMove = legalMoves.includes(index) ? true : false;
          });
        });
      }
    } },


  created() {// Generates a board, an answer, and a list of illegal moves based on this.ratio
    const max = this.ratioSquared;
    for (i = 0; i < max; i++) {
      this.squares.push(i === max - 1 ? { val: '', isPossibleMove: false } : { val: i + 1, isPossibleMove: false });
      this.solution.push(i === max - 1 ? { val: '', isPossibleMove: false } : { val: i + 1, isPossibleMove: false });
      if (i % this.ratio == 0) {
        this.illegalMoves.push(i + (i - 1));
      }
    }
  },

  mounted() {// Set styles for any board size properly and randomize it to start
    const squares = document.querySelectorAll('#innerBoard .square');

    // Set up swipe
    const innerBoard = document.getElementById('innerBoard');
    const touchBoard = new Hammer(innerBoard);

    touchBoard.get('swipe').set({
      direction: Hammer.DIRECTION_ALL });


    touchBoard.on('swipeup swipedown swipeleft swiperight', e => {
      this.handleClick(e);
    });

    // Set the ratio in CSS
    document.querySelector('.root').style.setProperty('--ratio', this.ratio);

    this.randomizeBoard();
  },


  computed: {
    randomMoveQty() {
      // The larger the board is, the more moves it will take to sufficiently randomize it
      return this.ratio * 75;
    },

    // Returns how many squares are currently in the correct position
    howManyCorrect() {
      const correctlyPlacedSquares = this.squares.filter((square, index) => {
        return Number(square.val) == Number(index + 1) || Number(index + 1) == this.ratioSquared && !square.val;
      });

      if (correctlyPlacedSquares.length === this.ratioSquared && this.gameStarted === true) {
        // Lets the last move resolve visually before ending the game
        setTimeout(() => {
          alert('YOU WIN! Click the "re-shuffle" button to start a new game (or adjust the ratio to get crazy)!');
        }, 200);
      }

      return correctlyPlacedSquares.length;
    },

    ratioSquared() {
      return this.ratio * this.ratio;
    } },



  methods: {
    moveIsNotTheSameSquare(a, b) {
      return a != b; // Can't shuffle a square with itself
    },

    moveIsInBounds(a, b) {
      // Don't let the user try to move a square outside the board
      return a >= 0 && b >= 0 && a < this.ratioSquared && b < this.ratioSquared;
    },

    moveIsAdjacentSquare(a, b) {
      // Squares are either next to each other or above/below each other
      return a + b === 1 || a - b === 1 || b - a === 1 ||
      // …And we avoid the loophole where it LOOKS like the move is valid even though it's not because the two indexes are small enough they add up to the board size
      a + b == this.ratio && a - b >= this.ratio || a - b == this.ratio || b - a == this.ratio;
    },

    moveIsNotCrossRowHorizontal(a, b) {
      // Eliminates "adjacent" values on separate rows, like 4 -> 5 on a 4 × 4 grid
      return (a - b === 1 || b - a === 1) && !this.illegalMoves.includes(a + b) || a - b !== 1 && b - a !== 1;
    },

    // Does what it says on the tin; returns true if move is valid and false otherwise
    isValidMove(a, b) {
      a = Number(a);
      b = Number(b);

      if (
      this.moveIsNotTheSameSquare(a, b) &&
      this.moveIsInBounds(a, b) &&
      this.moveIsAdjacentSquare(a, b) &&
      this.moveIsNotCrossRowHorizontal(a, b))
      {
        return true;
      }

      return false;
    },

    // Makes a bunch of random moves to shuffle the board
    // Necessary because it is possible to get an un-winnable board,
    // So we need to start with the correct board then shuffle it up randomly.
    randomizeBoard(e) {
      if (this.gameStarted && typeof e !== 'undefined') {
        const confirmation = confirm('Are you sure you want to shuffle? Your current game will be lost forever.');

        if (!confirmation) return;
      }

      let randomized = this.randomMoveQty;
      let shuffleSpeed = 10; // Speed can be adjusted; bigger boards take longer.
      this.gameStarted = false;

      const randomMove = () => {
        if (randomized > 0) {
          const a = this.getEmptySquareIndex();
          const b = this.generateRandomMove(a);

          if (!this.isValidMove(a, b)) {
            randomMove();
          } else {
            this.swap(a, b);
            randomized--;

            if (randomized > 0) {
              this.$nextTick(() => randomMove());
            } else {
              this.gameStarted = true;
              this.focusEmptySquare();
              // We don't want to transition while we're shuffling
              document.querySelector('.root').style.setProperty('--transition', 'transform .15s ease-out');
              return;
            }
          }
        }
      };

      setTimeout(() => {
        randomMove();
      }, 100);
    },

    getLegalMoves() {
      const emptyIndex = this.getEmptySquareIndex();
      const possibleMoves = [emptyIndex - 1, emptyIndex + 1, emptyIndex - this.ratio, emptyIndex + this.ratio];
      const legalMoves = possibleMoves.filter(index => {
        return this.isValidMove(index, emptyIndex);
      });

      return legalMoves;
    },

    // Used to set HTML properties on move squares
    isPossibleMove(index) {
      return this.getLegalMoves().includes(index) ? 'possible-move' : '';
    },

    generateRandomMove(x) {
      x = Number(x);
      const move = Math.floor(Math.random() * this.ratio);
      if (move === 0) {
        return x - 1;
      } else if (move === 1) {
        return x + 1;
      } else if (move === 2) {
        return x - this.ratio;
      } else if (move === 3) {
        return x + this.ratio;
        // Could just be a return instead of an else/if but this reads better I think 
      }
    },

    // Passes accessible info on tile position to the DOM
    getAccessibleSquarePosition(val, index) {
      let tileIdentifier = val ? `Tile ${val}` : `Empty tile`;
      return `${tileIdentifier} ${val - 1 === index ? 'correctly placed' : ''} in position ${index + 1}: row ${Math.floor(index / this.ratio) + 1}, column ${index % this.ratio + 1}`;
    },

    focusEmptySquare() {
      this.$nextTick(() => this.$refs.empty[0].focus());
    },

    getEmptySquareIndex() {
      return this.$refs.empty ? Number(this.$refs.empty[0].getAttribute('index')) : this.ratioSquared - 1;
    },

    // Specifically handles keyboard events
    handleArrow(e) {
      const emptyIndex = this.getEmptySquareIndex();
      let clickedIndex;
      if (e.which === 37) {
        clickedIndex = emptyIndex - 1;
      } else if (e.which === 38) {
        clickedIndex = emptyIndex - this.ratio;
      } else if (e.which === 39) {
        clickedIndex = emptyIndex + 1;
      } else if (e.which === 40) {
        clickedIndex = emptyIndex + this.ratio;
      } else {
        return; // Don't do anything if the key wasn't an arrow key
      }

      if (this.isValidMove(emptyIndex, clickedIndex)) {
        this.swap(emptyIndex, clickedIndex);
        this.gameStarted && this.focusEmptySquare();
      }
    },

    // Specifically handles clicks and swipes
    handleClick(e) {
      // Get the empty square and the clicked square, then both of their index values
      const emptyIndex = this.getEmptySquareIndex();
      const wasSwipe = e.type && e.type.includes('swipe');
      let clicked;
      let clickedIndex;

      if (wasSwipe) {
        if (e.type === 'swiperight') {
          clickedIndex = this.invertSwipe ? emptyIndex + 1 : emptyIndex - 1;
        } else if (e.type === 'swipeleft') {
          clickedIndex = this.invertSwipe ? emptyIndex - 1 : emptyIndex + 1;
        } else if (e.type === 'swipeup') {
          clickedIndex = this.invertSwipe ? emptyIndex - this.ratio : emptyIndex + this.ratio;
        } else if (e.type === 'swipedown') {
          clickedIndex = this.invertSwipe ? emptyIndex + this.ratio : emptyIndex - this.ratio;
        }
      } else {
        clicked = e.target;
        clickedIndex = Number(clicked.getAttribute('index'));
      }

      if (!(emptyIndex || clickedIndex)) {
        return; // If we don't have a valid index value for both the empty square and the clicked square, exit early
      }

      // Check if the clicked move is valid
      if (this.isValidMove(emptyIndex, clickedIndex)) {
        // Shuffle the two squares if it's a valid move
        this.swap(emptyIndex, clickedIndex);
        // Focus the empty square if it was a click or keyboard move
        this.gameStarted && !wasSwipe && this.focusEmptySquare();
      } else {
        return; // If it's not a valid move, do nothing
      }
    },

    // The big magic method that actually swaps two squares when a move is made
    swap(clickedIndex, emptyIndex) {
      const a = this.squares[clickedIndex];
      const b = this.squares[emptyIndex];
      this.$set(this.squares, clickedIndex, b);
      this.$set(this.squares, emptyIndex, a);
    } } });