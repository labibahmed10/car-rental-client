import { createSlice } from "@reduxjs/toolkit/react";
import { IAuthState } from "../../../types/auth.type";
import { RootState } from "../../store/store";

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

    signOut: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export const selectCurrentToken = (state: RootState) => state.auth?.token;
export const selectCurrentUser = (state: RootState) => state.auth?.user;

export default authSlice.reducer;
