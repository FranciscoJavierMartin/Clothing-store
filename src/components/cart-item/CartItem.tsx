import React from 'react';
import styles from './CartItem.module.scss';
import { IShopItem } from '../../interfaces/common';

interface ICartItemProps {
  item: IShopItem;
}

const CartItem: React.FC<ICartItemProps> = (props: ICartItemProps) => {
  return (
    <div className={styles.cartItem}>
      <img src={props.item.imageUrl} alt='item' />
      <div className={styles.itemDetails}>
        <span className={styles.name}>{props.item.name}</span>
        <span className={styles.price}>
          {props.item.quantity || 1} x ${props.item.price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
