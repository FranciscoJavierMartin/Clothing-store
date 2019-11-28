import React from 'react';
import { IShopItem } from '../../interfaces/common';
import { useDispatch } from 'react-redux';
import * as cartActions from '../../store/actions/cartActions';
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
  const dispatch = useDispatch();
  // TODO: Disable the the left arrow when value is one
  console.log(props.item.imageUrl);
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
              dispatch(cartActions.removeItem(props.item));
            }
          }}
        >
          &#10094;
        </div>
        <span>{props.item.quantity}</span>
        <div onClick={() => dispatch(cartActions.addItem(props.item))}>
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer>${props.item.price}</TextContainer>
      <RemoveButtonContainer
        onClick={() => dispatch(cartActions.clearItemFromCart(props.item))}
      >
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
