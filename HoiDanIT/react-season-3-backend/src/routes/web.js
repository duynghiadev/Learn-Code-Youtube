import express from "express";
import homeController from "../controllers/HomeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.post("/get-data-by-url", homeController.getDataByURL);

    return app.use('/', router);
}

module.exports = initWebRoutes;
