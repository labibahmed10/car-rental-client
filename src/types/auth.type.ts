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

export interface IAuthState {
  user: string | null;
  token: string | null;
}
