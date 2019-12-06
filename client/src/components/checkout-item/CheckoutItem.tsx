import React, { useContext } from 'react';
import { IShopItem } from '../../interfaces/common';
import { CartContext } from '../../provider/cart/cartProvider';
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './CheckoutItem.styles';

interface ICheckoutItemProps {
  item: IShopItem;
}

const CheckoutItem: React.FC<ICheckoutItemProps> = (
  props: ICheckoutItemProps
) => {
  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img alt='item' src={props.item.imageUrl} />
      </ImageContainer>
      <TextContainer>{props.item.name}</TextContainer>
      <QuantityContainer>
        <div
          onClick={() => {
            if (props.item.quantity && props.item.quantity > 1) {
              removeItem(props.item);
            }
          }}
        >
          &#10094;
        </div>
        <span>{props.item.quantity}</span>
        <div onClick={() => addItem(props.item)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>${props.item.price}</TextContainer>
      <RemoveButtonContainer
        onClick={() => clearItemFromCart(props.item)}
      >
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
