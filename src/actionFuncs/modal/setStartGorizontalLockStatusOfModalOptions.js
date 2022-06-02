import { findModalOptionObjectByID } from '../../calcFuncs/findModalOptionObjectByID';
import { refs } from '../../refs';
import { resetStatusOfGorizontalLock } from './resetStatusOfGorizontalLock';

export function setStartGorizontalLockStatusOfModalOptions(id) {
  resetStatusOfGorizontalLock();

  const option = findModalOptionObjectByID(id);

  if (option.typeOfOpening === 'type-5' && option.shtulpBlock === 'latch') {
    refs.gorizontalLock.checked = false;
    refs.gorizontalLock.disabled = 'disabled';
    refs.gorizontalLock.parentNode.classList.add('disabled-text-gray');
    return;
  }

  if (option.typeOfOpening === 'type-2' && !refs.isTurnTiltGetriebeInModal.checked) {
    refs.gorizontalLock.checked = false;
    refs.gorizontalLock.disabled = 'disabled';
    refs.gorizontalLock.parentNode.classList.add('disabled-text-gray');
    return;
  }
  if (option.typeOfOpening === 'type-2' && refs.isTurnTiltGetriebeInModal.checked) {
    refs.gorizontalLock.checked = option.gorizontalLock.checked;
    refs.gorizontalLock.removeAttribute('disabled');
    refs.gorizontalLock.parentNode.classList.remove('disabled-text-gray');
    return;
  }

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

  if (option.gorizontalLock !== undefined) {
    refs.gorizontalLock.checked = option.gorizontalLock;
    refs.gorizontalLock.removeAttribute('disabled');
    refs.gorizontalLock.parentNode.classList.remove('disabled-text-gray');
    return;
  }

  refs.gorizontalLock.checked = false;
  refs.gorizontalLock.removeAttribute('disabled');
  refs.gorizontalLock.parentNode.classList.remove('disabled-text-gray');
}
