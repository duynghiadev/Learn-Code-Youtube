import { attach } from "../library/store.js";
import app from "../component/app.js";

const root = document.querySelector("#root");
attach(app, root);
