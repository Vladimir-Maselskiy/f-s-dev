import { refs } from '../../refs';

export function resetStatusOfGorizontalLock() {
  refs.gorizontalLock.removeAttribute('disabled');
  refs.gorizontalLock.parentNode.classList.remove('disabled-text-gray');
}
