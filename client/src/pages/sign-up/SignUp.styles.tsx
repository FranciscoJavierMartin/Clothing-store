import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  justify-content: space-between;
  margin: 30px auto;
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const GoToSignIn = styled.span`
  margin-top: 30px;
`;

export const CustomLink = styled(Link)`
  color: mediumaquamarine;
  margin-left: 5px;
`;