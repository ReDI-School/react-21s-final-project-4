import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeScreen from './components/HomeScreen';
import Hero from './components/Hero';

import RestaurantScreen from './components/RestaurantScreen';
import FetchDataProvider from './contexts/FetchDataProvider';
import FilterDataProvider from './contexts/FilterDataProvider';
import FilterRenderProvider from './contexts/FilterRenderProvider';


function App() {
  return (
    <Router>
      <div>
        <FetchDataProvider>
          <FilterDataProvider>
          <FilterRenderProvider>
            <Route path='/' component={Hero} exact />
            <Route path='/' component={HomeScreen} exact />
            <Route path='/restaurants/:id' component={RestaurantScreen} />
            </FilterRenderProvider>
          </FilterDataProvider>
        </FetchDataProvider>

      </div>
    </Router>
  );
}

export default App;
