import { refs } from './refs';
import { orderList } from './addArticleToOrderList';
import { makeSingleSet } from './makeSingleSet';
import { makeRenderOrder } from './makeRenderOrder';

export function makeOrderSet() {
  let i = 1;
  const renderedInputFields = document.querySelectorAll('.form-group');

  renderedInputFields.forEach((elementRef, i) => {
    const width = Number(elementRef.querySelector('[data-input="width"]').value);
    const height = Number(elementRef.querySelector('[data-input="height"]').value);

    const options = {};
    const sideOfHingeElementsRef = elementRef.querySelectorAll(`[name="side-of-hinge-${i + 1}"]`);
    const systemOfPVCElementsRef = elementRef.querySelector(`.select-block`).children;

    for (const sideOfHingeRef of sideOfHingeElementsRef) {
      if (sideOfHingeRef.checked) {
        options.sideOfHinge = sideOfHingeRef.value;
      }
    }
    for (const systemOfPVCRef of systemOfPVCElementsRef) {
      if (systemOfPVCRef.selected) {
        options.systemOfPVC = systemOfPVCRef.value;
      }
    }
    console.log(options);

    makeSingleSet(width, height, options);
  });
  makeRenderOrder(orderList);
}
