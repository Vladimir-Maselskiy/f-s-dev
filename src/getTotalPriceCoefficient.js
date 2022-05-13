import { clientPercentage } from './const';
import { getCurrentRate } from './getCurrentRate';

export function getTotalPriceCoefficient() {
  return (
    ((100 - clientPercentage.deilleDiscount) *
      (100 + clientPercentage.tradeMargin) *
      getCurrentRate()) /
    10000
  );
}
