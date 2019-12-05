import React from 'react';
import Directory from '../../components/directory/Directory';
import { HomePageContainer } from './HomePage.styles';
import { RouteComponentProps } from 'react-router';

interface IHomePageProps extends RouteComponentProps {}

const HomePage: React.FC<IHomePageProps> = (props: IHomePageProps) => {
  return (
    <HomePageContainer data-test='home-component'>
      <Directory {...props}/>
    </HomePageContainer>
  );
};

export default HomePage;
