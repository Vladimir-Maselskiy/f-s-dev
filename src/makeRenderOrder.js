import { numberAfterDecimalPoint } from './const';
import { getTotalPriceCoefficient } from './getTotalPriceCoefficient';
import { makeTotalOrderValue } from './makeTotalOrderValue';
import { refs } from './refs';

let i = 1;

export function makeRenderOrder(order) {
  let markup = `
  <thead>
    <tr>
      <th>Поз.</th>
      <th>Артикул</th>
      <th>Назва</th>
      <th>Кількість</th>
      <th>Ціна</th>
      <th>Сума</th>
    </tr>
  </thead>
  <tbody>
  `;
  order.forEach(element => {
    const { article, name, quantity, price } = element;
    const tableRow = `
    <tr>
      <td>${i}</td>
      <td>${article}</td>
      <td>${name}</td>
      <td>${quantity}</td>
      
      <td>${(price * getTotalPriceCoefficient()).toFixed(numberAfterDecimalPoint)}</td>
      <td>${(price * quantity * getTotalPriceCoefficient()).toFixed(numberAfterDecimalPoint)}</td>
    </tr>
    `;
    markup += tableRow;
    i += 1;
  });
  const valueOfOrderMarkup = `
  <tfoot>
  <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>Разом:</td>
      <td>${makeTotalOrderValue(order).toFixed(numberAfterDecimalPoint)}</td>
    </tr>
    </tfoot>
  `;

  markup += valueOfOrderMarkup + `</tbody>`;
  i = 1;

  const tableRef = document.querySelector('table');
  if (tableRef) tableRef.remove();

  refs.table = document.createElement('table');
  refs.table.innerHTML = markup;
  refs.form.insertAdjacentElement('afterend', refs.table);
}
