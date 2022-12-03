import React from "react"
import { ButtonBase, Grid, Paper, Typography } from "@mui/material"
import WorkspacesIcon from "@mui/icons-material/Workspaces"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

export const ProjectCard = ({ data }) => {
  const user = useSelector((state) => state.user.value)

  return (
    <Paper
      sx={{
        p: 5,
        margin: "auto",
        maxWidth: 500,
        minHeight: 230,
        flexGrow: 1,
        backgroundColor: (theme) => (theme.palette.mode === "dark" ? "#1A2027" : "#fff")
      }}>
      <Grid container spacing={2} sx={{ height: "100%" }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 6, md: 12 }}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <WorkspacesIcon fontSize={"large"} sx={{ width: 70, height: 70 }} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h6" component="h5" sx={{ fontWeight: "600" }}>
                  {data.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {user.username}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: {user.id.slice(0, 10).toUpperCase()}
                </Typography>
              </Grid>
              <Grid item>
                <NavLink to={`/boards/${data.id}`}>
                  <Typography sx={{ cursor: "pointer", color: "#8dc5f3" }} variant="span">
                    View Detail
                  </Typography>
                </NavLink>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                In Progress
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}
