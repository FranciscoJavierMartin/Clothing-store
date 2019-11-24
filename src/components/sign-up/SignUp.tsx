import React, { useState } from 'react';
import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import styles from './SignUp.module.scss';

const SignUp: React.FC = () => {
  const [displayName, setDisplayName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleInputEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handleInputDisplayName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setDisplayName(event.target.value);
  };

  const handleInputPassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const handleInputConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if(password!== confirmPassword){
      alert("Passwords don't match");
    } else {
      try{
        const { user } = await auth.createUserWithEmailAndPassword(email, password);
        if(user){
          await createUserProfileDocument(user, {displayName});

          setEmail('');
          setDisplayName('');
          setPassword('');
          setConfirmPassword('');
        }
      } catch(error){
        console.error(error);
      }
    }
  };

  return (
    <div className={styles.signUp}>
      <h2 className={styles.title}>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className={styles.signUpForm} onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleInputEmail}
          label='Email'
          required
        />
         <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleInputDisplayName}
          label='Display name'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleInputPassword}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleInputConfirmPassword}
          label='Confirm password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
