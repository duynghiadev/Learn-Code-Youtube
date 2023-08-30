import express from "express";
import homeController from '../controller/homeController';

const router = express.Router();

/**
 * 
 * @param {*} app : express app
 */

const initWebRoutes = (app) => {
    router.post("/get-data-by-url", homeController.getDataByURL);


    //path, handler
    router.get("/", homeController.handleHelloWord);
    router.get("/user", homeController.handleUserPage);
    router.post("/users/create-user", homeController.handleCreateNewUser);
    router.post("/delete-user/:id", homeController.handleDelteUser)
    router.get("/update-user/:id", homeController.getUpdateUserPage);
    router.post("/user/update-user", homeController.handleUpdateUser);

    //test api
    router.post("/users/delete/:id", homeController.handleDelteUserAPI)
    router.get("/users/all", homeController.handleUserGetAPI);
    router.post("/users/create", homeController.handleCreateNewUserAPI);

    return app.use("/", router);
}

export default initWebRoutes;