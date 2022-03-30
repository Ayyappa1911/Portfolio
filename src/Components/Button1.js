import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
      backgroundColor: '#eeeeee',
      '&:hover': {
        backgroundColor: '#999999',
        color: '#3c52b2',},
    },
    "font-family": '"Source Sans Pro", sans-serif',
    "fontSize": 17,
    "fontWeightLight": 100,
    "fontWeightRegular": 200,
    "fontWeightMedium": 300
   },
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#000000',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#000000',
    },
    ternary: {
      main: '#FFFFFF'
    },
  },
});

function Palette({link,children}) {
  // const { history } = {link};
  return (
    <div class="head">
      <ThemeProvider theme={theme} spacing={1}>
        <Button href={link} padding='5px' size="medium"><b>{children}</b></Button>
      </ThemeProvider>
    </div>
  );
}

export default Palette
