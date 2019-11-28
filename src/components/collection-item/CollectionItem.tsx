import React from 'react';
import { useDispatch } from 'react-redux';
import * as cartActions from '../../store/actions/cartActions';
import { IShopItem } from '../../interfaces/common';
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './CollectionItem.styles';

interface ICollectionItemProps {
  item: IShopItem;
}

const CollectionItem: React.FC<ICollectionItemProps> = (
  props: ICollectionItemProps
) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = props.item;
  // FIXME: Fix the button styles
  
  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton
        onClick={() => dispatch(cartActions.addItem(props.item))}
        inverted
      >
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
