import { findModalOptionObjectByID } from '../../calcFuncs/findModalOptionObjectByID';
import { refs } from '../../refs';

export function makeModalOptionObjectOnCloseModal(id) {
  const modalOption = findModalOptionObjectByID(id);
  modalOption.hanleDistance = Number(refs.handleDistanceInModal.value);
  modalOption.microVentilation = refs.microVentilationInModal.checked;
  modalOption.gorizontalLock = refs.gorizontalLock.checked;
  modalOption.withoutBottomHinge = refs.withoutBottomHinge.checked;
  modalOption.isTurnTiltGetriebe = refs.isTurnTiltGetriebeInModal.checked;
  modalOption.hingeSidePress = refs.hingeSidePress[refs.hingeSidePress.options.selectedIndex].value;
  modalOption.shtulpBlock = refs.shtulpBlockInModal.querySelector(
    '[name="shtulp-radio"]:checked',
  ).value;
  if (modalOption.typeOfOpening === undefined) {
    modalOption.typeOfOpening = 'type-1';
  }
}
