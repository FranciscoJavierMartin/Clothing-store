import React, { useState } from 'react';
import styles from './SignIn.module.scss';
import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';

interface ISignInProps {}

const SignIn: React.FC<ISignInProps> = (props: ISignInProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmail('');
    setPassword('');
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
          handleChange={handleInputEmail}
          value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleInputPassword}
          label='password'
          required
        />
        <CustomButton type='submit'>Sign in</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
