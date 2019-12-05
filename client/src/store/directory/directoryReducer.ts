import { sections } from '../../data/directory.data';
import { IDirectoryState } from '../../interfaces/states';
import { IAction } from '../../interfaces/actions';

const initialState: IDirectoryState = {
  sections: sections
};

export default (
  state: IDirectoryState = initialState,
  action: IAction
): IDirectoryState => {
  let newState: IDirectoryState;

  switch (action.type) {
    default:
      newState = state;
  }

  return newState;
};
