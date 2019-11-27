import React from 'react';
import { useSelector } from 'react-redux';
import CollectionPreview from '../collection-preview/CollectionPreview';
import styles from './CollectionsOverview.module.scss';
import { IGlobalState } from '../../interfaces/states';
import { selectCollectionsForPreview } from '../../store/selectors/shopSelectors';
import { IShopSection, IShopData } from '../../interfaces/common';

const CollectionOverview: React.FC = () => {
  const collections = useSelector<IGlobalState, IShopSection[]>(selectCollectionsForPreview);

  return (
    <div className={styles.collectionsOverview}>
      {collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps}/>
      )) }
    </div>
  )
}

export default CollectionOverview;