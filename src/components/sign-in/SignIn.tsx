import React, { useState } from 'react';
import styles from './SignIn.module.scss';
import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

interface ISignInProps {}

const SignIn: React.FC<ISignInProps> = (props: ISignInProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    try{
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch(error){
      console.error(error);
    }
    
  };
  const handleInputEmail = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setEmail(event.target.value);
  };

  const handleInputPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);
  };

  return (
    <div className={styles.signIn}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          onChange={handleInputEmail}
          value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          onChange={handleInputPassword}
          label='password'
          required
        />
        <div className={styles.buttons}>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
