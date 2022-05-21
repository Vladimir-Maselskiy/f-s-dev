import { numberAfterDecimalPoint } from '../const';
import { getTotalPriceCoefficient } from '../calcFuncs/getTotalPriceCoefficient';
import { makeTotalOrderValue } from '../calcFuncs/getTotalOrderValue';
import { refs } from '../refs';
import { createSmallOrderTable } from './createSmallOrderTable';
import { createNormalOrderTable } from './createNormalOrderTable';

export function makeRenderOrder(order) {
  const screenExtansion = window.screen.availWidth;
  let markup = '';
  // if (screenExtansion < 768) {
  //   markup = createSmallOrderTable(order);
  // }

  if (screenExtansion >= 320) {
    markup = createNormalOrderTable(order);
  }

  const tableRef = document.querySelector('table');
  if (tableRef) tableRef.remove();

  refs.table = document.createElement('table');
  refs.table.innerHTML = markup;
  refs.tableContainerRef.insertAdjacentElement('afterbegin', refs.table);
  refs.tableContainerRef.classList.remove('hidden');
}
