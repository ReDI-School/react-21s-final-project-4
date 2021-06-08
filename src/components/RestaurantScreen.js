import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FetchDataContext } from '../contexts/FetchDataProvider';
import Container from '@material-ui/core/Container';
import Carousel from './Carousel';

const RestaurantScreen = ({ match }) => {
  const restaurants = useContext(FetchDataContext);
  if (!restaurants) {
    return null;
  }
  const restaurant = restaurants.filter((res) => {
    return res.id === match.params.id;
  });
  return (
    <React.Fragment>
      <Link className='goback__link' to='/'>
        Go Back
      </Link>
      <Container fluid maxWidth='sm'>
        {restaurant.map((res) => {
          return (
            <div className='restaurantScreen' key={res.id}>
              <h1>{res.name}</h1>
              <Carousel images={res.photos[0].links} />
              <h2>Description</h2>
              <p>{res.cuisine}</p>
              <p>{res.dietaryRestrictions}</p>
              <div className='restaurantScreen__address'>
                <h2>Address</h2>
                <p>{res.formatted_address}</p>
              </div>
            </div>
          );
        })}
      </Container>
    </React.Fragment>
  );
};

export default RestaurantScreen;
