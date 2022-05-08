import { maco } from '../maco.json';
import { addArticleToOrderList } from './addArticleToOrderList';

export function getStrikeplates() {
  const strikePlates = maco.find(element => element.article === 34824);
  strikePlates.quantity = 5;
  addArticleToOrderList(strikePlates);
}
