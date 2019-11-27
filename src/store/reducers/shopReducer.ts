import { IShopState } from "../../interfaces/states";
import { IAction } from "../../interfaces/actions";
import { SHOP_DATA } from "../../data/directory.data";

const initialState: IShopState = {
  collections: SHOP_DATA,
}

export default (state: IShopState = initialState, action: IAction):IShopState => {
  let newState: IShopState;

  switch(action.type){
    default:
      newState = state;
  }

  return newState;
}