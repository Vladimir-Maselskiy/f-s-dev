import { refs } from '../refs';

// тимчасово повертаем id останнього елемента
export function getCurrentIDByRemoveButtonClick(event) {
  // const arrayOfForms = refs.form.querySelectorAll('.form-group');
  // const formLength = refs.form.querySelectorAll('.form-group').length;
  // const lastID = Number(arrayOfForms[formLength - 1].dataset.form);
  // console.log('RemoveID', lastID);
  return Number(event.currentTarget.parentNode.parentNode.dataset.form);
  // Number(lastID);
}
