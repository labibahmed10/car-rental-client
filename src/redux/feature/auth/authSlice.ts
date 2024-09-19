import { createSlice } from "@reduxjs/toolkit/react";
import { IAuthState } from "../../../types/auth.types";

const initialState: IAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
  },
});

export const { signIn } = authSlice.actions;

export default authSlice.reducer;
