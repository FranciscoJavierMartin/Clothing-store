import React from 'react';
import { Query } from 'react-apollo';
import { gql} from 'apollo-boost';

import CollectionPage from './CollectionPage';
import Spinner from '../../components/spinner/Spinner';
import { RouteComponentProps } from 'react-router';

const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!){
    getCollectionsByTitle(title: $title){
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

interface ICollectionPageContainerProps extends RouteComponentProps<any>{}

const CollectionPageContainer = (props: ICollectionPageContainerProps) => (
  <Query query={GET_COLLECTION_BY_TITLE} variables={{title: props.match.params.collectionId}}>
    {
      ({loading, data: { getCollectionsByTitle }}) => {
        let res: React.ReactNode;

        if(loading){
          res = <Spinner/>
        } else {
          res = (<CollectionPage collection={getCollectionsByTitle/>);
        }
        return res;
      }
    }}}
  </Query>
);

export default CollectionPageContainer;