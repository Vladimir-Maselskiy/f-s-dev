import { currentTypeOfOpening } from '../../eventHandlers/onTypeOfOpeningButtonClick';

export function getIsTypeOfOpeningChanged(event) {
  const currentSelectIsChanged =
    event.target[0].options[event.target[0].options.selectedIndex].value;
  const isTypeOfOpeningChanged = currentSelectIsChanged !== currentTypeOfOpening;
  return isTypeOfOpeningChanged;
}
