import { createSelector } from 'reselect';
import { IGlobalState } from '../../interfaces/states';

const selectDirectory = (state: IGlobalState) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);