import { refs } from './refs';
import { orderList } from './addArticleToOrderList';
import { makeOrder } from './makeOrder';
import { makeRenderOrder } from './makeRenderOrder';

export function makeOrderSet() {
  let i = 1;
  const renderedInputFields = refs.formGroup.children;

  for (let i = 1; i <= renderedInputFields.length; i += 1) {
    const width = Number(document.querySelector(`#width-input-${i}`).value);
    const height = Number(document.querySelector(`#height-input-${i}`).value);
    makeOrder(width, height);
  }

  makeRenderOrder(orderList);
}
