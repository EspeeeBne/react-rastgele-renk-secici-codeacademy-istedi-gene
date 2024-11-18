import React from 'react';
import { Button as MuiButton } from '@mui/material';
import withStyles from '@mui/styles/withStyles';

const styles = {
  root: {
    width: '150px',
    height: '150px',
    borderRadius: '8px',
    border: '2px solid black',
    padding: '10px 20px',
    fontSize: '20px',
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    color: '#000',
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.5s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
      boxShadow: '10px 10px 25px rgba(0, 0, 0, 0.4)',
      transition: 'all 0.5s ease-in-out',
    },
  },
};

const Button = ({ light, onClick, classes }) => {
  return (
    <MuiButton 
      variant="contained"
      color={light ? 'primary' : 'secondary'}
      onClick={onClick}
      className={classes.root}
    >
      Bana Bas
    </MuiButton>
  );
};

export default withStyles(styles)(Button);
