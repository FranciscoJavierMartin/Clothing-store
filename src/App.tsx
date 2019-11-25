import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.module.scss';
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInPage from './pages/sign-in/SignIn';
import SignUpPage from './pages/sign-up/SignUp';
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { homePath, shopPath, signInPath, signUpPath } from './constansts/routesName';
import * as userActions from './store/actions/userActions';
import { useSelector } from 'react-redux';
import { IGlobalState } from './interfaces/states';
import { FirebaseUser } from './interfaces/customTypes';

const App: React.FC = () => {
  let unsubscribeFromAuth: firebase.Unsubscribe;
  const currentUser = useSelector<IGlobalState, FirebaseUser>((state: IGlobalState) => state.user.currentUser);

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        if (userRef) {
          userRef.onSnapshot(snapShot => {
            userActions.setCurrentUser({
              id: snapShot.id,
              // ...snapShot.data() as IUserData,
              ...snapShot.data(),
            });
          });
        }
      }

      userActions.setCurrentUser(userAuth);
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
      <Header/>
      <Switch>
        <Route exact path={homePath} component={HomePage} />
        <Route path={shopPath} component={ShopPage} />
        <Route path={signInPath} render={()=> currentUser ? (<Redirect to={homePath}/>) : (<SignInPage/>)}  />
        <Route path={signUpPath} component={SignUpPage} />
      </Switch>
    </div>
  );
};

export default App;
