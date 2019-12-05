import { IAction } from '../../interfaces/actions';
import { FirebaseUser } from '../../interfaces/customTypes';
import { SET_CURRENT_USER, GOOGLE_SIGN_IN_START, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, CHECK_USER_SESSION, EMAIL_SIGN_IN_START, SIGN_OUT_START, SIGN_OUT_SUCCESS, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_START, SIGN_OUT_FAILURE } from './userTypes';


export const setCurrentUser = (user: FirebaseUser): IAction => ({
  type: SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = (): IAction => ({
  type: GOOGLE_SIGN_IN_START
});

export const signInSuccess = (user: any): IAction => ({
  type: SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = (error: any): IAction => ({
  type: SIGN_IN_FAILURE,
  payload: error
});

export const emailSignInStart = (email: string, password: string): IAction => ({
  type: EMAIL_SIGN_IN_START,
  payload: {
    email,
    password
  }
});

export const checkUserSession = (): IAction => ({
  type: CHECK_USER_SESSION
});

export const signOutStart = (): IAction => ({
  type: SIGN_OUT_START
});

export const signOutSuccess = (): IAction => ({
  type: SIGN_OUT_SUCCESS
});

export const signOutFailure = (error: any): IAction => ({
  type: SIGN_OUT_FAILURE,
  payload: error
});

export const signUpStart = (userCredentials: any): IAction => ({
  type: SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccess = (user: any, additionalData: any): IAction => ({
  type: SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailure = (error: any): IAction => ({
  type: SIGN_UP_FAILURE,
  payload: error
});
