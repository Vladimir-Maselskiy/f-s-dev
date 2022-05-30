import { findModalOptionObjectByID } from '../../calcFuncs/findModalOptionObjectByID';
import { onBlurOnHandleDistanceInModal } from '../../eventHandlers/onBlurOnHandleDistanceInModal';
import { onChangeOnHandleDistanceInModal } from '../../eventHandlers/onChangeOnHandleDistanceInModal';
import { onChangeshtulpBlockInModal } from '../../eventHandlers/onChangeshtulpBlockInModal';
import { onChangetIsTurnTiltGetriebeInModal } from '../../eventHandlers/onChangetIsTurnTiltGetriebeInModal';
import { onFocusOnHandleDistanceInModal } from '../../eventHandlers/onFocusOnHandleDistanceInModal';
import { onInputOnHandleDistanceInModal } from '../../eventHandlers/onInputOnHandleDistanceInModal';
import { onSelectTypeOfOpeningInModal } from '../../eventHandlers/onSelectTypeOfOpeningInModal';
import { refs } from '../../refs';
import { resetOptionsOfCurrentComplectByType } from '../resetOptionsOfCurrentComplectByType';
import { setStartDataOfModalOptions } from './setStartDataOfModalOptions';
import { setWidthAndHeightInModal } from './setWidthAndHeightInModal';

export function showModal(currentID) {
  const options = findModalOptionObjectByID(currentID);
  resetOptionsOfCurrentComplectByType(options.typeOfOpening);
  refs.modalFormRef.reset();
  refs.modalBlock.classList.remove('hidden');
  setWidthAndHeightInModal(currentID);
  setStartDataOfModalOptions(currentID);

  refs.handleDistanceInModal.addEventListener('focus', onFocusOnHandleDistanceInModal);
  refs.handleDistanceInModal.addEventListener('input', onInputOnHandleDistanceInModal);
  refs.handleDistanceInModal.addEventListener('change', onChangeOnHandleDistanceInModal);
  refs.handleDistanceInModal.addEventListener('blur', onBlurOnHandleDistanceInModal);
  refs.typeOfOpening.addEventListener('change', onSelectTypeOfOpeningInModal);
  refs.isTurnTiltGetriebeInModal.addEventListener('change', onChangetIsTurnTiltGetriebeInModal);
  refs.shtulpBlockInModal.addEventListener('change', onChangeshtulpBlockInModal);
}
