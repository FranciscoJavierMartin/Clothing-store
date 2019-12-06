import React, { createContext, useState, useEffect } from 'react';
import { IShopItem } from '../../interfaces/common';

interface ICartContext {
  hidden: boolean;
  toggleHidden: () => void;
  cartItems: IShopItem[];
  addItem: (item: IShopItem) => void;
  removeItem: (item: IShopItem) => void;
  clearItemFromCart: (item: IShopItem) => void;
  cartItemsCount: number;
  cartTotal: number;
}

export const CartContext = createContext<ICartContext>({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: (item: IShopItem) => {},
  removeItem: (item: IShopItem) => {},
  clearItemFromCart: (item: IShopItem) => [],
  cartItemsCount: 0,
  cartTotal: 0
});

const CartProvider = ({ children }: any) => {
  const [hidden, setHidden] = useState<boolean>(true);
  const [cartItems, setCartItems] = useState<IShopItem[]>([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItem = (item: IShopItem) =>
    setCartItems(addItemToCart(cartItems, item));
  const removeItem = (item: IShopItem) =>
    setCartItems(removeItemFromCart(cartItems, item));
  const clearItemFromCart = (item: IShopItem) =>
    setCartItems(filterItemFromCart(cartItems, item));
  const toggleHidden = () => setHidden(!hidden);

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setCartTotal(getCartTotal(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        removeItem,
        clearItemFromCart,
        cartItemsCount,
        cartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
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

function removeItemFromCart(
  cartItems: IShopItem[],
  cartItemToRemove: IShopItem
) {
  let newCartItems: IShopItem[];
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem && existingCartItem.quantity === 1) {
    newCartItems = cartItems.filter(
      cartItem => cartItem.id !== cartItemToRemove.id
    );
  } else {
    newCartItems = cartItems.map<IShopItem>(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity && cartItem.quantity - 1
          }
        : cartItem
    );
  }

  return newCartItems;
}

function filterItemFromCart(
  cartItems: IShopItem[],
  item: IShopItem
): IShopItem[] {
  return cartItems.filter(cartItem => cartItem.id !== item.id);
}

function getCartItemsCount(cartItems: IShopItem[]): number {
  return cartItems.reduce(
    (accumulatedQuantity: number, cartItem: IShopItem) =>
      accumulatedQuantity + (cartItem.quantity || 1),
    0
  );
}

function getCartTotal(cartItems: IShopItem[]): number {
  return cartItems.reduce(
    (accumulatorQuantity: number, cartItem: IShopItem) =>
      accumulatorQuantity + (cartItem.quantity || 0) * cartItem.price,
    0
  );
}

export default CartProvider;
