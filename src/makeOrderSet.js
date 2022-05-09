import { refs } from './refs';
import { orderList } from './addArticleToOrderList';
import { makeOrder } from './makeOrder';
import { makeRenderOrder } from './makeRenderOrder';

export function makeOrderSet() {
  let i = 1;
  const renderedInputFields = refs.formGroup.children;

  for (let i = 1; i <= renderedInputFields.length; i += 1) {
    const options = {};
    const width = Number(document.querySelector(`#width-input-${i}`).value);
    const height = Number(document.querySelector(`#height-input-${i}`).value);
    for (const sideOfHingeRef of refs.sideOfHingeElements) {
      if (sideOfHingeRef.checked) {
        options.sideOfHinge = sideOfHingeRef.value;
      }
    }
    for (const systemOfPVCRef of refs.systemOfPVCElements) {
      if (systemOfPVCRef.selected) {
        options.systemOfPVC = systemOfPVCRef.value;
      }
    }

    makeOrder(width, height, options);
  }

  makeRenderOrder(orderList);
}
