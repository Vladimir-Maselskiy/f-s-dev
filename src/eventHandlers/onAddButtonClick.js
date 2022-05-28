import { onOptionButtonClick } from './onOptionButtonClick';
import { refs } from '../refs';
import { getNextCurrentID } from '../calcFuncs/getNextCurrentID';
import newInputForm from '../templates/newInputForm.hbs';
import { onRemoveButtonClick } from './onRemoveButtonClick';
import { setStatusOfSumbitButton } from '../valadateData/setStatusOfSumbitButton';
import { onTypeOfOpeningButtonClick } from './onTypeOfOpeningButtonClick';

export function onAddButtonClick() {
  const numberOfOrdersComplects = document.querySelectorAll('.form-group').length + 1;
  const newFormGroup = document.createElement('div');
  newFormGroup.classList.add('form-group');
  const formID = getNextCurrentID();
  newFormGroup.dataset.form = `${formID}`;

  const markup = newInputForm({ formID, numberOfOrdersComplects });

  newFormGroup.innerHTML = markup;
  refs.form.lastElementChild.insertAdjacentElement('beforebegin', newFormGroup);

  newFormGroup
    .querySelector('[data-action="options"]')
    .addEventListener('click', onOptionButtonClick);
  newFormGroup
    .querySelector('[data-action="remote"]')
    .addEventListener('click', onRemoveButtonClick);

  newFormGroup
    .querySelector('[data-action="open-second-modal"]')
    .addEventListener('click', onTypeOfOpeningButtonClick);
  setStatusOfSumbitButton();
}
