import { getOptionButtonID } from '../calcFuncs/getOptionButtonID';
import { refs } from '../refs';
import { isRefHasValidClass } from './isRefHasValidClass';
import { resetValidStatusOfClass } from './resetValidStatusOfClass';

export function setStatusOfOptionButton(event) {
  const optionButtonID = getOptionButtonID(event);
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
