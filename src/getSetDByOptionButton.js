import { refs } from './refs';

export let singleOrgderID = 1;

export function getSetIDByOptionButton() {
  return refs.formGroup.children.length;
}
