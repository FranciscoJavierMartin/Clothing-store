import { IGlobalState } from '../../interfaces/states';
import { combineReducers } from 'redux';
import userReducer from './userReducer';

export default combineReducers<IGlobalState>({
  user: userReducer
});

