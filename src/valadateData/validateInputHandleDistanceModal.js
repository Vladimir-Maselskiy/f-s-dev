import Notiflix from 'notiflix';
import { getMinAndMaxHandleDistanceInModal } from '../calcFuncs/getMinAndMaxHandleDistanceInModal';
import { refs } from '../refs';

export function validateInputHandleDistanceModal() {
  let handleHeight = null;

  if (!(refs.handleDistanceInModal.value === '')) {
    handleHeight = Number(refs.handleDistanceInModal.value);
  }

  const { minHeight, maxHeight } = getMinAndMaxHandleDistanceInModal();
  if (!(handleHeight >= minHeight && handleHeight <= maxHeight)) {
    refs.submitModalButton.setAttribute('disabled', 'disabled');
    return false;
  }
  return true;
}
