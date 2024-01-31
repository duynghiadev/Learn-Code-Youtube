import express from "express";
import cors from "cors";
require("dotenv").config();
import initRoutes from "./src/routes";

require("./connectionDatabase");

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    // CRUD configuration
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRoutes(app);

const PORT = process.env.PORT || 8888;

const listener = app.listen(PORT, () => {
  console.log("server is running on the port " + listener.address().port);
});
