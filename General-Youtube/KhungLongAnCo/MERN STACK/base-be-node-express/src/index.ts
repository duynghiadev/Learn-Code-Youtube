import express, { Request, Response } from "express";
import cors from "cors";
import { connectDB } from "./v1/utils/database";
import * as v1 from "./v1/routers/router";
// import bodyParser from "body-parser";
require("dotenv").config();

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/v1", v1.router);

const PORT = 3000;
connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Sever is running on ${PORT}`);
});
