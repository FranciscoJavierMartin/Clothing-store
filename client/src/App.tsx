import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.module.scss';
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInPage from './pages/sign-in/SignIn';
import SignUpPage from './pages/sign-up/SignUp';
import CheckoutPage from './pages/checkout/CheckoutPage';
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

const App: React.FC<any> = (props: any) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  let unsubscribeFromAuth: any = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        if(userRef){
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
      if(unsubscribeFromAuth){
        unsubscribeFromAuth();
      }
    }
  },[]);



  return (
    // TODO: Remove data-test in production
    <div data-test='component-app'>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
      </CurrentUserContext.Provider>
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
