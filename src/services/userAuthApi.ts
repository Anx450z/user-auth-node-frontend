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
    loginUser : builder.mutation({
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
    sendPasswordResetEmail : builder.mutation({
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
    })
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation, useSendPasswordResetEmailMutation } = userAuthApi;
