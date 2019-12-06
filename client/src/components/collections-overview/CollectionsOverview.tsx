import React, { useContext } from 'react';
import CollectionPreview from '../collection-preview/CollectionPreview';
import { CollectionsOverviewContainer } from './CollectionsOverview.styles';
import { RouteComponentProps } from 'react-router';
import CollectionsContext from '../../contexts/collections/collectionsContext';

interface ICollectionOverviewProps extends RouteComponentProps{}

const CollectionOverview: React.FC<ICollectionOverviewProps> = (props: ICollectionOverviewProps) => {
  const collectionsMap = useContext(CollectionsContext);
  const collections = Object.keys(collectionsMap).map(key => collectionsMap[key]);
  return (
    <CollectionsOverviewContainer>
      {collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} {...props}/>
      ))}
    </CollectionsOverviewContainer>
  )
}

export default CollectionOverview;