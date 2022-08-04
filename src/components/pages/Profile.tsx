import { Button, CssBaseline, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { removeToken } from '../../services/LocalStorageService'
import ChangePassword from './ChangePassword'

function Profile() {
  const navigate = useNavigate()
  const handleLogout = ()=>{
    removeToken('token')
    navigate('/login')
  }
  return (
    <>
    <CssBaseline />
    <Grid container>
      <Grid item sm={4}>
        <Typography variant='h5'>Email: email</Typography>
        <Typography variant='h6'>Name: name</Typography>
        <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{mt:8}}>Logout</Button>
      </Grid>
      <Grid item sm={8}>
      <ChangePassword />
      </Grid>
    </Grid>
    </>
  )
}

export default Profile