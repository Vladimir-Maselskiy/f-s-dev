import { maco } from '../maco.json';
import { addArticleToOrderList } from './addArticleToOrderList';

export function getMicroliftPlate() {
  addArticleToOrderList(maco.find(element => element.article === 356967));
}
