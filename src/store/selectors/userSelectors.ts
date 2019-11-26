import { IUserState, IGlobalState } from "../../interfaces/states";
import { createSelector } from "reselect";

const selectUser = (state:IGlobalState) => state.user

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
)