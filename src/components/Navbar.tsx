import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { getToken } from "../services/LocalStorageService";

const Navbar = () => {
  const token = getToken();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Front-End
            </Typography>
            <Button component={NavLink} to="/" sx={{ color: "white" }}>
              Home
            </Button>
            <Button component={NavLink} to="/contact" sx={{ color: "white" }}>
              Contact
            </Button>
            {token ? (
              <Button
                component={NavLink}
                to="/profile"
                sx={{ color: "white" }}>profile</Button>
            ) : (
              <Button component={NavLink} to="/login" sx={{ color: "white" }}>
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
