import { addArticleToOrderList } from '../actionFuncs/addArticleToOrderList';
import { findElementsByArticle } from './findElementsByArticle';

export function getTopDecor() {
  addArticleToOrderList(findElementsByArticle(42083, 42084), 13);
}
