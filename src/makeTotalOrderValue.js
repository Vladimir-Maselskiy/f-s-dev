import { getTotalPriceCoefficient } from './getTotalPriceCoefficient';

export function makeTotalOrderValue(order) {
  return order.reduce((acc, element) => {
    const { quantity, price } = element;
    return acc + quantity * price * getTotalPriceCoefficient();
  }, 0);
}
