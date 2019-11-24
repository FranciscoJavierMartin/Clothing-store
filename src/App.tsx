import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.module.scss';
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInPage from './pages/sign-in-and-sign-up/SignInAndSignUp';
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { homePath, shopPath, signInPath } from './constansts/routesName';
import { IUserData } from './interfaces/common';

const App: React.FC = () => {
  // TODO: Fix the proper user data interface
  const [currentUser, setCurrentUser] = useState<any>();
  let unsubscribeFromAuth: firebase.Unsubscribe;

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
      } else {
        setCurrentUser(undefined);
      }
    });
  }, []);

  useEffect(() => {
    return () => {
      if (unsubscribeFromAuth) {
        unsubscribeFromAuth();
      }
    };
  }, []);

  return (
    // TODO: Remove data-test in production
    <div data-test='component-app'>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path={homePath} component={HomePage} />
        <Route path={shopPath} component={ShopPage} />
        <Route path={signInPath} component={SignInPage} />
      </Switch>
    </div>
  );
};

export default App;
