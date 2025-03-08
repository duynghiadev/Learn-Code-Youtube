import jwt from "jsonwebtoken";
import { IUser } from "../models/user";

class Service {
  generateToken = (user: IUser) => {
    return jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      String(process.env.JWT_SECRET),
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );
  };
  signApiKeyToken = async (user: IUser) => {
    const token = await this.generateToken(user);
    return token;
  };
}

const apiKeyService = new Service();

export default apiKeyService;
