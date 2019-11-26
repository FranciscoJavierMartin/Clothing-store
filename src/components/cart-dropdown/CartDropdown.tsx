import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './CartDropdown.module.scss';
import CustomButton from '../customButton/CustomButton';
import CartItem from '../cart-item/CartItem';
import { IGlobalState } from '../../interfaces/states';
import { IShopItem } from '../../interfaces/common';
import { selectCartItems } from '../../store/selectors/cartSelectors';
import { useHistory } from 'react-router';
import { checkoutPath } from '../../constansts/routesName';
import * as cartActions from '../../store/actions/cartActions';

const CartDropdown: React.FC = () => {
  const cartItems = useSelector<IGlobalState, IShopItem[]>(selectCartItems);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className={styles.cartDropdown}>
      <div className={styles.cartItems}>
        {cartItems.length !== 0 ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className={styles.emptyMessage}>Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(cartActions.toggleCartHidden());
          history.push(checkoutPath);
        }}
      >
        GO TO THE CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
