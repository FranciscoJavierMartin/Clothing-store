import { FirebaseUser } from "./customTypes";
import { IShopItem, IHomeSection, IShopData } from "./common";

export interface IGlobalState {
  user: IUserState;
  cart: ICartState;
  directory: IDirectoryState;
  shop: IShopState;
}

export interface IUserState{
  currentUser: FirebaseUser;
  error: any;
}

export interface ICartState {
  hidden: boolean;
  cartItems: IShopItem[];
}

export interface IDirectoryState {
  sections: IHomeSection[];
}

export interface IShopState {
  collections: IShopData | null;
  isFetching: boolean;
  errorMessage: string;
}