import { modalOptions } from '../variables/variables';

export function findModalOptionObjectByID(id) {
  return modalOptions.find(modalOption => modalOption.id === id);
}
