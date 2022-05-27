import { modalObjectActionOnOpenModal } from '../actionFuncs/modal/modalObjectActionOnOpenModal';
import { showTypeOpeningModal } from '../actionFuncs/showTypeOpeningModal';
import { getCurrentIDByOptionButtonClick } from '../calcFuncs/getCurrentIDByOptionButtonClick';

export let openedTypeOfOpeningModalID = null;

export function onTypeOfOpeningButtonClick(event) {
  const currentID = getCurrentIDByOptionButtonClick(event);
  openedTypeOfOpeningModalID = currentID;

  // створюєм обєкт опцій по id  якщо його немає
  modalObjectActionOnOpenModal(currentID);

  showTypeOpeningModal(currentID);
}
