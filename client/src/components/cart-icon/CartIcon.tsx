import React, { useContext } from 'react';
import { CartContext } from '../../provider/cart/cartProvider';
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './CartIcon.styles';

const CartIcon: React.FC = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);
  return (
    <CartContainer onClick={toggleHidden}>
      <ShoppingIcon />
      <ItemCountContainer>
        {cartItemsCount > 9 ? '+9' : cartItemsCount}
      </ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;
