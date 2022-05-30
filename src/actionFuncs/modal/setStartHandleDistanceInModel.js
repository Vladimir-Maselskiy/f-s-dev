import { findModalOptionObjectByID } from '../../calcFuncs/findModalOptionObjectByID';
import { refs } from '../../refs';
import { resetStatusOfHandleDistance } from './resetStatusOfHandleDistance';

export function setStartHandleDistanceInModel(id) {
  resetStatusOfHandleDistance;
  const option = findModalOptionObjectByID(id);

  if (option.typeOfOpening === 'type-5') {
    if (option.shtulpBlock === 'getriebe') {
      refs.handleDistanceInModal.removeAttribute('disabled');
      refs.handleDistanceInModal.parentNode.classList.remove('disabled-text-gray');
      return;
    }

    if (option.shtulpBlock === 'latch') {
      refs.handleDistanceInModal.value = '';
      refs.handleDistanceInModal.setAttribute('disabled', 'disabled');
      refs.handleDistanceInModal.parentNode.classList.add('disabled-text-gray');
      return;
    }
  }
  if (option.typeOfOpening === 'type-2') {
    if (option.isTurnTiltGetriebe === false) {
      refs.handleDistanceInModal.value = '';
      refs.handleDistanceInModal.setAttribute('disabled', 'disabled');
      refs.handleDistanceInModal.parentNode.classList.add('disabled-text-gray');
      return;
    }
    if (option.isTurnTiltGetriebe === true) {
      refs.handleDistanceInModal.removeAttribute('disabled');
      refs.handleDistanceInModal.parentNode.classList.remove('disabled-text-gray');
      return;
    }
  }
  if (option.hanleDistance) {
    refs.handleDistanceInModal.value = option.hanleDistance;
  } else {
    refs.handleDistanceInModal.placeholder =
      Number(document.querySelector(`.form-group[data-form="${id}"] [data-input="height"]`).value) /
      2;
  }
}
