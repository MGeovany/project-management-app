import React from "react";
import { Box, Button, Divider, Typography, Paper } from "@mui/material";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
import "../css/DashboardStyles.css";
import { useSelector } from "react-redux";
import ChartConversionRates from '../components/chart/ChartConversionRates'

export const Dashboard = () => {
  const boards = useSelector((state) => state.board.value);
  const data = [
    { argument: 'Untitled', value: 6 },
    { argument: 'Prueba', value: 3 },
    { argument: 'Untitled 2', value: 3 },
  ];

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

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {boards &&
          boards.map((data, i) => {
            return (
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
            );
          })}
      </Box>
      <Box sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}>
        <Box className="GraphBox">
        <Typography
          align="left"
          variant="h6"
          component="h2"
          sx={{ paddingBottom: 2 }}
        >
          Section Progress
        </Typography>
        <Paper>
            <Chart width={500} height={400} data={data}>
              <ArgumentAxis />
              <ValueAxis />
              <BarSeries  valueField="value" argumentField="argument" barWidth={0.3} color={'gray'} />
            </Chart>
        </Paper>
      </Box>
        <Box className="SideGraphBox" width={700}>
          <ChartConversionRates
            title="Board Activity"
            subheader="Test Project"
            chartData={[
              { label: 'To Do', value: 20 },
              { label: 'In Progress', value: 30 },
              { label: 'Completed', value: 37 }
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};
