import { refs } from './refs';

export function getCurrentRate() {
  return Number(refs.currencyRate.value);
}
