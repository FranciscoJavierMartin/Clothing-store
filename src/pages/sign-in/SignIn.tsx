import React, { useState } from 'react';
import FormInput from '../../components/form-input/FormInput';
import CustomButton from '../../components/custom-button/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { signUpPath } from '../../constansts/routesName';
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
  GoToSignUp,
  CustomLink
} from './SignIn.styles';

interface ISignInProps {}

const SignIn: React.FC<ISignInProps> = (props: ISignInProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch (error) {
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

  // TODO: Add styles to go to sign up
  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
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
        <ButtonsBarContainer>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
      <GoToSignUp>
        You do not have an account?{' '}
        <CustomLink to={signUpPath}>
          Click here
        </CustomLink>
      </GoToSignUp>
    </SignInContainer>
  );
};

export default SignIn;
