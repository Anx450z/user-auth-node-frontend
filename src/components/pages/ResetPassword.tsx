import React, { useState } from "react";
import { Alert, AlertColor, Box, Button, Grid, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useResetPasswordMutation } from "../../services/userAuthApi";

function ResetPassword() {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  const [resetPassword] = useResetPasswordMutation();
  const { id, token } = useParams();

  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      password: data.get("password"),
      passwordConfirmation: data.get("confirm_password"),
    };

    const res: any = await resetPassword({actualData, id, token});

    if (actualData.password && actualData.passwordConfirmation) {
      if (actualData.password === actualData.passwordConfirmation) {
        (
          document.getElementById("password-reset-form") as HTMLFormElement
        ).reset();

        if (res.data.status === "success") {
          setError({
            status: true,
            msg: res.data.msg,
            type: "success",
          });
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        }
        if (res.data.status === "failed") {
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
        msg: "all fields are required",
        type: "error",
      });
    }
  };
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item sm={6} xs={12}>
          <h1>Reset Password</h1>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            id="password-reset-form"
            onSubmit={handleSubmit}>
            <TextField
              required
              margin="normal"
              fullWidth
              id="password"
              name="password"
              label="New Password"
              type="password"
            />
            <TextField
              required
              margin="normal"
              fullWidth
              id="confirm_password"
              name="confirm_password"
              label="New Confirm Password"
              type="password"
            />
            <Box textAlign={"center"}>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 5 }}>
                Change Password
              </Button>
            </Box>
            {error.status ? (
              <Alert severity={error.type as AlertColor}>{error.msg}</Alert>
            ) : (
              ""
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default ResetPassword;
