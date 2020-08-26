import React from 'react';
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/Homepage/homepage.component';
import './App.css';

const HatsPage = () => (
  <div>
    HatsPage
  </div>
)

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
