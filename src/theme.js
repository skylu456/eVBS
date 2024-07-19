import { createTheme } from '@mui/material/styles';


// Create a theme with Montserrat as the default font
const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        body {
          font-family: 'Montserrat', sans-serif;
        }
      `,
    },
  },
});

export default theme;
