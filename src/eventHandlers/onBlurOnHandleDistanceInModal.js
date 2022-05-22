import Notiflix from 'notiflix';
import { refs } from '../refs';
import { validateInputHandleDistanceModal } from '../valadateData/validateInputHandleDistanceModal';

export function onBlurOnHandleDistanceInModal() {
  if (validateInputHandleDistanceModal()) {
    refs.submitModalButton.removeAttribute('disabled');
    refs.modalFormRef.querySelector('.handle-distance-modal-block__info').classList.add('hidden');
    refs.handleDistanceInModal.classList.remove('invalid');
  }
}
