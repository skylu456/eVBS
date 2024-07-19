import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import { goalsData } from '../mockData';


const Goals = () => {
  return (
    <Box sx={{ flex: '1 1 300px' }}>
      <Typography variant="h5" gutterBottom>
        {goalsData.title}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card className="card">
            <CardContent>
              {goalsData.goals.map((goal, index) => (
                <Typography key={index}>{goal}</Typography>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Goals;
