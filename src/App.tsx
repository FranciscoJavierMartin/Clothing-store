import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.module.scss';
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInPage from './pages/sign-in-and-sign-up/SignInAndSignUp';
import Header from './components/header/Header';

const App: React.FC = () => {
  return (
    // TODO: Remove data-test in production
    <div data-test='component-app'>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInPage}/>
      </Switch>
    </div>
  );
}

export default App;
