import { Box, Grid, Typography } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import { ProjectCard } from "../components/common/ProjectCard"

export const Projects = () => {
  const boards = useSelector((state) => state.board.value)

  return (
    <Box
      sx={{
        paddingTop: 10
      }}>
      <Typography align="left" variant="h5" component="h2" sx={{ paddingBottom: 5 }}>
        Projects
      </Typography>
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 2, sm: 3, md: 16 }}>
        {boards &&
          boards.map((board, i) => {
            return (
              <Grid item xs={2} sm={3} md={4} key={i} style={{ height: "100%" }}>
                <ProjectCard data={board} />
              </Grid>
            )
          })}
      </Grid>
    </Box>
  )
}
