import { refs } from '../refs';
import { validateInputHandleDistanceModal } from '../valadateData/validateInputHandleDistanceModal';

export function onInputOnHandleDistanceInModal() {
  if (validateInputHandleDistanceModal()) {
    refs.submitModalButton.removeAttribute('disabled');
    refs.handleDistanceInModal.classList.remove('invalid');
  }
}
