import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as cartActions from '../../store/actions/cartActions';
import { IGlobalState } from '../../interfaces/states';
import { selectCartItemsCount } from '../../store/selectors/cartSelectors';
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
