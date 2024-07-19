import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import { spendingData } from '../mockData';


const SpendingOverview = () => {
  return (
    <Box sx={{ flex: '1 1 300px' }}>
      <Typography variant="h5" gutterBottom>
        Reporte de Gastos
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card className="card">
            <CardContent>
              <Typography variant="h6">Gastos Totales</Typography>
              <Typography variant="h4">{spendingData.totalSpending}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className="card">
            <CardContent>
              <Typography variant="h6">Categorias con mas gastos</Typography>
              {spendingData.topCategories.map((category, index) => (
                <Typography key={index}>{category.name}: {category.amount}</Typography>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SpendingOverview;
