import { Router } from "express";
import authRouter from "./auth/auth.router";

export const router = Router();

router.use("/auth", authRouter);
