import { refs } from '../refs';

export function onChangeshtulpBlockInModal(event) {
  if (event.target.value === 'getriebe') {
    if (refs.widthInModalInput.value >= 470 && refs.widthInModalInput.value <= 800) {
      refs.gorizontalLock.removeAttribute('disabled');
      refs.gorizontalLock.parentNode.classList.remove('disabled-text-gray');
    }
    if (refs.widthInModalInput.value > 800) {
      refs.gorizontalLock.checked = true;
    }
    refs.handleDistanceInModal.removeAttribute('disabled');
    refs.handleDistanceInModal.parentNode.classList.remove('disabled-text-gray');
  } else {
    refs.gorizontalLock.checked = false;
    refs.gorizontalLock.setAttribute('disabled', 'disabled');
    refs.gorizontalLock.parentNode.classList.add('disabled-text-gray');
    refs.handleDistanceInModal.value = '';
    refs.handleDistanceInModal.setAttribute('disabled', 'disabled');
    refs.handleDistanceInModal.parentNode.classList.add('disabled-text-gray');
  }
}
