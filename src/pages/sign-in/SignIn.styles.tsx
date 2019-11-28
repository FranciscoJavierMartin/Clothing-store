import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px auto;

`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GoToSignUp = styled.span`
  margin-top: 30px;
`;

export const CustomLink = styled(Link)`
  color: mediumaquamarine;
  margin-left: 5px;
`;