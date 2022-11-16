import React from "react";
import mockData from "../components/common/mockData";
import { Box, Button, Divider, Typography } from '@mui/material'
import '../css/DashboardStyles.css'

export const Dashboard = () => {
  return (
    <Box sx={{
      paddingTop:10
    }}>
      <Typography align="center" variant="h2" component='h2'>
        This is the Dashboard
      </Typography>
      
      <Box sx={{ 
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent:'space-around'
              }}>
      {
        mockData && mockData.map(data => {
          return(
            <Box className="ItemBox">
              <Typography variant='h4' component='h3' key={data.id}>
                {data.title}
              </Typography>
              <Divider/>
              <Box sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center'
              }}>
                <Typography variant="h6" component='h6'>
                  Number of Tasks: {data.tasks.length}
                </Typography>
                <Button>View More</Button>
              </Box>
            </Box>
          )
        })
      }
      </Box>
    </Box>
  );
};
