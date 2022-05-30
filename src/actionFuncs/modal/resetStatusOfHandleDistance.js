import { refs } from '../../refs';

export function resetStatusOfHandleDistance() {
  refs.handleDistanceInModal.removeAttribute('disabled');
  refs.handleDistanceInModal.parentNode.classList.remove('disabled-text-gray');
}
