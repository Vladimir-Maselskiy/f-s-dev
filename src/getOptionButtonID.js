import { refs } from './refs';

export let singleOrgderID = 1;

export function getOptionButtonID(event) {
  return Number(event.target.parentNode.parentNode.parentNode.dataset.form);
}
