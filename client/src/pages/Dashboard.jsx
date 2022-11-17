import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import "../css/DashboardStyles.css";
import { useSelector } from "react-redux";

export const Dashboard = () => {
  const boards = useSelector((state) => state.board.value);
  console.log(boards);

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
    </Box>
  );
};
