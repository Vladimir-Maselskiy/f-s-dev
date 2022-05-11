import './sass/main.scss';
import { refs } from './refs';
import { makeOrderSet } from './makeOrderSet.js';
import { onAddButtonClick } from './onAddButtonClick';
import { onRemoveButtonClick } from './onRemoveButtonClick';
import { onOptionButtonClick } from './onOptionButtonClick';
import { onInputValidate } from './valadateData/onInputValidate';

refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('input', onInputValidate);
refs.addButton.addEventListener('click', onAddButtonClick);
refs.removeButton.addEventListener('click', onRemoveButtonClick);
refs.optionButton.addEventListener('click', onOptionButtonClick);

function onSubmit(event) {
  event.preventDefault();
  makeOrderSet();
}
