import { decrementValue } from '../counterValue/decrementValue';
import { incrementValue } from '../counterValue/incrementValue';

export function onClickbyForm(event) {
  if (event.target.dataset.action === 'decrement' || event.target.dataset.action === 'increment') {
    const currentFormRef = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;

    const spanRef = currentFormRef.querySelector('.counter-value');

    if (event.target.dataset.action === 'decrement') {
      decrementValue(spanRef);
    }

    if (event.target.dataset.action === 'increment') {
      incrementValue(spanRef);
    }

    return;
  }
}
