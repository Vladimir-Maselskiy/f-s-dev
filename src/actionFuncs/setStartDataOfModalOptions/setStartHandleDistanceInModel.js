import { findModalOptionObjectByID } from '../../calcFuncs/findModalOptionObjectByID';
import { refs } from '../../refs';

export function setStartHandleDistanceInModel(id) {
  const obj = findModalOptionObjectByID(id);
  if (obj.hanleDistance) {
    refs.handleDistanceInModal.value = obj.hanleDistance;
  } else {
    refs.handleDistanceInModal.placeholder =
      Number(document.querySelector(`.form-group[data-form="${id}"] [data-input="height"]`).value) /
      2;
  }
}
