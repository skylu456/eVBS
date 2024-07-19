import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
  Box,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import './SideBar.css';

const drawerWidth = 235;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#2b2a28',
          fontFamily: 'Montserrat, sans-serif',
        },
      }}
      classes={{ paper: 'sidebar' }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap>
          Dashboard - Inicio
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon sx={{ color: 'black' }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard / Home" sx={{ color: 'black' }} />
        </ListItem>
        <ListItem button component={Link} to="/analytics">
          <ListItemIcon sx={{ color: 'black' }}>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Análisis de Presupuesto" sx={{ color: 'black' }} />
        </ListItem>
        <Box sx={{ flexGrow: 1 }} />
        <ListItem button component={Link} to="/user-profile">
          <ListItemIcon sx={{ color: 'black' }}>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" sx={{ color: 'black' }} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
