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
import { onSubmitModalButton } from './eventHandlers/onSubmitModalButton';
import { onKeyDownByForm } from './eventHandlers/onKeyDownByForm';
import { makeScrollToBottom } from './actionFuncs/makeScrollToBottom';
import { onNewOrderButtonClick } from './eventHandlers/onNewOrderButtonClick';
import { onTypeOfOpeningButtonClick } from './eventHandlers/onTypeOfOpeningButtonClick';
import { onChangeOnInput } from './eventHandlers/onChangeOnInput';
import { onModalCloseButtonClick } from './eventHandlers/onModalCloseButtonClick';
import { onTypeOfOpeningModalCloseButton } from './eventHandlers/onTypeOfOpeningModalCloseButton';

refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('click', onClickbyForm);
refs.form.addEventListener('focusin', onFocusIn);
refs.form.addEventListener('keydown', onKeyDownByForm);
refs.form.addEventListener('change', onChangeOnInput);
refs.addButton.addEventListener('click', onAddButtonClick);
refs.typeOfOpening.addEventListener('click', onTypeOfOpeningButtonClick);
refs.removeButton.addEventListener('click', onRemoveButtonClick);
refs.optionButton.addEventListener('click', onOptionButtonClick);
refs.marginButton.addEventListener('click', onMarginButtonClick);
refs.submitModalButton.addEventListener('click', onSubmitModalButton);
refs.newOrderButtonRef.addEventListener('click', onNewOrderButtonClick);
refs.modalCloseButton.addEventListener('click', onModalCloseButtonClick);
refs.typeOfOpeningModalCloseButton.addEventListener(
  'click',
  onTypeOfOpeningModalCloseButton,
);

startCheck();

function onSubmit(event) {
  event.preventDefault();
  resetValidStatusOfClasses([...document.querySelectorAll('.size-input')]);
  setStatusOfSumbitButton();
  if (!setStatusOfSumbitButton()) {
    return;
  }

  makeOrderSet();
  refs.addButton.style.display = 'none';
  window.navigator.vibrate([100, 50, 100]);
  makeScrollToBottom();
}
