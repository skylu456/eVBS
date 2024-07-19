import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { growthData } from '../mockData';


const SpendingGrowth = () => {
  return (
    <Box sx={{ flex: '1 1 100%' }}>
      <Typography variant="h5" gutterBottom>
        Crecimiento de Gastos Mensuales
      </Typography>
      <Card className="card">
        <CardContent>
          <BarChart
            width={750}
            height={300}
            data={growthData}
            margin={{
              top: 20, right: 30, left: 130, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Gastos" fill="#8884d8" />
          </BarChart>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SpendingGrowth;
