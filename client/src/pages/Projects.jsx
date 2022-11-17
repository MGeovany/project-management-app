import { Box, Typography } from "@mui/material";
import React from "react";

export const Projects = () => {
  return (
    <Box
      sx={{
        paddingTop: 10,
      }}
    >
      <Typography
        align="left"
        variant="h5"
        component="h2"
        sx={{ paddingBottom: 5 }}
      >
        Projects
      </Typography>
    </Box>
  );
};
