// App.jsx

import React from 'react';
import { Router, Route, Switch } from 'wouter';
import Home from './Components/Home';
import MoviesAll from './Components/MoviesAll';
import MovieDetail from './Components/MovieDetail';
import Breadcrumb from './Components/Breadcrumb';

const App = () => {
  return (
    <Router>
      <Breadcrumb />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/Movies" component={MoviesAll} />
        <Route path="/Movies/:id" component={MovieDetail} />
      </Switch>
    </Router>
  );
};

export default App;
