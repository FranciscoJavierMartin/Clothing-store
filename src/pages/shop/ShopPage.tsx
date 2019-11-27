import React from 'react';
import { Route, RouteComponentProps } from 'react-router';
import CollectionOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/CollectionPage';

interface IShopPageProps extends RouteComponentProps {}

const ShopPage: React.FC<IShopPageProps> = (props: IShopPageProps) => {
  return(
    <div className='shop-page'>
      <Route exatc path={`${props.match.path}`} component={CollectionOverview}/>
      <Route path={`${props.match.path}/:categoryId`} component={CollectionPage}/>
    </div>
  );
}

export default ShopPage;