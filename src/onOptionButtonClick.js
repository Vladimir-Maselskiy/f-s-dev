import { showModal } from './showModal';
import { getSetIDByOptionButton } from './getSetDByOptionButton';

export function onOptionButtonClick(event) {
  const setIDByOptionButton = getSetIDByOptionButton();
  showModal();
}
