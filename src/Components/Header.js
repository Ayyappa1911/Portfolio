import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';


function Header() {
    
    // function clickHandler() {
        // console.log("Button Clicked")
    // }
  return (
    <div class = "header">
    <Stack spacing={2} direction="row">
      <Button onClick={() => {
                // alert('clicked');
            }}
      variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}/>
      <Button variant="contained" endIcon={<SendIcon />}></Button>
    </Stack>

    </div>
  )
}

export default Header