import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shopActions';
import { FETCH_COLLECTIONS_START } from './shopTypes';
import { collectionsCollection } from '../../constansts/collectionNames';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

export function* fetchCollections() {
  try {
    const collectionRef = firestore.collection(collectionsCollection);
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* onFetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollections);
}

export function* shopSagas() {
  yield all([call(fetchCollections)]);
}
