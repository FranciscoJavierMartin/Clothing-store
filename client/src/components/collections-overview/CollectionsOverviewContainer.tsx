import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import CollectionsOverview from './CollectionsOverview';
import Spinner from '../spinner/Spinner';
import { RouteComponentProps } from 'react-router';

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;
interface ICollectionsOverviewContainerProps extends RouteComponentProps<any> {}

const CollectionsOverviewContainer: React.FC<ICollectionsOverviewContainerProps> = (
  props: ICollectionsOverviewContainerProps
) => (
  <Query
    query={GET_COLLECTIONS}
    variables={{ title: props.match.params.collectionId }}
  >
    {({ loading, data }) => {
      let res: React.ReactNode;

      if (loading) {
        res = <Spinner />;
      } else {
        const { getCollectionsByTitle } = data;
        res = <CollectionsOverview collections={getCollectionsByTitle} />;
      }

      return res;
    }}
  </Query>
);

export default CollectionsOverviewContainer;
