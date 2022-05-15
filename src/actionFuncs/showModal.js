import { setStartHandleDistanceInModel } from '../getMacoArticle/Getriebe/setStartHandleDistanceInModel';
import { refs } from '../refs';

export function showModal(formID) {
  console.log(formID);
  refs.modalBlock.classList.remove('is-hidden');
  const widthInFormInputRef = document.querySelector(
    `.form-group[data-form="${formID}"] [data-input="width"]`,
  );
  const heightInFormInputRef = document.querySelector(
    `.form-group[data-form="${formID}"] [data-input="height"]`,
  );
  refs.widthInModalInput.value = widthInFormInputRef.value;
  refs.heightInModalInputRef.value = heightInFormInputRef.value;
  setStartHandleDistanceInModel();
}
