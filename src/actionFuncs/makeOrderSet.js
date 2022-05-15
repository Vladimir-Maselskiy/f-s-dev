import { orderList, clearOrderlist } from './addArticleToOrderList';
import { makeSingleSet } from './makeSingleSet';
import { makeRenderOrder } from './makeRenderOrder';

export function makeOrderSet() {
  const renderedInputFields = document.querySelectorAll('.form-group');
  clearOrderlist();

  renderedInputFields.forEach((elementRef, i) => {
    const width = Number(elementRef.querySelector('[data-input="width"]').value);
    const height = Number(elementRef.querySelector('[data-input="height"]').value);
    const quantitySet = Number(elementRef.querySelector('[data-value="value"]').textContent);

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
    // console.log(options);

    makeSingleSet(width, height, quantitySet, options);
  });
  makeRenderOrder(orderList);
}
