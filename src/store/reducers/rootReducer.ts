import { IGlobalState } from '../../interfaces/states';
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import cartReducer from './cartReducer';

export default combineReducers<IGlobalState>({
  user: userReducer,
  cart: cartReducer,
});

