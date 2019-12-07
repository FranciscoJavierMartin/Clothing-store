import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/header/HeaderContainer';
import {
  homePath,
  shopPath,
  signInPath,
  signUpPath,
  checkoutPath
} from './constansts/routesName';
import CurrentUserContext from './contexts/current-user/currentUserContext';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { GlobalStyles } from './global.styles';
import Spinner from './components/spinner/Spinner';

const HomePage = lazy(() => import('./pages/home/HomePage'));
const ShopPage = lazy(() => import('./pages/shop/ShopPage'));
const SignInPage = lazy(() => import('./pages/sign-in/SignIn'));
const SignUpPage = lazy(() => import('./pages/sign-up/SignUp'));
const CheckoutPage = lazy(() => import('./pages/checkout/CheckoutPage'));

const App: React.FC<any> = (props: any) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  let unsubscribeFromAuth: any = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        if (userRef) {
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
        }
      }

      setCurrentUser(userAuth);
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
      <GlobalStyles />
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
      </CurrentUserContext.Provider>
      <Switch>
        <Suspense fallback={<Spinner/>}>
          <Route exact path={homePath} component={HomePage} />

          <Route path={shopPath} component={ShopPage} />
          <Route exact path={checkoutPath} component={CheckoutPage} />
          <Route
            exact
            path={signInPath}
            render={() =>
              currentUser ? <Redirect to={homePath} /> : <SignInPage />
            }
          />
          <Route exact path={signUpPath} component={SignUpPage} />
        </Suspense>
      </Switch>
    </div>
  );
};

export default App;
