import React, { useContext } from 'react';
import {Grid} from "@material-ui/core";

import Header from './Header';

import Listing from './Listing';
import FilterListProvider from '../contexts/FilterListProvider';


import { FetchDataContext } from '../contexts/FetchDataProvider';

const HomeScreen = () => {
  const restaurants=useContext(FetchDataContext);
  if(restaurants!== undefined){
    return (
      <FilterListProvider>
      <section id="home">
      <Grid container direction="column" spacing={5} xs={12}>
            
            
            <Header />
            
            
            
            <Grid item container >
              <Grid item xs={1} ></Grid>
              <Grid item xs={10} ><Listing restaurants={restaurants}/></Grid>
              <Grid item xs={1} ></Grid>
            </Grid>
            
            
      </Grid>
      </section>
      </FilterListProvider>
      
    );
  }
  else {
    return(<h1>Loading...</h1>)
  }
};

export default HomeScreen;
