import { refs } from '../../refs';

export function setWidthAndHeightInModal(id) {
  const widthInFormInputRef = document.querySelector(
    `.form-group[data-form="${id}"] [data-input="width"]`,
  );
  const heightInFormInputRef = document.querySelector(
    `.form-group[data-form="${id}"] [data-input="height"]`,
  );
  refs.widthInModalInput.value = widthInFormInputRef.value;
  refs.heightInModalInputRef.value = heightInFormInputRef.value;
}
