import { all, call} from 'redux-saga/effects';
import { onFetchCollectionsStart } from './shop/shopSagas';
import { userSagas } from './user/userSagas';
import { cartSagas } from './cart/cartSagas';

export default function* rootSaga(){
  yield all([
    call(onFetchCollectionsStart),
    call(userSagas),
    call(cartSagas)
  ])
}