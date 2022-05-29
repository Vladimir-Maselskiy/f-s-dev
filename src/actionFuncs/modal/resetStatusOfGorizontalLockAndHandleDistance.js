import { refs } from '../../refs';

export function resetStatusOfGorizontalLockAndHandleDistance() {
  refs.gorizontalLock.removeAttribute('disabled');
  refs.gorizontalLock.parentNode.classList.remove('disabled-text-gray');
  refs.handleDistanceInModal.removeAttribute('disabled');
  refs.handleDistanceInModal.parentNode.classList.remove('disabled-text-gray');
}
