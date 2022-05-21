import { refs } from '../refs';
import { createNormalOrderTable } from './createNormalOrderTable';

export function makeRenderOrder(order) {
  const screenExtansion = window.screen.availWidth;
  let markup = '';

  markup = createNormalOrderTable(order);

  const tableRef = document.querySelector('table');
  if (tableRef) tableRef.remove();

  refs.table = document.createElement('table');
  refs.table.innerHTML = markup;
  refs.tableContainerRef.insertAdjacentElement('afterbegin', refs.table);
  refs.tableContainerRef.classList.remove('hidden');
  refs.newOrderButtonRef.classList.remove('hidden');
}
