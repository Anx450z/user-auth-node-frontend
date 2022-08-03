import { Alert, AlertColor, Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })

  const navigate = useNavigate()
  
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    if (actualData.email && actualData.password) {
      (document.getElementById("login-form") as HTMLFormElement).reset();
      setError({
        status : true,
        msg: "Login Success",
        type: 'success'
      })
      navigate('/')
    }else{
      setError({
        status : true,
        msg: "All fields are required",
        type: 'error'
      })
    }
  };
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
        <Box textAlign={"center"}>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}>
            Login
          </Button>
        </Box>
        <NavLink to="/">Forgot Password ?</NavLink>
        {error.status ? <Alert severity={error.type as AlertColor}>{error.msg}</Alert> : '' }
      </Box>
    </>
  );
};

export default UserLogin;
