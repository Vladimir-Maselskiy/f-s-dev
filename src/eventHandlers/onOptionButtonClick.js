import { modalObjectActionOnOpenModal } from '../actionFuncs/modalObjectActionOnOpenModal';
import { showModal } from '../actionFuncs/showModal';
import { getCurrentIDByOptionButtonClick } from '../calcFuncs/getCurrentIDByOptionButtonClick';
import { refs } from '../refs';
import { validateFormInputFields } from '../valadateData/validateFormInputFields';
import { onBlurOnHandleDistanceInModal } from './onBlurOnHandleDistanceInModal';
import { onFocusOnHandleDistanceInModal } from './onFocusOnHandleDistanceInModal';

export let openedModalID = null;

export function onOptionButtonClick(event) {
  const currentID = getCurrentIDByOptionButtonClick(event);
  openedModalID = currentID;
  modalObjectActionOnOpenModal(currentID);

  const inputCurrentFields = document.querySelectorAll(
    `.form-group[data-form="${Number(event.target.dataset.option)}"] .size-input`,
  );

  if (!validateFormInputFields(inputCurrentFields)) return;
  showModal(currentID);
  refs.bodyRef.classList.add('modal-open');
}
