import { Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FetchDataContext } from '../contexts/FetchDataProvider';
import ResCard from './ResCard';

function ResList() {
  const restaurants = useContext(FetchDataContext);

  function displayRestaurants() {
    if (restaurants !== undefined) {
      return restaurants.map((restaurant) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={restaurant.id}>
            <Link
              className='react-router__link'
              to={`/restaurants/${restaurant.id}`}
              style={{
                textDecoration: 'none',
              }}
            >
              <ResCard
                img={restaurant.photos[0].links[0]}
                name={restaurant.name}
                address={restaurant.formatted_address}
                cuisine={restaurant.cuisine}
                type={restaurant.types[0]}
              />
            </Link>
          </Grid>
        );
      });
    } else {
      return <h1>Loading...</h1>;
    }
  }
  return (
    <Grid container spacing={5}>
      {displayRestaurants()}
    </Grid>
  );
}

export default ResList;
