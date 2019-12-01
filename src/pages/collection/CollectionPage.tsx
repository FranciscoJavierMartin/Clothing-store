import React from 'react';
import CollectionItem from '../../components/collection-item/CollectionItem';
import {
  selectCollection,
  selectIsCollectionsLoaded
} from '../../store/selectors/shopSelectors';
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
  let res: any;
  const urlParam = props.match.params.collectionId;
  const isCollectionLoaded = useSelector<IGlobalState, boolean>(
    selectIsCollectionsLoaded
  );
  const collection = useSelector<IGlobalState, IShopSection | null>(state =>
    selectCollection(state, urlParam)
  );

  if (isCollectionLoaded) {
    res = (
      <CollectionPageContainer>
        <CollectionTitle>{collection!!.title}</CollectionTitle>
        <CollectionItemsContainer>
          {collection!!.items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </CollectionItemsContainer>
      </CollectionPageContainer>
    );
  } else {
    res = (
      <CollectionPageContainer>
        <h1>Not found</h1>
      </CollectionPageContainer>
    );
  }

  return res;
};

export default CollectionPage;
