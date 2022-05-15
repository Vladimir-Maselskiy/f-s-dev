import { makeModalOptionObjectOnCloseModal } from '../actionFuncs/makeModalOptionObjectOnCloseModal';
import { refs } from '../refs';
import { modalOptions } from '../variables/variables';
import { openedModalID } from './onOptionButtonClick';

export function onCloseModalButton() {
  makeModalOptionObjectOnCloseModal(openedModalID);
  console.log(modalOptions);
  refs.modalBlock.classList.add('is-hidden');
}
