import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import RestaurantScreen from './components/RestaurantScreen';
import FetchDataProvider from './contexts/FetchDataProvider';
import FilterDataProvider from './contexts/FilterDataProvider';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <div>
        <FetchDataProvider>
          <FilterDataProvider>
            <Route path='/' component={Hero} exact />
            <Route path='/' component={HomeScreen} exact />
            <Route path='/restaurants/:id' component={RestaurantScreen} />
          </FilterDataProvider>
        </FetchDataProvider>
      </div>
    </Router>
  );
}

export default App;
