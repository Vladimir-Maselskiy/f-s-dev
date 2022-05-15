import { refs } from '../refs';
import { setStartDataOfModalOptions } from './setStartDataOfModalOptions/setStartDataOfModalOptions';

export function showModal(currentID) {
  refs.modalBlock.classList.remove('is-hidden');
  const widthInFormInputRef = document.querySelector(
    `.form-group[data-form="${currentID}"] [data-input="width"]`,
  );
  const heightInFormInputRef = document.querySelector(
    `.form-group[data-form="${currentID}"] [data-input="height"]`,
  );
  refs.widthInModalInput.value = widthInFormInputRef.value;
  refs.heightInModalInputRef.value = heightInFormInputRef.value;
  setStartDataOfModalOptions(currentID);
}
