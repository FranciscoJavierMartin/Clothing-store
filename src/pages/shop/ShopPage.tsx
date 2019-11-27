import React from 'react';
import CollectionOverview from '../../components/collections-overview/CollectionsOverview';

interface IShopPageProps {}

const ShopPage: React.FC<IShopPageProps> = (props: IShopPageProps) => {
  return(
    <div className='shop-page'>
      <CollectionOverview/>
    </div>
  );
}

export default ShopPage;