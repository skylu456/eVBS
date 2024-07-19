import React from 'react';
import { Box, CssBaseline, Toolbar, Typography, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import SpendingOverview from './components/SpendingOverview';
import BudgetingHighlights from './components/BudgetingHighlights';
import SpendingGrowth from './components/SpendingGrowth';
import Goals from './components/Goals';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import theme from './theme';
import './App.css';

const Dashboard = () => (
  <>
    <Typography variant="h3" gutterBottom>
      Dashboard - Mis Widgets
    </Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      <SpendingOverview />
      <BudgetingHighlights />
      <SpendingGrowth />
      <Goals />
    </Box>
  </>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Box sx={{ display: 'flex', height: '100vh', fontFamily: 'Montserrat, sans-serif' }}>
          <Sidebar />
          <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Header />
            <Box
              component="main"
              sx={{
                background: '#DFDFDF',
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'auto',
                padding: 2,
              }}
            >
              <Toolbar />
              <Container sx={{ flexGrow: 1 }}>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/analytics" element={<Typography variant="h4" gutterBottom>Análisis- en construcción...</Typography>} />
                  <Route path="/user-profile" element={<UserProfile />} />
                </Routes>
              </Container>
            </Box>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
