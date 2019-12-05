import React, { useEffect } from 'react';
import { Route, RouteComponentProps } from 'react-router';
import CollectionOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/CollectionPage';
import { useDispatch } from 'react-redux';
import * as shopActions from '../../store/shop/shopActions';

interface IShopPageProps extends RouteComponentProps {}

const ShopPage: React.FC<IShopPageProps> = (props: IShopPageProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(shopActions.fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${props.match.path}`}
        component={CollectionOverview}
      />
      <Route
        path={`${props.match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};

export default ShopPage;
