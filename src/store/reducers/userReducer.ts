import { IUserState } from "../../interfaces/states";
import { SET_CURRENT_USER } from "../actions/userActions";
import { IAction } from "../../interfaces/actions";

const initialState: IUserState = {
  currentUser: null,
};

export default (state: IUserState = initialState, action: IAction): IUserState =>{
  let newState: IUserState;

  switch(action.type){
    case SET_CURRENT_USER:
      newState = {
        ...state,
        currentUser: action.payload
      };
      break;
    default:
      newState = state;
  }

  return newState;
}