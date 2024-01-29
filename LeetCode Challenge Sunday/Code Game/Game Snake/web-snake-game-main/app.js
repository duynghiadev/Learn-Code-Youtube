import { Snake } from "./Snake.js";
import { Map } from "./Map.js";
import { Game } from "./Game.js";


var canvas = document.getElementById('thegame'),
context = canvas.getContext('2d');
// command listener
document.addEventListener("keydown",direction);
function direction(event){
    let key = event.keyCode;

    // check if the speed key is pressed
    if (key == 16) {
        if(game.gameTick >= 50){
            game.gameTick-=5
        }
    }else{ // check the direction 
        if( (key == 37 || key == 65) && direct != "RIGHT"){
            direct = "LEFT";
        }else if( ( key == 38 || key == 87) && direct != "DOWN"){
            direct = "UP";
        }else if( (key == 39 || key == 68) && direct != "LEFT"){
            direct = "RIGHT";
        }else if( ( key == 40 || key == 83) && direct != "UP"){
            direct = "DOWN";
        }
        game.snake.direct = direct;
    }




}
document.addEventListener("keyup",function(event) {
    let key = event.keyCode;
    if (key == 16) {
        game.gameTick = defaultTick;
        console.log("cancel")
    }
})
document.getElementById("start-button").addEventListener("click", function(){
    if(!game.gameStarted ){
        let level = document.getElementById("level-select").value
        switch (level) {
            case "level1":
                game = new Game({ctx:context, tick:gameTick, blockSize:blockSize});
                break;
            case "level2":
                game = new Game({
                    ctx:context, 
                    tick:gameTick,
                    blockSize:blockSize,
                    map:new Map({
                        name:"Border",
                        ctx:context, 
                        border:true,
                        cellHeight:blockSize,
                        cellWidth:blockSize
                    })
                });
                break;
            case "level3":
                game= new Game({
                    ctx:context, 
                    tick:gameTick,
                    blockSize:blockSize,
                    map:new Map({
                        ctx:context,
                        name:"Test",
                        rectangles:level3rects,
                        border:true,
                        cellHeight:blockSize,
                        cellWidth:blockSize,
                    })
                })
            default:
                break;
        }
        game.start();
    }
})
document.getElementById("stop-button").addEventListener("click", function(){
    game.stop();
    document.getElementById("continue-button").style.display = "block";
    this.style.display = "none";
})
document.getElementById("continue-button").addEventListener("click", function(){
    game.resume();
    document.getElementById("stop-button").style.display = "block";
    this.style.display = "none";
})
document.getElementById("reset-button").addEventListener("click", function(){
    game.reset();
    document.getElementById("stop-button").style.display = "block";
    document.getElementById("continue-button").style.display = "none";
})
document.getElementById("restart-button").addEventListener("click", function(e) {
    document.getElementById("reset-button").click();
    document.getElementById("start-button").click();
    document.getElementById("stop-button").disabled = false;
})


// document.getElementById("start-button").addEventListener("click", function(){
//     // game.reset();
// })
document.getElementById("block-size").addEventListener("change",function(){
    let value = parseInt(this.value);
    if(value > 2){
        showWarnings();
    }else{
        hideWarnings();
    }
    blockSize = value*10;
    game.blockSize = value;
    

})
document.getElementById("game-tick").addEventListener("change",function(){
    let value = parseInt(this.value);
    console.log(value)
    gameTick = value;
    game.gameTick = value;

})


document.getElementById("level-select").addEventListener("click", function(){
    // still no idea what to put here
})


function showWarnings(){
    document.querySelector(".warning").style.display = "block";
}
function hideWarnings(){
    document.querySelector(".warning").style.display = "none";
}


var level3rects = [
    {
        x:3,
        y:3,
        w:10,
        h:1
    },
    {
        x:15,
        y:3,
        w:1,
        h:10
    }
];
var level4rects = [

];


var highScore = 0;
var blockSize = 10;
var gameTick = 100;
var defaultTick = 100;
var direct = "";
var game = new Game({
    ctx:context, 
    tick:gameTick,
    blockSize:blockSize
});


console.log(game)