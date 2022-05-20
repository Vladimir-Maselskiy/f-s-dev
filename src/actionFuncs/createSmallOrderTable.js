import { makeTotalOrderValue } from '../calcFuncs/getTotalOrderValue';
import { getTotalPriceCoefficient } from '../calcFuncs/getTotalPriceCoefficient';
import { numberAfterDecimalPoint } from '../const';

let i = 1;

export function createSmallOrderTable(order) {
  let markup = `
  <thead>
    <tr>
      <th>Поз.</th>
      <th>Артикул</th>
      <th>К-сть</th>
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
      <td colspan="4" class ="total-value">Разом:</td>
      <td >${makeTotalOrderValue(order).toFixed(numberAfterDecimalPoint)}</td>
    </tr>
    </tfoot>
  `;
  markup += valueOfOrderMarkup + `</tbody>`;
  i = 1;

  return markup;
}
