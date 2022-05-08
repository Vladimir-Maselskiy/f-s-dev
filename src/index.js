import './sass/main.scss';
import { refs } from './refs';
import { makeOrderSet } from './makeOrderSet.js';
import { onAddButtonClick } from './onAddButtonClick';
import { onRemoveButtonClick } from './onRemoveButtonClick';

refs.form.addEventListener('submit', onSubmit);
refs.addButton.addEventListener('click', onAddButtonClick);
refs.removeButton.addEventListener('click', onRemoveButtonClick);

function onSubmit(event) {
  event.preventDefault();
  makeOrderSet();
}
