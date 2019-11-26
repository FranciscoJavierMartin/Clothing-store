import { ICartState } from '../../interfaces/states';
import { IAction } from '../../interfaces/actions';
import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM
} from '../actions/cartActions';
import { IShopItem } from '../../interfaces/common';

const initialState: ICartState = {
  hidden: true,
  cartItems: []
};

function addItemToCart(
  cartItems: IShopItem[],
  cartItemToAdd: IShopItem
): IShopItem[] {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );
  let res;
  if (existingCartItem) {
    res = cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity ? cartItem.quantity + 1 : 1
          }
        : cartItem
    );
  } else {
    res = [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
  return res;
}

function removeItemFromCart(cartItems: IShopItem[], cartItemToRemove:IShopItem) {
  let newCartItems: IShopItem[];
  const existingCartItem = cartItems.find(
    cartItem  => cartItem.id === cartItemToRemove.id
  );

  if(existingCartItem && existingCartItem.quantity === 1){
    newCartItems = cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  } else {
    newCartItems = cartItems.map<IShopItem>(cartItem => cartItem.id === cartItemToRemove.id ? {
      ...cartItem, quantity: cartItem.quantity && cartItem.quantity - 1
    } : cartItem)
  }

  return newCartItems;
}

export default (
  state: ICartState = initialState,
  action: IAction
): ICartState => {
  let newState: ICartState;

  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      newState = {
        ...state,
        hidden: !state.hidden
      };
      break;
    case ADD_ITEM:
      newState = {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
      break;
    case CLEAR_ITEM_FROM_CART:
      newState = {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        ),
      };
      break;
      case REMOVE_ITEM:
        newState = {
          ...state,
          cartItems: removeItemFromCart(state.cartItems, action.payload),
        }
        break;
    default:
      newState = state;
  }

  return newState;
};
