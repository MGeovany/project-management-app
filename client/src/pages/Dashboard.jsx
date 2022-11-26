import React from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";

import "../css/DashboardStyles.css";
import { useSelector } from "react-redux";
import ChartConversionRates from "../components/chart/ChartConversionRates";

export const Dashboard = () => {
  const boards = useSelector((state) => state.board.value);

  return (
    <Box
      sx={{
        paddingTop: 10,
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      <Typography
        align="left"
        variant="h5"
        component="h2"
        sx={{ paddingBottom: 5 }}
      >
        Dashboard
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, sm: 2, md: 1, xl: 1 }}
        columns={{ xs: 2, sm: 2, md: 8, xl: 16 }}
      >
        {boards &&
          boards?.slice(0, 4).map((data, i) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={i}>
                <Box className="ItemBox" key={i}>
                  <Typography
                    variant="h5"
                    component="h3"
                    key={data.id}
                    sx={{ textAlign: "center" }}
                  >
                    {data.icon + " " + data.title}
                  </Typography>
                  <Divider />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body2" sx={{ paddingTop: 2 }}>
                      Number of Tasks: {i > 0 ? 1 : 5}
                    </Typography>
                    <Button>View More</Button>
                  </Box>
                </Box>
              </Grid>
            );
          })}
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Box className="SideGraphBox" width={"100%"}>
          <ChartConversionRates
            title="Board Activity"
            subheader="Test Project"
            chartData={[
              { label: "To Do", value: 20 },
              { label: "In Progress", value: 30 },
              { label: "Completed", value: 37 },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};
