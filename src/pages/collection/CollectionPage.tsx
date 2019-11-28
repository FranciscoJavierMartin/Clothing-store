import React from 'react';
import CollectionItem from '../../components/collection-item/CollectionItem';
import { selectCollection } from '../../store/selectors/shopSelectors';
import { IGlobalState } from '../../interfaces/states';
import { IShopSection } from '../../interfaces/common';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './CollectionPage.styles';

interface ICollectionPageParams {
  collectionId: string;
}

interface ICollectionPageProps
  extends RouteComponentProps<ICollectionPageParams> {}

const CollectionPage: React.FC<ICollectionPageProps> = (
  props: ICollectionPageProps
) => {
  const urlParam = props.match.params.collectionId;
  const collection = useSelector<IGlobalState, IShopSection | undefined>(
    state => selectCollection(state, urlParam)
  );
  
  return collection ? (
    <CollectionPageContainer>
      <CollectionTitle>{collection.title}</CollectionTitle>
      <CollectionItemsContainer>
        {collection.items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  ) : (
    <CollectionPageContainer>
      <h1>Not found</h1>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
