import { IAction } from '../../interfaces/actions';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';
import { collectionsCollection } from '../../constansts/collectionNames';
import {
  FETCH_COLLECTIONS_START,
  UPDATE_COLLECTIONS,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE
} from './shopTypes';

export const updateCollections = (collectionsMap: any): IAction => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionsMap
});

export const fetchCollectionsStart = (): IAction => ({
  type: FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap: any): IAction => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage: string): IAction => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch: any) => {
    const collectionRef = firestore.collection(collectionsCollection);
    dispatch(fetchCollectionsStart());
    collectionRef
      .get()
      .then((snapshot: firebase.firestore.QuerySnapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error: any) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
