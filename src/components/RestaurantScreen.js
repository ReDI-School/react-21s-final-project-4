import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FetchDataContext } from "../contexts/FetchDataProvider";
import Container from "@material-ui/core/Container";
import Carousel from "./Carousel";

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
      <Link className="goback__link" to="/">
        <span> Go Back</span>
      </Link>
      <Container className="container" fluid maxWidth="sm">
        {restaurant.map((res) => {
          return (
            <div className="restaurantScreen" key={res.id}>
              <h1 className="res-name">{res.name}</h1>

              <Carousel images={res.photos[0].links} />

              <div className="restaurantScreen__address__description">
                <h2 className="description">Description</h2>
                <p className="res-cuisine">{res.cuisine}</p>
                <p className="res-dietaryRestrictions">
                  {res.dietaryRestrictions}
                </p>
                <h2 className="address">Address</h2>
                <p className="res-formatted-address">{res.formatted_address}</p>
              </div>
            </div>
          );
        })}
      </Container>
    </React.Fragment>
  );
};

export default RestaurantScreen;
