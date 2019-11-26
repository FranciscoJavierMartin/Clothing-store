import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './CollectionItem.module.scss';
import CustomButton from '../customButton/CustomButton';
import * as cartActions from '../../store/actions/cartActions';
import { IShopItem } from '../../interfaces/common';

interface ICollectionItemProps {
  item: IShopItem;
}

const CollectionItem: React.FC<ICollectionItemProps> = (
  props: ICollectionItemProps
) => {
  const dispatch = useDispatch();
  // FIXME: Fix the button styles
  return (
    <div className={styles.collectionItem}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${props.item.imageUrl})`
        }}
      />

      <div className={styles.collectionFooter}>
        <span className={styles.name}>{props.item.name}</span>
        <span className={styles.price}>{props.item.price}</span>
      </div>
      <CustomButton inverted className={styles.customButton} onClick={() => dispatch(cartActions.addItem(props.item))}>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
