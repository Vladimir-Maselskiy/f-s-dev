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
    </tr>
  </thead>
  <tbody>
  `;
  order.forEach(element => {
    const tableRow = `
    <tr>
      <td>${i}</td>
      <td>${element.article}</td>
      <td>${element.name}</td>
      <td>${element.quantity}</td>
      <td>${element.price}</td>
    </tr>
    `;
    markup += tableRow;
    i += 1;
  });
  markup += `</tbody>`;
  i = 1;

  refs.table = document.createElement('table');
  refs.table.innerHTML = markup;
  refs.form.insertAdjacentElement('afterend', refs.table);
}
