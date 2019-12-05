import { all, call, takeLatest, put} from 'redux-saga/effects';
import { SIGN_IN_SUCCESS } from '../user/userTypes';
import { clearCart } from './cartActions';

export function* clearCartOnSignOut(){
  yield put(clearCart());
}

export function* onSignOutSuccess(){
  yield takeLatest(SIGN_IN_SUCCESS, clearCartOnSignOut)
}
export function* cartSagas(){
  yield(all([
    call(onSignOutSuccess)
  ]))
}