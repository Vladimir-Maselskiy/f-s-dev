import { maco } from '../maco.json';
import { addArticleToOrderList } from './addArticleToOrderList';

export function getBottomDecor() {
  addArticleToOrderList(maco.find(element => element.article === 42087));
  addArticleToOrderList(maco.find(element => element.article === 41742));
  addArticleToOrderList(maco.find(element => element.article === 41743));
}
