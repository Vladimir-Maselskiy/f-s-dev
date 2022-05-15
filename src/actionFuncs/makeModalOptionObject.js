import { refs } from '../refs';

export function makeModalOptionObject() {
  const modalOption = {};

  modalOption.hanleDistance = refs.handleDistanceInModal.value;
  modalOption.microVentilation = refs.microVentilationInModal.checked;
}
