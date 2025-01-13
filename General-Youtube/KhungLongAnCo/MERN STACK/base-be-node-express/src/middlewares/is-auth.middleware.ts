import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const authenticationToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new Error("Access Denied: No Token Provided");
    }
    const token = authHeader.split(" ")[1]; // Bearer <token>
    const isVerified = jwt.verify(token, String(process.env.JWT_SECRET));
    if (isVerified) {
      next();
    } else {
      throw new Error("Token is invalid");
    }
  } catch (error) {
    next(error);
  }
};

export default authenticationToken;
