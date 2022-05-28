import { findModalOptionObjectByID } from '../../calcFuncs/findModalOptionObjectByID';
import { refs } from '../../refs';

export function setStartHingeSidePressSelectStatusOfModalOptions(id) {
  const option = findModalOptionObjectByID(id);
  console.log(refs.hingeSidePress);
  if (option.hingeSidePress !== undefined) {
    let i = null;
    const selectFields = refs.hingeSidePress.querySelectorAll('option');
    selectFields.forEach((item, index) => {
      if (item.value === option.hingeSidePress) {
        i = index;
      }
    });
    refs.hingeSidePress.selectedIndex = i;
    return;
  }

  refs.hingeSidePress.selectedIndex = 1;
}
