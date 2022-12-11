import React from "react";
import { Comments } from "../components/common/Comments";
import { Box, Typography } from "@mui/material";
import "../css/custom-blogs.css";

export const Blog = () => {
  return (
    <Box sx={{
        paddingTop: 10,
      }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center'
      }}>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 9,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none"
          }}
        >
          Blog
        </Typography>
      </Box>
          <Comments
          />
    </Box>
  );
}
