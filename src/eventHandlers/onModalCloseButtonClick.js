import { refs } from '../refs';

export function onModalCloseButtonClick() {
  refs.modalBlock.classList.add('hidden');
  refs.bodyRef.classList.remove('modal-open');
}
