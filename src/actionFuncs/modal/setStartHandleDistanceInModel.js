import { findModalOptionObjectByID } from '../../calcFuncs/findModalOptionObjectByID';
import { refs } from '../../refs';

export function setStartHandleDistanceInModel(id) {
  const option = findModalOptionObjectByID(id);
  if (option.hanleDistance) {
    refs.handleDistanceInModal.value = option.hanleDistance;
  } else {
    refs.handleDistanceInModal.placeholder =
      Number(document.querySelector(`.form-group[data-form="${id}"] [data-input="height"]`).value) /
      2;
  }
}
