import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/user";
import apiKeyService from "../services/apiKey.service";

class Controller {
  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const existedUser = await User.findOne({ email });
    if (!existedUser) {
      res.status(500).json({
        message: "User is not found",
        status: "error",
      });
      return;
    }
    const passwordExact = await bcrypt.compare(password, existedUser.password);

    if (!passwordExact) {
      res.status(500).json({
        message: "Wrong password",
        status: "error",
      });
      return;
    } else {
      const accessToken = await apiKeyService.signApiKeyToken(existedUser);
      res.status(200).json({
        message: "Login success",
        data: {
          accessToken,
        },
        status: "success",
      });
    }
  };

  getUserDetail = async (req: Request, res: Response) => {
    const existedUser = await User.findOne({ _id: req.params.id });
    if (!existedUser) {
      res.status(500).json({
        message: "User is not found",
        status: "error",
      });
      return;
    }

    res.status(200).json({
      message: "Get detail user success",
      data: {
        ...existedUser,
      },
      status: "success",
    });
  };

  register = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log(email);
    const existedUser = await User.findOne({ email });
    if (existedUser) {
      res.status(500).json({
        message: "user is existed",
        status: "error",
      });
      return;
    }
    const passEndcrypted = await bcrypt.hash(password, 12);
    const user = new User({
      email,
      password: passEndcrypted,
    });
    await user.save();

    res.status(200).json({
      message: "User registed successfully.",
      status: "success",
    });
  };
}

const controller = new Controller();

export default controller;
