import { Alert, AlertColor, Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useRegisterUserMutation} from '../../services/userAuthApi'

function UserRegister() {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  const navigate = useNavigate();
  const [registerUser, {isLoading}] = useRegisterUserMutation()

  const handleSubmit = async (event: any) => { 
    event.preventDefault();
    const form_data = new FormData(event.currentTarget);
    const actualData = {
      email: form_data.get("email"),
      password: form_data.get("password"),
      userName: form_data.get("user_name"),
      firstName: form_data.get("first_name"),
      lastName: form_data.get("last_name"),
      passwordConfirmation: form_data.get("confirm_password"),
    };
    if (
      actualData.email &&
      actualData.password &&
      actualData.userName &&
      actualData.passwordConfirmation !== null
    ) {
      if (actualData.password === actualData.passwordConfirmation) {
        (document.getElementById("register-form") as HTMLFormElement).reset();
    
        const res:any = await registerUser(actualData)
        if (res.data.status === "success"){
          setError({
            status: true,
            msg: "Registration Success",
            type: "success",
          });
          // Store Token
          navigate("/login");
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
          msg: "password and confirm password did not match",
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
  return (
    <>
      <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        id="register-form"
        onSubmit={handleSubmit}>
        <TextField
          required
          margin="normal"
          fullWidth
          id="first_name"
          name="first_name"
          label="First Name"
        />
        <TextField
          required
          margin="normal"
          fullWidth
          id="last_name"
          name="last_name"
          label="Last Name"
        />
        <TextField
          required
          margin="normal"
          fullWidth
          id="user_name"
          name="user_name"
          label="User Name"
        />
        <TextField
          required
          margin="normal"
          fullWidth
          id="email"
          name="email"
          label="Email Address"
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
        <TextField
          required
          margin="normal"
          fullWidth
          id="confirm_password"
          name="confirm_password"
          label="Confirm Password"
          type="password"
        />
        <Box textAlign={"center"}>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}>
            Register
          </Button>
        </Box>
        {error.status ? (
          <Alert severity={error.type as AlertColor}>{error.msg}</Alert>
        ) : (
          ""
        )}
      </Box>
    </>
  );
}

export default UserRegister;
