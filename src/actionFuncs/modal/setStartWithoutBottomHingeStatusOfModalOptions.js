import { findModalOptionObjectByID } from '../../calcFuncs/findModalOptionObjectByID';
import { refs } from '../../refs';

export function setStartWithoutBottomHingeStatusOfModalOptions(id) {
  const obj = findModalOptionObjectByID(id);

  if (!(obj.withoutBottomHinge === undefined)) {
    refs.withoutBottomHinge.checked = obj.withoutBottomHinge;
    return;
  }
  refs.withoutBottomHinge.checked = false;
}
