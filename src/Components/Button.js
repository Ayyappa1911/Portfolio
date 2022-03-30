import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';



const theme = createTheme({
  basicbuttons: {
    primary: {
      // Purple and green play nicely together.
      main: '#FF0000',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});




export default function BasicButtons() {
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2} direction="row">
        <Button onClick={() => {
                  alert('clicked');
              }}
        variant="text">Text</Button>
        <Button color="secondary" variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}/>
        <Button variant="contained" endIcon={<SendIcon />}></Button>
      </Stack>
    </ThemeProvider>
  );
  }
// export default BasicButtons




