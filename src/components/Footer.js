import React from 'react'
import { AppBar, Toolbar, Typography, Container, } from '@mui/material'

const Footer = () => {
  return (
    <AppBar position="relative" sx={{ bgcolor: "gray" }}>        
        <Toolbar sx={{ justifyContent: 'center' }}>
            <Typography color="white">
                Footer
            </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Footer