import { findModalOptionObjectByID } from '../../calcFuncs/findModalOptionObjectByID';
import { refs } from '../../refs';

export function setStartGorizontalLockStatusOfModalOptions(id) {
  const option = findModalOptionObjectByID(id);

  refs.gorizontalLock.removeAttribute('disabled');
  refs.gorizontalLock.parentNode.classList.remove('disabled-text-gray');
  refs.isTurnTiltGetriebeInModal.removeAttribute('disabled');
  refs.isTurnTiltGetriebeInModal.parentNode.classList.remove('disabled-text-gray');

  if (refs.widthInModalInput.value > 800) {
    refs.gorizontalLock.checked = true;
    refs.gorizontalLock.disabled = 'disabled';
    refs.gorizontalLock.parentNode.classList.add('disabled-text-gray');
    return;
  }

  if (refs.widthInModalInput.value < 470) {
    refs.gorizontalLock.checked = false;
    refs.gorizontalLock.disabled = 'disabled';
    refs.gorizontalLock.parentNode.classList.add('disabled-text-gray');
    return;
  }

  if (option.typeOfOpening === 'type-2' && !refs.isTurnTiltGetriebeInModal.checked) {
    refs.gorizontalLock.checked = false;
    refs.gorizontalLock.disabled = 'disabled';
    refs.gorizontalLock.parentNode.classList.add('disabled-text-gray');
  }

  if (option.gorizontalLock !== undefined) {
    refs.gorizontalLock.removeAttribute('disabled');
    refs.gorizontalLock.checked = option.gorizontalLock;
    refs.gorizontalLock.parentNode.classList.remove('disabled-text-gray');
    return;
  }

  refs.gorizontalLock.checked = false;
  refs.gorizontalLock.removeAttribute('disabled');
  refs.gorizontalLock.parentNode.classList.remove('disabled-text-gray');
}
