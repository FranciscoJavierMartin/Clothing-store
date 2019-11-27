import { IGlobalState, IShopState } from '../../interfaces/states';
import { createSelector } from 'reselect';
import { IShopSection } from '../../interfaces/common';

interface ICOLLECTION_ID_MAP {
  [key: string]: number;
}

const COLLECTION_ID_MAP: ICOLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};

const selectShop = (state: IGlobalState) => state.shop;

export const selectCollections = createSelector<
  IGlobalState,
  IShopState,
  IShopSection[]
>([selectShop], shop => shop.collections);

export const selectCollection = createSelector(
  selectCollections,
  (_: any, urlParam: string) => urlParam,
  (collections: IShopSection[], urlParam: string) =>
    collections.find(
      collection => collection.id === COLLECTION_ID_MAP[urlParam]
    )
);
