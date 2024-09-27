import { jwtDecode } from "jwt-decode";
import { IUserToken } from "../types/auth.type";

export const verifyToken = (token: string): IUserToken => {
  return jwtDecode(token);
};

export const isTokenExpired = (token: string): boolean => {
  const decodedToken = verifyToken(token);
  const expirationTime = decodedToken.exp * 1000;
  const currentTime = Date.now();

  return currentTime >= expirationTime;
};
