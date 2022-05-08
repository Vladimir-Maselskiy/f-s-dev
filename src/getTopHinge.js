import { maco } from '../maco.json';
import { addArticleToOrderList } from './addArticleToOrderList';

export function getTopHinge() {
  addArticleToOrderList(maco.find(element => element.article === 52480));
  addArticleToOrderList(maco.find(element => element.article === 52486));
  addArticleToOrderList(maco.find(element => element.article === 94491));
}
