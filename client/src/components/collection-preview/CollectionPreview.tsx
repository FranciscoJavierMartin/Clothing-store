import React from 'react';
import CollectionItem from '../collection-item/CollectionItemContainer';
import { IShopItem } from '../../interfaces/common';
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './CollectionPreview.styles';
import { useHistory, RouteComponentProps } from 'react-router';

interface ICollectionPreviewProps extends RouteComponentProps<any> {
  title: string;
  items: IShopItem[];
  routeName: string;
}

const CollectionPreview: React.FC<ICollectionPreviewProps> = (
  props: ICollectionPreviewProps
) => {
  const history = useHistory();

  return (
    <CollectionPreviewContainer>
      <TitleContainer
        onClick={() => history.push(`${props.match.path}/${props.routeName}`)}
      >
        {props.title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {props.items
          .filter((_, idx: number) => idx < 4)
          .map((item: IShopItem) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
