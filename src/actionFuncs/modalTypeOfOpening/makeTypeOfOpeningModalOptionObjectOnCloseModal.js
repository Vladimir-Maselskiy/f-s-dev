import { findModalOptionObjectByID } from '../../calcFuncs/findModalOptionObjectByID';
import { resetOptionsOfCurrentComplectByType } from '../resetOptionsOfCurrentComplectByType';
import { getIsTypeOfOpeningChanged } from './getIsTypeOfOpeningChanged';

export function makeTypeOfOpeningModalOptionObjectOnCloseModal(event, id) {
  const options = findModalOptionObjectByID(id);
  const isTypeOfOpeningChanged = getIsTypeOfOpeningChanged(event);
  options.typeOfOpening = event.target[0].options[event.target[0].options.selectedIndex].value;
  console.log(options);

  if (isTypeOfOpeningChanged) {
    resetOptionsOfCurrentComplectByType(options.typeOfOpening);
  }
}
