import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import CollectionItem from './CollectionItem';

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

interface ICollectionItemContainerProps {}

const CollectionItemContainer: React.FC = (
  props: ICollectionItemContainerProps
) => (
  <Mutation mutation={ADD_ITEM_TO_CART}>
    {(addItemToCart: any) => (
      <CollectionItem
        {...props}
        addItem={(item: any) => addItemToCart({ variables: { item } })}
      />
    )}
  </Mutation>
);

export default CollectionItemContainer;
