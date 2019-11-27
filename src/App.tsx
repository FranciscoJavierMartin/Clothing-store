import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.module.scss';
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInPage from './pages/sign-in/SignIn';
import SignUpPage from './pages/sign-up/SignUp';
import CheckoutPage from './pages/checkout/CheckoutPage';
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {
  homePath,
  shopPath,
  signInPath,
  signUpPath,
  checkoutPath
} from './constansts/routesName';
import * as userActions from './store/actions/userActions';
import { useSelector, useDispatch } from 'react-redux';
import { IGlobalState } from './interfaces/states';
import { FirebaseUser } from './interfaces/customTypes';
import { IUserData } from './interfaces/common';
import { selectCurrentUser } from './store/selectors/userSelectors';

const App: React.FC = () => {
  let unsubscribeFromAuth: firebase.Unsubscribe;
  const currentUser = useSelector<IGlobalState, FirebaseUser>(
    selectCurrentUser
  );
  const dispatch = useDispatch();

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        if (userRef) {
          userRef.onSnapshot(snapShot => {
            dispatch(
              userActions.setCurrentUser({
                id: snapShot.id,
                ...(snapShot.data() as IUserData)
              })
            );
          });
        }
      }

      dispatch(userActions.setCurrentUser(userAuth));
    });

    return () => {
      if (unsubscribeFromAuth) {
        unsubscribeFromAuth();
      }
    };
  }, []);

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
