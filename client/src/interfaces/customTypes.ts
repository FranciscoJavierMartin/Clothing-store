import firebase from 'firebase';
import { ICurrentUserData } from './common';

export type FirebaseUser = firebase.User | ICurrentUserData | null;
//export type FirebaseUser = any;
