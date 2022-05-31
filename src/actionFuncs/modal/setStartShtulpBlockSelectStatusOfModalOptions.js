import { findModalOptionObjectByID } from '../../calcFuncs/findModalOptionObjectByID';
import { refs } from '../../refs';
import { resetStatusOfGorizontalLockAndHandleDistance } from './resetStatusOfHandleDistance';
import { resetStatusOfShtulpBlock } from './resetStatusOfShtulpBlock';

export function setStartShtulpBlockSelectStatusOfModalOptions(id) {
  const option = findModalOptionObjectByID(id);

  resetStatusOfShtulpBlock();
  option.shtulpBlock = refs.shtulpBlockInModal.querySelector('[name="shtulp-radio"]:checked').value;

  if (refs.heightInModalInputRef.value < 800) {
    refs.shtulpBlockInModal.querySelector('[value="latch"]').disabled = true;
    refs.shtulpBlockInModal.querySelector('[value="latch"]').checked = true;
    refs.shtulpBlockInModal
      .querySelector('[value="latch"]')
      .parentNode.classList.add('disabled-text-gray');
    refs.shtulpBlockInModal.querySelector('[value="getriebe"]').disabled = true;
    refs.shtulpBlockInModal
      .querySelector('[value="getriebe"]')
      .parentNode.classList.add('disabled-text-gray');
    option.shtulpBlock = refs.shtulpBlockInModal.querySelector(
      '[name="shtulp-radio"]:checked',
    ).value;
    return;
  }
  if (option.shtulpBlock !== undefined) {
    const selectFields = refs.shtulpBlockInModal.querySelectorAll('[name="shtulp-radio"]');
    selectFields.forEach(item => {
      if (item.value === option.shtulpBlock) {
        item.checked = true;
      }
    });
  }
}
