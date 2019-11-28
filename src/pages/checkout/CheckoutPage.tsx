import React from 'react';
import { useSelector } from 'react-redux';
import { IGlobalState } from '../../interfaces/states';
import { IShopItem } from '../../interfaces/common';
import {
  selectCartItems,
  selectCartTotalPrice
} from '../../store/selectors/cartSelectors';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckoutButton from '../../components/stripe-checkout-button/StripeCheckoutButton';
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './CheckoutPage.styles';

const CheckoutPage: React.FC = () => {
  const cartItems = useSelector<IGlobalState, IShopItem[]>(selectCartItems);
  const totalPrice = useSelector<IGlobalState, number>(selectCartTotalPrice);

  // TODO: Replace for table html
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <TotalContainer>
        <span>TOTAL: ${totalPrice}</span>
      </TotalContainer>
      <WarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </WarningContainer>
      <StripeCheckoutButton price={totalPrice} />
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
