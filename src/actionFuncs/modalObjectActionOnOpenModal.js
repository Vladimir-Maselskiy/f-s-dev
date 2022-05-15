import { modalOptions, modalOptionsPushID } from '../variables/variables';

export function modalObjectActionOnOpenModal(id) {
  if (!modalOptions.find(modalOption => modalOption.id === id)) {
    modalOptionsPushID(id);
  }
  console.log(modalOptions);
}
