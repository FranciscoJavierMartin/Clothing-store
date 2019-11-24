import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';
import styles from './SignInAndSignUp.module.scss';

const SignInPage: React.FC = () => {
  return (
    <div className={styles.signInAndSignUp}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInPage;
