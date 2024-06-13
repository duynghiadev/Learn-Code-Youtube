// 1. Graveyard array 

const graveyard = [];

const generateGraveyard = () => {
    for (let i = 0; i < 26; i++) {
        graveyard.push("❌");
    }
    for (let i = 0; i < 2; i++) {
        graveyard.push("🧛");
    }
    for (let i = 0; i < 5; i++) {
        graveyard.push("⚰️");
    }
    for (let i = 0; i < 3; i++) {
        graveyard.push("✝️");
    }
    shuffle(graveyard);
    console.log(graveyard);
}

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

generateGraveyard();

// 2. Game function

const game = () => {
    let coffins = 0;
    let crosses = 0;
    let vampires = 0;
    let tombstones = 0;
    let gameMessage = document.createElement("p");
    gameMessage.innerText = "Dig a grave...";
    gameMessage.style.fontSize = "20px";
    gameMessage.style.fontFamily = "Helvetica";
    gameMessage.style.color = "white";
    gameMessage.style.margin = "0";
    gameMessage.style.padding = "0";
    gameMessage.style.position = "absolute";
    gameMessage.style.top = "0";
    gameMessage.style.left = "0";
    document.body.appendChild(gameMessage);
    const scoreboard = document.createElement("p");
    scoreboard.innerText = `Coffins: ${coffins}, Crosses: ${crosses}`;
    scoreboard.style.fontSize = "20px";
    scoreboard.style.fontFamily = "Helvetica";
    scoreboard.style.color = "white";
    scoreboard.style.margin = "0";
    scoreboard.style.padding = "0";
    scoreboard.style.position = "absolute";
    scoreboard.style.top = "30px";
    scoreboard.style.left = "0";
    document.body.appendChild(scoreboard);
    const graveyardTileMap = document.createElement("div");
    graveyardTileMap.style.width = "600px";
    graveyardTileMap.style.height = "600px";
    graveyardTileMap.style.display = "grid";
    graveyardTileMap.style.gridTemplateColumns = "repeat(6, 1fr)";
    graveyardTileMap.style.gridTemplateRows = "repeat(6, 1fr)";
    graveyardTileMap.style.position = "absolute";
    graveyardTileMap.style.top = "60px";
    graveyardTileMap.style.left = "0";
    document.body.appendChild(graveyardTileMap);
    for (let i = 0; i < 36; i++) {
        const tombstone = document.createElement("button");
        tombstone.innerText = "🪦";
        tombstone.style.fontSize = "50px";
        tombstone.style.fontFamily = "Helvetica";
        tombstone.style.color = "white";
        tombstone.style.backgroundColor = "black";
        tombstone.style.border = "none";
        tombstone.style.margin = "0";
        tombstone.style.padding = "0";
        tombstone.style.width = "100px";
        tombstone.style.height = "100px";
        tombstone.style.cursor = "pointer";
        tombstone.addEventListener("click", () => {
            tombstone.innerText = graveyard[tombstones];
            tombstones++;
            if (tombstone.innerText === "⚰️") {
                coffins++;
                scoreboard.innerText = `Coffins: ${coffins}, Crosses: ${crosses}`;
                if (coffins === 4) {
                    gameMessage.innerText = "You win!";
                }
            } else if (tombstone.innerText === "✝️") {
                crosses++;
                scoreboard.innerText = `Coffins: ${coffins}, Crosses: ${crosses}`;
            } else if (tombstone.innerText === "🧛") {
                vampires++;
                scoreboard.innerText = `Coffins: ${coffins}, Crosses: ${crosses}`;
                if (vampires > crosses) {
                    gameMessage.innerText = "You lose!";
                }
            }
        });
        graveyardTileMap.appendChild(tombstone);
    }
}

game();

// 5. New game button

const newGameButton = document.createElement("button");
newGameButton.innerText = "New game";
newGameButton.style.fontSize = "20px";
newGameButton.style.fontFamily = "Helvetica";
newGameButton.style.color = "white";
newGameButton.style.backgroundColor = "black";
newGameButton.style.border = "none";
newGameButton.style.margin = "0";
newGameButton.style.padding = "0";
newGameButton.style.width = "100px";
newGameButton.style.height = "30px";
newGameButton.style.cursor = "pointer";
newGameButton.style.position = "absolute";
newGameButton.style.top = "660px";
newGameButton.style.left = "0";
newGameButton.addEventListener("click", () => {
    document.body.innerHTML = "";
    generateGraveyard();
    game();
    document.body.appendChild(newGameButton);
});
document.body.appendChild(newGameButton);