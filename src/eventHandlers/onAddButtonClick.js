import { onOptionButtonClick } from './onOptionButtonClick';
import { refs } from '../refs';
import { getNextCurrentID } from '../calcFuncs/getNextCurrentID';
import newInputForm from '../templates/newInputForm.hbs';
import { onRemoveButtonClick } from './onRemoveButtonClick';
import { setStatusOfSumbitButton } from '../valadateData/setStatusOfSumbitButton';

export function onAddButtonClick() {
  const numberOfOrdersComplects = document.querySelectorAll('.form-group').length;
  const newFormGroup = document.createElement('div');
  newFormGroup.classList.add('form-group');
  const formID = getNextCurrentID();
  console.log(formID);
  newFormGroup.dataset.form = `${formID}`;

  const markup = newInputForm({ formID });

  newFormGroup.innerHTML = markup;
  refs.form.lastElementChild.insertAdjacentElement('beforebegin', newFormGroup);
  // document.querySelector('.button-icon-svg use').href = '/symbol-defs.svg#icon-cogs';
  console.log(newFormGroup);
  newFormGroup
    .querySelector('[data-action="options"]')
    .addEventListener('click', onOptionButtonClick);
  newFormGroup
    .querySelector('[data-action="remote"]')
    .addEventListener('click', onRemoveButtonClick);
  setStatusOfSumbitButton();
}
