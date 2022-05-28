import { onSubmitTypeofOpeningModal } from '../../eventHandlers/onSubmitTypeofOpeningModal';
import { refs } from '../../refs';
import { setStartDataOfSelect } from './setStartDataOfSelect';

export function showTypeOpeningModal(currentID) {
  // refs.typeOfOpeningModalFormRef.reset();
  setStartDataOfSelect(currentID);

  refs.typeofOpeningModalBlock.classList.remove('hidden');
  refs.typeOfOpeningModalFormRef.addEventListener('submit', onSubmitTypeofOpeningModal);

  //   refs.handleDistanceInModal.addEventListener('focus', onFocusOnHandleDistanceInModal);
  //   refs.handleDistanceInModal.addEventListener('input', onInputOnHandleDistanceInModal);
  //   refs.handleDistanceInModal.addEventListener('change', onChangeOnHandleDistanceInModal);
  //   refs.handleDistanceInModal.addEventListener('blur', onBlurOnHandleDistanceInModal);
  //   refs.typeOfOpening.addEventListener('change', onSelectTypeOfOpeningInModal);
}
