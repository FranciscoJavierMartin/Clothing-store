import { IGlobalState } from "../../interfaces/states";
import { createSelector } from "reselect";

const selectShop = (state:IGlobalState) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)