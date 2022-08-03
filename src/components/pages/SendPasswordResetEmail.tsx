import React, {useState} from 'react'
import { Alert, AlertColor, Box, Button, Grid, TextField } from "@mui/material";

function SendPasswordResetEmail() {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      email: data.get("email"),
    };
    if (actualData.email) {
      (document.getElementById("password-reset-email-form") as HTMLFormElement).reset();
      setError({
        status : true,
        msg: "password sent, check your email",
        type: 'success'
      })
    }else{
      setError({
        status : true,
        msg: "all fields are required, please enter a valid email",
        type: 'error'
      })
    }
  };
  return (
    <>
      <Grid container justifyContent='center'>
        <Grid item sm ={6} xs={12}>
        <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        id="password-reset-email-form"
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
        <Box textAlign={"center"}>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}>
            Send
          </Button>
        </Box>
        {error.status ? <Alert severity={error.type as AlertColor}>{error.msg}</Alert> : '' }
      </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SendPasswordResetEmail