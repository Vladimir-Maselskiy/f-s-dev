import { resetValidStatusOfClasses } from './resetValidStatusOfClasses';

export function validateFormInputFields(formInputRefs) {
  resetValidStatusOfClasses([...formInputRefs]);
  if ([...formInputRefs].every(elementRef => elementRef.classList.contains('valid'))) {
    return true;
  }

  return false;
}
