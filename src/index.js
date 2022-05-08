import './sass/main.scss';
import { refs } from './refs';
import { makeOrderSet } from './makeOrderSet.js';

refs.form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  makeOrderSet();
}
