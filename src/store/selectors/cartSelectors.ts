import { IGlobalState, ICartState } from './../../interfaces/states';
import { createSelector } from 'reselect';
import { IShopItem } from '../../interfaces/common';

const selectCart = (state: IGlobalState): ICartState => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const seletcCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulativeQuantity: number, cartItem: IShopItem) =>
        accumulativeQuantity + (cartItem.quantity || 1),
      0
    )
);

export const selectCartTotalPrice = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accumulativePrice: number, cartItem: IShopItem) =>
      accumulativePrice + cartItem.price * (cartItem.quantity || 1),
    0
  )
);
