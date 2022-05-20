import { modalObjectActionOnRemoveButtonClick } from '../actionFuncs/modalObjectActionOnRemoveButtonClick';
import { setCurrentNumberingOfInputForm } from '../actionFuncs/setCurrentNumberingOfInputForm';
import { getCurrentIDByRemoveButtonClick } from '../calcFuncs/getCurrentIDByRemoveButtonClick';
import { refs } from '../refs';
import { validateFormsAfterRemoveForm } from '../valadateData/validateFormsAfterRemoveForm';

export function onRemoveButtonClick(event) {
  const orderItems = refs.form.querySelectorAll('.form-group');
  if (orderItems.length > 1) {
    const curentId = getCurrentIDByRemoveButtonClick(event);
    modalObjectActionOnRemoveButtonClick(curentId);
    const removeddRef = document.querySelector(`.form-group[data-form="${curentId}"]`);
    removeddRef.remove();
    setCurrentNumberingOfInputForm();
    validateFormsAfterRemoveForm();
  }
}
