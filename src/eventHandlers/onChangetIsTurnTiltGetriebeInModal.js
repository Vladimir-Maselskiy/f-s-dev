import { refs } from '../refs';

export function onChangetIsTurnTiltGetriebeInModal(event) {
  if (
    event.target.checked &&
    refs.widthInModalInput.value >= 470 &&
    refs.widthInModalInput.value <= 800
  ) {
    refs.gorizontalLock.removeAttribute('disabled');
    refs.gorizontalLock.parentNode.classList.remove('disabled-text-gray');
  }
  if (!event.target.checked) {
    refs.gorizontalLock.checked = false;
    refs.gorizontalLock.setAttribute('disabled', 'disabled');
    refs.gorizontalLock.parentNode.classList.add('disabled-text-gray');
  }
}
