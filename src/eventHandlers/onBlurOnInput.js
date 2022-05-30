import { setStatusOfSumbitButton } from '../valadateData/setStatusOfSumbitButton';
import { resetValidStatusOfClasses } from '../valadateData/resetValidStatusOfClasses';
import { setStatusOfOptionButton } from '../valadateData/setStatusOfOptionButton';

export function onBlurOnInput(event) {
  const inputRef = event.target;
  // перевстановлюєм валідацію класів для всіх полів
  resetValidStatusOfClasses([inputRef]);

  setStatusOfOptionButton(event);

  inputRef.removeEventListener('blur', onBlurOnInput);
  setStatusOfSumbitButton();
}
