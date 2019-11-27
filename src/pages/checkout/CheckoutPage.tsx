import React from 'react';
import { useSelector } from 'react-redux';
import { IGlobalState } from '../../interfaces/states';
import { IShopItem } from '../../interfaces/common';
import {
  selectCartItems,
  selectCartTotalPrice
} from '../../store/selectors/cartSelectors';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckoutButton from '../../components/stripe-checkout-button/StripeCheckoutButton';
import styles from './CheckoutPage.module.scss';

const CheckoutPage: React.FC = () => {
  const cartItems = useSelector<IGlobalState, IShopItem[]>(selectCartItems);
  const totalPrice = useSelector<IGlobalState, number>(selectCartTotalPrice);

  return (
    <div className={styles.checkoutPage}>
      <div className={styles.checkoutHeader}>
        <div className={styles.headerBlock}>
          <span>Product</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Description</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Quantity</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Price</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <div className={styles.total}>
        <span>TOTAL: ${totalPrice}</span>
      </div>
      <div className={styles.testWarning}>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeCheckoutButton price={totalPrice} />
    </div>
  );
};

export default CheckoutPage;
