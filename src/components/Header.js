// src/components/Header.js

import React from 'react';
import { Box, Typography } from '@mui/material';
import lightLogo from '../assets/evbs-full-bgr.png'; // Ensure this path is correct

const Header = () => {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white background
        backdropFilter: 'blur(10px)', // Apply blur effect
        color: 'black',
        width: 'calc(100% - 252px)', // Adjust width to account for the sidebar (assuming sidebar width is 240px)
        marginLeft: '0px', // Offset to the right of the sidebar
        position: 'fixed', // Ensure header stays at the top
        top: 0,
        zIndex: 1, // Ensure header stays above the content
        fontFamily: 'Montserrat, sans-serif',
        
      }}
    >
      <img
        src={lightLogo} // Use the imported image here
        alt="App Logo"
        style={{ height: '50px', marginRight: '16px' }}
      />
      <div
        style={{
          borderLeft: '1px solid black',
          height: '50px',
          margin: '0 16px',
        }}
      />
      <Typography variant="h6" component="div">
        Electronic Value Budget System
      </Typography>
    </Box>
  );
};

export default Header;
