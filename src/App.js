import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import RestaurantScreen from './components/RestaurantScreen';
import FetchDataProvider from './contexts/FetchDataProvider';

function App() {
  return (
    <Router>
      <div>
        <FetchDataProvider>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/restaurants/:id' component={RestaurantScreen} />
        </FetchDataProvider>
      </div>
    </Router>
  );
}

export default App;
