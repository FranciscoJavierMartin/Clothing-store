import { IGlobalState, IShopState } from '../../interfaces/states';
import { createSelector } from 'reselect';
import { IShopData, IShopSection } from '../../interfaces/common';

const selectShop = (state: IGlobalState) => state.shop;

export const selectCollections = createSelector<
  IGlobalState,
  IShopState,
  IShopData
>([selectShop], shop => shop.collections);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections:IShopData): IShopSection[] => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = createSelector(
  selectCollections,
  (_: any, urlParam: string) => urlParam,
  (collections: any, urlParam: string) => collections[urlParam]
);
