import React from 'react';
import ResList from './ResList';
import {Grid} from "@material-ui/core";
import Header from './Header';

const HomeScreen = () => {
  

  return (
    <Grid container direction="column" spacing={8}>
      
      <Grid item><Header /></Grid>
      
      <Grid item container>
        <Grid item xs={false} sm={2}></Grid>
        <Grid item xs={12} sm={8}><ResList /></Grid>
        <Grid item xs={false} sm={2}></Grid>
      </Grid>
      
      
    
    </Grid>
  );
};

export default HomeScreen;
