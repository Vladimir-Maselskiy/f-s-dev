import { refs } from './refs';

export function onRemoveButtonClick() {
  const orderItems = refs.form.querySelectorAll('.form-group');
  console.log(orderItems);
  if (orderItems.length > 1) {
    const lastChildRef = orderItems[orderItems.length - 1];
    lastChildRef.remove();
  }
}
