import { getCurrentIDByFormRef } from '../calcFuncs/getCurrentIDByFormRef';
import { getCurrentIDByInputBlur } from '../calcFuncs/getCurrentIDByInputBlur';
import { refs } from '../refs';

export function onKeyDownByForm(event) {
  if (event.keyCode === 13) {
    if (event.target.dataset.input === 'width') {
      const currentID = getCurrentIDByInputBlur(event);
      const currenFormRef = document.querySelector(`.form-group[data-form="${currentID}"]`);
      currenFormRef.querySelector('[data-input="height"]').focus();
      event.target.blur();
    }
    if (event.target.dataset.input === 'height') {
      event.target.blur();
    }
  }
}
