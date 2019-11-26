import React from 'react';
import styles from './CheckoutItem.module.scss';
import { IShopItem } from '../../interfaces/common';
import { useDispatch } from 'react-redux';
import * as cartActions from '../../store/actions/cartActions';

interface ICheckoutItemProps {
  item: IShopItem;
}

const CheckoutItem: React.FC<ICheckoutItemProps> = (
  props: ICheckoutItemProps
) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.checkoutItem}>
      <div className={styles.imageContainer}>
        <img alt='item' src={props.item.imageUrl} />
      </div>
      <span className={styles.name}>{props.item.name}</span>
      <span className={styles.quantity}>
        <div
          className={styles.arrow}
          style={{ color: props.item.quantity === 1 ? 'gray' : '' }}
          onClick={() => {
            if (props.item.quantity && props.item.quantity > 1) {
              dispatch(cartActions.removeItem(props.item));
            }
          }}
        >
          &#10094;
        </div>
        <span className={styles.value}>{props.item.quantity}</span>
        <div
          className={styles.arrow}
          onClick={() => dispatch(cartActions.addItem(props.item))}
        >
          &#10095;
        </div>
      </span>
      <span className={styles.price}>${props.item.price}</span>
      <span
        className={styles.removeButton}
        onClick={() => dispatch(cartActions.clearItemFromCart(props.item))}
      >
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
