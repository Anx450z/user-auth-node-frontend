import { Button, CssBaseline, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, removeToken } from "../../services/LocalStorageService";
import ChangePassword from "./ChangePassword";
import { useGetLoggedUserQuery } from "../../services/userAuthApi";

function Profile() {
  const navigate = useNavigate();

  const token = getToken();
  const { data, isSuccess } = useGetLoggedUserQuery(token);

  const [userData, setUserData] = useState({
    email: "",
    userName: "",
    firstName: "",
  });
  // Store data in Local state
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.user.email,
        firstName: data.user.first_name,
        userName: data.user.user_name
      });
    }

  }, [isSuccess, data]);
  const handleLogout = () => {
    removeToken("token");
    navigate("/login");
  };
  return (
    <>
      <CssBaseline />
      <Grid container>
        <Grid item sm={4}>
          <Typography variant="h5">Email: {userData.email}</Typography>
          <Typography variant="h6">Name: {userData.firstName}</Typography>
          <Button
            variant="contained"
            color="warning"
            size="large"
            onClick={handleLogout}
            sx={{ mt: 8 }}>
            Logout
          </Button>
        </Grid>
        <Grid item sm={8}>
          <ChangePassword />
        </Grid>
      </Grid>
    </>
  );
}

export default Profile;
