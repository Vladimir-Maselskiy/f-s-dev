import { findModalOptionObjectByID } from '../../calcFuncs/findModalOptionObjectByID';
import { refs } from '../../refs';
import { resetPresetOptionForAllType } from '../modal/resetPresetOptionForAllType';
import { setStartDataOfModalOptions } from '../modal/setStartDataOfModalOptions';
import { setWidthAndHeightInModal } from '../modal/setWidthAndHeightInModal';
import { resetOptionsOfCurrentComplectByType } from '../resetOptionsOfCurrentComplectByType';
import { getIsTypeOfOpeningChanged } from './getIsTypeOfOpeningChanged';

export function makeTypeOfOpeningModalOptionObjectOnCloseModal(event, id) {
  const options = findModalOptionObjectByID(id);
  options.typeOfOpening = event.target[0].options[event.target[0].options.selectedIndex].value;

  resetPresetOptionForAllType(id);
  const isTypeOfOpeningChanged = getIsTypeOfOpeningChanged(event);

  if (isTypeOfOpeningChanged) {
    resetOptionsOfCurrentComplectByType(options.typeOfOpening);
  }
}
