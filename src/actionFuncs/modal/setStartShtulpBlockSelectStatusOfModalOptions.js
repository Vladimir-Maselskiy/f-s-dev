import { findModalOptionObjectByID } from '../../calcFuncs/findModalOptionObjectByID';
import { refs } from '../../refs';
import { resetStatusOfGorizontalLockAndHandleDistance } from './resetStatusOfGorizontalLockAndHandleDistance';

export function setStartShtulpBlockSelectStatusOfModalOptions(id) {
  const option = findModalOptionObjectByID(id);
  //   resetStatusOfGorizontalLockAndHandleDistance();

  if (option.shtulpBlock !== undefined) {
    const selectFields = refs.shtulpBlockInModal.querySelectorAll('[name="shtulp-radio"]');
    selectFields.forEach(item => {
      if (item.value === option.shtulpBlock) {
        item.checked = true;
      }
    });
  }
}
