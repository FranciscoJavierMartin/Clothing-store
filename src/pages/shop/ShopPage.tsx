import React, { useEffect } from 'react';
import { Route, RouteComponentProps } from 'react-router';
import CollectionOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/CollectionPage';
import { useDispatch, useSelector } from 'react-redux';
import * as shopActions from '../../store/actions/shopActions';
import { IGlobalState } from '../../interfaces/states';
import { selectIsCollectionFetching } from '../../store/selectors/shopSelectors';
interface IShopPageProps extends RouteComponentProps {}

const ShopPage: React.FC<IShopPageProps> = (props: IShopPageProps) => {
  const dispatch = useDispatch();
  const isCollectionFetching = useSelector<IGlobalState, boolean>(selectIsCollectionFetching);

  useEffect(() => {
   dispatch(shopActions.fetchCollectionsStartAsync());
  }, []);

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
