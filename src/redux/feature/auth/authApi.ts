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

    getAllUsers: builder.query<IResponseType<IUserInfo[]>, void>({
      query: () => ({
        url: "/auth/users",
        method: "GET",
      }),
      providesTags: ["user"],
    }),

    updateUserStatus: builder.mutation<IResponseType<IUserInfo>, { id: string; status: string }>({
      query: ({ id, status }) => ({
        url: `/auth/user/${id}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["user"],
    }),

    updateUserToAdmin: builder.mutation<IResponseType<IUserInfo>, { id: string }>({
      query: ({ id }) => ({
        url: `/auth/user/${id}/admin`,
        method: "PATCH",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation, useGetAllUsersQuery, useUpdateUserStatusMutation, useUpdateUserToAdminMutation } = authApi;
