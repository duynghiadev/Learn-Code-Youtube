const express = require("express");
require("dotenv").config();
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

// START API
app.get("/api/refreshToken", (req, res) => {
  return res.status(200).json({
    status: "success",
    elements: {
      token: "newAccessToken",
      timeExpired: Date.now() + 60 * 1000,
    },
  });
});

app.get("/api/users", (req, res) => {
  return res.status(200).json({
    status: "success",
    elements: [
      {
        name: "duynghiadev",
      },
      {
        name: "tips javascript",
      },
    ],
  });
});

app.get("/api/login", (req, res) => {
  return res.status(200).json({
    status: "success",
    elements: {
      token: "accessToken",
      timeExpired: Date.now() + 60 * 1000,
    },
  });
});
// END API

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
