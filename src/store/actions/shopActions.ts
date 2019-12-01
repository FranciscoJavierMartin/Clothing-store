import { IAction } from './../../interfaces/actions';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { collectionsCollection } from '../../constansts/collectionNames';
export const UPDATE_COLLECTIONS = 'UPDATE_COLLECTIONS';
export const FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START';
export const FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS';
export const FETCH_COLLECTIONS_FAILURE = 'FETCH_COLLECTIONS_FAILURE';

export const updateCollections = (collectionsMap: any): IAction => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionsMap
});

const fetchCollectionsStart = (): IAction => ({
  type: FETCH_COLLECTIONS_START
});

const fetchCollectionsSuccess = (collectionsMap: any): IAction => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
}) 

const fetchCollectionsFailure = (errorMessage: string): IAction => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch: any) => {
    const collectionRef = firestore.collection(collectionsCollection);
    dispatch(fetchCollectionsStart());
    collectionRef.get().then((snapshot: firebase.firestore.QuerySnapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    }).catch((error: any) => dispatch(fetchCollectionsFailure(error.message)))
  }
}