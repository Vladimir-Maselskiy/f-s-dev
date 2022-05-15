import { makeModalOptionObject } from '../actionFuncs/makeModalOptionObject';
import { refs } from '../refs';

export function onCloseModalButton() {
  makeModalOptionObject();
  refs.modalBlock.classList.add('is-hidden');
}
