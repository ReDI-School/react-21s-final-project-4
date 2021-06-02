import axios from 'axios';

export const fetchData = async (setRestaurants) => {
  const { data } = await axios.get(
    'https://redi-final-restaurants.herokuapp.com/restaurants'
  );
  setRestaurants(data.results);
};
