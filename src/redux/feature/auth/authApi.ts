import { IUserInfo, IUserSignUp, IUserSingIn } from "../../../types/auth.type";
import { IResponseType } from "../../../types/index.type";
import baseApi from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<IResponseType<IUserInfo>, IUserSingIn>({
      query: (credentials) => ({
        url: "/auth/signin",
        method: "POST",
        body: credentials,
      }),
    }),

    signUp: builder.mutation<IResponseType<IUserInfo>, IUserSignUp>({
      query: (credentials) => ({
        url: "/auth/signup",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useSignInMutation,useSignUpMutation } = authApi;
