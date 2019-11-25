import { FirebaseUser } from "./customTypes";

export interface IGlobalState {
  user: IUserState;
}

export interface IUserState{
  currentUser: FirebaseUser;
}