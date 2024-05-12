// App.jsx

import React from 'react';
import { Router, Route, Switch } from 'wouter';
import Home from './Components/Home';
import MoviesAll from './Components/MoviesAll';
import MovieDetail from './Components/MovieDetail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/movies" component={MoviesAll} />
        <Route path="/movies/:id" component={MovieDetail} />
      </Switch>
    </Router>
  );
};

export default App;
