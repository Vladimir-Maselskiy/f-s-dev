import Notiflix from 'notiflix';
import { refs } from '../refs';
import { validateInputHandleDistanceModal } from '../valadateData/validateInputHandleDistanceModal';

export function onChangeOnHandleDistanceInModal(event) {
  if (!validateInputHandleDistanceModal(event)) {
    Notiflix.Notify.failure(`Невірне значення`);
    refs.handleDistanceInModal.classList.add('invalid');
    return;
  }
  refs.submitModalButton.removeAttribute('disabled');
  refs.modalFormRef.querySelector('.handle-distance-modal-block__info').classList.add('hidden');
  refs.handleDistanceInModal.classList.remove('invalid');
}
