import { createSelector } from 'reselect';

const seleDirectory = state => state.directory;

export const seleDirectorySections = createSelector(
  [seleDirectory],
  (directory) => directory.sections
);
