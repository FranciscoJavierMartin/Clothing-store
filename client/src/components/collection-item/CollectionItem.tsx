import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import * as cartActions from '../../store/cart/cartActions';
import { IShopItem } from '../../interfaces/common';
import { CartContext } from '../../provider/cart/cartProvider';
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
  const { name, price, imageUrl } = props.item;
  const { addItem } = useContext(CartContext);

  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(props.item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
