import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
  UPDATE_COLLECTIONS
} from './shopTypes';
import { IShopState } from '../../interfaces/states';
import { IAction } from '../../interfaces/actions';

const initialState: IShopState = {
  collections: null,
  isFetching: false,
  errorMessage: ''
};

export default (
  state: IShopState = initialState,
  action: IAction
): IShopState => {
  let newState: IShopState;

  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      newState = {
        ...state,
        isFetching: true
      };
      break;
    case FETCH_COLLECTIONS_SUCCESS:
      newState = {
        ...state,
        isFetching: false,
        collections: action.payload
      };
      break;
      case FETCH_COLLECTIONS_FAILURE:
        newState = {
          ...state,
          isFetching: false,
          errorMessage: action.payload
        }
        break;
    case UPDATE_COLLECTIONS:
      newState = {
        ...state,
        collections: action.payload
      };
      break;
    default:
      newState = state;
  }

  return newState;
};
