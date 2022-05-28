import { modalObjectActionOnOpenModal } from '../actionFuncs/modal/modalObjectActionOnOpenModal';
import { showTypeOpeningModal } from '../actionFuncs/modalTypeOfOpening/showTypeOpeningModal';

import { getCurrentIDByOptionButtonClick } from '../calcFuncs/getCurrentIDByOptionButtonClick';
import { getCurrentTypeOfOpening } from '../calcFuncs/getCurrentTypeOfOpening';

export let openedTypeOfOpeningModalID = null;
export let currentTypeOfOpening = null;

export function onTypeOfOpeningButtonClick(event) {
  const currentID = getCurrentIDByOptionButtonClick(event);
  openedTypeOfOpeningModalID = currentID;

  // створюєм обєкт опцій по id  якщо його немає
  modalObjectActionOnOpenModal(currentID);

  //   отримуєм актуальний тип відкриття по id
  const currentTypeOfOpening = getCurrentTypeOfOpening(currentID);

  showTypeOpeningModal(currentID);
}
