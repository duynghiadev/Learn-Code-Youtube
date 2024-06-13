/**
Rock Paper Scissors Lizard Spock Game
author: @chrisbautista
website: https://www.codespud.com
*/

(function () {
  const Hands = {
    Rock: 0,
    Paper: 1,
    Scissor: 2,
    Lizard: 3,
    Spock: 4
  };

  let score = [0, 0];
  let maxGames = 10;
  let games = 0;
  let done = false;

  const buttons = document.querySelectorAll(".cs-hand");
  const playerNode1 = document.querySelector(".cs-computer .cs-player-1");
  const playerNode2 = document.querySelector(".cs-computer .cs-player-2");
  const scoreNode1 = document.querySelector(".cs-score-1");
  const scoreNode2 = document.querySelector(".cs-score-2");
  const boardNode = document.querySelector(".cs-computer");
  const winLoseNode = document.querySelector(".cs-win-lose");
  const playBtn = document.querySelector(".cs-play-btn");
  const gameNumber = document.querySelector(".cs-game-number");

  let boardTimeout = null;

  function playGame() {
    console.log("start game");

    resetGame();

    Array.from(buttons).forEach((button) =>
      button.addEventListener("click", runHand)
    );

    playBtn.addEventListener("click", () => {
      resetGame();
    });
  }

  function runHand(e) {
    if (done) {
      return;
    }
    const target = e.currentTarget;
    const choice = parseInt(target.dataset.hand);
    const computerChoice = getComputerHand();
    popHand(playerNode1, choice);
    popHand(playerNode2, computerChoice);

    target.classList.add("clicked");
    setTimeout((_) => target.classList.remove("clicked"), 200);

    setScore(parseInt(choice), parseInt(computerChoice));

    setGame();
    gameOver();
  }

  function gameOver() {
    let [yourScore, pcScore] = score;
    if (games >= maxGames) {
      done = true;
      if (yourScore === pcScore) {
        gameResult("It's a draw!", "tie");
      } else if (yourScore > pcScore) {
        gameResult("You win!", "win");
      } else {
        gameResult("You lost!", "lose");
      }
      return;
    }
  }

  function setGame() {
    gameNumber.innerHTML = `${++games} / ${maxGames}`;
  }

  function gameResult(message, state) {
    boardNode.classList.add("hidden");
    winLoseNode.querySelector("p").innerHTML = message;
    winLoseNode.classList.remove("hidden");
    winLoseNode.classList.add(state);
    gameNumber.innerHTML = `${games} / ${maxGames}`;
  }

  function resetGame() {
    score = [0, 0];
    games = 0;
    done = false;
    renderScore(scoreNode1, 0);
    renderScore(scoreNode2, 0);

    popHand(playerNode1, 0);
    popHand(playerNode2, 0);

    boardNode.classList.remove("hidden");
    winLoseNode.setAttribute("class", "cs-win-lose hidden");
    gameNumber.innerHTML = `${games} / ${maxGames}`;
  }

  function popHand(node, choice) {
    node.classList.add("enter");
    node.setAttribute("data-choice", choice);
    setTimeout((_) => node.classList.remove("enter"), 400);
  }

  function animateBoard(state) {
    clearTimeout(boardTimeout);
    boardNode.setAttribute("class", "cs-computer");
    boardNode.classList.add(state);
    boardTimeout = setTimeout((_) => boardNode.classList.remove(state), 900);
  }

  function getComputerHand() {
    return Math.floor(Math.random() * Object.keys(Hands).length);
  }

  function renderScore(node, value) {
    node.querySelector("span").innerHTML = value;
  }

  function setScore(choice, computerChoice) {
    if (choice === computerChoice) {
      // tie
      animateBoard("tie");
      return;
    }

    if (
      (choice === Hands.Paper && computerChoice === Hands.Rock) ||
      (choice === Hands.Rock && computerChoice === Hands.Scissor) ||
      (choice === Hands.Scissor && computerChoice === Hands.Paper) ||
      (choice === Hands.Rock && computerChoice === Hands.Lizard) ||
      (choice === Hands.Lizard && computerChoice === Hands.Spock) ||
      (choice === Hands.Spock && computerChoice === Hands.Scissors) ||
      (choice === Hands.Scissors && computerChoice === Hands.Lizard) ||
      (choice === Hands.Lizard && computerChoice === Hands.Paper) ||
      (choice === Hands.Paper && computerChoice === Hands.Spock) ||
      (choice === Hands.Spock && computerChoice === Hands.Rock)
    ) {
      animateBoard("win");
      renderScore(scoreNode1, ++score[0]);
      return;
    }

    animateBoard("lose");
    renderScore(scoreNode2, ++score[1]);
  }

  playGame();
})();