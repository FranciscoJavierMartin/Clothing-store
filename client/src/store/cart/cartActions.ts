import { IAction } from '../../interfaces/actions';
import { IShopItem } from '../../interfaces/common';
import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_CART,
  CLEAR_ITEM_FROM_CART
} from './cartTypes';

export const toggleCartHidden = (): IAction => ({
  type: TOGGLE_CART_HIDDEN
});

export const addItem = (item: IShopItem): IAction => ({
  type: ADD_ITEM,
  payload: item
});

export const clearItemFromCart = (item: IShopItem): IAction => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item
});

export const removeItem = (item: IShopItem): IAction => ({
  type: REMOVE_ITEM,
  payload: item
});

export const clearCart = (): IAction => ({
  type: CLEAR_CART
});
