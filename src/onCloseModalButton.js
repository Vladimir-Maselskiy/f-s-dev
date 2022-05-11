import { refs } from './refs';

export function onCloseModalButton() {
  refs.modalBlock.classList.add('is-hidden');
}
