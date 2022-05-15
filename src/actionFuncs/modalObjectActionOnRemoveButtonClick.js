import { modalOptions, modalOptionsDeleteObject } from '../variables/variables';

export function modalObjectActionOnRemoveButtonClick(Id) {
  const obj = modalOptions.find(modalOption => modalOption.id === Id);
  if (obj) {
    modalOptionsDeleteObject(obj);
  }
  console.log(modalOptions);
}
