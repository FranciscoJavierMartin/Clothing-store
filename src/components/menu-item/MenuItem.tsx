import React from 'react';
import { useHistory, RouteComponentProps } from 'react-router-dom';
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './MenuItem.styles';

interface IMenuItemProps extends RouteComponentProps<any> {
  title: string;
  imageUrl: string;
  linkUrl: string;
  size?: string;
}

const MenuItem: React.FC<IMenuItemProps> = (props: IMenuItemProps) => {
  const history = useHistory();

  const handleClickItem = () => {
    history.push(`${props.match.url}${props.linkUrl}`);
  };

  return (
    <MenuItemContainer
      size={props.size}
      data-test='container'
      onClick={handleClickItem}
    >
      <BackgroundImageContainer
        className='background-image'
        imageUrl={props.imageUrl}
        data-test='image'
      />
      <ContentContainer data-test='content'>
        <ContentTitle data-test='title'>
          {props.title.toUpperCase()}
        </ContentTitle>
        <ContentSubtitle data-test='subtitle'>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
