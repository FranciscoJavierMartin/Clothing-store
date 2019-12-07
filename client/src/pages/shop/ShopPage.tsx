import React, { lazy, Suspense } from 'react';
import { Route, RouteComponentProps } from 'react-router';
import Spinner from '../../components/spinner/Spinner';

const CollectionOverview = lazy(() =>
  import('../../components/collections-overview/CollectionsOverviewContainer')
);
const CollectionPage = lazy(() =>
  import('../collection/CollectionPageContainer')
);

interface IShopPageProps extends RouteComponentProps {}

const ShopPage: React.FC<IShopPageProps> = (props: IShopPageProps) => {
  return (
    <div className='shop-page'>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${props.match.path}`}
          component={CollectionOverview}
        />
        <Route
          path={`${props.match.path}/:collectionId`}
          component={CollectionPage}
        />
      </Suspense>
    </div>
  );
};

export default ShopPage;
