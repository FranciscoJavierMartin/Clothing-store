import React from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';

interface IStripeButtonProps {
  price: number;
}

const StripeCheckoutButton: React.FC<IStripeButtonProps> = (props: IStripeButtonProps) => {
  const priceForStripe = props.price * 100;
  const publicshableKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY || ''
  
  const onTokenHandler = (token: Token) => {
    console.log(token);
    alert('Payment successful');
  }

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
  )
}

export default StripeCheckoutButton;