import { findModalOptionObjectByID } from '../../calcFuncs/findModalOptionObjectByID';
import { refs } from '../../refs';

export function setStartDataOfSelect(id) {
  const obj = findModalOptionObjectByID(id);
  console.log(refs.selectBlockTypeOfOpening);
  console.log(obj);
  const selectOptionsRef = refs.selectBlockTypeOfOpening.querySelectorAll('option');

  selectOptionsRef.forEach(option => {
    option.removeAttribute('selected');
  });

  const selectedREf = refs.selectBlockTypeOfOpening.querySelector(`[value="${obj.typeOfOpening}"]`);
  const indexOfSelectOption = Array.from(selectOptionsRef).indexOf(selectedREf);
  refs.selectBlockTypeOfOpening.selectedIndex = indexOfSelectOption;
  selectedREf.setAttribute('selected', 'selected');
}
