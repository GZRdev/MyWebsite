import React from 'react'
import { AppBar, CssBaseline, Toolbar, Typography, Box, Button } from '@mui/material'

const Header = () => {
  return (
    <AppBar position="static" sx={{ marginBottom: 2, }}>
        <CssBaseline/>
        <Toolbar sx={{ bgcolor: "gray", justifyContent: "center" }}>
            <Typography>
                Header
            </Typography>
        </Toolbar>

    </AppBar>
  )
}

export default Header