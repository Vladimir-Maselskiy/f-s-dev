import { findModalOptionObjectByID } from '../../calcFuncs/findModalOptionObjectByID';
import { refs } from '../../refs';

export function makeTypeOfOpeningModalOptionObjectOnCloseModal(event, id) {
  const options = findModalOptionObjectByID(id);

  options.typeOfOpening = event.target[0].options[event.target[0].options.selectedIndex].value;
  console.log(options);
}
