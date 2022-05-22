import { onBlurOnHandleDistanceInModal } from '../eventHandlers/onBlurOnHandleDistanceInModal';
import { onChangeOnHandleDistanceInModal } from '../eventHandlers/onChangeOnHandleDistanceInModal';
import { onFocusOnHandleDistanceInModal } from '../eventHandlers/onFocusOnHandleDistanceInModal';
import { onInputOnHandleDistanceInModal } from '../eventHandlers/onInputOnHandleDistanceInModal';
import { refs } from '../refs';
import { setStartDataOfModalOptions } from './setStartDataOfModalOptions/setStartDataOfModalOptions';

export function showModal(currentID) {
  refs.modalFormRef.reset();
  refs.modalBlock.classList.remove('hidden');
  const widthInFormInputRef = document.querySelector(
    `.form-group[data-form="${currentID}"] [data-input="width"]`,
  );
  const heightInFormInputRef = document.querySelector(
    `.form-group[data-form="${currentID}"] [data-input="height"]`,
  );
  refs.widthInModalInput.value = widthInFormInputRef.value;
  refs.heightInModalInputRef.value = heightInFormInputRef.value;
  setStartDataOfModalOptions(currentID);

  refs.handleDistanceInModal.addEventListener('focus', onFocusOnHandleDistanceInModal);
  refs.handleDistanceInModal.addEventListener('input', onInputOnHandleDistanceInModal);
  refs.handleDistanceInModal.addEventListener('change', onChangeOnHandleDistanceInModal);
  refs.handleDistanceInModal.addEventListener('blur', onBlurOnHandleDistanceInModal);
}
