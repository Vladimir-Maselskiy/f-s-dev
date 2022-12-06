import { orderList, clearOrderlist } from './addArticleToOrderList';
import { makeSingleSet } from './makeSingleSet';
import { makeRenderOrder } from './makeRenderOrder';
import { getCurrentIDByFormRef } from '../calcFuncs/getCurrentIDByFormRef';
import { modalOptions } from '../variables/variables';
import { findModalOptionObjectByID } from '../calcFuncs/findModalOptionObjectByID';
import { refs } from '../refs';

export function makeOrderSet() {
  const renderedInputFields = document.querySelectorAll('.form-group');

  clearOrderlist();

  renderedInputFields.forEach(elementRef => {
    const currentID = getCurrentIDByFormRef(elementRef);
    const obj = findModalOptionObjectByID(currentID);
    const options = obj ? obj : { currentID };
    options.width = Number(
      elementRef.querySelector('[data-input="width"]').value,
    );
    options.height = Number(
      elementRef.querySelector('[data-input="height"]').value,
    );
    options.quantitySet = Number(
      elementRef.querySelector('[data-value="value"]').textContent,
    );

    const sideOfHingeElementsRef = elementRef.querySelectorAll(
      `[name="side-of-hinge-${currentID}"]`,
    );
    const systemOfPVCElementsRef =
      elementRef.querySelector(`.select-block`).children;

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

    if (
      !options.gorizontalLock &&
      (options.typeOfOpening === undefined ||
        options.typeOfOpening === 'type-1')
    ) {
      if (options.width > 800) {
        options.gorizontalLock = true;
      } else {
        if (options.width < 470) {
          options.gorizontalLock = false;
        }
      }
    }
    makeSingleSet(options);
  });

  makeRenderOrder(orderList);
}
