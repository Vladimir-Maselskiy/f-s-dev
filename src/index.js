import './sass/main.scss';
import { refs } from './refs';
import { makeOrderSet } from './makeOrderSet.js';
import { onAddButtonClick } from './onAddButtonClick';
import { onRemoveButtonClick } from './onRemoveButtonClick';
import { onOptionButtonClick } from './onOptionButtonClick';
import { onFocusIn } from './onFocusIn';
import { setStatusOfSumbitButton } from './valadateData/setStatusOfSumbitButton';
import { startCheck } from './valadateData/startCheck';
import { resetValidStatusOfClasses } from './valadateData/resetValidStatusOfClasses';
import { onClickbyForm } from './onClickbyForm';
import { onMarginButtonClick } from './onMarginButtonClick';

refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('click', onClickbyForm);
refs.form.addEventListener('focusin', onFocusIn);
refs.addButton.addEventListener('click', onAddButtonClick);
refs.removeButton.addEventListener('click', onRemoveButtonClick);
refs.optionButton.addEventListener('click', onOptionButtonClick);
refs.marginButton.addEventListener('click', onMarginButtonClick);

startCheck();

function onSubmit(event) {
  event.preventDefault();
  resetValidStatusOfClasses([...document.querySelectorAll('.size-input')]);
  setStatusOfSumbitButton();
  if (!setStatusOfSumbitButton()) {
    return;
  }
  makeOrderSet();
}
