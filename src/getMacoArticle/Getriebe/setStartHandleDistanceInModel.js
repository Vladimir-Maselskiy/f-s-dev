import { refs } from '../../refs';

export function setStartHandleDistanceInModel() {
  if (!isNaN(refs.heightInModalInputRef.value)) {
    refs.handleDistanceInModal.value = refs.heightInModalInputRef.value / 2;
  } else {
    refs.handleDistanceInModal.value = '';
  }
}
