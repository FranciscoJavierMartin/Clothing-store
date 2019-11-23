import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import HatsPage from './pages/hats/HatsPage';
import './App.module.scss';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';

const App: React.FC = () => {
  return (
    // TODO: Remove data-test in production
    <div data-test='component-app'>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
