import { addArticleToOrderList } from '../actionFuncs/addArticleToOrderList';
import { maco } from '../../maco.json';

export function findElementsByArticle(...articles) {
  if (articles.length === 1) {
    return [maco.find(element => element.article === articles[0])];
  }

  return maco.filter(element => articles.includes(element.article));
}
