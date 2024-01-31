import { UserType } from "../types/user";
import instance from "./instance";

export const signup = (user: UserType) => {
  const url = `/signup`;
  return instance.post(url, user);
};
export const signin = (user: Pick<UserType, 'email' | 'password'>) => {
  // export const signin = (user : UserType) => {
  const url = `/signin`;
  return instance.post(url, user);
};

