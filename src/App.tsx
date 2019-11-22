import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import HatsPage from './pages/hats/HatsPage';
import './App.module.scss';

const App: React.FC = () => {
  return (
    // TODO: Remove data-test in production
    <div data-test='component-app'>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
