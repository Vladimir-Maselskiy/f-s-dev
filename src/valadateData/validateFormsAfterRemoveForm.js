import { setStatusOfSumbitButton } from './setStatusOfSumbitButton';
import { validateFormInputFields } from './validateFormInputFields';

export function validateFormsAfterRemoveForm() {
  validateFormInputFields(document.querySelectorAll('.size-input'));
  setStatusOfSumbitButton();
}
