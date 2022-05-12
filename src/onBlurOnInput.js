import { setStatusOfSumbitButton } from './valadateData/setStatusOfSumbitButton';

import { resetValidStatusOfClasses } from './valadateData/resetValidStatusOfClasses';

export function onBlurOnInput(event) {
  const inputRef = event.target;

  resetValidStatusOfClasses([inputRef]);

  inputRef.removeEventListener('blur', onBlurOnInput);
  setStatusOfSumbitButton();
}
