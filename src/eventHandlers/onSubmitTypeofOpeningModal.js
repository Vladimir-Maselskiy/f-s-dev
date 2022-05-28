import { makeTypeOfOpeningModalOptionObjectOnCloseModal } from '../actionFuncs/modalTypeOfOpening/makeTypeOfOpeningModalOptionObjectOnCloseModal';
import { refs } from '../refs';
import { openedTypeOfOpeningModalID } from './onTypeOfOpeningButtonClick';

export function onSubmitTypeofOpeningModal(event) {
  event.preventDefault();
  makeTypeOfOpeningModalOptionObjectOnCloseModal(event, openedTypeOfOpeningModalID);
  refs.typeofOpeningModalBlock.classList.add('hidden');
}
