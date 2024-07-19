import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import { budgetData } from '../mockData';


const BudgetingHighlights = () => {
  return (
    <Box sx={{ flex: '1 1 300px' }}>
      <Typography variant="h5" gutterBottom>
        Este mes en tu presupuesto...
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card className="card">
            <CardContent>
              <Typography variant="h6">Presupuesto Mensual</Typography>
              <Typography variant="h4">{budgetData.monthlyBudget}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className="card">
            <CardContent>
              <Typography variant="h6">Presupuesto Restante</Typography>
              <Typography variant="h4">{budgetData.remainingBudget}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BudgetingHighlights;
