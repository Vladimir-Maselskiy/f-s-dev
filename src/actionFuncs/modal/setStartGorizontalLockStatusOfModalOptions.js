import { findModalOptionObjectByID } from '../../calcFuncs/findModalOptionObjectByID';
import { refs } from '../../refs';
import { resetStatusOfGorizontalLockAndHandleDistance } from './resetStatusOfGorizontalLockAndHandleDistance';

export function setStartGorizontalLockStatusOfModalOptions(id) {
  const option = findModalOptionObjectByID(id);

  resetStatusOfGorizontalLockAndHandleDistance();
  if (refs.widthInModalInput.value > 800 && option.shtulpBlock === 'latch') {
    refs.gorizontalLock.checked = false;
    refs.gorizontalLock.disabled = 'disabled';
    refs.gorizontalLock.parentNode.classList.add('disabled-text-gray');
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

  if (option.typeOfOpening === 'type-2' && !refs.isTurnTiltGetriebeInModal.checked) {
    refs.gorizontalLock.checked = false;
    refs.gorizontalLock.disabled = 'disabled';
    refs.gorizontalLock.parentNode.classList.add('disabled-text-gray');
    console.log('Включена горизонтальная блокировка1');
    return;
  }

  if (option.typeOfOpening === 'type-5') {
    if (option.shtulpBlock === 'getriebe') {
      refs.gorizontalLock.removeAttribute('disabled');
      refs.gorizontalLock.parentNode.classList.remove('disabled-text-gray');
    }

    if (option.shtulpBlock === 'latch') {
      refs.gorizontalLock.checked = false;
      refs.gorizontalLock.disabled = 'disabled';
      refs.gorizontalLock.parentNode.classList.add('disabled-text-gray');
      return;
    }
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
