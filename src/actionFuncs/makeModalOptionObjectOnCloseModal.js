import { findModalOptionObjectByID } from '../calcFuncs/findModalOptionObjectByID';
import { refs } from '../refs';

export function makeModalOptionObjectOnCloseModal(id) {
  const modalOption = findModalOptionObjectByID(id);
  modalOption.hanleDistance = Number(refs.handleDistanceInModal.value);
  modalOption.microVentilation = refs.microVentilationInModal.checked;
  modalOption.gorizontalLock = refs.gorizontalLock.checked;
  console.log(modalOption);
}
