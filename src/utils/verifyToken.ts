import { jwtDecode } from "jwt-decode";
import { IUserToken } from "../types/auth.type";

export const verifyToken = (token: string): IUserToken => {
  return jwtDecode(token);
};
