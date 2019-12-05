import React from 'react';
import { useSelector } from 'react-redux';
import CollectionPreview from '../collection-preview/CollectionPreview';
import { IGlobalState } from '../../interfaces/states';
import { selectCollectionsForPreview } from '../../store/shop/shopSelectors';
import { IShopSection } from '../../interfaces/common';
import { CollectionsOverviewContainer } from './CollectionsOverview.styles';
import { RouteComponentProps } from 'react-router';

interface ICollectionOverviewProps extends RouteComponentProps{}

const CollectionOverview: React.FC<ICollectionOverviewProps> = (props: ICollectionOverviewProps) => {
  const collections = useSelector<IGlobalState, IShopSection[]>(selectCollectionsForPreview);
  // TODO: Check if works properly
  return (
    <CollectionsOverviewContainer>
      {collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} {...props}/>
      ))}
    </CollectionsOverviewContainer>
  )
}

export default CollectionOverview;