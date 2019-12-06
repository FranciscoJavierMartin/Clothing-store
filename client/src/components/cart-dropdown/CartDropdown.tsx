import React, { useContext } from 'react';
import CartItem from '../cart-item/CartItem';
import { useHistory } from 'react-router';
import { checkoutPath } from '../../constansts/routesName';
import { CartContext } from '../../provider/cart/cartProvider';
import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from './CartDropdown.styles';

const CartDropdown: React.FC = () => {
  const history = useHistory();
  const { cartItems, toggleHidden }  = useContext(CartContext);
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
          toggleHidden();
          history.push(checkoutPath);
        }}
      >
        GO TO THE CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
