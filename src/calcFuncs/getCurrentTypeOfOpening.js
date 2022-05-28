import { findModalOptionObjectByID } from './findModalOptionObjectByID';

export function getCurrentTypeOfOpening(id) {
  const options = findModalOptionObjectByID(id);
  if (options.typeOfOpening === undefined) {
    options.typeOfOpening = 'type-1';
  }
  return options.typeOfOpening;
}
