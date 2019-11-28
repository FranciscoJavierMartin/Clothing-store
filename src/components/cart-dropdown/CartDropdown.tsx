import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../cart-item/CartItem';
import { IGlobalState } from '../../interfaces/states';
import { IShopItem } from '../../interfaces/common';
import { selectCartItems } from '../../store/selectors/cartSelectors';
import { useHistory } from 'react-router';
import { checkoutPath } from '../../constansts/routesName';
import * as cartActions from '../../store/actions/cartActions';
import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from './CartDropdown.styles';

const CartDropdown: React.FC = () => {
  const cartItems = useSelector<IGlobalState, IShopItem[]>(selectCartItems);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length !== 0 ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          dispatch(cartActions.toggleCartHidden());
          history.push(checkoutPath);
        }}
      >
        GO TO THE CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
