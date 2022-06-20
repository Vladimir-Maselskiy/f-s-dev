import { refs } from '../refs';

// тимчасово повертаем id останнього елемента
export function getCurrentIDByRemoveButtonClick(event) {
  return Number(event.currentTarget.parentNode.parentNode.dataset.form);
}
