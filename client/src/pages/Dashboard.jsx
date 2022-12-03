import React from "react"
import { Box, Button, Divider, Grid, Typography } from "@mui/material"

import "../css/DashboardStyles.css"
import { useSelector } from "react-redux"
import ChartConversionRates from "../components/chart/ChartConversionRates"
import CalendarItem from "../components/common/CalendarItem"
import { useNavigate } from "react-router-dom"

export const Dashboard = () => {
  const boards = useSelector((state) => state.board.value)
  const navigate = useNavigate()

  const handleClick = (boardID) => {
    navigate(`/boards/${boardID}`)
  }
  return (
    <Box
      sx={{
        paddingTop: 10,
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "space-around"
      }}>
      <Typography align="left" variant="h5" component="h2" sx={{ paddingBottom: 5 }}>
        Dashboard
      </Typography>

      <Grid container spacing={{ xs: 2, sm: 2, md: 1, xl: 1 }} columns={{ xs: 2, sm: 2, md: 8, xl: 16 }}>
        {boards &&
          boards?.slice(0, 4).map((data, i) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={i}>
                <Box className="ItemBox" key={i}>
                  <Typography variant="h5" component="h3" key={data.id} sx={{ textAlign: "center" }}>
                    {data.icon + " " + data.title}
                  </Typography>
                  <Divider />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center"
                    }}>
                    <Typography variant="body2" sx={{ paddingTop: 2, textAlign: "center", color: "#7777" }}>
                      {data.description}
                    </Typography>
                    <Button onClick={() => handleClick(data.id)}>View More</Button>
                  </Box>
                </Box>
              </Grid>
            )
          })}
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}>
        <Box className="SideGraphBox" width={"100%"}>
          <ChartConversionRates
            title="Board Activity"
            subheader="Test Project"
            chartData={[
              { label: "To Do", value: 20 },
              { label: "In Progress", value: 30 },
              { label: "Completed", value: 37 }
            ]}
          />
        </Box>
        <Typography align="center" variant="h4" sx={{ paddingY: 5, textAlign: "center", width: "100%" }}>
          Calendar
        </Typography>
        <Box width={"100%"} className="SideGraphBox">
          <CalendarItem />
        </Box>
      </Box>
    </Box>
  )
}
