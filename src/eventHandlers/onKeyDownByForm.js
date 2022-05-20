import { refs } from '../refs';

export function onKeyDownByForm(event) {
  if (event.keyCode === 13) {
    if (event.target.dataset.input === 'width') {
      event.currentTarget.querySelector('[data-input="height"]').focus();
      event.target.blur();
    }
    if (event.target.dataset.input === 'height') {
      event.target.blur();
    }
  }
}
