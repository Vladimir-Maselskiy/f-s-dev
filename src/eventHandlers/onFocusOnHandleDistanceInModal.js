import { getMinAndMaxHandleDistanceInModal } from '../calcFuncs/getMinAndMaxHandleDistanceInModal';
import { refs } from '../refs';

export function onFocusOnHandleDistanceInModal() {
  refs.submitModalButton.setAttribute('disabled', 'disabled');
  const { minHeight: minHandleDistance, maxHeight: maxHandleDistance } =
    getMinAndMaxHandleDistanceInModal();

  refs.modalFormRef.querySelector(
    '.handle-distance-modal-block__info',
  ).textContent = `min: ${minHandleDistance}, max: ${maxHandleDistance}`;
  refs.modalFormRef.querySelector('.handle-distance-modal-block__info').classList.remove('hidden');
}
