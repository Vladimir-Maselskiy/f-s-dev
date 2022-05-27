import { findModalOptionObjectByID } from '../../calcFuncs/findModalOptionObjectByID';
import { refs } from '../../refs';

export function setStartGorizontalLockStatusOfModalOptions(id) {
  const obj = findModalOptionObjectByID(id);

  if (refs.widthInModalInput.value >= 800) {
    refs.gorizontalLock.checked = true;
    refs.gorizontalLock.disabled = 'disabled';
    return;
  }

  if (obj.gorizontalLock !== undefined) {
    refs.gorizontalLock.removeAttribute('disabled');
    refs.gorizontalLock.checked = obj.gorizontalLock;
    return;
  }

  refs.gorizontalLock.checked = false;
  refs.gorizontalLock.removeAttribute('disabled');
}
