import { findModalOptionObjectByID } from '../../calcFuncs/findModalOptionObjectByID';
import { refs } from '../../refs';

export function setStartMicroVentilationStatusInModel(id) {
  const obj = findModalOptionObjectByID(id);

  if (!(obj.microVentilation === undefined)) {
    refs.microVentilationInModal.checked = obj.microVentilation;
    return;
  }
  refs.microVentilationInModal.checked = true;
}
