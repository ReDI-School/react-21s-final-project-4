import React, { createContext, useState, useEffect } from 'react';
import { fetchData } from '../helpers';

export const FetchDataContext = createContext();

const FetchDataProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState();

  useEffect(() => {
    fetchData(setRestaurants);
  }, []);
  return (
    <FetchDataContext.Provider value={restaurants}>
      {children}
    </FetchDataContext.Provider>
  );
};

export default FetchDataProvider;
