import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import CartDropdown from './CartDropdown';

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const CartDropdownContainer: React.FC = () => (
  <Mutation mutation={TOGGLE_CART_HIDDEN}>
    {
      (toggleCartHidden: any) => (
        <Query query={GET_CART_ITEMS}>
          {
            ({data: { cartItems }}) =>(
              <CartDropdown cartItems={cartItems} toggleCartHidden={toggleCartHidden}/>
            )
          }
        </Query>
      )
    }
  </Mutation>
);

export default CartDropdownContainer;
