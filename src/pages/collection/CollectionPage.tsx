import React from 'react';
import CollectionItem from '../../components/collection-item/CollectionItem';
import styles from './CollectionPage.module.scss';
import { selectCollection } from '../../store/selectors/shopSelectors';
import { IGlobalState } from '../../interfaces/states';
import { IShopSection } from '../../interfaces/common';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';

interface ICollectionPageParams {
  collectionId: string;
}
interface ICollectionPageProps
  extends RouteComponentProps<ICollectionPageParams> {}

const CollectionPage: React.FC<ICollectionPageProps> = (
  props: ICollectionPageProps
) => {
  const urlParam = props.match.params.collectionId;
  const collection = useSelector<IGlobalState, IShopSection | undefined>(
    state => selectCollection(state, urlParam)
  );
  
  return collection ? (
    <div className={styles.collectionPage}>
      <h2 className={styles.title}>{collection.title}</h2>
      <div className={styles.items}>
        {collection.items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  ) : (
    <div className={styles.collectionPage}>
      <h1>Not found</h1>
    </div>
  );
};

export default CollectionPage;
