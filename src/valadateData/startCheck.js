import { refs } from '../refs';
import { sizeRestrictions } from '../const';

const { minWidth, maxWidth, minHeight, maxHeight } = sizeRestrictions;

export function startCheck() {
  if (Number(refs.widthInput.value) <= maxWidth && Number(refs.widthInput.value) >= minWidth) {
    refs.widthInput.classList.add('valid');
  } else {
    refs.widthInput.classList.add('invalid');
  }
  if (Number(refs.heightInput.value) <= maxHeight && Number(refs.heightInput.value) >= minHeight) {
    refs.heightInput.classList.add('valid');
  } else {
    refs.heightInput.classList.add('invalid');
  }
}
