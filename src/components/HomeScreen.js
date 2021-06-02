import React, { useContext } from 'react';
import { FetchDataContext } from '../contexts/FetchDataProvider';

const HomeScreen = () => {
  const restaurants = useContext(FetchDataContext);

  return (
    <div>
      <h1>HomeScreen</h1>
    </div>
  );
};

export default HomeScreen;
