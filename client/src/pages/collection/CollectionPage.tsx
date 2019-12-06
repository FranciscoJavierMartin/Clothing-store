import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router';
import CollectionItem from '../../components/collection-item/CollectionItem';
import CollectionsContext from '../../contexts/collections/collectionsContext';
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
  let res: React.ReactNode;
  const collection = useContext(CollectionsContext)[
    props.match.params.collectionId
  ];
  const { title, items } = collection;

  if (items.length === 0) {
    res = <h1>Not found</h1>;
  } else {
    res = (
      <React.Fragment>
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionItemsContainer>
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </CollectionItemsContainer>
      </React.Fragment>
    );
  }
  return <CollectionPageContainer>{res}</CollectionPageContainer>;
};

export default CollectionPage;
