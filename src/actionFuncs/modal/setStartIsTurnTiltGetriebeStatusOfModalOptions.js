import { findModalOptionObjectByID } from '../../calcFuncs/findModalOptionObjectByID';
import { refs } from '../../refs';

export function setStartIsTurnTiltGetriebeStatusOfModalOptions(id) {
  const option = findModalOptionObjectByID(id);

  if (refs.widthInModalInput.value > 800 && option.typeOfOpening === 'type-2') {
    refs.isTurnTiltGetriebeInModal.checked = true;
    refs.isTurnTiltGetriebeInModal.disabled = 'disabled';
    refs.isTurnTiltGetriebeInModal.parentNode.classList.add('disabled-text-gray');
    return;
  }

  if (!(option.isTurnTiltGetriebe === undefined)) {
    refs.isTurnTiltGetriebeInModal.checked = option.isTurnTiltGetriebe;
    return;
  }

  refs.isTurnTiltGetriebeInModal.checked = false;
}
