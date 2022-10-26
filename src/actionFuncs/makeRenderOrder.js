import axios from 'axios';
import { clientPercentage } from '../const';
import { makeTotalOrderValue } from '../calcFuncs/getTotalOrderValue';
import { commerceStatistic, numberAfterDecimalPoint } from '../const';
import { refs } from '../refs';
import { createNormalOrderTable } from './createNormalOrderTable';
import { sortOrder } from './sortOrder';

export function makeRenderOrder(order) {
  const screenExtansion = window.screen.availWidth;
  let markup = '';

  markup = createNormalOrderTable(sortOrder(order));

  const tableRef = document.querySelector('table');
  if (tableRef) tableRef.remove();

  refs.table = document.createElement('table');
  refs.table.innerHTML = markup;
  refs.tableContainerRef.insertAdjacentElement('afterbegin', refs.table);
  refs.tableContainerRef.classList.remove('hidden');
  refs.newOrderButtonRef.classList.remove('hidden');

  // analitics
  if (commerceStatistic) {
    const priceOfOrder = makeTotalOrderValue(order).toFixed(
      numberAfterDecimalPoint,
    );
    const date = new Date();
    axios.post('https://630f7dfe498924524a8f5834.mockapi.io/statistic', {
      priceOfOrder,
      date,
      tradeMargin: clientPercentage.tradeMargin,
    });
  }
}
