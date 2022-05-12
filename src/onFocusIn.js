import { onBlurOnInput } from './onBlurOnInput';

export function onFocusIn(event) {
  if (event.target.dataset.input === 'width' || event.target.dataset.input === 'height') {
    event.target.addEventListener('blur', onBlurOnInput);
  }
}
