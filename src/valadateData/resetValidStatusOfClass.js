import { sizeRestrictions } from '../const';

const { minWidth, maxWidth, minHeight, maxHeight } = sizeRestrictions;

export function resetValidStatusOfClass(inputRef) {
  if (inputRef.classList.contains('valid')) {
    inputRef.classList.remove('valid');
  }

  inputRef.classList.add('invalid');
  if (
    inputRef.dataset.input === 'width' &&
    Number(inputRef.value) <= maxWidth &&
    Number(inputRef.value) >= minWidth
  ) {
    inputRef.classList.replace('invalid', 'valid');
  }
  if (
    inputRef.dataset.input === 'height' &&
    Number(inputRef.value) <= maxHeight &&
    Number(inputRef.value) >= minHeight
  ) {
    inputRef.classList.replace('invalid', 'valid');
  }
}
