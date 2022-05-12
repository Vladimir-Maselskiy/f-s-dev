import { refs } from '../refs';

export function setStatusOfSumbitButton() {
  const allInputFieldsRef = document.querySelectorAll('.size-input');

  if ([...allInputFieldsRef].every(elementRef => elementRef.classList.contains('valid'))) {
    refs.submitButton.removeAttribute('disabled');
    return true;
  }

  refs.submitButton.setAttribute('disabled', 'disabled');
  return false;
}

// ----------------------//
