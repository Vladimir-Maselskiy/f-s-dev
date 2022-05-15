import { modalObjectActionOnOpenModal } from '../actionFuncs/modalObjectActionOnOpenModal';
import { showModal } from '../actionFuncs/showModal';
import { getCurrentIDByOptionButtonClick } from '../calcFuncs/getCurrentIDByOptionButtonClick';
import { validateFormInputFields } from '../valadateData/validateFormInputFields';

export function onOptionButtonClick(event) {
  const currentID = getCurrentIDByOptionButtonClick(event);
  console.log(currentID);
  modalObjectActionOnOpenModal(currentID);

  const inputCurrentFields = document.querySelectorAll(
    `.form-group[data-form="${Number(event.target.dataset.option)}"] .size-input`,
  );

  if (!validateFormInputFields(inputCurrentFields)) return;
  const setIDByOptionButton = Number(event.target.dataset.option);

  showModal(setIDByOptionButton);
}
