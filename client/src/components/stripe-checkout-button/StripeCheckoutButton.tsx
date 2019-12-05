import React from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';
import axios from 'axios';

interface IStripeButtonProps {
  price: number;
}

const StripeCheckoutButton: React.FC<IStripeButtonProps> = (
  props: IStripeButtonProps
) => {
  const priceForStripe = props.price * 100;
  const publicshableKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY || '';

  const onTokenHandler = (token: Token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert('Payment successful');
      })
      .catch(error => {
        console.error(error);
        alert(
          'There was an issue with your payments. Please sure you use the provided creadit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay now'
      name='Clothing shop'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${props.price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onTokenHandler}
      stripeKey={publicshableKey}
    />
  );
};

export default StripeCheckoutButton;
