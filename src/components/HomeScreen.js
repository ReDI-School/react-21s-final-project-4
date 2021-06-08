import React from 'react';
import {Grid} from "@material-ui/core";

import Header from './Header';
import SearchBar from './SearchBar';
import Listing from './Listing';
import FilterListProvider from '../contexts/FilterListProvider';

const HomeScreen = () => {
  return (
    <FilterListProvider>
    <section id="home">
    <Grid container direction="column" spacing={5} lg={12} md={8}>
          <Grid item></Grid>
          
          <Header />
          
          <Grid item container xs={12}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10} ><SearchBar /></Grid>
          </Grid>
          
          <Grid item container >
            <Grid item xs={1} ></Grid>
            <Grid item xs={10} ><Listing /></Grid>
            <Grid item xs={1} ></Grid>
          </Grid>
    </Grid>
    </section>
    </FilterListProvider>
    
  );
};

export default HomeScreen;
