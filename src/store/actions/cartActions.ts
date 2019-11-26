import { IAction } from "../../interfaces/actions";
import { IShopItem } from "../../interfaces/common";

export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';
export const ADD_ITEM = 'ADD_ITEM';
export const CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const toggleCartHidden = ():IAction =>({
    type: TOGGLE_CART_HIDDEN,
})

export const addItem = (item: IShopItem): IAction => ({
  type: ADD_ITEM,
  payload: item,
})

export const clearItemFromCart = (item: IShopItem): IAction => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item,
})

export const removeItem = (item: IShopItem): IAction => ({
  type: REMOVE_ITEM,
  payload: item,
});