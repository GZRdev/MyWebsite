import { Typography, Box } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <Box sx={{ margin: 0, padding: 0, minHeight: "100%", height: "100vh", position: "relative" }}>
        <Box sx={{ textAlign: "center"}}>
            <Typography>
                Home page
            </Typography>
        </Box>
    </Box>
  )
}

export default Home