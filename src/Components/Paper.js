import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Image from '../Components/chem1.gif';



const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`
  }
};

function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper style={styles.paperContainer}  elevation={0} />
      <Paper />
      <Paper style={styles.paperContainer} elevation={3}/>
    </Box>
  );
}

export default SimplePaper
