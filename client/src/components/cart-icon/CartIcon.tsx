import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as cartActions from '../../store/cart/cartActions';
import { IGlobalState } from '../../interfaces/states';
import { selectCartItemsCount } from '../../store/cart/cartSelectors';
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './CartIcon.styles';

const CartIcon: React.FC = () => {
  const dispatch = useDispatch();
  const numberOfItemsInCart = useSelector<IGlobalState, number>(
    selectCartItemsCount
  );

  return (
    <CartContainer
      onClick={() => dispatch(cartActions.toggleCartHidden())}
    >
      <ShoppingIcon />
      <ItemCountContainer>
        {numberOfItemsInCart > 9 ? '+9' : numberOfItemsInCart}
      </ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;
