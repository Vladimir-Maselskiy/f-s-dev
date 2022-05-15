import { getCurrentIDByInputBlur } from '../calcFuncs/getCurrentIDByInputBlur';
import { isRefHasValidClass } from './isRefHasValidClass';

export function setStatusOfOptionButton(event) {
  const optionButtonID = getCurrentIDByInputBlur(event);
  const inputCurrentFields = document.querySelectorAll(
    `.form-group[data-form="${optionButtonID}"] .size-input`,
  );

  if (![...inputCurrentFields].every(isRefHasValidClass)) {
    document
      .querySelector(`.form-group[data-form="${optionButtonID}"] .option-button`)
      .setAttribute('disabled', 'disabled');
    return;
  }

  document
    .querySelector(`.form-group[data-form="${optionButtonID}"] .option-button`)
    .removeAttribute('disabled');
}
