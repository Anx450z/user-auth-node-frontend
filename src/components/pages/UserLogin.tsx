import {
  Alert,
  AlertColor,
  Box,
  Button,
  CircularProgress,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../services/userAuthApi";
import { getToken, storeToken } from "../../services/LocalStorageService";
import { useDispatch } from "react-redux";
import { setUserToken } from "../../features/authSlice";

const UserLogin = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    if (actualData.email && actualData.password) {
      const res:any = await loginUser(actualData);
      if (res.data.status === "success"){
        (document.getElementById("login-form") as HTMLFormElement).reset();
        setError({
          status: true,
          msg: "Login Success",
          type: "success",
        });
        // Store Token
          storeToken(res.data.token)
          setTimeout(() => {
            navigate("/profile");
          }, 500);
      }
      if (res.data.status === "failed"){
        setError({
          status: true,
          msg: res.data.msg,
          type: "error",
        });
      }
    } else {
      setError({
        status: true,
        msg: "All fields are required",
        type: "error",
      });
    }
  };
//  saving token using Redux
  let token = getToken()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setUserToken({token: token}))
  },[token, dispatch])
  
  return (
    <>
      <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        id="login-form"
        onSubmit={handleSubmit}>
        <TextField
          required
          margin="normal"
          fullWidth
          id="email"
          name="email"
          label="Email Address"
          autoFocus
        />
        <TextField
          required
          margin="normal"
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
        />
        <Box textAlign="center">
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, px: 5 }}>
              Login
            </Button>
          )}
        </Box>
        <NavLink to="/sendpasswordresetemail">Forgot Password ?</NavLink>
        {error.status ? (
          <Alert severity={error.type as AlertColor}>{error.msg}</Alert>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default UserLogin;
