import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import styles from './CollectionPreview.module.scss';
import { IShopItem } from '../../interfaces/common';

interface IPreviewCollectionProps {
  title: string;
  items: IShopItem[];
}

const PreviewCollection: React.FC<IPreviewCollectionProps> = (
  props: IPreviewCollectionProps
) => {
  return (
    <div className={styles.collectionPreview}>
      <h1 className={styles.title}>{props.title.toUpperCase()}</h1>
      <div className={styles.preview}>
        {props.items
          .filter((_, idx: number) => idx < 4)
          .map((item: IShopItem) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
