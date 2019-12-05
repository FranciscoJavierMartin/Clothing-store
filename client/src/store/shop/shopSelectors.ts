import { IGlobalState, IShopState } from '../../interfaces/states';
import { createSelector } from 'reselect';
import { IShopData, IShopSection } from '../../interfaces/common';

const selectShop = (state: IGlobalState) => state.shop;

export const selectCollections = createSelector<
  IGlobalState,
  IShopState,
  IShopData | null
>([selectShop], shop => shop.collections);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections: IShopData | null): IShopSection[] =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = createSelector(
  selectCollections,
  (_: any, urlParam: string) => urlParam,
  (collections: IShopData | null, urlParam: string) =>
    collections ? collections[urlParam] : null
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector<
  IGlobalState,
  IShopState,
  boolean
>([selectShop], shop => !!shop.collections);
