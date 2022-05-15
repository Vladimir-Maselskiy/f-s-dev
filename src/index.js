import './sass/main.scss';
import { refs } from './refs';
import { makeOrderSet } from './actionFuncs/makeOrderSet.js';
import { onAddButtonClick } from './eventHandlers/onAddButtonClick';
import { onRemoveButtonClick } from './eventHandlers/onRemoveButtonClick';
import { onOptionButtonClick } from './eventHandlers/onOptionButtonClick';
import { onFocusIn } from './eventHandlers/onFocusIn';
import { setStatusOfSumbitButton } from './valadateData/setStatusOfSumbitButton';
import { startCheck } from './valadateData/startCheck';
import { resetValidStatusOfClasses } from './valadateData/resetValidStatusOfClasses';
import { onClickbyForm } from './eventHandlers/onClickbyForm';
import { onMarginButtonClick } from './eventHandlers/onMarginButtonClick';
import { onCloseModalButton } from './eventHandlers/onCloseModalButton';

refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('click', onClickbyForm);
refs.form.addEventListener('focusin', onFocusIn);
refs.addButton.addEventListener('click', onAddButtonClick);
refs.removeButton.addEventListener('click', onRemoveButtonClick);
refs.optionButton.addEventListener('click', onOptionButtonClick);
refs.marginButton.addEventListener('click', onMarginButtonClick);
refs.closeModalButton.addEventListener('click', onCloseModalButton);

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
