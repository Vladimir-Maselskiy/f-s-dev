import { addArticleToOrderList } from '../actionFuncs/addArticleToOrderList';
import { maco } from '../../maco.json';

export function findElementsByArticle(...articles) {
  if (articles.length === 1) {
    return [maco.find(element => element.article === articles[0])];
  }

  const articleArray = [];
  articles.forEach(article => articleArray.push(maco.find(element => element.article === article)));
  return articleArray;
}
