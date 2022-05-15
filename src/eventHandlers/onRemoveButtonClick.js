import { modalObjectActionOnRemoveButtonClick } from '../actionFuncs/modalObjectActionOnRemoveButtonClick';
import { getCurrentIDByRemoveButtonClick } from '../calcFuncs/getCurrentIDByRemoveButtonClick';
import { refs } from '../refs';

export function onRemoveButtonClick(event) {
  const orderItems = refs.form.querySelectorAll('.form-group');
  if (orderItems.length > 1) {
    const curentId = getCurrentIDByRemoveButtonClick(event);
    modalObjectActionOnRemoveButtonClick(curentId);

    const lastChildRef = orderItems[orderItems.length - 1];
    lastChildRef.remove();
  }
}
