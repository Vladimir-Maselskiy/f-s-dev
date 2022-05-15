import { showModal } from '../actionFuncs/showModal';
import { getOptionButtonID } from '../calcFuncs/getOptionButtonID';
import { validateFormInputFields } from '../valadateData/validateFormInputFields';

export function onOptionButtonClick(event) {
  console.log(event.currentTarget);
  const inputCurrentFields = document.querySelectorAll(
    `.form-group[data-form="${Number(event.target.dataset.option)}"] .size-input`,
  );

  if (!validateFormInputFields(inputCurrentFields)) return;
  const setIDByOptionButton = Number(event.target.dataset.option);

  showModal(setIDByOptionButton);
}
