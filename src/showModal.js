import { refs } from './refs';
import { onCloseModalButton } from './onCloseModalButton';

export function showModal(idOfSingleOrder) {
  refs.modalBlock.classList.remove('is-hidden');
  refs.closeModalButton.addEventListener('click', onCloseModalButton);
}
