import { decrementValue } from '../counterValue/decrementValue';
import { incrementValue } from '../counterValue/incrementValue';

export function onClickbyForm(event) {
  const parentNode = event.target.parentNode;
  const spanRef = parentNode.querySelector('span');

  if (event.target.dataset.action === 'decrement') {
    decrementValue(spanRef);
  }

  if (event.target.dataset.action === 'increment') {
    incrementValue(spanRef);
  }
}
