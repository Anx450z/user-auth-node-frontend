import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userAuthApi = createApi({
  reducerPath: "userAuthApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/user/" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => {
        return {
          url: "register",
          method: "POST",
          body: user,
          header: {
            Content: "application/json",
          },
        };
      },
    }),
    loginUser: builder.mutation({
      query: (user) => {
        return {
          url: "login",
          method: "POST",
          body: user,
          header: {
            Content: "application/json",
          },
        };
      },
    }),
    sendPasswordResetEmail: builder.mutation({
      query: (user) => {
        return {
          url: "send-reset-password-email",
          method: "POST",
          body: user,
          header: {
            Content: "application/json",
          },
        };
      },
    }),
    resetPassword: builder.mutation({
      query: ({ actualData, id, token }) => {
        return {
          url: `user-password-reset/${id}/${token}`,
          method: "POST",
          body: actualData,
          header: {
            Content: "application/json",
          },
        };
      },
    }),
    getLoggedUser: builder.query({
      query: (token) => {
        return {
          url: "logged-user",
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useSendPasswordResetEmailMutation,
  useResetPasswordMutation,
  useGetLoggedUserQuery
} = userAuthApi;
