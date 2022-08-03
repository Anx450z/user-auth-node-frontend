import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <Box sx={{flexGrow:1}}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant='h5' component="div" sx={{flexGrow: 1}}>
            Front-End
          </Typography>
          <Button component={NavLink} to="/" sx={{color:"white"}}>Home</Button>
          <Button component={NavLink} to="/contact"sx={{color:"white"}}>Contact</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Navbar