import { makeModalOptionObjectOnCloseModal } from '../actionFuncs/makeModalOptionObjectOnCloseModal';
import { refs } from '../refs';
import { openedModalID } from './onOptionButtonClick';

export function onSubmitModalButton(event) {
  event.preventDefault();
  makeModalOptionObjectOnCloseModal(openedModalID);
  refs.modalBlock.classList.add('hidden');
  refs.bodyRef.classList.remove('modal-open');
  // setTimeout(() => {
  //   refs.modalFormRef.reset();
  // }, 250);
}
