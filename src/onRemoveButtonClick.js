import { refs } from './refs';

export function onRemoveButtonClick() {
  refs.formGroup.lastChild.remove();
}
