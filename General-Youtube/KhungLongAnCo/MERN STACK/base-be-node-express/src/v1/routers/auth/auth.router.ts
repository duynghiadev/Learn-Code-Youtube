import { Router } from "express";
import controller from "../../controlers/auth.controller";
import authenticationToken from "../../../middlewares/is-auth.middleware";

const router = Router();

router.post("/login", controller.login);
router.get("/:id", authenticationToken, controller.getUserDetail);
router.post("/register", controller.register);

export default router;
