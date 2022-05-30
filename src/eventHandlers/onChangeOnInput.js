import { modalObjectActionOnOpenModal } from '../actionFuncs/modal/modalObjectActionOnOpenModal';
import { resetPresetOptionForAllType } from '../actionFuncs/modal/resetPresetOptionForAllType';
import { getCurrentIDByInputBlur } from '../calcFuncs/getCurrentIDByInputBlur';
import { resetValidStatusOfClasses } from '../valadateData/resetValidStatusOfClasses';

export function onChangeOnInput(event) {
  const id = getCurrentIDByInputBlur(event);

  // створюєм обєкт опцій по id  якщо його немає
  modalObjectActionOnOpenModal(id);
  // перевстановлюм пресети в модальному вікні для всіх типів відкриття
  resetPresetOptionForAllType(id);
}
