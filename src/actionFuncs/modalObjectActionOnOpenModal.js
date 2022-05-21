import { refs } from '../refs';
import { modalOptions, modalOptionsPushID } from '../variables/variables';

export function modalObjectActionOnOpenModal(id) {
  refs.bodyRef.classList.add('modal-open');
  if (!modalOptions.find(modalOption => modalOption.id === id)) {
    modalOptionsPushID(id);
  }
}
