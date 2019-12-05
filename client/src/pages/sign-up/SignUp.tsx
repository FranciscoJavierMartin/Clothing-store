import React, { useState } from 'react';
import FormInput from '../../components/form-input/FormInput';
import CustomButton from '../../components/custom-button/CustomButton';
import { signInPath } from '../../constansts/routesName';
import {
  SignUpContainer,
  SignUpTitle,
  GoToSignIn,
  CustomLink,
  ButtonsBarContainer
} from './SignUp.styles';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../store/user/userActions';

const SignUp: React.FC = () => {
  const [displayName, setDisplayName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const dispatch = useDispatch();

  const handleInputEmail = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setEmail(event.target.value);
  };

  const handleInputDisplayName = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setDisplayName(event.target.value);
  };

  const handleInputPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);
  };

  const handleInputConfirmPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
    }

    dispatch(
      signUpStart({
        displayName,
        email,
        password
      })
    );
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
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
        <ButtonsBarContainer>
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </ButtonsBarContainer>
      </form>
      <GoToSignIn>
        Do you have an account?{' '}
        <CustomLink to={signInPath}>Click here</CustomLink>
      </GoToSignIn>
    </SignUpContainer>
  );
};

export default SignUp;
