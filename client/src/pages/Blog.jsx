import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"

export const Blog = () => {
  return (
    <Box
      sx={{
        paddingTop: 10
      }}>
      <Typography align="left" variant="h5" component="h2" sx={{ paddingBottom: 5 }}>
        Blogs
      </Typography>
    </Box>
  )
}
