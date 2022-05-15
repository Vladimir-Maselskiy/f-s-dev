import { refs } from '../refs';

export function setStartHandleDistanceInModel() {
  if (!isNaN(refs.heightInModalInputRef.value)) {
    refs.handleDistanceInModel.value = refs.heightInModalInputRef.value / 2;
  } else {
    refs.handleDistanceInModel.value = '';
  }
}
