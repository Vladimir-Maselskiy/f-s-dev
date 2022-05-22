import { makeTotalOrderValue } from '../calcFuncs/getTotalOrderValue';
import { getTotalPriceCoefficient } from '../calcFuncs/getTotalPriceCoefficient';
import { numberAfterDecimalPoint } from '../const';

let i = 1;

export function createNormalOrderTable(order) {
  let markup = `
  <thead>
    <tr>
      <th>Поз.</th>
      <th>Артикул</th>
      <th class="hidden-before-678px">Назва</th>
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
      <td class="hidden-before-678px">${name}</td>
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
      <td colspan="6" class ="total-value">Разом: ${makeTotalOrderValue(order).toFixed(
        numberAfterDecimalPoint,
      )}</td>
    </tr>
  </tfoot>
  `;
  markup += valueOfOrderMarkup + `</tbody>`;

  i = 1;

  return markup;
}
