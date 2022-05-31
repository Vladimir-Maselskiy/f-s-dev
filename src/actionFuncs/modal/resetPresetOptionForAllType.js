import { findModalOptionObjectByID } from '../../calcFuncs/findModalOptionObjectByID';
import { refs } from '../../refs';
import { setStartDataOfModalOptions } from './setStartDataOfModalOptions';
import { setWidthAndHeightInModal } from './setWidthAndHeightInModal';

export function resetPresetOptionForAllType(id) {
  setWidthAndHeightInModal(id);
  setStartDataOfModalOptions(id);

  const options = findModalOptionObjectByID(id);

  if (options.typeOfOpening === 'type-2') {
    options.gorizontalLock = refs.gorizontalLock.checked;
    options.isTurnTiltGetriebe = refs.isTurnTiltGetriebeInModal.checked;
    options.hingeSidePress = refs.hingeSidePress.querySelector('option:checked').value;
  }
  if (options.typeOfOpening === 'type-5') {
    options.shtulpBlock = refs.shtulpBlockInModal.querySelector(
      '[name="shtulp-radio"]:checked',
    ).value;
    console.log(options.shtulpBlock);
    // options.isTurnTiltGetriebe = refs.isTurnTiltGetriebeInModal.checked;
    // options.hingeSidePress = refs.hingeSidePress.querySelector('option:checked').value;
  }
}
