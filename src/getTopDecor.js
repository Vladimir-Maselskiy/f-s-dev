import { maco } from '../maco.json';
import { addArticleToOrderList } from './addArticleToOrderList';

export function getTopDecor() {
  addArticleToOrderList(maco.find(element => element.article === 42083));
  addArticleToOrderList(maco.find(element => element.article === 42084));
}
