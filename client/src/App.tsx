import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.module.scss';
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInPage from './pages/sign-in/SignIn';
import SignUpPage from './pages/sign-up/SignUp';
import CheckoutPage from './pages/checkout/CheckoutPage';
import Header from './components/header/Header';
import {
  homePath,
  shopPath,
  signInPath,
  signUpPath,
  checkoutPath
} from './constansts/routesName';
import { useSelector, useDispatch } from 'react-redux';
import { IGlobalState } from './interfaces/states';
import { FirebaseUser } from './interfaces/customTypes';
import { selectCurrentUser } from './store/user/userSelectors';
import * as userActions from './store/user/userActions';

const App: React.FC<any> = (props: any) => {
  const currentUser = useSelector<IGlobalState, FirebaseUser>(
    selectCurrentUser
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.checkUserSession());
  }, [dispatch, currentUser]);

  return (
    // TODO: Remove data-test in production
    <div data-test='component-app'>
      <Header />
      <Switch>
        <Route exact path={homePath} component={HomePage} />
        <Route path={shopPath} component={ShopPage} />
        <Route exact path={checkoutPath} component={CheckoutPage}/>
        <Route
          exact
          path={signInPath}
          render={() =>
            currentUser ? <Redirect to={homePath} /> : <SignInPage />
          }
        />
        <Route exact path={signUpPath} component={SignUpPage} />
      </Switch>
    </div>
  );
};

export default App;
