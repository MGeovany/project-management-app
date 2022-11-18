import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { ProjectCard } from "../components/common/ProjectCard";

export const Projects = () => {
  const boards = useSelector((state) => state.board.value);

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
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {boards &&
          boards.map((board, i) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={i}>
                <ProjectCard data={board} />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};
