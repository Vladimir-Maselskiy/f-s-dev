import { refs } from './refs';

export function makeRenderOrder(order) {
  let markup = `
  <thead>
    <tr>
      <th>Артикул</th>
      <th>Назва</th>
      <th>Кількість</th>
      <th>Ціна</th>
    </tr>
  </thead>
  <tbody>
  `;
  order.forEach(element => {
    const tableRow = `
    <tr>
      <td>${element.article}</td>
      <td>${element.name}</td>
      <td>${element.quantity}</td>
      <td>${element.price}</td>
    </tr>
    `;
    markup += tableRow;
  });
  markup += `</tbody>`;

  refs.table = document.createElement('table');
  refs.table.innerHTML = markup;
  refs.form.insertAdjacentElement('afterend', refs.table);
}
