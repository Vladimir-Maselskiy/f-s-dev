import { makeModalOptionObjectOnCloseModal } from '../actionFuncs/makeModalOptionObjectOnCloseModal';
import { refs } from '../refs';
import { modalOptions } from '../variables/variables';
import { openedModalID } from './onOptionButtonClick';

export function onSubmitModalButton(event) {
  event.preventDefault();
  makeModalOptionObjectOnCloseModal(openedModalID);
  refs.modalBlock.classList.add('is-hidden');
  refs.bodyRef.classList.remove('modal-open');
}
