import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { sizeRestrictions } from '../const';

const { minWidth, maxWidth, minHeight, maxHeight } = sizeRestrictions;

export function resetValidStatusOfClasses(arrayOfFields) {
  arrayOfFields.forEach(inputRef => {
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
    } else if (inputRef.dataset.input === 'width') {
      Notify.failure(`Введіть ширину від ${minWidth}мм до ${maxWidth}мм`);
    }
    if (
      inputRef.dataset.input === 'height' &&
      Number(inputRef.value) <= maxHeight &&
      Number(inputRef.value) >= minHeight
    ) {
      inputRef.classList.replace('invalid', 'valid');
    } else if (inputRef.dataset.input === 'height') {
      Notify.failure(`Введіть висоту від ${minHeight}мм до ${maxHeight}мм`);
    }
  });
}
