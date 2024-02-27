//variables
//to choose first turn. 0 means X and 1 means O
let turn = Math.round(Math.random());
//game status to show whose turn it is, who won or show draw
let game_status = document.querySelector(".status");
setStatus(turn);
//an array to save where the player put a marble
let board = ["","","","","","","","",""];
//players win state
const patterns = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

//event listeners
//a function to add an event listener to each marble places 
function marbelsPlaceListener() {
    document.querySelectorAll(".place").forEach(element => {
        element.addEventListener("click", placeMarble);
    });
}
marbelsPlaceListener();
//add an event listener to restart button
document.querySelector("button").addEventListener("click", restartGame);

//functions
//to place a marble
function placeMarble(e) {
    //check the turn
    if (turn == 0) {
        //for X set the color red
        e.target.style.color = "red"
        e.target.textContent = "X";
        //get data from the target and place the marble in board array
        board[Number(e.target.getAttribute("data-Number"))] = "X";
        //set turn to 1
        turn = 1;
    } else {
        e.target.style.color = "rgb(36, 230, 29)"
        e.target.textContent = "O";
        board[Number(e.target.getAttribute("data-Number"))] = "O";
        turn = 0;
    }
    //set new status
    setStatus(turn);
    //check the pattern
    checkPattern();
    //remove the event listener from users clicked target
    e.target.removeEventListener("click", placeMarble)
}
//to set status
function setStatus(statusTXT) {
    let marble;
    //check the turn
    if (statusTXT == 0) {
        //ad a span to status element
        marble = document.querySelector(".status span");
        //set the text content X
        marble.textContent = "X";
        //set the color red
        marble.style.color = "red";
    } 
    if (statusTXT == 1) {
        marble = document.querySelector(".status span");
        marble.textContent = "O";
        marble.style.color = "green";
    }
    if (statusTXT == "win") {
        //remove event listener from all of the marbles place
        document.querySelectorAll(".place").forEach(element => {
            element.removeEventListener("click", placeMarble);
        });
        //display who won
        game_status.textContent = turn == 0 ? "O has won!" : "X has won!";
    }
    if (statusTXT == "draw") {
        game_status.textContent = "Draw!";
    }
}

// to check players marbles pattern
function checkPattern() {
    //when the board doesnt include empty space it is draw
    if (!board.includes("")) {
        setStatus("draw");
    }
    //a loop to check the patterns
    for (let index = 0; index < patterns.length; index++) {
        const [value1, value2, value3] = patterns[index];
        if (board[value1] != "" && board[value2] != "" && board[value3] != "") {
            if (board[value1] == board[value2] && board[value2] == board[value3]) {
                setStatus("win");
            }
        }
    }
}
//a function to restart the game
function restartGame() {
    board.fill("");
    turn = Math.round(Math.random());
    document.querySelectorAll(".place").forEach(element => {
        element.textContent = "";
    });
    game_status.textContent = "Play turn: ";
    document.querySelector(".status").appendChild(document.createElement("span"));
    marbelsPlaceListener();
    setStatus(turn);
}

