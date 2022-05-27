import { findModalOptionObjectByID } from '../../calcFuncs/findModalOptionObjectByID';

export function setStartDataOfSelect(id) {
  const obj = findModalOptionObjectByID(id);
  console.log(obj);
  //   if (obj.typeOfOpening) {
  //     refs.typeOfOpening = obj.hanleDistance;
  //   } else {
  //     refs.handleDistanceInModal.placeholder =
  //       Number(document.querySelector(`.form-group[data-form="${id}"] [data-input="height"]`).value) /
  //       2;
  //   }
}
