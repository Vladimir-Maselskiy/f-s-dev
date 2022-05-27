import { makeTypeOfOpeningModalOptionObjectOnCloseModal } from '../actionFuncs/modalTypeOfOpening/makeTypeOfOpeningModalOptionObjectOnCloseModal';
import { refs } from '../refs';
import { openedTypeOfOpeningModalID } from './onTypeOfOpeningButtonClick';

export function onSubmitTypeofOpeningModal(event) {
  makeTypeOfOpeningModalOptionObjectOnCloseModal(event, openedTypeOfOpeningModalID);
  refs.typeofOpeningModalBlock.classList.add('hidden');
}
