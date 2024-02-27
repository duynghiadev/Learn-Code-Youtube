const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const delay = require("delay");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("user connect");

  socket.on("chat", (message) => {
    console.log(message);
    io.emit("chat", message);
  });
});

server.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

async function broadcastCoinPrice() {
  while (true) {
    const price = 38345 + Math.random() * 300;
    io.emit("price", parseFloat(price.toFixed(3)));
    await delay(500);
  }
}

broadcastCoinPrice();
