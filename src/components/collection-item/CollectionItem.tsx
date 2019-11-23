import React from 'react';
import styles from './CollectionItem.module.scss';

interface ICollectionItemProps {
  id: number;
  name: string;
  price:number;
  imageUrl: string;
}

const CollectionItem: React.FC<ICollectionItemProps> = (props: ICollectionItemProps) => {
  return (
    <div className={styles.collectionItem}>
      <div className={styles.image} style={{
        backgroundImage: `url(${props.imageUrl})`
      }}/>

      <div className={styles.collectionFooter}>
        <span className={styles.name}>
          {props.name}
        </span>
        <span className={styles.price}>
          {props.price}
        </span>
      </div>
    </div>
  );
}

export default CollectionItem;