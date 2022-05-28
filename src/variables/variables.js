export const modalOptions = [];

export function addModalOption(option) {
  modalOptions.push(option);
}

export function modalOptionsPushID(id) {
  modalOptions.push({ id, typeOfOpening: 'type-1' });
}

export function modalOptionsDeleteObject(obj) {
  modalOptions.splice(modalOptions.indexOf(obj), 1);
}
