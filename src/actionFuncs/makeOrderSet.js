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
    options.width = Number(elementRef.querySelector('[data-input="width"]').value);
    options.height = Number(elementRef.querySelector('[data-input="height"]').value);
    options.quantitySet = Number(elementRef.querySelector('[data-value="value"]').textContent);

    const sideOfHingeElementsRef = elementRef.querySelectorAll(
      `[name="side-of-hinge-${currentID}"]`,
    );
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

    // for (const hingeSidePress of refs.hingeSidePress) {
    //   if (hingeSidePress.selected) {
    //     options.hingeSidePress = hingeSidePress.value;
    //   }
    // }

    // if (options.width >= 800) {
    //   options.gorizontalLock = true;
    // }
    if (!options.gorizontalLock) {
      if (options.width > 800) {
        options.gorizontalLock = true;
      }
      if (options.gorizontalLock < 470) {
        options.gorizontalLock = false;
      }
    }
    console.log('options:', options);

    makeSingleSet(options);
  });

  makeRenderOrder(orderList);
}
