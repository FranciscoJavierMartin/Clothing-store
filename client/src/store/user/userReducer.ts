import {
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_FAILURE,
  SIGN_UP_FAILURE
} from './userTypes';
import { IUserState } from '../../interfaces/states';
import { IAction } from '../../interfaces/actions';

const initialState: IUserState = {
  currentUser: null,
  error: null
};

export default (
  state: IUserState = initialState,
  action: IAction
): IUserState => {
  let newState: IUserState;

  switch (action.type) {
    case SIGN_IN_SUCCESS:
      newState = {
        ...state,
        currentUser: action.payload,
        error: null
      };
      break;
    case SIGN_OUT_SUCCESS:
      newState = {
        ...state,
        currentUser: null,
        error: null
      };
      break;
    case SIGN_IN_FAILURE:
    case SIGN_OUT_FAILURE:
    case SIGN_UP_FAILURE:
      newState = {
        ...state,
        error: action.payload
      };
      break;
    default:
      newState = state;
  }

  return newState;
};
