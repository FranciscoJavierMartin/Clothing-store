import React from 'react';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import { SHOP_DATA } from '../../data/directory.data';
import { IShopSection } from '../../interfaces/common';

interface IShopPageProps {}

const ShopPage: React.FC<IShopPageProps> = (props: IShopPageProps) => {
  const collections = SHOP_DATA;

  return(
    <div className='shop-page'>
      {
        collections.map(({id, ...otherCollectionProps}:IShopSection) => (
          <CollectionPreview key={id} {...otherCollectionProps}/>
        ))
      }
    </div>
  );
}

export default ShopPage;