import { maco } from '../maco.json';
import { addArticleToOrderList } from './addArticleToOrderList';

export function getTurningSlantedPlate() {
  addArticleToOrderList(maco.find(element => element.article === 33460));
}
