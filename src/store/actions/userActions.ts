import { IAction } from "../../interfaces/actions";
import { FirebaseUser } from "../../interfaces/customTypes";

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const setCurrentUser = (user: FirebaseUser): IAction => ({
  type: SET_CURRENT_USER,
  payload: user,
});