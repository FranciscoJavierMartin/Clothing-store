import React from 'react';
import { IShopItem } from '../../interfaces/common';
import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './CartItem.styles';

interface ICartItemProps {
  item: IShopItem;
}

const CartItem: React.FC<ICartItemProps> = (props: ICartItemProps) => {
  return (
    <CartItemContainer>
      <CartItemImage alt='item' src={props.item.imageUrl}/>
      <ItemDetailsContainer>
        <span>{props.item.name}</span>
        <span>
          {props.item.quantity || 1} x ${props.item.price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
