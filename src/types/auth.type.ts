export interface IUserInfo {
  _id: string;
  name: string;
  email: string;
  role: string;
  phone: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUserSingIn {
  email: string;
  password: string;
}

export interface IUserSignUp extends IUserSingIn {
  name: string;
  confirmPassword: string;
  agreement?: boolean;
  role: string;
  phone: string;
  address: string;
}

export interface IAuthState {
  user: IUserInfo | null;
  token: string | null;
}

export interface IUserToken {
  exp: number;
  iat: number;
  role: "user" | "admin";
  userId: string;
}
